import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, projectId, token } from "@/sanity/env";

if (!projectId) {
  console.warn(
    `Sanity project ID is missing. Set NEXT_PUBLIC_SANITY_PROJECT_ID in your environment.`
  );
}

// Read client — public dataset, published perspective, CDN-cached.
// Stega (source maps) stays off for the public site; the Studio doesn't
// need it for non-technical editors.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
  token,
});

// Cached fetch wrapper for server components. Pass tags so a Sanity
// publish webhook can call revalidateTag() for near-instant updates.
// Falls back to time-based revalidation (default 60s) if no webhook.
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    next: { revalidate, tags },
  });
}
