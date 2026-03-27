"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BeforeAfter() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          {...fadeUp}
          className="font-heading text-3xl lg:text-5xl text-text-1 text-center mb-16"
        >
          What a compliant adverse action notice actually looks like.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Before */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-bg-2 border border-border rounded-xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
              <span className="text-xs bg-red/10 text-red px-2 py-0.5 rounded font-medium">
                Before: Boilerplate
              </span>
            </div>
            <div className="p-6 font-mono text-sm text-text-2 space-y-3 leading-relaxed">
              <p className="text-text-3 text-xs mb-4 uppercase tracking-wider">
                Principal reasons for adverse action:
              </p>
              <p>01 — Credit score is too low</p>
              <p>02 — Too many delinquent accounts</p>
              <p>03 — Insufficient income</p>
              <p>04 — Length of credit history</p>
            </div>
            <div className="px-6 py-4 border-t border-border">
              <p className="text-xs text-red/80">
                Violates CFPB Circular 2023-03 when AI made the decision. Does
                not reflect actual model factors.
              </p>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="bg-bg-2 border border-green/20 rounded-xl overflow-hidden shadow-[0_0_30px_-10px_rgba(34,197,94,0.1)]"
          >
            <div className="flex items-center gap-2 px-6 py-4 border-b border-border">
              <span className="text-xs bg-green/10 text-green px-2 py-0.5 rounded font-medium">
                Alstro output
              </span>
            </div>
            <div className="p-6 font-mono text-sm text-text-2 space-y-5 leading-relaxed">
              <p className="text-text-3 text-xs mb-4 uppercase tracking-wider">
                Principal reasons for adverse action:
              </p>

              <div>
                <div className="flex justify-between items-start">
                  <span>01 — Debt-to-income ratio exceeds model threshold</span>
                  <span className="text-accent text-xs ml-2 shrink-0">
                    SHAP: 0.41
                  </span>
                </div>
                <p className="text-text-3 text-xs mt-1 ml-6">
                  Your monthly obligations represent 61% of gross income; model
                  threshold is 45%
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <span>02 — Utilization on revolving accounts</span>
                  <span className="text-accent text-xs ml-2 shrink-0">
                    SHAP: 0.29
                  </span>
                </div>
                <p className="text-text-3 text-xs mt-1 ml-6">
                  Revolving utilization of 84% exceeds the 60% model input
                  threshold
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <span>03 — Recent derogatory account activity</span>
                  <span className="text-accent text-xs ml-2 shrink-0">
                    SHAP: 0.18
                  </span>
                </div>
                <p className="text-text-3 text-xs mt-1 ml-6">
                  One 60-day delinquency in the prior 12 months
                </p>
              </div>

              <div className="border-t border-border pt-4 space-y-1 text-xs text-text-3">
                <div className="flex gap-8">
                  <span>Regulatory basis</span>
                  <span className="text-text-2">
                    ECOA · Reg B · CFPB Circular 2023-03
                  </span>
                </div>
                <div className="flex gap-8">
                  <span>Model version</span>
                  <span className="text-text-2">GBM-v4.2 · 2025-11-14</span>
                </div>
                <div className="flex gap-8">
                  <span>Audit log ID</span>
                  <span className="text-text-2">AA-20251114-0041892</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
