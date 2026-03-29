"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function WhatWeAreBuilding() {
  const reduced = useReducedMotion();

  const fadeUp = {
    initial: reduced ? {} : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section id="what-we-build" className="py-20 border-t border-border">
      <div className="section-container">
        <motion.p
          {...fadeUp}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          What Alstro is building
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="font-heading text-[32px] lg:text-[36px] text-text leading-tight max-w-[600px] mb-5"
        >
          The execution layer between AI systems and regulated outcomes.
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="text-[16px] text-text-secondary max-w-[580px] mb-12 leading-relaxed"
        >
          Alstro sits between model and decision systems on one side, and
          customer-facing or operational outcomes on the other. It ensures every
          AI-driven financial decision is explainable, auditable,
          policy-aligned, and ready for compliant execution.
        </motion.p>

        {/* Architecture flow */}
        <motion.div
          {...fadeUp}
          className="max-w-[720px] mx-auto"
        >
          <div className="flex flex-col md:flex-row items-stretch gap-3">
            {/* Input */}
            <div className="flex-1 bg-bg-muted border border-border rounded-lg p-4 text-center flex flex-col justify-center">
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-1">
                Input
              </p>
              <p className="text-[14px] font-medium text-text mb-0.5">
                AI / Decision systems
              </p>
              <p className="text-[12px] text-text-muted">
                Models · Scorecards · Rules engines
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center px-1">
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                <path d="M0 6h20m0 0l-4-4m4 4l-4 4" stroke="var(--color-border-strong)" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex md:hidden items-center justify-center py-1">
              <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                <path d="M6 0v20m0 0l-4-4m4 4l4-4" stroke="var(--color-border-strong)" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Alstro */}
            <div className="flex-[2] border-2 border-text rounded-lg p-5 bg-bg-raised shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <p className="text-[10px] font-mono text-accent uppercase tracking-widest mb-3 text-center">
                Alstro execution layer
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Reason engine", "Policy engine", "Audit layer", "Notice layer"].map((c) => (
                  <div key={c} className="bg-bg-muted border border-border rounded px-2.5 py-1.5 text-center">
                    <span className="text-[11px] text-text-secondary">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center px-1">
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                <path d="M0 6h20m0 0l-4-4m4 4l-4 4" stroke="var(--color-border-strong)" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex md:hidden items-center justify-center py-1">
              <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                <path d="M6 0v20m0 0l-4-4m4 4l4-4" stroke="var(--color-border-strong)" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Output */}
            <div className="flex-1 bg-bg-muted border border-border rounded-lg p-4 text-center flex flex-col justify-center">
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-1">
                Output
              </p>
              <p className="text-[14px] font-medium text-text mb-0.5">
                Regulated outcomes
              </p>
              <p className="text-[12px] text-text-muted">
                Notices · Records · Audit trails
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          {...fadeUp}
          className="text-[13px] text-text-muted text-center mt-6 max-w-[480px] mx-auto"
        >
          Not a dashboard. Not a model. Infrastructure that makes AI-driven
          financial decisions deployable.
        </motion.p>
      </div>
    </section>
  );
}
