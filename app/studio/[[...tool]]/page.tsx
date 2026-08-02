import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

// Re-export the Studio's metadata + viewport so the page renders with
// the right title and avoids Next.js metadata warnings.
export { metadata, viewport } from "next-sanity/studio";

// The Studio is a static client shell — render once, hydrate, done.
export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
