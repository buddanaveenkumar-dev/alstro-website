"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import HeroProofFeed from "./HeroProofFeed";

export default function Hero() {
  const reduced = useReducedMotion();
  const f = (d: number) => reduced ? {} : { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" as const, delay: d } };

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container-main w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div {...f(0)} className="inline-flex items-center gap-2 border border-border rounded-sm px-3.5 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
              <span className="font-mono text-[11px] text-text-2 uppercase tracking-[0.08em]">Accepting shadow pilot partners</span>
            </motion.div>

            <motion.h1 {...f(0.08)} className="font-heading text-[36px] sm:text-[48px] lg:text-[60px] text-text leading-[1.05] tracking-[-0.03em] font-medium mb-6">
              Your AI makes the decision.
              <br />
              Alstro makes it{" "}
              <span className="text-accent">provable</span>
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.p {...f(0.16)} className="text-[17px] sm:text-[19px] text-text-2 leading-relaxed max-w-[520px] mb-10">
              The enforcement layer that makes every AI-driven lending decision
              compliant, explainable, and reproducible — before it executes.
            </motion.p>

            <motion.div {...f(0.24)} className="flex flex-wrap items-center gap-3 mb-4">
              <a href="#shadow-pilot" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-5 py-3 rounded-sm text-[14px] font-semibold transition-colors">
                Start Shadow Pilot <ArrowRight size={15} />
              </a>
              <a href="#solution" className="inline-flex items-center gap-2 text-[14px] text-text-2 hover:text-text border border-border hover:border-border-active px-5 py-3 rounded-sm transition-colors">
                See the architecture <ArrowDown size={15} />
              </a>
            </motion.div>

            <motion.p {...f(0.3)} className="font-mono text-[11px] text-text-3 uppercase tracking-[0.06em]">
              Model-agnostic · Deploys via API · No model access required
            </motion.p>
          </div>

          {/* Right — Proof Feed */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.3 }}
          >
            <HeroProofFeed />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
