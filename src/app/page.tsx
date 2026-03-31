import Link from "next/link";
import NewsCard from "@/components/ui/NewsCard";
import SectionHeader from "@/components/ui/SectionHeader";
import NewsletterForm from "@/components/forms/NewsletterForm";
import ContactForm from "@/components/forms/ContactForm";
import Image from "next/image";
import { fallbackNews } from "@/lib/fallback-data";
import { fallbackPartners } from "@/lib/fallback-data";

const overviewCards = [
  { icon: "📊", title: "Research", desc: "Five work packages spanning 30 months — from concept and methodology through gamification design, platform development, and teacher training.", href: "/research", link: "View roadmap", bg: "bg-blue/10", color: "text-blue" },
  { icon: "📚", title: "Library", desc: "The Octopus E-book in four languages, practical handbooks and video tutorials for educators, and good practices from our pilot phases.", href: "/library", link: "Browse resources", bg: "bg-green/10", color: "text-green-dark" },
  { icon: "🤝", title: "Community", desc: "Updates on the Training of Trainers sessions in Istanbul, transnational meetings, and digital feedback forms for teachers and students.", href: "/community", link: "Join the community", bg: "bg-red/10", color: "text-red" },
];

const targetGroups = [
  { icon: "🧑‍🎓", title: "Students", desc: "Secondary school students preparing for final exams — especially those with learning difficulties, SEN, diverse cultural backgrounds, or alternative study paths." },
  { icon: "🧑‍🏫", title: "Teachers", desc: "Educators who prepare students for exams, work with SEN learners, seek gamification tools, or want to shift toward facilitation and person-centred teaching." },
  { icon: "🏫", title: "Schools & Institutions", desc: "Mainstream schools, vocational schools, special education centres, and teacher training institutions looking for inclusive, interdisciplinary approaches." },
];


const newsEmojis = ["🚀", "📝", "🎮"];

export default async function HomePage() {
  //News
  let news: any[] = [];
  try {
    const { getNewsPosts } = await import("@/lib/strapi");
    const res = await getNewsPosts();
    if (res.data && res.data.length > 0) {
      news = res.data.map((item: any) => item.attributes ? { id: item.id, ...item.attributes } : item);
    }
  } catch { /* use fallback */ }

  if (news.length === 0) {
    news = fallbackNews;
  }

  const latestNews = news.slice(0, 3);

  //Partners
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

  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  const colorMap: Record<string, string> = { Hungary: "bg-red", Greece: "bg-green", "Türkiye": "bg-blue", Poland: "bg-purple" };

  //Gallery
  let galleryImages: any[] = [];
  try {
    const { getGalleryImages } = await import("@/lib/strapi");
    const res = await getGalleryImages();
    if (res.data && res.data.length > 0) {
      galleryImages = res.data.map((item: any) => item.attributes ? { id: item.id, ...item.attributes } : item);
    }
  } catch { /* use fallback */ }

  return (
    <>
      <section className="min-h-screen bg-purple rounded-b-[48px] pt-[170px] pb-20 px-12 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(162,198,23,0.15)_0%,transparent_70%)] rounded-full animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute -bottom-[150px] -left-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,145,211,0.12)_0%,transparent_70%)] rounded-full animate-[float_15s_ease-in-out_infinite_reverse]" />
        <div className="max-w-[1200px] mx-auto w-full relative z-10">
          <p className="text-purple-pale text-sm tracking-[4px] uppercase mb-3">Erasmus+ KA220-SCH</p>
          <h1 className="text-white text-6xl md:text-7xl lg:text-[6.5rem] font-bold leading-none mb-5 -tracking-wide">Octopus</h1>
          <p className="text-purple-pale text-lg max-w-[580px] leading-relaxed mb-4">Offering Cross-disciplinary Training for Inclusive Preparation for School Exams — enhancing teachers&apos; interdisciplinary competencies through gamification while supporting SEN students and learners from diverse backgrounds.</p>
          <p className="text-white/40 text-sm mb-9">Sept 2025 – Feb 2028 · 30 months · 4 partners across Europe</p>
          <div className="flex gap-3.5 flex-wrap">
            <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-green text-purple-dark font-semibold text-sm transition-all hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(162,198,23,0.35)]">I am a student <span>↗</span></Link>
            <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 text-white font-semibold text-sm backdrop-blur-sm transition-all hover:bg-white/25 hover:-translate-y-0.5">I am a teacher <span>↗</span></Link>
          </div>
        </div>
      </section>

      <div className="py-16 px-12 text-center">
        <p className="text-xs uppercase tracking-[3px] text-text-light font-semibold mb-8">A partnership across four organisations</p>
        <div className="grid grid-cols-2 gap-5 max-w-[700px] mx-auto">
          {partners.map((p) => {
            const logoUrl = p.logo?.url ? (p.logo.url.startsWith("http") ? p.logo.url : `${STRAPI_URL}${p.logo.url}`) : null;
            return (
              <div key={p.id || p.name} className="flex items-center gap-3 px-5 py-3.5 bg-off-white rounded-2xl shadow-[0_2px_12px_rgba(68,59,94,0.06)] font-semibold text-text-mid text-sm">
                {logoUrl ? (
                  <Image src={logoUrl} alt={p.name} width={32} height={32} className="h-8 w-8 object-contain" unoptimized />
                ) : (
                  <div className={`w-2.5 h-2.5 rounded-full ${colorMap[p.country] || "bg-purple"}`} />
                )}
                {p.name} <span className="text-xs text-text-light font-normal">{p.country}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-12 pb-20 max-w-[1300px] mx-auto">
        <SectionHeader tag="Explore the Project" title="What we're building" />
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"> 
          {overviewCards.map((c) => (
            <Link key={c.href} href={c.href} className="group block bg-off-white rounded-3xl p-8 border-2 border-transparent transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(68,59,94,0.1)] hover:border-green">
              <div className={`w-[52px] h-[52px] rounded-2xl ${c.bg} ${c.color} flex items-center justify-center text-2xl mb-5`}>{c.icon}</div>
              <h3 className="text-lg font-semibold mb-2.5">{c.title}</h3>
              <p className="text-sm text-text-mid leading-relaxed">{c.desc}</p>
              <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-purple group-hover:text-green-dark transition-colors">{c.link} <span>↗</span></span>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-12 pb-20 max-w-[1300px] mx-auto">
        <SectionHeader tag="Who is this for?" title="Designed for Every Learner" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {targetGroups.map((t) => (
            <div key={t.title} className="bg-off-white rounded-3xl p-8 text-center transition-all hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(68,59,94,0.08)]">
              <span className="text-4xl mb-3.5 block">{t.icon}</span>
              <h3 className="text-base font-semibold mb-2">{t.title}</h3>
              <p className="text-sm text-text-mid leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {galleryImages.length > 0 && (
        <div className="px-12 pb-10 max-w-[1300px] mx-auto">
          <SectionHeader tag="Gallery" title="Moments from the Project" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            {galleryImages.map((img, i) => {
              const isFeatured = img.featured || i === 0;
              const imageUrl = img.image?.url
                ? (img.image.url.startsWith("http") ? img.image.url : `${STRAPI_URL}${img.image.url}`)
                : null;
              return (
                <div
                  key={img.id}
                  className={`rounded-2xl overflow-hidden relative transition-all hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(68,59,94,0.15)] cursor-pointer ${isFeatured ? "col-span-2 row-span-2 min-h-[240px]" : "aspect-[4/3]"}`}
                >
                  {imageUrl ? (
                    <>
                      <Image
                        src={imageUrl}
                        alt={img.caption || "Gallery image"}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      {img.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                          <p className="text-white text-sm font-medium">{img.caption}</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-pale to-green/20 flex items-center justify-center text-purple font-semibold text-sm p-5">
                      {img.caption || "Gallery"}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="px-12 py-16 max-w-[1300px] mx-auto">
        <SectionHeader tag="News" title="Latest Updates" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {latestNews.map((post, i) => (
            <NewsCard
              key={post.id}
              title={post.title}
              slug={post.slug}
              date={post.date}
              excerpt={typeof post.body === 'string' ? post.body : Array.isArray(post.body) ? post.body.map((b: any) => b.children?.map((c: any) => c.text).join('')).join(' ') : ''}
              thumbnail={post.thumbnail}
              emoji={newsEmojis[i]}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/news" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green text-purple-dark font-semibold text-sm transition-all hover:bg-green-dark hover:-translate-y-0.5">View All News <span>↗</span></Link>
        </div>
      </div>

      <div className="px-12 pb-20 max-w-[1300px] mx-auto">
        <div className="bg-purple-dark rounded-3xl px-14 py-12 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_50%,rgba(162,198,23,0.12)_0%,transparent_60%)]" />
          <div className="relative z-10">
            <h3 className="text-white text-xl font-semibold">Stay updated</h3>
            <p className="text-purple-pale/70 text-sm mt-1.5">Subscribe to the Octopus newsletter for project news, resources, and event invitations.</p>
          </div>
          <div className="relative z-10"><NewsletterForm /></div>
        </div>
      </div>

      <div className="bg-off-white rounded-[48px] px-12 md:px-20 py-20 mx-6 mb-20 max-w-[1300px] md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader tag="Get in Touch" title="Contact Us" description="Interested in the Octopus project? Want to learn more about our inclusive, gamified approach to education? Reach out — we'd love to hear from you." />
          
        </div>
        <ContactForm />
      </div>
    </>
  );
}
