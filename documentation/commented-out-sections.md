# Commented-Out Sections — Re-enable Guide

Some UI elements are temporarily commented out because the content/destinations they depend on don't exist yet. This doc lists each one and how to re-enable it.

Search the codebase for the marker comment `temporarily hidden` to find all of them quickly:

```sh
grep -rn "temporarily hidden" src/
```

---

## 1. Homepage hero CTA buttons — "I am a student" / "I am a teacher"

**File:** `src/app/page.tsx` (around lines 79–83)

**What's hidden:** The two pill buttons inside the hero section under the project tagline.

**Why hidden:** Both buttons currently point at `/about`, which isn't the right destination. There are no dedicated `/for-students` or `/for-teachers` landing pages yet.

**How to re-enable:**

1. Open `src/app/page.tsx`.
2. Find the comment `{/* Hero CTA buttons — temporarily hidden until target pages exist`.
3. Delete that opening comment line and the closing `*/}` line below the `</div>`.
4. Update each `<Link href="...">` to point to the correct destination:
   - "I am a student" → e.g., `/for-students` (or whichever page is built)
   - "I am a teacher" → e.g., `/for-teachers`
5. Save. Confirm visually at `/`.

---

## 2. Footer social media icons

**File:** `src/components/layout/Footer.tsx` (around lines 36–48)

**What's hidden:** The row of four social icon circles (`f`, `ig`, `in`, `▶`) under the Octopus tagline in the brand column.

**Why hidden:** All four `href`s are `"#"` — no real social accounts have been created/decided yet.

**How to re-enable:**

1. Open `src/components/layout/Footer.tsx`.
2. Find the comment `{/* Social links — temporarily hidden until real social accounts exist`.
3. Delete that opening comment line and the closing `*/}` line below the closing `</div>`.
4. Replace the placeholder icon strings (`["f", "ig", "in", "▶"]`) with proper labels or — better — inline SVG icons.
5. Replace each `href="#"` with the real social URL. Recommended pattern: hoist the data into a typed array so each icon, label, and URL live together:

   ```tsx
   const socials = [
     { label: "Facebook", href: "https://facebook.com/...", icon: "f" },
     { label: "Instagram", href: "https://instagram.com/...", icon: "ig" },
     { label: "LinkedIn", href: "https://linkedin.com/...", icon: "in" },
     { label: "YouTube", href: "https://youtube.com/...", icon: "▶" },
   ];
   ```

   Then map over `socials` instead of the icon array, and add `aria-label={s.label}` to each `<a>` for accessibility.
6. Save. Confirm visually in the footer of any page.

---

## Conventions

- Marker comment: every temporarily-hidden block opens with `{/* <Section name> — temporarily hidden until <reason> */}` so they're greppable.
- Keep the original JSX intact inside the comment — re-enabling should be a delete-two-lines + tweak operation, not a rewrite.
- When the underlying reason is resolved (target page exists, real URL available), re-enable promptly and remove this doc's entry. Stale "coming soon" UI erodes trust.

## Quick checklist for re-enabling any of the above

- [ ] Remove the opening `{/* ... temporarily hidden ...` comment line.
- [ ] Remove the closing `*/}` line.
- [ ] Replace placeholder `href`s / data with real values.
- [ ] Visually verify on `/` (homepage) and any page (footer).
- [ ] Run `npm run build` to confirm no broken types/links.
- [ ] Update or remove the corresponding section in this doc.
