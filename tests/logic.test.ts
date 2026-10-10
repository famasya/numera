import { parseSession, isPlaces } from "../src/world/progression/session";
import { parentGuides, parentSources } from "../src/content/parent-guides";
import { missions } from "../src/content/missions";
import { describe, it, expect } from "vitest";
import {
  compositionKey,
  plantingValid,
  patternAt,
  patternVariant,
  placementValid,
  growingValid,
  repeatedUnitValid,
  repairValid,
} from "../src/pedagogy/concepts";
import {
  initialProgress,
  parseProgress,
  record,
  nodeState,
  type Evidence,
} from "../src/world/progression/store";
import { readyForRichPattern } from "../src/pedagogy/mastery/readiness";
import { scaffoldLevel } from "../src/pedagogy/scaffolding/hints";
const event = (
  mission: Evidence["mission"],
  extras: Partial<Evidence> = {},
): Evidence => ({
  mission,
  attempts: 5,
  hints: 0,
  solutions: [],
  variant: "AB",
  completed: true,
  ...extras,
});
describe("one object for each place", () => {
  it("accepts every permutation, never duplicate or absent flowers", () => {
    function permutations(xs: number[]): number[][] {
      return xs.length === 0
        ? [[]]
        : xs.flatMap((x, i) =>
            permutations(xs.filter((_, j) => i !== j)).map((p) => [x, ...p]),
          );
    }
    const all = permutations([0, 1, 2, 3, 4]);
    expect(all).toHaveLength(120);
    for (const p of all) expect(plantingValid(p)).toBe(true);
    expect(plantingValid([0, 0, 2, 3, 4])).toBe(false);
    expect(plantingValid([0, 1, 2, 3, null])).toBe(false);
    expect(plantingValid([0, 1, 2, 3, 8])).toBe(false);
    expect(plantingValid([0, 1, 2, 3])).toBe(false);
  });
});
describe("five flowers in two beds", () => {
  it("recognizes all 32 arrangements and six ordered partitions including empty beds", () => {
    const keys = new Set<string>();
    for (let mask = 0; mask < 32; mask++) {
      const beds = Array.from({ length: 5 }, (_, i) => (mask >> i) & 1);
      const k = compositionKey(beds);
      expect(k).not.toBeNull();
      expect(
        k!
          .split(":")
          .map(Number)
          .reduce((a, b) => a + b, 0),
      ).toBe(5);
      keys.add(k!);
    }
    expect([...keys].sort()).toEqual([
      "0:5",
      "1:4",
      "2:3",
      "3:2",
      "4:1",
      "5:0",
    ]);
  });
  it("keeps an incomplete or invalid placement unfinished", () => {
    expect(compositionKey([0, 1, 0, null, 1])).toBeNull();
    expect(compositionKey([0, 1, 0, 2, 1])).toBeNull();
    expect(compositionKey([0, 1])).toBeNull();
  });
});
describe("patterns", () => {
  it("has reproducible AB, BA and AAB variations and valid missing places", () => {
    for (let run = 0; run < 5; run++)
      for (const rich of [false, true]) {
        const p = patternVariant(run, rich);
        expect(p).toEqual(patternVariant(run, rich));
        for (const i of p.missing) {
          expect(i).toBeLessThan(p.length);
          expect(patternAt(i, p.unit)).toBe(p.unit[i % p.unit.length]);
        }
        expect(new Set(p.missing).size).toBe(p.missing.length);
      }
  });
  it("offers richer patterns only after two distinct independent sessions", () => {
    let p = record(initialProgress, event("counting"));
    p = record(p, event("composition"));
    p = record(p, event("patterns"));
    expect(readyForRichPattern(p)).toBe(false);
    p = record(p, event("patterns"));
    expect(readyForRichPattern(p)).toBe(false);
    p = record(p, event("patterns", { variant: "BA", hints: 1 }));
    expect(readyForRichPattern(p)).toBe(false);
    p = record(p, event("patterns", { variant: "BA" }));
    expect(readyForRichPattern(p)).toBe(true);
  });
});
describe("progression and safe persistence", () => {
  it("unlocks sequentially and preserves replay evidence without duplicating completion", () => {
    expect(nodeState(initialProgress, 0)).toBe("current");
    expect(nodeState(initialProgress, 1)).toBe("locked");
    expect(record(initialProgress, event("patterns"))).toEqual(initialProgress);
    let p = record(initialProgress, event("counting"));
    expect(nodeState(p, 0)).toBe("completed");
    expect(nodeState(p, 1)).toBe("current");
    p = record(p, event("counting"));
    expect(p.completed).toHaveLength(1);
    expect(p.evidence).toHaveLength(2);
    p = record(p, event("composition"));
    p = record(p, event("patterns"));
    expect(p.completed).toHaveLength(3);
    expect(parseProgress(JSON.stringify(p))).toEqual(p);
  });
  it("does not unlock on an abandoned session", () => {
    const p = record(initialProgress, event("counting", { completed: false }));
    expect(p.evidence).toHaveLength(1);
    expect(nodeState(p, 1)).toBe("locked");
  });
  it("recovers from malformed, stale, forged and impossible saves", () => {
    for (const raw of [
      null,
      "bad",
      "{}",
      '{"version":99}',
      '{"version":1,"completed":[],"evidence":null}',
    ])
      expect(parseProgress(raw)).toEqual(initialProgress);
    expect(
      parseProgress(
        JSON.stringify({
          ...initialProgress,
          completed: ["patterns"],
          evidence: [event("patterns")],
        }),
      ).completed,
    ).toEqual([]);
    expect(
      parseProgress(
        JSON.stringify({
          ...initialProgress,
          version: 1,
          completed: ["counting"],
        }),
      ).completed,
    ).toEqual([]);
    const p = parseProgress(
      JSON.stringify({
        ...initialProgress,
        evidence: [{ mission: "counting", hints: "bad" }, event("counting")],
      }),
    );
    expect(p.evidence).toHaveLength(1);
  });
});
describe("scaffolding", () => {
  it("leaves room to explore and increases hints gradually", () => {
    expect(scaffoldLevel(0, 0)).toBe(0);
    expect(scaffoldLevel(0, 1)).toBe(0);
    expect(scaffoldLevel(0, 2)).toBe(1);
    expect(scaffoldLevel(0, 4)).toBe(2);
    expect(scaffoldLevel(3, 0)).toBe(3);
  });
});

describe("extended garden adventures", () => {
  it("validates correspondence and classification by identity", () => {
    expect(placementValid("matching", [0, 1, 2, 3])).toBe(true);
    expect(placementValid("matching", [0, 0, 2, 3])).toBe(false);
    expect(placementValid("matching", [0, 1, 2, 9])).toBe(false);
    expect(placementValid("sorting", [0, 1, 0, 1, 0, 1])).toBe(true);
    expect(placementValid("sorting", [0, 1, 0, 0, 0, 1])).toBe(false);
  });
  it("distinguishes free compositions, pictured orders and equal sharing", () => {
    expect(placementValid("orders", [0, 0, 0, 1, 1])).toBe(true);
    expect(placementValid("orders", [0, 0, 1, 1, 1])).toBe(false);
    expect(placementValid("sharing", [0, 0, 1, 1])).toBe(true);
    expect(placementValid("sharing", [0, 0, 0, 1])).toBe(false);
    expect(placementValid("compare", [0, 0, 0, 1, 1, 1])).toBe(true);
    expect(placementValid("compare", [0, 0, 0, 0, 1, 1])).toBe(false);
    expect(placementValid("compare", [0, 0, 0, 1, 1, null])).toBe(false);
  });
  it("requires increasing quantities and supports four repeated units", () => {
    expect(growingValid([1, 2, 3, 4])).toBe(true);
    expect(growingValid([2, 1, 3, 4])).toBe(false);
    for (const a of [0, 1])
      for (const b of [0, 1])
        expect(repeatedUnitValid([a, b, a, b])).toBe(true);
    expect(repeatedUnitValid([0, 1, 1, 0])).toBe(false);
    expect(repeatedUnitValid([0, 1, null, 1])).toBe(false);
    expect(repairValid([0, 1, 0, 1, 0, 1])).toBe(true);
    expect(repairValid([0, 1, 0, 0, 0, 1])).toBe(false);
  });
  it("migrates old completion, unlocks all twelve, and retains completion after 200 replays", () => {
    const legacy = {
      version: 1,
      completed: ["counting", "composition", "patterns"],
      evidence: [event("counting"), event("composition"), event("patterns")],
      audio: false,
    };
    let p = parseProgress(JSON.stringify(legacy));
    expect(p.version).toBe(2);
    expect(p.completed).toHaveLength(3);
    expect(nodeState(p, 3)).toBe("current");
    const next: Evidence["mission"][] = [
      "matching",
      "compare",
      "orders",
      "sorting",
      "missing",
      "growing",
      "repair",
      "sharing",
      "free-pattern",
    ];
    for (const id of next) p = record(p, event(id));
    expect(p.completed).toHaveLength(12);
    for (let i = 0; i < 250; i++) p = record(p, event("free-pattern"));
    expect(p.evidence).toHaveLength(200);
    expect(parseProgress(JSON.stringify(p)).completed).toEqual(p.completed);
  });
});

describe("resumable sessions and parent guides", () => {
  it("recovers damaged snapshots and validates saved placements", () => {
    for (const raw of [
      null,
      "bad",
      "{}",
      '{"version":1,"values":[]}',
      '{"version":99,"values":{}}',
    ])
      expect(parseSession(raw)).toEqual({});
    const values = {
      slots: [0, 1, null, null, null],
      hint: 2,
      done: false,
      stats: { attempts: 2, hints: 2, solutions: [], recorded: false },
    };
    expect(parseSession(JSON.stringify({ version: 1, values }))).toEqual(
      values,
    );
    expect(isPlaces(values.slots, 5, 4)).toBe(true);
    expect(isPlaces([0, 1, 9, null, null], 5, 4)).toBe(false);
    expect(isPlaces([0, 1], 5, 4)).toBe(false);
  });
  it("provides actionable parent material and a primary source for every mission", () => {
    for (const m of missions) {
      const g = parentGuides[m.id];
      expect(g.meaning.length).toBeGreaterThan(20);
      expect(g.coach.length).toBeGreaterThan(20);
      expect(g.observe.length).toBeGreaterThan(20);
      expect(
        ["www.naeyc.org", "nrich.maths.org"].includes(
          new URL(parentSources[g.source].url).hostname,
        ),
      ).toBe(true);
    }
  });
});
