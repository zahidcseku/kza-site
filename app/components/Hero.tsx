"use client";

import { useEffect, useState } from "react";
import { HERO_SLIDES } from "@/lib/data";

// Heatherwick-style: full-bleed background imagery, quiet text at the TOP.
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

  const current = slides[idx];
  const progress = String(idx + 1).padStart(2, "0");
  const total = String(slides.length).padStart(2, "0");

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

      {/* TOP — short title in the Heatherwick mould */}
      <div className="hero-top">
        <p className="hero-kicker">
          A studio of architects in Khulna, Bangladesh — making places that{" "}
          <em>belong</em> to their weather and their people.
        </p>
      </div>

      {/* BOTTOM — caption + slide controls (smaller, in monospace) */}
      <div className="hero-bot">
        <div className="hero-caption">
          <span className="lbl">
            Now showing · {progress} / {total}
          </span>
          <span className="ttl">
            {current.title}{" "}
            <span className="dim">
              — {current.loc}, {current.year}
            </span>
          </span>
        </div>
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === idx ? " active" : ""}`}
              onClick={() => setIdx(i)}
              aria-label={`Show slide ${i + 1}`}
            >
              <span />
            </button>
          ))}
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <span className="arrow" />
        </div>
      </div>
    </section>
  );
}
