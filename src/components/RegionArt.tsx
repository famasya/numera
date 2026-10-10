import type { RegionId } from "../content/regions";
export function RegionArt({
  region,
  completed,
}: {
  region: RegionId;
  completed: number;
}) {
  const forest = region === "hutan-pola",
    tower = region === "menara-misteri";
  return (
    <svg
      viewBox="0 0 1200 720"
      preserveAspectRatio="xMidYMid slice"
      className="garden-art region-art"
      aria-hidden="true"
    >
      <rect
        width="1200"
        height="720"
        fill={
          forest
            ? "var(--color-forest-ground)"
            : tower
              ? "var(--color-tower-ground)"
              : "var(--color-workshop-ground)"
        }
      />
      {forest ? (
        <>
          <path
            d="M0 510Q160 400 310 525T630 490T950 520T1250 420V720H0Z"
            fill="var(--color-garden)"
          />
          <path
            d="M-20 580Q260 560 480 645T1230 590"
            stroke="var(--color-warm)"
            strokeWidth="65"
            fill="none"
          />
          {[
            [-20, 120],
            [155, 15],
            [1080, 40],
            [1180, 230],
          ].map(([x, y], i) => (
            <g key={i} transform={`translate(${x} ${y})`}>
              <path
                d="M50 70Q100 140 80 410L130 435L142 405Q105 235 142 80"
                fill="var(--color-soil)"
              />
              <path
                d="M0 180Q-90 100 0 35Q-10-75 90-55Q180-100 222 12Q300 60 220 145Q165 200 90 160Z"
                fill="var(--color-forest-canopy)"
              />
              <path
                d="M14 85Q100 20 170 85"
                stroke="var(--flower-leaf)"
                strokeWidth="13"
                fill="none"
              />
            </g>
          ))}
          {[50, 140, 1030, 1110].map((x, i) => (
            <g key={i} transform={`translate(${x} ${570 + (i % 2) * 35})`}>
              <path
                d="M0 0L-8 68Q20 82 42 64L36 0"
                fill="var(--flower-outline)"
              />
              <path
                d="M-30 8Q-26-70 24-70Q76-65 78 8Q28 33-30 8Z"
                fill={i % 2 ? "var(--flower-yellow)" : "var(--flower-pink)"}
              />
              <circle cx="5" cy="-26" r="10" fill="var(--flower-outline)" />
              <circle cx="45" cy="-41" r="11" fill="var(--flower-outline)" />
            </g>
          ))}
          <path
            d="M80 170Q600 350 1120 145"
            stroke="var(--color-soil)"
            strokeWidth="5"
            fill="none"
          />
          {Array.from({ length: 12 }, (_, i) => (
            <g
              key={i}
              transform={`translate(${120 + i * 86} ${185 + Math.sin((i / 11) * Math.PI) * 75})`}
              className={i < completed ? "restored-light" : ""}
            >
              <path d="M0 0V25" stroke="var(--color-soil)" strokeWidth="4" />
              <path
                d="M-14 25H14L21 47L12 68H-12L-21 47Z"
                fill={
                  i < completed ? "var(--flower-yellow)" : "var(--flower-muted)"
                }
              />
              <path
                d="M0 29V63"
                stroke="var(--flower-outline)"
                strokeWidth="3"
              />
            </g>
          ))}
        </>
      ) : tower ? (
        <>
          <path
            d="M0 0H1200V190Q600 300 0 190Z"
            fill="var(--color-tower-wall)"
          />
          {[60, 1030].map((x) => (
            <g key={x}>
              <path
                d={`M${x} 40H${x + 110}V570H${x}Z`}
                fill="var(--color-soil-light)"
              />
              <path
                d={`M${x - 18} 70H${x + 128}V105H${x - 18}ZM${x - 18} 530H${x + 128}V565H${x - 18}Z`}
                fill="var(--color-warm)"
              />
            </g>
          ))}
          <path
            d="M0 615L600 470L1200 615V720H0Z"
            fill="var(--color-tower-wall)"
          />
          <path
            d="M0 690L600 505L1200 690M360 720L550 550M840 720L650 550"
            stroke="var(--color-soil-light)"
            strokeWidth="4"
            fill="none"
          />
          {Array.from({ length: 12 }, (_, i) => (
            <g key={i} transform={`translate(${235 + i * 65} 84)`}>
              <path
                d="M0 70V18Q22-15 44 18V70Z"
                fill={
                  i < completed ? "var(--flower-yellow)" : "var(--color-moon)"
                }
                stroke="var(--color-warm)"
                strokeWidth="7"
              />
              <path
                d="M22 0V70M0 38H44"
                stroke="var(--color-warm)"
                strokeWidth="5"
              />
            </g>
          ))}
          <g transform="translate(970 540)">
            <path d="M0 0L52-90L105 0Z" fill="var(--flower-purple)" />
            <rect
              x="15"
              y="0"
              width="75"
              height="55"
              rx="8"
              fill="var(--color-soil)"
            />
            <circle
              cx="54"
              cy="-36"
              r="15"
              fill={
                completed === 12
                  ? "var(--flower-yellow)"
                  : "var(--flower-muted)"
              }
            />
          </g>
        </>
      ) : (
        <>
          <path d="M0 0H1200V220Q600 175 0 220Z" fill="var(--color-ocean)" />
          <path
            d="M0 135Q240 20 430 130T900 115T1200 140V360H0Z"
            fill="var(--color-garden)"
          />
          <path d="M0 535Q600 455 1200 535V720H0Z" fill="var(--color-basket)" />
          <path
            d="M0 575H1200M0 630H1200M0 687H1200"
            stroke="var(--color-basket-edge)"
            strokeWidth="3"
          />
          {[30, 1030].map((x, i) => (
            <g key={x} transform={`translate(${x} 195)`}>
              <rect
                x="10"
                y="95"
                width="140"
                height="210"
                rx="8"
                fill="var(--flower-outline)"
              />
              <path
                d="M-15 95L80-25L175 95Z"
                fill={i ? "var(--flower-purple)" : "var(--flower-pink)"}
              />
              <rect
                x="30"
                y="130"
                width="42"
                height="42"
                rx="3"
                fill="var(--color-ocean)"
              />
              <circle cx="113" cy="153" r="23" fill="var(--color-ocean)" />
              <path
                d="M60 305V230Q80 207 100 230V305Z"
                fill="var(--color-soil)"
              />
            </g>
          ))}
          <path
            d="M160 70Q600 170 1040 65"
            stroke="var(--color-soil)"
            strokeWidth="4"
            fill="none"
          />
          {Array.from({ length: 12 }, (_, i) => {
            const t = (i + 0.5) / 12;
            // Position and angle come from the same quadratic curve as the rope.
            const x = 160 + 880 * t;
            const y =
              (1 - t) * (1 - t) * 70 + 2 * (1 - t) * t * 170 + t * t * 65;
            const slope = (200 - 410 * t) / 880;
            const angle = (Math.atan(slope) * 180) / Math.PI;
            const color =
              i < completed
                ? [
                    "var(--flower-pink)",
                    "var(--flower-yellow)",
                    "var(--flower-purple)",
                  ][i % 3]
                : "var(--flower-muted)";
            return (
              <g key={i} transform={`translate(${x} ${y}) rotate(${angle})`}>
                <path
                  d="M-19 1Q0 5 19 1Q17 17 9 30Q3 41-2 48Q-8 31-12 21Q-17 10-19 1Z"
                  fill={color}
                />
                <path
                  d="M0 5Q3 24-2 46Q5 35 9 30Q17 17 19 1Z"
                  fill="var(--color-shadow-soft)"
                />
                <path
                  d="M-18 2Q0 6 18 2"
                  stroke="var(--flower-outline)"
                  strokeWidth="2"
                  fill="none"
                />
              </g>
            );
          })}
          <g transform="translate(45 598)">
            <rect width="74" height="60" rx="5" fill="var(--flower-yellow)" />
            <path d="M84 60L125-5L160 60Z" fill="var(--flower-pink)" />
          </g>
          <circle cx="1085" cy="645" r="36" fill="var(--flower-purple)" />
        </>
      )}
    </svg>
  );
}
