"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import HeroProofFeed from "./HeroProofFeed";

export default function Hero() {
  const reduced = useReducedMotion();
  const f = (d: number) => reduced ? {} : { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" as const, delay: d } };

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-main w-full py-16 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div {...f(0)} className="inline-flex items-center gap-2 border border-border bg-surface/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="font-mono text-[11px] text-text-2 uppercase tracking-[0.08em] font-medium">Accepting shadow pilot partners</span>
            </motion.div>

            <motion.h1 {...f(0.08)} className="font-heading text-[40px] sm:text-[52px] lg:text-[64px] text-text leading-[1.05] tracking-[-0.03em] font-medium mb-6">
              <span className="text-gradient">Your AI makes the decision.</span>
              <br />
              <span className="text-gradient">Alstro makes it</span>{" "}
              <span className="text-gradient-accent">provable</span>
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.p {...f(0.16)} className="text-[17px] sm:text-[19px] text-text-2 leading-relaxed max-w-[520px] mb-10 font-light">
              The enforcement layer that makes every AI-driven lending decision
              compliant, explainable, and reproducible — before it executes.
            </motion.p>

            <motion.div {...f(0.24)} className="flex flex-wrap items-center gap-4 mb-8">
              <a href="#shadow-pilot" className="button-primary inline-flex items-center gap-2 text-white px-6 py-3.5 rounded-md text-[15px] font-medium">
                Start Shadow Pilot <ArrowRight size={16} />
              </a>
              <a href="#solution" className="inline-flex items-center gap-2 text-[15px] font-medium text-text-2 hover:text-text border border-border bg-surface/50 hover:bg-elevated backdrop-blur-sm px-6 py-3.5 rounded-md transition-all duration-300">
                See the architecture <ArrowDown size={16} />
              </a>
            </motion.div>

            <motion.p {...f(0.3)} className="font-mono text-[12px] text-text-3 uppercase tracking-[0.06em] flex items-center gap-3">
              <span>Model-agnostic</span>
              <span className="w-1 h-1 rounded-full bg-border-active"></span>
              <span>Deploys via API</span>
              <span className="w-1 h-1 rounded-full bg-border-active"></span>
              <span>No access required</span>
            </motion.p>
          </div>

          {/* Right — Proof Feed */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.3 }}
            className="perspective-1000"
          >
            <div className="rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
              <HeroProofFeed />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
