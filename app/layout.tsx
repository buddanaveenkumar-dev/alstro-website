import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alstro AI — Compliance Infrastructure for Credit Decisions",
  description:
    "Model-agnostic AI agents that make every credit decision ECOA-compliant, fair lending-tested, and SR 11-7 documented. For fintech lenders, community banks, and BaaS platforms.",
  keywords: [
    "credit compliance AI",
    "adverse action AI",
    "ECOA compliance",
    "fair lending monitoring",
    "SR 11-7 automation",
    "fintech compliance",
  ],
  openGraph: {
    title: "Alstro AI — Compliance Infrastructure for Credit Decisions",
    description:
      "AI agents for credit decision compliance. ECOA · FCRA · SR 11-7. Model-agnostic. Deploys in 4 weeks.",
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
      className={`${dmSerif.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
