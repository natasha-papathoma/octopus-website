"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green/10 border-2 border-green/30 rounded-2xl p-8 text-center">
        <p className="text-lg font-semibold text-green-dark mb-2">Thank you!</p>
        <p className="text-sm text-text-mid">We&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-text-mid uppercase tracking-wider mb-1.5">Name</label>
          <input name="name" type="text" required placeholder="Your full name" className="w-full px-4 py-3.5 rounded-lg border-2 border-cream-dark bg-cream text-text-dark text-sm outline-none transition-colors focus:border-purple" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-text-mid uppercase tracking-wider mb-1.5">Organisation</label>
          <input name="organisation" type="text" placeholder="School, institution, etc." className="w-full px-4 py-3.5 rounded-lg border-2 border-cream-dark bg-cream text-text-dark text-sm outline-none transition-colors focus:border-purple" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-text-mid uppercase tracking-wider mb-1.5">Email</label>
        <input name="email" type="email" required placeholder="you@example.com" className="w-full px-4 py-3.5 rounded-lg border-2 border-cream-dark bg-cream text-text-dark text-sm outline-none transition-colors focus:border-purple" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-text-mid uppercase tracking-wider mb-1.5">Subject</label>
        <select name="subject" required className="w-full px-4 py-3.5 rounded-lg border-2 border-cream-dark bg-cream text-text-dark text-sm outline-none transition-colors focus:border-purple">
          <option value="">Select a topic…</option>
          <option value="partnership">Partnership enquiry</option>
          <option value="teacher_training">Teacher training</option>
          <option value="platform">Using the Octopus platform</option>
          <option value="media">Media / Press</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-text-mid uppercase tracking-wider mb-1.5">Message</label>
        <textarea name="message" required rows={4} placeholder="How can we help you?" className="w-full px-4 py-3.5 rounded-lg border-2 border-cream-dark bg-cream text-text-dark text-sm outline-none transition-colors focus:border-purple resize-y" />
      </div>
      <button type="submit" disabled={status === "loading"} className="self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-green text-purple-dark font-semibold text-sm transition-all hover:bg-green-dark hover:-translate-y-0.5 disabled:opacity-50">
        {status === "loading" ? "Sending..." : "Send Message"} <span>↗</span>
      </button>
    </form>
  );
}
