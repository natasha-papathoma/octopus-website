# OCTOPUS Website — Legal Pages

## Developer Instructions

Add two new pages to the Next.js project:

1. `/privacy` → `src/app/privacy/page.tsx`
2. `/gdpr` → `src/app/gdpr/page.tsx`

Both pages use the existing `PageHero` component with `bgColor="#443B5E"` (purple dark) and a "← Back to Home" link at the top. The footer already links to both pages.

Create the directories and copy the files from the attached ZIP, or create them manually using the text below.

```bash
mkdir -p src/app/privacy src/app/gdpr
```

After adding, push and deploy. No new dependencies or Strapi changes needed — these are static pages.

---

## Privacy Policy

**Route:** `/privacy`
**Hero:** "Privacy Policy" / "How we collect, use, and protect your personal data."
**Last updated:** April 2026

### 1. Who We Are

This website is operated as part of the OCTOPUS project (Offering Cross-disciplinary Training for Inclusive Preparation for School Exams), an Erasmus+ KA220-SCH Cooperation Partnership in School Education. Project reference number: KA220-SCH-063BB39C.

The project coordinator and data controller is the **Rogers Foundation for Person-Centred Education**, based in Budapest, Hungary. The project was submitted through HU01 — Tempus Public Foundation.

The project partnership includes Rogers Foundation (Hungary), Narratologies P.C. (Greece), Üsküdar District National Education (Türkiye), and Centre for Systems Solutions (Poland).

For any privacy-related enquiries, please contact us at: info@rogersalapitvany.hu

### 2. What Data We Collect

We collect personal data only when you voluntarily provide it through our website forms. This includes:

**Newsletter subscription:** your email address and the date you subscribed.

**Contact form:** your name, email address, organisation (optional), subject of enquiry, and message.

**Feedback form:** your name, email address, professional role (teacher, student, trainer, parent, or other), and feedback text.

**Website analytics:** we use Google Analytics 4 to collect anonymised usage data such as pages visited, time on site, device type, and approximate geographic location. This data does not identify you personally. See Section 6 for more details.

### 3. Why We Collect Your Data (Legal Basis)

We process your personal data based on the following legal grounds under Articles 6 and 9 of the EU General Data Protection Regulation (GDPR):

**Consent (Art. 6(1)(a) GDPR):** when you voluntarily submit a form on our website, you consent to us processing the data you provide for the stated purpose. You may withdraw your consent at any time by contacting us.

**Legitimate interest (Art. 6(1)(f) GDPR):** we use anonymised analytics data to improve our website and understand how our resources are being used. This serves the project's educational and dissemination objectives under the Erasmus+ programme.

### 4. How We Use Your Data

We use the data we collect for the following purposes only:

**Newsletter emails:** to send you project updates, resource announcements, and event invitations related to the OCTOPUS project.

**Responding to enquiries:** to answer questions submitted through the contact form.

**Project evaluation:** to collect and analyse feedback from teachers, students, and trainers as part of the project's quality assurance and reporting obligations under the Erasmus+ programme.

**Website improvement:** to understand how visitors use the website and improve the user experience.

We do not use your data for marketing purposes unrelated to the OCTOPUS project, and we never sell or rent your data to third parties.

### 5. Who Has Access to Your Data

Your data may be accessed by:

**OCTOPUS project partners:** Rogers Foundation (Hungary), Narratologies P.C. (Greece), Üsküdar District MEM (Türkiye), and Centre for Systems Solutions (Poland) — only for project-related purposes such as responding to your enquiry or processing feedback for project reports.

**Hosting providers:** our website is hosted on Vercel (frontend) and Render (CMS backend), both of which process data in accordance with their respective privacy policies and GDPR obligations. Data may be stored on servers in the EU or the United States, with appropriate safeguards in place.

**European Commission / Tempus Public Foundation:** aggregated, anonymised data may be included in project reports submitted to the Erasmus+ National Agency (Tempus Public Foundation, Hungary) and the European Commission as part of the project's contractual obligations. Individual personal data is not shared with these bodies.

### 6. Cookies and Analytics

This website uses Google Analytics 4 (GA4) to collect anonymised data about website usage. GA4 uses first-party cookies to distinguish unique users and sessions. The data collected includes pages visited, session duration, referral source, device type, and approximate location (country/city level).

GA4 is configured to anonymise IP addresses, and we do not enable Google Signals or any advertising features. No personally identifiable information is sent to Google Analytics.

You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on (https://tools.google.com/dlpage/gaoptout), or by adjusting your browser's cookie settings.

### 7. Data Retention

**Form submissions** (contact, feedback, newsletter) are retained for the duration of the OCTOPUS project (September 2025 – February 2028) and for up to 5 years after the project ends, as required by Erasmus+ programme rules for audit and evaluation purposes.

**Analytics data** is retained within Google Analytics for 14 months, after which it is automatically deleted.

You may request deletion of your data at any time (see Section 8).

### 8. Your Rights

Under the GDPR, you have the following rights regarding your personal data:

**Right of access:** you can request a copy of all personal data we hold about you.

**Right to rectification:** you can ask us to correct any inaccurate or incomplete data.

**Right to erasure:** you can ask us to delete your personal data at any time.

**Right to restrict processing:** you can ask us to temporarily stop processing your data while a complaint is being resolved.

**Right to data portability:** you can request your data in a structured, machine-readable format.

**Right to object:** you can object to data processing based on legitimate interest.

**Right to withdraw consent:** you can withdraw your consent at any time without affecting the lawfulness of processing carried out before withdrawal.

To exercise any of these rights, contact us at info@rogersalapitvany.hu. We will respond within 30 days.

If you believe your data protection rights have been violated, you have the right to lodge a complaint with your national data protection authority. In Hungary, this is the National Authority for Data Protection and Freedom of Information (NAIH) — https://www.naih.hu

### 9. Data Security

We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These measures include encrypted connections (HTTPS/TLS), access controls on our CMS and database systems, and regular review of security practices.

### 10. Children's Data

This website is intended for educators, trainers, and adult stakeholders. We do not knowingly collect personal data from children under the age of 16. If you believe a child has submitted personal data through our forms, please contact us and we will delete it promptly.

During the piloting phase of the OCTOPUS project, any data collected from students (including minors) will be processed in accordance with separate consent procedures, parental/guardian authorisation where required, and the ethical guidelines of the Erasmus+ programme.

### 11. International Data Transfers

The OCTOPUS partnership includes organisations in Hungary, Greece, Türkiye, and Poland. Personal data may be transferred between these countries for project-related purposes. For transfers to countries outside the European Economic Area (EEA), including Türkiye, we rely on appropriate safeguards such as Standard Contractual Clauses (SCCs) adopted by the European Commission, or your explicit consent.

Our hosting providers (Vercel, Render) may process data in the United States under Standard Contractual Clauses and/or the EU-US Data Privacy Framework.

### 12. Changes to This Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The "Last updated" date at the top of this page indicates when the most recent revision was made. We encourage you to review this page periodically.

### 13. Contact

For any questions about this Privacy Policy or the processing of your personal data, contact the project coordinator:

**Rogers Foundation for Person-Centred Education**
Budapest, Hungary
Email: info@rogersalapitvany.hu
Website: www.rogersalapitvany.hu

---

## GDPR Compliance

**Route:** `/gdpr`
**Hero:** "GDPR Compliance" / "Our commitment to data protection under the EU General Data Protection Regulation."
**Last updated:** April 2026

### Our Commitment

The OCTOPUS project (KA220-SCH-063BB39C) is fully committed to complying with the EU General Data Protection Regulation (Regulation 2016/679, "GDPR") and the applicable national data protection laws of all partner countries: Hungary, Greece, Türkiye, and Poland.

As an Erasmus+ co-funded project, we follow the data protection standards set by the European Commission and the Erasmus+ Programme Guide, ensuring that all personal data collected during the project lifecycle is processed lawfully, fairly, and transparently.

### Data Controller

Rogers Foundation for Person-Centred Education
Budapest, Hungary
Email: info@rogersalapitvany.hu
Website: www.rogersalapitvany.hu

Each partner organisation acts as a joint data processor for data collected and shared within the scope of the project activities.

### Principles We Follow

In accordance with Article 5 of the GDPR, we apply the following principles to all personal data processing:

**Lawfulness, fairness, and transparency:** we process data only on a valid legal basis (consent or legitimate interest), and we clearly inform individuals about how their data is used through this page and our Privacy Policy.

**Purpose limitation:** data is collected only for specific, explicit purposes related to the OCTOPUS project — communication, feedback collection, project evaluation, and dissemination. We never use data for unrelated purposes.

**Data minimisation:** we collect only the minimum amount of personal data necessary for each purpose. Our forms ask only for essential fields.

**Accuracy:** we take reasonable steps to ensure data is accurate and up to date. Users can request corrections at any time.

**Storage limitation:** personal data is retained only for as long as necessary to fulfil its purpose, and in accordance with Erasmus+ audit requirements (up to 5 years post-project). After that, data is securely deleted.

**Integrity and confidentiality:** we implement technical and organisational security measures to protect data against unauthorised access, loss, or destruction.

**Accountability:** the project coordinator maintains records of processing activities and ensures all partners comply with these principles.

### Data Processing Activities

The OCTOPUS project processes personal data in the following contexts:

**Website forms (contact, feedback, newsletter)**
Legal basis: Consent. Data collected: name, email, role, message/feedback. Purpose: communication, project evaluation, and dissemination. Retention: project duration + 5 years.

**Website analytics (Google Analytics 4)**
Legal basis: Legitimate interest. Data collected: anonymised usage data (pages, sessions, device, approximate location). Purpose: website improvement and impact measurement. Retention: 14 months.

**Teacher training and piloting (WP5)**
Legal basis: Consent. Data collected: names, contact details, professional information of participating teachers and trainers. Purpose: training coordination, evaluation, and certification. Retention: project duration + 5 years.

**Student pilot data (WP5)**
Legal basis: Consent (with parental/guardian authorisation for minors). Data collected: anonymised learning outcomes, feedback surveys. Purpose: methodology evaluation. Retention: project duration + 5 years. Individual student names are not collected through this website.

### Technical Measures

We protect personal data through the following technical and organisational measures:

**Encryption in transit:** all data transmitted between your browser and our servers is encrypted using TLS/HTTPS.

**Secure hosting:** our website frontend is hosted on Vercel and our CMS on Render, both of which maintain SOC 2 compliance and implement industry-standard security practices.

**Access control:** access to the content management system and database is restricted to authorised project team members only, with individual authentication credentials.

**API security:** all API communications between the website and CMS use scoped authentication tokens with the minimum required permissions (read-only for content, create-only for form submissions).

**Data backup:** database backups are maintained on encrypted storage with access restricted to the platform development partner (Narratologies P.C.).

### International Transfers

The OCTOPUS project involves four partner organisations across three EU member states (Hungary, Greece, Poland) and one EU candidate country (Türkiye). Personal data may be transferred between partner countries for legitimate project purposes.

For transfers to Türkiye, which is not currently within the European Economic Area, the partnership relies on Standard Contractual Clauses (SCCs) approved by the European Commission under Decision 2021/914.

Hosting services (Vercel, Render) may process data in the United States under the EU-US Data Privacy Framework and/or Standard Contractual Clauses.

### Your Rights Under GDPR

As a data subject, you have the right to:

- **Access** your personal data and obtain a copy.
- **Rectify** inaccurate or incomplete data.
- **Erase** your data ("right to be forgotten").
- **Restrict** processing of your data.
- **Port** your data to another service in a structured format.
- **Object** to processing based on legitimate interest.
- **Withdraw consent** at any time.

To exercise these rights, email info@rogersalapitvany.hu. We will respond within 30 days as required by Article 12 of the GDPR.

### Data Protection Authorities

If you believe your data protection rights have been violated, you may lodge a complaint with the supervisory authority in your country of residence:

- **Hungary:** National Authority for Data Protection and Freedom of Information (NAIH) — https://www.naih.hu
- **Greece:** Hellenic Data Protection Authority (HDPA) — https://www.dpa.gr
- **Poland:** Personal Data Protection Office (UODO) — https://uodo.gov.pl
- **Türkiye:** Personal Data Protection Authority (KVKK) — https://www.kvkk.gov.tr

### Erasmus+ Programme Obligations

As a project co-funded by the European Union under the Erasmus+ programme, OCTOPUS complies with the data protection obligations outlined in the Grant Agreement and the Erasmus+ Programme Guide. This includes maintaining records of processing activities, implementing data protection impact assessments where necessary, and ensuring that all dissemination activities respect the privacy of project participants.

The European Commission and the Tempus Public Foundation (National Agency) may request access to aggregated, anonymised project data for monitoring, evaluation, and audit purposes. Individual personal data is not shared with these bodies unless specifically required by law.

### Contact

For GDPR-related questions, data access requests, or complaints:

**Rogers Foundation for Person-Centred Education**
Budapest, Hungary
Email: info@rogersalapitvany.hu

---

*See also: Privacy Policy (/privacy) · Accessibility Statement (/accessibility)*
