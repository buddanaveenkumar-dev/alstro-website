"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.4, ease: "easeOut" as const } };

  return (
    <section className="py-24">
      <div className="container-main max-w-[640px] mx-auto text-center">
        <motion.h2 {...fadeUp} className="font-heading text-[32px] lg:text-[42px] text-text leading-[1.08] tracking-[-0.02em] mb-6">
          Every regulated AI decision should be{" "}
          <span className="text-accent">provable</span> before execution.
        </motion.h2>
        <motion.p {...fadeUp} className="text-[16px] text-text-2 leading-relaxed mb-10">
          We are accepting design partner applications for 30-day shadow pilots. Your actual data. Zero production risk.
        </motion.p>
        <motion.div {...fadeUp} className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <a href="mailto:naveen@alstro.ai?subject=Shadow%20Pilot%20Request" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-sm text-[14px] font-semibold transition-colors">
            Start Shadow Pilot <ArrowRight size={15} />
          </a>
          <a href="mailto:naveen@alstro.ai" className="inline-flex items-center gap-2 text-[14px] text-text-2 hover:text-text border border-border hover:border-border-active px-6 py-3 rounded-sm transition-colors">
            naveen@alstro.ai <Mail size={14} />
          </a>
        </motion.div>
        <motion.p {...fadeUp} className="font-mono text-[11px] text-text-3">
          Naveen Budda, Founder · naveen@alstro.ai
        </motion.p>
      </div>
    </section>
  );
}
