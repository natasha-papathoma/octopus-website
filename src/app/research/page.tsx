import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";

const workPackages = [
  { id: "WP1", title: "Project Management", dates: "Sept 2025 – Feb 2028 · Led by Rogers Foundation", desc: "Overall coordination, quality assurance, monthly online meetings, four transnational partner meetings (Budapest, Wrocław, Istanbul, Athens), financial oversight, and risk management.", color: "bg-purple-dark", status: "Ongoing", statusBg: "bg-purple-dark/10 text-purple-dark" },
  { id: "WP2", title: "Concept, Methodology & E-book", dates: "Sept 2025 – Oct 2026 · Led by Rogers Foundation", desc: "Revise the Octopus framework (eras, aspects, keywords), write the e-book in four languages, create the toolmakers' guide, and pilot with 10–15 teachers per country.", color: "bg-green text-purple-dark", status: "Upcoming", statusBg: "bg-green/15 text-green-dark" },
  { id: "WP3", title: "Game Engagement Planning", dates: "Sept 2025 – Nov 2026 · Led by Centre for Systems Solutions", desc: "Design the gamification framework, UI/UX planning, create templates and challenges for teachers and students, set up the project website.", color: "bg-blue", status: "Upcoming", statusBg: "bg-blue/10 text-blue" },
  { id: "WP4", title: "Gamification Programming & Testing", dates: "Apr 2026 – Sept 2027 · Led by Narratologies", desc: "Build the database, teacher's back office, and student portal. Implement gamification features. Internal testing followed by first-phase user testing.", color: "bg-red", status: "Upcoming", statusBg: "bg-red/10 text-red" },
  { id: "WP5", title: "Teacher Training, Piloting & Conference", dates: "Jun 2027 – Feb 2028 · Led by Üsküdar MEM", desc: "International Training of Trainers in Istanbul (20–25 teachers), classroom piloting with 200+ students, video guides, multilingual translations, and final conference in Athens.", color: "bg-purple", status: "Upcoming", statusBg: "bg-purple/10 text-purple" },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero title="Research & Roadmap" description="Five work packages spanning 30 months — a structured journey from foundational concept to a fully tested, multilingual platform ready for classrooms across Europe." bgColor="#0091D3" />
      <section className="px-12 py-24 max-w-[1300px] mx-auto">
        <SectionHeader tag="Work Packages" title="Project Roadmap" description="Each work package builds on the last — concept feeds into game design, which feeds into platform development, which is tested through teacher training and piloting." />
        <div className="flex flex-col relative mt-8">
          <div className="absolute left-[28px] top-0 bottom-0 w-[3px] bg-purple-pale rounded-full" />
          {workPackages.map((wp) => (
            <div key={wp.id} className="flex gap-8 py-5 relative">
              <div className={`w-14 h-14 min-w-14 rounded-full flex items-center justify-center font-bold text-xs text-white relative z-10 border-[3px] border-cream ${wp.color}`}>
                {wp.id}
              </div>
              <div className="bg-off-white rounded-3xl p-7 flex-1 transition-all hover:shadow-[0_8px_32px_rgba(68,59,94,0.08)]">
                <h3 className="text-base font-semibold mb-1">{wp.title}</h3>
                <p className="text-xs text-text-light mb-1.5">{wp.dates}</p>
                <p className="text-sm text-text-mid leading-relaxed">{wp.desc}</p>
                <span className={`inline-block text-[0.65rem] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full mt-3 ${wp.statusBg}`}>
                  {wp.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
