import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export default function HandbooksPage() {
  return (
    <>
      <PageHero title="Handbooks & Video Tutorials" description="Practical guides and video walkthroughs for educators implementing inclusive gamification strategies." bgColor="#E94F35" />
      <section className="px-12 py-24 max-w-[1300px] mx-auto">
        <Link href="/library" className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple hover:text-green-dark transition-colors mb-6">
          ← Back to Library
        </Link>
        <h2 className="text-3xl font-bold mb-6">Teacher&apos;s Guide</h2>
        <div className="text-base text-text-mid leading-relaxed max-w-[800px] space-y-4 mb-8">
          <p>A structured manual with step-by-step instructions on using the Octopus platform and applying the gamified methodology. Covers platform functionalities, creating activities through the back office, and adapting content for SEN students.</p>
        </div>
        <div className="flex gap-3 flex-wrap mb-16">
          <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream border-2 border-cream-dark text-purple-dark font-semibold text-sm transition-all hover:bg-green hover:border-green hover:-translate-y-0.5">
            📥 Teacher&apos;s Guide (PDF)
          </a>
        </div>

        <h2 className="text-3xl font-bold mb-6">Video Tutorials</h2>
        <div className="text-base text-text-mid leading-relaxed max-w-[800px] space-y-4 mb-8">
          <p>At least 5 instructional video guides integrated into the platform — practical demonstrations showing educators how to navigate the student portal, set up activities, and use gamification features effectively. English with multilingual subtitles.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream border-2 border-cream-dark text-purple-dark font-semibold text-sm transition-all hover:bg-green hover:border-green hover:-translate-y-0.5">
            ▶️ Watch Tutorials (coming soon)
          </a>
        </div>
      </section>
    </>
  );
}
