"use client";

import { motion, useReducedMotion } from "framer-motion";

const segments = [
  {
    name: "Fintech lenders",
    desc: "ML models in production. High volume. Direct CFPB exposure on adverse action compliance.",
  },
  {
    name: "Community banks & credit unions",
    desc: "$300M–$5B assets. Small compliance teams. SR 11-7 and fair lending documentation are exam priorities.",
  },
  {
    name: "BaaS platforms",
    desc: "One integration covers an entire program bank portfolio. Compliance infrastructure for many lenders.",
  },
];

export default function ICP() {
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
          Who it&apos;s for
        </motion.p>
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="font-heading text-[32px] lg:text-[36px] text-text leading-tight max-w-[480px] mb-12"
        >
          Built for lenders running AI-assisted credit decisions
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-4">
          {segments.map((s, i) => (
            <motion.div
              key={s.name}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut" as const,
                delay: reduced ? 0 : i * 0.06,
              }}
              className="border border-border rounded-lg p-6 bg-bg-raised"
            >
              <h3 className="text-[15px] font-medium text-text mb-2">
                {s.name}
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
