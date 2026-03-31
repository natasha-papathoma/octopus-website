#!/usr/bin/env node

/**
 * OCTOPUS — Strapi Auto-Setup Script
 * ====================================
 * 
 * This script automates the creation of all 9 content types in Strapi
 * and seeds initial data from the Erasmus+ proposal.
 * 
 * USAGE:
 *   1. Create your Strapi project first:
 *      npx create-strapi-app@latest octopus-cms --quickstart
 * 
 *   2. Wait for Strapi to start and create your admin account at:
 *      http://localhost:1337/admin
 * 
 *   3. Stop Strapi (Ctrl+C)
 * 
 *   4. Copy this script into the Strapi project root:
 *      cp setup-strapi.mjs octopus-cms/setup-strapi.mjs
 * 
 *   5. Run it:
 *      cd octopus-cms
 *      node setup-strapi.mjs
 * 
 *   6. Restart Strapi:
 *      npm run develop
 * 
 *   The script creates all content type schema files directly.
 *   After restarting, Strapi detects them and builds the API automatically.
 * 
 *   7. Then go to Admin → Settings → Users & Permissions → Roles → Public
 *      and set the permissions (the script will remind you).
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_DIR = path.join(__dirname, "src", "api");

// ─── Helpers ───

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeSchema(apiName, schema) {
  const dir = path.join(API_DIR, apiName, "content-types", apiName);
  ensureDir(dir);
  fs.writeFileSync(path.join(dir, "schema.json"), JSON.stringify(schema, null, 2));
  console.log(`  ✓ Created: ${apiName}`);
}

function writeRoute(apiName) {
  const dir = path.join(API_DIR, apiName, "routes");
  ensureDir(dir);
  fs.writeFileSync(
    path.join(dir, `${apiName}.js`),
    `'use strict';\nconst { createCoreRouter } = require('@strapi/strapi').factories;\nmodule.exports = createCoreRouter('api::${apiName}.${apiName}');\n`
  );
}

function writeController(apiName) {
  const dir = path.join(API_DIR, apiName, "controllers");
  ensureDir(dir);
  fs.writeFileSync(
    path.join(dir, `${apiName}.js`),
    `'use strict';\nconst { createCoreController } = require('@strapi/strapi').factories;\nmodule.exports = createCoreController('api::${apiName}.${apiName}');\n`
  );
}

function writeService(apiName) {
  const dir = path.join(API_DIR, apiName, "services");
  ensureDir(dir);
  fs.writeFileSync(
    path.join(dir, `${apiName}.js`),
    `'use strict';\nconst { createCoreService } = require('@strapi/strapi').factories;\nmodule.exports = createCoreService('api::${apiName}.${apiName}');\n`
  );
}

function createCollectionType(apiName, schema) {
  writeSchema(apiName, schema);
  writeRoute(apiName);
  writeController(apiName);
  writeService(apiName);
}

function createSingleType(apiName, schema) {
  writeSchema(apiName, schema);
  writeRoute(apiName);
  writeController(apiName);
  writeService(apiName);
}

// ─── Content Type Schemas ───

const schemas = {
  // 1. News Post
  "news-post": {
    kind: "collectionType",
    collectionName: "news_posts",
    info: { singularName: "news-post", pluralName: "news-posts", displayName: "News Post", description: "Blog posts and project updates" },
    options: { draftAndPublish: true },
    pluginOptions: {},
    attributes: {
      title: { type: "string", required: true },
      slug: { type: "uid", targetField: "title", required: true },
      body: { type: "richtext", required: true },
      date: { type: "date", required: true },
      thumbnail: { type: "media", multiple: false, required: false, allowedTypes: ["images"] },
    },
  },

  // 2. Gallery Image
  "gallery-image": {
    kind: "collectionType",
    collectionName: "gallery_images",
    info: { singularName: "gallery-image", pluralName: "gallery-images", displayName: "Gallery Image", description: "Project photo gallery" },
    options: { draftAndPublish: true },
    pluginOptions: {},
    attributes: {
      caption: { type: "string", required: true },
      image: { type: "media", multiple: false, required: true, allowedTypes: ["images"] },
      order: { type: "integer", default: 0 },
      featured: { type: "boolean", default: false },
    },
  },

  // 3. Partner
  partner: {
    kind: "collectionType",
    collectionName: "partners",
    info: { singularName: "partner", pluralName: "partners", displayName: "Partner", description: "Partnership organisations" },
    options: { draftAndPublish: true },
    pluginOptions: {},
    attributes: {
      name: { type: "string", required: true },
      country: { type: "string", required: true },
      role: { type: "string", required: true },
      bio: { type: "richtext", required: true },
      logo: { type: "media", multiple: false, required: false, allowedTypes: ["images"] },
      website: { type: "string" },
    },
  },

  // 4. Resource Download
  "resource-download": {
    kind: "collectionType",
    collectionName: "resource_downloads",
    info: { singularName: "resource-download", pluralName: "resource-downloads", displayName: "Resource Download", description: "Downloadable project outputs" },
    options: { draftAndPublish: true },
    pluginOptions: {},
    attributes: {
      title: { type: "string", required: true },
      category: {
        type: "enumeration",
        enum: ["ebook", "handbook", "video_tutorial", "good_practice", "pilot_report", "presentation", "spreadsheet", "infographic", "other"],
        required: true,
      },
      file_type: {
        type: "enumeration",
        enum: ["document", "image", "video", "presentation", "spreadsheet", "other"],
      },
      description: { type: "text" },
      file: { type: "media", multiple: false, required: false, allowedTypes: ["images", "files", "videos", "audios"] },
      language: {
        type: "enumeration",
        enum: ["en", "hu", "tr", "pl", "multilingual"],
      },
      published: { type: "boolean", default: false },
    },
  },

  // 5. Event
  event: {
    kind: "collectionType",
    collectionName: "events",
    info: { singularName: "event", pluralName: "events", displayName: "Event", description: "TPMs, training sessions, pilots" },
    options: { draftAndPublish: true },
    pluginOptions: {},
    attributes: {
      title: { type: "string", required: true },
      type: {
        type: "enumeration",
        enum: ["tpm", "tot", "pilot", "conference", "workshop", "webinar"],
        required: true,
      },
      location: { type: "string", required: true },
      date: { type: "date", required: true },
      description: { type: "richtext" },
    },
  },

  // 6. Newsletter Subscriber
  "newsletter-subscriber": {
    kind: "collectionType",
    collectionName: "newsletter_subscribers",
    info: { singularName: "newsletter-subscriber", pluralName: "newsletter-subscribers", displayName: "Newsletter Subscriber", description: "Newsletter email list" },
    options: { draftAndPublish: false },
    pluginOptions: {},
    attributes: {
      email: { type: "email", required: true, unique: true },
      subscribed_at: { type: "datetime" },
    },
  },

  // 7. Contact Submission
  "contact-submission": {
    kind: "collectionType",
    collectionName: "contact_submissions",
    info: { singularName: "contact-submission", pluralName: "contact-submissions", displayName: "Contact Submission", description: "Contact form entries" },
    options: { draftAndPublish: false },
    pluginOptions: {},
    attributes: {
      name: { type: "string", required: true },
      email: { type: "email", required: true },
      organisation: { type: "string" },
      subject: {
        type: "enumeration",
        enum: ["partnership", "teacher_training", "platform", "media", "other"],
      },
      message: { type: "text", required: true },
    },
  },

  // 8. Feedback Submission
  "feedback-submission": {
    kind: "collectionType",
    collectionName: "feedback_submissions",
    info: { singularName: "feedback-submission", pluralName: "feedback-submissions", displayName: "Feedback Submission", description: "Pilot feedback from teachers and students" },
    options: { draftAndPublish: false },
    pluginOptions: {},
    attributes: {
      name: { type: "string", required: true },
      role: {
        type: "enumeration",
        enum: ["teacher", "student", "trainer", "parent", "other"],
        required: true,
      },
      email: { type: "email", required: true },
      feedback: { type: "text", required: true },
    },
  },

  // 9. Site Setting (Single Type)
  "site-setting": {
    kind: "singleType",
    collectionName: "site_settings",
    info: { singularName: "site-setting", pluralName: "site-settings", displayName: "Site Setting", description: "Global site configuration (GA, social links)" },
    options: { draftAndPublish: false },
    pluginOptions: {},
    attributes: {
      ga_measurement_id: { type: "string" },
      site_title: { type: "string" },
      meta_description: { type: "text" },
      social_facebook: { type: "string" },
      social_instagram: { type: "string" },
      social_linkedin: { type: "string" },
      social_youtube: { type: "string" },
    },
  },
};

// ─── Seed Data ───

const seedData = {
  partners: [
    {
      name: "Rogers Foundation for Person-Centred Education",
      country: "Hungary",
      role: "Project Coordinator",
      bio: "Founded in 2005. Maintains the Rogers Academy for secondary students outside the traditional system. 24+ Erasmus+ projects, 60+ educational projects. Experts in person-centred education, emotional intelligence, drama pedagogy, and SEL. The team includes counsellors, psychologists, language teachers, and trained drama pedagogists.",
      website: "https://www.rogersalapitvany.hu",
    },
    {
      name: "Narratologies P.C.",
      country: "Greece",
      role: "Platform Development Lead",
      bio: "A female-led startup certified by the Greek National Bureau of Innovation. Specialises in gamified experiences, AR/VR applications, AI-powered content, and interactive storytelling. Forbes 30 under 30 alumni. Partners include TUI, GetYourGuide, and Viator. Building the student portal and teacher back office.",
      website: "https://narratologies.com",
    },
    {
      name: "Üsküdar District National Education",
      country: "Türkiye",
      role: "Teacher Training Lead",
      bio: "Established in 1926. Manages 342 public and 136 private schools with 168,000 students and 7,200+ teachers in Istanbul's oldest district. Includes special education schools for SEN students and schools for the visually impaired. Coordinates 12 national and 4 European projects.",
      website: "https://www.uskudar.meb.gov.tr",
    },
    {
      name: "Centre for Systems Solutions (CRS)",
      country: "Poland",
      role: "Gamification Design Lead",
      bio: "Non-profit established in 2005 with 20 years developing serious games and social simulations played by 6,000+ people annually. Clients include the European Commission, OECD, and African Development Bank. Runs games4sustainability.org and learn.socialsimulations.org platforms.",
      website: "https://systemssolutions.org",
    },
  ],
  events: [
    { title: "TPM1 — Kick-off Meeting", type: "tpm", location: "Budapest, Hungary", date: "2025-09-15", description: "Establish interpersonal connections, clarify roles and responsibilities, visit Rogers Academy in action. Sign Cooperation Agreement." },
    { title: "TPM2 — Mid-Project Meeting", type: "tpm", location: "Wrocław, Poland", date: "2026-11-01", description: "Finalise gamification concept, game mechanics, and platform integration plan. Present WP3 results and plan WP4 implementation." },
    { title: "Training of Trainers (ToT)", type: "tot", location: "Istanbul, Türkiye", date: "2027-07-01", description: "20–25 teachers from all partner countries receive hands-on training on the Octopus platform, gamified methodology, and inclusive teaching strategies." },
    { title: "TPM4 — Final Conference", type: "conference", location: "Athens, Greece", date: "2028-02-01", description: "Evaluate the full project, review outcomes and impact, discuss sustainability and future collaborations. Hosted by Narratologies." },
  ],
  newsPosts: [
    { title: "Octopus officially launches in Budapest", slug: "octopus-launches-budapest", body: "The four partner organisations — Rogers Foundation, Narratologies, Üsküdar MEM, and Centre for Systems Solutions — gathered in Budapest for the kick-off meeting. The team visited Rogers Academy to see person-centred education in action, aligned on the project vision, and signed the Cooperation Agreement.", date: "2025-09-15" },
    { title: "Concept revision & e-book writing begins", slug: "concept-revision-begins", body: "Rogers Foundation leads WP2, revisiting the Octopus framework: the historical eras, eight thematic aspects ('legs'), and keywords. Partners contribute international perspectives to ensure the structure works across educational contexts in Hungary, Greece, Türkiye, and Poland.", date: "2025-10-01" },
    { title: "Game design kicks off in Wrocław", slug: "game-design-kicks-off", body: "CRS begins WP3 — designing the gamification framework including templates for teachers, engagement challenges for students, and wireframes for the platform's user interface and experience. An iterative design approach with internal and external testing rounds ensures quality.", date: "2025-11-01" },
  ],
};

// ─── Create Seed Script ───

function createSeedScript() {
  const seedDir = path.join(__dirname, "scripts");
  ensureDir(seedDir);

  const script = `'use strict';

/**
 * Seed script — run AFTER Strapi has started with the new content types.
 * 
 * Usage:
 *   1. Start Strapi: npm run develop
 *   2. Set permissions in Admin (see below)
 *   3. Create an API token in Admin → Settings → API Tokens
 *   4. Run: STRAPI_TOKEN=your_token_here node scripts/seed.js
 */

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const TOKEN = process.env.STRAPI_TOKEN;

if (!TOKEN) {
  console.error('\\n❌ Missing STRAPI_TOKEN environment variable.');
  console.error('   Create an API token in Strapi Admin → Settings → API Tokens');
  console.error('   Then run: STRAPI_TOKEN=your_token node scripts/seed.js\\n');
  process.exit(1);
}

const headers = {
  'Content-Type': 'application/json',
  'Authorization': \`Bearer \${TOKEN}\`,
};

async function post(endpoint, data) {
  const res = await fetch(\`\${STRAPI_URL}/api/\${endpoint}\`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ data }),
  });
  if (!res.ok) {
    const err = await res.text();
    console.error(\`  ✗ Failed: \${endpoint} — \${res.status} \${err}\`);
    return null;
  }
  return res.json();
}

async function put(endpoint, data) {
  const res = await fetch(\`\${STRAPI_URL}/api/\${endpoint}\`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ data }),
  });
  if (!res.ok) {
    const err = await res.text();
    console.error(\`  ✗ Failed: \${endpoint} — \${res.status} \${err}\`);
    return null;
  }
  return res.json();
}

async function seed() {
  console.log('\\n🐙 Seeding OCTOPUS Strapi data...\\n');

  // Partners
  console.log('Partners:');
  const partners = ${JSON.stringify(seedData.partners, null, 2)};
  for (const p of partners) {
    const res = await post('partners', { ...p, publishedAt: new Date().toISOString() });
    if (res) console.log(\`  ✓ \${p.name}\`);
  }

  // Events
  console.log('\\nEvents:');
  const events = ${JSON.stringify(seedData.events, null, 2)};
  for (const e of events) {
    const res = await post('events', { ...e, publishedAt: new Date().toISOString() });
    if (res) console.log(\`  ✓ \${e.title}\`);
  }

  // News Posts
  console.log('\\nNews Posts:');
  const posts = ${JSON.stringify(seedData.newsPosts, null, 2)};
  for (const n of posts) {
    const res = await post('news-posts', { ...n, publishedAt: new Date().toISOString() });
    if (res) console.log(\`  ✓ \${n.title}\`);
  }

  // Site Settings
  console.log('\\nSite Settings:');
  const settings = {
    ga_measurement_id: '',
    site_title: 'OCTOPUS — Inclusive Gamified Learning',
    meta_description: 'Offering Cross-disciplinary Training for Inclusive Preparation for School Exams. An Erasmus+ KA220-SCH project.',
    social_facebook: '',
    social_instagram: '',
    social_linkedin: '',
    social_youtube: '',
  };
  const res = await put('site-setting', settings);
  if (res) console.log('  ✓ Site settings configured');

  console.log('\\n✅ Seeding complete!\\n');
  console.log('Next steps:');
  console.log('  1. Check your content in Strapi Admin → Content Manager');
  console.log('  2. Start your Next.js frontend: cd ../octopus-website && npm run dev');
  console.log('  3. Add your GA measurement ID in Strapi → Site Setting\\n');
}

seed().catch(console.error);
`;

  fs.writeFileSync(path.join(seedDir, "seed.js"), script);
  console.log("  ✓ Created: scripts/seed.js");
}

// ─── Main ───

console.log("\n🐙 OCTOPUS Strapi Setup\n");
console.log("Creating content types...\n");

// Check we're in a Strapi project
if (!fs.existsSync(path.join(__dirname, "package.json"))) {
  console.error("❌ Run this script from your Strapi project root directory.");
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json"), "utf8"));
if (!pkg.dependencies?.["@strapi/strapi"]) {
  console.error("❌ This doesn't look like a Strapi project. Run from your octopus-cms folder.");
  process.exit(1);
}

// Create all content types
for (const [apiName, schema] of Object.entries(schemas)) {
  if (schema.kind === "singleType") {
    createSingleType(apiName, schema);
  } else {
    createCollectionType(apiName, schema);
  }
}

// Create seed script
console.log("\nCreating seed script...\n");
createSeedScript();

console.log("\n✅ All content types created!\n");
console.log("═══════════════════════════════════════════");
console.log("  NEXT STEPS:");
console.log("═══════════════════════════════════════════");
console.log("");
console.log("  1. Start Strapi:");
console.log("     npm run develop");
console.log("");
console.log("  2. Open Admin Panel:");
console.log("     http://localhost:1337/admin");
console.log("");
console.log("  3. Set API Permissions:");
console.log("     Settings → Users & Permissions → Roles → Public");
console.log("");
console.log("     ALLOW find + findOne on:");
console.log("       • News Post");
console.log("       • Gallery Image");
console.log("       • Partner");
console.log("       • Resource Download");
console.log("       • Event");
console.log("       • Site Setting");
console.log("");
console.log("     ALLOW create on:");
console.log("       • Newsletter Subscriber");
console.log("       • Contact Submission");
console.log("       • Feedback Submission");
console.log("");
console.log("  4. Create an API Token:");
console.log("     Settings → API Tokens → Create new");
console.log("     Name: Frontend | Type: Full access");
console.log("     Copy the token!");
console.log("");
console.log("  5. Seed initial data:");
console.log("     STRAPI_TOKEN=your_token node scripts/seed.js");
console.log("");
console.log("  6. Connect to Next.js frontend:");
console.log("     Edit octopus-website/.env.local:");
console.log("     NEXT_PUBLIC_STRAPI_URL=http://localhost:1337");
console.log("     STRAPI_API_TOKEN=your_token");
console.log("");
console.log("═══════════════════════════════════════════\n");
