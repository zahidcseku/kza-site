// Project + firm data. Imagery = the supplied architectural photographs,
// cycled across projects and the hero. `placeholder()` is kept as a utility
// for any future page that still needs synthetic art. Ported from source/src/data.jsx.

import type { StaticImageData } from "next/image";

import heroResidential from "@/app/assets/hero/1_residential_cover.jpg";
import heroCrystal from "@/app/assets/hero/Crystal-Tower-(5).png";
import heroSayeedP from "@/app/assets/hero/LA-Sayeed-Tower-(5).jpg";
import hero7 from "@/app/assets/hero/7.png";
import heroSayeedL from "@/app/assets/hero/LA-Sayeed-Tower-(4).jpg";
import heroB3 from "@/app/assets/hero/b3.png";

export type Project = {
  id: string;
  title: string;
  tag: string;
  year: string;
  loc: string;
  img: StaticImageData;
};

export type HeroImage = {
  img: StaticImageData;
  alt: string;
};

export type Stat = {
  num: string;
  sup: string;
  label: string;
  desc: string;
};

// Portable UTF-8-safe base64 — btoa is a global in both modern browsers and Node 16+.
function b64Utf8(str: string): string {
  return btoa(unescape(encodeURIComponent(str)));
}

type PlaceholderOpts = {
  title: string;
  sub: string;
  bg?: string;
  fg?: string;
  accent?: string;
};

// Striped SVG placeholder with title + id (architectural silhouette).
export function placeholder({
  title,
  sub,
  bg = "#3A352D",
  fg = "#F2EEE7",
  accent = "#8A6B47",
}: PlaceholderOpts): string {
  const yr = new Date().getFullYear() - 2008;
  const safeTitle = title.replace(/&/g, "&amp;");
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000' preserveAspectRatio='xMidYMid slice'>
<defs>
<pattern id='s' width='8' height='8' patternUnits='userSpaceOnUse' patternTransform='rotate(-12)'>
<rect width='8' height='8' fill='${bg}'/>
<line x1='0' y1='0' x2='0' y2='8' stroke='${accent}' stroke-opacity='0.18' stroke-width='1'/>
</pattern>
<linearGradient id='g' x1='0' x2='0' y1='0' y2='1'>
<stop offset='0' stop-color='${bg}' stop-opacity='0'/>
<stop offset='1' stop-color='${bg}' stop-opacity='0.55'/>
</linearGradient>
</defs>
<rect width='800' height='1000' fill='url(#s)'/>
<rect width='800' height='1000' fill='url(#g)'/>
<g fill='none' stroke='${fg}' stroke-opacity='0.14' stroke-width='1'>
<path d='M0 820 L800 720'/>
<path d='M0 860 L800 760'/>
<rect x='140' y='540' width='260' height='280'/>
<rect x='400' y='480' width='200' height='340'/>
<rect x='600' y='600' width='140' height='220'/>
<path d='M140 540 L270 460 L400 540'/>
<path d='M400 480 L500 400 L600 480'/>
</g>
<g fill='${fg}' font-family='Instrument Serif, serif'>
<text x='60' y='920' font-size='54' letter-spacing='-1'>${safeTitle}</text>
</g>
<g fill='${fg}' opacity='0.65' font-family='ui-monospace, monospace' font-size='14' letter-spacing='2'>
<text x='60' y='72'>KZA · ${sub}</text>
<text x='740' y='72' text-anchor='end'>${yr} YR</text>
</g>
</svg>`;
  return "data:image/svg+xml;base64," + b64Utf8(svg);
}

// The 6 supplied photographs, reused as the project tile imagery.
// Cycling keeps every card on a real photo until fuller coverage arrives.
const PROJECT_IMAGES: StaticImageData[] = [
  heroResidential,
  heroCrystal,
  heroSayeedP,
  hero7,
  heroSayeedL,
  heroB3,
];

type ProjectSeed = Omit<Project, "img">;

const PROJECT_SEEDS: ProjectSeed[] = [
  { id: "KZA-001", title: "Sonadanga Residence", tag: "Residential", year: "2024", loc: "Khulna, BD" },
  { id: "KZA-002", title: "Rupsha Pavilion", tag: "Cultural", year: "2023", loc: "Khulna, BD" },
  { id: "KZA-003", title: "Silo No. 7", tag: "Heritage Conservation", year: "2023", loc: "Chittagong, BD" },
  { id: "KZA-004", title: "Haor Reading Rooms", tag: "Institutional", year: "2022", loc: "Sunamganj, BD" },
  { id: "KZA-005", title: "Khan Jahan Guesthouse", tag: "Interior Design", year: "2022", loc: "Bagerhat, BD" },
  { id: "KZA-006", title: "Salt & Tide", tag: "Interior Design", year: "2021", loc: "Cox's Bazar, BD" },
  { id: "KZA-007", title: "Forty Four Courtyards", tag: "Residential", year: "2021", loc: "Sylhet, BD" },
  { id: "KZA-008", title: "Jute Exchange", tag: "Masterplanning", year: "2020", loc: "Narsingdi, BD" },
  { id: "KZA-009", title: "The Copper Mosque", tag: "Cultural", year: "2020", loc: "Tangail, BD" },
  { id: "KZA-010", title: "Monsoon Academy", tag: "Institutional", year: "2019", loc: "Rangpur, BD" },
  { id: "KZA-011", title: "Sundarban Station", tag: "Heritage Conservation", year: "2019", loc: "Mongla, BD" },
  { id: "KZA-012", title: "Delta Lantern Villas", tag: "Residential", year: "2018", loc: "Khulna, BD" },
];

export const PROJECTS: Project[] = PROJECT_SEEDS.map((p, i) => ({
  ...p,
  img: PROJECT_IMAGES[i % PROJECT_IMAGES.length],
}));

// The 6 supplied photographs, composed together in the hero montage.
export const HERO_IMAGES: HeroImage[] = [
  { img: heroResidential, alt: "Residential project, Khulna" },
  { img: heroCrystal, alt: "Crystal Tower" },
  { img: heroSayeedP, alt: "LA Sayeed Tower" },
  { img: hero7, alt: "Architectural project, Khulna" },
  { img: heroSayeedL, alt: "LA Sayeed Tower, elevation" },
  { img: heroB3, alt: "Studio architectural work, Khulna" },
];

export const TAGS = [
  "All",
  "Residential",
  "Interior Design",
  "Masterplanning",
  "Heritage Conservation",
  "Institutional",
  "Cultural",
  "Consulting",
];

export const STATS: Stat[] = [
  { num: "18", sup: "", label: "Years in Practice", desc: "Independent studio since 2008, based in Khulna." },
  { num: "124", sup: "+", label: "Built Works", desc: "Across residential, interior, heritage and planning." },
  { num: "09", sup: "", label: "Countries", desc: "Bangladesh, India, Oman, Singapore and beyond." },
  { num: "38", sup: "", label: "Awards & Mentions", desc: "Aga Khan nomination (2022), Berger Award (2021 & 2014)." },
];
