import { expect, test } from "bun:test";
import index from "../src/index";

test("check if everything is exported properly", () => {
  const scan = new Bun.Glob("src/lib/*.ts").scanSync();
  const methodNames = Array.from(scan).map(
    (fileName) => fileName.match(/[^\\/]+(?=\.ts$)/)![0],
  );
  expect(index).toContainKeys(methodNames);
});
