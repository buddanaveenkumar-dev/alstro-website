"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function WhyNow() {
  const reduced = useReducedMotion();

  const fadeUp = {
    initial: reduced ? {} : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section className="pt-28 pb-20 border-t border-border">
      <div className="section-container">
        <motion.p
          {...fadeUp}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          Why this matters now
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="font-heading text-[36px] lg:text-[40px] text-text leading-tight max-w-[560px] mb-10"
        >
          The compliance gap in underwriting AI is structural, not incidental.
        </motion.h2>

        <motion.div {...fadeUp} className="max-w-[640px] space-y-5 mb-10">
          <p className="text-[16px] text-text-secondary leading-relaxed">
            Lenders have deployed AI in underwriting faster than the compliance
            infrastructure required to run it safely. Models score applications.
            Scorecards set thresholds. Alternative data expands access. None of
            this is the problem.
          </p>
          <p className="text-[16px] text-text-secondary leading-relaxed">
            The problem is execution. CFPB Circular 2023-03 made it explicit:
            when an AI model makes the denial, a generic reason code is not a
            compliant adverse action notice. Fair lending tests happen quarterly
            while models update monthly. SR 11-7 documentation requires 40–60
            hours per model change that most compliance teams don&apos;t have.
            Every lender running AI-assisted underwriting is carrying regulatory
            exposure they can see but can&apos;t yet systematically close.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="flex flex-wrap gap-2 max-w-[640px]">
          {["CFPB 2023-03", "ECOA", "FCRA", "Fed SR 11-7", "OCC 2011-12"].map((reg) => (
            <span
              key={reg}
              className="text-[11px] font-mono text-text-muted border border-border rounded-full px-3 py-1"
            >
              {reg}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
