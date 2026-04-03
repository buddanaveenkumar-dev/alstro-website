"use client";
import { CheckCircle2 } from "lucide-react";

const dataItems = [
  { title: "Customer-approved data scope", desc: "only explicitly approved data is processed" },
  { title: "Encryption in transit and at rest", desc: "industry-standard protocols" },
  { title: "Role-based access controls", desc: "governing all internal access" },
  { title: "Environment separation", desc: "customer environments logically isolated" },
  { title: "Configurable retention", desc: "deletion procedures available on request" },
  { title: "Documentation available under NDA", desc: "security architecture, data flows, controls" },
];

const docs = ["Technical Overview", "Security Architecture", "Pilot Scope & Criteria", "Sample Decision Report"];

const badges = ["ECOA", "FCRA", "SR 11-7", "TILA", "UDAAP", "OCC Exam-Ready", "CFPB Exam-Ready", "Audit-Ready Records"];

function Badge({ text }: { text: string }) {
  return <span className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.05em] text-text-2 border border-border rounded-full px-4 py-1.5 whitespace-nowrap select-none">{text}</span>;
}

export default function TrustProtection() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="trust-heading">
      <div className="container-main">
        <div className="reveal mb-16">
          <p className="section-label">Trust & protection</p>
          <h2 id="trust-heading" className="max-w-[560px]">Built for institutional data and governance requirements.</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left — Data Protection */}
          <div className="space-y-5">
            {dataItems.map((item, i) => (
              <div key={i} className="reveal flex items-start gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent shrink-0 mt-[9px]" aria-hidden="true" />
                <p className="text-[15px] leading-relaxed"><span className="text-text font-medium">{item.title}</span> <span className="text-text-2">— {item.desc}</span></p>
              </div>
            ))}
          </div>

          {/* Right — Governance Card */}
          <div className="reveal rounded-xl border border-border bg-glass backdrop-blur-xl p-8">
            <p className="text-[17px] text-text font-bold mb-4">Institution retains full control.</p>
            <p className="text-[15px] text-text-2 leading-relaxed mb-4">
              Policies evaluated by Alstro are configured and approved by the institution. Alstro supports decision evaluation, documentation, and workflow control.
            </p>
            <p className="text-[14px] text-text-3 italic mb-8">It does not make lending decisions.</p>

            <div className="border-t border-border pt-6">
              <p className="font-mono text-[12px] text-text-3 uppercase tracking-wider mb-4">Available documentation</p>
              <ul className="space-y-2.5 mb-6">
                {docs.map(d => <li key={d} className="font-mono text-[13px] text-text-2">{d}</li>)}
              </ul>
              <a href="#cta" className="btn-secondary text-[13px]" style={{ padding: "8px 18px" }}>Request Documentation</a>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Marquee — two rows, opposite directions */}
      <div className="space-y-3">
        <div className="marquee-container">
          <div className="marquee-track">
            {[...badges, ...badges].map((b, i) => <Badge key={`l-${i}`} text={b} />)}
          </div>
        </div>
        <div className="marquee-container">
          <div className="marquee-track-reverse">
            {[...badges, ...badges].map((b, i) => <Badge key={`r-${i}`} text={b} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
