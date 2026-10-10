import {
  useSessionValue,
  isPlaces,
  isBoolean,
} from "../../world/progression/session";
import { useState } from "react";
import { Manipulative } from "../../components/Manipulative";
import { growingValid } from "../../pedagogy/concepts";
import { ObjectArt, Dots } from "./Objects";
type Props = {
  hint: number;
  onAttempt: () => void;
  onMiss: () => void;
  onComplete: (solutions: string[]) => void;
};
export function Growing({ hint, onAttempt, onMiss, onComplete }: Props) {
  const [slots, setSlots] = useSessionValue<(number | null)[]>(
    "groups",
    [null, null, null, null],
    (v) => isPlaces(v, 4, 4, 1),
  );
  const [selected, setSelected] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useSessionValue("finished", false, isBoolean);
  function place(id: number, target: string) {
    if (finished) return;
    const i = Number(target);
    if (!Number.isInteger(i) || i < 0 || i > 3) return;
    onAttempt();
    const next = slots.map((v) => (v === id ? null : v));
    const old = next[i];
    next[i] = id;
    if (old !== null) {
      const previous = slots.indexOf(id);
      if (previous >= 0) next[previous] = old;
    }
    setSlots(next);
    setSelected(null);
    setMessage("");
    if (growingValid(next)) {
      setFinished(true);
      onComplete([next.join(",")]);
    } else if (next.every((n) => n !== null)) {
      onMiss();
      setMessage("Perhatikan jumlah batu. Mulai dari yang paling sedikit.");
    }
  }
  const group = (n: number) => (
    <Manipulative
      id={n}
      color="var(--flower-muted)"
      selected={selected === n}
      onSelect={setSelected}
      onDrop={place}
      label={`Kelompok ${n} batu`}
    >
      <span className="stone-group">
        {Array.from({ length: n }, (_, j) => (
          <ObjectArt key={j} kind="stone" />
        ))}
      </span>
    </Manipulative>
  );
  return (
    <div className={`adventure-board growing-board hint-${hint}`}>
      <div className="growing-path" aria-label="Jalan dari sedikit ke banyak">
        {slots.map((n, i) => (
          <div className="group-slot" data-drop={i} key={i}>
            {n === null ? (
              <button
                className="group-empty"
                aria-label={`Tempat kelompok ${i + 1}`}
                onClick={() => {
                  if (selected !== null) place(selected, String(i));
                }}
              >
                {hint >= 2 ? <Dots count={i + 1} /> : <span>○</span>}
              </button>
            ) : (
              group(n)
            )}
          </div>
        ))}
      </div>
      <div className="adventure-basket">
        {[3, 1, 4, 2].map(
          (n) => !slots.includes(n) && <span key={n}>{group(n)}</span>,
        )}
      </div>
      <p className="gentle-message" aria-live="polite">
        {message}
      </p>
    </div>
  );
}
