import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How we collect, use, and protect your personal data."
        bgColor="#443B5E"
      />
      <section className="px-12 py-24 max-w-[1300px] mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple hover:text-green-dark transition-colors mb-6"
        >
          ← Back to Home
        </Link>

        <p className="text-sm text-text-light mb-8">Last updated: April 2026</p>

        <div className="text-base text-text-mid leading-relaxed max-w-[800px] space-y-6">
          <h2 className="text-2xl font-bold text-text-dark">1. Who We Are</h2>
          <p>
            This website is operated as part of the OCTOPUS project (Offering Cross-disciplinary
            Training for Inclusive Preparation for School Exams), an Erasmus+ KA220-SCH Cooperation
            Partnership in School Education. Project reference number: KA220-SCH-063BB39C.
          </p>
          <p>
            The project coordinator and data controller is the{" "}
            <strong>Rogers Foundation for Person-Centred Education</strong>, based in Budapest,
            Hungary. The project was submitted through HU01 — Tempus Public Foundation.
          </p>
          <p>
            The project partnership includes Rogers Foundation (Hungary), Narratologies P.C.
            (Greece), Üsküdar District National Education (Türkiye), and Centre for Systems Solutions
            (Poland).
          </p>
          <p>
            For any privacy-related enquiries, please contact us at:{" "}
            <a href="mailto:info@rogersalapitvany.hu" className="text-purple hover:text-green-dark underline">
              info@rogersalapitvany.hu
            </a>
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">2. What Data We Collect</h2>
          <p>
            We collect personal data only when you voluntarily provide it through our website forms.
            This includes:
          </p>
          <p>
            <strong>Newsletter subscription:</strong> your email address and the date you subscribed.
          </p>
          <p>
            <strong>Contact form:</strong> your name, email address, organisation (optional), subject
            of enquiry, and message.
          </p>
          <p>
            <strong>Feedback form:</strong> your name, email address, professional role (teacher,
            student, trainer, parent, or other), and feedback text.
          </p>
          <p>
            <strong>Website analytics:</strong> we use Google Analytics 4 to collect anonymised
            usage data such as pages visited, time on site, device type, and approximate geographic
            location. This data does not identify you personally. See Section 6 for more details.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">3. Why We Collect Your Data (Legal Basis)</h2>
          <p>
            We process your personal data based on the following legal grounds under Articles 6 and
            9 of the EU General Data Protection Regulation (GDPR):
          </p>
          <p>
            <strong>Consent (Art. 6(1)(a) GDPR):</strong> when you voluntarily submit a form on our
            website, you consent to us processing the data you provide for the stated purpose. You
            may withdraw your consent at any time by contacting us.
          </p>
          <p>
            <strong>Legitimate interest (Art. 6(1)(f) GDPR):</strong> we use anonymised analytics
            data to improve our website and understand how our resources are being used. This serves
            the project&apos;s educational and dissemination objectives under the Erasmus+ programme.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">4. How We Use Your Data</h2>
          <p>We use the data we collect for the following purposes only:</p>
          <p>
            <strong>Newsletter emails:</strong> to send you project updates, resource announcements,
            and event invitations related to the OCTOPUS project.
          </p>
          <p>
            <strong>Responding to enquiries:</strong> to answer questions submitted through the
            contact form.
          </p>
          <p>
            <strong>Project evaluation:</strong> to collect and analyse feedback from teachers,
            students, and trainers as part of the project&apos;s quality assurance and reporting
            obligations under the Erasmus+ programme.
          </p>
          <p>
            <strong>Website improvement:</strong> to understand how visitors use the website and
            improve the user experience.
          </p>
          <p>
            We do not use your data for marketing purposes unrelated to the OCTOPUS project, and we
            never sell or rent your data to third parties.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">5. Who Has Access to Your Data</h2>
          <p>Your data may be accessed by:</p>
          <p>
            <strong>OCTOPUS project partners:</strong> Rogers Foundation (Hungary), Narratologies
            P.C. (Greece), Üsküdar District MEM (Türkiye), and Centre for Systems Solutions
            (Poland) — only for project-related purposes such as responding to your enquiry or
            processing feedback for project reports.
          </p>
          <p>
            <strong>Hosting providers:</strong> our website is hosted on Vercel (frontend) and
            Render (CMS backend), both of which process data in accordance with their respective
            privacy policies and GDPR obligations. Data may be stored on servers in the EU or the
            United States, with appropriate safeguards in place.
          </p>
          <p>
            <strong>European Commission / Tempus Public Foundation:</strong> aggregated, anonymised
            data may be included in project reports submitted to the Erasmus+ National Agency
            (Tempus Public Foundation, Hungary) and the European Commission as part of the
            project&apos;s contractual obligations. Individual personal data is not shared with
            these bodies.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">6. Cookies and Analytics</h2>
          <p>
            This website uses Google Analytics 4 (GA4) to collect anonymised data about website
            usage. GA4 uses first-party cookies to distinguish unique users and sessions. The data
            collected includes pages visited, session duration, referral source, device type, and
            approximate location (country/city level).
          </p>
          <p>
            GA4 is configured to anonymise IP addresses, and we do not enable Google Signals or any
            advertising features. No personally identifiable information is sent to Google
            Analytics.
          </p>
          <p>
            You can opt out of Google Analytics tracking by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="text-purple hover:text-green-dark underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            , or by adjusting your browser&apos;s cookie settings.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">7. Data Retention</h2>
          <p>
            <strong>Form submissions</strong> (contact, feedback, newsletter) are retained for the
            duration of the OCTOPUS project (September 2025 – February 2028) and for up to 5 years
            after the project ends, as required by Erasmus+ programme rules for audit and evaluation
            purposes.
          </p>
          <p>
            <strong>Analytics data</strong> is retained within Google Analytics for 14 months, after
            which it is automatically deleted.
          </p>
          <p>You may request deletion of your data at any time (see Section 8).</p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">8. Your Rights</h2>
          <p>Under the GDPR, you have the following rights regarding your personal data:</p>
          <p>
            <strong>Right of access:</strong> you can request a copy of all personal data we hold
            about you.
          </p>
          <p>
            <strong>Right to rectification:</strong> you can ask us to correct any inaccurate or
            incomplete data.
          </p>
          <p>
            <strong>Right to erasure:</strong> you can ask us to delete your personal data at any
            time.
          </p>
          <p>
            <strong>Right to restrict processing:</strong> you can ask us to temporarily stop
            processing your data while a complaint is being resolved.
          </p>
          <p>
            <strong>Right to data portability:</strong> you can request your data in a structured,
            machine-readable format.
          </p>
          <p>
            <strong>Right to object:</strong> you can object to data processing based on legitimate
            interest.
          </p>
          <p>
            <strong>Right to withdraw consent:</strong> you can withdraw your consent at any time
            without affecting the lawfulness of processing carried out before withdrawal.
          </p>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:info@rogersalapitvany.hu" className="text-purple hover:text-green-dark underline">
              info@rogersalapitvany.hu
            </a>
            . We will respond within 30 days.
          </p>
          <p>
            If you believe your data protection rights have been violated, you have the right to
            lodge a complaint with your national data protection authority. In Hungary, this is the{" "}
            <a
              href="https://www.naih.hu"
              className="text-purple hover:text-green-dark underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Authority for Data Protection and Freedom of Information (NAIH)
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">9. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal
            data against unauthorised access, alteration, disclosure, or destruction. These measures
            include encrypted connections (HTTPS/TLS), access controls on our CMS and database
            systems, and regular review of security practices.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">10. Children&apos;s Data</h2>
          <p>
            This website is intended for educators, trainers, and adult stakeholders. We do not
            knowingly collect personal data from children under the age of 16. If you believe a
            child has submitted personal data through our forms, please contact us and we will
            delete it promptly.
          </p>
          <p>
            During the piloting phase of the OCTOPUS project, any data collected from students
            (including minors) will be processed in accordance with separate consent procedures,
            parental/guardian authorisation where required, and the ethical guidelines of the
            Erasmus+ programme.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">11. International Data Transfers</h2>
          <p>
            The OCTOPUS partnership includes organisations in Hungary, Greece, Türkiye, and Poland.
            Personal data may be transferred between these countries for project-related purposes.
            For transfers to countries outside the European Economic Area (EEA), including Türkiye,
            we rely on appropriate safeguards such as Standard Contractual Clauses (SCCs) adopted by
            the European Commission, or your explicit consent.
          </p>
          <p>
            Our hosting providers (Vercel, Render) may process data in the United States under
            Standard Contractual Clauses and/or the EU-US Data Privacy Framework.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices
            or legal requirements. The &ldquo;Last updated&rdquo; date at the top of this page
            indicates when the most recent revision was made. We encourage you to review this page
            periodically.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">13. Contact</h2>
          <p>
            For any questions about this Privacy Policy or the processing of your personal data,
            contact the project coordinator:
          </p>
          <p>
            <strong>Rogers Foundation for Person-Centred Education</strong>
            <br />
            Budapest, Hungary
            <br />
            Email:{" "}
            <a href="mailto:info@rogersalapitvany.hu" className="text-purple hover:text-green-dark underline">
              info@rogersalapitvany.hu
            </a>
            <br />
            Website:{" "}
            <a
              href="https://www.rogersalapitvany.hu"
              className="text-purple hover:text-green-dark underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.rogersalapitvany.hu
            </a>
          </p>

          <p className="pt-8 text-sm text-text-light italic">
            See also:{" "}
            <Link href="/gdpr" className="underline hover:text-green-dark">
              GDPR Compliance
            </Link>{" "}
            ·{" "}
            <Link href="/accessibility" className="underline hover:text-green-dark">
              Accessibility Statement
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
