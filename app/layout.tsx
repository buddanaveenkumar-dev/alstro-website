import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alstro AI — Compliance Infrastructure for Underwriting Decisions",
  description:
    "Model-agnostic runtime that enforces compliance on every underwriting decision — adverse action notices, fair lending checks, and SR 11-7 governance. For fintech lenders, banks, and BaaS platforms.",
  keywords: [
    "underwriting compliance AI",
    "adverse action automation",
    "ECOA compliance",
    "fair lending monitoring",
    "SR 11-7 automation",
    "model risk management",
    "CFPB 2023-03",
    "regtech",
    "fintech compliance",
  ],
  metadataBase: new URL("https://alstro.ai"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Alstro AI — Compliance Infrastructure for Underwriting Decisions",
    description:
      "Model-agnostic compliance runtime for underwriting decisions. ECOA · FCRA · SR 11-7.",
    type: "website",
    url: "https://alstro.ai",
    siteName: "Alstro AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alstro AI",
    description: "Compliance infrastructure for underwriting decisions.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Alstro AI",
  applicationCategory: "BusinessApplication",
  description:
    "Model-agnostic compliance runtime that enforces ECOA, FCRA, and SR 11-7 compliance on every underwriting decision.",
  url: "https://alstro.ai",
  operatingSystem: "Cloud",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Beta program — request a demo",
  },
  creator: {
    "@type": "Organization",
    name: "Alstro AI Inc.",
    url: "https://alstro.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
