"use client";
import { ShieldCheck, MessageSquare, Database, RotateCcw } from "lucide-react";

const caps = [
  { icon: ShieldCheck, title: "Policy Engine", desc: "Evaluates decisions against institution-configured rules before execution.", badge: "Pre-execution" },
  { icon: MessageSquare, title: "Explanations", desc: "Generates reason codes and explanation support for adverse action workflows.", badge: "< 400ms" },
  { icon: Database, title: "Audit Ledger", desc: "Append-only, timestamped records for regulatory examination and audit.", badge: "Append-only" },
  { icon: RotateCcw, title: "Replay", desc: "Re-run any decision with the same inputs, policy, and model version.", badge: "Deterministic" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32" aria-labelledby="how-heading">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flowRight{0%{left:-6px;opacity:0}10%{opacity:1}90%{opacity:1}100%{left:calc(100% + 6px);opacity:0}}
        @keyframes flowDown{0%{top:-6px;opacity:0}10%{opacity:1}90%{opacity:1}100%{top:calc(100% + 6px);opacity:0}}
        .alstro-layer{position:relative;padding:2px;border-radius:12px;background:linear-gradient(90deg,rgba(0,229,160,0.3),rgba(0,229,160,0.06),rgba(0,229,160,0.3));background-size:200% 100%;animation:border-spin 4s ease-in-out infinite;box-shadow:0 0 30px rgba(0,229,160,0.06)}
        @media(prefers-reduced-motion:reduce){.alstro-layer{animation:none}}
      `}} />
      <div className="container-main">
        <div className="reveal text-center mb-16">
          <p className="section-label">How it works</p>
          <h2 id="how-heading" className="max-w-[600px] mx-auto mb-3">One API between your models and your borrowers.</h2>
          <p className="text-[16px] text-text-2 max-w-[580px] mx-auto">Alstro integrates between model output and downstream lending systems. Four steps, one API call.</p>
        </div>

        {/* Architecture Diagram */}
        <div className="reveal max-w-[1024px] mx-auto mb-20" role="img" aria-label="Architecture diagram: models through Alstro to systems">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-0">
            {/* Left */}
            <div className="flex-1 bg-surface p-5 rounded-xl border border-border relative z-10">
              <h4 className="font-mono text-[12px] text-text-3 font-semibold uppercase tracking-wider mb-4">Your Models</h4>
              <div className="space-y-2">
                {["FICO", "ML Models", "LLMs", "Alt Data"].map(m => (
                  <div key={m} className="flex items-center gap-3 p-2.5 bg-glass rounded-lg border border-border">
                    <div className="w-1.5 h-1.5 rounded-full bg-text-3 shrink-0" aria-hidden="true" />
                    <span className="text-[13px] text-text-2 font-medium">{m}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Arrow 1 */}
            <div className="h-8 lg:h-auto lg:w-12 flex justify-center items-center relative z-0 shrink-0">
              <div className="hidden lg:block w-full h-[2px] bg-border relative overflow-hidden"><div className="absolute w-[6px] h-[6px] rounded-full bg-accent shadow-[0_0_8px_rgba(0,229,160,0.4)]" style={{ animation: "flowRight 3s infinite linear", top: "-2px" }} /></div>
              <div className="block lg:hidden w-[2px] h-full bg-border relative overflow-hidden min-h-[32px]"><div className="absolute w-[6px] h-[6px] rounded-full bg-accent shadow-[0_0_8px_rgba(0,229,160,0.4)]" style={{ animation: "flowDown 3s infinite linear", left: "-2px" }} /></div>
            </div>
            {/* Center */}
            <div className="flex-[1.4] lg:min-w-[320px] relative z-10 alstro-layer shrink-0">
              <div className="rounded-[10px] px-5 py-6 bg-bg h-full">
                <p className="text-center text-accent text-[13px] font-bold uppercase tracking-wider mb-4">Alstro Control Layer</p>
                <div className="grid grid-cols-2 gap-2">
                  {[{ I: ShieldCheck, t: "Policy Engine" }, { I: MessageSquare, t: "Explanation Gen" }, { I: Database, t: "Audit Ledger" }, { I: RotateCcw, t: "Replay" }].map(({ I, t }) => (
                    <div key={t} className="flex items-center gap-2 p-2.5 bg-accent-light border border-border-accent rounded-lg">
                      <I size={14} className="text-accent shrink-0" aria-hidden="true" />
                      <span className="text-[12px] text-text font-semibold">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Arrow 2 */}
            <div className="h-8 lg:h-auto lg:w-12 flex justify-center items-center relative z-0 shrink-0">
              <div className="hidden lg:block w-full h-[2px] bg-border relative overflow-hidden"><div className="absolute w-[6px] h-[6px] rounded-full bg-accent shadow-[0_0_8px_rgba(0,229,160,0.4)]" style={{ animation: "flowRight 3s infinite linear 1.5s", top: "-2px" }} /></div>
              <div className="block lg:hidden w-[2px] h-full bg-border relative overflow-hidden min-h-[32px]"><div className="absolute w-[6px] h-[6px] rounded-full bg-accent shadow-[0_0_8px_rgba(0,229,160,0.4)]" style={{ animation: "flowDown 3s infinite linear 1.5s", left: "-2px" }} /></div>
            </div>
            {/* Right */}
            <div className="flex-1 bg-surface p-5 rounded-xl border border-border relative z-10">
              <h4 className="font-mono text-[12px] text-text-3 font-semibold uppercase tracking-wider mb-4">Your Systems</h4>
              <div className="space-y-2">
                {["LOS", "Decision Engine", "Adverse Action"].map(s => (
                  <div key={s} className="flex items-center gap-3 p-2.5 bg-glass rounded-lg border border-border">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    <span className="text-[13px] text-text-2 font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 reveal-stagger mb-8">
          {caps.map(c => { const Icon = c.icon; return (
            <div key={c.title} className="reveal card flex flex-col gap-3 group">
              <div className="flex items-center gap-2.5"><Icon size={18} className="text-accent shrink-0" aria-hidden="true" /><h3 className="text-[16px] m-0 leading-tight">{c.title}</h3></div>
              <p className="text-[14px] text-text-2 leading-relaxed">{c.desc}</p>
              <span className="badge-hover mt-auto inline-flex self-start font-mono text-[11px] font-semibold text-text-3 bg-surface border border-border rounded px-2.5 py-1 uppercase tracking-wide transition-colors">{c.badge}</span>
            </div>
          ); })}
        </div>
        <p className="reveal text-center font-mono text-[13px] text-text-3">Works with FICO, XGBoost, logistic regression, LLMs, and internal scorecards. No model access required.</p>
      </div>
    </section>
  );
}
