"use client";

import { motion, useReducedMotion } from "framer-motion";

const components = [
  {
    name: "Policy Engine",
    desc: "Evaluates each decision against ECOA, FCRA, and SR 11-7 rules. Configurable per institution and model type.",
  },
  {
    name: "Explainability Layer",
    desc: "Computes feature attribution (SHAP) for every decision. Maps model outputs to compliant, human-readable reason codes.",
  },
  {
    name: "Audit Ledger",
    desc: "Immutable record of every decision, every artifact, and every policy evaluation. Exam-ready by default.",
  },
  {
    name: "HITL Escalation",
    desc: "Routes decisions that require human review. Captures reviewer rationale. Maintains the audit chain.",
  },
];

export default function RuntimeArchitecture() {
  const reduced = useReducedMotion();

  return (
    <section id="runtime" className="py-20 border-t border-border">
      <div className="section-container">
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          Runtime architecture
        </motion.p>
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="font-heading text-[32px] lg:text-[36px] text-text leading-tight max-w-[600px] mb-3"
        >
          The regulated runtime between model output and credit execution
        </motion.h2>
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="text-[14px] text-text-muted mb-14"
        >
          Designed for regulated deployment.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4">
          {components.map((c, i) => (
            <motion.div
              key={c.name}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut" as const,
                delay: reduced ? 0 : i * 0.05,
              }}
              className="border border-border rounded-lg p-6 bg-bg-raised"
            >
              <h3 className="text-[14px] font-medium text-text mb-2 font-mono">
                {c.name}
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
