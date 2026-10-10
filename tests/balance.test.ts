import { describe, expect, it } from "vitest";
import { balancePose } from "../src/pedagogy/balance";

describe("balance feedback", () => {
  it("rests level for equal weights, including an empty scale", () => {
    for (const weight of [0, 1, 3, 6]) {
      expect(balancePose(weight, weight)).toEqual({
        angle: -0,
        leftOffset: 0,
        state: "equal",
      });
    }
  });
  it("lowers the heavier pan and mirrors the opposite distribution", () => {
    const left = balancePose(3, 1);
    const right = balancePose(1, 3);
    expect(left.leftOffset).toBeGreaterThan(0);
    expect(right.leftOffset).toBeLessThan(0);
    expect(left.angle).toBe(-right.angle);
    expect(left.state).toBe("left");
    expect(right.state).toBe("right");
  });
  it("limits tilt so controls remain reachable", () => {
    expect(Math.abs(balancePose(6, 0).angle)).toBe(8);
    expect(Math.abs(balancePose(0, 6).leftOffset)).toBe(24);
  });
});
