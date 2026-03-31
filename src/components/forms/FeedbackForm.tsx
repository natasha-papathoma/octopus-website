"use client";

import { useState } from "react";

export default function FeedbackForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    try {
      const { submitFeedback } = await import("@/lib/strapi");
      await submitFeedback({
        name: fd.get("name") as string,
        role: fd.get("role") as string,
        email: fd.get("email") as string,
        feedback: fd.get("feedback") as string,
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
        <p className="text-sm text-text-mid">Your feedback helps us improve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-text-mid uppercase tracking-wider mb-1.5">Name</label>
          <input name="name" type="text" required placeholder="Full name" className="w-full px-4 py-3.5 rounded-lg border-2 border-cream-dark bg-cream text-text-dark text-sm outline-none transition-colors focus:border-purple" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-text-mid uppercase tracking-wider mb-1.5">Role</label>
          <select name="role" required className="w-full px-4 py-3.5 rounded-lg border-2 border-cream-dark bg-cream text-text-dark text-sm outline-none transition-colors focus:border-purple">
            <option value="">Select…</option>
            <option value="teacher">Teacher / Educator</option>
            <option value="student">Student</option>
            <option value="trainer">Trainer</option>
            <option value="parent">Parent</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-text-mid uppercase tracking-wider mb-1.5">Email</label>
        <input name="email" type="email" required placeholder="you@school.edu" className="w-full px-4 py-3.5 rounded-lg border-2 border-cream-dark bg-cream text-text-dark text-sm outline-none transition-colors focus:border-purple" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-text-mid uppercase tracking-wider mb-1.5">Feedback</label>
        <textarea name="feedback" required rows={4} placeholder="Tell us about your experience…" className="w-full px-4 py-3.5 rounded-lg border-2 border-cream-dark bg-cream text-text-dark text-sm outline-none transition-colors focus:border-purple resize-y" />
      </div>
      <button type="submit" disabled={status === "loading"} className="self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-green text-purple-dark font-semibold text-sm transition-all hover:bg-green-dark hover:-translate-y-0.5 disabled:opacity-50">
        {status === "loading" ? "Sending..." : "Submit Feedback"} <span>↗</span>
      </button>
    </form>
  );
}
