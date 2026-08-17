import Image from "next/image";
import { HERO_IMAGES } from "@/lib/data";
import { fetchHero } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
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

// Each slide occupies a 5.5s slot of the heroSeq keyframe cycle, so the
// total cycle scales with the number of images the editor publishes.
const SLIDE_SLOT = 5.5;

// Pure-CSS sequential zoom hero. A single keyframe animation (heroSeq) runs
// on every panel; each panel is offset in time via an inline animation-delay
// so the images crossfade into one another in order, each zooming (Ken
// Burns push-in) for the duration of its slot. The three dialogs rotate on
// their own 33s cycle. No JavaScript required. Slides come from the Sanity
// hero singleton; the bundled photo set is the fallback before content
// exists so the stage never renders empty.
export async function Hero() {
  const data = await fetchHero();

  const slides = data?.slides?.length
    ? data.slides.map((s) => {
        const hotspot = s.hotspot;
        return {
          src: urlFor(s)
            .width(2400)
            .height(1350)
            .fit("crop")
            .crop(hotspot ? "focalpoint" : "center")
            .focalPoint(hotspot?.x ?? 0.5, hotspot?.y ?? 0.5)
            .url(),
          alt: s.alt ?? "",
        };
      })
    : HERO_IMAGES.map((t) => ({ src: t.img, alt: t.alt }));

  const cycle = slides.length * SLIDE_SLOT;

  return (
    <div className="hero-wrap">
      <section id="home" className="hero">
        <div className="hero-stage">
          {slides.map((t, i) => (
            <div
              key={i}
              className="hero-panel"
              style={{
                animationDuration: `${cycle}s`,
                animationDelay: `${-1.5 + i * SLIDE_SLOT}s`,
              }}
            >
              <Image
                src={t.src}
                alt={t.alt}
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
              alt="KZA — Khan Zahid Architects"
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
              width="24"
              height="15"
              viewBox="0 0 24 15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 2 L12 12 L22 2" />
            </svg>
          </span>
        </div>
      </section>
    </div>
  );
}
