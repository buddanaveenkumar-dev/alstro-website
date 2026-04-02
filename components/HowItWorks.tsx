"use client";

import { ShieldCheck, MessageSquare, Database, RotateCcw } from "lucide-react";

const capabilities = [
  { icon: ShieldCheck, title: "Policy Engine", desc: "Blocks violations before execution.", badge: "Pre-execution" },
  { icon: MessageSquare, title: "Explanations", desc: "SHAP-based adverse action notices.", badge: "< 400ms" },
  { icon: Database, title: "Audit Ledger", desc: "Cryptographic, immutable, exam-ready.", badge: "Append-only" },
  { icon: RotateCcw, title: "Replay", desc: "Re-run any decision deterministically.", badge: "First of its kind" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-bg" aria-labelledby="how-heading">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flowRight { 0%{left:-6px;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{left:calc(100% + 6px);opacity:0} }
        @keyframes flowDown { 0%{top:-6px;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{top:calc(100% + 6px);opacity:0} }
        @keyframes border-spin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .alstro-layer {
          position: relative;
          padding: 2px;
          border-radius: 12px;
          background: linear-gradient(90deg, rgba(0,201,139,0.35), rgba(0,201,139,0.08), rgba(0,201,139,0.35));
          background-size: 200% 100%;
          animation: border-spin 4s ease-in-out infinite;
          box-shadow: 0 0 30px rgba(0,201,139,0.06);
        }
        @media (prefers-reduced-motion: reduce) {
          .alstro-layer { animation: none; }
        }
      `}} />

      <div className="container-main">
        <div className="reveal text-center mb-16">
          <p className="font-mono text-[13px] text-accent font-semibold uppercase tracking-[0.08em] mb-4">How it works</p>
          <h2 id="how-heading" className="max-w-[600px] mx-auto">
            One API between your models and your borrowers.
          </h2>
        </div>

        {/* Architecture Diagram */}
        <div className="reveal max-w-[1024px] mx-auto mb-20" role="img" aria-label="Architecture: models flow through Alstro enforcement layer to your systems">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-0">

            {/* Left: Your Models */}
            <div className="flex-1 bg-white p-5 rounded-xl border border-border shadow-sm relative z-10">
              <h4 className="font-mono text-[12px] text-text-3 font-semibold uppercase tracking-wider mb-4">Your Models</h4>
              <div className="space-y-2">
                {["FICO", "ML Models", "LLMs", "Alt Data"].map((m) => (
                  <div key={m} className="flex items-center gap-3 p-2.5 bg-surface rounded-lg border border-border">
                    <div className="w-1.5 h-1.5 rounded-full bg-text-3 shrink-0" aria-hidden="true" />
                    <span className="text-[13px] text-text-2 font-medium">{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="h-8 lg:h-auto lg:w-12 flex justify-center items-center relative z-0 shrink-0">
              <div className="hidden lg:block w-full h-[2px] bg-border relative overflow-hidden">
                <div className="absolute w-[6px] h-[6px] rounded-full bg-accent shadow-[0_0_8px_rgba(0,201,139,0.4)]" style={{ animation: "flowRight 3s infinite linear", top: "-2px" }} />
              </div>
              <div className="block lg:hidden w-[2px] h-full bg-border relative overflow-hidden min-h-[32px]">
                <div className="absolute w-[6px] h-[6px] rounded-full bg-accent shadow-[0_0_8px_rgba(0,201,139,0.4)]" style={{ animation: "flowDown 3s infinite linear", left: "-2px" }} />
              </div>
            </div>

            {/* Center: Alstro Enforcement Layer — animated border */}
            <div className="flex-[1.4] lg:min-w-[320px] relative z-10 alstro-layer shrink-0">
              <div className="rounded-[10px] px-5 py-6 bg-white h-full">
                <p className="text-center text-accent text-[13px] font-bold uppercase tracking-wider mb-4">Alstro Enforcement Layer</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { Icon: ShieldCheck, text: "Policy Engine" },
                    { Icon: MessageSquare, text: "Explanation Gen" },
                    { Icon: Database, text: "Audit Ledger" },
                    { Icon: RotateCcw, text: "Replay" },
                  ].map(({ Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 p-2.5 bg-[rgba(0,201,139,0.04)] border border-[rgba(0,201,139,0.12)] rounded-lg">
                      <Icon size={14} className="text-accent shrink-0" aria-hidden="true" />
                      <span className="text-[12px] text-text font-semibold">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="h-8 lg:h-auto lg:w-12 flex justify-center items-center relative z-0 shrink-0">
              <div className="hidden lg:block w-full h-[2px] bg-border relative overflow-hidden">
                <div className="absolute w-[6px] h-[6px] rounded-full bg-accent shadow-[0_0_8px_rgba(0,201,139,0.4)]" style={{ animation: "flowRight 3s infinite linear 1.5s", top: "-2px" }} />
              </div>
              <div className="block lg:hidden w-[2px] h-full bg-border relative overflow-hidden min-h-[32px]">
                <div className="absolute w-[6px] h-[6px] rounded-full bg-accent shadow-[0_0_8px_rgba(0,201,139,0.4)]" style={{ animation: "flowDown 3s infinite linear 1.5s", left: "-2px" }} />
              </div>
            </div>

            {/* Right: Your Systems */}
            <div className="flex-1 bg-white p-5 rounded-xl border border-border shadow-sm relative z-10">
              <h4 className="font-mono text-[12px] text-text-3 font-semibold uppercase tracking-wider mb-4">Your Systems</h4>
              <div className="space-y-2">
                {["LOS", "Decision Engine", "Adverse Action"].map((s) => (
                  <div key={s} className="flex items-center gap-3 p-2.5 bg-surface rounded-lg border border-border">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    <span className="text-[13px] text-text-2 font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Capability Cards — compact 4-column with hover */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 reveal-stagger mb-10">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="reveal card flex flex-col gap-3 group">
                <div className="flex items-center gap-2.5">
                  <Icon size={18} className="text-accent shrink-0" aria-hidden="true" />
                  <h3 className="text-[16px] m-0 leading-tight">{c.title}</h3>
                </div>
                <p className="text-[14px] text-text-2 leading-relaxed">{c.desc}</p>
                <span className="badge-accent mt-auto inline-flex self-start font-mono text-[11px] font-semibold text-text-3 bg-surface border border-border rounded px-2.5 py-1 uppercase tracking-wide transition-colors duration-300">
                  {c.badge}
                </span>
              </div>
            );
          })}
        </div>

        {/* Model-agnostic callout */}
        <p className="reveal text-center text-[14px] text-text-3 font-mono">
          Works with FICO, XGBoost, logistic regression, LLMs, and internal scorecards. No model access required.
        </p>
      </div>
    </section>
  );
}
