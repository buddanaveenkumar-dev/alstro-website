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
    "Model-agnostic AI agents that make every underwriting decision ECOA-compliant, fair lending-tested, and SR 11-7 documented. For fintech lenders, community banks, and BaaS platforms.",
  keywords: [
    "underwriting compliance AI",
    "adverse action AI",
    "ECOA compliance",
    "fair lending monitoring",
    "SR 11-7 automation",
    "fintech compliance",
  ],
  openGraph: {
    title: "Alstro AI — Compliance Infrastructure for Underwriting Decisions",
    description:
      "AI agents for underwriting decision compliance. ECOA · FCRA · SR 11-7. Model-agnostic.",
    type: "website",
    url: "https://alstro.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alstro AI",
    description: "Compliance infrastructure for underwriting decisions.",
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
