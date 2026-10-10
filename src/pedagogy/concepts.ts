export function plantingValid(slots: (number | null)[], total = 5) {
  return (
    slots.length === total &&
    slots.every(
      (x) => x !== null && Number.isInteger(x) && x >= 0 && x < total,
    ) &&
    new Set(slots).size === total
  );
}
export function compositionKey(beds: (number | null)[]): string | null {
  if (beds.length !== 5 || beds.some((b) => b !== 0 && b !== 1)) return null;
  const left = beds.filter((b) => b === 0).length;
  return `${left}:${5 - left}`;
}
export type PatternColor = "pink" | "yellow";
export function patternAt(index: number, unit: PatternColor[]): PatternColor {
  return unit[index % unit.length];
}
export function patternVariant(runs: number, rich: boolean) {
  const unit: PatternColor[] = rich
    ? ["pink", "pink", "yellow"]
    : runs % 2
      ? ["yellow", "pink"]
      : ["pink", "yellow"];
  return {
    unit,
    missing: rich ? [2, 4, 8] : runs % 2 ? [1, 4, 7] : [2, 5, 7],
    length: rich ? 9 : 8,
  };
}

export function placementValid(
  kind: string,
  places: (number | null)[],
): boolean {
  if (kind === "orders") return productionValid(places, [3, 2]);
  if (places.some((p) => p === null)) return false;
  if (kind === "matching")
    return (
      places.length === 4 &&
      new Set(places).size === 4 &&
      places.every((p) => p! >= 0 && p! < 4)
    );
  if (places.some((p) => p !== 0 && p !== 1)) return false;
  if (kind === "sorting")
    return places.length === 6 && places.every((p, i) => p === i % 2);
  const counts = [
    places.filter((p) => p === 0).length,
    places.filter((p) => p === 1).length,
  ];
  if (kind === "compare")
    return places.length === 6 && counts[0] === 3 && counts[1] === 3;
  if (kind === "sharing")
    return places.length === 4 && counts[0] === 2 && counts[1] === 2;
  return false;
}
export function productionValid(places: (number | null)[], targets: number[]) {
  return (
    targets.length > 0 &&
    targets.every((n) => Number.isInteger(n) && n >= 0) &&
    places.every(
      (p) =>
        p === null || (Number.isInteger(p) && p >= 0 && p < targets.length),
    ) &&
    targets.every((n, i) => places.filter((p) => p === i).length === n)
  );
}
// Extend the old five-flower snapshot without moving any existing flower.
export function orderPlaces(saved: unknown): (number | null)[] {
  if (
    Array.isArray(saved) &&
    (saved.length === 5 || saved.length === 7) &&
    saved.every((p) => p === null || p === 0 || p === 1)
  )
    return [...saved, ...Array(7 - saved.length).fill(null)];
  return Array(7).fill(null);
}
export function growingValid(groups: (number | null)[]): boolean {
  return groups.length === 4 && groups.every((g, i) => g === i + 1);
}
export function repeatedUnitValid(pieces: (number | null)[]): boolean {
  return (
    pieces.length === 4 &&
    pieces.every((p) => p === 0 || p === 1) &&
    pieces[0] === pieces[2] &&
    pieces[1] === pieces[3]
  );
}
export const repairPattern = [0, 1, 0, 1, 0, 1];
export function repairValid(pieces: number[]): boolean {
  return (
    pieces.length === repairPattern.length &&
    pieces.every((p, i) => p === repairPattern[i])
  );
}
