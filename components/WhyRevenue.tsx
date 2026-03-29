"use client";

import { motion, useReducedMotion } from "framer-motion";

const points = [
  {
    title: "AI adoption stalls at compliance review",
    body: "Financial institutions want AI-driven underwriting. But deployment requires explainability, audit trails, and adverse action defensibility. Without that infrastructure, deals slow down and pilots don\u2019t convert.",
  },
  {
    title: "Platform revenue depends on production deployment",
    body: "Platforms sell AI capability. Revenue comes when that capability reaches production. In regulated financial services, the gap between capability and production is compliance infrastructure.",
  },
  {
    title: "Alstro closes the deployment gap",
    body: "A single execution layer that makes AI-driven decisions explainable, auditable, and regulator-ready \u2014 so platforms can deploy, lenders can adopt, and deals can close.",
  },
];

export default function WhyRevenue() {
  const reduced = useReducedMotion();

  return (
    <section className="py-20 border-t border-border section-alt">
      <div className="section-container">
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          Why this matters for revenue
        </motion.p>
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="font-heading text-[32px] lg:text-[36px] text-text leading-tight max-w-[580px] mb-12"
        >
          Deployment friction in financial services is a revenue problem — not
          just a compliance problem.
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut" as const,
                delay: reduced ? 0 : i * 0.06,
              }}
              className="bg-bg-raised border border-border rounded-lg p-6"
            >
              <h3 className="text-[15px] font-medium text-text mb-3">
                {p.title}
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
