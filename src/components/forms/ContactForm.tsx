"use client";

import { useEffect, useRef, useState } from "react";

const labelClass = "block text-sm font-semibold text-text-mid uppercase tracking-wider mb-1.5";
const inputClass = "w-full px-4 py-3.5 rounded-lg border-2 border-cream-dark bg-cream text-text-dark text-sm outline-none transition-colors focus:border-purple";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    try {
      const { submitContact } = await import("@/lib/strapi");
      await submitContact({
        name: fd.get("name") as string,
        email: fd.get("email") as string,
        organisation: fd.get("organisation") as string,
        subject: fd.get("subject") as string,
        message: fd.get("message") as string,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        className="bg-green/10 border-2 border-green/30 rounded-2xl p-8 text-center outline-none"
      >
        <p className="text-lg font-semibold text-green-dark mb-2">Thank you!</p>
        <p className="text-sm text-text-mid">We&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="text-xs text-text-light">
        Fields marked <span aria-hidden="true" className="text-red">*</span> are required.
      </p>
      {status === "error" && (
        <div role="alert" className="bg-red/10 border-2 border-red/30 rounded-lg p-4 text-sm text-red">
          Something went wrong. Please try again, or email us directly.
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name <span aria-hidden="true" className="text-red">*</span>
          </label>
          <input id="contact-name" name="name" type="text" required aria-required="true" placeholder="Your full name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-organisation" className={labelClass}>Organisation</label>
          <input id="contact-organisation" name="organisation" type="text" placeholder="School, institution, etc." className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email <span aria-hidden="true" className="text-red">*</span>
        </label>
        <input id="contact-email" name="email" type="email" required aria-required="true" placeholder="you@example.com" className={inputClass} />
      </div>
      <div>
        <label htmlFor="contact-subject" className={labelClass}>
          Subject <span aria-hidden="true" className="text-red">*</span>
        </label>
        <select id="contact-subject" name="subject" required aria-required="true" className={inputClass}>
          <option value="">Select a topic…</option>
          <option value="partnership">Partnership enquiry</option>
          <option value="teacher_training">Teacher training</option>
          <option value="platform">Using the Octopus platform</option>
          <option value="media">Media / Press</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message <span aria-hidden="true" className="text-red">*</span>
        </label>
        <textarea id="contact-message" name="message" required aria-required="true" rows={4} placeholder="How can we help you?" className={`${inputClass} resize-y`} />
      </div>
      <button type="submit" disabled={status === "loading"} className="self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-green text-purple-dark font-semibold text-sm transition-all hover:bg-green-dark hover:-translate-y-0.5 disabled:opacity-50">
        {status === "loading" ? "Sending..." : "Send Message"} <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
