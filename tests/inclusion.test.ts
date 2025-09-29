import index, * as exported from "@index";
import { expect, test } from "bun:test";

test("check if everything is exported properly", () => {
  const scan = new Bun.Glob("src/lib/*.ts").scanSync();
  const methodNames = Array.from(scan).map(
    (fileName) => fileName.match(/[^\\/]+(?=\.ts$)/)![0],
  );
  expect(exported).toMatchObject(index);
  //@ts-expect-error
  expect(index).toContainKeys(methodNames);
  //@ts-expect-error
  expect(exported).toContainKeys(methodNames);
});
