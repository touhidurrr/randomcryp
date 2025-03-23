// Testing ifloat also tests uSafeInt
// No separate test for uSafeInt is needed

import { ifloat } from "@lib/ifloat";
import { describe, expect, test } from "bun:test";

describe("ifloat()", () => {
  console.log("ifloat():", ifloat());
  test("sum of 2M calls is close to 0", () => {
    let sum = 0;
    for (let i = 0; i < 2_000_000; i++) {
      const num = ifloat();
      expect(num).toBeGreaterThanOrEqual(-1);
      expect(num).toBeLessThanOrEqual(1);
      sum += ifloat();
    }

    expect(sum).toBeCloseTo(0, -4);
  });

  test("calculate PI", () => {
    let inside = 0;
    for (let i = 0; i < 1_000_000; i++) {
      const x = ifloat();
      const y = ifloat();
      if (x * x + y * y < 1) {
        inside++;
      }
    }

    const pi = (4 * inside) / 1_000_000;
    expect(pi).toBeCloseTo(Math.PI, 2);
  });
});
