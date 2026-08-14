import { defineType, defineField } from "sanity";

// One team member. Unlike the homepage singletons (hero, ribbon, …), this
// is a plain document type — editors create one document per person, so
// they can freely add, remove, and reorder members. Intended to drive a
// future team / about page.
export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "showOnHomepage",
      title: "Show on homepage",
      type: "boolean",
      description: "Turn on to feature this member in the homepage team section.",
      initialValue: true,
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "The member's full name.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "photo",
      title: "Profile photo",
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
      description: "A square or portrait headshot works best. Set a hotspot on the face so it stays in frame when cropped.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
      description: "Job title, e.g. “Founding Partner”.",
    }),
    defineField({
      name: "shortDesc",
      title: "Short description",
      type: "text",
      rows: 2,
      description: "A one-line summary — shown on cards and quick glances.",
    }),
    defineField({
      name: "longDesc",
      title: "Long description",
      type: "text",
      rows: 8,
      description: "The full bio. Line breaks are preserved.",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "designation", media: "photo" },
  },
});
