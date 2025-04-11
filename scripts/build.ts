await Promise.all([
  Bun.$`./node_modules/.bin/tsc -p tsconfig.dts.json`,
  Bun.build({
    entrypoints: ["src/index.ts"],
    outdir: "dist",
    minify: true,
  }),
]);

// Generate index.d.ts file
function getMethodNames(): string[] {
  const scan = new Bun.Glob("src/lib/*.ts").scanSync();
  return Array.from(scan).map(
    (fileName) => fileName.match(/[^\\/]+(?=\.ts$)/)![0],
  );
}

function generateProperIndexDTS(): string {
  const methodNames = getMethodNames();

  const methodsList = methodNames.map((method) => `  ${method},`).join("\n");

  let indexDTS = methodNames
    .map((method) => `import { ${method} } from "./lib/${method}";`)
    .join("\n");

  indexDTS += `\n\nexport {\n${methodsList}\n};`;
  indexDTS += `\n\nexport default {\n${methodsList}\n};\n`;

  return indexDTS;
}

// patch index.d.ts file
await Bun.write("dist/index.d.ts", generateProperIndexDTS());
