import { describe, expect, it } from "vitest";
import { puzzles } from "../src/content/puzzles";
import { orderPlaces, productionValid } from "../src/pedagogy/concepts";
import { reflectToken, slotsValid, solveSlots } from "../src/pedagogy/puzzles";
import { tokenFrame } from "../src/components/TokenArt";

describe("map one curriculum gaps", () => {
  it("keeps square and circle targets square in the fixed assembly coordinate system", () => {
    for (const id of ["shape-shadows", "shape-house", "shape-rocket"] as const)
      for (const target of puzzles[id].targets)
        if (target.token.kind === "square" || target.token.kind === "circle")
          expect(target.w * 1.44).toBeCloseTo(target.h, 3);
  });
  it("frames a rotated rectangle around its actual geometry, not the empty square SVG", () => {
    expect(tokenFrame({ kind: "rectangle", color: 0 })).toBe("11.5 24.5 77 51");
    expect(tokenFrame({ kind: "rectangle", color: 0, turn: 1 })).toBe(
      "24.5 11.5 51 77",
    );
    expect(tokenFrame({ kind: "square", color: 0 })).toBe("13.5 13.5 73 73");
  });
  it("accepts the composed boat and rocket while rejecting a reversed sail or fin", () => {
    for (const id of ["shape-boat", "shape-rocket"] as const) {
      const p = puzzles[id];
      const solution = solveSlots(p)!;
      expect(slotsValid(p, solution)).toBe(true);
      const last = p.targets.length - 1;
      [solution[last - 1], solution[last]] = [
        solution[last],
        solution[last - 1],
      ];
      expect(slotsValid(p, solution)).toBe(false);
    }
  });
  it("produces the requested groups while leaving surplus unused", () => {
    expect(productionValid([0, 0, 0, 1, 1, null, null], [3, 2])).toBe(true);
    expect(productionValid([null, 1, 0, null, 0, 1, 0], [3, 2])).toBe(true);
    expect(productionValid([0, 0, 0, 1, 1, 0, null], [3, 2])).toBe(false);
    expect(productionValid([0, 0, null, 1, 1, null, null], [3, 2])).toBe(false);
    expect(productionValid([0, 0, 0, 1, 1, 2, null], [3, 2])).toBe(false);
    expect(productionValid([0, null, 1, 0, null, null, null], [2, 1])).toBe(
      true,
    );
    expect(productionValid([0, 0, 0, 1, null, null, null], [2, 1])).toBe(false);
  });
  it("preserves each old flower position when adding the surplus", () => {
    expect(orderPlaces([0, null, 1, 0, null])).toEqual([
      0,
      null,
      1,
      0,
      null,
      null,
      null,
    ]);
    expect(orderPlaces([0, 0, 0, 1, 1])).toEqual([0, 0, 0, 1, 1, null, null]);
    const current = [null, 1, 0, null, 0, 1, 0];
    expect(orderPlaces(current)).toEqual(current);
    expect(orderPlaces([0, 0, 0, 1, 8])).toEqual(Array(7).fill(null));
  });
  it("transfers the relation across materials with either valid correspondence", () => {
    const p = puzzles["forest-transfer"];
    expect(p.exampleTokens!.map((t) => t.kind)).toEqual(["circle", "square"]);
    expect(p.tokens.map((t) => t.kind)).toEqual(["leaf", "lantern"]);
    expect(slotsValid(p, [0, 1, 0, 1, 0, 1])).toBe(true);
    expect(slotsValid(p, [1, 0, 1, 0, 1, 0])).toBe(true);
    expect(slotsValid(p, [0, 0, 0, 0, 0, 0])).toBe(false);
    expect(slotsValid(p, [0, 1, 0, 0, 0, 1])).toBe(false);
  });
  it("requires reclassification of the same identities when the rule changes", () => {
    const p = puzzles["forest-types"];
    const colors = { ...p, ...p.firstRule };
    expect(slotsValid(colors, [1, 0, 0, 1])).toBe(true);
    expect(slotsValid(p, [1, 0, 0, 1])).toBe(false);
    expect(slotsValid(p, [0, 1, 0, 1])).toBe(true);
    expect(colors.tokens).toBe(p.tokens);
    expect(slotsValid(colors, [0, 1, 0, 1])).toBe(false);
  });
  it("classifies rotated, scalene and wide triangles independently of color", () => {
    const p = puzzles["shape-turned"];
    expect(p.tokens[0]).toMatchObject({
      kind: "triangle",
      variant: "scalene",
      turn: 1,
    });
    expect(p.tokens[2]).toMatchObject({
      kind: "triangle",
      variant: "wide",
      turn: 2,
    });
    expect(slotsValid(p, [0, 1, 0, 1])).toBe(true);
    expect(slotsValid(p, [0, 1, 1, 0])).toBe(false);
  });
  for (const id of ["shape-mirror", "shape-window"] as const)
    it(`${id} requires geometric reflection as well as reversed position`, () => {
      const p = puzzles[id];
      expect(slotsValid(p, [...p.left].reverse())).toBe(false);
      expect(slotsValid(p, solveSlots(p)!)).toBe(true);
      const wrong = solveSlots(p)!;
      wrong[0] = p.left.at(-1)!;
      expect(slotsValid(p, wrong)).toBe(false);
    });
  it("reflection reverses rotation and two reflections restore geometry", () => {
    const token = {
      kind: "leaf" as const,
      color: 1,
      turn: 1,
      reflected: false,
    };
    expect(reflectToken(token)).toMatchObject({ turn: 3, reflected: true });
    expect(reflectToken(reflectToken(token))).toEqual(token);
  });
});
