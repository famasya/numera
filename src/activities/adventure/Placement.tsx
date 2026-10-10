import {
  useSessionValue,
  isPlaces,
  isBoolean,
} from "../../world/progression/session";
import { useState } from "react";
import type { MissionId } from "../../content/missions";
import { Manipulative } from "../../components/Manipulative";
import { placementValid } from "../../pedagogy/concepts";
import { Dots, ObjectArt } from "./Objects";
type Props = {
  kind: MissionId;
  hint: number;
  onAttempt: () => void;
  onMiss: () => void;
  onComplete: (solutions: string[]) => void;
};
export function Placement({
  kind,
  hint,
  onAttempt,
  onMiss,
  onComplete,
}: Props) {
  const total =
    kind === "matching" || kind === "sharing" ? 4 : kind === "orders" ? 5 : 6;
  const targets = kind === "matching" ? 4 : 2;
  const [places, setPlaces] = useSessionValue<(number | null)[]>(
    "places",
    () => (kind === "compare" ? [0, 0, 0, 0, 1, 1] : Array(total).fill(null)),
    (v) => isPlaces(v, total, targets - 1),
  );
  const [selected, setSelected] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useSessionValue("finished", false, isBoolean);
  const itemKind = (i: number) =>
    kind === "sorting"
      ? i % 2
        ? "flower"
        : "leaf"
      : kind === "compare"
        ? "stone"
        : kind === "orders"
          ? "flower"
          : "fruit";
  const names = {
    fruit: "Buah",
    stone: "Batu",
    flower: "Bunga",
    leaf: "Daun",
    friend: "Teman",
  };
  const desired = (i: number) =>
    kind === "orders"
      ? i === 0
        ? 3
        : 2
      : kind === "sharing"
        ? 2
        : kind === "compare"
          ? 3
          : 1;
  function place(id: number, target: string) {
    if (finished || !Number.isInteger(id) || id < 0 || id >= total) return;
    const b = target === "basket" ? null : Number(target);
    if (b !== null && (!Number.isInteger(b) || b < 0 || b >= targets)) return;
    onAttempt();
    if (
      (kind === "matching" &&
        b !== null &&
        places.some((p, i) => p === b && i !== id)) ||
      (kind === "sorting" && b !== null && b !== id % 2)
    ) {
      onMiss();
      setMessage(
        kind === "sorting"
          ? "Perhatikan gambar pada keranjang."
          : "Teman ini sudah mendapat buah.",
      );
      return;
    }
    const next = [...places];
    next[id] = b;
    setPlaces(next);
    setSelected(null);
    setMessage("");
    if (placementValid(kind, next)) {
      setFinished(true);
      onComplete([next.join(",")]);
    }
  }
  const piece = (i: number) => (
    <Manipulative
      key={i}
      id={i}
      color="var(--flower-pink)"
      selected={selected === i}
      onSelect={setSelected}
      onDrop={place}
      label={`${names[itemKind(i)]} ${i + 1}`}
    >
      <ObjectArt kind={itemKind(i)} />
    </Manipulative>
  );
  return (
    <div className={`adventure-board placement-board ${kind} hint-${hint}`}>
      <div
        className="adventure-targets"
        style={{
          gridTemplateColumns: `repeat(${targets === 4 ? 2 : targets}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: targets }, (_, b) => (
          <div
            key={b}
            className={`adventure-target ${hint > 0 ? "hint-glow" : ""}`}
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
              className="target-sign"
              data-drop={b}
              aria-label={
                kind === "compare"
                  ? `Kolam ${b === 0 ? "kiri" : "kanan"}`
                  : `Tempat ${b + 1}`
              }
              onClick={(e) => {
                e.stopPropagation();
                if (selected !== null) place(selected, String(b));
              }}
            >
              {kind === "sorting" ? (
                <ObjectArt kind={b === 0 ? "leaf" : "flower"} />
              ) : kind === "matching" || kind === "sharing" ? (
                <ObjectArt kind="friend" />
              ) : kind === "compare" ? (
                <svg viewBox="0 0 100 90" aria-hidden="true">
                  <ellipse
                    cx="50"
                    cy="45"
                    rx="44"
                    ry="31"
                    fill="var(--color-ocean)"
                  />
                  <path
                    d="M18 40Q28 32 38 40T58 40T78 40M24 55Q34 47 44 55T64 55"
                    stroke="var(--color-surface)"
                    strokeWidth="5"
                    fill="none"
                  />
                </svg>
              ) : (
                <Dots count={desired(b)} />
              )}
            </button>
            {hint >= 2 && kind !== "sorting" && <Dots count={desired(b)} />}
            <div className="placed-objects">
              {places.map((p, i) => (p === b ? piece(i) : null))}
            </div>
          </div>
        ))}
      </div>
      <div
        className="adventure-basket"
        data-drop="basket"
        aria-label="Keranjang benda"
        onClick={(e) => {
          if (
            selected !== null &&
            !(e.target as Element).closest(".flower-piece")
          )
            place(selected, "basket");
        }}
      >
        {places.map((p, i) => (p === null ? piece(i) : null))}
      </div>
      <p className="gentle-message" aria-live="polite">
        {message}
      </p>
      {kind === "compare" && (
        <div className="balance-preview" aria-hidden="true">
          <Dots count={places.filter((p) => p === 0).length} />
          <span>↔</span>
          <Dots count={places.filter((p) => p === 1).length} />
        </div>
      )}
    </div>
  );
}
