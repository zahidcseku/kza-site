import Image from "next/image";
import { HERO_IMAGES } from "@/lib/data";
import logoImg from "@/app/assets/logo.png";

type Dialog = { headline: React.ReactNode; sub: string };

// Three studio-voice statements that crossfade in sequence over the hero,
// each held for ~1/3 of the 33s image cycle (≈11s).
const DIALOGS: Dialog[] = [
  {
    headline: (
      <>
        A studio of architects in Khulna — making places that <em>belong.</em>
      </>
    ),
    sub: "To their weather, and to their people.",
  },
  {
    headline: (
      <>
        We design for the climate first. <em>Everything else</em> is a consequence.
      </>
    ),
    sub: "Drawn nine times before we pour.",
  },
  {
    headline: (
      <>
        Eighteen years of drawing, building, <em>and revisiting.</em>
      </>
    ),
    sub: "Quietly, from a small house in Sonadanga.",
  },
];

// Pure-CSS sequential zoom hero. A single keyframe animation (heroSeq) runs
// on every panel; each panel is offset in time via :nth-child animation-delay
// so the six images crossfade into one another in order, each zooming (Ken
// Burns push-in) for the duration of its slot. The three dialogs rotate on
// their own 33s cycle. No JavaScript required.
export function Hero() {
  return (
    <div className="hero-wrap">
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
          <div className="hero-dialogs">
            {DIALOGS.map((d, i) => (
              <div
                key={i}
                className="hero-dialog"
                style={{ "--i": i } as React.CSSProperties}
              >
                <h1 className="hero-headline">{d.headline}</h1>
                <p className="hero-sub">{d.sub}</p>
              </div>
            ))}

            {/* Finale: large brand mark, revealed once the dialogs have played. */}
            <Image
              src={logoImg}
              alt="KZA — Kazi Zahin Architects"
              width={logoImg.width}
              height={logoImg.height}
              priority
              className="hero-finale-logo"
            />
          </div>
        </div>

        <div className="hero-progress" aria-hidden>
          <span className="hero-progress-fill" />
        </div>

        {/* Down-arrow scroll cue at the foot of the hero. */}
        <div className="hero-scroll-cue" aria-hidden>
          <span className="hero-scroll-cue-arrow">
            <svg
              width="16"
              height="22"
              viewBox="0 0 16 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 0 V20 M2 14 L8 20 L14 14" />
            </svg>
          </span>
        </div>
      </section>
    </div>
  );
}
