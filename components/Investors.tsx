"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Investors() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  return (
    <section id="investors" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          {...fadeUp}
          className="font-heading text-3xl lg:text-5xl text-text-1 text-center mb-4"
        >
          The compliance layer credit AI has been missing.
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="text-lg text-text-2 text-center mb-16 max-w-2xl mx-auto"
        >
          What Arva does for financial crime compliance, Alstro does for credit
          decisions.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Column 1 — The market */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-bg-2 border border-border rounded-xl p-6 lg:p-8"
          >
            <h3 className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
              The market
            </h3>
            <p className="text-sm text-text-2 leading-relaxed mb-6">
              The AMLA 2020 is to FinCrimes what Dodd-Frank was to credit risk —
              a legislative mandate for modernization that creates a decade of
              compliance infrastructure spend.
            </p>
            <p className="text-sm text-text-2 leading-relaxed mb-6">
              The same pattern is now hitting credit: CFPB enforcement + AI
              adoption = infrastructure demand.
            </p>
            <div className="space-y-3 pt-4 border-t border-border">
              <div>
                <div className="text-2xl font-heading text-text-1">$4.2B</div>
                <div className="text-xs text-text-3">
                  US lending compliance software market
                </div>
              </div>
              <div>
                <div className="text-2xl font-heading text-text-1">$890M</div>
                <div className="text-xs text-text-3">
                  Addressable in AI-driven decisioning compliance (2026)
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2 — The traction signal */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="bg-bg-2 border border-border rounded-xl p-6 lg:p-8"
          >
            <h3 className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
              The traction signal
            </h3>
            <p className="text-sm text-text-2 leading-relaxed mb-6">
              Every fintech lender running an ML scorecard received the same CFPB
              circular. Every community bank running alternative data has the same
              adverse action exposure. The pipeline is self-identifying.
            </p>
            <ul className="space-y-3 text-sm text-text-2">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                2 design partners in diligence
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                30-day shadow pilot structure
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                BaaS channel: 1 integration = 20–50 lenders
              </li>
            </ul>
          </motion.div>

          {/* Column 3 — The ask */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="bg-bg-2 border border-border rounded-xl p-6 lg:p-8"
          >
            <h3 className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
              The ask
            </h3>
            <div className="mb-6">
              <div className="text-sm text-text-3 mb-1">Raising</div>
              <div className="text-2xl font-heading text-text-1">$2.5M seed</div>
            </div>
            <div className="space-y-2 text-sm text-text-2 mb-6">
              <p>Use: 2 design partners → 10 customers</p>
              <p>Build regulatory affairs function</p>
              <p>Hire founding engineer</p>
            </div>
            <div className="pt-4 border-t border-border">
              <div className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
                Why now
              </div>
              <p className="text-sm text-text-2 leading-relaxed">
                The window to become the standard that compliance examiners
                reference is the next 18 months.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Founder */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-bg-2 border border-border rounded-xl p-8 lg:p-12 max-w-3xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Avatar placeholder */}
            <div className="w-16 h-16 rounded-full bg-bg-3 border border-border flex items-center justify-center text-xl font-heading text-accent shrink-0">
              NB
            </div>
            <div>
              <h3 className="text-lg font-medium text-text-1">Naveen Budda</h3>
              <p className="text-sm text-text-3 mb-4">
                Founder &amp; CEO, Alstro AI
              </p>
              <p className="text-sm text-text-2 leading-relaxed mb-4">
                Previously built AI lending infrastructure at KarmaLife —
                deployed across 500,000+ users on regulated balance sheets in
                emerging markets. Deep experience in alternative data, credit
                risk modeling, and regulatory compliance from the ground up.
              </p>
              <blockquote className="text-sm text-text-2 italic border-l-2 border-accent pl-4">
                &ldquo;I have sat across the table from a regulator trying to
                explain an AI credit decision. I built Alstro so lenders never
                have to improvise that answer.&rdquo;
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
