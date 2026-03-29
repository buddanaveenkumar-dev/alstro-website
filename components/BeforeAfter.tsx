"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BeforeAfter() {
  const reduced = useReducedMotion();

  const fadeUp = {
    initial: reduced ? {} : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section id="before-after" className="py-20 border-t border-border">
      <div className="section-container">
        <motion.p
          {...fadeUp}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          In practice
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="font-heading text-[32px] lg:text-[36px] text-text leading-tight max-w-[560px] mb-3"
        >
          What compliant looks like.
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="text-[16px] text-text-secondary max-w-[580px] mb-12"
        >
          CFPB Circular 2023-03: when AI made the decision, the adverse
          action notice must reflect the model&apos;s actual decision factors.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* ── Without Alstro ── */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            className="bg-bg-muted border border-border rounded-xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-border">
              <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                Without Alstro
              </span>
              <span className="text-[11px] font-mono bg-red-light text-red px-2 py-0.5 rounded uppercase tracking-wider">
                Non-compliant
              </span>
            </div>
            <div className="p-6">
              <p className="text-[11px] font-mono text-text-muted uppercase tracking-wider mb-5">
                Principal reasons for adverse action:
              </p>
              <div className="space-y-3 font-mono text-[14px] text-text-secondary">
                <p>01 &nbsp;&nbsp;Credit score is too low</p>
                <p>02 &nbsp;&nbsp;Too many delinquent accounts</p>
                <p>03 &nbsp;&nbsp;Insufficient income</p>
                <p>04 &nbsp;&nbsp;Length of credit history</p>
              </div>
            </div>
            <div className="px-6 py-4 bg-red-light border-t border-red/10">
              <p className="text-[12px] text-red leading-relaxed">
                Violates CFPB Circular 2023-03. These codes do not reflect the
                model&apos;s actual decision factors.
              </p>
            </div>
          </motion.div>

          {/* ── With Alstro ── */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.06 }}
            className="bg-bg-raised border border-border rounded-xl overflow-hidden border-l-2 border-l-accent"
          >
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-border">
              <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                With Alstro
              </span>
              <span className="text-[11px] font-mono bg-green-light text-green px-2 py-0.5 rounded uppercase tracking-wider">
                ECOA-compliant
              </span>
            </div>
            <div className="p-6">
              <p className="text-[11px] font-mono text-text-muted uppercase tracking-wider mb-5">
                Principal reasons for adverse action:
              </p>

              <div className="space-y-5 text-[14px] text-text-secondary">
                <div>
                  <p className="font-mono">
                    01 &nbsp;&nbsp;Debt-to-income ratio exceeds model threshold
                  </p>
                  <p className="text-[12px] text-text-muted mt-1 ml-8">
                    Monthly obligations: 61% of gross income · threshold: 45%
                  </p>
                  <p className="text-[12px] font-mono text-text-muted text-right">
                    SHAP: 0.41
                  </p>
                </div>

                <div>
                  <p className="font-mono">
                    02 &nbsp;&nbsp;Utilization on revolving accounts
                  </p>
                  <p className="text-[12px] text-text-muted mt-1 ml-8">
                    Current utilization: 84% · model threshold: 60%
                  </p>
                  <p className="text-[12px] font-mono text-text-muted text-right">
                    SHAP: 0.29
                  </p>
                </div>

                <div>
                  <p className="font-mono">
                    03 &nbsp;&nbsp;Recent derogatory account activity
                  </p>
                  <p className="text-[12px] text-text-muted mt-1 ml-8">
                    One 60-day delinquency within prior 12 months
                  </p>
                  <p className="text-[12px] font-mono text-text-muted text-right">
                    SHAP: 0.18
                  </p>
                </div>
              </div>

              <hr className="border-border my-5" />

              <div className="space-y-1.5 text-[12px] font-mono text-text-muted">
                <div className="flex justify-between">
                  <span>Regulatory basis</span>
                  <span className="text-text-secondary">ECOA · Reg B · CFPB Circular 2023-03</span>
                </div>
                <div className="flex justify-between">
                  <span>Model version</span>
                  <span className="text-text-secondary">GBM-v4.2 · 2025-11-14</span>
                </div>
                <div className="flex justify-between">
                  <span>Audit log ID</span>
                  <span className="text-accent">AA-20251114-0041892</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          {...fadeUp}
          className="text-[14px] text-text-muted italic text-center mt-6"
        >
          Model-agnostic. The same process works with FICO, gradient boosted
          trees, logistic regression, or any scorecard.
        </motion.p>
      </div>
    </section>
  );
}
