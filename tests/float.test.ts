// Testing float also tests uSafeInt
// No separate test for uSafeInt is needed

import { float } from "@lib/float";
import { describe, expect, test } from "bun:test";

describe("float()", () => {
  console.log("float()", float());
  test("sum of 2M calls is close to 1M", () => {
    let sum = 0;
    for (let i = 0; i < 2_000_000; i++) {
      const num = float();
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThan(1);
      sum += float();
    }

    expect(sum).toBeCloseTo(1_000_000, -4);
  });

  test("calculate PI", () => {
    let inside = 0;
    for (let i = 0; i < 1_000_000; i++) {
      const x = float();
      const y = float();
      if (Math.hypot(x - 0.5, y - 0.5) < 0.5) {
        inside++;
      }
    }

    const pi = (4 * inside) / 1_000_000;
    expect(pi).toBeCloseTo(Math.PI, 2);
  });
});
