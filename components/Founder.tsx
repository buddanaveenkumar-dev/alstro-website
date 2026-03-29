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
    <section className="py-24 border-t border-border border-b border-b-border">
      <div className="section-container">
        <motion.div
          {...fadeUp}
          className="max-w-[880px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16 items-start"
        >
          {/* Left — credentials */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-base font-medium text-text tracking-tight">
                Naveen Budda
              </p>
              <p className="text-sm text-text-muted mt-0.5">
                Founder, Alstro AI
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-start">
                <span className="font-mono text-[11px] text-text-muted mt-0.5 shrink-0 uppercase tracking-wider">
                  Previously
                </span>
                <span className="text-sm text-text-secondary leading-relaxed">
                  Built AI lending infrastructure at KarmaLife —
                  alternative data credit systems deployed across
                  500,000+ users on regulated balance sheets.
                </span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-mono text-[11px] text-text-muted mt-0.5 shrink-0 uppercase tracking-wider">
                  Focus
                </span>
                <span className="text-sm text-text-secondary leading-relaxed">
                  Credit risk modeling, compliance obligations,
                  and production execution in regulated markets.
                </span>
              </div>
            </div>

            <a
              href="mailto:naveen@alstro.ai"
              className="font-mono text-xs text-text-muted hover:text-accent transition-colors w-fit"
            >
              naveen@alstro.ai
            </a>
          </div>

          {/* Right — quote */}
          <div className="border-l border-border-strong pl-8 py-1">
            <p className="font-heading text-[17px] leading-[1.7] text-text-secondary italic">
              &ldquo;I have sat across the table from a regulator explaining an
              AI credit decision. The infrastructure between the model and that
              conversation did not exist. That is what Alstro is.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
