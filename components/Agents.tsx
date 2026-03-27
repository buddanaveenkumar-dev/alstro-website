"use client";

import { motion, useReducedMotion } from "framer-motion";

const agents = [
  {
    name: "Adverse Action AI",
    regs: "ECOA · FCRA · CFPB 2023-03",
    desc: "Generates model-specific, ECOA-compliant reason codes from actual decision factors.",
    bullets: [
      "SHAP attribution per denial",
      "ECOA permissibility check",
      "<400ms per notice",
    ],
    metric: "Handles 95% of denials automatically",
  },
  {
    name: "Fair Lending AI",
    regs: "ECOA · Reg B · UDAP",
    desc: "Continuously monitors every decision for disparate impact. Not quarterly. Continuously.",
    bullets: [
      "Disparate impact ratio (DIR)",
      "Proxy variable detection",
      "Auto LDA analysis",
    ],
    metric: "Eliminates 89-day blind spot per model update cycle",
  },
  {
    name: "Model Governance AI",
    regs: "Fed SR 11-7 · OCC 2011-12",
    desc: "Auto-generates SR 11-7 documentation. Monitors drift. Keeps you exam-ready always.",
    bullets: [
      "Validation docs auto-gen",
      "Real-time drift alerts",
      "Change log + version history",
    ],
    metric: "Reduces doc time from 40 hrs → under 2 hrs",
  },
  {
    name: "Income Intelligence AI",
    regs: "QM · ATR · CFPB ability-to-repay",
    desc: "Transforms gig platform data into bankable ATR-compliant income documentation.",
    bullets: [
      "Stripe / Gusto / Plaid ingest",
      "Seasonal income normalization",
      "ATR documentation output",
    ],
    metric: "Approves 15–20% more borrowers competitors currently decline",
  },
];

export default function Agents() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl lg:text-5xl text-text-1 mb-4">
            Four agents. Every compliance obligation covered.
          </h2>
          <p className="text-lg text-text-2 max-w-2xl mx-auto">
            Purpose-built for each workflow. Governed by a shared runtime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: prefersReducedMotion ? 0 : i * 0.1,
              }}
              className="group bg-bg-2 border border-border rounded-xl p-6 lg:p-8 transition-all duration-150 hover:scale-[1.01] hover:border-l-accent hover:border-l-2 flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-lg font-medium text-text-1 mb-1">
                  {agent.name}
                </h3>
                <div className="text-xs font-mono text-text-3">
                  {agent.regs}
                </div>
              </div>

              <p className="text-sm text-text-2 leading-relaxed mb-5">
                {agent.desc}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
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

              <div className="pt-4 border-t border-border text-sm text-green font-medium">
                {agent.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
