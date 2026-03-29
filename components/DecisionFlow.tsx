"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  { num: "01", title: "Ingest model output", detail: "GBM-v4.2 · score: 0.38 · outcome: deny" },
  { num: "02", title: "Attribute decision factors", detail: "DTI ratio → 0.41 · revolving util → 0.29" },
  { num: "03", title: "Apply policy checks", detail: "ECOA ✓ · fair lending DIR ✓ · SR 11-7 ✓" },
  { num: "04", title: "Generate compliant artifacts", detail: "notice: AA-20251114-4189 · model-doc queued" },
  { num: "05", title: "Log audit record", detail: "audit-id: AUD-20251114-4189 · hash: 0x7a3f...c912" },
  { num: "06", title: "Release or escalate", detail: "→ LOS release · 312ms total" },
];

export default function DecisionFlow() {
  const reduced = useReducedMotion();

  return (
    <section id="how-it-works" className="py-20 border-t border-border">
      <div className="section-container">
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          How it works
        </motion.p>
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="font-heading text-[32px] lg:text-[38px] text-text leading-tight mb-12"
        >
          One decision. Six steps.
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 max-w-[680px]">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                ease: "easeOut" as const,
                delay: reduced ? 0 : i * 0.04,
              }}
            >
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-[11px] font-mono text-text-muted">{step.num}</span>
                <h3 className="text-[14px] font-medium text-text">{step.title}</h3>
              </div>
              <p className="text-[12px] font-mono text-text-muted leading-relaxed ml-7">
                {step.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
