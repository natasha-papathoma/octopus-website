import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { fallbackPartners } from "@/lib/fallback-data";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

const countryFlags: Record<string, string> = {
  Hungary: "🇭🇺",
  Greece: "🇬🇷",
  Turkiye: "🇹🇷",
  Poland: "🇵🇱",
};

const colorMap: Record<string, string> = {
  Hungary: "#E94F35",
  Greece: "#A2C617",
  Turkiye: "#0091D3",
  Poland: "#7C6EB0",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PartnerPage({ params }: Props) {
  const { slug } = await params;

  let partner: any = null;
  try {
    const { getPartners } = await import("@/lib/strapi");
    const res = await getPartners();
    if (res.data && res.data.length > 0) {
      const all = res.data.map((item: any) => item.attributes ? { id: item.id, ...item.attributes } : item);
      partner = all.find((p: any) => p.slug === slug);
    }
  } catch { /* use fallback */ }

  if (!partner) {
    // Try matching fallback by generating slug from name
    partner = fallbackPartners.find((p) => {
      const generated = p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      return generated === slug;
    });
  }

  if (!partner) {
    return (
      <>
        <PageHero title="Partner not found" description="" bgColor="#7C6EB0" />
        <section className="px-12 py-24 max-w-[1300px] mx-auto">
          <Link href="/about" className="text-purple font-semibold">← Back to About</Link>
        </section>
      </>
    );
  }

  const logoUrl = partner.logo?.url
    ? (partner.logo.url.startsWith("http") ? partner.logo.url : `${STRAPI_URL}${partner.logo.url}`)
    : null;

  const bgColor = colorMap[partner.country] || "#7C6EB0";

  // Split bio into paragraphs for rendering
  const bioText = partner.bio || "";
  const paragraphs = typeof bioText === "string"
    ? bioText.split("\n").filter((p: string) => p.trim())
    : [];

  return (
    <>
      <PageHero
        title={partner.name}
        description={`${partner.role} · ${countryFlags[partner.country] || "🌍"} ${partner.country}`}
        bgColor={bgColor}
      />
      <section className="px-12 py-24 max-w-[1300px] mx-auto">
        <Link href="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple hover:text-green-dark transition-colors mb-10">
          ← Back to About
        </Link>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <div className="md:w-72 shrink-0">
            {logoUrl && (
              <div className="w-48 h-48 bg-white rounded-3xl flex items-center justify-center p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-8">
                <Image
                  src={logoUrl}
                  alt={partner.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
            )}
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-text-light font-semibold mb-1">Role</p>
                <p className="text-sm font-semibold text-text-dark">{partner.role}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-light font-semibold mb-1">Country</p>
                <p className="text-sm text-text-dark">{countryFlags[partner.country]} {partner.country}</p>
              </div>
              {partner.website && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-light font-semibold mb-1">Website</p>
                  
                  <a  
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple hover:text-green-dark transition-colors break-all"
                  >
                    {partner.website.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Bio content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">About {partner.name}</h2>
            <div className="text-base text-text-mid leading-relaxed space-y-4">
              {paragraphs.length > 0
                ? paragraphs.map((p: string, i: number) => {
                    // Handle markdown-style headings
                    if (p.startsWith("### ")) return <h4 key={i} className="text-base font-bold mt-6 mb-2 text-text-dark">{p.replace("### ", "")}</h4>;
                    if (p.startsWith("## ")) return <h3 key={i} className="text-lg font-bold mt-8 mb-3 text-text-dark">{p.replace("## ", "")}</h3>;
                    if (p.startsWith("# ")) return <h2 key={i} className="text-xl font-bold mt-8 mb-4 text-text-dark">{p.replace("# ", "")}</h2>;
                    // Handle numbered lists
                    if (/^\d+[\\.\\)]/.test(p.trim())) return <p key={i} className="pl-4">{p}</p>;
                    return <p key={i}>{p}</p>;
                  })
                : <p>No profile available yet.</p>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
