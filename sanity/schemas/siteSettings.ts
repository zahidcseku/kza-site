import { defineType, defineField, defineArrayMember } from "sanity";

// Singleton: the studio's contact details + social links. Drives the
// footer contact column and the clickable map link. One document only.
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "studioName",
      title: "Studio name",
      type: "string",
      description: "Shown in the footer address, e.g. “Khan Zahid Architects”.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
      description: "The full postal address. Line breaks are preserved in the footer.",
    }),
    defineField({
      name: "mapQuery",
      title: "Map search query",
      type: "string",
      description: "What the clickable address searches for on Google Maps (e.g. “Khan Zahid Architects Sonadanga Khulna Bangladesh”).",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      description: "Shown with a tap-to-call link. Include the country code, e.g. +880 1712 753 160.",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (r) => r.email(),
    }),
    defineField({
      name: "social",
      title: "Social links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          title: "Social link",
          fields: [
            defineField({ name: "label", title: "Label", type: "string", description: "e.g. Facebook, Instagram, LinkedIn." }),
            defineField({ name: "url", title: "URL", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "url" } },
        }),
      ],
      description: "Appears in the footer “Follow Us” column.",
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Site Settings",
      subtitle: "Contact + social",
    }),
  },
});
