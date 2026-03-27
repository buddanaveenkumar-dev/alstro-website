"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  { num: "1", title: "Ingest", desc: "Model output + decision context received" },
  { num: "2", title: "Attribute", desc: "Feature importance computed (SHAP)" },
  { num: "3", title: "Check", desc: "Policy engine: ECOA · FCRA · SR 11-7 rules applied" },
  { num: "4", title: "Generate", desc: "Compliant artifacts produced" },
  { num: "5", title: "Log", desc: "Immutable audit record written" },
  { num: "6", title: "Release", desc: "Decision passed to downstream system" },
];

function StackDiagram() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="max-w-[600px] mx-auto my-16">
      {/* Top box */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" as const }}
        className="bg-bg-3 border border-border rounded-lg p-5 text-center"
      >
        <div className="text-sm text-text-2 mb-1">
          Your existing underwriting stack
        </div>
        <div className="text-xs font-mono text-text-3">
          FICO · ML scorecard · Zest · rules
        </div>
      </motion.div>

      {/* Connector SVG */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.15 }}
        className="flex justify-center"
      >
        <svg
          width="2"
          height="40"
          viewBox="0 0 2 40"
          className="text-border-2"
        >
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="40"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>
      </motion.div>

      {/* Alstro Runtime */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.2 }}
        className="border-2 border-accent rounded-lg p-5"
      >
        <div className="text-center mb-4">
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            Alstro compliance runtime
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {["Policy engine", "Audit ledger", "Explainability", "HITL escalation"].map(
            (label) => (
              <span
                key={label}
                className="text-xs text-text-2 border border-border rounded-full px-3 py-1.5"
              >
                {label}
              </span>
            )
          )}
        </div>
      </motion.div>

      {/* Connector SVG */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.35 }}
        className="flex justify-center"
      >
        <svg
          width="2"
          height="40"
          viewBox="0 0 2 40"
          className="text-border-2"
        >
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="40"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>
      </motion.div>

      {/* Bottom box */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.4 }}
        className="bg-bg-3 border border-border rounded-lg p-5 text-center"
      >
        <div className="text-sm text-text-2 mb-1">Your downstream systems</div>
        <div className="text-xs font-mono text-text-3">
          LOS · Decision engine · AAN workflow
        </div>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section id="how-it-works" className="py-24 border-t border-border">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.p
          {...fadeUp}
          className="text-[11px] font-mono text-text-3 uppercase tracking-widest mb-4"
        >
          The product
        </motion.p>

        <motion.h2
          {...fadeUp}
          className="font-heading text-[36px] text-text-1 leading-tight max-w-[560px] mb-4"
        >
          Alstro governs underwriting execution. Not prediction.
        </motion.h2>

        <motion.p {...fadeUp} className="text-[17px] text-text-2 max-w-[520px]">
          It doesn&apos;t replace your model. It enforces compliance on every
          decision your model produces.
        </motion.p>

        <StackDiagram />

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut" as const,
                delay: prefersReducedMotion ? 0 : i * 0.06,
              }}
              className="text-center"
            >
              <div className="w-8 h-8 rounded-full bg-accent text-white text-xs flex items-center justify-center mx-auto mb-2.5 font-mono">
                {step.num}
              </div>
              <div className="text-sm font-medium text-text-1 mb-1">
                {step.title}
              </div>
              <div className="text-xs text-text-3 leading-relaxed">
                {step.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
