"use client";

import { useState } from "react";
import { PROJECTS, TAGS } from "@/lib/data";

type SloganTone = "ink" | "sand" | "terra";

type Slogan = {
  i: number;
  eyebrow: string;
  title: React.ReactNode;
  foot: string;
  tone: SloganTone;
};

const SLOGANS: Slogan[] = [
  {
    i: 2,
    eyebrow: "§ Manifesto — 01",
    title: (
      <>
        Build <em>quietly.</em>
        <br />
        Build to <em>last.</em>
      </>
    ),
    foot: "Seventeen years · one studio",
    tone: "ink",
  },
  {
    i: 5,
    eyebrow: "§ On Material",
    title: (
      <>
        Brick learns the <em>weather</em> — concrete only ever <em>argues</em>{" "}
        with it.
      </>
    ),
    foot: "From a studio note, 2019",
    tone: "sand",
  },
  {
    i: 8,
    eyebrow: "§ On Process",
    title: (
      <>
        We will draw your house <em>nine times</em> before we pour.
      </>
    ),
    foot: "Standing offer to clients",
    tone: "terra",
  },
];

export function Projects() {
  const all = PROJECTS;
  const [tag, setTag] = useState("All");
  const filtered = tag === "All" ? all : all.filter((p) => p.tag === tag);

  const sloganAt = Object.fromEntries(SLOGANS.map((s) => [s.i, s]));

  const items: React.ReactNode[] = [];
  filtered.forEach((p, i) => {
    if (sloganAt[i]) {
      const s = sloganAt[i];
      items.push(
        <div
          key={`slogan-${i}`}
          className={`card slogan-card slogan-${s.tone}`}
        >
          <div className="slogan-inner">
            <div className="slogan-eyebrow">{s.eyebrow}</div>
            <div className="slogan-title">{s.title}</div>
            <div className="slogan-foot">{s.foot}</div>
          </div>
        </div>,
      );
    }
    items.push(
      <a key={p.id} className="card" href={`#project-${p.id}`}>
        <div className="card-media">
          <span className="card-index">{p.id}</span>
          <span className="card-tag">{p.tag}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.img} alt={p.title} loading="lazy" />
        </div>
        <div className="card-meta">
          <div>
            <div className="card-title">{p.title}</div>
            <div className="card-sub">{p.loc}</div>
          </div>
          <div className="card-year">{p.year}</div>
        </div>
      </a>,
    );
  });

  // Splice an editorial quote row after index 5 (between projects).
  const quote = (
    <div className="feature-row" key="q">
      <div className="q">
        “Our best projects feel as if they were always there — as if the site
        had quietly asked for them.”
        <small>— Shahnaz Karim, Design Partner · Monocle Weekly, 2024</small>
      </div>
      <div className="cta">
        <a href="/journal">Read the studio journal →</a>
      </div>
    </div>
  );

  const withQuote = [...items.slice(0, 6), quote, ...items.slice(6)];

  return (
    <section id="projects" className="projects">
      <div className="projects-head">
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            § 03 — Selected Works{" "}
            <span className="projects-count">
              {String(filtered.length).padStart(3, "0")} shown
            </span>
          </div>
          <h2>
            Built, drawn
            <br />
            and <em>quietly tended to.</em>
          </h2>
        </div>
        <div className="projects-filter">
          {TAGS.map((t) => (
            <button
              key={t}
              className={tag === t ? "active" : ""}
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-uniform">{withQuote}</div>

      <div className="projects-all">
        <a href="/projects">View full archive — 124 projects →</a>
      </div>
    </section>
  );
}
