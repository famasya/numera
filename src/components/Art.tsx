export function Flower({
  color = "var(--flower-pink)",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="100"
      height="116"
      viewBox="0 0 100 116"
      aria-hidden="true"
    >
      <path
        d="M50 58 Q47 90 51 111"
        stroke="var(--flower-stem)"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M48 95Q17 97 21 73Q44 70 48 95M51 85Q80 89 81 65Q56 65 51 85"
        fill="var(--flower-leaf)"
      />
      <g stroke="var(--flower-outline)" strokeWidth="2">
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <ellipse
            key={a}
            cx="50"
            cy="26"
            rx="15"
            ry="22"
            fill={color}
            transform={`rotate(${a} 50 46)`}
          />
        ))}
      </g>
      <circle cx="50" cy="46" r="16" fill="var(--flower-center)" />
      <circle cx="46" cy="42" r="4" fill="var(--flower-highlight)" />
    </svg>
  );
}
export function Lumi({ happy = false }: { happy?: boolean }) {
  return (
    <img
      className={`lumi-character ${happy ? "happy" : ""}`}
      src="/art/lumi-rabbit.svg"
      alt=""
      aria-hidden="true"
      draggable={false}
    />
  );
}
export function Sprout() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path
        d="M20 34V19"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 23Q1 22 6 8Q23 6 20 23M20 18Q21 2 36 6Q38 22 20 18"
        fill="currentColor"
      />
    </svg>
  );
}
export function GardenArt({ bloom = 0 }: { bloom?: number }) {
  return (
    <svg
      className="garden-art"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x2="0" y2="1">
          <stop stopColor="#d7ede1" />
          <stop offset="1" stopColor="#f7edc5" />
        </linearGradient>
        <pattern
          id="grass"
          width="93"
          height="88"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M13 27l3-5 3 5M65 64l3-5 3 5"
            stroke="#96b97b"
            strokeWidth="2"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#sky)" />
      <path
        d="M0 230Q170 95 380 216Q620 30 825 200Q1000 88 1200 200V800H0"
        fill="#b7ce8b"
      />
      <path d="M0 320Q330 210 585 270Q880 190 1200 340V800H0" fill="#cbdca0" />
      <rect y="330" width="1200" height="470" fill="url(#grass)" />
      <path
        d="M1170 270Q1010 370 1130 510Q1210 615 1080 800"
        fill="none"
        stroke="#f5eed0"
        strokeWidth="110"
      />
      <path
        d="M1170 270Q1010 370 1130 510Q1210 615 1080 800"
        fill="none"
        stroke="#9dcfd0"
        strokeWidth="80"
      />
      {[
        [-30, 160, 1.6],
        [60, 190, 1.1],
        [1140, 110, 1.6],
        [1060, 155, 1.1],
        [165, 125, 0.9],
      ].map(([x, y, s], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
          <path d="M50 80V170" stroke="#aa9264" strokeWidth="16" />
          <ellipse
            cx="50"
            cy="55"
            rx="57"
            ry="70"
            fill={i % 2 ? "#7da57c" : "#699674"}
          />
          <ellipse cx="22" cy="65" rx="33" ry="43" fill="#85ad7c" />
          <ellipse cx="66" cy="32" rx="31" ry="41" fill="#96b780" />
        </g>
      ))}
      <g transform="translate(860 220)">
        <path
          d="M0 94V0Q90-60 180 0V94"
          fill={bloom === 3 ? "#d1e6aa" : "#dbc6a1"}
          stroke="#ac9675"
          strokeWidth="12"
        />
        <path d="M26 95V14Q89-26 154 14V95" fill="#b7d99d" />
        <path
          d="M15 65Q90 5 165 65"
          fill="none"
          stroke="#77a670"
          strokeWidth="17"
        />
        {bloom === 3 &&
          [20, 55, 90, 125, 160].map((x, i) => (
            <g
              key={x}
              transform={`translate(${x - 15} ${i % 2 ? 10 : 40}) scale(.35)`}
            >
              <Flower color={i % 2 ? "#f3be59" : "#ef8c9e"} />
            </g>
          ))}
      </g>
      <path d="M0 724Q370 650 720 735L740 800H0" fill="#b0c587" />
      {Array.from({ length: 15 }, (_, i) => (
        <g
          key={i}
          transform={`translate(${(i * 83 + 27) % 1080} ${i % 2 ? 710 : 760}) scale(${0.35 + (i % 3) * 0.12})`}
        >
          <Flower
            color={
              i < bloom * 5
                ? i % 2
                  ? "var(--flower-pink)"
                  : "var(--flower-yellow)"
                : "var(--flower-muted)"
            }
          />
        </g>
      ))}
      <g stroke="#a28b63" strokeWidth="9">
        <path d="M260 250h540M275 220v68M335 220v68M395 220v68M455 220v68M515 220v68M575 220v68M635 220v68M695 220v68M755 220v68" />
      </g>
      <g transform="translate(160 525)">
        <ellipse cx="0" cy="0" rx="45" ry="18" fill="#a1b779" />
        <path d="M-20 0v-36Q0-67 20-36V0" fill="#ead9ae" />
        <path d="M-46-35Q0-96 46-35Z" fill="#df9a80" />
        <circle cx="-16" cy="-46" r="7" fill="#fff0ca" />
        <circle cx="16" cy="-52" r="9" fill="#fff0ca" />
      </g>
    </svg>
  );
}
