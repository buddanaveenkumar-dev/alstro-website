"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  const reduced = useReducedMotion();

  const fade = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: "easeOut" as const, delay },
        };

  return (
    <section className="pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="section-container">
        <div className="max-w-[720px]">
          {/* Eyebrow */}
          <motion.p
            {...fade(0)}
            className="text-[12px] font-mono text-accent tracking-wide mb-5"
          >
            Alpha program for lenders exploring compliant AI decision execution
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fade(0.06)}
            className="font-heading text-[42px] lg:text-[56px] text-text leading-[1.08] mb-5"
          >
            Compliance infrastructure
            <br />
            for credit decisions
          </motion.h1>

          {/* Subhead */}
          <motion.p
            {...fade(0.12)}
            className="text-[17px] text-text-secondary leading-relaxed max-w-[580px] mb-4"
          >
            Model-agnostic runtime designed to make every credit decision
            compliant, explainable, and audit-ready.
          </motion.p>

          {/* Support line */}
          <motion.p
            {...fade(0.16)}
            className="text-[15px] text-text-muted leading-relaxed max-w-[540px] mb-8"
          >
            Alstro sits between your underwriting stack and your execution
            systems — and is designed to integrate with the platforms lenders
            already rely on.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.2)} className="flex flex-wrap items-center gap-3 mb-5">
            <a
              href="#alpha"
              className="inline-flex items-center gap-2 bg-text text-bg hover:bg-text/90 px-5 py-2.5 rounded-md text-[14px] font-medium transition-colors"
            >
              Join the alpha program <ArrowRight size={15} />
            </a>
            <a
              href="#decision-flow"
              className="inline-flex items-center gap-2 text-[14px] text-text-secondary hover:text-text border border-border hover:border-border-strong px-5 py-2.5 rounded-md transition-colors"
            >
              See how one decision flows <ArrowDown size={15} />
            </a>
          </motion.div>

          {/* Trust note */}
          <motion.p {...fade(0.24)} className="text-[12px] text-text-muted font-mono">
            Working with select lenders and design partners in alpha.
          </motion.p>
        </div>

        {/* Architecture Diagram */}
        <motion.div
          {...fade(0.3)}
          className="mt-16 lg:mt-20 max-w-[640px]"
        >
          <div className="space-y-0">
            {/* Top tier */}
            <div className="bg-bg-muted border border-border rounded-lg px-5 py-4">
              <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-1.5">
                Your models
              </p>
              <p className="text-[13px] text-text-secondary">
                Credit scorecards · ML models · Rules engines · FICO
              </p>
            </div>

            {/* Connector */}
            <div className="flex items-center gap-3 py-2 pl-8">
              <div className="w-px h-6 bg-border-strong" />
            </div>

            {/* Alstro runtime */}
            <div className="bg-bg-raised border-2 border-text rounded-lg px-5 py-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-mono text-text uppercase tracking-widest font-medium">
                  Alstro Runtime
                </span>
                <span className="text-[10px] font-mono text-accent bg-accent-light rounded px-1.5 py-[1px]">
                  compliance layer
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Policy checks",
                  "Explainability",
                  "Fair lending",
                  "Audit logging",
                  "HITL escalation",
                ].map((label) => (
                  <span
                    key={label}
                    className="text-[12px] text-text-secondary bg-bg-muted border border-border rounded px-2.5 py-1"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Connector */}
            <div className="flex items-center gap-3 py-2 pl-8">
              <div className="w-px h-6 bg-border-strong" />
            </div>

            {/* Bottom tier */}
            <div className="bg-bg-muted border border-border rounded-lg px-5 py-4">
              <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-1.5">
                Your execution systems
              </p>
              <p className="text-[13px] text-text-secondary">
                LOS · Decision engines · Adverse action workflows
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
