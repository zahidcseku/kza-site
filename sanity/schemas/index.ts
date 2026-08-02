import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { hero } from "./hero";
import { ribbon } from "./ribbon";

export const schema: SchemaTypeDefinition[] = [
  hero,
  ribbon,
  siteSettings,
];
