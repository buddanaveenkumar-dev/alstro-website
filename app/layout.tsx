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
  title: "Alstro AI — Execution Infrastructure for Regulated AI in Financial Services",
  description:
    "The missing execution layer that makes AI-driven financial decisions deployable in regulated environments. Explainability, audit trails, and compliance enforcement for platforms and lenders.",
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
    title: "Alstro AI — Execution Infrastructure for Regulated AI in Financial Services",
    description:
      "The execution layer that makes AI-driven financial decisions deployable in regulated environments.",
    type: "website",
    url: "https://alstro.ai",
    siteName: "Alstro AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alstro AI",
    description: "Execution infrastructure for regulated AI in financial services.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Alstro AI",
  applicationCategory: "BusinessApplication",
  description:
    "Execution infrastructure that makes AI-driven financial decisions deployable in regulated environments.",
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
