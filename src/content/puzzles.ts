export type TokenKind =
  | "mushroom"
  | "leaf"
  | "lantern"
  | "circle"
  | "square"
  | "triangle"
  | "rectangle"
  | "arrow"
  | "star";
export type Token = {
  kind: TokenKind;
  color: number;
  size?: number;
  turn?: number;
  weight?: number;
};
export type Ribbon = {
  kind: "ribbon";
  tokens: Token[];
  unit: number[];
  initial: (number | null)[];
  copy?: boolean;
  free?: boolean;
  advanced?: boolean;
};
export type Sort = {
  kind: "sort";
  tokens: Token[];
  bins: Token[];
  answers: number[];
  attribute: "color" | "kind" | "size";
};
export type Assembly = {
  kind: "assembly";
  tokens: Token[];
  targets: { token: Token; x: number; y: number; w: number; h: number }[];
  picture: "shadows" | "house" | "boat" | "rocket" | "square" | "bridge";
};
export type Rotation = {
  kind: "rotation";
  tokens: Token[];
  turns: number[];
  initial: number[];
};
export type Mirror = { kind: "mirror"; tokens: Token[]; left: number[] };
export type Tiling = {
  kind: "tiling";
  cols: number;
  rows: number;
  blocks: number[][][];
};
export type RoutePuzzle = {
  kind: "route";
  cols: number;
  rows: number;
  start: number;
  goal: number;
  blocked: number[];
  key?: number;
};
export type Balance = { kind: "balance"; tokens: Token[]; target?: number };
export type Order = {
  kind: "order";
  tokens: Token[];
  before: [number, number][];
};
export type Latin = {
  kind: "latin";
  tokens: Token[];
  size: number;
  initial: (number | null)[];
  advanced?: boolean;
};
export type Puzzle =
  | Ribbon
  | Sort
  | Assembly
  | Rotation
  | Mirror
  | Tiling
  | RoutePuzzle
  | Balance
  | Order
  | Latin;
const t = (kind: TokenKind, color = 0, size = 1, turn = 0): Token => ({
  kind,
  color,
  size,
  turn,
});
const mushrooms = [t("mushroom", 0), t("mushroom", 1), t("mushroom", 2)];
const shapes = [t("circle", 0), t("square", 1), t("triangle", 2)];
const ribbon = (
  tokens: Token[],
  unit: number[],
  initial: (number | null)[],
  extra: Partial<Ribbon> = {},
): Ribbon => ({ kind: "ribbon", tokens, unit, initial, ...extra });
export const puzzles = {
  "forest-copy": ribbon(
    mushrooms,
    [0, 1],
    [null, null, null, null, null, null],
    { copy: true },
  ),
  "forest-next": ribbon(mushrooms, [0, 1], [0, 1, 0, 1, null, null]),
  "forest-gap": ribbon(mushrooms, [0, 1], [0, null, 0, 1, null, 1]),
  "forest-size": ribbon(
    [t("leaf", 0, 0.65), t("leaf", 0, 1)],
    [0, 1],
    [0, 1, 0, null, null, 1],
  ),
  "forest-transfer": ribbon(
    [t("leaf", 0), t("lantern", 1)],
    [0, 1],
    [null, null, null, null, null, null],
    { copy: true },
  ),
  "forest-pairs": ribbon(mushrooms, [0, 1, 1], [0, 1, 1, 0, null, null], {
    advanced: true,
  }),
  "forest-double": ribbon(mushrooms, [0, 0, 1], [0, 0, 1, null, null, 1], {
    advanced: true,
  }),
  "forest-three": ribbon(mushrooms, [0, 1, 2], [0, 1, 2, 0, null, null], {
    advanced: true,
  }),
  "forest-repair": ribbon(mushrooms, [0, 1], [0, 1, 0, 0, 0, 1]),
  "forest-colors": {
    kind: "sort",
    tokens: [t("leaf", 0), t("mushroom", 1), t("mushroom", 0), t("leaf", 1)],
    bins: [t("circle", 0), t("circle", 1)],
    answers: [0, 1, 0, 1],
    attribute: "color",
  },
  "forest-types": {
    kind: "sort",
    tokens: [t("leaf", 1), t("mushroom", 0), t("leaf", 0), t("mushroom", 1)],
    bins: [t("leaf", 2), t("mushroom", 2)],
    answers: [0, 1, 0, 1],
    attribute: "kind",
  },
  "forest-create": ribbon(
    mushrooms,
    [0, 1],
    [null, null, null, null, null, null],
    { free: true },
  ),
  "shape-shadows": {
    kind: "assembly",
    tokens: shapes,
    targets: shapes.map((token, i) => ({
      token,
      x: 15 + i * 33,
      y: 45,
      w: 24,
      h: 38,
    })),
    picture: "shadows",
  },
  "shape-sizes": {
    kind: "sort",
    tokens: [
      t("circle", 0, 0.65),
      t("triangle", 1, 1),
      t("square", 2, 0.65),
      t("circle", 1, 1),
    ],
    bins: [t("circle", 0, 0.65), t("circle", 0, 1)],
    answers: [0, 1, 0, 1],
    attribute: "size",
  },
  "shape-turned": {
    kind: "sort",
    tokens: [
      t("triangle", 0, 1, 1),
      t("square", 1, 1, 1),
      t("triangle", 2, 1, 2),
      t("square", 0, 1, 0),
    ],
    bins: [t("triangle", 0), t("square", 1)],
    answers: [0, 1, 0, 1],
    attribute: "kind",
  },
  "shape-house": {kind:"assembly", tokens:[t("square",1),t("triangle",0),t("rectangle",2,1,1)], targets:[{token:t("triangle",0),x:50,y:36,w:48,h:50},{token:t("square",1),x:50,y:65,w:44,h:50},{token:t("rectangle",2,1,1),x:50,y:73,w:20,h:28}],picture:"house"},
  "shape-boat": {
    kind: "assembly",
    tokens: [t("rectangle", 1), t("triangle", 0, 1, 1), t("triangle", 2)],
    targets: [
      { token: t("rectangle", 1), x: 50, y: 76, w: 60, h: 20 },
      { token: t("triangle", 0, 1, 1), x: 38, y: 43, w: 30, h: 42 },
      { token: t("triangle", 2), x: 66, y: 46, w: 25, h: 38 },
    ],
    picture: "boat",
  },
  "shape-rocket": {
    kind: "assembly",
    tokens: [
      t("rectangle", 1),
      t("triangle", 0),
      t("circle", 2),
      t("triangle", 0, 1, 3),
      t("triangle", 0, 1, 1),
    ],
    targets: [
      { token: t("rectangle", 1), x: 50, y: 53, w: 20, h: 45 },
      { token: t("triangle", 0), x: 50, y: 19, w: 24, h: 24 },
      { token: t("circle", 2), x: 50, y: 48, w: 10, h: 14 },
      { token: t("triangle", 0, 1, 3), x: 34, y: 75, w: 18, h: 25 },
      { token: t("triangle", 0, 1, 1), x: 66, y: 75, w: 18, h: 25 },
    ],
    picture: "rocket",
  },
  "shape-turn": {
    kind: "rotation",
    tokens: [t("arrow", 0), t("arrow", 1), t("arrow", 2)],
    turns: [1, 2, 3],
    initial: [0, 0, 0],
  },
  "shape-sails": {
    kind: "rotation",
    tokens: [t("triangle", 0), t("triangle", 1), t("triangle", 2)],
    turns: [2, 3, 1],
    initial: [0, 0, 0],
  },
  "shape-mirror": { kind: "mirror", tokens: shapes, left: [0, 1, 2] },
  "shape-window": {
    kind: "mirror",
    tokens: [t("triangle", 0), t("circle", 1), t("square", 2)],
    left: [2, 0, 1, 0],
  },
  "shape-floor": {
    kind: "tiling",
    cols: 3,
    rows: 2,
    blocks: [
      [
        [0, 0],
        [1, 0],
      ],
      [
        [0, 0],
        [1, 0],
      ],
      [
        [0, 0],
        [1, 0],
      ],
    ],
  },
  "shape-bridge": {
    kind: "tiling",
    cols: 3,
    rows: 2,
    blocks: [
      [
        [0, 0],
        [1, 0],
        [0, 1],
      ],
      [
        [0, 0],
        [1, 0],
        [0, 1],
      ],
    ],
  },
  "tower-path": {
    kind: "route",
    cols: 3,
    rows: 3,
    start: 6,
    goal: 2,
    blocked: [4],
  },
  "tower-detour": {
    kind: "route",
    cols: 4,
    rows: 3,
    start: 8,
    goal: 3,
    blocked: [1, 5, 6],
  },
  "tower-key": {
    kind: "route",
    cols: 4,
    rows: 3,
    start: 8,
    goal: 3,
    blocked: [5],
    key: 2,
  },
  "tower-even": {
    kind: "balance",
    tokens: [
      { ...t("star", 0), weight: 1 },
      { ...t("star", 1), weight: 1 },
      { ...t("star", 0), weight: 1 },
      { ...t("star", 1), weight: 1 },
    ],
  },
  "tower-weights": {
    kind: "balance",
    tokens: [
      { ...t("star", 0), weight: 1 },
      { ...t("star", 1), weight: 2 },
      { ...t("star", 2), weight: 3 },
    ],
  },
  "tower-lights": {
    kind: "balance",
    tokens: [
      { ...t("lantern", 0), weight: 1 },
      { ...t("lantern", 1), weight: 1 },
      { ...t("lantern", 2), weight: 2 },
    ],
    target: 3,
  },
  "tower-before": { kind: "order", tokens: shapes, before: [[0, 1]] },
  "tower-between": {
    kind: "order",
    tokens: shapes,
    before: [
      [0, 1],
      [1, 2],
    ],
  },
  "tower-chain": {
    kind: "order",
    tokens: [...shapes, t("star", 1)],
    before: [
      [2, 0],
      [0, 3],
      [3, 1],
    ],
  },
  "tower-grid": {
    kind: "latin",
    tokens: shapes.slice(0, 2),
    size: 2,
    initial: [0, null, null, null],
  },
  "tower-grid-three": {
    kind: "latin",
    tokens: shapes,
    size: 3,
    initial: [0, null, null, null, 2, null, null, null, 1],
    advanced: true,
  },
  "tower-beacon": {
    kind: "route",
    cols: 4,
    rows: 4,
    start: 12,
    goal: 3,
    blocked: [5, 6, 9],
    key: 0,
  },
} satisfies Record<string, Puzzle>;
export type NewMissionId = keyof typeof puzzles;
export function puzzleFor(id: NewMissionId, rich: boolean): Puzzle {
  const p: Puzzle = puzzles[id];
  if (p.kind === "ribbon" && p.advanced && !rich)
    return { ...p, unit: [0, 1], initial: [0, 1, 0, null, null, 1] };
  if (p.kind === "latin" && p.advanced && !rich)
    return {
      ...p,
      size: 2,
      tokens: p.tokens.slice(0, 2),
      initial: [0, null, null, null],
    };
  return p;
}
