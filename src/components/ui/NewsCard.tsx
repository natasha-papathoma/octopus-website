import Link from "next/link";
import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

interface NewsCardProps {
  title: string;
  slug: string;
  date: string;
  excerpt: any;
  thumbnail: any;
  emoji?: string;
}

function getImageUrl(thumbnail: any): string | null {
  if (!thumbnail) return null;
  const url = thumbnail.url || thumbnail.data?.attributes?.url;
  if (!url) return null;
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

export default function NewsCard({ title, slug, date, excerpt, thumbnail, emoji }: NewsCardProps) {
  const imageUrl = getImageUrl(thumbnail);

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  // Extract plain text from body (handles markdown and blocks format)
  let plainExcerpt = "";
  if (typeof excerpt === "string") {
    plainExcerpt = excerpt.replace(/#{1,6}\s/g, "").replace(/\n+/g, " ").slice(0, 200);
  } else if (Array.isArray(excerpt)) {
    plainExcerpt = excerpt.map((b: any) => b.children?.map((c: any) => c.text).join("")).join(" ").slice(0, 200);
  }

  return (
    <Link href={`/news/${slug}`} className="block group">
      <div className="bg-off-white rounded-3xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_48px_rgba(68,59,94,0.1)]">
        <div className="h-40 bg-gradient-to-br from-purple-pale to-blue/20 flex items-center justify-center text-4xl relative overflow-hidden">
          {imageUrl ? (
            <Image src={imageUrl} alt={title} fill className="object-cover" unoptimized />
          ) : (
            <span>{emoji || "📰"}</span>
          )}
        </div>
        <div className="p-6">
          <p className="text-[0.7rem] uppercase tracking-wider text-text-light font-semibold mb-2">
            {formattedDate}
          </p>
          <h3 className="text-base font-semibold mb-2">{title}</h3>
          <p className="text-sm text-text-mid leading-relaxed line-clamp-3">
            {plainExcerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}
