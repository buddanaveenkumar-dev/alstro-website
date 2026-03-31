"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function MarketProof() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 15 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.5, ease: "easeOut" as const } };

  return (
    <section className="py-24 lg:py-32 relative bg-surface/30">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.p {...fadeUp} className="font-mono text-[12px] text-accent uppercase tracking-[0.2em] mb-4 font-semibold">Market validation</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] text-text leading-[1.1] tracking-[-0.02em] max-w-[680px] mb-16">
          Bridgeforce proved the market. <span className="text-gradient">Alstro solves the problem they cannot</span>.
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-6 lg:gap-10 mb-16 relative">
          
          {/* VS Badge */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-bg border border-border/60 rounded-full z-20 items-center justify-center font-mono font-bold text-text-3 text-[14px]">
            VS
          </div>

          {/* Downstream */}
          <motion.div {...fadeUp} className="flex-1 glass-panel rounded-xl p-8 lg:p-10 relative overflow-hidden group border border-border/40">
            <div className="absolute top-0 right-0 w-24 h-24 bg-surface/50 rounded-bl-[80px] transition-transform duration-500 group-hover:scale-125" />
            <p className="font-mono text-[11px] text-text-3 uppercase tracking-[0.15em] mb-3 font-semibold">Downstream</p>
            <p className="text-[24px] font-bold text-text mb-6 tracking-tight">Bridgeforce Data Solutions</p>
            <ul className="space-y-4 text-[15px] sm:text-[16px] text-text-3 leading-relaxed font-light">
              <li className="flex items-start gap-3"><span className="text-text-3 mt-1 text-lg">·</span>~$20M revenue over 10 years</li>
              <li className="flex items-start gap-3"><span className="text-text-3 mt-1 text-lg">·</span>50+ financial institution clients</li>
              <li className="flex items-start gap-3"><span className="text-text-3 mt-1 text-lg">·</span>6 of top 20 banks, 7 of top 10 credit unions</li>
              <li className="flex items-start gap-3"><span className="text-text-3 mt-1 text-lg">·</span>Scans Metro 2® data after furnishing</li>
              <li className="flex items-start gap-3"><span className="text-text-3 mt-1 text-lg">·</span>Entire business case: FCRA litigation growth</li>
            </ul>
          </motion.div>

          <div className="flex lg:hidden w-12 h-12 mx-auto bg-bg border border-border/60 rounded-full z-20 items-center justify-center font-mono font-bold text-text-3 text-[14px]">
            VS
          </div>

          {/* Upstream */}
          <motion.div initial={reduced ? {} : { opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.1 }}
            className="flex-1 glass-panel rounded-xl p-8 lg:p-10 border border-accent/30 relative overflow-hidden group shadow-[0_8px_32px_rgba(59,130,246,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-accent/5 before:to-transparent before:-z-10"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-125" />
            <p className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-3 font-bold drop-shadow-md">Upstream</p>
            <p className="text-[24px] font-bold text-text mb-6 tracking-tight">Alstro</p>
            <ul className="space-y-4 text-[15px] sm:text-[16px] text-text-2 leading-relaxed font-light">
              <li className="flex items-start gap-3"><span className="text-accent mt-1 text-lg glow">·</span><span className="text-text-2 drop-shadow-[0_0_8px_rgba(59,130,246,0.2)]">Generates provable record before errors reach the bureau</span></li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1 text-lg">·</span>Pre-execution enforcement, not post-furnishing scanning</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1 text-lg">·</span>Complementary — not competitive</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1 text-lg">·</span>Their customer base is our initial market</li>
            </ul>
          </motion.div>
        </div>

        <motion.div {...fadeUp} className="glass-panel text-[17px] sm:text-[18px] text-text-2 max-w-[800px] leading-relaxed font-light mx-auto p-6 md:p-8 rounded-lg border-l-[4px] border-l-purple bg-elevated shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple/20 to-transparent" />
          <p>
            Bridgeforce validated that financial institutions will pay to reduce FCRA exposure. They built $20M doing it downstream. <span className="text-text font-semibold drop-shadow-sm">The upstream problem — generating proof at the point of decision — is what they cannot solve.</span> That is Alstro.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
