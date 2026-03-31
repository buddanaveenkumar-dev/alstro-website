"use client";

import { ShieldCheck, MessageSquare, Database, RotateCcw } from "lucide-react";

const capabilities = [
  { icon: ShieldCheck, title: "Policy Enforcement", desc: "Every decision checked against ECOA, FCRA, TILA, UDAAP before execution. Violations blocked, not logged.", badge: "Pre-execution blocking", special: false },
  { icon: MessageSquare, title: "Explanation Generation", desc: "SHAP-based feature attribution + ECOA permissibility. Model-specific adverse action notices.", badge: "< 400ms per notice", special: false },
  { icon: Database, title: "Immutable Audit Trail", desc: "Append-only ledger, cryptographic timestamps. Exportable for OCC/CFPB exams.", badge: "Record exists before complaint", special: false },
  { icon: RotateCcw, title: "Deterministic Replay", desc: "Re-run exact decision path: same inputs, base policy, exact model version. A proof, not reconstruction.", badge: "Only capability of its kind", special: true },
];

export default function Architecture() {
  return (
    <section id="solution" className="py-[100px] max-md:py-[60px] bg-surface" aria-labelledby="arch-heading">
      {/* Inline animation styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flowRight { 0%{left:-6px;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{left:calc(100% + 6px);opacity:0} }
        @keyframes flowDown { 0%{top:-6px;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{top:calc(100% + 6px);opacity:0} }
      `}} />

      <div className="container-main">
        {/* Section Header */}
        <div className="reveal text-center mb-16">
          <p className="font-mono text-[13px] text-accent font-semibold uppercase tracking-[0.08em] mb-4">The enforcement layer</p>
          <h2 id="arch-heading" className="max-w-[700px] mx-auto mb-4">
            One API. Every model. Every decision. Proven before execution.
          </h2>
          <p className="text-[17px] text-text-2 max-w-[640px] mx-auto">
            Alstro sits between your AI models and your lending execution systems.
            Every decision passes through four enforcement capabilities before it reaches the borrower.
          </p>
        </div>

        {/* ★ ANIMATED PIPELINE DIAGRAM */}
        <div className="reveal max-w-[1024px] mx-auto mb-20" role="img" aria-label="Diagram showing data flow from lending models through Alstro enforcement layer to execution systems">
          {/* Desktop: horizontal 3-column */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-0">

            {/* Left: YOUR MODELS */}
            <div className="flex-1 bg-white p-6 rounded-xl border border-border shadow-sm relative z-10">
              <h4 className="font-mono text-[12px] text-text-3 font-semibold uppercase tracking-wider mb-5">Your Models</h4>
              <div className="space-y-3">
                {["FICO Score", "ML Scorecards", "LLM Underwriting", "Alternative Data"].map((m) => (
                  <div key={m} className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-border-subtle">
                    <div className="w-2 h-2 rounded-full bg-text-3 shrink-0" aria-hidden="true" />
                    <span className="text-[14px] text-text-2 font-medium">{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="h-10 lg:h-auto lg:w-16 flex justify-center items-center relative z-0 shrink-0">
              {/* Desktop horizontal */}
              <div className="hidden lg:block w-full h-[2px] bg-border relative overflow-hidden">
                <div className="absolute w-[6px] h-[6px] rounded-full bg-accent shadow-[0_0_8px_rgba(37,99,235,0.6)]" style={{ animation: "flowRight 3s infinite linear", top: "-2px" }} />
              </div>
              {/* Mobile vertical */}
              <div className="block lg:hidden w-[2px] h-full bg-border relative overflow-hidden min-h-[40px]">
                <div className="absolute w-[6px] h-[6px] rounded-full bg-accent shadow-[0_0_8px_rgba(37,99,235,0.6)]" style={{ animation: "flowDown 3s infinite linear", left: "-2px" }} />
              </div>
            </div>

            {/* Center: ALSTRO ENFORCEMENT LAYER */}
            <div className="flex-[1.3] lg:min-w-[340px] relative z-10 p-[2px] rounded-xl bg-accent shadow-[0_0_24px_rgba(37,99,235,0.15)] shrink-0">
              <div className="rounded-[10px] px-6 py-8 bg-accent-light h-full">
                <div className="text-center mb-6">
                  <p className="text-accent text-[13px] font-bold uppercase tracking-wider mb-1">Alstro Enforcement Layer</p>
                  <div className="w-8 h-[2px] bg-accent/20 mx-auto" />
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { Icon: ShieldCheck, text: "Policy Engine" },
                    { Icon: MessageSquare, text: "Explanation Generator" },
                    { Icon: Database, text: "Audit Ledger" },
                    { Icon: RotateCcw, text: "Deterministic Replay" },
                  ].map(({ Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 p-3 bg-white border border-accent/20 rounded-lg shadow-sm">
                      <Icon size={16} className="text-accent shrink-0" aria-hidden="true" />
                      <span className="text-[14px] text-text font-semibold">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="h-10 lg:h-auto lg:w-16 flex justify-center items-center relative z-0 shrink-0">
              <div className="hidden lg:block w-full h-[2px] bg-border relative overflow-hidden">
                <div className="absolute w-[6px] h-[6px] rounded-full bg-accent shadow-[0_0_8px_rgba(37,99,235,0.6)]" style={{ animation: "flowRight 3s infinite linear 1.5s", top: "-2px" }} />
              </div>
              <div className="block lg:hidden w-[2px] h-full bg-border relative overflow-hidden min-h-[40px]">
                <div className="absolute w-[6px] h-[6px] rounded-full bg-accent shadow-[0_0_8px_rgba(37,99,235,0.6)]" style={{ animation: "flowDown 3s infinite linear 1.5s", left: "-2px" }} />
              </div>
            </div>

            {/* Right: YOUR SYSTEMS */}
            <div className="flex-1 bg-white p-6 rounded-xl border border-border shadow-sm relative z-10">
              <h4 className="font-mono text-[12px] text-text-3 font-semibold uppercase tracking-wider mb-5">Your Systems</h4>
              <div className="space-y-3">
                {["Loan Origination Sys.", "Decision Engine", "Adverse Action Engine"].map((s) => (
                  <div key={s} className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-border-subtle">
                    <div className="w-2 h-2 rounded-full bg-green shrink-0" aria-hidden="true" />
                    <span className="text-[14px] text-text-2 font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Capability Cards — 2×2 */}
        <div className="grid md:grid-cols-2 gap-6 reveal-stagger">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="reveal card flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-lg bg-surface border border-border text-text-2 group-hover:bg-accent-light group-hover:border-accent/30 group-hover:text-accent transition-colors duration-300">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="text-[18px] sm:text-[20px] m-0 p-0 leading-tight">{c.title}</h3>
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-text-2 leading-relaxed mb-8">{c.desc}</p>
                </div>

                <div className="mt-auto">
                  <span className={`inline-flex font-mono text-[11px] font-semibold rounded px-3 py-1.5 uppercase tracking-wide whitespace-normal ${
                    c.special ? "bg-accent text-white" : "bg-surface border border-border text-text-2"
                  }`}>
                    {c.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
