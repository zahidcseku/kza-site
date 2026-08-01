"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HERO_IMAGES } from "@/lib/data";

// Parallax depth per tile (px). Tiles nearer the viewer drift more.
const DEPTHS = [6, 12, 8, 10, 5, 14];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Trigger the staggered reveal on the next frame.
    const r = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(r);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width) * 2 - 1; // -1..1
    const my = ((e.clientY - r.top) / r.height) * 2 - 1;
    el.style.setProperty("--mx", mx.toFixed(3));
    el.style.setProperty("--my", my.toFixed(3));
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
  };

  return (
    <section
      ref={ref}
      id="home"
      className={`hero${revealed ? " revealed" : ""}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="hero-grid">
        {HERO_IMAGES.map((t, i) => (
          <div
            key={i}
            className="hero-cell"
            style={{ "--i": i, "--depth": DEPTHS[i] } as React.CSSProperties}
          >
            <div className="hero-cell-parallax">
              <Image
                src={t.img}
                alt=""
                fill
                sizes="(max-width: 900px) 50vw, 34vw"
                priority={i < 3}
                className="hero-cell-img"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="hero-veil" aria-hidden />

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
    </section>
  );
}
