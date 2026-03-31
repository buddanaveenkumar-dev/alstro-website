"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import HeroProofFeed from "./HeroProofFeed";

const headlineWords = "Deploy AI models with cryptographic proof of compliance.".split(" ");

export default function Hero() {
  const reduced = useReducedMotion();
  const f = (d: number) => reduced ? {} : { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" as const, delay: d } };

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-bg">
      {/* Dark mesh gradient background */}
      <div className="absolute inset-0 z-0 bg-bg pointer-events-none overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-accent opacity-[0.05] rounded-full blur-[120px] top-[-20%] left-[-10%] animate-[pulse_10s_infinite_alternate]" />
        <div className="absolute w-[600px] h-[600px] bg-purple opacity-[0.04] rounded-full blur-[100px] bottom-[-20%] right-[-10%] animate-[pulse_12s_infinite_alternate_reverse]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:40px_40px] bg-repeat opacity-[0.03] pointer-events-none" />
      </div>

      <div className="container-main w-full py-20 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div {...f(0)} className="inline-flex items-center gap-2 border border-border bg-surface rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="font-mono text-[11px] text-text-2 uppercase tracking-[0.08em] font-medium">Accepting enterprise shadow pilots</span>
            </motion.div>

            <h1 className="font-heading text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.03em] font-semibold mb-6 flex flex-wrap gap-x-[14px]">
              {headlineWords.map((word, i) => {
                const isHighlight = word.includes("cryptographic") || word.includes("proof");
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                    className={isHighlight ? "text-gradient-accent" : "text-text"}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h1>

            <motion.p {...f(0.5)} className="text-[17px] sm:text-[19px] text-text-2 leading-relaxed max-w-[500px] mb-10 font-medium">
              The institutional enforcement layer. We make every AI-driven lending decision transparent, explainable, and fully compliant with ECOA and FCRA regulations before execution.
            </motion.p>

            <motion.div {...f(0.6)} className="flex flex-wrap items-center gap-4 mb-8">
              <a href="#shadow-pilot" className="button-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-semibold">
                Request Pilot Access <ArrowRight size={16} />
              </a>
              <a href="#solution" className="button-ghost inline-flex items-center gap-2 text-[15px] font-semibold px-7 py-3.5 rounded-lg">
                View Architecture <FileText size={16} />
              </a>
            </motion.div>

            <motion.div {...f(0.7)} className="font-mono text-[11px] text-text-3 uppercase tracking-[0.08em] flex items-center gap-3 font-semibold">
              <span>Model-Agnostic API</span>
              <span className="w-1 h-1 rounded-full bg-border-active"></span>
              <span>Zero Model Retraining</span>
            </motion.div>
          </div>

          {/* Right — Proof Feed */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: reduced ? 0 : 0.8 }}
            className="perspective-1000 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-purple/10 rounded-2xl transform rotate-3 scale-[1.02] z-0 border border-border/50"></div>
            <div className="relative z-10 rotate-y-[-2deg] hover:rotate-y-[0deg] transition-transform duration-700 ease-out shadow-2xl rounded-xl border border-border bg-surface">
              <HeroProofFeed />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
