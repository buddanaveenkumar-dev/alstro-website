"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Brain, Database, RotateCcw } from "lucide-react";

const capabilities = [
  { icon: ShieldCheck, title: "Policy Enforcement", desc: "Every decision checked against ECOA, FCRA, TILA, UDAAP before execution. Violations blocked, not logged.", badge: "Pre-execution blocking" },
  { icon: Brain, title: "Explanation Generation", desc: "SHAP-based feature attribution + ECOA permissibility. Model-specific adverse action notices.", badge: "< 400ms per notice" },
  { icon: Database, title: "Immutable Audit Trail", desc: "Append-only ledger, cryptographic timestamps. Exportable for OCC/CFPB exams.", badge: "Record exists before the complaint" },
  { icon: RotateCcw, title: "Deterministic Replay", desc: "Re-run exact decision path: same inputs, same policy, same model version. A proof, not a reconstruction.", badge: "Only capability of its kind" },
];

export default function Architecture() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.4, ease: "easeOut" as const } };

  return (
    <section id="solution" className="py-24 bg-surface">
      <div className="container-main">
        <motion.p {...fadeUp} className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-3">The enforcement layer</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[30px] lg:text-[40px] text-text leading-[1.1] tracking-[-0.02em] max-w-[580px] mb-6">
          One API. Every model. Every decision. Proven before execution.
        </motion.h2>
        <motion.p {...fadeUp} className="text-[16px] text-text-2 max-w-[520px] mb-14">
          Alstro sits between your AI models and your lending execution systems.
          Every decision passes through four enforcement capabilities before it
          reaches the borrower.
        </motion.p>

        {/* Architecture diagram */}
        <motion.div {...fadeUp} className="max-w-[680px] mx-auto mb-16 font-mono text-[12px] sm:text-[13px]">
          <div className="text-text-3 px-4 py-2 border border-border rounded-sm bg-bg mb-1">
            <span className="text-text-3/60">YOUR MODELS</span> — FICO · ML Scorecards · Zest · Alt Data
          </div>
          <div className="flex justify-center py-1">
            <motion.div
              initial={reduced ? {} : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.2 }}
              style={{ transformOrigin: "top" }}
              className="w-px h-8 bg-accent"
            />
          </div>
          <div className="border-2 border-accent rounded-sm px-4 py-4 bg-elevated">
            <p className="text-accent text-[10px] uppercase tracking-[0.15em] mb-2">Alstro Enforcement Layer</p>
            <p className="text-text-2">Policy Engine · Explanation Generator · Audit Ledger · Deterministic Replay</p>
          </div>
          <div className="flex justify-center py-1">
            <motion.div
              initial={reduced ? {} : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.4 }}
              style={{ transformOrigin: "top" }}
              className="w-px h-8 bg-accent"
            />
          </div>
          <div className="text-text-3 px-4 py-2 border border-border rounded-sm bg-bg">
            <span className="text-text-3/60">YOUR SYSTEMS</span> — LOS · Decision Engine · Adverse Action
          </div>
        </motion.div>

        {/* Capability cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div key={c.title} initial={reduced ? {} : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.05 }}
                className="bg-elevated border border-border rounded-sm p-6 border-l-[3px] border-l-accent hover:border-border-active transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={18} className="text-accent" />
                  <h3 className="text-[16px] font-semibold text-text">{c.title}</h3>
                </div>
                <p className="text-[14px] text-text-2 leading-relaxed mb-4">{c.desc}</p>
                <span className="inline-flex font-mono text-[10px] text-green bg-green/10 border border-green/20 rounded-sm px-2.5 py-1 uppercase tracking-[0.06em]">{c.badge}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
