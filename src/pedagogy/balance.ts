/** Equal arms: greater weight lowers its pan. Animation never determines validity. */
export function balancePose(left: number, right: number) {
  const difference = left - right;
  const angle = -Math.max(-8, Math.min(8, difference * 3));
  return {
    angle,
    leftOffset: -angle * 3,
    state: difference === 0 ? "equal" : difference > 0 ? "left" : "right",
  } as const;
}
