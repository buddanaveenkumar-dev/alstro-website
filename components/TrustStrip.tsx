"use client";

import { CheckCircle2 } from "lucide-react";

const badges = [
  "ECOA Compliant", "FCRA Ready", "SR 11-7 Documented", "TILA Enforced",
  "UDAAP Checked", "OCC Exam-Ready", "CFPB Exam-Ready", "Cryptographic Audit",
];

function BadgeItem({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[12px] font-medium text-text-2 border border-border bg-[rgba(255,255,255,0.03)] rounded-full px-4 py-2.5 whitespace-nowrap select-none">
      <CheckCircle2 size={14} className="text-accent shrink-0" aria-hidden="true" />
      {text}
    </span>
  );
}

export default function TrustStrip() {
  return (
    <section className="py-16 bg-bg" aria-label="Trust indicators">
      {/* Marquee */}
      <div className="marquee-container mb-12">
        <div className="marquee-track">
          {[...badges, ...badges].map((b, i) => (
            <BadgeItem key={`${b}-${i}`} text={b} />
          ))}
        </div>
      </div>

      {/* Founder quote */}
      <div className="container-main">
        <blockquote className="reveal max-w-[640px] mx-auto border-l-[3px] border-accent pl-6 py-2">
          <p className="text-[18px] md:text-[20px] text-text font-medium italic leading-relaxed">
            &ldquo;Lending models run at milliseconds. Compliance reviews take months. We built Alstro to enforce policy at runtime.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}
