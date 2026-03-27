"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  { num: "1", title: "Ingest", desc: "Model output + decision context received" },
  { num: "2", title: "Enrich", desc: "Feature attribution computed (SHAP)" },
  { num: "3", title: "Check", desc: "Policy engine applies ECOA/FCRA/SR 11-7 rules" },
  { num: "4", title: "Generate", desc: "Compliant artifacts produced (notice, report, doc)" },
  { num: "5", title: "Log", desc: "Immutable audit record written" },
  { num: "6", title: "Release", desc: "Decision passed to downstream system" },
];

function StackDiagram() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="max-w-2xl mx-auto">
      {/* Top box */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-bg-2 border border-border rounded-xl p-6 text-center"
      >
        <div className="text-sm text-text-2 mb-1">Your existing credit stack</div>
        <div className="text-xs text-text-3 font-mono">
          FICO · ML scorecard · Zest · internal rules
        </div>
      </motion.div>

      {/* Connector */}
      <motion.div
        initial={prefersReducedMotion ? {} : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        className="flex justify-center"
        style={{ transformOrigin: "top" }}
      >
        <div className="w-px h-10 border-l-2 border-dashed border-border-2" />
      </motion.div>

      {/* Alstro Runtime */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="bg-bg-2 border border-accent/40 rounded-xl p-6 shadow-[0_0_30px_-10px_rgba(99,102,241,0.15)]"
      >
        <div className="text-center mb-5">
          <div className="text-xs font-mono text-accent tracking-widest uppercase mb-1">
            Alstro Runtime
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["Policy engine", "Audit ledger", "Explainability", "HITL escalation"].map(
            (label) => (
              <div
                key={label}
                className="bg-bg-3 border border-border rounded-lg px-4 py-3 text-center text-sm text-text-2"
              >
                {label}
              </div>
            )
          )}
        </div>
      </motion.div>

      {/* Connector */}
      <motion.div
        initial={prefersReducedMotion ? {} : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
        className="flex justify-center"
        style={{ transformOrigin: "top" }}
      >
        <div className="w-px h-10 border-l-2 border-dashed border-border-2" />
      </motion.div>

      {/* Bottom box */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        className="bg-bg-2 border border-border rounded-xl p-6 text-center"
      >
        <div className="text-sm text-text-2 mb-1">Your downstream systems</div>
        <div className="text-xs text-text-3 font-mono">
          LOS · Decision engine · Adverse action flow
        </div>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl lg:text-5xl text-text-1 mb-4">
            Alstro sits between your models and your systems.
          </h2>
          <p className="text-lg text-text-2 max-w-2xl mx-auto">
            It doesn&apos;t replace what you have. It governs what it does.
          </p>
        </motion.div>

        <StackDiagram />

        {/* Steps */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: prefersReducedMotion ? 0 : i * 0.08,
              }}
              className="bg-bg-2 border border-border rounded-xl p-4 text-center"
            >
              <div className="text-xs font-mono text-accent mb-2">
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
