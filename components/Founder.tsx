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
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
        >
          {/* Left — bio */}
          <div className="flex items-start gap-5">
            <div className="w-[52px] h-[52px] rounded-full bg-accent flex items-center justify-center text-[18px] font-heading text-white shrink-0">
              NB
            </div>
            <div>
              <p className="text-[16px] font-medium text-text">Naveen Budda</p>
              <p className="text-[13px] text-text-muted mb-4">
                Founder, Alstro AI
              </p>
              <p className="text-[14px] text-text-secondary leading-relaxed mb-3">
                Previously built AI lending infrastructure at KarmaLife —
                alternative data credit systems deployed across 500,000+ users
                on regulated balance sheets.
              </p>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                Deep experience at the intersection of credit risk modeling,
                compliance obligations, and production execution in regulated
                markets.
              </p>
            </div>
          </div>

          {/* Right — pull quote */}
          <div className="border-l-2 border-l-accent pl-6 lg:pl-8">
            <p className="font-heading text-[22px] lg:text-[24px] text-text leading-snug italic">
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
