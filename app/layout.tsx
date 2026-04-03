import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({ variable: "--font-heading", subsets: ["latin"], weight: ["700", "800"], display: "swap" });
const ibmPlexSans = IBM_Plex_Sans({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500"], display: "swap" });
const ibmPlexMono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400"], display: "swap" });

export const metadata: Metadata = {
  title: "Alstro — Decision Infrastructure for AI-Driven Lending",
  description: "API-based control layer for regulated lending. Policy evaluation, decision documentation, and audit-ready logging before downstream execution.",
  keywords: "AI lending governance, decision infrastructure, model risk, fair lending, adverse action, audit trail, regtech",
  metadataBase: new URL("https://alstro.ai"),
  alternates: { canonical: "https://alstro.ai" },
  openGraph: {
    title: "Alstro — Decision Infrastructure for AI-Driven Lending",
    description: "Runtime control layer for AI lending decisions. Policy evaluation, documentation, and audit-ready logging.",
    type: "website", url: "https://alstro.ai", siteName: "Alstro",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Alstro — Decision Infrastructure for AI-Driven Lending", description: "Runtime control and audit infrastructure for regulated lending.", images: ["/api/og"] },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Alstro",
  applicationCategory: "BusinessApplication",
  description: "Runtime control infrastructure for AI-driven lending decisions. API-based policy evaluation, decision documentation, and audit logging.",
  operatingSystem: "Cloud/API",
  offers: { "@type": "Offer", category: "Enterprise" },
  creator: { "@type": "Organization", name: "Alstro AI", url: "https://alstro.ai" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-192.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#07090F" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
