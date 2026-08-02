"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schemas";
import { structure } from "./sanity/structure";
import { projectId, dataset } from "./sanity/env";

export default defineConfig({
  name: "kza-site",
  title: "KZA Site",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool({ structure })],
  schema: { types: schema },
});
