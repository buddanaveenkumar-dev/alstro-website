"use client";

import { motion, useReducedMotion } from "framer-motion";

const gaps = [
  {
    label: "Adverse Action",
    severity: "high",
    title: "Incorrect explanations",
    body: "Boilerplate reason codes do not reflect the model\u2019s actual decision factors. The CFPB named this as an enforcement priority.",
  },
  {
    label: "Fair Lending",
    severity: "high",
    title: "Delayed visibility",
    body: "Models update monthly. Fair lending tests happen quarterly. Disparate impact builds undetected in the gap between.",
  },
  {
    label: "Governance",
    severity: "operational",
    title: "Fragmented documentation",
    body: "SR 11-7 requires documentation for every model change. Most compliance teams are months behind on model governance records.",
  },
  {
    label: "Audit",
    severity: "operational",
    title: "Reactive readiness",
    body: "Exam prep requires weeks of reconstructing decision trails from emails and spreadsheets. The audit record is not built into the workflow.",
  },
];

export default function ExecutionGap() {
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
          The execution gap
        </motion.p>
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="font-heading text-[32px] lg:text-[36px] text-text leading-tight max-w-[600px] mb-12"
        >
          AI is already used in underwriting decisions. Compliance at execution is not.
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {gaps.map((g, i) => (
            <motion.div
              key={g.title}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut" as const,
                delay: reduced ? 0 : i * 0.05,
              }}
              className="bg-bg-raised border border-border rounded-lg p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    g.severity === "high" ? "bg-red" : "bg-amber"
                  }`}
                />
                <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                  {g.label}
                </span>
              </div>
              <h3 className="text-[15px] font-medium text-text mb-2">
                {g.title}
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                {g.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
