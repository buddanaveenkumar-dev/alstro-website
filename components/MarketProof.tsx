"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export default function MarketProof() {
  return (
    <section className="py-24 lg:py-32 relative bg-surface">
      <div className="container-main reveal-stagger">
        <div className="reveal flex flex-col items-center text-center gap-3 mb-16">
          <p className="font-mono text-[13px] text-accent font-semibold uppercase tracking-wide">The alternative</p>
          <h2 className="max-w-[700px] text-text">
            Wait 15 days or intercept in 15 milliseconds.
          </h2>
        </div>

        <div className="reveal flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8 mb-16 relative max-w-[900px] mx-auto">
          
          {/* VS Badge */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-border rounded-full z-20 items-center justify-center font-mono font-bold text-text-3 text-[14px] shadow-sm">
            VS
          </div>

          {/* Left Card: Bridgeforce/Manual */}
          <div className="flex-1 bg-white rounded-2xl p-8 relative overflow-hidden border border-border border-t-4 border-t-red shadow-sm flex flex-col hover:-translate-y-1 transition-transform">
            <p className="font-mono text-[11px] text-red uppercase tracking-wider mb-3 font-semibold">Downstream</p>
            <p className="text-[24px] font-bold text-text mb-8 tracking-tight">Bridgeforce / Manual</p>
            
            <ul className="space-y-5 text-[15px] sm:text-[16px] text-text-2 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <XCircle size={20} className="text-red shrink-0 mt-0.5" />
                <span><strong className="text-text font-semibold">15+ days</strong> to catch errors in secondary review</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle size={20} className="text-red shrink-0 mt-0.5" />
                <span><strong className="text-text font-semibold">$10k+</strong> per model change in documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle size={20} className="text-red shrink-0 mt-0.5" />
                <span>Manual compliance checks via sampling</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle size={20} className="text-red shrink-0 mt-0.5" />
                <span>Scan Metro 2® data only after furnishing</span>
              </li>
            </ul>
          </div>

          <div className="flex lg:hidden w-12 h-12 mx-auto bg-white border border-border rounded-full z-20 items-center justify-center font-mono font-bold text-text-3 text-[14px]">
            VS
          </div>

          {/* Right Card: Alstro */}
          <div className="flex-1 bg-white rounded-2xl p-8 relative overflow-hidden border border-border border-t-4 border-t-green shadow-[0_8px_32px_rgba(16,185,129,0.08)] flex flex-col hover:-translate-y-1 transition-transform">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green/5 rounded-bl-[100px]" />
            <p className="font-mono text-[11px] text-green uppercase tracking-wider mb-3 font-bold">Upstream</p>
            <p className="text-[24px] font-bold text-text mb-8 tracking-tight relative z-10">Alstro</p>
            
            <ul className="space-y-5 text-[15px] sm:text-[16px] text-text-2 mb-8 flex-1 relative z-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green shrink-0 mt-0.5" />
                <span><strong className="text-text font-semibold">14ms</strong> decision interception latency</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green shrink-0 mt-0.5" />
                <span><strong className="text-text font-semibold">$0</strong> manual effort required</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green shrink-0 mt-0.5" />
                <span>Automated 100% enforcement capability</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green shrink-0 mt-0.5" />
                <span>Pre-execution blocking guarantees compliance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="reveal max-w-[800px] mx-auto bg-white border border-border p-6 rounded-lg shadow-sm text-center">
          <p className="text-[16px] text-text-2">
            Bridgeforce solved the <span className="font-bold text-text">downstream</span> problem. Alstro solves the <span className="font-bold text-text">upstream</span> problem. Generating proof at the point of decision eliminates the manual backend reconstruction.
          </p>
        </div>
      </div>
    </section>
  );
}
