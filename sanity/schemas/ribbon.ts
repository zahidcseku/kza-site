import { defineType, defineField, defineArrayMember } from "sanity";

// Singleton: the “In Numbers” ribbon beneath the hero. An intro cell
// plus a row of stat cells. Drives the ribbon section of the homepage.
export const ribbon = defineType({
  name: "ribbon",
  title: "Ribbon (In Numbers)",
  type: "document",
  fields: [
    defineField({
      name: "introLabel",
      title: "Intro label",
      type: "string",
      description: "The small mono label above the intro heading, e.g. “§ 01 — In Numbers”.",
      initialValue: "§ 01 — In Numbers",
    }),
    defineField({
      name: "introHeading",
      title: "Intro heading",
      type: "string",
      description: "The serif heading, e.g. “A small practice with a long memory.”",
    }),
    defineField({
      name: "introBody",
      title: "Intro body",
      type: "text",
      rows: 3,
      description: "The paragraph beneath the heading.",
    }),
    defineField({
      name: "stats",
      title: "Stat cells",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          title: "Stat",
          fields: [
            defineField({ name: "num", title: "Number", type: "string", description: "The big numeral, e.g. “18” or “124”.", validation: (r) => r.required() }),
            defineField({ name: "sup", title: "Superscript", type: "string", description: "Small text after the number, e.g. “+” for 124+." }),
            defineField({ name: "label", title: "Label", type: "string", description: "e.g. “Years in Practice”.", validation: (r) => r.required() }),
            defineField({ name: "desc", title: "Description", type: "text", rows: 2, description: "The supporting line beneath the number." }),
          ],
          preview: { select: { title: "label", subtitle: "num" } },
        }),
      ],
      description: "The numbered stat cells shown after the intro. Drag to reorder.",
      validation: (r) => r.min(1),
    }),
  ],
  preview: {
    select: { heading: "introHeading", stats: "stats" },
    prepare: ({ heading, stats }) => ({
      title: heading || "Ribbon (In Numbers)",
      subtitle: `${stats?.length ?? 0} stat cells`,
    }),
  },
});
