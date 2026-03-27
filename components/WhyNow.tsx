"use client";

import { motion, useReducedMotion } from "framer-motion";

const points = [
  {
    number: "01",
    text: "AI is already making credit decisions — models, scorecards, and alternative data are in production at lenders of every size.",
  },
  {
    number: "02",
    text: "Regulatory expectations are sharpening. CFPB Circular 2023-03 made it explicit: generic reason codes violate ECOA when AI made the decision.",
  },
  {
    number: "03",
    text: "Compliance infrastructure has not caught up. There is no runtime layer that enforces compliance at the point of every credit decision.",
  },
];

export default function WhyNow() {
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
          Why this matters now
        </motion.p>
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="font-heading text-[32px] lg:text-[36px] text-text leading-tight max-w-[520px] mb-12"
        >
          The compliance gap in credit AI is structural, not incidental.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {points.map((p, i) => (
            <motion.div
              key={p.number}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut" as const,
                delay: reduced ? 0 : i * 0.06,
              }}
            >
              <p className="text-[12px] font-mono text-text-muted mb-3">
                {p.number}
              </p>
              <p className="text-[15px] text-text-secondary leading-relaxed">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
