"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Brain, Database, RotateCcw } from "lucide-react";

const capabilities = [
  { icon: ShieldCheck, title: "Policy Enforcement", desc: "Every decision checked against ECOA, FCRA, TILA, UDAAP before execution. Violations blocked, not logged.", badge: "Pre-execution blocking", code: 'check_policy(decision_data, ["ECOA","FCRA"]) → BLOCKED' },
  { icon: Brain, title: "Explanation Generation", desc: "SHAP-based feature attribution + ECOA permissibility. Model-specific adverse action notices.", badge: "< 400ms per notice", code: 'generate_notice(user_id, model_shap) → pdf_ready' },
  { icon: Database, title: "Immutable Audit Trail", desc: "Append-only ledger, cryptographic timestamps. Exportable for OCC/CFPB exams.", badge: "Record exists before complaint", code: 'write_ledger(decision_hash, timestamp) → SHA-256' },
  { icon: RotateCcw, title: "Deterministic Replay", desc: "Re-run exact decision path: same inputs, base policy, exact model version. A proof, not reconstruction.", badge: "Only capability of its kind", code: 'replay(decision_id: "DEC-2026") → identical: true' },
];

export default function Architecture() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 15 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.5, ease: "easeOut" as const } };

  return (
    <section id="solution" className="py-24 lg:py-32 bg-surface/30 relative">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flow-right { 0% { left: -20%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { left: 120%; opacity: 0; } }
        @keyframes flow-down { 0% { top: -20%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 120%; opacity: 0; } }
      `}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container-main relative z-10">
        <motion.p {...fadeUp} className="font-mono text-[12px] text-accent uppercase tracking-[0.2em] mb-4 font-semibold">The enforcement layer</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] text-text leading-[1.1] tracking-[-0.02em] max-w-[720px] mb-6">
          One API. Every model. Every decision. <span className="text-gradient-accent">Proven before execution</span>.
        </motion.h2>
        <motion.p {...fadeUp} className="text-[17px] sm:text-[19px] text-text-2 max-w-[600px] mb-20 font-light">
          Alstro sits between your AI models and your lending execution systems.
          Every decision passes through four enforcement capabilities before it
          reaches the borrower.
        </motion.p>

        {/* Animated Full Diagram */}
        <motion.div {...fadeUp} className="max-w-[1024px] mx-auto mb-24 relative flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-0">
          
          {/* Left Column: YOUR MODELS */}
          <div className="flex-1 glass-panel p-6 rounded-xl border border-border/50 relative z-10 shadow-lg shrink-0">
            <h4 className="font-mono text-[12px] text-text-3 font-semibold uppercase tracking-[0.1em] mb-5">Your Models</h4>
            <div className="space-y-3">
              {['FICO Score', 'ML Scorecards', 'LLM Underwriting', 'Alternative Data'].map((m) => (
                <div key={m} className="flex items-center gap-3 p-3 bg-elevated rounded-md border border-border/30">
                  <div className="w-1.5 h-1.5 rounded-full bg-border-active" />
                  <span className="text-[14px] text-text-2 font-medium">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connection 1 */}
          <div className="h-16 lg:h-auto lg:w-16 flex lg:flex-col justify-center items-center relative z-0 shrink-0">
            <div className="hidden lg:block w-full h-[2px] bg-gradient-to-r from-border to-accent relative overflow-hidden">
              <div className="absolute top-0 w-8 h-full bg-accent blur-[2px] shadow-[0_0_8px_rgba(59,130,246,0.8)]" style={{animation: 'flow-right 3s infinite linear'}} />
            </div>
            <div className="block lg:hidden h-full w-[2px] bg-gradient-to-b from-border to-accent relative overflow-hidden">
              <div className="absolute left-0 h-8 w-full bg-accent blur-[2px] shadow-[0_0_8px_rgba(59,130,246,0.8)]" style={{animation: 'flow-down 3s infinite linear'}} />
            </div>
          </div>

          {/* Center Column: ALSTRO ENFORCEMENT LAYER */}
          <div className="flex-[1.2] relative z-10 p-[1.5px] rounded-xl bg-gradient-to-r from-accent via-purple to-accent shadow-[0_0_30px_rgba(59,130,246,0.15)] shrink-0">
            <div className="rounded-xl px-8 py-10 bg-elevated/95 backdrop-blur-xl h-full flex flex-col justify-center">
              <div className="text-center mb-6">
                <p className="text-gradient-accent text-[14px] font-bold uppercase tracking-[0.15em] mb-2">Alstro Enforcement Layer</p>
                <div className="w-12 h-[2px] bg-accent/30 mx-auto" />
              </div>
              <div className="flex justify-center flex-wrap gap-2">
                {['Policy Engine', 'Explanation Generator', 'Audit Ledger', 'Deterministic Replay'].map((c) => (
                  <div key={c} className="w-[48%] p-3 bg-surface border border-accent/20 rounded-md text-center shadow-[inset_0_1px_4px_rgba(59,130,246,0.05)]">
                    <span className="text-[13px] text-text font-semibold">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Connection 2 */}
          <div className="h-16 lg:h-auto lg:w-16 flex lg:flex-col justify-center items-center relative z-0 shrink-0">
            <div className="hidden lg:block w-full h-[2px] bg-gradient-to-r from-accent to-border relative overflow-hidden">
              <div className="absolute top-0 w-8 h-full bg-accent blur-[2px] shadow-[0_0_8px_rgba(59,130,246,0.8)]" style={{animation: 'flow-right 3s infinite linear 1.5s'}} />
            </div>
            <div className="block lg:hidden h-full w-[2px] bg-gradient-to-b from-accent to-border relative overflow-hidden">
              <div className="absolute left-0 h-8 w-full bg-accent blur-[2px] shadow-[0_0_8px_rgba(59,130,246,0.8)]" style={{animation: 'flow-down 3s infinite linear 1.5s'}} />
            </div>
          </div>

          {/* Right Column: YOUR SYSTEMS */}
          <div className="flex-1 glass-panel p-6 rounded-xl border border-border/50 relative z-10 shadow-lg shrink-0">
            <h4 className="font-mono text-[12px] text-text-3 font-semibold uppercase tracking-[0.1em] mb-5">Your Systems</h4>
            <div className="flex flex-col justify-center h-full gap-4">
              {['Loan Origination Sys.', 'Decision Engine', 'Adverse Action Engine'].map((s) => (
                <div key={s} className="flex items-center gap-3 p-4 bg-elevated rounded-md border border-border/30">
                  <div className="w-1.5 h-1.5 rounded-full bg-green" />
                  <span className="text-[14px] text-text-2 font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Capability cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div key={c.title} initial={reduced ? {} : { opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.1 }}
                className="glass-panel rounded-xl p-8 border-l-[4px] border-l-accent card-hover-effect relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150" />
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Icon size={22} className="relative z-10" />
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-text">{c.title}</h3>
                </div>
                <p className="text-[15px] sm:text-[16px] text-text-2 leading-relaxed mb-6 font-light">{c.desc}</p>
                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <span className="inline-flex font-mono text-[11px] font-semibold text-green bg-green/10 border border-green/20 rounded-md px-3 py-1.5 uppercase tracking-[0.1em]">{c.badge}</span>
                </div>
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-6 transition-all duration-300 overflow-hidden">
                  <div className="bg-bg text-text-3 font-mono text-[11px] p-3 rounded-md border border-border/50">
                    <span className="text-accent">{'>'}</span> {c.code}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
