import { describe, it, expect } from "vitest";
import { puzzles, puzzleFor, type Puzzle } from "../src/content/puzzles";
import { missions, regionMissions } from "../src/content/missions";
import { regions, gameSearch } from "../src/content/regions";
import {
  slotsValid,
  solveSlots,
  solveTiling,
  tilingValid,
  blockCells,
  tileFits,
  routeHint,
  routeValid,
  latinValid,
} from "../src/pedagogy/puzzles";
import {
  record,
  nodeState,
  parseProgress,
  initialProgress,
  type Evidence,
} from "../src/world/progression/store";
const event = (mission: Evidence["mission"]): Evidence => ({
  mission,
  attempts: 1,
  hints: 0,
  solutions: [],
  completed: true,
  variant: "concrete",
});
describe("two islands with independent adventures", () => {
  it("preserves 48 old missions and adds three per new region", () => {
    expect(missions).toHaveLength(60);
    expect(new Set(missions.map((m) => m.id)).size).toBe(60);
    for (const r of regions) {
      expect(regionMissions(r.id)).toHaveLength(r.map === "penemuan" ? 12 : 3);
      expect(gameSearch({ wilayah: r.id }).wilayah).toBe(r.id);
    }
  });
  it("opens each first mission without erasing existing garden progress", () => {
    let p = record(initialProgress, event("counting"));
    for (const r of regions.slice(1)) {
      const local = regionMissions(r.id);
      expect(nodeState(p, missions.indexOf(local[0]))).toBe("current");
      expect(record(p, event(local[1].id))).toEqual(p);
      for (const m of local) p = record(p, event(m.id));
    }
    expect(p.completed).toHaveLength(49);
    expect(parseProgress(JSON.stringify(p))).toEqual(p);
    expect(nodeState(p, 1)).toBe("current");
  });
  it("repairs completion independently within each region", () => {
    const p = parseProgress(
      JSON.stringify({
        ...initialProgress,
        completed: ["forest-next", "shape-shadows", "tower-path"],
      }),
    );
    expect(p.completed).toEqual(["shape-shadows", "tower-path"]);
  });
});
describe("deterministic original puzzles", () => {
  for (const id of Object.keys(puzzles) as (keyof typeof puzzles)[])
    for (const rich of [false, true])
      it(`${id}, ${rich ? "richer" : "concrete"}, has a valid solution`, () => {
        const p = puzzleFor(id, rich);
        if (p.kind === "route") {
          let path = [p.start];
          for (let i = 0; i < 100 && !routeValid(p, path); i++) {
            const step = routeHint(p, path);
            expect(step).toBeDefined();
            path.push(step!);
          }
          expect(routeValid(p, path)).toBe(true);
          expect(routeValid(p, [p.start, p.goal])).toBe(false);
        } else if (p.kind === "tiling") {
          const s = solveTiling(p);
          expect(s).not.toBeNull();
          expect(tilingValid(p, s!)).toBe(true);
          expect(tilingValid(p, Array(p.blocks.length).fill(null))).toBe(false);
          expect(tileFits(p, s!, 0, s![1]!.cell, s![1]!.turn)).toBe(false);
          expect(blockCells(p, 0, p.cols * p.rows - 1, 0)).toBeNull();
        } else {
          const s = solveSlots(p);
          expect(s).not.toBeNull();
          expect(slotsValid(p, s!)).toBe(true);
          expect(slotsValid(p, [])).toBe(false);
          expect(slotsValid(p, Array(s!.length).fill(null))).toBe(false);
        }
      });
  it("accepts alternate routes, compositions, and partially constrained orders", () => {
    const path = puzzles["tower-path"];
    expect(routeValid(path, [6, 3, 0, 1, 2])).toBe(true);
    expect(routeValid(path, [6, 7, 8, 5, 2])).toBe(true);
    expect(slotsValid(puzzles["tower-before"], [0, 1, 2])).toBe(true);
    expect(slotsValid(puzzles["tower-before"], [2, 0, 1])).toBe(true);
    expect(slotsValid(puzzles["tower-before"], [1, 0, 2])).toBe(false);
    const free = puzzles["forest-create"];
    for (let a = 0; a < 3; a++)
      for (let b = 0; b < 3; b++)
        expect(slotsValid(free, [a, b, a, b, a, b])).toBe(true);
  });
  it("requires a key before a gate and both Latin constraints", () => {
    const p = puzzles["tower-key"];
    expect(routeValid(p, [8, 9, 10, 11, 7, 3])).toBe(false);
    expect(latinValid(puzzles["tower-grid"], [0, 1, 1, 0])).toBe(true);
    expect(latinValid(puzzles["tower-grid"], [0, 1, 0, 1])).toBe(false);
    expect(latinValid(puzzles["tower-grid"], [1, 0, 0, 1])).toBe(false);
  });
});
