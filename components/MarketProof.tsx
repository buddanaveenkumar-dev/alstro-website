"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function MarketProof() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.4, ease: "easeOut" as const } };

  return (
    <section className="py-24 bg-surface">
      <div className="container-main">
        <motion.p {...fadeUp} className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-3">Market validation</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[30px] lg:text-[40px] text-text leading-[1.1] tracking-[-0.02em] max-w-[600px] mb-14">
          Bridgeforce proved the market. Alstro solves the problem they cannot.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {/* Downstream */}
          <motion.div {...fadeUp} className="bg-elevated border border-border rounded-sm p-6">
            <p className="font-mono text-[10px] text-text-3 uppercase tracking-[0.1em] mb-4">Downstream</p>
            <p className="text-[16px] font-semibold text-text mb-4">Bridgeforce Data Solutions</p>
            <ul className="space-y-2 text-[14px] text-text-2 leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-text-3 mt-1">·</span>~$20M revenue over 10 years</li>
              <li className="flex items-start gap-2"><span className="text-text-3 mt-1">·</span>50+ financial institution clients</li>
              <li className="flex items-start gap-2"><span className="text-text-3 mt-1">·</span>6 of top 20 banks, 7 of top 10 credit unions</li>
              <li className="flex items-start gap-2"><span className="text-text-3 mt-1">·</span>Scans Metro 2® data after furnishing</li>
              <li className="flex items-start gap-2"><span className="text-text-3 mt-1">·</span>Entire business case: FCRA litigation growth</li>
            </ul>
          </motion.div>

          {/* Upstream */}
          <motion.div initial={reduced ? {} : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.06 }}
            className="bg-elevated border border-border rounded-sm p-6 border-l-[3px] border-l-accent"
          >
            <p className="font-mono text-[10px] text-accent uppercase tracking-[0.1em] mb-4">Upstream</p>
            <p className="text-[16px] font-semibold text-text mb-4">Alstro</p>
            <ul className="space-y-2 text-[14px] text-text-2 leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-accent mt-1">·</span>Generates provable record before errors reach the bureau</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1">·</span>Pre-execution enforcement, not post-furnishing scanning</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1">·</span>Complementary — not competitive</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1">·</span>Their customer base is our initial market</li>
            </ul>
          </motion.div>
        </div>

        <motion.p {...fadeUp} className="text-[15px] text-text-2 max-w-[600px] leading-relaxed">
          Bridgeforce validated that financial institutions will pay to reduce FCRA exposure. They built $20M doing it downstream. The upstream problem — generating proof at the point of decision — is what they cannot solve. That is Alstro.
        </motion.p>
      </div>
    </section>
  );
}
