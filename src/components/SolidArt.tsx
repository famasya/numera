import { cubeFaces, type SolidKind } from "../pedagogy/map-two";

export function SolidArt({
  kind,
  yaw = 35,
  pitch = -25,
  marked = [],
  onFace,
  long = false,
  color,
}: {
  kind: SolidKind;
  yaw?: number;
  pitch?: number;
  marked?: number[];
  onFace?: (id: number) => void;
  long?: boolean;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="solid-art"
      role={onFace ? "group" : "img"}
      aria-label={
        kind === "cube"
          ? "Bangun kubus"
          : kind === "sphere"
            ? "Bangun bola"
            : "Bangun silinder"
      }
    >
      {kind === "cube" ? (
        cubeFaces(yaw, pitch).map((f) => (
          <g
            key={f.id}
            role={onFace ? "button" : undefined}
            tabIndex={onFace ? 0 : undefined}
            aria-label={
              onFace
                ? `Sisi ${f.id + 1}${marked.includes(f.id) ? ", sudah ditandai" : ""}`
                : undefined
            }
            aria-pressed={onFace ? marked.includes(f.id) : undefined}
            onClick={() => onFace?.(f.id)}
            onKeyDown={(e) => {
              if (onFace && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                onFace(f.id);
              }
            }}
          >
            <polygon
              points={f.points}
              transform={long ? "translate(-80 0) scale(1.8 1)" : undefined}
              fill={
                marked.includes(f.id)
                  ? "var(--flower-yellow)"
                  : (color ??
                    [
                      "var(--color-basket)",
                      "var(--color-basket-rim)",
                      "var(--color-basket-stripe)",
                    ][f.id % 3])
              }
              stroke="var(--color-basket-edge)"
              strokeWidth="3"
            />
            {onFace && marked.includes(f.id) && (
              <circle
                cx={
                  f.points
                    .split(" ")
                    .map((p) => Number(p.split(",")[0]))
                    .reduce((a, b) => a + b, 0) / 4
                }
                cy={
                  f.points
                    .split(" ")
                    .map((p) => Number(p.split(",")[1]))
                    .reduce((a, b) => a + b, 0) / 4
                }
                r="8"
                fill="var(--color-primary)"
                pointerEvents="none"
              />
            )}
          </g>
        ))
      ) : kind === "sphere" ? (
        <>
          <circle
            cx="100"
            cy="100"
            r="65"
            fill={color ?? "var(--flower-purple)"}
            stroke="var(--color-moon)"
            strokeWidth="3"
          />
          <ellipse
            cx="100"
            cy="100"
            rx={30 + Math.abs(Math.sin((yaw * Math.PI) / 180)) * 25}
            ry="65"
            fill="none"
            stroke="var(--color-moon)"
            strokeWidth="2"
          />
          <ellipse
            cx="100"
            cy="100"
            rx="65"
            ry={12 + Math.abs(Math.sin((pitch * Math.PI) / 180)) * 16}
            fill="none"
            stroke="var(--color-moon)"
            strokeWidth="2"
          />
          <ellipse
            cx="76"
            cy="64"
            rx="20"
            ry="13"
            fill="var(--color-surface)"
            opacity=".45"
          />
        </>
      ) : (
        <g transform={`rotate(${pitch} 100 100)`}>
          <path
            d="M42 55V145A58 22 0 0 0 158 145V55Z"
            fill={color ?? "var(--color-ocean)"}
            stroke="var(--color-primary)"
            strokeWidth="3"
          />
          <ellipse
            cx="100"
            cy="55"
            rx="58"
            ry="22"
            fill={color ?? "var(--color-soft)"}
            stroke="var(--color-primary)"
            strokeWidth="3"
          />
          <path
            d="M42 145A58 22 0 0 1 158 145"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeDasharray="5 5"
          />
          <path
            d={`M${100 + 40 * Math.sin((yaw * Math.PI) / 180)} 77V160`}
            stroke="var(--color-primary)"
            strokeWidth="3"
          />
        </g>
      )}
    </svg>
  );
}
