import type { Puzzle, Token, Tiling, RoutePuzzle } from "../content/puzzles";
export function sameToken(a: Token, b: Token) {
  return a.kind === b.kind && (a.turn || 0) === (b.turn || 0);
}
export function ribbonValid(
  p: Extract<Puzzle, { kind: "ribbon" }>,
  values: (number | null)[],
) {
  if (
    values.length !== p.initial.length ||
    values.some(
      (v) =>
        v === null || !Number.isInteger(v) || v! < 0 || v! >= p.tokens.length,
    )
  )
    return false;
  return values.every(
    (v, i) => v === (p.free ? values[i % 2] : p.unit[i % p.unit.length]),
  );
}
export function latinValid(
  p: Extract<Puzzle, { kind: "latin" }>,
  values: (number | null)[],
) {
  if (
    values.length !== p.size * p.size ||
    values.some(
      (v) => v === null || !Number.isInteger(v) || v! < 0 || v! >= p.size,
    )
  )
    return false;
  if (p.initial.some((v, i) => v !== null && values[i] !== v)) return false;
  for (let r = 0; r < p.size; r++) {
    if (new Set(values.slice(r * p.size, (r + 1) * p.size)).size !== p.size)
      return false;
    if (
      new Set(Array.from({ length: p.size }, (_, c) => values[c * p.size + r]))
        .size !== p.size
    )
      return false;
  }
  return true;
}
export function slotsValid(p: Puzzle, values: (number | null)[]): boolean {
  if (p.kind === "ribbon") return ribbonValid(p, values);
  if (p.kind === "latin") return latinValid(p, values);
  if (p.kind === "mirror")
    return (
      values.length === p.left.length &&
      values.every((v, i) => v === p.left[p.left.length - 1 - i])
    );
  if (p.kind === "assembly")
    return (
      values.length === p.targets.length &&
      new Set(values).size === values.length &&
      values.every(
        (v, i) =>
          v !== null &&
          !!p.tokens[v] &&
          sameToken(p.tokens[v], p.targets[i].token),
      )
    );
  if (p.kind === "order")
    return (
      values.length === p.tokens.length &&
      new Set(values).size === values.length &&
      values.every(
        (v) =>
          v !== null && Number.isInteger(v) && v >= 0 && v < p.tokens.length,
      ) &&
      p.before.every(([a, b]) => values.indexOf(a) < values.indexOf(b))
    );
  if (p.kind === "sort")
    return (
      values.length === p.tokens.length &&
      values.every((v, i) => v === p.answers[i])
    );
  if (p.kind === "balance") {
    if (
      values.length !== p.tokens.length ||
      values.some((v) => v !== 0 && v !== 1)
    )
      return false;
    const sums = [0, 1].map((b) =>
      p.tokens.reduce(
        (n, t, i) => n + (values[i] === b ? t.weight || 1 : 0),
        0,
      ),
    );
    return p.target !== undefined ? sums[0] === p.target : sums[0] === sums[1];
  }
  if (p.kind === "rotation")
    return (
      values.length === p.turns.length &&
      values.every((v, i) => v === p.turns[i])
    );
  return false;
}
export function adjacent(a: number, b: number, cols: number) {
  return (
    Math.abs((a % cols) - (b % cols)) +
      Math.abs(Math.floor(a / cols) - Math.floor(b / cols)) ===
    1
  );
}
export function routeValid(p: RoutePuzzle, path: number[]) {
  return (
    path.length > 1 &&
    path[0] === p.start &&
    path.at(-1) === p.goal &&
    (p.key === undefined || path.includes(p.key)) &&
    path.every(
      (v, i) =>
        Number.isInteger(v) &&
        v >= 0 &&
        v < p.cols * p.rows &&
        !p.blocked.includes(v) &&
        (i === 0 || adjacent(path[i - 1], v, p.cols)),
    )
  );
}
export function routeHint(p: RoutePuzzle, path: number[]): number | undefined {
  const start = path.at(-1) ?? p.start;
  const needsKey = p.key !== undefined && !path.includes(p.key);
  const goal = needsKey ? p.key! : p.goal;
  const queue: number[][] = [[start]],
    seen = new Set([start]);
  while (queue.length) {
    const route = queue.shift()!;
    const last = route.at(-1)!;
    if (last === goal) return route[1];
    for (let n = 0; n < p.cols * p.rows; n++)
      if (!seen.has(n) && !p.blocked.includes(n) && adjacent(last, n, p.cols)) {
        seen.add(n);
        queue.push([...route, n]);
      }
  }
}
export type TilePlacement = { cell: number; turn: number } | null;
export function blockCells(
  p: Tiling,
  id: number,
  cell: number,
  turn: number,
): number[] | null {
  if (
    !p.blocks[id] ||
    !Number.isInteger(cell) ||
    cell < 0 ||
    cell >= p.cols * p.rows ||
    !Number.isInteger(turn) ||
    turn < 0 ||
    turn > 3
  )
    return null;
  let points = p.blocks[id].map(([x, y]) => [x, y]);
  for (let i = 0; i < turn; i++) points = points.map(([x, y]) => [-y, x]);
  const minX = Math.min(...points.map(([x]) => x)),
    minY = Math.min(...points.map(([, y]) => y));
  const x0 = cell % p.cols,
    y0 = Math.floor(cell / p.cols);
  points = points.map(([x, y]) => [x - minX + x0, y - minY + y0]);
  if (points.some(([x, y]) => x >= p.cols || y >= p.rows)) return null;
  return points.map(([x, y]) => y * p.cols + x);
}
export function tileFits(
  p: Tiling,
  placements: TilePlacement[],
  id: number,
  cell: number,
  turn: number,
) {
  const cells = blockCells(p, id, cell, turn);
  if (!cells) return false;
  const used = placements.flatMap((v, i) =>
    v && i !== id ? blockCells(p, i, v.cell, v.turn) || [] : [],
  );
  return cells.every((c) => !used.includes(c));
}
export function tilingValid(p: Tiling, placements: TilePlacement[]) {
  if (
    placements.length !== p.blocks.length ||
    placements.some((v) => v === null)
  )
    return false;
  const cells = placements.flatMap((v, i) =>
    v ? blockCells(p, i, v.cell, v.turn) || [] : [],
  );
  return (
    cells.length === p.cols * p.rows && new Set(cells).size === cells.length
  );
}
export function solveTiling(
  p: Tiling,
  placements: TilePlacement[] = Array(p.blocks.length).fill(null),
): TilePlacement[] | null {
  const id = placements.indexOf(null);
  if (id < 0) return tilingValid(p, placements) ? placements : null;
  for (let cell = 0; cell < p.cols * p.rows; cell++)
    for (let turn = 0; turn < 4; turn++)
      if (tileFits(p, placements, id, cell, turn)) {
        const next = [...placements];
        next[id] = { cell, turn };
        const solution = solveTiling(p, next);
        if (solution) return solution;
      }
  return null;
}
export function solveSlots(
  p: Exclude<Puzzle, { kind: "route" | "tiling" }>,
): (number | null)[] | null {
  if (p.kind === "ribbon")
    return Array.from({ length: p.initial.length }, (_, i) =>
      p.free ? i % 2 : p.unit[i % p.unit.length],
    );
  if (p.kind === "sort") return [...p.answers];
  if (p.kind === "mirror") return [...p.left].reverse();
  if (p.kind === "rotation") return [...p.turns];
  const length =
    p.kind === "assembly"
      ? p.targets.length
      : p.kind === "latin"
        ? p.size * p.size
        : p.tokens.length;
  const values: (number | null)[] =
    p.kind === "latin" ? [...p.initial] : Array(length).fill(null);
  function search(i: number): (number | null)[] | null {
    if (i === length) return slotsValid(p, values) ? [...values] : null;
    if (values[i] !== null) return search(i + 1);
    const choices = p.kind === "balance" ? 2 : p.tokens.length;
    for (let v = 0; v < choices; v++) {
      if ((p.kind === "assembly" || p.kind === "order") && values.includes(v))
        continue;
      if (p.kind === "assembly" && !sameToken(p.tokens[v], p.targets[i].token))
        continue;
      if (
        p.kind === "latin" &&
        values.some(
          (x, j) =>
            x === v &&
            (Math.floor(j / p.size) === Math.floor(i / p.size) ||
              j % p.size === i % p.size),
        )
      )
        continue;
      values[i] = v;
      const result = search(i + 1);
      if (result) return result;
      values[i] = null;
    }
    return null;
  }
  return search(0);
}
