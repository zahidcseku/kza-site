"use client";

import { useState } from "react";
import { PROJECTS, TAGS } from "@/lib/data";
import { ExpandableGallery } from "@/components/ui/gallery-animation";

export function Projects() {
  const [tag, setTag] = useState("All");
  const filtered = tag === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === tag);

  // The gallery shows images, and the seed data cycles 6 photos across the
  // projects — dedupe so no panel repeats, then chunk into rows of 4.
  const images = [...new Set(filtered.map((p) => p.img.src))];
  const rows: string[][] = [];
  for (let i = 0; i < images.length; i += 4) {
    rows.push(images.slice(i, i + 4));
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-head">
        <div>
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

      {rows.map((row, i) => (
        <div className="projects-gallery" key={i}>
          <ExpandableGallery images={row} />
        </div>
      ))}

      <div className="projects-all">
        <a href="/projects">View full archive — 124 projects →</a>
      </div>
    </section>
  );
}
