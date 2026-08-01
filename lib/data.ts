// Project + firm data. Imagery = striped SVG placeholders (replace with real
// photography before launch). Ported from source/src/data.jsx.

export type Project = {
  id: string;
  title: string;
  tag: string;
  year: string;
  loc: string;
  img: string;
};

export type HeroSlide = {
  label: string;
  title: string;
  loc: string;
  year: string;
  img: string;
  blurb: string;
  cta: string;
  ctaHref: string;
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

// Varied palettes for placeholders so the grid has rhythm.
const P = [
  { bg: "#2B241A", fg: "#F2EEE7", accent: "#8A6B47" }, // ink brown
  { bg: "#3A352D", fg: "#EDE6D9", accent: "#C9A961" }, // warm olive
  { bg: "#5C4628", fg: "#F2EEE7", accent: "#EDE6D9" }, // bronze
  { bg: "#14130F", fg: "#EDE6D9", accent: "#C44828" }, // black + terra
  { bg: "#746A57", fg: "#FBF8F1", accent: "#141311" }, // sage
  { bg: "#8A6B47", fg: "#FBF8F1", accent: "#2B241A" }, // accent base
];
const pal = (i: number) => P[i % P.length];
const mk = (i: number, title: string, sub: string) =>
  placeholder({ title, sub, ...pal(i) });

type ProjectSeed = Omit<Project, "img">;
type HeroSeed = Omit<HeroSlide, "img">;

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
  img: mk(i, p.title, p.id),
}));

const HERO_SEEDS: HeroSeed[] = [
  {
    label: "01",
    title: "Sonadanga Residence",
    loc: "Khulna",
    year: "2024",
    blurb: "A studio of architects in Khulna — making places that belong to their weather and their people.",
    cta: "Find out more about the studio",
    ctaHref: "/about",
  },
  {
    label: "02",
    title: "Rupsha Pavilion",
    loc: "Khulna",
    year: "2023",
    blurb: "We design for the climate first. Everything else is a consequence of that first honest conversation with place.",
    cta: "Find out more about our projects",
    ctaHref: "/projects",
  },
  {
    label: "03",
    title: "Haor Reading Rooms",
    loc: "Sunamganj",
    year: "2022",
    blurb: "Brick that learns the weather. Light that knows the hour. Rooms that flood once a year, on purpose.",
    cta: "Find out more about the studio",
    ctaHref: "/about",
  },
  {
    label: "04",
    title: "The Copper Mosque",
    loc: "Tangail",
    year: "2020",
    blurb: "We draw every house nine times before we pour — quiet buildings, on loud sites.",
    cta: "Find out more about our projects",
    ctaHref: "/projects",
  },
  {
    label: "05",
    title: "Salt & Tide",
    loc: "Cox's Bazar",
    year: "2021",
    blurb: "Eighteen years of drawing, building, and revisiting — carefully, from a small house in Sonadanga.",
    cta: "Find out more about the studio",
    ctaHref: "/about",
  },
];

export const HERO_SLIDES: HeroSlide[] = HERO_SEEDS.map((s, i) => ({
  ...s,
  img: mk(i, s.title, s.label + " · " + s.loc),
}));

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
