import type { Token } from "../content/puzzles";
const colorNames = ["merah muda", "kuning", "ungu"];
const names = {
  mushroom: "Jamur",
  leaf: "Daun",
  lantern: "Lentera",
  circle: "Lingkaran",
  square: "Persegi",
  triangle: "Segitiga",
  rectangle: "Persegi panjang",
  arrow: "Panah",
  star: "Bintang",
};
export const tokenLabel = (t: Token) =>
  `${names[t.kind]} ${colorNames[t.color % 3]}${t.size && t.size < 1 ? " kecil" : ""}`;
export function TokenArt({
  token,
  shadow = false,
}: {
  token: Token;
  shadow?: boolean;
}) {
  const fill = shadow
    ? "var(--color-soft)"
    : ["var(--flower-pink)", "var(--flower-yellow)", "var(--flower-purple)"][
        token.color % 3
      ];
  const stroke = shadow ? "var(--color-accent)" : "var(--color-ink)";
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className="token-art">
      <g
        transform={`translate(50 50) rotate(${(token.turn || 0) * 90}) scale(${token.size || 1}) translate(-50 -50)`}
        fill={fill}
        stroke={stroke}
        strokeWidth="3"
        strokeLinejoin="round"
      >
        {token.kind === "circle" && <circle cx="50" cy="50" r="36" />}
        {token.kind === "square" && (
          <rect x="15" y="15" width="70" height="70" rx="5" />
        )}
        {token.kind === "rectangle" && (
          <rect x="13" y="26" width="74" height="48" rx="5" />
        )}
        {token.kind === "triangle" && <path d="M50 12L88 84H12Z" />}
        {token.kind === "arrow" && <path d="M37 85V45H17L50 12L83 45H63V85Z" />}
        {token.kind === "star" && (
          <path d="M50 8L63 35L92 39L71 59L76 89L50 75L24 89L29 59L8 39L37 35Z" />
        )}
        {token.kind === "mushroom" && (
          <>
            <path
              d="M38 45L32 87Q50 97 68 87L62 45Z"
              fill="var(--flower-outline)"
            />
            <path d="M8 49Q12 9 50 9Q88 9 92 49Q50 69 8 49Z" />
            <g fill="var(--flower-outline)" stroke="none">
              <circle cx="30" cy="31" r="7" />
              <circle cx="62" cy="25" r="8" />
              <circle cx="76" cy="43" r="5" />
            </g>
            <path d="M43 77Q50 83 57 77" fill="none" />
          </>
        )}
        {token.kind === "leaf" && (
          <>
            <path d="M17 82Q0 15 86 12Q98 77 17 82Z" />
            <path d="M15 87L73 27M35 65L32 38M51 48L76 47" fill="none" />
          </>
        )}
        {token.kind === "lantern" && (
          <>
            <path d="M40 16Q50-2 60 16" fill="none" />
            <path d="M28 20H72L83 55L70 85H30L17 55Z" />
            <path d="M28 20L38 55L30 85M72 20L62 55L70 85" fill="none" />
            <path d="M25 88H75M50 88V96" fill="none" />
          </>
        )}
      </g>
      {!shadow && token.weight && (
        <g fill="var(--color-ink)">
          {Array.from({ length: token.weight }, (_, i) => (
            <circle
              key={i}
              cx={50 + (i - (token.weight! - 1) / 2) * 13}
              cy="50"
              r="4"
            />
          ))}
        </g>
      )}
    </svg>
  );
}
