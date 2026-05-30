import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ManageCookiesButton from "@/components/layout/ManageCookiesButton";

export default function CookiesPage() {
  return (
    <>
      <PageHero
        title="Cookies"
        description="What we set, why, and how to change your mind."
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
          <h2 className="text-2xl font-bold text-text-dark">What Cookies Are</h2>
          <p>
            Cookies are small text files placed on your device by websites you visit. They are
            widely used to make websites work, work more efficiently, or report information back to
            the site&apos;s owners. Under the EU ePrivacy Directive and the General Data Protection
            Regulation (GDPR), non-essential cookies require your explicit consent before they are
            set.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Cookies on This Site</h2>
          <p>
            We use Google Analytics 4 to understand how educators use our resources. These cookies
            are set <em>only</em> with your explicit consent, given through the banner that appears
            on your first visit.
          </p>

          <h3 className="text-xl font-bold text-text-dark pt-2">Analytics cookies</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-cream-dark">
                  <th className="text-left font-semibold text-text-dark py-3 pr-4">Name</th>
                  <th className="text-left font-semibold text-text-dark py-3 pr-4">Provider</th>
                  <th className="text-left font-semibold text-text-dark py-3 pr-4">Purpose</th>
                  <th className="text-left font-semibold text-text-dark py-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-cream-dark">
                  <td className="py-3 pr-4 font-mono text-xs">_ga</td>
                  <td className="py-3 pr-4">Google Analytics</td>
                  <td className="py-3 pr-4">Distinguishes unique visitors.</td>
                  <td className="py-3">2 years</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-mono text-xs">_ga_&lt;container&gt;</td>
                  <td className="py-3 pr-4">Google Analytics</td>
                  <td className="py-3 pr-4">Persists session state.</td>
                  <td className="py-3">2 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Google Analytics 4 is configured with IP anonymisation enabled, and Google Signals and
            advertising features disabled. No personally identifiable information is sent to Google.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">How to Manage Your Consent</h2>
          <p>
            On your first visit, a small banner appears at the bottom of the page with two options:{" "}
            <strong>Accept</strong> (analytics cookies will be set) or <strong>Decline</strong> (no
            cookies set, no data collected). You can change your decision at any time using the
            button below.
          </p>
          <p>
            <ManageCookiesButton className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green text-purple-dark font-semibold text-sm transition-all hover:bg-green-dark hover:-translate-y-0.5">
              Manage my cookie preferences
            </ManageCookiesButton>
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Browser-Level Controls</h2>
          <p>
            All modern browsers let you block or delete cookies via their privacy settings. You can
            also install the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="text-purple hover:text-green-dark underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>{" "}
            to refuse Google Analytics on every site you visit.
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Third Parties</h2>
          <p>
            The only third party that may set cookies on this site is{" "}
            <strong>Google Analytics 4</strong> (Google Ireland Ltd. / Google LLC). For details on
            how Google processes data, see Google&apos;s{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-purple hover:text-green-dark underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://business.safety.google/adsservices/"
              className="text-purple hover:text-green-dark underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ads Services policy
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-text-dark pt-4">Contact</h2>
          <p>For questions about cookies or your data on this site, contact:</p>
          <p>
            <strong>Rogers Foundation for Person-Centred Education</strong>
            <br />
            Budapest, Hungary
            <br />
            Email:{" "}
            <a
              href="mailto:info@rogersalapitvany.hu"
              className="text-purple hover:text-green-dark underline"
            >
              info@rogersalapitvany.hu
            </a>
          </p>

          <p className="pt-8 text-sm text-text-light italic">
            See also:{" "}
            <Link href="/privacy" className="underline hover:text-green-dark">
              Privacy Policy
            </Link>{" "}
            ·{" "}
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
