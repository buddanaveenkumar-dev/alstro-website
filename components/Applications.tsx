"use client";

import { motion, useReducedMotion } from "framer-motion";

const apps = [
  {
    name: "Adverse Action AI",
    regs: "ECOA · FCRA · CFPB 2023-03",
    value:
      "Generates model-specific, ECOA-compliant reason codes from actual decision factors.",
    bullets: [
      "SHAP-based attribution per denial",
      "Permissibility validation against ECOA requirements",
      "Compliant notice generation in under 400ms",
    ],
  },
  {
    name: "Fair Lending AI",
    regs: "ECOA · Reg B · UDAP",
    value:
      "Monitors every decision for disparate impact continuously — not quarterly.",
    bullets: [
      "Disparate impact ratio computed per decision",
      "Proxy variable detection and flagging",
      "Less-discriminatory alternative analysis",
    ],
  },
  {
    name: "Model Governance AI",
    regs: "Fed SR 11-7 · OCC 2011-12",
    value:
      "Generates SR 11-7 documentation automatically on every model change.",
    bullets: [
      "Validation documentation auto-generated",
      "Real-time model drift detection and alerts",
      "Version-controlled change log and audit history",
    ],
  },
];

export default function Applications() {
  const reduced = useReducedMotion();

  return (
    <section className="py-20 border-t border-border">
      <div className="section-container">
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          Core compliance applications
        </motion.p>
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="font-heading text-[32px] lg:text-[36px] text-text leading-tight max-w-[520px] mb-12"
        >
          Three applications. One runtime.
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-4">
          {apps.map((app, i) => (
            <motion.div
              key={app.name}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut" as const,
                delay: reduced ? 0 : i * 0.06,
              }}
              className="bg-bg-raised border border-border rounded-lg p-6 flex flex-col"
            >
              <h3 className="text-[15px] font-medium text-text mb-1">
                {app.name}
              </h3>
              <p className="text-[11px] font-mono text-text-muted mb-4">
                {app.regs}
              </p>
              <p className="text-[14px] text-text-secondary leading-relaxed mb-5">
                {app.value}
              </p>
              <ul className="space-y-2 mt-auto">
                {app.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-[13px] text-text-secondary"
                  >
                    <span className="w-1 h-1 rounded-full bg-text-muted mt-[7px] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
