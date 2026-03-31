import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import LightboxGallery from "@/components/ui/Lightbox";
import { fallbackNews } from "@/lib/fallback-data";


const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

interface Props {
  params: Promise<{ slug: string }>;
}

function getImageUrl(img: any): string {
  const url = img?.url || img?.data?.attributes?.url || "";
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

function renderMarkdown(body: string) {
  return body.split("\n").filter(Boolean).map((line: string, i: number) => {
    if (line.startsWith("### ")) return <h3 key={i} className="text-lg font-bold mt-6 mb-2">{line.replace("### ", "")}</h3>;
    if (line.startsWith("## ")) return <h2 key={i} className="text-xl font-bold mt-8 mb-3">{line.replace("## ", "")}</h2>;
    if (line.startsWith("# ")) return <h1 key={i} className="text-2xl font-bold mt-8 mb-4">{line.replace("# ", "")}</h1>;
    return <p key={i}>{line}</p>;
  });
}

function renderBody(body: any) {
  if (typeof body === "string") return renderMarkdown(body);
  if (Array.isArray(body)) {
    return body.map((block: any, i: number) => {
      const text = block.children?.map((c: any) => c.text).join("") || "";
      if (!text) return null;
      if (block.type === "heading") {
        const level = block.level || 2;
        if (level === 1) return <h1 key={i} className="text-2xl font-bold mt-8 mb-4">{text}</h1>;
        if (level === 2) return <h2 key={i} className="text-xl font-bold mt-8 mb-3">{text}</h2>;
        return <h3 key={i} className="text-lg font-bold mt-6 mb-2">{text}</h3>;
      }
      return <p key={i}>{text}</p>;
    });
  }
  return null;
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;

  let post: any = null;
  try {
    const { getNewsPost } = await import("@/lib/strapi");
    const res = await getNewsPost(slug);
    if (res.data && res.data.length > 0) {
      const item = res.data[0];
      post = item.attributes ? { id: item.id, ...item.attributes } : item;
    }
  } catch { /* use fallback */ }

  if (!post) {
    post = fallbackNews.find((p) => p.slug === slug);
  }

  if (!post) {
    return (
      <>
        <PageHero title="Post not found" description="" bgColor="#443B5E" />
        <section className="px-12 py-24 max-w-[1300px] mx-auto">
          <Link href="/news" className="text-purple font-semibold">← Back to News</Link>
        </section>
      </>
    );
  }

  const date = new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const images = post.images || [];

  return (
    <>
      <PageHero title={post.title} description={date} bgColor="#443B5E" />
      <section className="px-12 py-24 max-w-[1300px] mx-auto">
        {/* <Link href="/news" className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple hover:text-green-dark transition-colors mb-8">
          ← Back to News
        </Link> */}

        {/* Thumbnail */}
        {post.thumbnail?.url && (
          <div className="rounded-3xl overflow-hidden relative aspect-[21/9] max-w-[800px] mb-10">
            <Image
              src={post.thumbnail.url.startsWith("http") ? post.thumbnail.url : `${STRAPI_URL}${post.thumbnail.url}`}
              alt={post.thumbnail.alternativeText || post.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}

        {/* Article body */}
        <div className="text-base text-text-mid leading-relaxed max-w-[800px] space-y-4"></div>

        {/* Article body */}
        <div className="text-base text-text-mid leading-relaxed max-w-[800px] space-y-4">
          {post.body ? renderBody(post.body) : <p>No content yet.</p>}
        </div>

        {/* Image gallery */}
        {/* {images.length > 0 && (
          <div className="mt-16 max-w-[800px]">
            <h2 className="text-xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.map((img: any) => (
                <div key={img.id} className="rounded-2xl overflow-hidden relative aspect-[4/3]">
                  <Image
                    src={getImageUrl(img)}
                    alt={img.alternativeText || img.caption || ""}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {img.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-white text-sm">{img.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )} */}
        {/* Image gallery */}
        {images.length > 0 && (
          <div className="mt-16 max-w-[800px]">
            <h2 className="text-xl font-bold mb-6">Gallery</h2>
            <LightboxGallery images={images} />
          </div>
        )}
      </section>
    </>
  );
}
