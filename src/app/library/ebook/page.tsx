import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

const languages = [
  { flag: "🇬🇧", label: "English" },
  { flag: "🇭🇺", label: "Hungarian" },
  { flag: "🇹🇷", label: "Turkish" },
  { flag: "🇵🇱", label: "Polish" },
];

export default function EbookPage() {
  return (
    <>
      <PageHero title="The Octopus E-book" description="The comprehensive project guidebook — available in English, Hungarian, Turkish, and Polish." bgColor="#7C6EB0" />
      <section className="px-12 py-24 max-w-[1300px] mx-auto">
        <Link href="/library" className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple hover:text-green-dark transition-colors mb-6">
          ← Back to Library
        </Link>
        <h2 className="text-3xl font-bold mb-6">About the E-book</h2>
        <div className="text-base text-text-mid leading-relaxed max-w-[800px] space-y-4">
          <p>The Octopus E-book is the foundational publication — a minimum 70-page guidebook clarifying the concept and methodologies for teachers and students working independently.</p>
          <p>It contains the detailed main idea with explanations of the chosen historical eras and eight thematic aspects, mind maps for each era with their keywords, and descriptions of ways to use the system online and offline.</p>
          <p>The final version will be refined after piloting using feedback from students and practising teachers across all four partner countries.</p>
          <p>For SEN students, the e-book provides key concepts instead of long texts, offering visual and interactive learning options with a structured approach that prevents learners from feeling lost during exam preparation.</p>
        </div>
        <div className="flex gap-3 flex-wrap mt-10">
          {languages.map((l) => (
            <a key={l.label} href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream border-2 border-cream-dark text-purple-dark font-semibold text-sm transition-all hover:bg-green hover:border-green hover:-translate-y-0.5">
              📥 {l.flag} {l.label} (PDF)
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
