"use client";

import { CheckCircle2 } from "lucide-react";

const badges = [
  "ECOA Compliant", "FCRA Ready", "SR 11-7 Documented", "TILA Enforced",
  "UDAAP Checked", "OCC Exam-Ready", "CFPB Exam-Ready", "Cryptographic Audit",
];

function BadgeItem({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[12px] font-medium text-text-2 border border-border bg-white rounded-full px-4 py-2.5 whitespace-nowrap select-none">
      <CheckCircle2 size={14} className="text-green shrink-0" aria-hidden="true" />
      {text}
    </span>
  );
}

export default function RegulatoryBar() {
  return (
    <section className="bg-surface py-10 border-y border-border" aria-hidden="true">
      <div className="marquee-container">
        <div className="marquee-track">
          {/* Duplicate badges for seamless loop */}
          {[...badges, ...badges].map((b, i) => (
            <BadgeItem key={`${b}-${i}`} text={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
