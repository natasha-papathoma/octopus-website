"use client";

import { useEffect, useRef, useState } from "react";

const labelClass = "block text-sm font-semibold text-text-mid uppercase tracking-wider mb-1.5";
const inputClass = "w-full px-4 py-3.5 rounded-lg border-2 border-cream-dark bg-cream text-text-dark text-sm outline-none transition-colors focus:border-purple";

export default function FeedbackForm() {
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
      const { submitFeedback } = await import("@/lib/strapi");
      await submitFeedback({
        name: fd.get("name") as string,
        role: fd.get("role") as string,
        email: fd.get("email") as string,
        feedback: fd.get("feedback") as string,
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
        <p className="text-sm text-text-mid">Your feedback helps us improve.</p>
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
          <label htmlFor="feedback-name" className={labelClass}>
            Name <span aria-hidden="true" className="text-red">*</span>
          </label>
          <input id="feedback-name" name="name" type="text" required aria-required="true" placeholder="Full name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="feedback-role" className={labelClass}>
            Role <span aria-hidden="true" className="text-red">*</span>
          </label>
          <select id="feedback-role" name="role" required aria-required="true" className={inputClass}>
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
        <label htmlFor="feedback-email" className={labelClass}>
          Email <span aria-hidden="true" className="text-red">*</span>
        </label>
        <input id="feedback-email" name="email" type="email" required aria-required="true" placeholder="you@school.edu" className={inputClass} />
      </div>
      <div>
        <label htmlFor="feedback-text" className={labelClass}>
          Feedback <span aria-hidden="true" className="text-red">*</span>
        </label>
        <textarea id="feedback-text" name="feedback" required aria-required="true" rows={4} placeholder="Tell us about your experience…" className={`${inputClass} resize-y`} />
      </div>
      <button type="submit" disabled={status === "loading"} className="self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-green text-purple-dark font-semibold text-sm transition-all hover:bg-green-dark hover:-translate-y-0.5 disabled:opacity-50">
        {status === "loading" ? "Sending..." : "Submit Feedback"} <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
