import { defaultPlugins, defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "./swagger.yaml",
  plugins: [...defaultPlugins, "@hey-api/client-axios", "@tanstack/react-query", "zod"],
  output: { postProcess: ["oxlint", "oxfmt"], path: "src/api/client" },
});
