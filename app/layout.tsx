import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alstro — Provable AI Lending Decisions | Compliance Enforcement Layer",
  description: "Deploy AI lending models with cryptographic proof of compliance. Pre-execution enforcement for ECOA, FCRA, SR 11-7. Model-agnostic API with shadow pilot available.",
  keywords: "AI lending compliance, ECOA adverse action, FCRA compliance, credit decision AI, model governance SR 11-7, fair lending AI, regtech, fintech compliance infrastructure",
  metadataBase: new URL("https://alstro.ai"),
  alternates: { canonical: "https://alstro.ai" },
  openGraph: {
    title: "Alstro — Provable AI Lending Decisions",
    description: "The enforcement layer for AI lending. Cryptographic proof of compliance for every credit decision.",
    type: "website",
    url: "https://alstro.ai",
    siteName: "Alstro",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alstro — Provable AI Lending Decisions",
    description: "Cryptographic proof of compliance for every AI lending decision.",
    images: ["/api/og"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Alstro",
  applicationCategory: "BusinessApplication",
  description: "Compliance enforcement layer for AI-driven lending decisions. Pre-execution policy checks, explainability, audit trails, and deterministic replay.",
  operatingSystem: "Cloud/API",
  offers: { "@type": "Offer", category: "Enterprise" },
  creator: { "@type": "Organization", name: "Alstro AI", url: "https://alstro.ai" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-192.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FFFFFF" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
