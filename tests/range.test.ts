// Testing float also tests uSafeInt
// No separate test for uSafeInt is needed

import { range, uSafeInt } from "@index";
import { describe, expect, test } from "bun:test";

describe("range()", () => {
  test("100K calls to check minmax inclusion", () => {
    for (let i = 0; i < 100_000; i++) {
      const min = uSafeInt() % 1000;
      const max = 1000 + (uSafeInt() % 1000);
      const num = range(min, max);
      expect(num).toBeGreaterThanOrEqual(min);
      expect(num).toBeLessThan(max);
    }
  });
});
