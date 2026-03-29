"use client";

import { motion, useReducedMotion } from "framer-motion";

const metrics = [
  { value: "95%", label: "Time reduction in adverse action preparation", detail: "From manual reason code assignment to automated SHAP-based generation" },
  { value: "30→0 days", label: "FCRA dispute investigation time", detail: "Deterministic replay eliminates manual decision reconstruction" },
  { value: "100%", label: "Decisions with complete audit trail", detail: "Cryptographically timestamped, immutable, exam-ready from day one" },
];

export default function ROI() {
  const reduced = useReducedMotion();

  const fadeUp = {
    initial: reduced ? {} : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section className="py-24 bg-bg-surface">
      <div className="section-container">
        <motion.p {...fadeUp} className="font-mono text-[11px] text-accent uppercase tracking-widest mb-3">
          Impact
        </motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[32px] lg:text-[40px] text-text leading-tight max-w-[480px] mb-14">
          The math on manual compliance.
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-4 mb-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.value}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.06 }}
              className="bg-bg border border-border rounded-lg p-6"
            >
              <p className="font-mono text-[32px] text-accent leading-none mb-3">{m.value}</p>
              <p className="text-[14px] font-medium text-text mb-2">{m.label}</p>
              <p className="text-[13px] text-text-muted leading-relaxed">{m.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="bg-bg border border-border rounded-lg p-6 max-w-[640px]">
          <p className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-3">
            Example: mid-size fintech, 5,000 denials/month
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="font-mono text-[11px] text-text-muted uppercase tracking-wider mb-1">Manual compliance cost</p>
              <p className="font-mono text-[24px] text-red leading-none">$175K<span className="text-[14px] text-text-muted">/yr</span></p>
            </div>
            <div>
              <p className="font-mono text-[11px] text-text-muted uppercase tracking-wider mb-1">With Alstro</p>
              <p className="font-mono text-[24px] text-green leading-none">$90K<span className="text-[14px] text-text-muted">/yr</span></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
