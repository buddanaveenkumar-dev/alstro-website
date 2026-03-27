"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BeforeAfter() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.p
          {...fadeUp}
          className="text-[11px] font-mono text-text-3 uppercase tracking-widest mb-4"
        >
          In practice
        </motion.p>

        <motion.h2
          {...fadeUp}
          className="font-heading text-[36px] text-text-1 leading-tight max-w-[560px] mb-12"
        >
          What a compliant adverse action notice actually looks like.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Before */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            className="bg-bg border border-border rounded-xl overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-border">
              <span className="text-[10px] font-mono font-medium uppercase tracking-wider bg-red-bg text-red px-2 py-1 rounded">
                Non-compliant
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-mono text-text-3 uppercase tracking-wider mb-5">
                Principal reasons for adverse action:
              </p>
              <div className="space-y-3 font-mono text-sm text-text-2">
                <p>01 &nbsp;Credit score is too low</p>
                <p>02 &nbsp;Too many delinquent accounts</p>
                <p>03 &nbsp;Insufficient income</p>
                <p>04 &nbsp;Length of credit history</p>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-border bg-red-bg">
              <p className="text-xs text-red leading-relaxed">
                Violates CFPB Circular 2023-03. These codes do not reflect the
                model&apos;s actual decision factors.
              </p>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              ease: "easeOut" as const,
              delay: 0.08,
            }}
            className="bg-bg border border-border rounded-xl overflow-hidden border-l-2 border-l-accent"
          >
            <div className="px-6 py-4 border-b border-border">
              <span className="text-[10px] font-mono font-medium uppercase tracking-wider bg-green-bg text-green px-2 py-1 rounded">
                ECOA-compliant
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-mono text-text-3 uppercase tracking-wider mb-5">
                Principal reasons for adverse action:
              </p>
              <div className="space-y-5 text-sm text-text-2">
                <div>
                  <div className="flex justify-between">
                    <span className="font-mono">
                      01 &nbsp;Debt-to-income ratio exceeds model threshold
                    </span>
                  </div>
                  <p className="text-xs text-text-3 mt-1 ml-6">
                    Monthly obligations: 61% of gross income · threshold: 45%
                  </p>
                  <p className="text-xs font-mono text-text-3 text-right">
                    SHAP: 0.41
                  </p>
                </div>

                <div>
                  <div className="flex justify-between">
                    <span className="font-mono">
                      02 &nbsp;Utilization on revolving accounts
                    </span>
                  </div>
                  <p className="text-xs text-text-3 mt-1 ml-6">
                    Current: 84% · model threshold: 60%
                  </p>
                  <p className="text-xs font-mono text-text-3 text-right">
                    SHAP: 0.29
                  </p>
                </div>

                <div>
                  <div className="flex justify-between">
                    <span className="font-mono">
                      03 &nbsp;Recent derogatory account activity
                    </span>
                  </div>
                  <p className="text-xs text-text-3 mt-1 ml-6">
                    One 60-day delinquency within prior 12 months
                  </p>
                  <p className="text-xs font-mono text-text-3 text-right">
                    SHAP: 0.18
                  </p>
                </div>

                <div className="border-t border-border pt-4 space-y-1.5 text-xs font-mono text-text-3">
                  <div className="flex justify-between">
                    <span>Regulatory basis</span>
                    <span className="text-text-2">
                      ECOA · Reg B · CFPB Circular 2023-03
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Model version</span>
                    <span className="text-text-2">GBM-v4.2 · 2025-11-14</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Audit log ID</span>
                    <span className="text-accent">AA-20251114-0041892</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          {...fadeUp}
          className="text-sm text-text-3 text-center mt-8"
        >
          Model-agnostic. Works with FICO, gradient boosted trees, logistic
          regression, or any scorecard.
        </motion.p>
      </div>
    </section>
  );
}
