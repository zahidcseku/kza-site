import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { hero } from "./hero";
import { ribbon } from "./ribbon";
import { youtubeFeed } from "./youtubeFeed";
import { teamMember } from "./teamMember";

export const schema: SchemaTypeDefinition[] = [
  hero,
  ribbon,
  youtubeFeed,
  teamMember,
  siteSettings,
];
