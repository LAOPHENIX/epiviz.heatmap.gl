import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";
import OMT from "@surma/rollup-plugin-off-main-thread";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: {
    file: "dist/epiviz.heatmap.gl.js", // On fixe le nom du fichier
    format: "esm",                    // Format ESM obligatoire pour Vite/Angular
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    OMT(),
    json(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    postcss({
      extract: "ehgl.css",
      minimize: true,
    }),
  ],
};
