"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  const reduced = useReducedMotion();
  const founderEmail = process.env.NEXT_PUBLIC_FOUNDER_EMAIL || "naveen@alstro.ai";

  const fadeUp = {
    initial: reduced ? {} : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section className="py-24">
      <div className="section-container max-w-[640px] mx-auto text-center">
        <motion.h2 {...fadeUp} className="font-heading text-[32px] lg:text-[40px] text-text leading-tight mb-6">
          Ready to make your AI decisions provable?
        </motion.h2>
        <motion.p {...fadeUp} className="text-[16px] text-text-secondary leading-relaxed mb-10">
          30-day shadow pilot. Your data. Your models. No production impact. No
          commitment until you see the results.
        </motion.p>
        <motion.div {...fadeUp} className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <a href="#shadow-pilot" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dim text-white px-6 py-3 rounded text-[14px] font-medium transition-colors">
            Request Shadow Pilot <ArrowRight size={15} />
          </a>
          <a href={`mailto:${founderEmail}`} className="inline-flex items-center gap-2 text-[14px] text-text-secondary hover:text-text border border-border hover:border-border-strong px-6 py-3 rounded transition-colors">
            Contact directly <Mail size={15} />
          </a>
        </motion.div>
        <motion.p {...fadeUp} className="font-mono text-[11px] text-text-muted">
          naveen@alstro.ai · Naveen Budda, Founder
        </motion.p>
      </div>
    </section>
  );
}
