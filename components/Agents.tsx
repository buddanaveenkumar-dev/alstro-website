"use client";

import { motion, useReducedMotion } from "framer-motion";

const agents = [
  {
    name: "Adverse Action AI",
    regs: "ECOA · FCRA · CFPB 2023-03",
    desc: "Generates model-specific, ECOA-compliant reason codes from actual underwriting decision factors.",
    bullets: [
      "SHAP attribution per denial",
      "ECOA permissibility check",
      "Compliant notice in <400ms",
    ],
    metric: "handles 95% of denials automatically",
  },
  {
    name: "Fair Lending AI",
    regs: "ECOA · Reg B · UDAP",
    desc: "Continuously monitors every underwriting decision for disparate impact. Not quarterly. Continuously.",
    bullets: [
      "Disparate impact ratio (DIR) per decision",
      "Proxy variable detection",
      "Auto less-discriminatory alternative analysis",
    ],
    metric: "eliminates 89-day blind spot per model cycle",
  },
  {
    name: "Model Governance AI",
    regs: "Fed SR 11-7 · OCC 2011-12",
    desc: "Auto-generates SR 11-7 documentation. Monitors model drift. Keeps you exam-ready at all times.",
    bullets: [
      "Validation docs auto-generated on model change",
      "Real-time model drift alerts",
      "Change log + version history",
    ],
    metric: "40 hrs → under 2 hrs per model change",
  },
  {
    name: "Income Intelligence AI",
    regs: "QM · ATR · CFPB ATR rule",
    desc: "Transforms gig and alternative income data into ATR-compliant underwriting documentation.",
    bullets: [
      "Stripe / Gusto / Plaid payroll ingest",
      "Seasonal income normalization",
      "ATR documentation output",
    ],
    metric: "approves borrowers competitors currently decline",
  },
];

export default function Agents() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section id="agents" className="py-24 border-t border-border">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.p
          {...fadeUp}
          className="text-[11px] font-mono text-text-3 uppercase tracking-widest mb-4"
        >
          Compliance agents
        </motion.p>

        <motion.h2
          {...fadeUp}
          className="font-heading text-[36px] text-text-1 leading-tight max-w-[600px] mb-12"
        >
          Four agents. One runtime. Every underwriting compliance workflow
          covered.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut" as const,
                delay: prefersReducedMotion ? 0 : i * 0.08,
              }}
              className="group bg-bg border border-border rounded-xl p-7 transition-colors duration-150 hover:border-l-accent hover:border-l-2 flex flex-col"
            >
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-[15px] font-medium text-text-1">
                  {agent.name}
                </h3>
              </div>
              <div className="text-xs font-mono text-text-3 mb-4">
                {agent.regs}
              </div>

              <p className="text-sm text-text-2 leading-relaxed mb-4">
                {agent.desc}
              </p>

              <ul className="space-y-2 mb-5 flex-1">
                {agent.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-text-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border text-sm font-mono text-text-3">
                {agent.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
