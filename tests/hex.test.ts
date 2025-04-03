import { hex } from "@lib/hex";
import { describe, expect, test } from "bun:test";

describe("hex()", () => {
  console.log("hex()", hex());

  test("prefix", () => {
    const unPrefixed = hex(8, false);
    expect(unPrefixed).toHaveLength(8);
    expect(unPrefixed).not.toStartWith("0x");

    const defaultPrefix = hex(8);
    expect(defaultPrefix).toHaveLength(8);
    expect(defaultPrefix).not.toStartWith("0x");

    const prefixed = hex(8, true);
    expect(prefixed).toHaveLength(10);
    expect(prefixed).toStartWith("0x");
  });

  test("length", () => {
    expect(hex()).toHaveLength(8);
    for (let i = 1; i < 100; i++) {
      expect(hex(i)).toHaveLength(i);
      expect(hex(i, true)).toHaveLength(i + 2);
    }
  });
});
