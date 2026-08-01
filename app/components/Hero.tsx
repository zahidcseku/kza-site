"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO_SLIDES } from "@/lib/data";

const SLIDE_MS = 6500;

// Heatherwick-style premium hero: full-bleed rotating photography with slow
// Ken Burns zoom, a centered cross-fading poetic statement that staggers in,
// and a thin progress bar at the foot of the screen.
export function Hero() {
  const slides = HERO_SLIDES;
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
      {/* Background: cross-fading full-bleed images with slow zoom */}
      <div className="hero-stage">
        {slides.map((s, i) => (
          <div
            key={s.label}
            className={`hero-panel${i === idx ? " active" : ""}`}
            aria-hidden={i !== idx}
          >
            <Image
              src={s.img}
              alt={s.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              className="hero-img"
            />
          </div>
        ))}
        <div className="hero-vignette" aria-hidden />
      </div>

      {/* Centered, cross-fading statement + CTA (staggered fade-up) */}
      <div className="hero-center">
        {slides.map((s, i) => (
          <div
            key={s.label}
            className={`hero-statement${i === idx ? " active" : ""}`}
            aria-hidden={i !== idx}
          >
            <span className="hero-eyebrow">
              {s.label} — {s.title}, {s.loc}
            </span>
            <h1 className="hero-headline">{s.blurb}</h1>
            <a className="hero-cta" href={s.ctaHref}>
              {s.cta} →
            </a>
          </div>
        ))}
      </div>

      {/* Thin progress bar — remounts per slide so the animation restarts */}
      <div className="hero-progress" aria-hidden>
        <span className="hero-progress-fill" key={idx} />
      </div>
    </section>
  );
}
