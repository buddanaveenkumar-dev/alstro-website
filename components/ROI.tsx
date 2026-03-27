"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const metrics = [
  { value: "$175K", label: "Annual adverse action analyst cost" },
  { value: "40 hrs", label: "Per model change for SR 11-7 docs" },
  { value: "89 days", label: "Fair lending blind spot per quarter" },
];

const withAlstro = [
  "Adverse action notices generated in <400ms · $0.50–$2.00/event",
  "SR 11-7 documentation: 40 hours → under 2 hours per model change",
  "Fair lending monitoring: quarterly → continuous, every decision",
];

export default function ROI() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  return (
    <section id="roi" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-5xl text-text-1 mb-4">
            The math is straightforward.
          </h2>
          <p className="text-lg text-text-2">
            Example: mid-size fintech lender, 5,000 denials/month
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.value}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: prefersReducedMotion ? 0 : i * 0.1,
              }}
              className="bg-bg-2 border border-border rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-heading text-text-1 mb-2">
                {m.value}
              </div>
              <div className="text-sm text-text-3">{m.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="space-y-4 mb-12">
          {withAlstro.map((line) => (
            <div
              key={line}
              className="flex items-start gap-3 text-sm text-text-2"
            >
              <Check size={16} className="text-green mt-0.5 shrink-0" />
              {line}
            </div>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp}
          className="bg-bg-2 border border-accent/20 rounded-xl p-8 text-center"
        >
          <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
            Typical first-year ROI · community bank or fintech lender
          </div>
          <div className="text-2xl lg:text-3xl font-heading text-text-1 mb-2">
            $180K–$400K
          </div>
          <p className="text-sm text-text-2 max-w-lg mx-auto">
            in recovered analyst time + eliminated exam remediation cost.
            Platform fee + per-decision pricing, aligned to your lending volume.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
