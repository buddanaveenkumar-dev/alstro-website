"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function TheProblem() {
  const reduced = useReducedMotion();

  const fadeUp = {
    initial: reduced ? {} : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section className="pt-24 pb-20 border-t border-border">
      <div className="section-container">
        <motion.p
          {...fadeUp}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          The problem
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="font-heading text-[36px] lg:text-[40px] text-text leading-tight max-w-[600px] mb-10"
        >
          AI platforms are moving into lending and underwriting. Deployment keeps
          stalling.
        </motion.h2>

        <motion.div {...fadeUp} className="max-w-[640px] space-y-5 mb-10">
          <p className="text-[16px] text-text-secondary leading-relaxed">
            AI and ML models are already making underwriting decisions —
            scoring applications, setting thresholds, evaluating alternative
            data. The model capability is not the bottleneck.
          </p>
          <p className="text-[16px] text-text-secondary leading-relaxed">
            The bottleneck is execution. Regulated financial decisions require
            defensible explanations, traceable audit records, fair lending
            verification, and policy-aligned adverse action notices — before
            they can reach production. Without this layer, AI adoption in
            financial services slows to the speed of manual compliance review.
          </p>
          <p className="text-[16px] text-text-secondary leading-relaxed font-medium text-text">
            This is not only a model problem. It is an execution architecture
            problem.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="flex flex-wrap gap-2 max-w-[640px]">
          {["CFPB 2023-03", "ECOA", "FCRA", "Fed SR 11-7", "OCC 2011-12"].map((reg) => (
            <span
              key={reg}
              className="text-[11px] font-mono text-text-muted border border-border rounded-full px-3 py-1"
            >
              {reg}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
