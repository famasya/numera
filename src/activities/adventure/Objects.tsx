import { Flower } from "../../components/Art";
export function ObjectArt({
  kind,
}: {
  kind: "fruit" | "stone" | "leaf" | "flower" | "friend";
}) {
  if (kind === "flower") return <Flower />;
  return (
    <svg viewBox="0 0 100 110" aria-hidden="true">
      {kind === "fruit" ? (
        <>
          <path
            d="M48 34Q25 15 13 45Q0 80 33 98Q49 105 59 98Q95 102 95 60Q92 27 67 32Z"
            fill="var(--flower-pink)"
            stroke="var(--color-focus)"
            strokeWidth="3"
          />
          <path
            d="M49 39Q44 22 53 8"
            stroke="var(--flower-stem)"
            strokeWidth="7"
            fill="none"
          />
          <path d="M53 22Q62 0 86 12Q82 33 53 22" fill="var(--flower-leaf)" />
          <ellipse
            cx="27"
            cy="53"
            rx="7"
            ry="13"
            fill="var(--flower-highlight)"
          />
        </>
      ) : kind === "stone" ? (
        <>
          <path
            d="M8 82L19 42L47 24L78 40L94 80Q48 107 8 82"
            fill="var(--color-border)"
            stroke="var(--color-muted)"
            strokeWidth="3"
          />
          <path d="M21 47L46 30L72 45L44 57Z" fill="var(--color-soft)" />
        </>
      ) : kind === "leaf" ? (
        <>
          <path
            d="M17 95Q-3 22 83 12Q109 92 17 95"
            fill="var(--flower-leaf)"
            stroke="var(--flower-stem)"
            strokeWidth="4"
          />
          <path
            d="M16 101L70 30M35 75L30 50M47 61L73 62"
            stroke="var(--flower-stem)"
            strokeWidth="4"
          />
        </>
      ) : (
        <>
          <ellipse
            cx="50"
            cy="78"
            rx="39"
            ry="27"
            fill="var(--flower-yellow)"
          />
          <circle cx="29" cy="29" r="19" fill="var(--flower-leaf)" />
          <circle cx="71" cy="29" r="19" fill="var(--flower-leaf)" />
          <ellipse cx="50" cy="58" rx="38" ry="31" fill="var(--flower-leaf)" />
          <circle cx="30" cy="30" r="12" fill="var(--color-surface)" />
          <circle cx="70" cy="30" r="12" fill="var(--color-surface)" />
          <circle cx="33" cy="31" r="5" fill="var(--color-ink)" />
          <circle cx="67" cy="31" r="5" fill="var(--color-ink)" />
          <path
            d="M33 64Q50 82 67 64"
            stroke="var(--color-ink)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}
export function Dots({ count }: { count: number }) {
  return (
    <span className="quantity-dots" aria-label={`${count} titik`}>
      {Array.from({ length: count }, (_, i) => (
        <i key={i} />
      ))}
    </span>
  );
}
