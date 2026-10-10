import { useSessionValue } from "../../world/progression/session";
import { useState } from "react";
import {
  patternAt,
  patternVariant,
  type PatternColor,
} from "../../pedagogy/concepts";
import { Manipulative } from "../../components/Manipulative";
import { Flower } from "../../components/Art";
type Props = {
  hint: number;
  runs: number;
  rich: boolean;
  onAttempt: () => void;
  onMiss: () => void;
  onComplete: (solutions: string[]) => void;
};
export function Patterns({
  hint,
  runs,
  rich,
  onAttempt,
  onMiss,
  onComplete,
}: Props) {
  const pattern = patternVariant(runs, rich);
  const [filled, setFilled] = useSessionValue<Record<number, PatternColor>>(
    "filled",
    {},
    (v) =>
      !!v &&
      typeof v === "object" &&
      !Array.isArray(v) &&
      Object.entries(v).every(
        ([i, c]) =>
          pattern.missing.includes(Number(i)) &&
          (c === "pink" || c === "yellow") &&
          c === patternAt(Number(i), pattern.unit),
      ),
  );
  const [selected, setSelected] = useState<number | null>(null);
  const [miss, setMiss] = useState<number | null>(null);
  const choices: PatternColor[] = ["pink", "yellow"];
  const color = (c: PatternColor) =>
    c === "pink" ? "var(--flower-pink)" : "var(--flower-yellow)";
  function place(id: number, target: string) {
    const i = Number(target);
    if (!pattern.missing.includes(i) || filled[i]) return;
    onAttempt();
    if (choices[id] !== patternAt(i, pattern.unit)) {
      setMiss(i);
      onMiss();
      setSelected(null);
      return;
    }
    const next = { ...filled, [i]: choices[id] };
    setFilled(next);
    setSelected(null);
    setMiss(null);
    if (pattern.missing.every((i) => next[i]))
      onComplete([pattern.unit.join("-")]);
  }
  return (
    <div className={`patterns-play activity-board hint-${hint}`}>
      {hint >= 2 && (
        <div className="unit-preview" aria-label="Kelompok yang berulang">
          {pattern.unit.map((c, i) => (
            <Flower key={i} color={color(c)} />
          ))}
          <span>↻</span>
        </div>
      )}
      <div className="pattern-path" aria-label="Jalan dengan pola bunga">
        {Array.from({ length: pattern.length }, (_, i) => {
          const missing = pattern.missing.includes(i) && !filled[i];
          return (
            <div
              className={`pattern-tile ${missing ? "missing" : ""} ${miss === i ? "gentle-wiggle" : ""} ${hint > 0 && missing ? "hint-glow" : ""} ${hint >= 2 && i % pattern.unit.length === 0 ? "unit-start" : ""}`}
              key={i}
              data-drop={i}
            >
              {missing ? (
                <button
                  aria-label={`Tempat pola ${i + 1}`}
                  data-drop={i}
                  onClick={() => {
                    if (selected !== null) place(selected, String(i));
                    else setMiss(i);
                  }}
                >
                  <span aria-hidden="true">
                    {hint >= 3 ? (
                      <Flower color={color(patternAt(i, pattern.unit))} />
                    ) : (
                      <svg viewBox="0 0 80 80">
                        <path
                          d="M29 27Q29 12 43 13Q58 14 57 28Q56 35 42 42V51"
                          stroke="var(--color-pattern-mark)"
                          strokeWidth="6"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="42"
                          cy="63"
                          r="4"
                          fill="var(--color-pattern-mark)"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              ) : (
                <Flower
                  color={color(filled[i] || patternAt(i, pattern.unit))}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="pattern-palette" aria-label="Bunga untuk melengkapi pola">
        {choices.map((c, i) => (
          <Manipulative
            key={c}
            id={i}
            color={color(c)}
            selected={selected === i}
            onSelect={setSelected}
            onDrop={place}
            label={`Pilih bunga ${c === "pink" ? "merah muda" : "kuning"}`}
          />
        ))}
      </div>
      <div className="visual-instruction" aria-hidden="true">
        <span className="little-dot pink" />
        <span>→</span>
        <span className="little-slot" />
      </div>
    </div>
  );
}
