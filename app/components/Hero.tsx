"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO_IMAGES } from "@/lib/data";

const SLIDE_MS = 5500;

// Single sequential animation: one full-bleed image at a time, each zooming
// (Ken Burns push-in) for the duration of its slide, crossfading to the next.
// Static studio statement overlaid; thin progress bar marks the sequence.
export function Hero() {
  const slides = HERO_IMAGES;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % slides.length),
      SLIDE_MS,
    );
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-stage">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`hero-panel${i === idx ? " active" : ""}`}
            aria-hidden={i !== idx}
          >
            <Image
              src={s.img}
              alt=""
              fill
              sizes="100vw"
              priority={i === 0}
              className="hero-img"
            />
          </div>
        ))}
        <div className="hero-vignette" aria-hidden />
      </div>

      <div className="hero-overlay">
        <span className="hero-eyebrow">
          § Kazi Zahin Architects — Est. 2008, Khulna
        </span>
        <h1 className="hero-headline">
          A studio of architects in Khulna — making places that <em>belong.</em>
        </h1>
        <p className="hero-sub">To their weather, and to their people.</p>
        <a className="hero-cta" href="/about">
          Find out more about the studio →
        </a>
      </div>

      <div className="hero-progress" aria-hidden>
        <span className="hero-progress-fill" key={idx} />
      </div>
    </section>
  );
}
