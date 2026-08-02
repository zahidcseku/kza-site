import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { projectId, dataset } from "@/sanity/env";

// Build an optimized image URL from a Sanity image reference. Use with
// next/image: <Image src={urlFor(img).url()} ... />. Only needs the
// project config — images are served from Sanity's CDN.
const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
