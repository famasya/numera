/** Shared interaction motion tokens. Drag follows the pointer without easing. */
export const movement = {
  instant: { duration: 0 },
  settle: { type: "spring" as const, stiffness: 260, damping: 28 },
  scale: { type: "spring" as const, stiffness: 160, damping: 20 },
  turn: { duration: 0.25, ease: "easeOut" as const },
  dragThreshold: 10,
};
