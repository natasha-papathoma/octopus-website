import type {
  StrapiResponse,
  StrapiSingleResponse,
  NewsPost,
  GalleryImage,
  Partner,
  ResourceDownload,
  Event,
  SiteSettings,
} from "@/types/strapi";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

async function fetchAPI<T>(
  path: string,
  options: { revalidate?: number; tags?: string[] } = {}
): Promise<T> {
  const headers: HeadersInit = { "Content-Type": "application/json" };
  if (STRAPI_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
  }

  const res = await fetch(`${STRAPI_URL}/api${path}`, {
    headers,
    next: {
      revalidate: options.revalidate ?? 60,
      tags: options.tags,
    },
  });

  if (!res.ok) {
    console.error(`Strapi fetch error: ${res.status} ${res.statusText} for ${path}`);
    throw new Error(`Failed to fetch ${path}`);
  }

  return res.json();
}

// ── POST helper for form submissions ──

// async function postAPI<T>(path: string, data: Record<string, unknown>): Promise<T> {
//   const headers: HeadersInit = { "Content-Type": "application/json" };
//   if (STRAPI_TOKEN) {
//     headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
//   }

//   const res = await fetch(`${STRAPI_URL}/api${path}`, {
//     method: "POST",
//     headers,
//     body: JSON.stringify({ data }),
//   });

//   if (!res.ok) {
//     throw new Error(`Failed to post to ${path}`);
//   }

//   return res.json();
// }
async function postAPI<T>(path: string, data: Record<string, unknown>): Promise<T> {
  const token = STRAPI_TOKEN || process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";
  const headers: HeadersInit = { "Content-Type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${STRAPI_URL}/api${path}`, {
    method: "POST",
    headers,
    body: JSON.stringify({ data }),
  });

  if (!res.ok) {
    throw new Error(`Failed to post to ${path}`);
  }

  return res.json();
}

// ── Fetchers ──

export async function getNewsPosts(): Promise<StrapiResponse<NewsPost>> {
  return fetchAPI<StrapiResponse<NewsPost>>(
    "/news-posts?populate=*&sort=date:desc",
    { tags: ["news"] }
  );
}

export async function getNewsPost(slug: string): Promise<StrapiResponse<NewsPost>> {
  return fetchAPI<StrapiResponse<NewsPost>>(
    `/news-posts?filters[slug][$eq]=${slug}&populate=*`,
    { tags: ["news"] }
  );
}

export async function getGalleryImages(): Promise<StrapiResponse<GalleryImage>> {
  return fetchAPI<StrapiResponse<GalleryImage>>(
    "/gallery-images?populate=*&sort=order:asc",
    { tags: ["gallery"] }
  );
}

export async function getPartners(): Promise<StrapiResponse<Partner>> {
  return fetchAPI<StrapiResponse<Partner>>(
    "/partners?populate=logo",
    { tags: ["partners"] }
  );
}

export async function getResources(
  category?: string
): Promise<StrapiResponse<ResourceDownload>> {
  const filter = category ? `&filters[category][$eq]=${category}` : "";
  return fetchAPI<StrapiResponse<ResourceDownload>>(
    `/resource-downloads?populate=file&sort=createdAt:desc${filter}`,
    { tags: ["resources"] }
  );
}

export async function getEvents(): Promise<StrapiResponse<Event>> {
  return fetchAPI<StrapiResponse<Event>>(
    "/events?sort=date:asc",
    { tags: ["events"] }
  );
}

export async function getSiteSettings(): Promise<StrapiSingleResponse<SiteSettings>> {
  return fetchAPI<StrapiSingleResponse<SiteSettings>>(
    "/site-setting",
    { tags: ["settings"], revalidate: 300 }
  );
}

// ── Form Submissions ──

export async function submitNewsletter(email: string) {
  return postAPI("/newsletter-subscribers", {
    email,
    subscribed_at: new Date().toISOString(),
  });
}

export async function submitContact(data: {
  name: string;
  email: string;
  organisation: string;
  subject: string;
  message: string;
}) {
  return postAPI("/contact-submissions", data);
}

export async function submitFeedback(data: {
  name: string;
  role: string;
  email: string;
  feedback: string;
}) {
  return postAPI("/feedback-submissions", data);
}

// ── Helpers ──

export function getStrapiMediaUrl(url: string | undefined): string {
  if (!url) return "/images/placeholder.jpg";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}
