import { defineType, defineField, defineArrayMember } from "sanity";

// Singleton: the "On Film" YouTube reel beneath the ribbon. An intro
// (eyebrow / heading / body), a link to the studio's channel, and an
// ordered list of videos keyed by their YouTube video ID. Drives the
// horizontal filmstrip section of the homepage.
export const youtubeFeed = defineType({
  name: "youtubeFeed",
  title: "YouTube Reel",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "The serif heading for the section.",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "text",
      rows: 2,
      description: "A short supporting line beneath the heading.",
    }),
    defineField({
      name: "channelUrl",
      title: "Channel / playlist URL",
      type: "url",
      description: "The YouTube channel or playlist the “Watch on YouTube” link points to.",
      validation: (r) => r.uri({ scheme: ["https"] }),
    }),
    defineField({
      name: "videos",
      title: "Videos",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          title: "Video",
          fields: [
            defineField({
              name: "videoId",
              title: "Video ID",
              type: "string",
              description: "The 11-character ID after “v=” in a YouTube URL, e.g. “dQw4w9WgXcQ”.",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              description: "Shown beneath the thumbnail.",
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: "title", subtitle: "videoId" } },
        }),
      ],
      description: "The videos shown in the filmstrip, left to right. Drag to reorder.",
      validation: (r) => r.min(1),
    }),
  ],
  preview: {
    select: { videos: "videos" },
    prepare: ({ videos }) => ({
      title: "YouTube Reel",
      subtitle: `${videos?.length ?? 0} videos`,
    }),
  },
});
