"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, scale: 0.98, y: 20 }, whileInView: { opacity: 1, scale: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.6, ease: "easeOut" as const } };

  return (
    <section className="py-24 lg:py-32 relative bg-surface">
      <div className="container-main">
        <motion.div {...fadeUp} className="glass-panel max-w-[800px] mx-auto text-center rounded-2xl p-10 md:p-16 relative overflow-hidden group border border-border bg-white shadow-xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-700" />
          
          <div className="relative z-10">
            <h2 className="font-heading text-[32px] sm:text-[44px] lg:text-[48px] text-navy leading-[1.08] tracking-[-0.02em] mb-6 font-semibold">
              <span className="text-gradient">Every regulated AI decision</span> should be{" "}
              <span className="text-gradient-accent">provable</span>.
            </h2>
            <p className="text-[17px] sm:text-[19px] text-text-2 leading-relaxed mb-10 max-w-[600px] mx-auto font-medium">
              We are accepting design partner applications for 30-day shadow pilots. Your actual data. Zero production risk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <a href="mailto:sales@alstro.ai?subject=Shadow%20Pilot%20Request" className="button-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-lg text-[16px] font-semibold">
                Request Pilot Program <ArrowRight size={18} />
              </a>
              <a href="mailto:sales@alstro.ai" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[16px] font-medium text-text-2 hover:text-navy border border-border bg-white hover:bg-surface px-8 py-3.5 rounded-lg transition-all duration-300 shadow-sm">
                sales@alstro.ai <Mail size={16} />
              </a>
            </div>
            <p className="font-mono text-[12px] text-text-3 font-medium tracking-[0.05em] mt-8 uppercase">
              Alstro AI — Institutional Compliance Layer
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
