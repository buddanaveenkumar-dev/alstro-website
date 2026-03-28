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
        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 items-start"
        >
          {/* Left — bio */}
          <div>
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center font-mono text-white font-medium text-base mb-5">
              NB
            </div>
            <p className="text-base font-medium text-text mb-0.5">
              Naveen Budda
            </p>
            <p className="text-sm text-text-muted mb-5">Founder, Alstro AI</p>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Previously built AI lending infrastructure at KarmaLife —
              alternative data credit systems deployed across 500,000+ users on
              regulated balance sheets.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Deep experience operating where credit risk modeling, compliance
              obligations, and production execution intersect.
            </p>
          </div>

          {/* Right — pull quote */}
          <div className="border-l-[3px] border-l-accent pl-7 pt-1">
            <p className="font-heading text-[18px] leading-relaxed text-text italic">
              &ldquo;I have sat across the table from a regulator trying to
              explain an AI credit decision. I built Alstro because lenders
              shouldn&apos;t have to improvise that answer.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
