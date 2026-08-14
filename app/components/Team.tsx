import Image from "next/image";
import { fetchTeamMembers } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";

// Headshot grid after the projects section (after larsonshores.com's team
// block, in this site's design language). Members come from Sanity — only
// those with "Show on homepage" enabled. Renders nothing until at least
// one member exists, mirroring the YouTube section.
export async function Team() {
  const members = await fetchTeamMembers();
  if (members.length === 0) return null;

  return (
    <section id="team" className="team">
      <div className="team-head">
        <span className="eyebrow">§ 04 — The Studio</span>
        <h2>
          Crafting beautiful spaces for a <em>sustainable world.</em>
        </h2>
      </div>
      <div className="team-grid">
        {members.map((m) => {
          const hotspot = m.photo?.hotspot;
          const src = m.photo
            ? urlFor(m.photo)
                .width(900)
                .height(675)
                .fit("crop")
                .crop(hotspot ? "focalpoint" : "center")
                .focalPoint(hotspot?.x ?? 0.5, hotspot?.y ?? 0.5)
                .url()
            : null;
          const initials = m.name
            .split(/\s+/)
            .map((w) => w[0])
            .slice(0, 2)
            .join("");

          return (
            <div key={m.name} className="team-card">
              <div className="team-card-photo">
                {src ? (
                  <Image
                    src={src}
                    alt={m.photo?.alt || m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="team-img"
                  />
                ) : (
                  <span className="team-initials" aria-hidden>
                    {initials}
                  </span>
                )}
              </div>
              <div className="team-card-name">{m.name}</div>
              {m.designation && (
                <div className="team-card-role">{m.designation}</div>
              )}
              {m.shortDesc && <p className="team-card-desc">{m.shortDesc}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
