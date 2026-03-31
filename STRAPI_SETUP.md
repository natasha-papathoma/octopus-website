# Strapi Content Type Definitions
# ================================
# Use these to set up your Strapi instance.
# Create each as a Collection Type (except Site Setting which is a Single Type).

## 1. News Post (Collection Type)
- title: Short text (required)
- slug: UID (attached to title, required)
- body: Rich text / Markdown (required)
- date: Date (required)
- thumbnail: Media (single image)

## 2. Gallery Image (Collection Type)
- caption: Short text (required)
- image: Media (single image, required)
- order: Integer (default: 0)
- featured: Boolean (default: false)

## 3. Partner (Collection Type)
- name: Short text (required)
- country: Short text (required)
- role: Short text (required)
- bio: Rich text (required)
- logo: Media (single image)
- website: Short text

## 4. Resource Download (Collection Type)
- title: Short text (required)
- category: Enumeration (ebook, handbook, video_tutorial, good_practice, pilot_report, presentation, spreadsheet, infographic, other)
- file_type: Enumeration (document, image, video, presentation, spreadsheet, other)
- description: Text
- file: Media (single file — accepts any format: PDF, PPTX, XLSX, CSV, images, video, etc.)
- language: Enumeration (en, hu, tr, pl, multilingual)
- published: Boolean (default: false)

## 5. Event (Collection Type)
- title: Short text (required)
- type: Enumeration (tpm, tot, pilot, conference, workshop, webinar)
- location: Short text (required)
- date: Date (required)
- description: Rich text

## 6. Newsletter Subscriber (Collection Type)
- email: Email (required, unique)
- subscribed_at: Datetime

## 7. Contact Submission (Collection Type)
- name: Short text (required)
- email: Email (required)
- organisation: Short text
- subject: Enumeration (partnership, teacher_training, platform, media, other)
- message: Long text (required)

## 8. Feedback Submission (Collection Type)
- name: Short text (required)
- role: Enumeration (teacher, student, trainer, parent, other)
- email: Email (required)
- feedback: Long text (required)

## 9. Site Setting (Single Type)
- ga_measurement_id: Short text
- site_title: Short text
- meta_description: Text
- social_facebook: Short text
- social_instagram: Short text
- social_linkedin: Short text
- social_youtube: Short text

# API Permissions
# ===============
# In Strapi Admin → Settings → Roles → Public:
# - Allow `find` and `findOne` on: News Post, Gallery Image, Partner, Resource Download, Event, Site Setting
# - Allow `create` on: Newsletter Subscriber, Contact Submission, Feedback Submission
# - Block everything else for Public role

# Deployment Notes
# ================
# Frontend: Vercel (connect GitHub repo, set env vars)
# Strapi: Railway, Render, or any VPS with Node.js 18+
# Database: PostgreSQL recommended for production (SQLite fine for dev)
# Media: Strapi local uploads or Cloudinary/AWS S3 for production
