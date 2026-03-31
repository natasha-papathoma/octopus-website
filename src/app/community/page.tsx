import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import FeedbackForm from "@/components/forms/FeedbackForm";

const tpmMeetings = [
  { flag: "🇭🇺", title: "TPM1 — Kick-off", desc: "Budapest, Sept 2025", bg: "bg-red/10", color: "text-red" },
  { flag: "🇵🇱", title: "TPM2 — Mid-Project", desc: "Wrocław, Nov 2026", bg: "bg-purple/10", color: "text-purple" },
  { flag: "🇹🇷", title: "TPM3 — Training", desc: "Istanbul, Jul 2027", bg: "bg-blue/10", color: "text-blue" },
  { flag: "🇬🇷", title: "TPM4 — Final", desc: "Athens, Feb 2028", bg: "bg-green/10", color: "text-green-dark" },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero title="Community" description="Training events, transnational meetings, news, and your feedback — stay connected with the Octopus project." bgColor="#E94F35" />

      {/* Training of Trainers */}
      <section className="px-12 py-24 max-w-[1300px] mx-auto">
        <SectionHeader tag="Training Events" title="Training of Trainers" description="The centrepiece of WP5 — an international training event where educators learn to use the Octopus platform and methodology." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-off-white rounded-3xl p-9 transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(68,59,94,0.1)]">
            <div className="w-[52px] h-[52px] rounded-2xl bg-blue/10 text-blue flex items-center justify-center text-2xl mb-5">🎓</div>
            <h3 className="text-lg font-semibold mb-2.5">International ToT — Istanbul</h3>
            <p className="text-sm text-text-mid leading-relaxed">June–October 2027. Hosted by Üsküdar MEM, 20–25 teachers from all partner countries receive hands-on training on the platform, gamified methodology, and inclusive teaching strategies.</p>
          </div>
          <div className="bg-off-white rounded-3xl p-9 transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(68,59,94,0.1)]">
            <div className="w-[52px] h-[52px] rounded-2xl bg-green/10 text-green-dark flex items-center justify-center text-2xl mb-5">🏫</div>
            <h3 className="text-lg font-semibold mb-2.5">Classroom Piloting</h3>
            <p className="text-sm text-text-mid leading-relaxed">September–December 2027. Trained teachers pilot the platform with 200+ students. Feedback collected through learning diaries, surveys, and webinars.</p>
          </div>
        </div>
      </section>

      {/* TPMs */}
      <section className="px-12 pb-24 max-w-[1300px] mx-auto">
        <SectionHeader tag="Meetings" title="Transnational Partner Meetings" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tpmMeetings.map((m) => (
            <div key={m.title} className="bg-off-white rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(68,59,94,0.1)]">
              <div className={`w-[52px] h-[52px] rounded-2xl ${m.bg} ${m.color} flex items-center justify-center text-2xl mb-5`}>{m.flag}</div>
              <h3 className="text-base font-semibold mb-1.5">{m.title}</h3>
              <p className="text-sm text-text-mid">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback */}
      <div className="bg-off-white rounded-[48px] px-12 md:px-20 py-20 mx-6 mb-20 max-w-[1300px] md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader tag="Feedback" title="Share Your Experience" description="Your input shapes what comes next. All data collected in full compliance with GDPR and Erasmus+ guidelines." />
        </div>
        <FeedbackForm />
      </div>
    </>
  );
}
