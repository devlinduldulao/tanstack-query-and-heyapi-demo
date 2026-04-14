import { defineConfig } from "orval";

const input = "./swagger.json";
const outputPath = "./src/api/client";

export default defineConfig({
  api: {
    input: {
      target: input,
    },
    output: {
      target: `${outputPath}/@tanstack/react-query.gen.ts`,
      schemas: {
        path: `${outputPath}/types`,
        type: "typescript",
      },
      client: "react-query",
      httpClient: "axios",
      formatter: "oxfmt",
    },
    hooks: {
      afterAllFilesWrite: "oxlint --fix",
    },
  },
  apiZod: {
    input: {
      target: input,
    },
    output: {
      target: `${outputPath}/zod.gen.ts`,
      client: "zod",
      formatter: "oxfmt",
    },
    hooks: {
      afterAllFilesWrite: "oxlint --fix",
    },
  },
});
