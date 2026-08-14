"use client";

import { useState } from "react";
import { PROJECTS, TAGS } from "@/lib/data";
import { ExpandableGallery } from "@/components/ui/gallery-animation";

export function Projects() {
  const [tag, setTag] = useState("All");
  const filtered = tag === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === tag);

  // The gallery shows images, and the seed data cycles 6 photos across the
  // projects — dedupe so no panel repeats. Each photo carries its first
  // project's name for the hover caption; the full set fills the first row,
  // and the second row repeats it until more photos arrive.
  const titleForImage = new Map(PROJECTS.map((p) => [p.img.src, p.title]));
  const images = [...new Set(filtered.map((p) => p.img.src))];
  const titles = images.map((src) => titleForImage.get(src) ?? "");
  const rows = [images, [...images]].filter((row) => row.length > 0);

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
          <ExpandableGallery images={row} titles={titles} />
        </div>
      ))}

      <div className="projects-all">
        <a href="/projects">View full archive — 124 projects →</a>
      </div>
    </section>
  );
}
