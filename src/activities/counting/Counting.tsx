import { useSessionValue, isPlaces } from "../../world/progression/session";
import { useState } from "react";
import { Manipulative } from "../../components/Manipulative";
import { colors } from "../../content/missions";
import { plantingValid } from "../../pedagogy/concepts";
import { Flower } from "../../components/Art";
type Props = {
  hint: number;
  variation: number;
  preset?: boolean;
  onAttempt: () => void;
  onComplete: (solutions: string[]) => void;
};
export function Counting({
  hint,
  variation,
  preset,
  onAttempt,
  onComplete,
}: Props) {
  const [slots, setSlots] = useSessionValue<(number | null)[]>(
    "slots",
    preset ? [0, 1, null, null, null] : Array(5).fill(null),
    (v) =>
      isPlaces(v, 5, 4) &&
      new Set((v as (number | null)[]).filter((x) => x !== null)).size ===
        (v as (number | null)[]).filter((x) => x !== null).length,
  );
  const [selected, setSelected] = useState<number | null>(null);
  const complete = plantingValid(slots);
  function place(id: number, target: string) {
    if (complete) return;
    onAttempt();
    const next = slots.map((v) => (v === id ? null : v));
    if (target === "basket") {
      setSlots(next);
      setSelected(null);
      return;
    }
    const index = Number(target);
    if (!Number.isInteger(index) || index < 0 || index >= 5) return;
    if (next[index] !== null) {
      setSelected(id);
      return;
    }
    next[index] = id;
    setSlots(next);
    setSelected(null);
    if (plantingValid(next)) onComplete([next.join(",")]);
  }
  const positions =
    variation % 2
      ? [
          [24, 29],
          [65, 25],
          [42, 51],
          [17, 69],
          [73, 68],
        ]
      : [
          [20, 32],
          [48, 25],
          [76, 32],
          [33, 66],
          [65, 66],
        ];
  return (
    <div className={`counting-play activity-board hint-${hint}`}>
      <div
        className="quantity-preview"
        aria-label="Lima bunga untuk lima tempat"
      >
        {colors.map((c, i) => (
          <Flower
            key={i}
            color={slots.includes(i) ? "var(--flower-muted)" : c}
          />
        ))}
      </div>
      <div className="planting-area" aria-label="Kebun bunga">
        {slots.map((flower, i) => (
          <div
            key={i}
            className={`plant-spot ${flower !== null ? "planted" : ""} ${hint > 0 && i === slots.findIndex((s) => s === null) ? "hint-glow" : ""}`}
            style={{ left: `${positions[i][0]}%`, top: `${positions[i][1]}%` }}
            data-drop={i}
          >
            {flower === null ? (
              <button
                className="empty-spot"
                aria-label={`Tempat tanam ${i + 1}`}
                data-drop={i}
                onClick={() => {
                  const id =
                    selected ?? colors.findIndex((_, j) => !slots.includes(j));
                  if (id >= 0) place(id, String(i));
                }}
              >
                <svg viewBox="0 0 100 90" aria-hidden="true">
                  <ellipse cx="50" cy="58" rx="42" ry="24" fill="#947451" />
                  <ellipse cx="50" cy="53" rx="34" ry="18" fill="#705c45" />
                  <path
                    d="M50 42V65M39 53H61"
                    stroke="#cfb58c"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            ) : (
              <Manipulative
                id={flower}
                color={colors[flower]}
                selected={selected === flower}
                onSelect={setSelected}
                onDrop={place}
                label={`Bunga ${flower + 1}, sudah ditanam`}
              />
            )}
          </div>
        ))}
      </div>
      {hint >= 2 && !complete && (
        <div className="demo-hand" aria-hidden="true">
          <Flower color={colors[0]} />
          <span>↗</span>
          <svg viewBox="0 0 80 50">
            <ellipse cx="40" cy="30" rx="35" ry="15" fill="#947451" />
          </svg>
        </div>
      )}
      <div
        className="flower-basket"
        data-drop="basket"
        aria-label="Keranjang bunga"
      >
        <div className="basket-rim" />
        {colors.map(
          (c, i) =>
            !slots.includes(i) && (
              <Manipulative
                key={i}
                id={i}
                color={c}
                selected={selected === i}
                onSelect={setSelected}
                onDrop={place}
              />
            ),
        )}
      </div>
    </div>
  );
}
