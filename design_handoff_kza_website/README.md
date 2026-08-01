# Handoff: KZ Architects (KZA) Marketing Website

## Overview
An 8-page marketing website for Kazi Zahin Architects (KZA), an architectural firm based in Sonadanga, Khulna, Bangladesh. Editorial, image-led design in the spirit of heatherwick.com (full-bleed hero video/imagery, quiet top-of-page typography, poetic copy) and volumezeroltd.com (uniform project grid) and dcon.com.bd/projects (services page pattern).

## About the Design Files
The files in `source/` are **design references built as static HTML + React-via-Babel prototypes** — they demonstrate intended layout, typography, color, motion and interaction, but are NOT production code to ship as-is (React/Babel are loaded from CDN with no build step, and images are inline SVG placeholders). The task is to **recreate these designs in the target codebase's real environment** (whatever framework/CMS the team uses — Next.js, Astro, Webflow, etc.) using that environment's own component and asset patterns. If no environment exists yet, choose the framework best suited to a marketing site with a headless CMS (e.g. Next.js + Sanity/Contentful) and implement there.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy and motion are final-intent. Recreate pixel-close using the target codebase's styling system (Tailwind, CSS modules, styled-components, etc.) — exact hex values and type scale are listed below.

## Site Map (8 pages)
1. `index.html` — Home
2. `about.html` — About / Studio note
3. `services.html` — Services (dcon.com.bd-style category selector)
4. `projects.html` — Projects archive (filterable grid)
5. `awards.html` — Awards & Press
6. `clients.html` — Clients
7. `gallery.html` — Gallery (process/detail shots)
8. `find-us.html` — Contact / Find Us

Shared chrome (`src/nav.jsx`, `src/footer.jsx`) is loaded on every page except `services.html`, which is a fully custom full-viewport layout (see below).

---

## Design Tokens

### Colors — 4 switchable palettes (CSS custom properties, set via `[data-palette]` on `<html>`)
Default/current: **terra** (set via the in-page Tweaks panel).

| Token | sand (default in code) | bone | ink (dark) | terra (currently active) |
|---|---|---|---|---|
| `--bg` | #F2EEE7 | #FFFFFF | #0E0D0B | #EDE6D9 |
| `--bg-2` | #E8E2D5 | #F4F4F2 | #1A1814 | #DCD1BB |
| `--ink` (text) | #141311 | #0A0A0A | #F2EEE7 | #2B241A |
| `--ink-2` (secondary text) | #3A352D | (inherits) | #D4CEBE | (inherits) |
| `--rule` (borders) | #D8D0BF | #E2E2DF | #2A2722 | #CDBFA3 |
| `--accent` | #8A6B47 | #1F1F1F | #C9A961 | #C44828 |
| `--accent-deep` | #5C4628 (shared across palettes) |
| `--paper` (card bg) | #FBF8F1 | #FAFAF7 | #15130F | #F5EFE3 |
| `--muted` | #7A7468 | #6A6A64 | #A29B8B | #766952 |
| `--black` (footer bg, fixed) | #0E0D0B (all palettes) |

Services page (`services.html`) uses its own fixed light-grey/blue scheme independent of the palette system — see "Services Page" section below.

### Typography
- **Display / serif**: `Instrument Serif` (Google Fonts), italic used for emphasis words within headlines — weight 400 only.
- **Body / sans**: `Archivo` (Google Fonts), weights 300–700.
- **Mono / labels**: `JetBrains Mono` (Google Fonts), weights 400–500 — used for eyebrows, captions, nav labels, buttons; always uppercase with `letter-spacing: 0.12–0.18em`.
- Type scale is fluid via `clamp()`, e.g. hero kicker `clamp(20px,2vw,30px)`, page-header H1 `clamp(56px,9vw,148px)`, section H2 `clamp(32px,4vw,56px)`.

### Layout
- Max content width: `1440px` (`--container`)
- Page gutter: `clamp(20px, 3vw, 44px)` (`--gutter`)
- Grids use CSS Grid with `gap`, not margins, throughout.

### Motion
- Hero: cross-fading full-bleed panels (6.5s interval), each panel slow-zooms via `@keyframes heroZoom` (scale 1.0→1.10 over 9s).
- Card hover: image scale(1.04) + saturate filter, 1.2s cubic-bezier.
- Nav: background/blur fades in on scroll past 80px.
- Services page: background thumbnail grid cross-fades one random cell every ~1.4s.

---

## Screens / Views

### 1. Home (`index.html`)
- **Nav** (fixed, transparent → blurred-translucent on scroll): logo mark + wordmark left, 8-item link list center, "Accepting 2026 commissions" status pill right.
- **Hero** (100vh): full-bleed cross-fading project photography (5 slides), vignette gradient overlay top+bottom. TOP: single serif kicker sentence (quiet, ~30px, NOT a giant headline — this is the key heatherwick.com trait). BOTTOM: small mono caption ("Now showing · 01/05 — Project, Location, Year"), minimal tick-mark slide indicators (click to jump), "Scroll" cue with arrow, all in a 3-col grid (`1fr auto 1fr`).
- **Stats ribbon**: 5-column strip (`1.2fr repeat(4,1fr)`), first cell is an intro blurb, other 4 are big serif numerals (18 / 124+ / 09 / 38) each with mono label + one-line description, vertical dividers.
- **Philosophy block**: 2-col grid (`1fr 2fr`), left = small mono eyebrow, right = large serif manifesto paragraph with italicized emphasis words, a lede paragraph below, and a signoff (name + role) with a "Read the full note" link, divided by a top border.
- **Projects grid**: header row (`1fr 1fr`) with big serif title + pill-button category filter; grid below is either `grid-uniform` (equal 3-col tiles) or `grid-editorial` (12-col asymmetric spans) — toggle via Tweaks. Cards: 4:5 image, index code + category tag chips overlaid top corners, hover zoom, title+location+year below. Three "slogan tiles" are spliced into the grid at fixed positions (replacing what would be a project image) — full-bleed color cards (black / paper / terra-red) with an eyebrow, large italic serif quote, and mono attribution footer. "View full archive" pill CTA at the end.
- **Footer**: black background, giant serif CTA line ("Tell us about a site, a season, a brief"), 4-col link/contact grid, base bar with copyright + typeface credit.

### 2. About (`about.html`)
Uses `PageHeader` (compact hero band, NOT full-bleed) + `Ribbon` (reused) + custom sections: philosophy 2-col text, 8-person team grid (procedurally generated abstract SVG portraits — replace with real photography), 8-row timeline (year / event / note columns).

### 3. Services (`services.html`) — CUSTOM, does not use shared nav/footer
Recreates the dcon.com.bd/projects interaction pattern:
- Full-viewport page, background = 8×5 grid of desaturated architectural thumbnail placeholders that continuously cross-fade individual cells (decorative, non-interactive).
- Center-screen: 4 vertical panels side by side, each showing a category name rotated -90° (Architecture / Interior / Construction / Life Style), with a colored accent bar underneath (orange / white / grey / green respectively).
- Hovering a panel sets it "active" (blue background #1B7FD6, wider letter-spacing); the caption box bottom-right updates with that category's number, name and description.
- Clicking a panel navigates to `projects.html?cat=<id>` (id ∈ arch/int/con/life) — **the target codebase must implement this category filter on the projects page** (current `projects.html` prototype does not yet read the query param).
- Top-left: brand mark; top-right: meta text + "← Home" link; bottom: 20-cell decorative thumbnail strip; center-bottom: "Hover → preview · Click → open category" hint.
- Colors here are fixed (not palette-driven): bg #E8E5DD, inactive panel #BFBCB3, active panel #1B7FD6, panel gap borders rgba(255,255,255,0.18).

### 4. Projects (`projects.html`)
`PageHeader` + full `Projects` component (same grid/filter/slogan-tile system as home) at `gridStyle="uniform"`.

### 5. Awards (`awards.html`)
`PageHeader` + two `.awards-table` sections (Awards & Honours; Selected Press) — each a list of `.awards-row` (year / award-name / project / organization, 4-col grid with bottom border rules).

### 6. Clients (`clients.html`)
`PageHeader` + `.clients-grid` (4-col grid of wordmark "logo" cells with hover-invert), + a 3-card "business card" mockup grid (name/role/contact, dashed corner mark, index counter).

### 7. Gallery (`gallery.html`)
`PageHeader` + category filter pills + CSS-columns masonry of procedurally-drawn SVG "process" tiles (sketch/model/site/texture/brick/plan/roof/section/etc. — 12 kind variants) — **replace all with real photography of models, sketches, site visits, material textures.**

### 8. Find Us (`find-us.html`)
`PageHeader` + two-panel `.findus` sections: (1) address/phone/email/coordinates + a hand-drawn SVG stylised map of Khulna with a pulsing pin at the real coordinates (22.8203°N, 89.5495°E) — **replace with a real embedded map (Google Maps/Mapbox)**; (2) enquiry form (first/last name, email, phone, enquiry type select, site town, brief textarea) with client-side-only submit state (no real backend — needs wiring to an email/CRM endpoint).

---

## Interactions & Behavior
- **Tweaks panel** (`src/tweaks.jsx`, home page only): floating panel toggled by a host `postMessage` protocol (`__activate_edit_mode` / `__deactivate_edit_mode`) — this is an artifact of the prototyping tool and should NOT be carried into production. It currently controls: palette (sand/bone/ink/terra), hero mode (panels/kinetic — kinetic mode CSS exists but is unused by current Hero component), projects grid style (uniform/editorial), philosophy block visibility. **Decide with stakeholders which of these should become permanent design decisions vs. remain a CMS-editable toggle vs. be removed.**
- **Nav active state**: each page passes `currentPage` prop to `<Nav>` to underline/bold the current link.
- **Projects filter**: client-side tag filtering (no URL state) — recommend adding query-param-driven filtering so the Services page can deep-link into a pre-filtered category (see Services section above).
- **Contact form**: `find-us.html` only fakes success state client-side; needs real form handling (e.g. serverless function, Formspree, or CRM webhook) posting to `kzarchi@gmail.com`.

## State Management
Each page is a self-contained React root (no router, no shared app state across pages — navigation is plain `<a href>` between static HTML files). In the target framework, recommend:
- A shared layout/header/footer component.
- Global design tokens (palette) as CSS variables or a theme file — decide if multi-palette switching is a real product requirement or just a design-review artifact (currently defaults to `sand` in code but was manually set to `terra` on the live index.html).
- Project data (currently hardcoded in `src/data.jsx`) should move to a CMS or database — see Assets note below.

## Assets
- **Logo**: `src/logo.jsx` contains a hand-drawn placeholder SVG monogram (interpretation of "Logo KZA.pdf", which could not be parsed/rendered during design) — the real logo file is at `uploads/Logo KZA.pdf` in the project; obtain a proper SVG/PNG export from the client and swap in.
- **Project photography**: ALL project images site-wide (`src/data.jsx`'s `placeholder()` function, gallery tiles, services-page background grid) are procedurally generated SVG placeholders (striped backgrounds + building silhouettes + title text), not real photos. These must be replaced with actual project photography before launch.
- **Team portraits** (about.html): abstract generated SVG placeholders — need real headshots.
- **Map** (find-us.html): hand-drawn SVG placeholder of Khulna geography — needs a real map embed.
- Fonts are loaded from Google Fonts CDN (Instrument Serif, Archivo, JetBrains Mono) — fine to keep, or self-host for performance/reliability.

## Files
```
source/
  index.html          — Home
  about.html          — About
  services.html       — Services (custom, standalone layout)
  projects.html       — Projects archive
  awards.html         — Awards & Press
  clients.html        — Clients
  gallery.html         — Gallery
  find-us.html        — Contact
  styles.css          — All shared design tokens + component CSS
  src/
    data.jsx          — Project data + SVG placeholder generator
    logo.jsx          — Logo mark component (placeholder)
    nav.jsx           — Shared nav (all pages except services.html)
    footer.jsx        — Shared footer (all pages except services.html)
    hero.jsx          — Home hero
    ribbon.jsx        — Stats ribbon (home + about)
    philosophy.jsx     — Home philosophy block
    projects.jsx       — Reusable projects grid + filter (home + projects.html)
    page-header.jsx     — Compact header band (inner pages)
    tweaks.jsx          — Design-review tweaks panel (dev artifact — likely remove)
    app.jsx             — Home page root composition
```
