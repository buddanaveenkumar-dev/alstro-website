"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Founder() {
  const reduced = useReducedMotion();

  const fadeUp = {
    initial: reduced ? {} : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section className="py-20 border-t border-border">
      <div className="section-container">
        <motion.p
          {...fadeUp}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-8"
        >
          Founder
        </motion.p>

        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 items-start"
        >
          <div>
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center font-mono text-white font-medium text-base mb-5">
              NB
            </div>
            <p className="text-base font-medium text-text mb-0.5">
              Naveen Budda
            </p>
            <p className="text-sm text-text-muted mb-5">Founder, Alstro AI</p>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Built and operated AI lending infrastructure at KarmaLife —
              alternative data credit systems deployed across 500,000+ users on
              regulated balance sheets. Understands what it takes to move
              AI-driven financial decisions from prototype to production in
              regulated environments.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Building the execution layer he needed but did not have — the
              infrastructure between model output and regulated outcome.
            </p>
          </div>

          <div className="border-l-[3px] border-l-accent pl-7 pt-1">
            <p className="font-heading text-[18px] leading-relaxed text-text italic">
              &ldquo;I have sat across the table from a regulator explaining an
              AI credit decision. The layer between the model and that
              conversation did not exist. That is what Alstro is.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
