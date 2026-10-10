export function nextQuarterAngle(currentAngle: number, targetTurn: number) {
  const currentTurn = ((Math.round(currentAngle / 90) % 4) + 4) % 4;
  return currentAngle + ((((targetTurn - currentTurn) % 4) + 4) % 4) * 90;
}
