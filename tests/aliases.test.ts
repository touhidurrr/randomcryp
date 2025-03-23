import { bool, boolean, float, randInt, random, rangeInt } from "@index";
import { describe, expect, test } from "bun:test";

describe("aliases", () => {
  test("bool() == boolean()", () => {
    expect(bool).toBe(boolean);
  });

  test("float() == random()", () => {
    expect(float).toBe(random);
  });

  test("rangeInt() == randInt()", () => {
    expect(rangeInt).toBe(randInt);
  });
});
