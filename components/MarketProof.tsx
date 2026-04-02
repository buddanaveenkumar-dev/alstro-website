"use client";

import { CheckCircle2, XCircle } from "lucide-react";

export default function MarketProof() {
  return (
    <section className="py-[100px] max-md:py-[60px] bg-surface" aria-labelledby="market-heading">
      <div className="container-main">
        <div className="reveal text-center mb-16">
          <p className="font-mono text-[13px] text-accent font-semibold uppercase tracking-[0.08em] mb-4">Market validation</p>
          <h2 id="market-heading" className="max-w-[700px] mx-auto">
            Bridgeforce proved the market. Alstro solves the problem they cannot.
          </h2>
        </div>

        {/* Side-by-side comparison */}
        <div className="reveal grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto mb-12">

          {/* Left: Bridgeforce — neutral/muted */}
          <div className="bg-white rounded-2xl p-8 border border-border border-l-4 border-l-border relative">
            <p className="font-mono text-[12px] text-text-3 uppercase tracking-wider mb-2 font-semibold">Downstream</p>
            <h3 className="text-[22px] text-text-2 mb-6">Bridgeforce Data Solutions</h3>
            <ul className="space-y-4 text-[15px] text-text-2">
              <li className="flex items-start gap-3">
                <XCircle size={18} className="text-text-3 shrink-0 mt-0.5" aria-hidden="true" />
                ~$20M revenue over 10 years
              </li>
              <li className="flex items-start gap-3">
                <XCircle size={18} className="text-text-3 shrink-0 mt-0.5" aria-hidden="true" />
                50+ financial institution clients
              </li>
              <li className="flex items-start gap-3">
                <XCircle size={18} className="text-text-3 shrink-0 mt-0.5" aria-hidden="true" />
                6 of top 20 banks, 7 of top 10 credit unions
              </li>
              <li className="flex items-start gap-3">
                <XCircle size={18} className="text-text-3 shrink-0 mt-0.5" aria-hidden="true" />
                Scans Metro 2® data after furnishing
              </li>
              <li className="flex items-start gap-3">
                <XCircle size={18} className="text-text-3 shrink-0 mt-0.5" aria-hidden="true" />
                Entire business case: FCRA litigation growth
              </li>
            </ul>
          </div>

          {/* Right: Alstro — wins visually */}
          <div className="bg-white rounded-2xl p-8 border-2 border-accent relative shadow-[0_0_24px_rgba(0,201,139,0.08)] bg-gradient-to-br from-accent-light/30 to-white border-l-4 border-l-accent">
            <p className="font-mono text-[12px] text-accent uppercase tracking-wider mb-2 font-bold">Upstream</p>
            <h3 className="text-[22px] text-text mb-6">Alstro</h3>
            <ul className="space-y-4 text-[15px] text-text">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                Generates provable record before errors reach the bureau
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                Pre-execution enforcement, not post-furnishing scanning
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                Complementary — not competitive
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                Their customer base is our initial market
              </li>
            </ul>
          </div>
        </div>

        {/* Concluding paragraph */}
        <div className="reveal max-w-[700px] mx-auto text-center">
          <p className="text-[17px] text-text-2 leading-relaxed">
            Bridgeforce validated that financial institutions will pay to reduce FCRA exposure. They built $20M doing it downstream.{" "}
            <span className="text-text font-semibold">The upstream problem — generating proof at the point of decision — is what they cannot solve.</span>{" "}
            That is Alstro.
          </p>
        </div>
      </div>
    </section>
  );
}
