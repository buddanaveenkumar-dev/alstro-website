"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Brain, Database, RotateCcw } from "lucide-react";

const capabilities = [
  { icon: ShieldCheck, title: "Policy Enforcement", desc: "Every decision checked against ECOA, FCRA, TILA, UDAAP before execution. Violations blocked, not logged.", badge: "Pre-execution blocking" },
  { icon: Brain, title: "Explanation Generation", desc: "SHAP-based feature attribution + ECOA permissibility. Model-specific adverse action notices.", badge: "< 400ms per notice" },
  { icon: Database, title: "Immutable Audit Trail", desc: "Append-only ledger, cryptographic timestamps. Exportable for OCC/CFPB exams.", badge: "Record exists before complaint" },
  { icon: RotateCcw, title: "Deterministic Replay", desc: "Re-run exact decision path: same inputs, base policy, exact model version. A proof, not reconstruction.", badge: "Only capability of its kind" },
];

export default function Architecture() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 15 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.5, ease: "easeOut" as const } };

  return (
    <section id="solution" className="py-24 lg:py-32 bg-surface/30 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container-main relative z-10">
        <motion.p {...fadeUp} className="font-mono text-[12px] text-accent uppercase tracking-[0.2em] mb-4 font-semibold">The enforcement layer</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] text-text leading-[1.1] tracking-[-0.02em] max-w-[720px] mb-6">
          One API. Every model. Every decision. <span className="text-gradient-accent">Proven before execution</span>.
        </motion.h2>
        <motion.p {...fadeUp} className="text-[17px] sm:text-[19px] text-text-2 max-w-[600px] mb-16 font-light">
          Alstro sits between your AI models and your lending execution systems.
          Every decision passes through four enforcement capabilities before it
          reaches the borrower.
        </motion.p>

        {/* Architecture diagram */}
        <motion.div {...fadeUp} className="max-w-[760px] mx-auto mb-20 font-mono text-[13px] relative">
          <div className="glass-panel text-text/80 px-6 py-4 rounded-lg text-center font-semibold tracking-wider relative z-10">
            <span className="text-text-3">YOUR MODELS</span> — FICO · ML Scorecards · LLMs · Alt Data
          </div>
          <div className="flex justify-center py-2 h-16 relative">
            <motion.div
              initial={reduced ? {} : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.2 }}
              style={{ transformOrigin: "top" }}
              className="w-[2px] h-full bg-gradient-to-b from-border to-accent relative z-0"
            />
            <motion.div 
              initial={{ top: 0, opacity: 0 }} 
              animate={{ top: "100%", opacity: [0, 1, 0] }} 
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute w-2 h-2 bg-accent rounded-full blur-[2px] -ml-[1px]" 
            />
          </div>
          <div className="relative z-10 p-[1px] rounded-xl bg-gradient-to-r from-accent via-purple to-accent hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-shadow duration-500">
            <div className="rounded-xl px-6 py-8 bg-elevated/90 backdrop-blur-xl text-center">
              <p className="text-gradient-accent text-[12px] font-bold uppercase tracking-[0.2em] mb-3">Alstro Enforcement Layer</p>
              <p className="text-text-2 font-medium">Policy Engine · Explanation Generator · Audit Ledger · Deterministic Replay</p>
            </div>
          </div>
          <div className="flex justify-center py-2 h-16 relative">
            <motion.div
              initial={reduced ? {} : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.4 }}
              style={{ transformOrigin: "top" }}
              className="w-[2px] h-full bg-gradient-to-b from-accent to-border relative z-0"
            />
             <motion.div 
              initial={{ top: 0, opacity: 0 }} 
              animate={{ top: "100%", opacity: [0, 1, 0] }} 
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
              className="absolute w-2 h-2 bg-accent rounded-full blur-[2px] -ml-[1px]" 
            />
          </div>
          <div className="glass-panel text-text/80 px-6 py-4 rounded-lg text-center font-semibold tracking-wider relative z-10">
            <span className="text-text-3">YOUR SYSTEMS</span> — LOS · Decision Engine · Adverse Action Engine
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
                <span className="inline-flex font-mono text-[11px] font-semibold text-green bg-green/10 border border-green/20 rounded-md px-3 py-1.5 uppercase tracking-[0.1em]">{c.badge}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
