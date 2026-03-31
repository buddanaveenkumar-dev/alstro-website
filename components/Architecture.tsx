"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MessageSquare, Database, RotateCcw } from "lucide-react";

const capabilities = [
  { icon: ShieldCheck, title: "Policy Enforcement", desc: "Every decision checked against ECOA, FCRA, TILA, UDAAP before execution. Violations blocked, not logged.", badge: "Pre-execution blocking", code: 'check_policy(decision_data, ["ECOA","FCRA"]) → BLOCKED' },
  { icon: MessageSquare, title: "Explanation Generation", desc: "SHAP-based feature attribution + ECOA permissibility. Model-specific adverse action notices.", badge: "< 400ms per notice", code: 'generate_notice(user_id, model_shap) → pdf_ready' },
  { icon: Database, title: "Immutable Audit Trail", desc: "Append-only ledger, cryptographic timestamps. Exportable for OCC/CFPB exams.", badge: "Record exists before complaint", code: 'write_ledger(decision_hash, timestamp) → SHA-256' },
  { icon: RotateCcw, title: "Deterministic Replay", desc: "Re-run exact decision path: same inputs, base policy, exact model version. A proof, not reconstruction.", badge: "Only capability of its kind", code: 'replay(decision_id: "DEC-2026") → identical: true' },
];

export default function Architecture() {
  return (
    <section id="solution" className="py-24 lg:py-32 bg-surface relative border-y border-border">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flow-right { 0% { left: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { left: 100%; opacity: 0; } }
        @keyframes flow-down { 0% { top: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
      `}} />
      
      <div className="container-main relative z-10 reveal-stagger">
        <div className="reveal flex flex-col items-center text-center gap-3 mb-16">
          <p className="font-mono text-[13px] text-accent font-semibold uppercase tracking-wide">The enforcement layer</p>
          <h2 className="max-w-[700px] text-text">
            One API. Every model. Every decision. Proven before execution.
          </h2>
          <p className="text-[17px] text-text-2 max-w-[640px]">
            Alstro sits between your AI models and your lending execution systems.
            Every decision passes through four enforcement capabilities before it reaches the borrower.
          </p>
        </div>

        {/* Animated Full Diagram */}
        <div className="reveal max-w-[1024px] mx-auto mb-20 relative flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-0">
          
          {/* Left Column: YOUR MODELS */}
          <div className="flex-1 bg-white p-6 rounded-xl border border-border shadow-sm relative z-10 shrink-0">
            <h4 className="font-mono text-[12px] text-text-3 font-semibold uppercase tracking-wider mb-5">Your Models</h4>
            <div className="space-y-3">
              {['FICO Score', 'ML Scorecards', 'LLM Underwriting', 'Alternative Data'].map((m) => (
                <div key={m} className="flex items-center gap-3 p-3 bg-surface rounded-md border border-border">
                  <div className="w-1.5 h-1.5 rounded-full bg-text-3" />
                  <span className="text-[14px] text-text-2 font-medium">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connection 1 */}
          <div className="h-12 lg:h-auto lg:w-16 flex lg:flex-col justify-center items-center relative z-0 shrink-0">
            <div className="hidden lg:block w-full h-[2px] bg-border relative overflow-hidden">
              <div className="absolute top-0 h-full w-2 bg-accent rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]" style={{animation: 'flow-right 2.5s infinite linear'}} />
            </div>
            <div className="block lg:hidden h-full w-[2px] bg-border relative overflow-hidden">
              <div className="absolute left-0 w-full h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]" style={{animation: 'flow-down 2.5s infinite linear'}} />
            </div>
            {/* Playful arrow head */}
            <div className="hidden lg:block absolute right-0 w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-border border-b-[4px] border-b-transparent translate-x-full"></div>
            <div className="block lg:hidden absolute bottom-0 w-0 h-0 border-l-[4px] border-l-transparent border-t-[6px] border-t-border border-r-[4px] border-r-transparent translate-y-full"></div>
          </div>

          {/* Center Column: ALSTRO ENFORCEMENT LAYER */}
          <div className="flex-[1.2] lg:min-w-[340px] relative z-10 p-[2px] rounded-xl bg-accent shadow-[0_8px_32px_rgba(37,99,235,0.12)] shrink-0 transition-all hover:shadow-[0_8px_40px_rgba(37,99,235,0.2)]">
            <div className="rounded-[10px] px-6 py-8 bg-accent-light h-full flex flex-col justify-center">
              <div className="text-center mb-6">
                <p className="text-accent text-[13px] font-bold uppercase tracking-wider mb-2">Alstro Enforcement Layer</p>
                <div className="w-8 h-[2px] bg-accent/20 mx-auto" />
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { icon: ShieldCheck, text: 'Policy Engine' },
                  { icon: MessageSquare, text: 'Explanation Generator' },
                  { icon: Database, text: 'Audit Ledger' },
                  { icon: RotateCcw, text: 'Deterministic Replay' }
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-3 p-3 bg-white border border-accent/20 rounded-md shadow-sm">
                    <c.icon size={16} className="text-accent" />
                    <span className="text-[14px] text-text font-semibold">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Connection 2 */}
          <div className="h-12 lg:h-auto lg:w-16 flex lg:flex-col justify-center items-center relative z-0 shrink-0">
            <div className="hidden lg:block w-full h-[2px] bg-border relative overflow-hidden">
              <div className="absolute top-0 h-full w-2 bg-accent rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]" style={{animation: 'flow-right 2.5s infinite linear 1.25s'}} />
            </div>
            <div className="block lg:hidden h-full w-[2px] bg-border relative overflow-hidden">
              <div className="absolute left-0 w-full h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]" style={{animation: 'flow-down 2.5s infinite linear 1.25s'}} />
            </div>
            <div className="hidden lg:block absolute right-0 w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-border border-b-[4px] border-b-transparent translate-x-full"></div>
            <div className="block lg:hidden absolute bottom-0 w-0 h-0 border-l-[4px] border-l-transparent border-t-[6px] border-t-border border-r-[4px] border-r-transparent translate-y-full"></div>
          </div>

          {/* Right Column: YOUR SYSTEMS */}
          <div className="flex-1 bg-white p-6 rounded-xl border border-border shadow-sm relative z-10 shrink-0">
            <h4 className="font-mono text-[12px] text-text-3 font-semibold uppercase tracking-wider mb-5">Your Systems</h4>
            <div className="flex flex-col justify-center h-full gap-3">
              {['Loan Origination Sys.', 'Decision Engine', 'Adverse Action Engine'].map((s) => (
                <div key={s} className="flex items-center gap-3 p-3 bg-surface rounded-md border border-border">
                  <div className="w-1.5 h-1.5 rounded-full bg-green" />
                  <span className="text-[14px] text-text-2 font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Capability cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 reveal-stagger">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            const isLast = i === capabilities.length - 1;
            return (
              <motion.div 
                key={c.title} 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 border border-border relative group overflow-hidden hover:-translate-y-1 hover:border-accent hover:shadow-[0_4px_24px_rgba(37,99,235,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-lg bg-surface border border-border text-text group-hover:bg-accent-light group-hover:border-accent/30 group-hover:text-accent transition-colors duration-300">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-text m-0 p-0 leading-none">{c.title}</h3>
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-text-2 leading-relaxed mb-8">{c.desc}</p>
                </div>
                
                <div className="mt-auto flex items-center justify-between pointer-events-none">
                  <span className={`inline-flex font-mono text-[11px] font-semibold rounded px-3 py-1.5 uppercase tracking-wide ${isLast ? 'bg-accent text-white' : 'bg-surface border border-border text-text-2'}`}>
                    {c.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
