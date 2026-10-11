import { movement } from "../styles/movement";
import { animate, useReducedMotion } from "motion/react";
import { frontCubeFace } from "../pedagogy/map-two";
import { useSessionValue } from "../world/progression/session";
import {
  Component,
  Suspense,
  lazy,
  useEffect,
  useState,
  useRef,
  type ReactNode,
} from "react";
import { SolidArt } from "./SolidArt";
import type { SolidKind } from "../pedagogy/map-two";

export type SpatialProps = {
  kind?: SolidKind;
  interaction?: "explore" | "mark";
  yaw: number;
  pitch: number;
  marked?: number[];
  onFace?: (id: number) => void;
  filled?: boolean[];
  height?: number;
  onBlock?: (id: number) => void;
  color?: string;
  zoom?: number;
  canPick?: () => boolean;
  onRotate?: (yaw: number, pitch: number) => void;
};
const Scene = lazy(() => import("./SpatialScene"));
class SpatialBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
export function SpatialView(props: SpatialProps) {
  const [zoom, setZoom] = useSessionValue(
    "spatial-zoom",
    1,
    (v) => typeof v === "number" && v >= 0.65 && v <= 1.6,
  );
  const [localAngles, setLocalAngles] = useState<[number, number]>([
    props.yaw,
    props.pitch,
  ]);
  const reducedMotion = useReducedMotion();
  const angles = useRef(localAngles);
  angles.current = localAngles;
  useEffect(() => {
    const start = angles.current;
    if (props.interaction !== "mark" || reducedMotion) {
      setLocalAngles([props.yaw, props.pitch]);
      return;
    }
    const turn = ((props.yaw - start[0] + 540) % 360) - 180;
    const tilt = props.pitch - start[1];
    if (!turn && !tilt) return;
    const animation = animate(0, 1, {
      ...movement.turn,
      onUpdate: (progress) =>
        setLocalAngles([
          start[0] + turn * progress,
          start[1] + tilt * progress,
        ]),
      onComplete: () => setLocalAngles([props.yaw, props.pitch]),
    });
    return () => animation.stop();
  }, [props.yaw, props.pitch, props.interaction, reducedMotion]);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const dragged = useRef(false);
  const distance = () => {
    const [a, b] = [...pointers.current.values()];
    return a && b ? Math.hypot(a.x - b.x, a.y - b.y) : 0;
  };
  function rotate(yaw: number, pitch: number) {
    const next: [number, number] = [
      ((yaw % 360) + 360) % 360,
      Math.max(-85, Math.min(85, pitch)),
    ];
    setLocalAngles(next);
    props.onRotate?.(...next);
  }
  const view = {
    ...props,
    yaw: localAngles[0],
    pitch: localAngles[1],
    zoom: props.interaction === "mark" ? 1 : zoom,
    canPick: () => props.interaction === "mark" || !dragged.current,
  };
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const fallback = props.filled ? (
    <div className="spatial-fallback" aria-label="Bangunan gerbang">
      <SolidArt kind="cube" yaw={view.yaw} pitch={view.pitch} />
      <span>Gunakan tempat balok untuk menyusun gerbang.</span>
    </div>
  ) : (
    <SolidArt
      kind={props.kind ?? "cube"}
      yaw={view.yaw}
      pitch={view.pitch}
      marked={props.marked}
      onFace={props.onFace}
      color={props.color}
    />
  );
  return (
    <div
      className={`spatial-view ${props.interaction === "mark" ? "spatial-mark" : ""}`}
      tabIndex={0}
      role="group"
      aria-description={
        props.interaction === "mark"
          ? "Sentuh sisi untuk menandai. Gunakan tombol putar untuk melihat sisi lain. Enter menandai sisi depan."
          : "Geser untuk memutar. Cubit untuk memperbesar. Tombol panah memutar, tambah dan kurang mengubah ukuran, Home mengembalikan pandangan. Enter menandai sisi depan."
      }
      onPointerDown={(e) => {
        if (props.interaction === "mark") {
          dragged.current = false;
          e.currentTarget.focus();
          return;
        }
        if (!pointers.current.size) dragged.current = false;
        pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
        e.currentTarget.focus();
      }}
      onPointerMove={(e) => {
        if (props.interaction === "mark") return;
        const old = pointers.current.get(e.pointerId);
        if (!old) return;
        const before = distance();
        pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
        const dx = e.clientX - old.x,
          dy = e.clientY - old.y;
        if (Math.abs(dx) + Math.abs(dy) > 2) dragged.current = true;
        if (pointers.current.size > 1 && before > 0) {
          const after = distance();
          setZoom((v) => Math.max(0.65, Math.min(1.6, (v * after) / before)));
        } else rotate(view.yaw + dx * 0.6, view.pitch + dy * 0.6);
      }}
      onPointerUp={(e) => pointers.current.delete(e.pointerId)}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") pointers.current.delete(e.pointerId);
      }}
      onPointerCancel={(e) => {
        pointers.current.delete(e.pointerId);
        dragged.current = true;
      }}
      onClickCapture={(e) => {
        if (props.interaction !== "mark" && dragged.current) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      onWheel={(e) =>
        props.interaction !== "mark" &&
        setZoom((v) => Math.max(0.65, Math.min(1.6, v - e.deltaY * 0.001)))
      }
      onKeyDown={(e) => {
        if (props.interaction === "mark" && !["Enter", " "].includes(e.key))
          return;
        if (
          ![
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "+",
            "=",
            "-",
            "Home",
            "Enter",
            " ",
          ].includes(e.key)
        )
          return;
        e.preventDefault();
        if (e.key === "Enter" || e.key === " ") {
          props.onFace?.(frontCubeFace(view.yaw, view.pitch));
        } else if (e.key === "Home") {
          rotate(35, 25);
          setZoom(1);
        } else if (["+", "=", "-"].includes(e.key))
          setZoom((v) =>
            Math.max(0.65, Math.min(1.6, v + (e.key === "-" ? -0.1 : 0.1))),
          );
        else
          rotate(
            view.yaw +
              (e.key === "ArrowLeft" ? -15 : e.key === "ArrowRight" ? 15 : 0),
            view.pitch +
              (e.key === "ArrowUp" ? 15 : e.key === "ArrowDown" ? -15 : 0),
          );
      }}
      aria-label={props.filled ? "Gerbang tiga dimensi" : "Benda tiga dimensi"}
    >
      <SpatialBoundary fallback={fallback}>
        {ready ? (
          <Suspense fallback={fallback}>
            <Scene {...view} fallback={fallback} />
          </Suspense>
        ) : (
          fallback
        )}
      </SpatialBoundary>
    </div>
  );
}
