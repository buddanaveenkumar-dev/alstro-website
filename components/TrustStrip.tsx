"use client";

import { CheckCircle2 } from "lucide-react";

const badges = [
  "ECOA Compliant", "FCRA Ready", "SR 11-7 Documented", "TILA Enforced",
  "UDAAP Checked", "OCC Exam-Ready", "CFPB Exam-Ready", "Cryptographic Audit",
];

function BadgeItem({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[0.05em] text-text-2 border border-border bg-white rounded-full px-4 py-1.5 whitespace-nowrap select-none">
      <CheckCircle2 size={14} className="text-accent shrink-0" aria-hidden="true" />
      {text}
    </span>
  );
}

export default function TrustStrip() {
  return (
    <section className="py-16 bg-bg" aria-label="Trust indicators">
      {/* Row 1 — scrolls left */}
      <div className="marquee-container mb-4">
        <div className="marquee-track">
          {[...badges, ...badges].map((b, i) => (
            <BadgeItem key={`l-${b}-${i}`} text={b} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-container mb-14">
        <div className="marquee-track-reverse">
          {[...badges, ...badges].map((b, i) => (
            <BadgeItem key={`r-${b}-${i}`} text={b} />
          ))}
        </div>
      </div>

      {/* Founder quote */}
      <div className="container-main">
        <blockquote className="reveal max-w-[640px] mx-auto border-l-[3px] border-accent pl-6 py-2 relative">
          <span className="absolute -top-6 -left-2 text-[64px] leading-none text-accent opacity-[0.2] font-serif select-none pointer-events-none" aria-hidden="true">&ldquo;</span>
          <p className="text-[18px] md:text-[20px] text-text font-medium italic leading-[32px] relative z-10">
            &ldquo;Lending models run at milliseconds. Compliance reviews take months. We built Alstro to enforce policy at runtime.&rdquo;
          </p>
          <cite className="block mt-4 text-[14px] text-text-3 not-italic">
            — Founding Team, Alstro
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
