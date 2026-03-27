"use client";

import { motion, useReducedMotion } from "framer-motion";

const points = [
  { title: "API and batch integration", desc: "REST API and batch file processing. Fits existing data pipelines." },
  { title: "No model replacement", desc: "Works with your current models, scorecards, and rules engines." },
  { title: "Shadow mode first", desc: "Run parallel to production. Validate outputs before going live." },
  { title: "Human review supported", desc: "HITL escalation built in. Reviewers see full decision context." },
  { title: "Audit-oriented outputs", desc: "Every artifact is structured for examiner review from day one." },
];

export default function Deployment() {
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
          Deployment &amp; trust
        </motion.p>
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="font-heading text-[32px] lg:text-[36px] text-text leading-tight max-w-[480px] mb-3"
        >
          Built to fit existing systems
        </motion.h2>
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="text-[14px] text-text-muted mb-12"
        >
          Designed for regulated environments.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-[820px]">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut" as const,
                delay: reduced ? 0 : i * 0.04,
              }}
            >
              <h3 className="text-[14px] font-medium text-text mb-1">
                {p.title}
              </h3>
              <p className="text-[13px] text-text-muted leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
