import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { nextQuarterAngle } from "../pedagogy/movement";
import { movement } from "../styles/movement";

/** Clockwise quarter turns remain clockwise when orientation wraps from 3 to 0. */
export function MotionTurn({
  turn,
  children,
}: {
  turn: number;
  children: ReactNode;
}) {
  const reduced = useReducedMotion();
  const [pose, setPose] = useState({ turn, angle: turn * 90 });
  if (pose.turn !== turn) {
    setPose({ turn, angle: nextQuarterAngle(pose.angle, turn) });
  }
  return (
    <motion.span
      className="turn-art"
      initial={false}
      animate={{ rotate: pose.angle }}
      transition={reduced ? movement.instant : movement.turn}
    >
      {children}
    </motion.span>
  );
}
