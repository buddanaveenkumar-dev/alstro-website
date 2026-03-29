"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  const reduced = useReducedMotion();
  const fade = (delay: number) => reduced ? {} : {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  };

  return (
    <section className="pt-28 pb-20 lg:pt-40 lg:pb-28">
      <div className="section-container max-w-[820px] mx-auto text-center">
        <motion.div {...fade(0)} className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green pulse-live" />
          <span className="font-mono text-[11px] text-text-secondary uppercase tracking-wider">
            Accepting design partner applications
          </span>
        </motion.div>

        <motion.h1 {...fade(0.08)} className="font-heading text-[40px] md:text-[56px] lg:text-[64px] text-text leading-[1.08] mb-6">
          Every AI lending decision —{" "}
          <em className="text-accent not-italic">provable</em>{" "}
          before it executes.
        </motion.h1>

        <motion.p {...fade(0.16)} className="text-[18px] text-text-secondary leading-relaxed max-w-[600px] mx-auto mb-10">
          Alstro is the enforcement layer between your AI models and lending
          execution. Every decision gets an explainable reason, an immutable
          audit record, and a compliance proof — before it reaches the borrower.
        </motion.p>

        <motion.div {...fade(0.24)} className="flex flex-wrap items-center justify-center gap-3 mb-4">
          <a href="#shadow-pilot" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dim text-white px-6 py-3 rounded text-[14px] font-medium transition-colors">
            Request Shadow Pilot <ArrowRight size={15} />
          </a>
          <a href="#solution" className="inline-flex items-center gap-2 text-[14px] text-text-secondary hover:text-text border border-border hover:border-border-strong px-6 py-3 rounded transition-colors">
            See How It Works <ArrowDown size={15} />
          </a>
        </motion.div>

        <motion.p {...fade(0.3)} className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
          Model-agnostic · Deploys via API · No model access required
        </motion.p>
      </div>
    </section>
  );
}
