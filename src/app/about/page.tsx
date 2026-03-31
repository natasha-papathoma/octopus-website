import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { fallbackPartners } from "@/lib/fallback-data";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";


function getSlug(partner: any): string {
  if (partner.slug) return partner.slug;
  return partner.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getShortBio(bio: string): string {
  if (!bio) return "";
  // Get first 1-2 sentences
  const sentences = bio.replace(/#{1,6}\s/g, "").split(/(?<=[.!?])\s+/);
  const short = sentences.slice(0, 2).join(" ");
  return short.length > 200 ? short.slice(0, 200).replace(/\s+\S*$/, "") + "…" : short;
}

export default async function AboutPage() {
  let partners: any[] = [];
  try {
    const { getPartners } = await import("@/lib/strapi");
    const res = await getPartners();
    if (res.data && res.data.length > 0) {
      partners = res.data.map((item: any) => item.attributes ? { id: item.id, ...item.attributes } : item);
    }
  } catch { /* use fallback */ }

  if (partners.length === 0) {
    partners = fallbackPartners;
  }

  return (
    <>
      <PageHero
        title="About Octopus"
        description="An Erasmus+ KA220-SCH Cooperation Partnership in School Education — co-funded by the European Union."
        bgColor="#7C6EB0"
      />

      <section className="px-12 py-24 max-w-[1300px] mx-auto">
        <SectionHeader tag="The Programme" title="Erasmus+ KA220-SCH" />
        <div className="text-base text-text-mid leading-relaxed max-w-[800px] space-y-4">
          <p>Octopus is funded under Erasmus+ Key Action 2 — Cooperation Partnerships in School Education (KA220-SCH). This action supports transnational partnerships that develop innovative practices, share knowledge, and build capacity in school education.</p>
          <p>The project addresses three Erasmus+ priorities: <strong className="text-text-dark">development of key competences</strong>, <strong className="text-text-dark">tackling learning disadvantage and early school leaving</strong>, and <strong className="text-text-dark">promoting wellbeing at school</strong>. It runs for 30 months from September 2025 to February 2028.</p>
          <p>Full title: <strong className="text-text-dark">&quot;Offering Cross-disciplinary Training for Inclusive Preparation for School Exams&quot;</strong> — OCTOPUS. Submitted through HU01 – Tempus Public Foundation (Hungary).</p>
        </div>
      </section>

      <div className="bg-purple-dark rounded-[48px] px-12 md:px-20 py-20 mx-6 max-w-[1300px] md:mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(162,198,23,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(0,145,211,0.08)_0%,transparent_50%),radial-gradient(circle_at_50%_50%,rgba(124,110,176,0.15)_0%,transparent_60%)]" />
        <div className="relative z-10">
          <span className="inline-block text-xs uppercase tracking-[3px] text-purple-pale font-bold bg-white/10 px-4 py-1.5 rounded-full mb-4">The Partnership</span>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-5">Meet the Team</h2>
          <p className="text-purple-pale/80 text-base max-w-[640px] leading-relaxed mb-12">Four organisations across Europe — each bringing unique strengths.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {partners.map((p) => {
              const logoUrl = p.logo?.url ? (p.logo.url.startsWith("http") ? p.logo.url : `${STRAPI_URL}${p.logo.url}`) : null;
              const slug = getSlug(p);
              return (
                <Link key={p.id || p.name} href={`/about/${slug}`} className="group block bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-3xl p-9 transition-all hover:bg-white/[0.14] hover:-translate-y-1">
                  {logoUrl ? (
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-36 h-36 bg-white rounded-3xl flex items-center justify-center p-4 shadow-[0_2px_12px_rgba(0,0,0,0.1)]">
                        <Image
                          src={logoUrl}
                          alt={p.name}
                          width={144}
                          height={144}
                          className="w-full h-full object-contain"
                          unoptimized
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-36 h-36 bg-white rounded-3xl flex items-center justify-center p-4 shadow-[0_2px_12px_rgba(0,0,0,0.1)] mb-5">
                      <span className="text-3xl font-bold text-gray-500">{p.name.charAt(0)}</span>
                    </div>
                  )}
                  <h3 className="text-white text-lg font-semibold mb-2">{p.name}</h3>
                  <p className="mb-2.5">
                    <strong className="text-green">{p.role}</strong>{" "}
                    <span className="text-purple-pale/60">· {p.country}</span>
                  </p>
                  <p className="text-purple-pale/75 text-sm leading-relaxed">{getShortBio(p.bio)}</p>
                  <span className="inline-block mt-4 text-sm text-green font-semibold group-hover:text-white transition-colors">
                    Read more →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-20" />
    </>
  );
}
