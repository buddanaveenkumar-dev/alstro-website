import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alstro — Every AI lending decision, provable before it executes",
  description:
    "Enforcement layer that makes every AI-driven lending decision provable, compliant, and reproducible. ECOA adverse action, FCRA dispute resolution, SR 11-7 governance. Model-agnostic. Shadow pilot available.",
  keywords: [
    "AI lending compliance",
    "adverse action automation",
    "ECOA enforcement",
    "FCRA dispute investigation",
    "SR 11-7 automation",
    "AI credit decision audit",
    "CFPB 2023-03",
    "lending compliance infrastructure",
  ],
  metadataBase: new URL("https://alstro.ai"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Alstro — Every AI lending decision, provable before it executes",
    description: "Enforcement layer for AI-driven lending decisions. ECOA · FCRA · SR 11-7.",
    type: "website",
    url: "https://alstro.ai",
    siteName: "Alstro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alstro",
    description: "Every AI lending decision — provable before it executes.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Alstro",
  applicationCategory: "BusinessApplication",
  description: "Enforcement layer that makes every AI-driven lending decision provable, compliant, and reproducible before execution.",
  url: "https://alstro.ai",
  operatingSystem: "Cloud",
  creator: { "@type": "Organization", name: "Alstro AI Inc.", url: "https://alstro.ai" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
