"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import StatsBar from "./Stats";

export default function Hero() {
  const reduced = useReducedMotion();
  const f = (d: number) => reduced ? {} : { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" as const, delay: d } };

  return (
    <>
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden bg-bg">
        {/* Subtle decorative background elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent opacity-[0.03] rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:40px_40px] bg-repeat opacity-[0.02]" />
        </div>

        <div className="container-main relative z-10 flex flex-col items-center text-center">
          {/* Announcement Pill */}
          <motion.div {...f(0.1)} className="inline-flex items-center gap-2 border border-accent/20 bg-accent-light rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-[pulse_2s_infinite]" />
            <span className="text-[13px] text-text font-medium">Accepting enterprise shadow pilots</span>
          </motion.div>

          {/* Main Content */}
          <motion.h1 {...f(0.2)} className="max-w-[800px] mb-6">
            Deploy AI models with cryptographic proof of compliance.
          </motion.h1>

          <motion.p {...f(0.3)} className="text-[17px] md:text-[19px] text-text-2 max-w-[640px] mb-10">
            The institutional enforcement layer. We make every AI-driven lending decision transparent, explainable, and fully compliant with ECOA and FCRA regulations before execution.
          </motion.p>

          {/* CTAs */}
          <motion.div {...f(0.4)} className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full justify-center">
            <a href="#shadow-pilot" className="btn-primary w-full sm:w-auto">
              Request Pilot Access
            </a>
            <a href="#solution" className="btn-secondary w-full sm:w-auto gap-2">
              View Architecture <ArrowDown size={18} />
            </a>
          </motion.div>

          {/* Small Feature Pills */}
          <motion.div {...f(0.5)} className="flex items-center gap-3">
            <span className="px-3 py-1 border border-border rounded-full text-[12px] text-text-2 font-mono bg-bg">Model-Agnostic API</span>
            <span className="w-1 h-1 rounded-full bg-border"></span>
            <span className="px-3 py-1 border border-border rounded-full text-[12px] text-text-2 font-mono bg-bg">Zero Model Retraining</span>
          </motion.div>

          {/* Floating 'Decision intercepted' badge (Decorative) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="hidden lg:flex absolute top-1/2 right-[5%] xl:right-[10%] -translate-y-1/2 items-center gap-3 bg-white border border-border p-3 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          >
            <CheckCircle2 size={24} className="text-green" />
            <div className="text-left">
              <div className="text-[14px] font-semibold text-text leading-tight">Decision intercepted</div>
              <div className="text-[12px] text-text-3 font-mono">14ms · <span className="text-green font-medium">live</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar Component */}
      <StatsBar />
    </>
  );
}
