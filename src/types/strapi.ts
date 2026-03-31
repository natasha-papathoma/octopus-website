// Strapi response wrapper
export interface StrapiResponse<T> {
  data: StrapiEntry<T>[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}

export interface StrapiSingleResponse<T> {
  data: StrapiEntry<T>;
}

export interface StrapiEntry<T> {
  id: number;
  attributes: T & { createdAt: string; updatedAt: string; publishedAt: string };
}

export interface StrapiMedia {
  data: {
    id: number;
    attributes: {
      url: string;
      name: string;
      alternativeText: string | null;
      width?: number;
      height?: number;
      mime: string;
      size: number;
      formats?: {
        thumbnail?: StrapiImageFormat;
        small?: StrapiImageFormat;
        medium?: StrapiImageFormat;
        large?: StrapiImageFormat;
      };
    };
  } | null;
}

export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
}

// ── Content Types ──

export interface NewsPost {
  title: string;
  slug: string;
  body: string;
  date: string;
  thumbnail: StrapiMedia;
}

export interface GalleryImage {
  caption: string;
  image: StrapiMedia;
  order: number;
  featured: boolean;
}

export interface Partner {
  name: string;
  country: string;
  role: string;
  bio: string;
  logo: StrapiMedia;
  website: string;
}

export type ResourceCategory =
  | "ebook"
  | "handbook"
  | "video_tutorial"
  | "good_practice"
  | "pilot_report"
  | "presentation"
  | "spreadsheet"
  | "infographic"
  | "other";

export type ResourceFileType =
  | "document"
  | "image"
  | "video"
  | "presentation"
  | "spreadsheet"
  | "other";

export interface ResourceDownload {
  title: string;
  category: ResourceCategory;
  file_type: ResourceFileType;
  description: string;
  file: StrapiMedia;
  language: string;
  published: boolean;
}

export type EventType = "tpm" | "tot" | "pilot" | "conference" | "workshop" | "webinar";

export interface Event {
  title: string;
  type: EventType;
  location: string;
  date: string;
  description: string;
}

export interface NewsletterSubscriber {
  email: string;
  subscribed_at: string;
}

export type ContactSubject =
  | "partnership"
  | "teacher_training"
  | "platform"
  | "media"
  | "other";

export interface ContactSubmission {
  name: string;
  email: string;
  organisation: string;
  subject: ContactSubject;
  message: string;
}

export type FeedbackRole = "teacher" | "student" | "trainer" | "parent" | "other";

export interface FeedbackSubmission {
  name: string;
  role: FeedbackRole;
  email: string;
  feedback: string;
}

export interface SiteSettings {
  ga_measurement_id: string;
  site_title: string;
  meta_description: string;
  social_facebook: string;
  social_instagram: string;
  social_linkedin: string;
  social_youtube: string;
}
