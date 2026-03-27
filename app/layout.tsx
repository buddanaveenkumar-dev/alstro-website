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
  title: "Alstro AI — Compliance Infrastructure for Credit Decisions",
  description:
    "Model-agnostic runtime that makes every credit decision compliant, explainable, and audit-ready. Designed for fintech lenders, banks, and BaaS platforms.",
  keywords: [
    "credit compliance AI",
    "adverse action automation",
    "ECOA compliance",
    "fair lending monitoring",
    "SR 11-7 automation",
    "model risk management",
  ],
  openGraph: {
    title: "Alstro AI — Compliance Infrastructure for Credit Decisions",
    description:
      "Model-agnostic compliance runtime for credit decisions. ECOA · FCRA · SR 11-7.",
    type: "website",
    url: "https://alstro.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alstro AI",
    description: "Compliance infrastructure for credit decisions.",
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
      <body>{children}</body>
    </html>
  );
}
