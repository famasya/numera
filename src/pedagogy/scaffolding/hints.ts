export function scaffoldLevel(hints: number, misses: number) {
  return Math.min(3, Math.max(hints, misses >= 4 ? 2 : misses >= 2 ? 1 : 0));
}
