import PageHero from "@/components/ui/PageHero";

export default function AccessibilityPage() {
  return (
    <>
      <PageHero title="Accessibility Statement" description="Our commitment to making the Octopus project accessible to everyone." bgColor="#443B5E" />
      <section className="px-12 py-24 max-w-[1300px] mx-auto">
        <div className="text-base text-text-mid leading-relaxed max-w-[800px] space-y-6">
          <h2 className="text-2xl font-bold text-text-dark">Our Commitment</h2>
          <p>The Octopus project is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.</p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Measures Taken</h2>
          <p>The Octopus platform and website are designed following universal accessibility principles, ensuring compatibility with screen readers and assistive technologies. We use a simple, intuitive user interface that accommodates different levels of digital literacy. Content is available in multiple languages.</p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Inclusive Learning Design</h2>
          <p>The gamification methodology allows for adaptive learning experiences, catering to different learning speeds and preferences. The teacher&apos;s back office offers customisation options, enabling educators to modify tasks to fit their students&apos; needs, including SEN learners.</p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Feedback</h2>
          <p>We welcome your feedback on the accessibility of our resources. If you encounter any barriers, please contact us through the contact form on the homepage or email the Rogers Foundation directly.</p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Standards</h2>
          <p>We aim to conform to WCAG 2.1 Level AA guidelines where possible, and we are continuously working to improve accessibility as the platform develops.</p>
        </div>
      </section>
    </>
  );
}
