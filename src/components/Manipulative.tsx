import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { movement } from "../styles/movement";
import { Flower } from "./Art";
type Props = {
  id: number;
  color: string;
  selected: boolean;
  onSelect: (id: number) => void;
  onDrop: (id: number, target: string) => void;
  label?: string;
  children?: ReactNode;
};
export function Manipulative({
  id,
  color,
  selected,
  onSelect,
  onDrop,
  label,
  children,
}: Props) {
  const reducedMotion = useReducedMotion();
  const origin = useRef<{ x: number; y: number } | null>(null);
  const moved = useRef(false);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  return (
    <motion.button
      className={`flower-piece ${selected ? "selected" : ""} ${dragging ? "dragging" : ""}`}
      aria-label={label || `Bunga ${id + 1}`}
      aria-pressed={selected}
      data-testid={`flower-${id}`}
      initial={false}
      animate={{ x: offset.x, y: offset.y }}
      transition={
        dragging || reducedMotion ? movement.instant : movement.settle
      }
      onClick={() => {
        if (!moved.current) onSelect(id);
      }}
      onPointerDown={(e) => {
        if (!e.isPrimary || e.button !== 0) return;
        origin.current = { x: e.clientX, y: e.clientY };
        moved.current = false;
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (origin.current) {
          const x = e.clientX - origin.current.x,
            y = e.clientY - origin.current.y;
          if (Math.abs(x) + Math.abs(y) > movement.dragThreshold) {
            moved.current = true;
            setDragging(true);
            setOffset({ x, y });
          }
        }
      }}
      onPointerUp={(e) => {
        if (moved.current) {
          const target = document
            .elementFromPoint(e.clientX, e.clientY)
            ?.closest("[data-drop]")
            ?.getAttribute("data-drop");
          if (target) onDrop(id, target);
        }
        origin.current = null;
        setDragging(false);
        setOffset({ x: 0, y: 0 });
      }}
      onLostPointerCapture={() => {
        origin.current = null;
        setDragging(false);
        setOffset({ x: 0, y: 0 });
      }}
      onPointerCancel={() => {
        origin.current = null;
        moved.current = false;
        setDragging(false);
        setOffset({ x: 0, y: 0 });
      }}
    >
      {children ?? <Flower color={color} />}
    </motion.button>
  );
}
