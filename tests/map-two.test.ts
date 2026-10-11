import { frontCubeFace, waterHeight } from "../src/pedagogy/map-two";
import { describe, it, expect } from "vitest";
import {
  buildCanRemove,
  buildSupports,
  cubeFaces,
  exactCounts,
  frequencies,
  halfValid,
  lengthValid,
  mapRouteStep,
  measurementStep,
  transferWater,
  votesFor,
} from "../src/pedagogy/map-two";
import { maps, regions, gameSearch } from "../src/content/regions";
import { mapTwoMissions } from "../src/content/map-two-missions";
import { missions } from "../src/content/missions";
import {
  initialProgress,
  nodeState,
  parseProgress,
  record,
  type Evidence,
} from "../src/world/progression/store";
import { parentGuides } from "../src/content/parent-guides";
import { missionPurpose } from "../src/content/learning-purpose";
describe("map two mathematics", () => {
  it("requires exact length without gaps, overlap, or overflow and allows unused pieces", () => {
    expect(lengthValid(6, 2, [0, 2, 4, null, null])).toBe(true);
    expect(lengthValid(6, 2, [4, 0, null, 2, null])).toBe(true);
    expect(lengthValid(8, 2, [6, 2, 0, null, 4])).toBe(true);
    expect(lengthValid(6, 2, [0, 2, null])).toBe(false);
    expect(lengthValid(6, 2, [0, 1, 4])).toBe(false);
    expect(lengthValid(6, 2, [0, 2, 5])).toBe(false);
    expect(lengthValid(6, 2, [-1, 1, 3])).toBe(false);
  });
  it("repeats the same unit from each previous endpoint and preserves the measured length", () => {
    for (const length of [4, 6])
      for (const unit of [1, 2]) {
        const marks: number[] = [];
        for (let start = 0; start < length; start += unit) {
          expect(measurementStep(length, unit, marks, start + 1)).toBe(false);
          expect(measurementStep(length, unit, marks, start)).toBe(true);
          marks.push(start);
        }
        expect(measurementStep(length, unit, marks, length)).toBe(false);
        expect(marks.length * unit).toBe(length);
      }
  });
  it("conserves water during transfer, return, empty pours, and full destination", () => {
    for (const total of [4, 6]) {
      let water: [number, number] = [total, 0];
      for (let i = 0; i < total; i++) {
        water = transferWater(water, 0, [6, 6]);
        expect(water[0] + water[1]).toBe(total);
      }
      expect(water).toEqual([0, total]);
      expect(transferWater(water, 0, [6, 6])).toEqual(water);
      expect(transferWater(water, 1, [6, 6])).toEqual([1, total - 1]);
    }
    expect(transferWater([1, 6], 0, [6, 6])).toEqual([1, 6]);
  });
  it("uses each case exactly once, including a tied distribution and empty category", () => {
    expect(frequencies(votesFor(0))).toEqual([3, 2, 1]);
    expect(frequencies(votesFor(1))).toEqual([2, 2, 0]);
    expect(exactCounts([3, 2, 1], frequencies(votesFor(0)))).toBe(true);
    expect(exactCounts([2, 2, 0], frequencies(votesFor(1)))).toBe(true);
    expect(exactCounts([2, 3, 1], frequencies(votesFor(0)))).toBe(false);
    expect(exactCounts([2, 2, 1], frequencies(votesFor(1)))).toBe(false);
  });
  it("accepts different equal-area partitions and rejects incomplete or unequal shares", () => {
    expect(halfValid([0, 0, 0, 1, 1, 1])).toBe(true);
    expect(halfValid([0, 1, 0, 1, 0, 1])).toBe(true);
    expect(halfValid([0, 1, 1, 0])).toBe(true);
    expect(halfValid([0, 0, 0, 0, 1, 1])).toBe(false);
    expect(halfValid([0, null, 1, 1])).toBe(false);
  });
  it("requires support before adding a beam and prevents removing occupied supports", () => {
    for (const height of [2, 3]) {
      const filled = Array(height * 2 + 1).fill(false);
      expect(buildSupports(height * 2, filled, height)).toBe(false);
      expect(buildSupports(2, filled, height)).toBe(false);
      for (let i = 0; i < height * 2; i++) {
        expect(buildSupports(i, filled, height)).toBe(true);
        filled[i] = true;
      }
      expect(buildSupports(height * 2, filled, height)).toBe(true);
      filled[height * 2] = true;
      expect(buildCanRemove(0, filled, height)).toBe(false);
      expect(buildCanRemove(height * 2, filled, height)).toBe(true);
      filled[height * 2] = false;
      expect(buildCanRemove(0, filled, height)).toBe(false);
      expect(buildCanRemove(height * 2 - 1, filled, height)).toBe(true);
    }
  });
  it("reveals every stable cube face over camera turns, including bottom and back", () => {
    const seen = new Set<number>();
    for (const yaw of [35, 125, 215, 305])
      for (const pitch of [-25, 25]) {
        const faces = cubeFaces(yaw, pitch);
        expect(faces).toHaveLength(3);
        expect(new Set(faces.map((f) => f.id)).size).toBe(3);
        faces.forEach((f) => {
          seen.add(f.id);
          expect(f.points).not.toMatch(/NaN/);
        });
      }
    expect([...seen].sort()).toEqual([0, 1, 2, 3, 4, 5]);
    expect(cubeFaces(35, -25)).toEqual(cubeFaces(395, -25));
  });
  it("allows alternate landmark routes and retracing but rejects stones and jumps", () => {
    for (const route of [
      [6, 3, 0],
      [6, 7, 8, 5, 2],
      [6, 3, 0, 1, 2],
      [6, 7, 6, 3, 0],
    ])
      for (let i = 1; i < route.length; i++)
        expect(mapRouteStep(route.slice(0, i), route[i])).toBe(true);
    expect(mapRouteStep([6, 3], 4)).toBe(false);
    expect(mapRouteStep([6], 0)).toBe(false);
    expect(mapRouteStep([2], 3)).toBe(false);
  });
});
describe("two map compatibility", () => {
  it("keeps old home URLs and validates map query", () => {
    expect(maps).toHaveLength(2);
    expect(gameSearch({}).peta).toBeUndefined();
    expect(
      gameSearch({
        peta: "pembuat",
        wilayah: "desa-data",
        orangtua: true,
        konsep: true,
      }),
    ).toEqual({
      peta: "pembuat",
      wilayah: "desa-data",
      orangtua: true,
      konsep: true,
    });
    expect(gameSearch({ peta: "unknown" }).peta).toBeUndefined();
  });
  it("opens new regions independently, preserves 48 old completions and tracks new progress", () => {
    const old = missions.filter(
      (m) => regions.find((r) => r.id === m.region)!.map === "penemuan",
    );
    let progress = parseProgress(
      JSON.stringify({ ...initialProgress, completed: old.map((m) => m.id) }),
    );
    expect(progress.completed).toHaveLength(48);
    for (const m of mapTwoMissions) {
      expect(
        nodeState(
          progress,
          missions.findIndex((x) => x.id === m.id),
        ),
      ).toBe("current");
      const e: Evidence = {
        mission: m.id,
        attempts: 2,
        hints: 0,
        solutions: ["test"],
        variant: "0",
        completed: true,
      };
      progress = record(progress, e);
    }
    expect(progress.completed).toHaveLength(60);
    expect(parseProgress(JSON.stringify(progress))).toEqual(progress);
    for (const region of regions.filter((r) => r.map === "pembuat")) {
      const first = missions.findIndex((m) => m.region === region.id);
      expect(nodeState(initialProgress, first)).toBe("current");
      expect(nodeState(initialProgress, first + 1)).toBe("locked");
    }
  });
  it("provides each new mission with conceptual purpose, parent guide, and source", () => {
    for (const m of mapTwoMissions) {
      expect(m.goalIds.length).toBeGreaterThan(0);
      expect(missionPurpose[m.id]).toEqual(m.purpose);
      expect(parentGuides[m.id].observe).toBeTruthy();
      expect(parentGuides[m.id].nextActivity).toBeTruthy();
      expect(parentGuides[m.id].source).toBeTruthy();
    }
  });
});

it("preserves equal water cross sections and selects the front face through rotations", () => {
  expect(waterHeight(6, 174) * 174).toBeCloseTo(waterHeight(6, 70) * 70);
  expect(frontCubeFace(0, 0)).toBe(1);
  expect(frontCubeFace(90, 0)).toBe(2);
  expect(frontCubeFace(180, 0)).toBe(0);
  expect(frontCubeFace(270, 0)).toBe(3);
  expect(frontCubeFace(0, 85)).toBe(5);
  expect(frontCubeFace(0, -85)).toBe(4);
});
