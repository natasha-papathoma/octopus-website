import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";

const resources = [
  { icon: "📖", type: "E-Book", typeColor: "text-purple", title: "The Octopus E-book", desc: "The comprehensive guidebook — eras, aspects, mind maps, keywords, and methodology for diverse learners.", tags: ["EN", "HU", "TR", "PL"], href: "/library/ebook" },
  { icon: "🎬", type: "Guide + Videos", typeColor: "text-red", title: "Handbooks & Tutorials", desc: "Step-by-step teacher's guide plus instructional video tutorials for the platform.", tags: ["Video", "PDF", "Multilingual"], href: "/library/handbooks" },
  { icon: "⭐", type: "Case Studies", typeColor: "text-blue", title: "Good Practices", desc: "Success stories from piloting across Hungary, Greece, Türkiye, and Poland.", tags: ["Reports", "Diaries"], href: "/library/good-practices" },
];

export default function LibraryPage() {
  return (
    <>
      <PageHero title="Resource Library" description="Free, open-access outputs — designed for educators, trainers, and institutions committed to inclusive education." bgColor="#8BA913" />
      <section className="px-12 py-24 max-w-[1300px] mx-auto">
        <SectionHeader tag="Downloads" title="Project Outputs" description="All materials will be freely available for non-commercial use." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {resources.map((r) => (
            <Link key={r.href} href={r.href} className="group block bg-off-white rounded-3xl p-8 border-2 border-transparent transition-all duration-300 hover:border-green hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(68,59,94,0.08)]">
              <div className="w-[42px] h-[42px] rounded-full bg-cream flex items-center justify-center text-lg mb-3.5 transition-all group-hover:bg-green">{r.icon}</div>
              <p className={`text-[0.65rem] uppercase tracking-widest font-bold mb-3.5 ${r.typeColor}`}>{r.type}</p>
              <h3 className="text-base font-semibold mb-2.5">{r.title}</h3>
              <p className="text-sm text-text-mid leading-relaxed mb-5">{r.desc}</p>
              <div className="flex gap-1.5 flex-wrap">
                {r.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-0.5 rounded-full bg-cream text-text-mid font-semibold">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
