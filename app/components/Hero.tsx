"use client";

import { useEffect, useState } from "react";
import { HERO_SLIDES } from "@/lib/data";

// Heatherwick-style: full-bleed rotating imagery + a centered, rotating
// poetic statement with a "find out more" link. No busy slide chrome.
export function Hero() {
  const slides = HERO_SLIDES;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % slides.length),
      6500,
    );
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section id="home" className="hero">
      {/* Background: cross-fading + slow zoom panels */}
      <div className="hero-stage">
        {slides.map((s, i) => (
          <div
            key={s.label}
            className={`hero-panel${i === idx ? " active" : ""}`}
            style={{ backgroundImage: `url(${s.img})` }}
            aria-hidden={i !== idx}
          />
        ))}
        <div className="hero-vignette" aria-hidden />
      </div>

      {/* Centered, cross-fading statement + CTA */}
      <div className="hero-center">
        {slides.map((s, i) => (
          <div
            key={s.label}
            className={`hero-statement${i === idx ? " active" : ""}`}
            aria-hidden={i !== idx}
          >
            <h1 className="hero-headline">{s.blurb}</h1>
            <a className="hero-cta" href={s.ctaHref}>
              {s.cta} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
