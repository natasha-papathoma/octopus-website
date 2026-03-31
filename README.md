# 🐙 OCTOPUS Website

**Offering Cross-disciplinary Training for Inclusive Preparation for School Exams**

An Erasmus+ KA220-SCH project website built with Next.js 16, Tailwind CSS, and Strapi CMS.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000 — works immediately with fallback data (no Strapi needed).

## Tech Stack

- **Frontend**: Next.js 16 (App Router), TypeScript, Tailwind CSS
- **CMS**: Strapi v5 (headless)
- **Hosting**: Vercel (frontend) + Railway/Render (Strapi)
- **Analytics**: Google Analytics 4 (configurable from Strapi admin)
- **Game** (future): Phaser.js at /platform/game

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, partners, overview cards, target groups, gallery, news, newsletter, contact |
| `/research` | WP1–WP5 roadmap with timeline |
| `/library` | Resource library landing (3 cards) |
| `/library/ebook` | Octopus E-book (EN/HU/TR/PL downloads) |
| `/library/handbooks` | Teacher guide + video tutorials |
| `/library/good-practices` | Pilot stories and case studies |
| `/community` | Training of Trainers, TPM meetings, feedback form |
| `/news` | Blog listing (from Strapi or fallback) |
| `/news/[slug]` | Individual news post |
| `/about` | Erasmus+ info + partner bios |
| `/accessibility` | Accessibility statement |
| `/platform/game` | Phaser.js game placeholder |

## Strapi Setup

See STRAPI_SETUP.md for full content type definitions.

9 content types: News Post, Gallery Image, Partner, Resource Download, Event, Newsletter Subscriber, Contact Submission, Feedback Submission, Site Setting (single type for GA ID + social links).

## Environment Variables

Copy `.env.local.example` to `.env.local`:

| Variable | Description |
|----------|-------------|
| NEXT_PUBLIC_STRAPI_URL | Strapi API URL (default: http://localhost:1337) |
| STRAPI_API_TOKEN | Strapi API token |
| NEXT_PUBLIC_GA_ID | Fallback GA4 measurement ID |

## Deployment

1. Push to GitHub
2. Import in Vercel → add env vars → deploy
3. Redeployments don't affect analytics data or CMS content

## Brand: #E94F35 (red) · #0091D3 (blue) · #7C6EB0 (purple) · #443B5E (dark) · #A2C617 (green)
## Fonts: Geologica (headlines) · DM Sans (body)
