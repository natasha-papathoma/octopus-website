import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/layout/GoogleAnalytics";
import { fallbackSiteSettings } from "@/lib/fallback-data";

export const metadata: Metadata = {
  title: "OCTOPUS — Inclusive Gamified Learning",
  description: "Offering Cross-disciplinary Training for Inclusive Preparation for School Exams. An Erasmus+ KA220-SCH project.",
};

async function getGaId(): Promise<string> {
  try {
    const { getSiteSettings } = await import("@/lib/strapi");
    const settings = await getSiteSettings();
    const data = settings.data;
    const attrs = data.attributes ? data.attributes : data;
    return attrs.ga_measurement_id || process.env.NEXT_PUBLIC_GA_ID || "";
  } catch {
    return fallbackSiteSettings.ga_measurement_id || process.env.NEXT_PUBLIC_GA_ID || "";
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = await getGaId();
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Geologica:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <GoogleAnalytics gaId={gaId} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
