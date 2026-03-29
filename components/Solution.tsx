"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Brain, Database, RotateCcw } from "lucide-react";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Policy Enforcement",
    desc: "Pre-execution blocking. Every decision evaluated against versioned ECOA, FCRA, and SR 11-7 rules before it reaches the borrower.",
    metric: "Zero non-compliant decisions reach production",
  },
  {
    icon: Brain,
    title: "Explanation Generation",
    desc: "SHAP attribution mapped to ECOA-compliant reason codes. Model-specific, not boilerplate. Generated in under 400ms per decision.",
    metric: "<400ms per adverse action notice",
  },
  {
    icon: Database,
    title: "Immutable Audit Trail",
    desc: "Cryptographically timestamped record of every decision, every factor, every policy evaluation. Exam-ready from day one.",
    metric: "100% of decisions with full audit trail",
  },
  {
    icon: RotateCcw,
    title: "Deterministic Replay",
    desc: "Any disputed decision can be exactly re-run — same inputs, same model version, same policy rules. A proof, not a reconstruction.",
    metric: "Exact reproduction of any past decision",
  },
];

export default function Solution() {
  const reduced = useReducedMotion();

  const fadeUp = {
    initial: reduced ? {} : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section id="solution" className="py-24 bg-bg-surface">
      <div className="section-container">
        <motion.p {...fadeUp} className="font-mono text-[11px] text-accent uppercase tracking-widest mb-3">
          The solution
        </motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[32px] lg:text-[40px] text-text leading-tight max-w-[600px] mb-6">
          An enforcement layer, not a wrapper.
        </motion.h2>
        <motion.p {...fadeUp} className="text-[16px] text-text-secondary max-w-[560px] mb-14 leading-relaxed">
          Alstro sits between your AI models and your lending execution systems.
          Every decision passes through four enforcement capabilities before it
          reaches the borrower.
        </motion.p>

        {/* Architecture diagram */}
        <motion.div {...fadeUp} className="max-w-[720px] mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-stretch gap-3">
            <div className="flex-1 border border-border rounded-lg p-4 text-center flex flex-col justify-center">
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">Your models</p>
              <p className="text-[13px] text-text-secondary">Scorecards · ML · Rules · FICO</p>
            </div>

            <div className="hidden md:flex items-center px-1">
              <svg width="28" height="12" viewBox="0 0 28 12" fill="none"><path d="M0 6h24m0 0l-4-4m4 4l-4 4" stroke="var(--color-accent)" strokeWidth="1.5"/></svg>
            </div>
            <div className="flex md:hidden justify-center py-1">
              <svg width="12" height="24" viewBox="0 0 12 24" fill="none"><path d="M6 0v20m0 0l-4-4m4 4l4-4" stroke="var(--color-accent)" strokeWidth="1.5"/></svg>
            </div>

            <div className="flex-[2] border-2 border-accent rounded-lg p-5 bg-bg">
              <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3 text-center">Alstro Enforcement Layer</p>
              <div className="grid grid-cols-2 gap-2">
                {["Policy enforcement", "Explanation generation", "Immutable audit trail", "Deterministic replay"].map((c) => (
                  <div key={c} className="bg-bg border border-border rounded px-2.5 py-1.5 text-center">
                    <span className="text-[11px] text-text-secondary">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center px-1">
              <svg width="28" height="12" viewBox="0 0 28 12" fill="none"><path d="M0 6h24m0 0l-4-4m4 4l-4 4" stroke="var(--color-accent)" strokeWidth="1.5"/></svg>
            </div>
            <div className="flex md:hidden justify-center py-1">
              <svg width="12" height="24" viewBox="0 0 12 24" fill="none"><path d="M6 0v20m0 0l-4-4m4 4l4-4" stroke="var(--color-accent)" strokeWidth="1.5"/></svg>
            </div>

            <div className="flex-1 border border-border rounded-lg p-4 text-center flex flex-col justify-center">
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">Your systems</p>
              <p className="text-[13px] text-text-secondary">LOS · Execution · Notices</p>
            </div>
          </div>
        </motion.div>

        {/* Capability cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={reduced ? {} : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.05 }}
                className="bg-bg border border-border rounded-lg p-6 hover:border-accent/40 transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={18} className="text-accent" />
                  <h3 className="text-[15px] font-medium text-text">{c.title}</h3>
                </div>
                <p className="text-[14px] text-text-secondary leading-relaxed mb-4">{c.desc}</p>
                <span className="inline-flex font-mono text-[10px] text-green bg-green/10 border border-green/20 rounded-full px-2.5 py-0.5 uppercase tracking-wider">
                  {c.metric}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
