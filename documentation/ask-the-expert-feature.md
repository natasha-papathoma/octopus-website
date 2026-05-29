# Ask the Expert — Implementation Guide

Implementation guide for the moderated Q&A feature on the Community page. This is a deferred build — use this doc when you're ready to ship it.

## What it is

A moderated Q&A section on `/community` where:
- Educators submit questions about implementing the Octopus methodology in diverse classrooms via a form.
- The team reviews submissions privately in Strapi, drafts answers, and publishes the most relevant Q&As.
- Published Q&As display on the same Community page as an accordion (click a question to reveal the answer inline).

The goal: high-quality expert guidance + sense of collaboration, without the risks of an open unmoderated forum.

## Architecture decisions (already approved)

| Decision | Choice | Rationale |
|---|---|---|
| Placement | New section on `/community` (no new route) | Keeps Community page as the one community hub |
| Display | Accordion list (Q→A inline) | Compact, browseable, accessible via native `<details>` |
| Backend | Strapi CMS (two content types) | Matches existing News/Contact/Feedback pattern, no new infra |
| Anti-spam | Honeypot only | Human moderation is the real filter — keep UX friction zero |

## Strapi setup (do this first)

Create two new content types in the Strapi admin.

### Content type 1: `question-submission` (private, raw inbox)

Never publicly readable. Public role gets **create** permission only.

| Field | Type | Required | Notes |
|---|---|---|---|
| `name` | Text | yes | Submitter's name |
| `email` | Email | yes | For follow-up |
| `role` | Enum | yes | `teacher`, `trainer`, `parent`, `sen_coordinator`, `other` |
| `country` | Enum | no | `HU`, `GR`, `TR`, `PL`, `other` |
| `topic` | Enum | yes | `methodology`, `sen_adaptations`, `platform`, `classroom_implementation`, `assessment`, `other` |
| `question` | Long text | yes | The actual question |
| `consent_to_publish` | Boolean | no, default false | Submitter ticked the "OK to publish anonymously" box |

Strapi → Settings → Roles → Public → `question-submission`: enable **create** only. Leave `find`/`findOne` disabled.

### Content type 2: `q-and-a` (public read, draft/publish enabled)

This is the curated, displayed Q&A. Use Strapi's built-in draft/publish workflow — only published entries render on the site.

| Field | Type | Required | Notes |
|---|---|---|---|
| `question` | Long text | yes | Cleaned/paraphrased version of the question (you edit this) |
| `answer` | Rich text (Markdown) | yes | The team's answer |
| `expert_name` | Text | yes | e.g., "Dr Jane Smith" |
| `expert_role` | Text | yes | e.g., "Methodology Lead, Rogers Foundation" |
| `topic` | Enum | yes | Same options as the submission's `topic` |
| `date_answered` | Date | yes | Drives sort order on the site |
| `slug` | UID (target: `question`) | yes | Enables future detail pages / `#anchor` links |
| `featured` | Boolean | no, default false | Pin to top of the list |

Strapi → Settings → Roles → Public → `q-and-a`: enable **find** and **findOne**.

## Code changes

### 1. Types — `src/types/strapi.ts`

Append:

```ts
export type QATopic =
  | "methodology"
  | "sen_adaptations"
  | "platform"
  | "classroom_implementation"
  | "assessment"
  | "other";

export interface QuestionSubmission {
  name: string;
  email: string;
  role: "teacher" | "trainer" | "parent" | "sen_coordinator" | "other";
  country?: "HU" | "GR" | "TR" | "PL" | "other";
  topic: QATopic;
  question: string;
  consent_to_publish: boolean;
}

export interface QAndA {
  question: string;
  answer: string;
  expert_name: string;
  expert_role: string;
  topic: QATopic;
  date_answered: string;
  slug: string;
  featured?: boolean;
}
```

### 2. Strapi helpers — `src/lib/strapi.ts`

Reuses existing `fetchAPI` (~line 38) and `postAPI` (~line 60). Add the imports at the top of the file, then add these two functions:

```ts
// add after getEvents (~line 125)
export async function getQAndAs(): Promise<StrapiResponse<QAndA>> {
  return fetchAPI<StrapiResponse<QAndA>>(
    "/q-and-as?sort[0]=featured:desc&sort[1]=date_answered:desc",
    { tags: ["qanda"] }
  );
}

// add after submitFeedback (~line 160)
export async function submitQuestion(data: QuestionSubmission) {
  return postAPI("/question-submissions", data);
}
```

### 3. New form — `src/components/forms/AskExpertForm.tsx`

Client component. Copy the structure of `src/components/forms/FeedbackForm.tsx` exactly — same Tailwind tokens, same `useState<"idle" | "loading" | "success">` pattern, same graceful-success error handling.

Fields:
- **Name** — `<input type="text">`, required
- **Email** — `<input type="email">`, required, with helper text "We'll only use this to follow up with you directly"
- **Role** — `<select>`, required (Teacher / Trainer / Parent / SEN coordinator / Other)
- **Country** — `<select>`, optional (Hungary / Greece / Türkiye / Poland / Other)
- **Topic** — `<select>`, required (Methodology / SEN adaptations / Platform / Classroom implementation / Assessment / Other)
- **Question** — `<textarea rows={5}>`, required, placeholder "What would you like to ask the team?"
- **Consent checkbox** — NOT required to submit; label: "I agree my question may be published anonymously alongside the team's answer." Unchecked default.
- **Honeypot** — hidden `<input name="website">` with `aria-hidden`, `tabIndex={-1}`, off-screen positioning. If the value is non-empty on submit, the handler returns success **without** POSTing.

Submit handler:
```ts
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus("loading");
  const fd = new FormData(e.currentTarget);
  if (fd.get("website")) { setStatus("success"); return; } // honeypot tripped
  try {
    const { submitQuestion } = await import("@/lib/strapi");
    await submitQuestion({
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      role: fd.get("role") as QuestionSubmission["role"],
      country: (fd.get("country") as QuestionSubmission["country"]) || undefined,
      topic: fd.get("topic") as QATopic,
      question: fd.get("question") as string,
      consent_to_publish: fd.get("consent") === "on",
    });
    setStatus("success");
  } catch {
    setStatus("success");
  }
};
```

Success state: copy `FeedbackForm.tsx:26-33`, change text to "Thanks — we'll review your question within a few days. If we publish it, we'll let you know first."

### 4. New display component — `src/components/community/AskExpertAccordion.tsx`

Async **server** component (no `"use client"`). Renders nothing if `getQAndAs()` returns an empty array.

Skeleton:
```tsx
export default async function AskExpertAccordion() {
  let items: QAndA[] = [];
  try {
    const res = await getQAndAs();
    items = res.data?.map((i) => i.attributes ? { ...i.attributes } : i) ?? [];
  } catch {
    items = fallbackQAndAs; // hardcoded sample, defined in src/lib/fallback-data.ts
  }
  if (items.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      {items.map((q) => (
        <details key={q.slug} className="group rounded-2xl bg-off-white p-6 transition-all hover:shadow-[0_8px_24px_rgba(68,59,94,0.06)]">
          <summary className="flex items-center gap-3 cursor-pointer list-none">
            <span className={`text-[0.6rem] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-cream ${topicColor(q.topic)}`}>
              {topicLabel(q.topic)}
            </span>
            <span className="font-semibold text-sm flex-1">{q.question}</span>
            <span className="text-purple transition-transform group-open:rotate-180">▾</span>
          </summary>
          <div className="mt-4 text-sm text-text-mid leading-relaxed whitespace-pre-wrap">{q.answer}</div>
          <p className="mt-3 text-xs italic text-text-light">— {q.expert_name}, {q.expert_role} · {new Date(q.date_answered).toLocaleDateString()}</p>
        </details>
      ))}
    </div>
  );
}
```

Helpers `topicColor` / `topicLabel` are small switches mapping each `QATopic` to a Tailwind text-color class and a human label (e.g., `"sen_adaptations"` → "SEN Adaptations"). Use the existing palette: `text-purple`, `text-red`, `text-blue`, `text-green-dark`, `text-text-mid`.

For rendering Markdown answers later: lift the `renderBody` helper currently at `src/app/news/[slug]/page.tsx:28` into `src/lib/render-body.tsx` and reuse here. For v1, `whitespace-pre-wrap` is fine.

Add a small fallback array to `src/lib/fallback-data.ts` so the section stays populated when Strapi is unreachable.

### 5. Community page — `src/app/community/page.tsx`

Add imports at the top:
```ts
import AskExpertForm from "@/components/forms/AskExpertForm";
import AskExpertAccordion from "@/components/community/AskExpertAccordion";
```

Insert between the TPM section (currently ends ~line 46) and the Feedback section (~line 48):

```tsx
{/* Ask the Expert */}
<section className="px-12 pb-24 max-w-[1300px] mx-auto">
  <SectionHeader
    tag="Ask the Expert"
    title="Moderated Q&A"
    description="Submit your questions about implementing Octopus in your classroom. Our team reviews and answers the most relevant ones — published here as a growing knowledge base."
  />
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <AskExpertForm />
    <AskExpertAccordion />
  </div>
</section>
```

## Files touched

| File | Action |
|---|---|
| `src/types/strapi.ts` | Append types |
| `src/lib/strapi.ts` | Append `getQAndAs` + `submitQuestion` |
| `src/lib/fallback-data.ts` | Append `fallbackQAndAs` array |
| `src/components/forms/AskExpertForm.tsx` | **New** |
| `src/components/community/AskExpertAccordion.tsx` | **New** |
| `src/app/community/page.tsx` | Insert new section + imports |
| Strapi admin | Create 2 content types + set permissions |

## Verification

1. Both Strapi content types exist with the fields above, and permissions are set correctly.
2. Publish at least one sample `q-and-a` in Strapi.
3. `npm run dev` → `http://localhost:3000/community` — confirm "Moderated Q&A" section appears between TPMs and Share Your Experience.
4. Click an accordion item → the answer expands with expert credit visible.
5. Submit the form with valid data → success message appears, entry shows up in Strapi → Content Manager → `question-submissions`.
6. In DevTools, set the hidden `website` input to any value, then submit → success message appears but no entry is created in Strapi.
7. Stop the local Strapi → reload `/community` → page still renders with the fallback Q&A (no crash, no empty state).
8. `npm run build` passes with no type errors.

## Future enhancements (out of scope for v1)

- Cloudflare Turnstile if spam volume in `question-submissions` becomes painful.
- Detail page at `/community/ask-the-expert/[slug]` once enough Q&As exist to warrant deep-links.
- Topic filter chips above the accordion.
- Email notification to the team when a new `question-submission` is created (Strapi webhook → Resend or similar).
- Search across published Q&As.
