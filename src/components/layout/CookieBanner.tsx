"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getConsent, onConsentChange, setConsent, type Consent } from "@/lib/consent";

interface Props {
  gaId: string;
}

export default function CookieBanner({ gaId }: Props) {
  const [consent, setConsentState] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setConsentState(getConsent());
    return onConsentChange(setConsentState);
  }, []);

  if (!mounted) return null;
  if (!gaId) return null;
  if (consent !== null) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-[400px] z-[9000] bg-off-white border-2 border-purple-dark/10 rounded-2xl shadow-[0_8px_32px_rgba(68,59,94,0.18)] p-6 flex flex-col gap-4"
    >
      <div className="text-sm text-text-mid leading-relaxed">
        <p className="font-semibold text-text-dark mb-1">We&apos;d like to use cookies</p>
        <p>
          We use Google Analytics to understand how educators use our resources. With your consent,
          two cookies (<code className="font-mono text-xs">_ga</code>,{" "}
          <code className="font-mono text-xs">_ga_…</code>) are stored on your device for up to
          2 years. You can change your decision anytime via the Cookie Policy in the footer.{" "}
          <Link href="/cookies" className="text-purple hover:text-green-dark underline">
            Read more
          </Link>
          .
        </p>
      </div>
      <div className="flex gap-2.5">
        <button
          type="button"
          onClick={() => setConsent("declined")}
          className="flex-1 px-4 py-2.5 rounded-full border-2 border-purple-dark text-purple-dark font-semibold text-sm transition-all hover:bg-purple-dark hover:text-white"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => setConsent("accepted")}
          className="flex-1 px-4 py-2.5 rounded-full bg-green text-purple-dark font-semibold text-sm transition-all hover:bg-green-dark hover:-translate-y-0.5"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
