import { defaultPlugins, defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "./swagger.json",
  output: { postProcess: ["oxlint", "oxfmt"], path: "src/api/client" },
  plugins: [...defaultPlugins, "@hey-api/client-axios", "@tanstack/react-query", "zod"],
});
