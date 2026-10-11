export type SolidKind = "cube" | "sphere" | "cylinder";
export const solidNames: Record<SolidKind, string> = {
  cube: "Kubus",
  sphere: "Bola",
  cylinder: "Silinder",
};
export const fruits = ["Apel", "Pir", "Jeruk"] as const;
export const votesFor = (variation: number) =>
  variation % 2 ? [1, 0, 1, 0] : [0, 1, 0, 2, 1, 0];
export const frequencies = (values: readonly number[]) =>
  fruits.map((_, i) => values.filter((v) => v === i).length);
export const exactCounts = (
  actual: readonly number[],
  expected: readonly number[],
) =>
  actual.length === expected.length &&
  actual.every((v, i) => Number.isInteger(v) && v === expected[i]);
export function lengthValid(
  length: number,
  unit: number,
  places: readonly (number | null)[],
) {
  const occupied = places.flatMap((p) =>
    p === null ? [] : Array.from({ length: unit }, (_, i) => p + i),
  );
  return (
    occupied.length === length &&
    new Set(occupied).size === length &&
    occupied.every((p) => Number.isInteger(p) && p >= 0 && p < length)
  );
}
export function measurementStep(
  length: number,
  unit: number,
  marks: readonly number[],
  start: number,
) {
  return (
    Number.isInteger(start) &&
    start === marks.length * unit &&
    start + unit <= length
  );
}
export function transferWater(
  values: readonly [number, number],
  from: number,
  capacities: readonly [number, number],
): [number, number] {
  const to = 1 - from;
  if (
    (from !== 0 && from !== 1) ||
    values[from] < 1 ||
    values[to] >= capacities[to]
  )
    return [...values];
  const next: [number, number] = [...values];
  next[from]--;
  next[to]++;
  return next;
}
export function halfValid(parts: readonly (number | null)[]) {
  return (
    parts.length > 0 &&
    parts.length % 2 === 0 &&
    parts.every((v) => v === 0 || v === 1) &&
    parts.filter((v) => v === 0).length === parts.length / 2
  );
}
export const crossCategory = (kind: number, color: number) => color * 2 + kind;
export function buildSupports(
  slot: number,
  filled: readonly boolean[],
  height: number,
) {
  if (slot === height * 2) return filled.slice(0, height * 2).every(Boolean);
  return slot < 2 || filled[slot - 2] === true;
}
export function buildCanRemove(
  slot: number,
  filled: readonly boolean[],
  height: number,
) {
  return (
    slot === height * 2 ||
    (!filled[height * 2] && (slot >= height * 2 - 2 || !filled[slot + 2]))
  );
}
export function neighbor(a: number, b: number, cols = 3) {
  return (
    Number.isInteger(a) &&
    Number.isInteger(b) &&
    a >= 0 &&
    b >= 0 &&
    a < cols * cols &&
    b < cols * cols &&
    Math.abs(Math.floor(a / cols) - Math.floor(b / cols)) +
      Math.abs((a % cols) - (b % cols)) ===
      1
  );
}
export const mapRouteStep = (path: readonly number[], next: number) =>
  next !== 4 && neighbor(path[path.length - 1], next);

// Orthographic projection of real cube vertices. Face identity survives camera rotation.
const vertices = [
  [-1, -1, -1],
  [1, -1, -1],
  [1, 1, -1],
  [-1, 1, -1],
  [-1, -1, 1],
  [1, -1, 1],
  [1, 1, 1],
  [-1, 1, 1],
];
const faces = [
  [0, 3, 2, 1],
  [4, 5, 6, 7],
  [0, 4, 7, 3],
  [1, 2, 6, 5],
  [0, 1, 5, 4],
  [3, 7, 6, 2],
];
const normals = [
  [0, 0, -1],
  [0, 0, 1],
  [-1, 0, 0],
  [1, 0, 0],
  [0, -1, 0],
  [0, 1, 0],
];
export function cubeFaces(yaw: number, pitch: number) {
  function rotate([x, y, z]: number[]) {
    const a = (yaw * Math.PI) / 180,
      b = (pitch * Math.PI) / 180;
    const rx = x * Math.cos(a) + z * Math.sin(a),
      rz = -x * Math.sin(a) + z * Math.cos(a);
    return [
      rx,
      y * Math.cos(b) - rz * Math.sin(b),
      y * Math.sin(b) + rz * Math.cos(b),
    ];
  }
  const transformed = vertices.map(rotate);
  return faces
    .map((face, id) => ({
      id,
      normal: rotate(normals[id]),
      points: face.map((i) => transformed[i]),
    }))
    .filter((f) => f.normal[2] > 0.01)
    .map((f) => ({
      id: f.id,
      points: f.points
        .map(([x, y]) => `${100 + x * 48},${100 - y * 48}`)
        .join(" "),
    }));
}

export const waterHeight = (volume: number, width: number) =>
  (volume * 1800) / width;

// The central view ray meets the face whose outward normal points most toward the camera.
export function frontCubeFace(yaw: number, pitch: number) {
  const a = (yaw * Math.PI) / 180,
    b = (pitch * Math.PI) / 180;
  const depth = normals.map(
    ([x, y, z]) =>
      y * Math.sin(b) + (-x * Math.sin(a) + z * Math.cos(a)) * Math.cos(b),
  );
  return depth.indexOf(Math.max(...depth));
}
