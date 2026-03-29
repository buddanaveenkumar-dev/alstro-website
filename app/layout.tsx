import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alstro — Provable AI Lending Decisions",
  description:
    "The enforcement layer that makes every AI-driven lending decision compliant, explainable, and reproducible — before it executes.",
  keywords: [
    "AI lending compliance",
    "adverse action enforcement",
    "ECOA compliance",
    "FCRA litigation defense",
    "SR 11-7 automation",
    "CFPB 2023-03",
    "lending compliance infrastructure",
  ],
  metadataBase: new URL("https://alstro.ai"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Alstro — Provable AI Lending Decisions",
    description: "Enforcement layer for AI lending decisions. ECOA · FCRA · SR 11-7.",
    type: "website",
    url: "https://alstro.ai",
    siteName: "Alstro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alstro",
    description: "Your AI makes the decision. Alstro makes it provable.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Alstro",
  applicationCategory: "BusinessApplication",
  description: "Enforcement layer that makes every AI-driven lending decision provable before execution.",
  url: "https://alstro.ai",
  operatingSystem: "Cloud",
  creator: { "@type": "Organization", name: "Alstro AI Inc.", url: "https://alstro.ai" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
