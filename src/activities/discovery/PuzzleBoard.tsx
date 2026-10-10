import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MotionTurn } from "../../components/MotionTurn";
import { movement } from "../../styles/movement";
import { balancePose } from "../../pedagogy/balance";
import {
  RotateCw,
  Undo2,
  KeyRound,
  DoorOpen,
  Check,
  ArrowRight,
} from "lucide-react";
import type { Puzzle, Token } from "../../content/puzzles";
import {
  useSessionValue,
  isPlaces,
  isCount,
  useMissionSession,
} from "../../world/progression/session";
import {
  slotsValid,
  routeValid,
  routeHint,
  adjacent,
  blockCells,
  tileFits,
  tilingValid,
  solveTiling,
  solveSlots,
  sameToken,
  type TilePlacement,
} from "../../pedagogy/puzzles";
import { TokenArt, tokenLabel } from "../../components/TokenArt";
import { Manipulative } from "../../components/Manipulative";
import { Lumi } from "../../components/Art";
import { Dots } from "../adventure/Objects";
type Props = {
  puzzle: Puzzle;
  hint: number;
  onAttempt: () => void;
  onMiss: () => void;
  onComplete: (solutions: string[]) => void;
};
export function PuzzleBoard(props: Props) {
  if (props.puzzle.kind === "route")
    return <RouteBoard {...props} puzzle={props.puzzle} />;
  if (props.puzzle.kind === "tiling")
    return <TilingBoard {...props} puzzle={props.puzzle} />;
  return <ObjectBoard {...props} puzzle={props.puzzle} />;
}
function ObjectBoard({
  puzzle: original,
  hint,
  onAttempt,
  onMiss,
  onComplete,
}: Props & { puzzle: Exclude<Puzzle, { kind: "route" | "tiling" }> }) {
  const session = useMissionSession();
  const reclassify = original.kind === "sort" && !!original.firstRule;
  const [phase, setPhase] = useSessionValue(
    "sort-phase",
    () =>
      reclassify && Array.isArray(session.values["puzzle-values"]) ? 1 : 0,
    (v) => v === 0 || v === 1,
  );
  const p =
    original.kind === "sort" && original.firstRule && phase === 0
      ? { ...original, ...original.firstRule }
      : original;
  const reducedMotion = useReducedMotion();
  const count =
    p.kind === "ribbon"
      ? p.initial.length
      : p.kind === "assembly"
        ? p.targets.length
        : p.kind === "mirror"
          ? p.left.length
          : p.kind === "latin"
            ? p.size * p.size
            : p.tokens.length;
  const initial = () =>
    p.kind === "ribbon" || p.kind === "latin"
      ? [...p.initial]
      : p.kind === "rotation"
        ? [...p.initial]
        : Array(count).fill(null);
  const [values, setValues] = useSessionValue<(number | null)[]>(
    "puzzle-values",
    initial,
    (v) => isPlaces(v, count, p.kind === "rotation" ? 3 : p.tokens.length - 1),
  );
  const [selected, setSelected] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const hintSolution = hint >= 2 ? solveSlots(p) : null;
  function commit(next: (number | null)[]) {
    setValues(next);
    setMessage("");
    if (!reclassify && slotsValid(p, next)) onComplete([next.join(",")]);
  }
  function check() {
    onAttempt();
    if (slotsValid(p, values)) {
      if (reclassify && phase === 0) {
        setPhase(1);
        setSelected(null);
        setMessage("Sekarang kelompokkan daun dan jamur menurut jenisnya.");
      } else onComplete([values.join(",")]);
    } else {
      onMiss();
      setMessage(
        p.kind === "latin"
          ? "Periksa bentuk pada setiap baris dan kolom."
          : p.kind === "order"
            ? "Periksa urutan bentuk pada setiap petunjuk."
            : p.kind === "balance"
              ? p.kind === "balance" && p.target === undefined
                ? "Pindahkan bintang agar timbangan seimbang."
                : "Bandingkan titik di rak kiri dengan contoh."
              : p.kind === "ribbon"
                ? "Bandingkan bagian yang berulang."
                : "Bandingkan susunan dengan gambar contoh.",
      );
    }
  }
  function place(id: number, target: string) {
    if (!Number.isInteger(id) || id < 0 || id >= p.tokens.length) return;
    let n = Number(target);
    if (target !== "basket" && !Number.isInteger(n)) return;
    onAttempt();
    const next = [...values];
    if (p.kind === "sort" || p.kind === "balance") {
      if (target === "basket") next[id] = null;
      else if (n >= 0 && n < 2) next[id] = n;
      else return;
    } else {
      if (n < 0 || n >= count) return;
      // A small silhouette (door/window) can cover the hitbox of its parent.
      // Resolve the selected outer shape beneath that inner silhouette.
      if (
        p.kind === "assembly" &&
        !sameToken(p.tokens[id], p.targets[n].token)
      ) {
        const inner = p.targets[n];
        const outer = p.targets.findIndex(
          (t) =>
            sameToken(p.tokens[id], t.token) &&
            inner.x >= t.x - t.w / 2 &&
            inner.x <= t.x + t.w / 2 &&
            inner.y >= t.y - t.h / 2 &&
            inner.y <= t.y + t.h / 2,
        );
        if (outer >= 0) n = outer;
      }
      if (p.kind === "latin" && p.initial[n] !== null) return;
      if (p.kind === "assembly" || p.kind === "order") {
        const old = next.indexOf(id);
        if (old >= 0) next[old] = next[n];
      }
      next[n] = id;
    }
    setSelected(null);
    commit(next);
  }
  const piece = (token: Token, i: number) => (
    <Manipulative
      key={i}
      id={i}
      color="var(--flower-pink)"
      label={`${tokenLabel(token)} ${i + 1}`}
      selected={selected === i}
      onSelect={setSelected}
      onDrop={place}
    >
      <TokenArt token={token} />
    </Manipulative>
  );
  const slot = (i: number, example?: Token, style?: React.CSSProperties) => {
    const fixed = p.kind === "latin" && p.initial[i] !== null;
    return (
      <button
        key={i}
        className={`discovery-slot ${fixed ? "fixed" : ""} ${hint > 0 && values[i] === null ? "hint-glow" : ""}`}
        style={style}
        data-drop={i}
        aria-label={`Tempat ${i + 1}${fixed ? ", contoh tetap" : ""}`}
        onClick={() => {
          if (selected !== null && !fixed) place(selected, String(i));
          else if (values[i] !== null && !fixed) setSelected(values[i]);
        }}
      >
        {values[i] !== null ? (
          <TokenArt token={p.tokens[values[i]!]} fit={p.kind === "assembly"} />
        ) : example ? (
          <TokenArt token={example} shadow fit={p.kind === "assembly"} />
        ) : (
          <span className="slot-mark" aria-hidden="true" />
        )}
        {hintSolution &&
          values[i] === null &&
          hintSolution[i] !== null &&
          p.kind !== "rotation" &&
          p.kind !== "sort" &&
          p.kind !== "balance" && (
            <span className="ghost-token">
              <TokenArt
                token={p.tokens[hintSolution[i]!]}
                fit={p.kind === "assembly"}
              />
            </span>
          )}
      </button>
    );
  };
  const available = p.tokens
    .map((token, i) => ({ token, i }))
    .filter(
      ({ i }) =>
        !(p.kind === "assembly" || p.kind === "order") || !values.includes(i),
    );
  const sums =
    p.kind === "balance"
      ? [0, 1].map((b) =>
          p.tokens.reduce(
            (n, t, i) => n + (values[i] === b ? t.weight || 1 : 0),
            0,
          ),
        )
      : [];
  const weighing = p.kind === "balance" && p.target === undefined;
  const pose = balancePose(sums[0] || 0, sums[1] || 0);
  const spring = reducedMotion ? movement.instant : movement.scale;
  return (
    <div className={`discovery-board puzzle-${p.kind}`}>
      {p.kind === "ribbon" && (
        <>
          {(p.copy || hint >= 1) && (
            <div className="pattern-example" aria-label="Contoh urutan">
              {(p.free
                ? values.slice(0, 2)
                : p.copy
                  ? Array.from(
                      { length: count },
                      (_, i) => p.unit[i % p.unit.length],
                    )
                  : p.unit
              ).map((v, i) => (
                <span key={i}>
                  {v !== null && (
                    <TokenArt token={(p.exampleTokens || p.tokens)[v]} />
                  )}
                </span>
              ))}
            </div>
          )}
          <div className="discovery-ribbon">
            {values.map((_, i) => slot(i))}
          </div>
        </>
      )}
      {p.kind === "assembly" && (
        <div
          className={`assembly-canvas picture-${p.picture}`}
          aria-label="Gambar yang dibangun"
        >
          {p.picture === "boat" && (
            <svg
              className="assembly-setting"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M50 9V70" stroke="var(--color-ink)" strokeWidth="1" />
              <path
                d="M8 96Q18 92 28 96T48 96T68 96T88 96"
                stroke="var(--color-ocean)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          )}
          {p.targets.map((s, i) =>
            slot(i, s.token, {
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.w}%`,
              height: `${s.h}%`,
            }),
          )}
        </div>
      )}
      {p.kind === "order" && (
        <>
          <div className="order-clues" aria-label="Petunjuk urutan">
            {p.before.map(([a, b], i) => (
              <div key={i}>
                <TokenArt token={p.tokens[a]} />
                <ArrowRight aria-label="sebelum" />
                <TokenArt token={p.tokens[b]} />
              </div>
            ))}
          </div>
          <div className="discovery-ribbon">
            {values.map((_, i) => slot(i))}
          </div>
        </>
      )}
      {p.kind === "mirror" && (
        <div className="mirror-strip">
          <div className="discovery-ribbon">
            {p.left.map((v, i) => (
              <span className="mirror-example" key={i}>
                <TokenArt token={p.tokens[v]} />
              </span>
            ))}
          </div>
          <div className="mirror-line" aria-label="Garis cermin" />
          <div className="discovery-ribbon">
            {values.map((_, i) => slot(i))}
          </div>
        </div>
      )}
      {p.kind === "latin" && (
        <div
          className="discovery-grid latin-grid"
          style={{
            gridTemplateColumns: `repeat(${p.size},var(--puzzle-cell))`,
          }}
        >
          {values.map((_, i) => slot(i))}
        </div>
      )}
      {p.kind === "rotation" && (
        <div className="rotation-pieces">
          {p.tokens.map((t, i) => (
            <div key={i}>
              <span className="rotation-example">
                <TokenArt token={{ ...t, turn: p.turns[i] }} shadow />
              </span>
              <button
                className="discovery-slot"
                aria-label={`Putar ${tokenLabel(t)}`}
                onClick={() => {
                  onAttempt();
                  const next = [...values];
                  next[i] = ((next[i] || 0) + 1) % 4;
                  commit(next);
                }}
              >
                <MotionTurn turn={values[i] || 0}>
                  <TokenArt token={{ ...t, turn: 0 }} />
                </MotionTurn>
                <RotateCw />
              </button>
            </div>
          ))}
        </div>
      )}
      {(p.kind === "sort" || p.kind === "balance") && (
        <div className={`discovery-bins ${weighing ? "weighing-scale" : ""}`}>
          {weighing && (
            <>
              <svg
                className="scale-stand"
                preserveAspectRatio="none"
                viewBox="0 0 100 200"
                aria-hidden="true"
              >
                <path
                  d="M50 12L50 180M15 185H85"
                  stroke="var(--color-basket-edge)"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                <circle
                  cx="50"
                  cy="18"
                  r="12"
                  fill="var(--flower-yellow)"
                  stroke="var(--color-ink)"
                  strokeWidth="3"
                />
              </svg>
              <motion.div
                className="scale-beam"
                aria-hidden="true"
                animate={{ rotate: pose.angle }}
                transition={spring}
              />
            </>
          )}
          {[0, 1].map((b) => (
            <motion.div
              key={b}
              animate={{
                y: weighing
                  ? b === 0
                    ? pose.leftOffset
                    : -pose.leftOffset
                  : 0,
              }}
              transition={spring}
              className={`discovery-bin ${hint > 0 ? "hint-glow" : ""}`}
              data-drop={b}
              onClick={(e) => {
                if (
                  selected !== null &&
                  !(e.target as Element).closest(".flower-piece")
                )
                  place(selected, String(b));
              }}
            >
              <button
                className="bin-sign"
                data-drop={b}
                aria-label={`${weighing ? "Piring timbangan" : p.kind === "sort" ? "Keranjang" : "Rak"} ${b === 0 ? "kiri" : "kanan"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (selected !== null) place(selected, String(b));
                }}
              >
                {p.kind === "sort" ? (
                  <TokenArt token={p.bins[b]} />
                ) : (
                  <Dots count={sums[b]} />
                )}
              </button>
              <div className="bin-objects">
                {values.map((v, i) => (v === b ? piece(p.tokens[i], i) : null))}
              </div>
            </motion.div>
          ))}
        </div>
      )}
      {reclassify && p.kind === "sort" && (
        <p className="sort-rule" role="status">
          {phase === 0
            ? "Kelompokkan benda menurut warna keranjang."
            : "Kelompokkan benda menurut jenis pada keranjang."}
        </p>
      )}
      {p.kind === "balance" && (
        <div className="balance-clue">
          {p.target !== undefined ? (
            <>
              <span>Rak kiri</span>
              <Dots count={p.target} />
            </>
          ) : (
            <>
              <span role="status" aria-live="polite">
                {pose.state === "equal"
                  ? "Timbangan seimbang."
                  : pose.state === "left"
                    ? "Sisi kiri lebih berat."
                    : "Sisi kanan lebih berat."}
              </span>
            </>
          )}
        </div>
      )}
      {p.kind !== "rotation" && (
        <div
          className="discovery-palette"
          data-drop="basket"
          aria-label="Benda yang tersedia"
          onClick={(e) => {
            if (
              selected !== null &&
              (p.kind === "sort" || p.kind === "balance") &&
              !(e.target as Element).closest(".flower-piece")
            )
              place(selected, "basket");
          }}
        >
          {p.kind === "sort" || p.kind === "balance"
            ? values.map((v, i) => (v === null ? piece(p.tokens[i], i) : null))
            : available.map(({ token, i }) => piece(token, i))}
        </div>
      )}
      <div className="discovery-feedback">
        <p aria-live="polite">{message}</p>
        <button className="secondary puzzle-check" onClick={check}>
          <Check />{" "}
          {reclassify && phase === 0 ? "Ganti aturan" : "Periksa susunan"}
        </button>
      </div>
    </div>
  );
}
function RouteBoard({
  puzzle: p,
  hint,
  onAttempt,
  onMiss,
  onComplete,
}: Props & { puzzle: Extract<Puzzle, { kind: "route" }> }) {
  const [path, setPath] = useSessionValue<number[]>(
    "route-path",
    [p.start],
    (v) =>
      Array.isArray(v) &&
      v.length > 0 &&
      v[0] === p.start &&
      v.every(
        (x, i) =>
          Number.isInteger(x) &&
          x >= 0 &&
          x < p.cols * p.rows &&
          !p.blocked.includes(x) &&
          (i === 0 || adjacent(v[i - 1], x, p.cols)),
      ),
  );
  const [message, setMessage] = useState("");
  const current = path.at(-1)!;
  const nextHint = hint > 0 ? routeHint(p, path) : undefined;
  function move(cell: number) {
    onAttempt();
    if (p.blocked.includes(cell) || !adjacent(current, cell, p.cols)) {
      onMiss();
      setMessage("Pilih petak kosong di samping Lumi.");
      return;
    }
    const next = [...path, cell];
    setPath(next);
    setMessage("");
    if (routeValid(p, next)) onComplete([next.join(",")]);
    else if (cell === p.goal && p.key !== undefined && !next.includes(p.key))
      setMessage("Ambil kunci dahulu. Pintu belum terbuka.");
  }
  return (
    <div className="discovery-board puzzle-route">
      <div
        className="discovery-grid route-grid"
        style={{ gridTemplateColumns: `repeat(${p.cols},var(--puzzle-cell))` }}
      >
        {Array.from({ length: p.cols * p.rows }, (_, i) => (
          <button
            key={i}
            className={`route-cell ${p.blocked.includes(i) ? "rock-cell" : ""} ${path.includes(i) ? "visited" : ""} ${nextHint === i ? "hint-glow" : ""}`}
            aria-label={`Petak ${i + 1}${p.blocked.includes(i) ? ", batu" : i === p.goal ? ", pintu" : i === p.key ? ", kunci" : ""}`}
            onClick={() => move(i)}
          >
            {i === current ? (
              <Lumi />
            ) : p.blocked.includes(i) ? (
              <svg viewBox="0 0 100 100" aria-hidden="true">
                <path
                  d="M12 85L20 43L49 18L79 34L92 82Z"
                  fill="var(--color-soil-light)"
                  stroke="var(--color-ink)"
                  strokeWidth="3"
                />
              </svg>
            ) : i === p.goal ? (
              <DoorOpen />
            ) : i === p.key ? (
              <KeyRound />
            ) : path.includes(i) ? (
              <span className="footstep" />
            ) : null}
          </button>
        ))}
      </div>
      <div className="route-tools">
        <button
          className="secondary"
          disabled={path.length < 2}
          onClick={() => {
            onAttempt();
            setPath(path.slice(0, -1));
            setMessage("");
          }}
        >
          <Undo2 /> Mundur satu langkah
        </button>
        {p.key !== undefined && (
          <span className={path.includes(p.key) ? "key-collected" : ""}>
            <KeyRound />
            {path.includes(p.key) ? "Kunci sudah dibawa" : "Cari kunci"}
          </span>
        )}
      </div>
      <p className="gentle-message" aria-live="polite">
        {message}
      </p>
    </div>
  );
}
function TilingBoard({
  puzzle: p,
  hint,
  onAttempt,
  onMiss,
  onComplete,
}: Props & { puzzle: Extract<Puzzle, { kind: "tiling" }> }) {
  const [placements, setPlacements] = useSessionValue<TilePlacement[]>(
    "tiles",
    () => Array(p.blocks.length).fill(null),
    (v) =>
      Array.isArray(v) &&
      v.length === p.blocks.length &&
      v.every(
        (x) =>
          x === null ||
          (typeof x === "object" &&
            x &&
            isCount(x.cell) &&
            x.cell < p.cols * p.rows &&
            isCount(x.turn) &&
            x.turn < 4),
      ),
  );
  const [turn, setTurn] = useSessionValue(
    "tile-turn",
    0,
    (v) => isCount(v) && (v as number) < 4,
  );
  const [selected, setSelected] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const solution = hint > 0 ? solveTiling(p, placements) : null;
  function place(id: number, target: string) {
    if (!Number.isInteger(id) || !p.blocks[id]) return;
    const cell = Number(target);
    onAttempt();
    const orientation = selected === id ? turn : placements[id]?.turn || 0;
    if (!tileFits(p, placements, id, cell, orientation)) {
      onMiss();
      setMessage("Balok belum muat. Coba putar atau pindahkan.");
      return;
    }
    const next = [...placements];
    next[id] = { cell, turn: orientation };
    setPlacements(next);
    setSelected(null);
    setMessage("");
    if (tilingValid(p, next))
      onComplete([next.map((v) => `${v!.cell}:${v!.turn}`).join(",")]);
  }
  const owner = (cell: number) =>
    placements.findIndex(
      (v, i) => v && (blockCells(p, i, v.cell, v.turn) || []).includes(cell),
    );
  return (
    <div className="discovery-board puzzle-tiling">
      <div
        className="discovery-grid tile-grid"
        style={{ gridTemplateColumns: `repeat(${p.cols},var(--puzzle-cell))` }}
      >
        {Array.from({ length: p.cols * p.rows }, (_, cell) => {
          const id = owner(cell);
          return (
            <button
              key={cell}
              data-drop={cell}
              aria-label={`Petak lantai ${cell + 1}`}
              className={`tile-cell ${solution && selected !== null && solution[selected]?.cell === cell ? "hint-glow" : ""}`}
              style={
                id >= 0
                  ? {
                      background: [
                        "var(--flower-pink)",
                        "var(--flower-yellow)",
                        "var(--flower-purple)",
                      ][id % 3],
                    }
                  : undefined
              }
              onClick={() => {
                if (selected !== null) place(selected, String(cell));
                else if (id >= 0) {
                  setSelected(id);
                  setTurn(placements[id]!.turn);
                }
              }}
            >
              {id >= 0 ? (
                <span className="tile-grain" />
              ) : (
                <span className="slot-mark" />
              )}
            </button>
          );
        })}
      </div>
      <div className="discovery-palette">
        {p.blocks.map((block, i) => (
          <Manipulative
            key={i}
            id={i}
            color="var(--flower-pink)"
            selected={selected === i}
            onSelect={(id) => {
              setSelected(id);
              setTurn(placements[id]?.turn || 0);
            }}
            onDrop={place}
            label={`Balok ${i + 1}`}
          >
            <MotionTurn turn={selected === i ? turn : placements[i]?.turn || 0}>
              <svg
                viewBox={`0 0 ${(Math.max(...block.map(([x]) => x)) + 1) * 32} ${(Math.max(...block.map(([, y]) => y)) + 1) * 32}`}
                aria-hidden="true"
              >
                <g>
                  {block.map(([x, y], j) => (
                    <rect
                      key={j}
                      x={1 + x * 32}
                      y={1 + y * 32}
                      width="30"
                      height="30"
                      rx="3"
                      fill={
                        [
                          "var(--flower-pink)",
                          "var(--flower-yellow)",
                          "var(--flower-purple)",
                        ][i % 3]
                      }
                      stroke="var(--color-ink)"
                      strokeWidth="2"
                    />
                  ))}
                </g>
              </svg>
            </MotionTurn>
          </Manipulative>
        ))}
      </div>
      <button
        className="secondary"
        disabled={selected === null}
        onClick={() => {
          onAttempt();
          setTurn((turn + 1) % 4);
        }}
      >
        <RotateCw /> Putar balok
      </button>
      <p className="gentle-message" aria-live="polite">
        {message ||
          (hint >= 2 && !solution
            ? "Pindahkan balok agar ruang yang tersisa bisa diisi."
            : "")}
      </p>
    </div>
  );
}
