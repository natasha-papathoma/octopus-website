import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export default function GoodPracticesPage() {
  return (
    <>
      <PageHero title="Good Practices & Pilot Stories" description="Success stories and best practices from piloting across four countries." bgColor="#0091D3" />
      <section className="px-12 py-24 max-w-[1300px] mx-auto">
        <Link href="/library" className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple hover:text-green-dark transition-colors mb-6">
          ← Back to Library
        </Link>
        <h2 className="text-3xl font-bold mb-6">From the Pilots</h2>
        <div className="text-base text-text-mid leading-relaxed max-w-[800px] space-y-4 mb-8">
          <p>During piloting (WP2 and WP5), teachers across Hungary, Greece, Türkiye, and Poland test the methodology and platform in real classrooms — involving 200+ students and 60+ teachers.</p>
          <p>Workshops introduce the Octopus concept, after which teachers test the methods in their classrooms. We collect and document good practices and success stories as practical case studies.</p>
          <p>Special attention is given to SEN students and learners from diverse cultural backgrounds. Evaluation uses learning diaries, structured surveys, and feedback sessions.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream border-2 border-cream-dark text-purple-dark font-semibold text-sm transition-all hover:bg-green hover:border-green hover:-translate-y-0.5">
            📥 Pilot Report (coming soon)
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream border-2 border-cream-dark text-purple-dark font-semibold text-sm transition-all hover:bg-green hover:border-green hover:-translate-y-0.5">
            📥 Good Practices Collection (coming soon)
          </a>
        </div>
      </section>
    </>
  );
}
