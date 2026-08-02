// Centralized Sanity connection values. Read from Next.js env — the
// NEXT_PUBLIC_ prefix exposes them to the browser (the embedded Studio
// runs client-side). The optional read token is only needed if the
// dataset is made private; leave blank for a public dataset.
export const apiVersion = "2025-08-01";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export const token = process.env.SANITY_API_READ_TOKEN;
