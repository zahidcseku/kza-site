import { defineType, defineField, defineArrayMember } from "sanity";

// Singleton: the hero section. Slides are the background images that
// crossfade with a Ken-Burns zoom; dialogs are the statements that play
// once in sequence before the finale logo reveals.
export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "slides",
      title: "Background images",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              description: "Accessibility description of the photo.",
            }),
          ],
        }),
      ],
      description: "The full-bleed photographs that cycle in the hero. Drag to reorder — the first image shows on load.",
      validation: (r) => r.min(1).max(12),
    }),
    defineField({
      name: "dialogs",
      title: "Dialogs",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          title: "Dialog",
          fields: [
            defineField({
              name: "headline",
              title: "Headline",
              type: "string",
              description: "The large statement, e.g. “We design for the climate first.”",
            }),
            defineField({
              name: "sub",
              title: "Subtitle",
              type: "string",
              description: "The smaller line beneath, e.g. “Drawn nine times before we pour.”",
            }),
          ],
          preview: { select: { title: "headline", subtitle: "sub" } },
        }),
      ],
      description: "Two-to-three statements that play once in order, then the logo reveals. Leave empty to skip straight to the logo.",
      validation: (r) => r.max(4),
    }),
  ],
  preview: { select: { title: "title" } },
  // Give the singleton a readable title in the Studio desk.
  // (Singletons default their preview to the document type name.)
});
