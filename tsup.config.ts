import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/theme-script.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["react", "react-dom"],
});
