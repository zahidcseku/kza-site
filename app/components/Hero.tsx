import Image from "next/image";
import { HERO_IMAGES } from "@/lib/data";

// Pure-CSS sequential zoom hero. A single keyframe animation (heroSeq) runs
// on every panel; each panel is offset in time via :nth-child animation-delay
// so the six images crossfade into one another in order, each zooming (Ken
// Burns push-in) for the duration of its slot. No JavaScript required — the
// sequence plays from CSS alone, so it works even if JS fails to hydrate.
export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-stage">
        {HERO_IMAGES.map((t, i) => (
          <div key={i} className="hero-panel">
            <Image
              src={t.img}
              alt=""
              fill
              sizes="100vw"
              priority={i === 0}
              className="hero-img"
            />
          </div>
        ))}
      </div>

      <div className="hero-vignette" aria-hidden />

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
        <span className="hero-progress-fill" />
      </div>
    </section>
  );
}
