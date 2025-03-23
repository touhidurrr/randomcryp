import { safeInt } from "@lib/safeInt";
import { describe, expect, test } from "bun:test";

describe("safeInt()", () => {
  console.log("safeInt():", safeInt());
  test("sum of 1M calls is close to 0", () => {
    let sum = 0;
    const POW_2_54 = Math.pow(2, 54);
    for (let i = 0; i < 1_000_000; i++) {
      const num = safeInt();
      expect(num).toBeGreaterThanOrEqual(Number.MIN_SAFE_INTEGER);
      expect(num).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
      sum += num / POW_2_54;
    }

    expect(sum).toBeCloseTo(0, -3);
  });
});
