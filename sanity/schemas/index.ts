import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { hero } from "./hero";
import { ribbon } from "./ribbon";
import { youtubeFeed } from "./youtubeFeed";

export const schema: SchemaTypeDefinition[] = [
  hero,
  ribbon,
  youtubeFeed,
  siteSettings,
];
