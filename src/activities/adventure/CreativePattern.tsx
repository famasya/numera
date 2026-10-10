import {
  useSessionValue,
  isPlaces,
  isBoolean,
} from "../../world/progression/session";
import { useState } from "react";
import { Flower } from "../../components/Art";
import { Manipulative } from "../../components/Manipulative";
import {
  repeatedUnitValid,
  repairValid,
  repairPattern,
} from "../../pedagogy/concepts";
type Props = {
  repair: boolean;
  hint: number;
  onAttempt: () => void;
  onMiss: () => void;
  onComplete: (solutions: string[]) => void;
};
export function CreativePattern({
  repair,
  hint,
  onAttempt,
  onMiss,
  onComplete,
}: Props) {
  const [pieces, setPieces] = useSessionValue<(number | null)[]>(
    "pieces",
    () => (repair ? [0, 1, 0, 0, 0, 1] : [null, null, null, null]),
    (v) => isPlaces(v, repair ? 6 : 4, 1),
  );
  const [selected, setSelected] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useSessionValue("finished", false, isBoolean);
  const color = (i: number) =>
    i === 0 ? "var(--flower-pink)" : "var(--flower-yellow)";
  function place(id: number, target: string) {
    if (finished) return;
    const i = Number(target);
    if (!Number.isInteger(i) || i < 0 || i >= pieces.length) return;
    onAttempt();
    if (repair && id !== repairPattern[i]) {
      onMiss();
      setMessage("Perhatikan warna bunga di sebelahnya.");
      return;
    }
    const next = [...pieces];
    next[i] = id;
    setPieces(next);
    setSelected(null);
    setMessage("");
    const valid = repair
      ? repairValid(next as number[])
      : repeatedUnitValid(next);
    if (valid) {
      setFinished(true);
      onComplete([next.slice(0, repair ? 6 : 2).join("-")]);
    } else if (next.every((n) => n !== null)) {
      onMiss();
      setMessage("Warna bunga ketiga dan keempat mengikuti dua bunga pertama.");
    }
  }
  return (
    <div className={`adventure-board creative-board hint-${hint}`}>
      {hint >= 2 && (
        <div className="unit-preview">
          {(repair ? [0, 1] : pieces.slice(0, 2)).map((n, i) =>
            n !== null ? (
              <Flower key={i} color={color(n)} />
            ) : (
              <span key={i}>○</span>
            ),
          )}
          <span>↻</span>
        </div>
      )}
      <div
        className={`creative-path ${repair ? "repair-path" : "gate-path"}`}
        aria-label={
          repair
            ? "Jalan bunga yang perlu diperbaiki"
            : "Gerbang dengan dua kelompok bunga"
        }
      >
        {pieces.map((n, i) => (
          <button
            key={i}
            data-drop={i}
            className={`creative-slot ${hint > 0 && repair && n !== repairPattern[i] ? "hint-glow" : ""}`}
            aria-label={`${repair ? "Bunga jalan" : "Tempat gerbang"} ${i + 1}`}
            onClick={() => {
              if (selected !== null) place(selected, String(i));
            }}
          >
            {n === null ? <span>○</span> : <Flower color={color(n)} />}
          </button>
        ))}
      </div>
      <div className="adventure-basket">
        {[0, 1].map((n) => (
          <Manipulative
            key={n}
            id={n}
            color={color(n)}
            selected={selected === n}
            onSelect={setSelected}
            onDrop={place}
            label={`Pilih bunga ${n === 0 ? "merah muda" : "kuning"}`}
          />
        ))}
      </div>
      <p className="gentle-message" aria-live="polite">
        {message}
      </p>
    </div>
  );
}
