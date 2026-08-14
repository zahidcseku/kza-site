import { sanityFetch } from "./sanity.client";

// ---------- Response types ----------

export type SanityImageAsset = {
  _ref: string;
  _type: "reference";
  [key: string]: unknown;
};

export type SanityImage = {
  asset: SanityImageAsset;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  alt?: string;
  _type: "image";
};

export type HeroSlide = SanityImage;
export type HeroDialog = { headline?: string; sub?: string };

export type HeroData = {
  slides?: HeroSlide[];
  dialogs?: HeroDialog[];
};

export type RibbonStat = {
  num: string;
  sup?: string;
  label: string;
  desc?: string;
};

export type RibbonData = {
  introLabel?: string;
  introHeading?: string;
  introBody?: string;
  stats?: RibbonStat[];
};

export type YouTubeVideo = {
  videoId: string;
  title: string;
};

export type YouTubeFeedData = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  channelUrl?: string;
  videos?: YouTubeVideo[];
};

export type SocialLink = { label: string; url: string };

export type SiteSettings = {
  studioName: string;
  address?: string;
  mapQuery?: string;
  phone?: string;
  email?: string;
  social?: SocialLink[];
};

// ---------- GROQ queries ----------

const heroQuery = `*[_type == "hero" && _id == "hero"][0]{
  slides,
  "dialogs": dialogs[]{ headline, sub }
}`;

const ribbonQuery = `*[_type == "ribbon" && _id == "ribbon"][0]{
  introLabel,
  introHeading,
  introBody,
  "stats": stats[]{ num, sup, label, desc }
}`;

const siteSettingsQuery = `*[_type == "siteSettings" && _id == "siteSettings"][0]{
  studioName,
  address,
  mapQuery,
  phone,
  email,
  "social": social[]{ label, url }
}`;

const youtubeFeedQuery = `*[_type == "youtubeFeed" && _id == "youtubeFeed"][0]{
  eyebrow,
  heading,
  body,
  channelUrl,
  "videos": videos[]{ videoId, title }
}`;

// ---------- Fetch helpers ----------

export async function fetchHero(): Promise<HeroData | null> {
  return sanityFetch<HeroData | null>({
    query: heroQuery,
    tags: ["hero"],
  });
}

export async function fetchRibbon(): Promise<RibbonData | null> {
  return sanityFetch<RibbonData | null>({
    query: ribbonQuery,
    tags: ["ribbon"],
  });
}

export async function fetchSiteSettings(): Promise<SiteSettings | null> {
  return sanityFetch<SiteSettings | null>({
    query: siteSettingsQuery,
    tags: ["siteSettings"],
  });
}

export async function fetchYouTubeFeed(): Promise<YouTubeFeedData | null> {
  return sanityFetch<YouTubeFeedData | null>({
    query: youtubeFeedQuery,
    tags: ["youtubeFeed"],
  });
}
