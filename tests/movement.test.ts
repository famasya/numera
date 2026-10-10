import { expect, it } from "vitest";
import { nextQuarterAngle } from "../src/pedagogy/movement";

it("keeps each quarter turn clockwise across repeated full rotations", () => {
  let angle = 0;
  for (let step = 1; step <= 12; step++) {
    angle = nextQuarterAngle(angle, step % 4);
    expect(angle).toBe(step * 90);
  }
});
it("does not rotate a piece whose orientation has not changed", () => {
  expect(nextQuarterAngle(450, 1)).toBe(450);
});
