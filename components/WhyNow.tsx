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

        {/* CFPB Callout */}
        <motion.div
          {...fadeUp}
          className="max-w-[640px] bg-accent-light border-l-[3px] border-l-accent rounded-r-lg p-6"
        >
          <p className="text-[11px] font-mono text-accent uppercase tracking-widest mb-3">
            CFPB Circular 2023-03 · August 2023
          </p>
          <p className="font-heading text-[17px] text-text leading-relaxed italic">
            Generic adverse action reason codes violate ECOA when an AI model
            made the decision. The notice must reflect the model&apos;s actual
            decision factors.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
