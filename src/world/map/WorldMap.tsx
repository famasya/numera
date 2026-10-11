import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Minus, Plus, Compass, Move } from "lucide-react";
import {
  regions,
  maps,
  type MapId,
  type RegionId,
} from "../../content/regions";
import { regionMissions } from "../../content/missions";
import { Lumi, Sprout } from "../../components/Art";
import { type Progress } from "../progression/store";
type Props = {
  map: MapId;
  progress: Progress;
  onOpenRegion: (region: RegionId) => void;
};
const originalNodes = [
  [335, 545],
  [320, 271],
  [847, 239],
  [876, 545],
];
const gardenPath =
  "M335 545Q245 395 320 271M335 545C480 460 630 490 847 239M847 239C975 312 760 453 876 545";
export function WorldMap({ map, progress, onOpenRegion }: Props) {
  const localRegions = regions.filter((r) => r.map === map);
  const nodes =
    map === "pembuat"
      ? [
          [372, 312],
          [876, 336],
          [360, 600],
          [804, 632],
        ]
      : originalNodes;
  const path =
    map === "pembuat"
      ? "M372 312Q610 340 876 336M372 312Q220 445 360 600M360 600Q570 520 804 632M876 336Q1010 500 804 632"
      : gardenPath;
  const island = maps.find((m) => m.id === map)!;
  const first = localRegions[0];
  const [zoom, setZoom] = useState(1);
  const viewport = useRef<HTMLDivElement>(null);
  const pan = useRef<{
    x: number;
    y: number;
    left: number;
    top: number;
  } | null>(null);
  const garden = regionMissions(first.id);
  const gardenCompleted = garden.filter((m) =>
    progress.completed.includes(m.id),
  ).length;
  const current = Math.min(gardenCompleted, garden.length - 1);
  useEffect(() => {
    const el = viewport.current;
    if (el && window.innerWidth < 1100)
      el.scrollTo({
        left: Math.max(
          0,
          el.scrollWidth * (nodes[0][0] / 1200) - el.clientWidth * 0.5,
        ),
        top: Math.max(
          0,
          el.scrollHeight * (nodes[0][1] / 800) - el.clientHeight * 0.5,
        ),
      });
  }, [map]);
  function focusGarden() {
    const el = viewport.current;
    if (el) {
      el.scrollTo({
        left: Math.max(
          0,
          el.scrollWidth * (nodes[0][0] / 1200) - el.clientWidth * 0.5,
        ),
        top: Math.max(
          0,
          el.scrollHeight * (nodes[0][1] / 800) - el.clientHeight * 0.5,
        ),
        behavior: "smooth",
      });
    }
  }
  return (
    <section className="world-map" aria-label="Peta dunia Numera">
      <div
        className="map-viewport"
        ref={viewport}
        onPointerDown={(e) => {
          if ((e.target as Element).closest("button")) return;
          if (e.pointerType === "mouse") {
            pan.current = {
              x: e.clientX,
              y: e.clientY,
              left: e.currentTarget.scrollLeft,
              top: e.currentTarget.scrollTop,
            };
            e.currentTarget.setPointerCapture(e.pointerId);
          }
        }}
        onPointerMove={(e) => {
          if (pan.current) {
            e.currentTarget.scrollLeft =
              pan.current.left + pan.current.x - e.clientX;
            e.currentTarget.scrollTop =
              pan.current.top + pan.current.y - e.clientY;
          }
        }}
        onPointerUp={() => {
          pan.current = null;
        }}
        onPointerCancel={() => {
          pan.current = null;
        }}
      >
        <div
          className="map-canvas"
          style={{ width: `max(${zoom * 100}%, ${zoom * 950}px)` }}
        >
          <img
            className="island-art"
            src={island.art}
            width="1536"
            height="1024"
            alt={
              map === "pembuat"
                ? "Pulau Para Pembuat: kincir, desa, bengkel balok, dan pelabuhan"
                : "Pulau Numera: kebun bunga, hutan jamur, istana bentuk, dan menara di bukit"
            }
            fetchPriority="high"
            draggable={false}
          />
          <svg
            className="adventure-overlay"
            viewBox="0 0 1200 800"
            aria-hidden="true"
          >
            <path className="path-shadow" d={path} />
            <path className="adventure-path" d={path} />
            {progress.completed.length > 0 &&
              Array.from({ length: gardenCompleted }, (_, i) => (
                <g
                  className="map-bloom"
                  key={i}
                  transform={`translate(${210 + i * 25} ${530 + (i % 3) * 20})`}
                >
                  <circle r="9" fill={i % 2 ? "#f9c553" : "#f7a8b8"} />
                  <circle r="3" fill="#fff1b8" />
                </g>
              ))}
            <g
              className="floating-cloud"
              opacity=".5"
              transform="translate(900 58)"
            >
              <path d="M0 25Q5 5 30 15Q43-12 65 12Q99 7 100 25Z" fill="#fff" />
            </g>
          </svg>
          {nodes.map(([x, y], i) => {
            const r = localRegions[i];
            const local = regionMissions(r.id);
            const n = local.filter((m) =>
              progress.completed.includes(m.id),
            ).length;
            const state =
              n === local.length
                ? "completed"
                : n > 0 || i === 0
                  ? "current"
                  : "available";
            return (
              <button
                key={r.id}
                className={`map-node ${state} ${state === "current" ? "breathe" : ""}`}
                style={{ left: `${x / 12}%`, top: `${y / 8}%` }}
                aria-label={`Buka misi ${r.name}`}
                onClick={() => onOpenRegion(r.id)}
              >
                {state === "completed" ? <Check /> : <Sprout />}
                {state === "current" && <span className="node-flag">Ayo!</span>}
              </button>
            );
          })}
          {localRegions.map((r, i) => {
            const labels =
              map === "pembuat"
                ? [
                    [30, 12],
                    [75, 12],
                    [29, 88],
                    [79, 91],
                  ]
                : [
                    [23, 92],
                    [25, 13],
                    [76, 10],
                    [80, 78],
                  ];
            const descriptions =
              map === "pembuat"
                ? [
                    "Panjang dan isi",
                    "Pilihan dan bekal",
                    "Benda dan bangunan",
                    "Berbagi dan menjelajah",
                  ]
                : [
                    gardenCompleted === garden.length
                      ? "Taman sudah bermekaran"
                      : "Petualangan dimulai di sini",
                    "Pola dan aturan",
                    "Jalur dan teka-teki",
                    "Tempat bermain dengan bentuk",
                  ];
            return (
              <button
                key={r.id}
                className={`region-label ${i === 0 ? "garden-label" : ""}`}
                style={{ left: `${labels[i][0]}%`, top: `${labels[i][1]}%` }}
                onClick={() => onOpenRegion(r.id)}
              >
                {r.name}
                <small>{descriptions[i]}</small>
              </button>
            );
          })}
        </div>
      </div>
      <div className="map-corner">
        <Compass size={33} />
        <span>DUNIA NUMERA</span>
      </div>
      <div className="zoom-controls">
        <button
          aria-label="Perkecil peta"
          onClick={() => setZoom((z) => Math.max(1, z - 0.25))}
          disabled={zoom === 1}
        >
          <Minus />
        </button>
        <button aria-label={`Fokus ${first.name}`} onClick={focusGarden}>
          <Compass />
        </button>
        <button
          aria-label="Perbesar peta"
          onClick={() => setZoom((z) => Math.min(2, z + 0.25))}
          disabled={zoom === 2}
        >
          <Plus />
        </button>
      </div>
      <div className="map-prompt">
        <div className="lumi-map">
          <Lumi happy={gardenCompleted === garden.length} />
        </div>
        <div>
          <span className="eyebrow">LUMI SIAP BERMAIN</span>
          <h3>
            {gardenCompleted === garden.length
              ? first.restored
              : garden[current].title}
          </h3>
          <p>
            {gardenCompleted === garden.length
              ? `Buka ${first.name} untuk memilih misi.`
              : garden[current].instruction}
          </p>
        </div>
        <button
          className="primary"
          onClick={() => onOpenRegion(first.id)}
          aria-label={
            gardenCompleted === garden.length
              ? `Main lagi di ${first.name}`
              : `Jelajahi ${first.name}`
          }
        >
          {gardenCompleted === garden.length ? "Pilih misi" : "Jelajahi"}
          <ArrowRight size={20} />
        </button>
      </div>
      <div className="pan-note">
        <Move size={14} /> Geser untuk menjelajah
      </div>
    </section>
  );
}
