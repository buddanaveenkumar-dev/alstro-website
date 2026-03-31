"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import HeroProofFeed from "./HeroProofFeed";

export default function Hero() {
  const reduced = useReducedMotion();
  const f = (d: number) => reduced ? {} : { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" as const, delay: d } };

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-bg">
      <div className="container-main w-full py-20 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div {...f(0)} className="inline-flex items-center gap-2 border border-border bg-surface rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
              <span className="font-mono text-[11px] text-text-2 uppercase tracking-[0.08em] font-medium">Accepting enterprise shadow pilots</span>
            </motion.div>

            <motion.h1 {...f(0.08)} className="font-heading text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.03em] font-semibold mb-6 text-navy">
              Deploy AI models with <span className="text-gradient-accent">cryptographic proof</span> of compliance.
            </motion.h1>

            <motion.p {...f(0.16)} className="text-[17px] sm:text-[19px] text-text-2 leading-relaxed max-w-[500px] mb-10 font-medium">
              The institutional enforcement layer. We make every AI-driven lending decision transparent, explainable, and fully compliant with ECOA and FCRA regulations before execution.
            </motion.p>

            <motion.div {...f(0.24)} className="flex flex-wrap items-center gap-4 mb-8">
              <a href="#shadow-pilot" className="button-primary inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-lg text-[15px] font-semibold">
                Request Pilot Access <ArrowRight size={16} />
              </a>
              <a href="#solution" className="inline-flex items-center gap-2 text-[15px] font-semibold text-text-2 hover:text-navy border border-border bg-white hover:bg-surface px-7 py-3.5 rounded-lg transition-all duration-300 shadow-sm">
                View Architecture <FileText size={16} />
              </a>
            </motion.div>

            <motion.div {...f(0.3)} className="font-mono text-[11px] text-text-3 uppercase tracking-[0.08em] flex items-center gap-3 font-semibold">
              <span>Model-Agnostic API</span>
              <span className="w-1 h-1 rounded-full bg-border-active"></span>
              <span>Zero Model Retraining</span>
            </motion.div>
          </div>

          {/* Right — Proof Feed */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.3 }}
            className="perspective-1000 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-purple/5 rounded-2xl transform rotate-3 scale-105 z-0 border border-border/50"></div>
            <div className="relative z-10 rotate-y-[-2deg] hover:rotate-y-0 transition-transform duration-700 ease-out shadow-xl rounded-xl bg-white border border-border">
              <HeroProofFeed />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
