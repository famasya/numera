import {
  useSessionValue,
  isPlaces,
  isStrings,
  isBoolean,
} from "../../world/progression/session";
import { useState } from "react";
import { Manipulative } from "../../components/Manipulative";
import { colors } from "../../content/missions";
import { compositionKey } from "../../pedagogy/concepts";
import { Flower } from "../../components/Art";
type Props = {
  hint: number;
  onAttempt: () => void;
  onComplete: (solutions: string[]) => void;
  onSolution: (solution: string) => void;
};
export function Composition({
  hint,
  onAttempt,
  onComplete,
  onSolution,
}: Props) {
  const [beds, setBeds] = useSessionValue<(number | null)[]>(
    "beds",
    Array(5).fill(null),
    (v) => isPlaces(v, 5, 1),
  );
  const [selected, setSelected] = useState<number | null>(null);
  const [discoveries, setDiscoveries] = useSessionValue<string[]>(
    "discoveries",
    [],
    isStrings,
  );
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useSessionValue("finished", false, isBoolean);
  function place(id: number, target: string) {
    if (finished) return;
    if (target !== "0" && target !== "1" && target !== "basket") return;
    onAttempt();
    const next = [...beds];
    next[id] = target === "basket" ? null : Number(target);
    setBeds(next);
    setSelected(null);
    setMessage("");
  }
  function discover() {
    if (finished) return;
    onAttempt();
    const key = compositionKey(beds);
    if (!key) {
      setMessage(
        "Masih ada bunga di keranjang. Pindahkan bunga ke petak kebun.",
      );
      return;
    }
    if (discoveries.includes(key)) {
      setMessage("Susunan ini sudah disimpan. Pindahkan satu bunga.");
      return;
    }
    const next = [...discoveries, key];
    setDiscoveries(next);
    onSolution(key);
    setMessage("Susunan tersimpan. Kamu boleh mencoba susunan lain.");
  }
  return (
    <div className={`composition-play activity-board hint-${hint}`}>
      <div className="flower-beds">
        {[0, 1].map((b) => (
          <div
            className={`flower-bed ${selected !== null || hint > 0 ? "receptive" : ""}`}
            key={b}
            data-drop={b}
            onClick={(e) => {
              if ((e.target as Element).closest(".flower-piece")) return;
              const id = selected ?? beds.findIndex((x) => x === null);
              if (id >= 0) place(id, String(b));
            }}
          >
            <button
              className="bed-target"
              data-drop={b}
              aria-label={`Pindahkan ke petak ${b === 0 ? "matahari" : "bulan"}`}
              onClick={(e) => {
                e.stopPropagation();
                const id = selected ?? beds.findIndex((x) => x === null);
                if (id >= 0) place(id, String(b));
              }}
            >
              <span className="bed-sign">
                <svg viewBox="0 0 45 45" aria-hidden="true">
                  {b === 0 ? (
                    <>
                      <circle cx="22" cy="22" r="15" fill="var(--color-sun)" />
                      <path
                        d="M22 1v5M22 39v5M1 22h5M39 22h5"
                        stroke="var(--color-sun)"
                        strokeWidth="3"
                      />
                    </>
                  ) : (
                    <path
                      d="M30 5A18 18 0 1 0 37 32A18 18 0 0 1 30 5"
                      fill="var(--color-moon)"
                    />
                  )}
                </svg>
              </span>
            </button>
            <div className="bed-flowers">
              {beds.map(
                (bed, i) =>
                  bed === b && (
                    <Manipulative
                      key={i}
                      id={i}
                      color={colors[i]}
                      selected={selected === i}
                      onSelect={setSelected}
                      onDrop={place}
                      label={`Bunga ${i + 1} di petak ${b === 0 ? "matahari" : "bulan"}`}
                    />
                  ),
              )}
            </div>
          </div>
        ))}
      </div>
      <div
        className="flower-basket"
        data-drop="basket"
        aria-label="Keranjang bunga"
      >
        {beds.map(
          (b, i) =>
            b === null && (
              <Manipulative
                key={i}
                id={i}
                color={colors[i]}
                selected={selected === i}
                onSelect={setSelected}
                onDrop={place}
              />
            ),
        )}
      </div>
      {hint >= 2 && (
        <div className="composition-demo" aria-hidden="true">
          <Flower />
          <span>↔</span>
          <Flower color="var(--flower-yellow)" />
        </div>
      )}
      <div className="discover-controls">
        <button
          className="primary small"
          disabled={finished}
          onClick={discover}
          aria-label="Simpan susunan bunga"
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="m5 12 4 4L19 6"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>{" "}
          Simpan susunan
        </button>
        {discoveries.length > 0 && (
          <button
            className="secondary"
            disabled={finished}
            aria-label="Lanjutkan misi"
            onClick={() => {
              setFinished(true);
              onComplete(discoveries);
            }}
          >
            Lanjut <span>→</span>
          </button>
        )}
      </div>
      <p className="gentle-message" aria-live="polite">
        {message}
      </p>
      <div className="discovery-strip" aria-label="Susunan yang ditemukan">
        {discoveries.map((key) => (
          <div className="discovery" key={key}>
            {key.split(":").map((n, i) => (
              <span className="dot-group" key={i}>
                {Array.from({ length: Number(n) }, (_, j) => (
                  <i key={j} style={{ background: colors[j] }} />
                ))}
                {n === "0" && <span className="empty-group" />}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
