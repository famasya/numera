import {
  Component,
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { SpatialView } from "../../components/SpatialView";
import {
  useSessionValue,
  useMissionSession,
  isCount,
  isText,
  isPlaces,
} from "../../world/progression/session";
import type { MapTwoMissionId } from "../../content/map-two-missions";
import { Dots, ObjectArt } from "../adventure/Objects";
import { Lumi } from "../../components/Art";
import { SolidArt } from "../../components/SolidArt";
import {
  buildCanRemove,
  buildSupports,
  crossCategory,
  exactCounts,
  frequencies,
  fruits,
  halfValid,
  lengthValid,
  mapRouteStep,
  measurementStep,
  solidNames,
  transferWaterAmount,
  votesFor,
  type SolidKind,
} from "../../pedagogy/map-two";

type Props = {
  id: MapTwoMissionId;
  variation: number;
  hint: number;
  done: boolean;
  onAttempt: () => void;
  onMiss: () => void;
  onComplete: (solutions: string[]) => void;
};
const palette = [
  "var(--flower-pink)",
  "var(--flower-yellow)",
  "var(--flower-purple)",
];
const WaterPourScene = lazy(() => import("../../components/WaterPourScene"));
class WaterSceneBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
function Fruit({ kind }: { kind: number }) {
  return (
    <svg viewBox="0 0 80 80" aria-label={fruits[kind]} role="img">
      <path
        d={
          kind === 2
            ? "M40 14A28 28 0 1 0 40 70A28 28 0 1 0 40 14Z"
            : kind === 1
              ? "M40 15C25 15 30 35 18 44C-5 79 85 79 62 44C50 35 55 15 40 15Z"
              : "M40 24C10 5-3 62 25 70Q40 78 55 70C83 62 70 5 40 24Z"
        }
        fill={
          kind === 1
            ? "var(--flower-leaf)"
            : kind === 2
              ? "var(--flower-yellow)"
              : palette[0]
        }
        stroke="var(--color-soil)"
        strokeWidth="2"
      />
      <path d="M40 24V10Q52 4 61 11Q53 25 40 18" fill="var(--flower-leaf)" />
    </svg>
  );
}
function CrossArt({ kind, color }: { kind: number; color: number }) {
  return (
    <svg
      viewBox="0 0 80 80"
      role="img"
      aria-label={`${color ? "Kuning" : "Merah muda"} ${kind ? "daun" : "buah"}`}
    >
      <path
        d={
          kind
            ? "M15 65Q-3 2 67 12Q83 68 15 65Z"
            : "M40 24C10 5-3 62 25 70Q40 78 55 70C83 62 70 5 40 24Z"
        }
        fill={palette[color]}
        stroke="var(--color-soil)"
        strokeWidth="2"
      />
      {kind ? (
        <path d="M15 65L60 20" stroke="var(--color-soil)" strokeWidth="3" />
      ) : (
        <path d="M40 24V10" stroke="var(--color-soil)" strokeWidth="3" />
      )}
    </svg>
  );
}
function useFeedback(p: Props) {
  const [message, setMessage] = useSessionValue("map2-message", "", isText);
  function check(valid: boolean, solution: string) {
    p.onAttempt();
    if (valid) {
      setMessage("Susunannya sudah sesuai.");
      p.onComplete([solution]);
    } else {
      setMessage("Periksa lagi. Bagian yang sudah sesuai boleh tetap.");
      p.onMiss();
    }
  }
  return { message, setMessage, check };
}
function Feedback({ message }: { message: string }) {
  return (
    <p className="map2-feedback" role="status">
      {message}
    </p>
  );
}
function Places({
  values,
  label,
  onPlace,
  render,
}: {
  values: readonly (number | null)[];
  label: string;
  onPlace: (i: number) => void;
  render: (i: number) => React.ReactNode;
}) {
  return (
    <div className="map2-items" aria-label={label}>
      {values.map((_, i) => (
        <button
          key={i}
          className="map2-piece"
          aria-label={`${label} ${i + 1}`}
          onClick={() => onPlace(i)}
        >
          {render(i)}
        </button>
      ))}
    </div>
  );
}
function MeasurePath(p: Props) {
  const length = p.variation % 2 ? 8 : 6;
  const [places, setPlaces] = useSessionValue<(number | null)[]>(
    "measure-places",
    Array(5).fill(null),
    (v) =>
      isPlaces(v, 5, length - 2) &&
      new Set((v as (number | null)[]).filter((x) => x !== null)).size ===
        (v as (number | null)[]).filter((x) => x !== null).length,
  );
  const [selected, setSelected] = useSessionValue(
    "measure-selected",
    0,
    (v) => isCount(v) && (v as number) < 5,
  );
  const { message, setMessage, check } = useFeedback(p);
  const pathDrag = useRef<{
    id: number;
    x: number;
    y: number;
    moved: boolean;
  } | null>(null);
  const [pathGhost, setPathGhost] = useState<{ x: number; y: number } | null>(
    null,
  );
  const gestures = (id: number) => ({
    onPointerDown: (e: React.PointerEvent<HTMLButtonElement>) => {
      setSelected(id);
      pathDrag.current = { id, x: e.clientX, y: e.clientY, moved: false };
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    onPointerMove: (e: React.PointerEvent<HTMLButtonElement>) => {
      const d = pathDrag.current;
      if (!d) return;
      if (Math.hypot(e.clientX - d.x, e.clientY - d.y) > 6) d.moved = true;
      if (d.moved) setPathGhost({ x: e.clientX, y: e.clientY });
    },
    onPointerUp: (e: React.PointerEvent<HTMLButtonElement>) => {
      const d = pathDrag.current;
      if (d?.moved) {
        const target = document
          .elementFromPoint(e.clientX, e.clientY)
          ?.closest("[data-measure-position]");
        if (target)
          place(Number(target.getAttribute("data-measure-position")), d.id);
      }
      pathDrag.current = null;
      setPathGhost(null);
    },
    onPointerCancel: () => {
      pathDrag.current = null;
      setPathGhost(null);
    },
  });
  function place(pos: number, id = selected) {
    p.onAttempt();
    const overlap = places.some(
      (x, i) => i !== id && x !== null && Math.abs(x - pos) < 2,
    );
    if (pos + 2 > length || overlap) {
      setMessage("Tempat ini terisi. Sentuh tempat kosong di jalur.");
      return;
    }
    setPlaces((v) => v.map((x, i) => (i === id ? pos : x)));
    setMessage("");
  }
  return (
    <>
      <div
        className="measure-track"
        style={{ gridTemplateColumns: `repeat(${length}, var(--map2-unit))` }}
        aria-label="Jalur pengukuran"
      >
        {Array.from({ length }, (_, i) => (
          <button
            key={i}
            aria-label={`Awal posisi ${i + 1}`}
            data-measure-position={i}
            className={`measure-position ${p.hint && i === 0 ? "map2-hint" : ""}`}
            onClick={() => place(i)}
          />
        ))}
        {places.map((x, i) =>
          x === null ? null : (
            <button
              key={i}
              className="measure-block"
              {...gestures(i)}
              style={{ gridColumn: `${x + 1} / span 2`, gridRow: 1 }}
              aria-label={`Keping ${i + 1}, posisi ${x + 1}`}
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              <span />
            </button>
          ),
        )}
      </div>
      <div className="measure-supply" aria-label="Keping tersedia">
        {places.map((pos, i) => (
          <button
            key={i}
            className={`measure-supply-piece ${selected === i ? "selected" : ""}`}
            {...gestures(i)}
            aria-label={`Pilih keping ${i + 1}${pos === null ? "" : ", sudah di jalur"}`}
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            {pos === null ? <span className="plank-art" /> : <span>✓</span>}
          </button>
        ))}
      </div>
      <p>
        {places[selected] === null
          ? "Pilih keping. Sentuh tempat di jalur."
          : "Keping dipilih. Pindahkan atau kembalikan keping."}
      </p>
      <div className="map2-actions">
        <button
          className="secondary"
          onClick={() => {
            p.onAttempt();
            setPlaces((v) => v.map((x, i) => (i === selected ? null : x)));
          }}
        >
          Kembalikan keping
        </button>
        <button
          className="primary"
          onClick={() =>
            check(lengthValid(length, 2, places), places.join(","))
          }
        >
          Periksa jalur
        </button>
      </div>
      {p.hint > 0 && (
        <p>
          Mulai dari awal. Keping berikutnya menyentuh ujung keping sebelumnya.
        </p>
      )}
      <Feedback message={message} />
      {pathGhost && (
        <div
          className="cross-drag-ghost measure-drag-ghost"
          style={{ left: pathGhost.x, top: pathGhost.y }}
          aria-hidden="true"
        >
          <span className="plank-art" />
        </div>
      )}
    </>
  );
}
function MeasureUnit(p: Props) {
  const length = p.variation % 2 ? 4 : 6;
  const [phase, setPhase] = useSessionValue(
    "measure-phase",
    0,
    (v) => v === 0 || v === 1,
  );
  const [large, setLarge] = useSessionValue<number[]>(
    "measure-large",
    [],
    (v) =>
      Array.isArray(v) &&
      v.length <= length / 2 &&
      v.every((n, i) => n === i * 2),
  );
  const [small, setSmall] = useSessionValue<number[]>(
    "measure-small",
    [],
    (v) => Array.isArray(v) && v.length <= length && v.every((n, i) => n === i),
  );
  const marks = phase ? small : large,
    unit = phase ? 1 : 2;
  const { message, setMessage, check } = useFeedback(p);
  function measure(i: number) {
    p.onAttempt();
    if (!measurementStep(length, unit, marks, i)) {
      setMessage("Letakkan alat pada ujung jejak terakhir.");
      p.onMiss();
      return;
    }
    if (phase) setSmall((v) => [...v, i]);
    else setLarge((v) => [...v, i]);
    setMessage("");
  }
  return (
    <>
      <p>
        {phase
          ? "Ukur jalur yang sama dengan alat kecil."
          : "Sentuh awal jalur untuk meletakkan alat besar."}
      </p>
      <div className="measurement-example" aria-label="Jejak alat besar">
        {Array.from({ length: length / 2 }, (_, i) => (
          <span key={i} className={i < large.length ? "measured" : ""}>
            {i < large.length ? i + 1 : ""}
          </span>
        ))}
      </div>
      <div
        className="measure-track"
        style={{ gridTemplateColumns: `repeat(${length}, var(--map2-unit))` }}
      >
        {Array.from({ length }, (_, i) => (
          <button
            key={i}
            aria-label={`Ukur dari posisi ${i + 1}`}
            onClick={() => measure(i)}
            className={`measure-position ${marks.some((x) => i >= x && i < x + unit) ? "measured" : ""} ${i === marks.length * unit ? "measure-next" : ""}`}
          />
        ))}
        {marks.length > 0 && (
          <span
            className="measure-tool"
            style={{
              gridColumn: `${marks[marks.length - 1] + 1} / span ${unit}`,
              gridRow: 1,
            }}
            aria-label={`Alat ${unit} satuan`}
          />
        )}
      </div>
      <div className="measure-current-tool">
        <span
          className="plank-art"
          style={{ width: `calc(var(--map2-unit) * ${unit})` }}
        />
        {phase ? "Alat kecil" : "Alat besar"}
      </div>
      <p>
        {phase ? "Alat kecil" : "Alat besar"} · <Dots count={marks.length} />
      </p>
      <div className="map2-actions">
        <button
          className="secondary"
          onClick={() => {
            p.onAttempt();
            if (phase) setSmall((v) => v.slice(0, -1));
            else setLarge((v) => v.slice(0, -1));
          }}
        >
          Mundur satu jejak
        </button>
        {!phase ? (
          <button
            className="primary"
            onClick={() => {
              p.onAttempt();
              if (large.length * 2 !== length) {
                setMessage("Ukur sampai ujung jalur dahulu.");
                p.onMiss();
                return;
              }
              setPhase(1);
              setMessage("Jalurnya tetap. Coba alat kecil.");
            }}
          >
            Coba alat kecil
          </button>
        ) : (
          <button
            className="primary"
            onClick={() =>
              check(
                large.length * 2 === length && small.length === length,
                `${large.length}:${small.length}`,
              )
            }
          >
            Periksa pengukuran
          </button>
        )}
      </div>
      {p.hint > 0 && <p>Alat berikutnya dimulai dari ujung jejak terakhir.</p>}
      <Feedback message={message} />
    </>
  );
}
function Water(p: Props) {
  const total = p.variation % 2 ? 4 : 6;
  const scale = 20;
  const capacity = total * scale;
  const session = useMissionSession();
  const old = session.values.water;
  const legacyInitial =
    Array.isArray(old) &&
    old.length === 2 &&
    old.every((n) => isCount(n) && n <= total) &&
    old[0] + old[1] === total
      ? ([old[0] * scale, old[1] * scale] as [number, number])
      : ([capacity, 0] as [number, number]);
  const [amounts, setAmounts] = useSessionValue<[number, number]>(
    "water-volume-v2",
    legacyInitial,
    (v) =>
      Array.isArray(v) &&
      v.length === 2 &&
      v.every((n) => isCount(n) && n <= capacity) &&
      v[0] + v[1] === capacity,
  );
  const [source, setSource] = useState<0 | 1>(0);
  const [tilts, setTilts] = useState<[number, number]>([0, 0]);
  const [pouring, setPouring] = useState(false);
  const [message, setMessage] = useSessionValue("water-message", "", isText);
  const amountRef = useRef(amounts);
  const sourceRef = useRef<0 | 1>(source);
  amountRef.current = amounts;
  sourceRef.current = source;
  useEffect(() => {
    if (!pouring) return;
    const timer = window.setInterval(() => {
      const from = sourceRef.current;
      const next = transferWaterAmount(amountRef.current, from, 1, capacity);
      if (
        next[0] === amountRef.current[0] &&
        next[1] === amountRef.current[1]
      ) {
        setPouring(false);
        setMessage("Wadah itu tidak memiliki air lagi.");
        return;
      }
      amountRef.current = next;
      setAmounts(next);
      if (next[from] === 0) {
        setPouring(false);
        setMessage("Semua air sudah berpindah dari wadah itu.");
      }
    }, 50);
    return () => window.clearInterval(timer);
  }, [pouring]);
  useEffect(() => {
    if (
      amounts[0] > 0 &&
      message === "Semua air sudah berpindah dari wadah itu."
    )
      setMessage("");
  }, [amounts, message, setMessage]);
  function beginPour(side: 0 | 1) {
    const destination = 1 - side;
    if (amountRef.current[side] <= 0) {
      setMessage("Wadah itu tidak memiliki air lagi.");
      return;
    }
    if (amountRef.current[destination] >= capacity) {
      setMessage("Wadah tujuan sudah penuh.");
      return;
    }
    setSource(side);
    setMessage("");
    p.onAttempt();
    setPouring(true);
  }
  function stopPour() {
    setPouring(false);
    setTilts([0, 0]);
  }
  function transferOnePart(from: 0 | 1) {
    p.onAttempt();
    const next = transferWaterAmount(amountRef.current, from, scale, capacity);
    if (next[0] === amountRef.current[0] && next[1] === amountRef.current[1]) {
      setMessage("Tidak ada air yang dapat dipindahkan ke wadah itu.");
      return;
    }
    amountRef.current = next;
    setAmounts(next);
    setMessage("Satu bagian air berpindah.");
  }
  function checkWater() {
    p.onAttempt();
    const valid = amounts[0] === 0 && amounts[1] === capacity;
    if (valid) {
      setMessage("");
      p.onComplete([amounts.join(":")]);
    } else {
      setMessage("Pindahkan semua air ke wadah sempit.");
      p.onMiss();
    }
  }
  const fallback = (
    <WaterFallback
      amounts={amounts}
      total={total}
      onTransfer={transferOnePart}
    />
  );
  return (
    <>
      <p>Tarik pegangan ke atas untuk menuang. Lepaskan untuk berhenti.</p>
      <div className="water-stage" aria-label="Permainan menuang air">
        <WaterSceneBoundary fallback={fallback}>
          <Suspense fallback={fallback}>
            <WaterPourScene
              amounts={amounts}
              total={total}
              source={source}
              pouring={pouring && tilts[source] >= 32}
              tilts={tilts}
              onSource={setSource}
              onTilt={(side, tilt) => {
                setTilts((current) => {
                  const next: [number, number] = [...current];
                  next[side] = tilt;
                  return next;
                });
                if (tilt >= 32) {
                  if (sourceRef.current !== side) setSource(side);
                  if (!pouring) beginPour(side);
                } else if (tilt < 32 && pouring) setPouring(false);
              }}
              onStart={(side) => {
                setSource(side);
              }}
              onStop={stopPour}
            />
          </Suspense>
        </WaterSceneBoundary>
      </div>
      <div
        className="water-pour-controls"
        aria-label="Kontrol alternatif menuang"
      >
        {([0, 1] as const).map((side) => (
          <button
            key={side}
            className={source === side ? "secondary selected" : "secondary"}
            aria-label={`Tahan untuk menuang dari wadah ${side === 0 ? "lebar" : "sempit"}`}
            aria-pressed={source === side}
            onPointerDown={(event) => {
              event.currentTarget.setPointerCapture(event.pointerId);
              setSource(side);
              setTilts(side === 0 ? [50, 0] : [0, 50]);
              beginPour(side);
            }}
            onPointerUp={stopPour}
            onPointerCancel={stopPour}
            onLostPointerCapture={stopPour}
            onKeyDown={(event) => {
              if (
                (event.key === "Enter" || event.key === " ") &&
                !event.repeat
              ) {
                event.preventDefault();
                setSource(side);
                setTilts(side === 0 ? [50, 0] : [0, 50]);
                beginPour(side);
              }
            }}
            onKeyUp={(event) => {
              if (event.key === "Enter" || event.key === " ") stopPour();
            }}
            onBlur={stopPour}
          >
            Tuang dari wadah {side === 0 ? "lebar" : "sempit"}
          </button>
        ))}
      </div>
      <button className="primary" onClick={checkWater}>
        Periksa isi
      </button>
      <Feedback message={message} />
    </>
  );
}

function WaterFallback({
  amounts,
  total,
  onTransfer,
}: {
  amounts: readonly [number, number];
  total: number;
  onTransfer: (from: 0 | 1) => void;
}) {
  return (
    <div className="water-vessels">
      {([0, 1] as const).map((side) => {
        const label = side === 0 ? "Wadah lebar" : "Wadah sempit";
        const fillHeight =
          180 * (amounts[side] / (total * 20)) * (side === 0 ? 0.4 : 0.8);
        return (
          <div key={side}>
            <strong>{label}</strong>
            <svg
              viewBox="0 0 220 220"
              role="img"
              aria-label={`${label} ${amounts[side] ? "berisi air" : "kosong"}`}
            >
              <path
                d={side ? "M72 20V200H148V20" : "M20 20V200H200V20"}
                fill="var(--color-surface-glass)"
                stroke="var(--color-primary)"
                strokeWidth="5"
              />
              <rect
                x={side ? 75 : 23}
                y={200 - fillHeight}
                width={side ? 70 : 174}
                height={fillHeight}
                fill="var(--color-water-deep)"
              />
            </svg>
            <button className="secondary" onClick={() => onTransfer(side)}>
              Pindahkan satu bagian
            </button>
          </div>
        );
      })}
    </div>
  );
}
function Votes(p: Props) {
  const votes = votesFor(p.variation),
    targets = frequencies(votes),
    packing = p.id === "data-packing";
  const [places, setPlaces] = useSessionValue<(number | null)[]>(
    "vote-places",
    Array(votes.length).fill(null),
    (v) => isPlaces(v, votes.length, 2),
  );
  const [selected, setSelected] = useSessionValue(
    "vote-selected",
    0,
    (v) => isCount(v) && (v as number) < votes.length,
  );
  const [counts, setCounts] = useSessionValue<number[]>(
    "pack-counts",
    [0, 0, 0],
    (v) =>
      Array.isArray(v) &&
      v.length === 3 &&
      v.every((n) => isCount(n) && n <= votes.length),
  );
  const { message, check } = useFeedback(p);
  const card = (i: number) => (
    <>
      <ObjectArt kind="friend" />
      <Fruit kind={votes[i]} />
    </>
  );
  return (
    <>
      <div className="vote-source" aria-label="Catatan pilihan teman">
        {votes.map((_, i) =>
          packing ? (
            <div className="vote-card" key={i}>
              {card(i)}
            </div>
          ) : places[i] === null ? (
            <button
              className={`vote-card ${selected === i ? "selected" : ""}`}
              key={i}
              aria-label={`Kartu teman ${i + 1}, ${fruits[votes[i]]}`}
              onClick={() => setSelected(i)}
            >
              {card(i)}
            </button>
          ) : (
            <span className="cross-empty" key={i}>
              ✓
            </span>
          ),
        )}
      </div>
      <div className="data-categories">
        {fruits.map((name, kind) => (
          <div className="data-category" key={name}>
            {packing ? (
              <div className="category-target">
                <Fruit kind={kind} />
                <strong>{name}</strong>
              </div>
            ) : (
              <button
                className="category-target"
                aria-label={`Kelompok ${name}`}
                onClick={() => {
                  p.onAttempt();
                  setPlaces((v) =>
                    v.map((x, i) => (i === selected ? kind : x)),
                  );
                }}
              >
                <Fruit kind={kind} />
                <strong>{name}</strong>
              </button>
            )}
            <div className="data-records">
              {votes.map(
                (v, i) =>
                  (packing ? v === kind : places[i] === kind) &&
                  (packing ? (
                    <span className="record-dot" key={i}>
                      <ObjectArt kind="friend" />
                    </span>
                  ) : (
                    <button
                      key={i}
                      aria-label={`Kartu teman ${i + 1}, ${fruits[v]}`}
                      onClick={() => setSelected(i)}
                    >
                      {card(i)}
                    </button>
                  )),
              )}
            </div>
            {packing && (
              <>
                <div className="packed-fruit">
                  {Array.from({ length: counts[kind] }, (_, i) => (
                    <Fruit key={i} kind={kind} />
                  ))}
                </div>
                <div className="map2-actions">
                  <button
                    className="secondary"
                    aria-label={`Kurangi ${name}`}
                    onClick={() => {
                      p.onAttempt();
                      setCounts((v) =>
                        v.map((x, i) => (i === kind ? Math.max(0, x - 1) : x)),
                      );
                    }}
                  >
                    −
                  </button>
                  <button
                    className="secondary"
                    aria-label={`Tambah ${name}`}
                    onClick={() => {
                      p.onAttempt();
                      setCounts((v) =>
                        v.map((x, i) =>
                          i === kind ? Math.min(votes.length, x + 1) : x,
                        ),
                      );
                    }}
                  >
                    +
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <button
        className="primary"
        onClick={() =>
          check(
            packing
              ? exactCounts(counts, targets)
              : places.every((v, i) => v === votes[i]),
            (packing ? counts : places).join(","),
          )
        }
      >
        {packing ? "Periksa bekal" : "Periksa catatan"}
      </button>
      <Feedback message={message} />
    </>
  );
}
function Cross(p: Props) {
  const items =
    p.variation % 2
      ? [
          [1, 1],
          [0, 1],
          [1, 0],
          [0, 0],
        ]
      : [
          [0, 0],
          [1, 1],
          [0, 1],
          [1, 0],
        ];
  const [places, setPlaces] = useSessionValue<(number | null)[]>(
    "cross-places",
    Array(4).fill(null),
    (v) => isPlaces(v, 4, 3),
  );
  const [selected, setSelected] = useSessionValue(
    "cross-selected",
    0,
    (v) => isCount(v) && (v as number) < 4,
  );
  const { message, setMessage, check } = useFeedback(p);
  const drag = useRef<{
    id: number;
    x: number;
    y: number;
    moved: boolean;
  } | null>(null);
  const [ghost, setGhost] = useState<{
    id: number;
    x: number;
    y: number;
  } | null>(null);
  function move(id: number, destination: number | null) {
    p.onAttempt();
    setPlaces((v) => v.map((x, i) => (i === id ? destination : x)));
    setMessage("");
  }
  function object(id: number) {
    return (
      <button
        key={id}
        className={`cross-object ${selected === id ? "selected" : ""}`}
        aria-label={`Pilih benda ${id + 1}, ${items[id][1] ? "kuning" : "merah muda"} ${items[id][0] ? "daun" : "buah"}`}
        aria-pressed={selected === id}
        onClick={() => {
          if (!drag.current?.moved) setSelected(id);
        }}
        onPointerDown={(e) => {
          setSelected(id);
          drag.current = { id, x: e.clientX, y: e.clientY, moved: false };
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          const d = drag.current;
          if (!d || d.id !== id) return;
          if (Math.hypot(e.clientX - d.x, e.clientY - d.y) > 6) d.moved = true;
          if (d.moved) setGhost({ id, x: e.clientX, y: e.clientY });
        }}
        onPointerUp={(e) => {
          const d = drag.current;
          if (d?.moved) {
            const target = document
              .elementFromPoint(e.clientX, e.clientY)
              ?.closest("[data-cross-target]");
            if (target)
              move(id, Number(target.getAttribute("data-cross-target")));
            else if (
              document
                .elementFromPoint(e.clientX, e.clientY)
                ?.closest(".cross-supply")
            )
              move(id, null);
          }
          setGhost(null);
        }}
        onPointerCancel={() => {
          drag.current = null;
          setGhost(null);
        }}
      >
        <CrossArt kind={items[id][0]} color={items[id][1]} />
      </button>
    );
  }
  return (
    <>
      <div className="cross-supply" aria-label="Benda tersedia">
        {places.map((pos, i) =>
          pos === null ? (
            object(i)
          ) : (
            <span
              key={i}
              className="cross-empty"
              aria-label={`Benda ${i + 1} sudah di rak`}
            >
              ✓
            </span>
          ),
        )}
      </div>
      <p>Geser benda ke rak. Atau pilih, lalu sentuh rak.</p>
      <div className="cross-grid">
        <span />
        <strong>
          <CrossArt kind={0} color={0} />
          Buah
        </strong>
        <strong>
          <CrossArt kind={1} color={0} />
          Daun
        </strong>
        {[0, 1].map((color) => (
          <div className="cross-row" key={color}>
            <span
              className="cross-color"
              style={{ background: palette[color] }}
              aria-label={color ? "Kuning" : "Merah muda"}
            />
            {[0, 1].map((kind) => {
              const destination = crossCategory(kind, color);
              const label = `Rak ${color ? "kuning" : "merah muda"} ${kind ? "daun" : "buah"}`;
              return (
                <div
                  className="cross-bin"
                  data-cross-target={destination}
                  key={kind}
                >
                  <button
                    className="cross-target"
                    aria-label={label}
                    onClick={() => move(selected, destination)}
                  >
                    ↓
                  </button>
                  <div className="cross-bin-items">
                    {places.map((pos, i) =>
                      pos === destination ? object(i) : null,
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="map2-actions">
        <button className="secondary" onClick={() => move(selected, null)}>
          Kembalikan benda dipilih
        </button>
        <button
          className="primary"
          onClick={() =>
            check(
              places.every(
                (v, i) => v === crossCategory(items[i][0], items[i][1]),
              ),
              places.join(","),
            )
          }
        >
          Periksa rak
        </button>
      </div>
      <Feedback message={message} />
      {ghost && (
        <div
          className="cross-drag-ghost"
          style={{ left: ghost.x, top: ghost.y }}
          aria-hidden="true"
        >
          <CrossArt kind={items[ghost.id][0]} color={items[ghost.id][1]} />
        </div>
      )}
    </>
  );
}

function Solids(p: Props) {
  const kinds: SolidKind[] =
    p.variation % 2
      ? ["cylinder", "sphere", "cube", "sphere", "cube", "cylinder"]
      : ["cube", "sphere", "cylinder", "cube", "cylinder", "sphere"];
  const [places, setPlaces] = useSessionValue<(number | null)[]>(
    "solid-places",
    Array(6).fill(null),
    (v) => isPlaces(v, 6, 2),
  );
  const [selected, setSelected] = useSessionValue(
    "solid-selected",
    0,
    (v) => isCount(v) && (v as number) < 6,
  );
  const [turn, setTurn] = useSessionValue(
    "solid-turn",
    p.variation % 2 ? 125 : 35,
    isCount,
  );
  const [pitch, setPitch] = useSessionValue(
    "solid-pitch",
    25,
    (v) => typeof v === "number" && Number.isFinite(v),
  );
  const { message, check } = useFeedback(p);
  return (
    <>
      <SpatialView
        kind={kinds[selected]}
        yaw={turn + selected * 25}
        pitch={pitch}
        color={palette[selected % 3]}
        onRotate={(yaw, pitch) => {
          setTurn((((yaw - selected * 25) % 360) + 360) % 360);
          setPitch(pitch);
        }}
      />
      <Places
        values={places}
        label="Pilih bangun"
        onPlace={setSelected}
        render={(i) => (
          <span className={selected === i ? "selected" : ""}>
            <SolidArt
              kind={kinds[i]}
              color={palette[i % 3]}
              yaw={turn + i * 25}
              pitch={pitch}
            />
          </span>
        )}
      />
      <button
        className="secondary"
        onClick={() => {
          p.onAttempt();
          setTurn((v) => (v + 45) % 360);
        }}
      >
        Putar pandangan
      </button>
      <div className="data-categories">
        {(["cube", "sphere", "cylinder"] as const).map((kind, i) => (
          <button
            key={kind}
            className="solid-category"
            aria-label={`Kelompok ${solidNames[kind]}`}
            onClick={() => {
              p.onAttempt();
              setPlaces((v) => v.map((x, n) => (n === selected ? i : x)));
            }}
          >
            <SolidArt kind={kind} />
            <strong>{solidNames[kind]}</strong>
            <span className="solid-records">
              {places.map(
                (v, n) =>
                  v === i && (
                    <SolidArt
                      key={n}
                      kind={kinds[n]}
                      color={palette[n % 3]}
                      yaw={turn + n * 25}
                    />
                  ),
              )}
            </span>
          </button>
        ))}
      </div>
      {p.hint > 0 && (
        <p>
          Bandingkan sisi yang datar dan yang melengkung dari beberapa arah.
        </p>
      )}
      <button
        className="primary"
        onClick={() =>
          check(
            places.every(
              (v, i) => v === ["cube", "sphere", "cylinder"].indexOf(kinds[i]),
            ),
            places.join(","),
          )
        }
      >
        Periksa kelompok
      </button>
      <Feedback message={message} />
    </>
  );
}
function Faces(p: Props) {
  const [yaw, setYaw] = useSessionValue(
    "cube-yaw",
    p.variation % 2 ? 125 : 35,
    (v) => typeof v === "number" && Number.isFinite(v),
  );
  const [pitch, setPitch] = useSessionValue(
    "cube-pitch",
    p.variation % 2 ? 25 : -25,
    (v) => typeof v === "number" && Number.isFinite(v),
  );
  const [marked, setMarked] = useSessionValue<number[]>(
    "cube-marked",
    [],
    (v) =>
      Array.isArray(v) &&
      v.every((n) => isCount(n) && n < 6) &&
      new Set(v).size === v.length,
  );
  const { message, setMessage, check } = useFeedback(p);
  return (
    <>
      <SpatialView
        kind="cube"
        interaction="mark"
        yaw={yaw}
        pitch={pitch}
        marked={marked}
        onRotate={(yaw, pitch) => {
          setYaw(yaw);
          setPitch(pitch);
        }}
        onFace={
          p.done
            ? undefined
            : (id) => {
                p.onAttempt();
                setMessage(
                  marked.includes(id)
                    ? "Sisi sudah ditandai."
                    : "Sisi ditandai.",
                );
                setMarked((v) => (v.includes(id) ? v : [...v, id]));
              }
        }
      />
      <p>Sentuh sisi kubus untuk menandai.</p>
      <div className="map2-actions">
        <button
          className="secondary"
          onClick={() => {
            p.onAttempt();
            setYaw((v) => (v + 90) % 360);
          }}
        >
          Putar ke samping
        </button>
        <button
          className="secondary"
          onClick={() => {
            p.onAttempt();
            setPitch((v) => (v === -25 ? 25 : -25));
          }}
        >
          Putar atas atau bawah
        </button>
      </div>
      {p.hint > 0 && (
        <p>
          Tanda tetap pada sisinya. Putar untuk melihat bagian belakang dan
          bawah.
        </p>
      )}
      <button
        className="primary"
        onClick={() => check(marked.length === 6, [...marked].sort().join(","))}
      >
        Periksa sisi
      </button>
      <Feedback message={message} />
    </>
  );
}
function Build(p: Props) {
  const height = p.variation % 2 ? 3 : 2;
  const [filled, setFilled] = useSessionValue<boolean[]>(
    "build-filled",
    Array(height * 2 + 1).fill(false),
    (v) =>
      Array.isArray(v) &&
      v.length === height * 2 + 1 &&
      v.every((n) => typeof n === "boolean") &&
      v.every((n, i) => !n || buildSupports(i, v, height)),
  );
  const [yaw, setYaw] = useSessionValue("build-yaw", 35, isCount);
  const [pitch, setPitch] = useSessionValue(
    "build-pitch",
    25,
    (v) => typeof v === "number" && Number.isFinite(v),
  );
  const { message, setMessage, check } = useFeedback(p);
  function toggle(i: number) {
    p.onAttempt();
    if (
      filled[i]
        ? !buildCanRemove(i, filled, height)
        : !buildSupports(i, filled, height)
    ) {
      setMessage(
        filled[i]
          ? "Lepaskan bagian atas sebelum penyangganya."
          : "Bangun penyangga di bawah bagian ini dahulu.",
      );
      p.onMiss();
      return;
    }
    setFilled((v) => v.map((x, n) => (n === i ? !x : x)));
    setMessage("");
  }
  return (
    <>
      <div className="build-workspace">
        <SpatialView
          yaw={yaw}
          pitch={pitch}
          onRotate={(yaw, pitch) => {
            setYaw(yaw);
            setPitch(pitch);
          }}
          filled={filled}
          height={height}
          onBlock={p.done ? undefined : toggle}
        />
        <div
          className="build-model"
          style={{
            gridTemplateRows: `repeat(${height + 1}, var(--map2-unit))`,
          }}
          aria-label="Bangunan gerbang"
        >
          <button
            className={`build-beam ${filled[height * 2] ? "built" : ""}`}
            style={{ gridColumn: "1 / span 3", gridRow: 1 }}
            aria-label="Balok atas"
            onClick={() => toggle(height * 2)}
          >
            <SolidArt kind="cube" long yaw={yaw} pitch={25} />
          </button>
          {Array.from({ length: height * 2 }, (_, i) => (
            <button
              key={i}
              style={{
                gridColumn: i % 2 ? 3 : 1,
                gridRow: height + 1 - Math.floor(i / 2),
              }}
              className={filled[i] ? "built" : ""}
              aria-label={`Tiang ${i % 2 ? "kanan" : "kiri"}, tingkat ${Math.floor(i / 2) + 1}`}
              onClick={() => toggle(i)}
            >
              <SolidArt kind="cube" yaw={yaw} pitch={25} />
            </button>
          ))}
          <span
            className="build-opening"
            style={{ gridColumn: 2, gridRow: `2 / span ${height}` }}
            aria-label="Bukaan gerbang"
          >
            <Lumi />
          </span>
        </div>
      </div>
      <button
        className="secondary"
        onClick={() => {
          p.onAttempt();
          setYaw((v) => (v === 35 ? 145 : 35));
        }}
      >
        Lihat sisi lain
      </button>
      {p.hint > 0 && (
        <p>Bangun dari bawah. Balok atas membutuhkan kedua tiang lengkap.</p>
      )}
      <button
        className="primary"
        onClick={() =>
          check(filled.every(Boolean), filled.map(Number).join(""))
        }
      >
        Periksa gerbang
      </button>
      <Feedback message={message} />
    </>
  );
}
function Halves(p: Props) {
  const count = p.variation % 2 ? 4 : 6;
  const [parts, setParts] = useSessionValue<(number | null)[]>(
    "bread-parts",
    Array(count).fill(null),
    (v) => isPlaces(v, count, 1),
  );
  const [friend, setFriend] = useSessionValue(
    "bread-friend",
    0,
    (v) => v === 0 || v === 1,
  );
  const { message, check } = useFeedback(p);
  return (
    <>
      <div className="map2-actions">
        {[0, 1].map((i) => (
          <button
            className={friend === i ? "primary" : "secondary"}
            aria-label={`Pilih teman ${i + 1}`}
            aria-pressed={friend === i}
            onClick={() => setFriend(i)}
            key={i}
          >
            <ObjectArt kind="friend" />
            Teman {i + 1}
          </button>
        ))}
      </div>
      <div
        className="bread-whole"
        style={{
          gridTemplateColumns: `repeat(${count / 2}, var(--map2-unit))`,
        }}
        aria-label="Satu roti utuh"
      >
        {parts.map((v, i) => (
          <button
            key={i}
            aria-label={`Bagian roti ${i + 1}${v === null ? ", belum dibagi" : `, teman ${v + 1}`}`}
            style={{
              background: v === null ? "var(--color-basket-rim)" : palette[v],
            }}
            onClick={() => {
              p.onAttempt();
              setParts((xs) => xs.map((x, n) => (n === i ? friend : x)));
            }}
          />
        ))}
      </div>
      {p.hint > 0 && (
        <p>
          Semua petak sama luas. Bandingkan kedua bagian dengan seluruh roti.
        </p>
      )}
      <button
        className="primary"
        onClick={() => check(halfValid(parts), parts.join(","))}
      >
        Periksa bagian
      </button>
      <Feedback message={message} />
    </>
  );
}
function Change(p: Props) {
  const initial = p.variation % 2 ? 2 : 3,
    target = p.variation % 2 ? 4 : 1;
  const [places, setPlaces] = useSessionValue<(number | null)[]>(
    "change-places",
    Array.from({ length: 6 }, (_, i) => (i < initial ? 1 : 0)),
    (v) => isPlaces(v, 6, 1) && (v as unknown[]).every((n) => n !== null),
  );
  const [selected, setSelected] = useSessionValue(
    "change-selected",
    0,
    (v) => isCount(v) && (v as number) < 6,
  );
  const { message, check } = useFeedback(p);
  return (
    <>
      <p className="target-dots">
        Kebutuhan bekal <Dots count={target} />
      </p>
      <Places
        values={places}
        label="Pilih bekal"
        onPlace={setSelected}
        render={(i) => (
          <span className={selected === i ? "selected" : ""}>
            <Fruit kind={0} />
            <small>{places[i] ? "Bekal" : "Persediaan"}</small>
          </span>
        )}
      />
      <div className="change-bins">
        {[0, 1].map((bin) => (
          <button
            key={bin}
            className="category-target"
            aria-label={bin ? "Tempat bekal" : "Persediaan bekal"}
            onClick={() => {
              p.onAttempt();
              setPlaces((v) => v.map((x, i) => (i === selected ? bin : x)));
            }}
          >
            <strong>{bin ? "Bekal" : "Persediaan"}</strong>
            <span>
              {places.map((v, i) => v === bin && <Fruit key={i} kind={0} />)}
            </span>
          </button>
        ))}
      </div>
      {p.hint > 0 && <p>Pasangkan setiap titik dengan satu bekal.</p>}
      <button
        className="primary"
        onClick={() =>
          check(
            places.filter((v) => v === 1).length === target,
            places.join(","),
          )
        }
      >
        Periksa kebutuhan
      </button>
      <Feedback message={message} />
    </>
  );
}
function HarborMap(p: Props) {
  const goal = p.variation % 2 ? 2 : 0,
    landmarks: Record<number, string> = {
      0: "Pohon",
      2: "Kincir",
      8: "Dermaga",
    };
  const [path, setPath] = useSessionValue<number[]>(
    "harbor-route",
    [6],
    (v) =>
      Array.isArray(v) &&
      v[0] === 6 &&
      v.length <= 100 &&
      v.slice(1).every((n, i) => mapRouteStep(v.slice(0, i + 1), n)),
  );
  const { message, setMessage, check } = useFeedback(p);
  const icon = (i: number) => (
    <span aria-hidden="true">
      {i === 0 ? "♣" : i === 2 ? "⚙" : i === 8 ? "⚓" : i === 4 ? "●" : ""}
    </span>
  );
  return (
    <>
      <div className="harbor-map-pair">
        <div
          className="mini-harbor-map"
          aria-label={`Peta kecil, tujuan ${landmarks[goal]}`}
        >
          {Array.from({ length: 9 }, (_, i) => (
            <span key={i} className={i === goal ? "map-target" : ""}>
              {icon(i)}
              {i === goal && <span>✦</span>}
              {i === 6 && <small>Mulai</small>}
            </span>
          ))}
        </div>
        <div className="harbor-world-grid" aria-label="Dunia pelabuhan">
          {Array.from({ length: 9 }, (_, i) => (
            <button
              key={i}
              aria-label={`Petak ${i + 1}${landmarks[i] ? `, ${landmarks[i]}` : i === 4 ? ", batu" : ""}${path[path.length - 1] === i ? ", Lumi di sini" : ""}`}
              onClick={() => {
                p.onAttempt();
                if (!mapRouteStep(path, i)) {
                  setMessage("Pilih petak di samping Lumi tanpa batu.");
                  return;
                }
                setPath((v) =>
                  v.includes(i) ? v.slice(0, v.indexOf(i) + 1) : [...v, i],
                );
                setMessage("");
              }}
            >
              {path[path.length - 1] === i ? <Lumi /> : icon(i)}
            </button>
          ))}
        </div>
      </div>
      {p.hint > 0 && (
        <p>
          Cari gambar yang sama pada peta kecil dan dunia. Bintang menandai
          tujuan.
        </p>
      )}
      <button
        className="primary"
        onClick={() => check(path[path.length - 1] === goal, path.join(","))}
      >
        Periksa tempat
      </button>
      <Feedback message={message} />
    </>
  );
}
export function MapTwoBoard(p: Props) {
  let board;
  switch (p.id) {
    case "measure-path":
      board = <MeasurePath {...p} />;
      break;
    case "measure-unit":
      board = <MeasureUnit {...p} />;
      break;
    case "measure-water":
      board = <Water {...p} />;
      break;
    case "data-votes":
    case "data-packing":
      board = <Votes {...p} />;
      break;
    case "data-cross":
      board = <Cross {...p} />;
      break;
    case "space-solids":
      board = <Solids {...p} />;
      break;
    case "space-faces":
      board = <Faces {...p} />;
      break;
    case "space-build":
      board = <Build {...p} />;
      break;
    case "harbor-halves":
      board = <Halves {...p} />;
      break;
    case "harbor-change":
      board = <Change {...p} />;
      break;
    case "harbor-map":
      board = <HarborMap {...p} />;
      break;
  }
  return (
    <fieldset disabled={p.done} className={`map2-board map2-${p.id}`}>
      {board}
    </fieldset>
  );
}
