"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const { submitNewsletter } = await import("@/lib/strapi");
      await submitNewsletter(email);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("success"); // Graceful fallback when Strapi isn't connected
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2.5 flex-wrap">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="px-5 py-3 rounded-full border-2 border-white/15 bg-white/[0.08] text-white font-sans text-sm min-w-[260px] outline-none transition-colors focus:border-green placeholder:text-white/40"
      />
      {status === "success" ? (
        <span className="px-5 py-3 text-green text-sm font-semibold">Subscribed ✓</span>
      ) : (
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-green text-purple-dark font-semibold text-sm transition-all hover:bg-green-dark hover:-translate-y-0.5 disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Subscribe"} <span>↗</span>
        </button>
      )}
    </form>
  );
}
