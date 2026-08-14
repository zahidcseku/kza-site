import type { StructureResolver } from "sanity/structure";

// Desk layout: each section opens its single document directly (no
// intermediate list), so editors land in the form with one click.
// These behave as singletons — the custom structure replaces the
// default list, so there's no way to create duplicates via the desk.
export const structure: StructureResolver = (S) =>
  S.list()
    .id("root")
    .title("Content")
    .items([
      S.listItem()
        .id("hero")
        .title("Hero")
        .child(S.document().schemaType("hero").documentId("hero")),
      S.listItem()
        .id("ribbon")
        .title("Ribbon (In Numbers)")
        .child(S.document().schemaType("ribbon").documentId("ribbon")),
      S.listItem()
        .id("youtubeFeed")
        .title("YouTube Reel")
        .child(S.document().schemaType("youtubeFeed").documentId("youtubeFeed")),
      S.divider(),
      S.listItem()
        .id("siteSettings")
        .title("Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
    ]);
