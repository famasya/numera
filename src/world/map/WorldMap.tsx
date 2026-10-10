import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Minus, Plus, Compass, Move } from "lucide-react";
import { regions, type RegionId } from "../../content/regions";
import { regionMissions } from "../../content/missions";
import { Lumi, Sprout } from "../../components/Art";
import { type Progress } from "../progression/store";
type Props = {
  progress: Progress;
  onOpenRegion: (region: RegionId) => void;
};
const nodes = [
  [335, 545],
  [320, 271],
  [847, 239],
  [876, 545],
];
const gardenPath =
  "M335 545Q245 395 320 271M335 545C480 460 630 490 847 239M847 239C975 312 760 453 876 545";
export function WorldMap({ progress, onOpenRegion }: Props) {
  const [zoom, setZoom] = useState(1);
  const viewport = useRef<HTMLDivElement>(null);
  const pan = useRef<{
    x: number;
    y: number;
    left: number;
    top: number;
  } | null>(null);
  const garden = regionMissions("taman-angka");
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
  }, []);
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
            src="/art/numera-island.webp"
            width="1536"
            height="1024"
            alt="Pulau Numera: kebun bunga, hutan jamur, istana bentuk, dan menara di bukit"
            fetchPriority="high"
            draggable={false}
          />
          <svg
            className="adventure-overlay"
            viewBox="0 0 1200 800"
            aria-hidden="true"
          >
            <path className="path-shadow" d={gardenPath} />
            <path className="adventure-path" d={gardenPath} />
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
            const r = regions[i];
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
                key={i}
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
          <button
            className="region-label garden-label"
            style={{ left: "23%", top: "92%" }}
            onClick={() => onOpenRegion("taman-angka")}
          >
            <span className="region-dot" />
            Taman Angka
            <small>
              {gardenCompleted === garden.length
                ? "Taman sudah bermekaran"
                : "Petualangan dimulai di sini"}
            </small>
          </button>
          <button
            className="region-label"
            style={{ left: "25%", top: "13%" }}
            onClick={() => onOpenRegion("hutan-pola")}
          >
            Hutan Pola<small>Pola dan aturan</small>
          </button>
          <button
            className="region-label"
            style={{ left: "76%", top: "10%" }}
            onClick={() => onOpenRegion("menara-misteri")}
          >
            Menara Misteri<small>Jalur dan teka-teki</small>
          </button>
          <button
            className="region-label"
            style={{ left: "80%", top: "78%" }}
            onClick={() => onOpenRegion("pulau-bentuk")}
          >
            Pulau Bentuk<small>Tempat bermain dengan bentuk</small>
          </button>
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
        <button aria-label="Fokus Taman Angka" onClick={focusGarden}>
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
              ? "Tamannya sudah berbunga!"
              : garden[current].title}
          </h3>
          <p>
            {gardenCompleted === garden.length
              ? "Buka Taman Angka untuk memilih misi."
              : garden[current].instruction}
          </p>
        </div>
        <button
          className="primary"
          onClick={() => onOpenRegion("taman-angka")}
          aria-label={
            gardenCompleted === garden.length
              ? "Main lagi di Taman Angka"
              : "Jelajahi Taman Angka"
          }
        >
          {gardenCompleted === garden.length ? "Pilih misi" : "Buka taman"}
          <ArrowRight size={20} />
        </button>
      </div>
      <div className="pan-note">
        <Move size={14} /> Geser untuk menjelajah
      </div>
    </section>
  );
}
