const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");

const typescriptPlugin = typescript({
  tsconfig: "./tsconfig.json",
  declaration: true,
  declarationDir: "./dist",
});

module.exports = [
  // CJS build — needs resolve + commonjs for Node.js consumers
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [resolve(), commonjs(), typescriptPlugin],
    external: ["axios", "tslib"],
  },
  // ESM build — pure TS source, no CJS interop needed; Vite/bundlers use this
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.esm.js",
      format: "es",
      sourcemap: true,
    },
    plugins: [typescriptPlugin],
    external: ["axios", "tslib"],
  },
];
