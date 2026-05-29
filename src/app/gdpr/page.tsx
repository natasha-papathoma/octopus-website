import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export default function GdprPage() {
  return (
    <>
      <PageHero
        title="GDPR Compliance"
        description="Our commitment to data protection under the EU General Data Protection Regulation."
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
          <h2 className="text-2xl font-bold text-text-dark">Our Commitment</h2>
          <p>
            The OCTOPUS project (KA220-SCH-063BB39C) is fully committed to complying with the EU
            General Data Protection Regulation (Regulation 2016/679, &ldquo;GDPR&rdquo;) and the
            applicable national data protection laws of all partner countries: Hungary, Greece,
            Türkiye, and Poland.
          </p>
          <p>
            As an Erasmus+ co-funded project, we follow the data protection standards set by the
            European Commission and the Erasmus+ Programme Guide, ensuring that all personal data
            collected during the project lifecycle is processed lawfully, fairly, and transparently.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Data Controller</h2>
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
          <p>
            Each partner organisation acts as a joint data processor for data collected and shared
            within the scope of the project activities.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Principles We Follow</h2>
          <p>
            In accordance with Article 5 of the GDPR, we apply the following principles to all
            personal data processing:
          </p>
          <p>
            <strong>Lawfulness, fairness, and transparency:</strong> we process data only on a valid
            legal basis (consent or legitimate interest), and we clearly inform individuals about
            how their data is used through this page and our Privacy Policy.
          </p>
          <p>
            <strong>Purpose limitation:</strong> data is collected only for specific, explicit
            purposes related to the OCTOPUS project — communication, feedback collection, project
            evaluation, and dissemination. We never use data for unrelated purposes.
          </p>
          <p>
            <strong>Data minimisation:</strong> we collect only the minimum amount of personal data
            necessary for each purpose. Our forms ask only for essential fields.
          </p>
          <p>
            <strong>Accuracy:</strong> we take reasonable steps to ensure data is accurate and up to
            date. Users can request corrections at any time.
          </p>
          <p>
            <strong>Storage limitation:</strong> personal data is retained only for as long as
            necessary to fulfil its purpose, and in accordance with Erasmus+ audit requirements (up
            to 5 years post-project). After that, data is securely deleted.
          </p>
          <p>
            <strong>Integrity and confidentiality:</strong> we implement technical and
            organisational security measures to protect data against unauthorised access, loss, or
            destruction.
          </p>
          <p>
            <strong>Accountability:</strong> the project coordinator maintains records of processing
            activities and ensures all partners comply with these principles.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Data Processing Activities</h2>
          <p>The OCTOPUS project processes personal data in the following contexts:</p>
          <p>
            <strong>Website forms (contact, feedback, newsletter)</strong>
            <br />
            Legal basis: Consent. Data collected: name, email, role, message/feedback. Purpose:
            communication, project evaluation, and dissemination. Retention: project duration +
            5 years.
          </p>
          <p>
            <strong>Website analytics (Google Analytics 4)</strong>
            <br />
            Legal basis: Legitimate interest. Data collected: anonymised usage data (pages,
            sessions, device, approximate location). Purpose: website improvement and impact
            measurement. Retention: 14 months.
          </p>
          <p>
            <strong>Teacher training and piloting (WP5)</strong>
            <br />
            Legal basis: Consent. Data collected: names, contact details, professional information
            of participating teachers and trainers. Purpose: training coordination, evaluation, and
            certification. Retention: project duration + 5 years.
          </p>
          <p>
            <strong>Student pilot data (WP5)</strong>
            <br />
            Legal basis: Consent (with parental/guardian authorisation for minors). Data collected:
            anonymised learning outcomes, feedback surveys. Purpose: methodology evaluation.
            Retention: project duration + 5 years. Individual student names are not collected
            through this website.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Technical Measures</h2>
          <p>
            We protect personal data through the following technical and organisational measures:
          </p>
          <p>
            <strong>Encryption in transit:</strong> all data transmitted between your browser and
            our servers is encrypted using TLS/HTTPS.
          </p>
          <p>
            <strong>Secure hosting:</strong> our website frontend is hosted on Vercel and our CMS on
            Render, both of which maintain SOC 2 compliance and implement industry-standard
            security practices.
          </p>
          <p>
            <strong>Access control:</strong> access to the content management system and database
            is restricted to authorised project team members only, with individual authentication
            credentials.
          </p>
          <p>
            <strong>API security:</strong> all API communications between the website and CMS use
            scoped authentication tokens with the minimum required permissions (read-only for
            content, create-only for form submissions).
          </p>
          <p>
            <strong>Data backup:</strong> database backups are maintained on encrypted storage with
            access restricted to the platform development partner (Narratologies P.C.).
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">International Transfers</h2>
          <p>
            The OCTOPUS project involves four partner organisations across three EU member states
            (Hungary, Greece, Poland) and one EU candidate country (Türkiye). Personal data may be
            transferred between partner countries for legitimate project purposes.
          </p>
          <p>
            For transfers to Türkiye, which is not currently within the European Economic Area, the
            partnership relies on Standard Contractual Clauses (SCCs) approved by the European
            Commission under Decision 2021/914.
          </p>
          <p>
            Hosting services (Vercel, Render) may process data in the United States under the EU-US
            Data Privacy Framework and/or Standard Contractual Clauses.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Your Rights Under GDPR</h2>
          <p>As a data subject, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access</strong> your personal data and obtain a copy.</li>
            <li><strong>Rectify</strong> inaccurate or incomplete data.</li>
            <li><strong>Erase</strong> your data (&ldquo;right to be forgotten&rdquo;).</li>
            <li><strong>Restrict</strong> processing of your data.</li>
            <li><strong>Port</strong> your data to another service in a structured format.</li>
            <li><strong>Object</strong> to processing based on legitimate interest.</li>
            <li><strong>Withdraw consent</strong> at any time.</li>
          </ul>
          <p>
            To exercise these rights, email{" "}
            <a href="mailto:info@rogersalapitvany.hu" className="text-purple hover:text-green-dark underline">
              info@rogersalapitvany.hu
            </a>
            . We will respond within 30 days as required by Article 12 of the GDPR.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Data Protection Authorities</h2>
          <p>
            If you believe your data protection rights have been violated, you may lodge a complaint
            with the supervisory authority in your country of residence:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Hungary:</strong> National Authority for Data Protection and Freedom of Information (NAIH) —{" "}
              <a
                href="https://www.naih.hu"
                className="text-purple hover:text-green-dark underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.naih.hu
              </a>
            </li>
            <li>
              <strong>Greece:</strong> Hellenic Data Protection Authority (HDPA) —{" "}
              <a
                href="https://www.dpa.gr"
                className="text-purple hover:text-green-dark underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.dpa.gr
              </a>
            </li>
            <li>
              <strong>Poland:</strong> Personal Data Protection Office (UODO) —{" "}
              <a
                href="https://uodo.gov.pl"
                className="text-purple hover:text-green-dark underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                uodo.gov.pl
              </a>
            </li>
            <li>
              <strong>Türkiye:</strong> Personal Data Protection Authority (KVKK) —{" "}
              <a
                href="https://www.kvkk.gov.tr"
                className="text-purple hover:text-green-dark underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.kvkk.gov.tr
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Erasmus+ Programme Obligations</h2>
          <p>
            As a project co-funded by the European Union under the Erasmus+ programme, OCTOPUS
            complies with the data protection obligations outlined in the Grant Agreement and the
            Erasmus+ Programme Guide. This includes maintaining records of processing activities,
            implementing data protection impact assessments where necessary, and ensuring that all
            dissemination activities respect the privacy of project participants.
          </p>
          <p>
            The European Commission and the Tempus Public Foundation (National Agency) may request
            access to aggregated, anonymised project data for monitoring, evaluation, and audit
            purposes. Individual personal data is not shared with these bodies unless specifically
            required by law.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Contact</h2>
          <p>For GDPR-related questions, data access requests, or complaints:</p>
          <p>
            <strong>Rogers Foundation for Person-Centred Education</strong>
            <br />
            Budapest, Hungary
            <br />
            Email:{" "}
            <a href="mailto:info@rogersalapitvany.hu" className="text-purple hover:text-green-dark underline">
              info@rogersalapitvany.hu
            </a>
          </p>

          <p className="pt-8 text-sm text-text-light italic">
            See also:{" "}
            <Link href="/privacy" className="underline hover:text-green-dark">
              Privacy Policy
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
