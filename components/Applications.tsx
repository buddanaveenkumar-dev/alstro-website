"use client";

import { motion, useReducedMotion } from "framer-motion";

const agents = [
  {
    regs: ["ECOA", "FCRA", "CFPB 2023-03"],
    name: "Adverse Action AI",
    desc: "Generates compliant reason codes from actual model factors.",
    bullets: [
      "SHAP attribution per denial",
      "ECOA permissibility validation",
      "Compliant notice in under 400ms",
    ],
    metric: "95% of denials resolved automatically",
  },
  {
    regs: ["ECOA", "Reg B"],
    name: "Fair Lending AI",
    desc: "Monitors every decision for disparate impact. Continuously.",
    bullets: [
      "Disparate impact ratio per decision",
      "Proxy variable detection",
      "Less-discriminatory alternative analysis",
    ],
    metric: "Eliminates the 89-day testing blind spot",
  },
  {
    regs: ["Fed SR 11-7", "OCC 2011-12"],
    name: "Model Governance AI",
    desc: "Generates SR 11-7 documentation on every model change.",
    bullets: [
      "Validation docs auto-generated",
      "Real-time drift detection",
      "Version-controlled change log",
    ],
    metric: "40 hours → under 2 hours per model change",
  },
];

export default function Applications() {
  const reduced = useReducedMotion();

  return (
    <section id="agents" className="py-20 border-t border-border">
      <div className="section-container">
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          What Alstro covers
        </motion.p>
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="font-heading text-[32px] lg:text-[38px] text-text leading-tight mb-12"
        >
          Three compliance workflows.
          <br />
          One integration.
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-4">
          {agents.map((a, i) => (
            <motion.div
              key={a.name}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut" as const,
                delay: reduced ? 0 : i * 0.06,
              }}
              className="border border-border rounded-xl p-6 bg-bg-raised transition-colors duration-150 hover:border-l-2 hover:border-l-accent flex flex-col"
            >
              <div className="flex flex-wrap gap-1.5 mb-3">
                {a.regs.map((r) => (
                  <span key={r} className="text-[10px] font-mono text-text-muted border border-border rounded-full px-2 py-0.5">
                    {r}
                  </span>
                ))}
              </div>

              <h3 className="text-[15px] font-medium text-text mb-1">{a.name}</h3>
              <p className="text-[14px] text-text-secondary leading-relaxed mb-4">{a.desc}</p>

              <ul className="space-y-1.5 mb-5 flex-1">
                {a.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[13px] text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-text-muted mt-[7px] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border">
                <p className="text-[12px] font-mono text-text-muted">{a.metric}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
