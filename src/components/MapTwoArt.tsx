import type { RegionId } from "../content/regions";
export function MapTwoArt({
  region,
  completed,
}: {
  region: RegionId;
  completed: number;
}) {
  const water =
    region === "lembah-ukuran" || region === "pelabuhan-petualangan";
  return (
    <svg
      className="garden-art region-art"
      viewBox="0 0 1200 720"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="1200" height="720" fill="var(--color-workshop-ground)" />
      <path
        d="M0 0H1200V155Q970 270 680 170T0 230Z"
        fill={water ? "var(--color-ocean)" : "var(--color-garden)"}
      />
      <path
        d="M0 540Q340 480 620 570T1200 510V720H0Z"
        fill={water ? "var(--color-warm)" : "var(--color-basket-rim)"}
      />
      <path
        d="M0 620Q620 570 1200 645"
        fill="none"
        stroke="var(--color-basket-edge)"
        strokeWidth="3"
      />
      {[45, 1050].map((x, i) => (
        <g key={x} transform={`translate(${x} 230)`}>
          {region === "lembah-ukuran" ? (
            <>
              <rect
                x="0"
                y="50"
                width="95"
                height="190"
                rx="12"
                fill="var(--color-surface)"
              />
              <path d="M-20 50L45-20L110 50Z" fill="var(--color-primary)" />
              <circle
                cx="50"
                cy="195"
                r="55"
                fill="var(--color-basket)"
                stroke="var(--color-basket-edge)"
                strokeWidth="8"
              />
              {[0, 45, 90, 135].map((a) => (
                <path
                  key={a}
                  d="M50 145V245"
                  transform={`rotate(${a} 50 195)`}
                  stroke="var(--color-basket-edge)"
                  strokeWidth="6"
                />
              ))}
            </>
          ) : region === "desa-data" ? (
            <>
              <path d="M-10 90L50 0L125 90Z" fill="var(--flower-pink)" />
              <rect
                x="0"
                y="90"
                width="110"
                height="170"
                rx="12"
                fill="var(--color-surface)"
              />
              <path
                d="M-10 110H125"
                stroke="var(--color-basket-edge)"
                strokeWidth="12"
              />
              <rect
                x="25"
                y="145"
                width="60"
                height="80"
                rx="8"
                fill="var(--color-ocean)"
              />
            </>
          ) : region === "bengkel-ruang" ? (
            <>
              <path
                d="M0 250V100H100V250M-20 100L45 30L120 100"
                stroke="var(--color-basket-edge)"
                strokeWidth="20"
                fill="none"
              />
              <path
                d="M15 230L55 210L95 230V280L55 300L15 280Z"
                fill="var(--color-basket)"
              />
              <path
                d="M55 250V300M15 230L55 250L95 230"
                stroke="var(--color-basket-edge)"
                fill="none"
                strokeWidth="3"
              />
            </>
          ) : (
            <>
              <path d="M0 240L110 240L85 275H25Z" fill="var(--color-basket)" />
              <path
                d="M50 235V90L110 210H50"
                fill="var(--flower-outline)"
                stroke="var(--color-basket-edge)"
                strokeWidth="4"
              />
            </>
          )}
          <path
            d={`M${i ? 20 : 70} 330Q-20 290 15 285Q55 300 50 340`}
            fill="var(--flower-leaf)"
          />
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${530 + i * 70} 90)`}>
          <path d="M0 0V40" stroke="var(--color-soil)" strokeWidth="4" />
          <circle
            cy="55"
            r="20"
            fill={
              i < completed ? "var(--flower-yellow)" : "var(--flower-muted)"
            }
          />
          <path
            d="M-9 55L-2 63L11 46"
            fill="none"
            stroke="var(--color-surface)"
            strokeWidth="4"
          />
        </g>
      ))}
    </svg>
  );
}
