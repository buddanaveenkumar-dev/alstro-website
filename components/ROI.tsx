"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function CountUp({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setCount(end);
      return;
    }
    if (isInView) {
      let start = 0;
      const duration = 1500;
      if (end === 0) {
        setCount(0);
        return;
      }
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end, reduced]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

function ThirtyToZero() {
  const [step, setStep] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const t1 = setTimeout(() => setStep(1), 500); // show arrow
    const t2 = setTimeout(() => setStep(2), 1000); // show zero
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [isInView]);

  return (
    <motion.span ref={ref} className="font-heading text-[64px] lg:text-[72px] font-bold leading-none mb-4 tracking-tighter flex items-center gap-3">
      <span className="text-text">30</span>
      <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: step >= 1 ? 1 : 0, scale: step >= 1 ? 1 : 0 }} className="text-accent">→</motion.span>
      <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: step >= 2 ? 1 : 0, x: step >= 2 ? 0 : -20 }} className="text-green text-[64px] lg:text-[72px] font-bold drop-shadow-[0_0_12px_rgba(16,185,129,0.3)]">0</motion.span>
    </motion.span>
  );
}

export default function ROI() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 15 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.5, ease: "easeOut" as const } };

  return (
    <section className="py-24 lg:py-32 bg-bg relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.p {...fadeUp} className="font-mono text-[12px] text-green uppercase tracking-[0.2em] mb-4 font-semibold">The math</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] text-text leading-[1.1] tracking-[-0.02em] max-w-[600px] mb-16">
          Manual compliance <span className="text-gradient">breaks at AI-scale volume</span>.
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          <motion.div initial={reduced ? {} : { opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
            className="glass-panel rounded-xl p-8 lg:p-10 relative overflow-hidden flex flex-col justify-center"
          >
            <p className="font-heading text-[64px] lg:text-[72px] font-bold text-text mb-2"><CountUp end={95} suffix="%" /></p>
            <p className="text-[15px] sm:text-[16px] text-text-2 leading-relaxed font-light">Reduction in adverse action preparation time</p>
          </motion.div>

          <motion.div initial={reduced ? {} : { opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="glass-panel rounded-xl p-8 lg:p-10 relative overflow-hidden flex flex-col justify-center border-accent/20 bg-gradient-to-br from-surface to-accent/5 shadow-[0_4px_24px_rgba(59,130,246,0.05)]"
          >
            <ThirtyToZero />
            <p className="text-[15px] sm:text-[16px] text-text-2 leading-relaxed font-light"><span className="text-text font-medium">Days:</span> dispute investigation replaced by instant replay</p>
          </motion.div>

          <motion.div initial={reduced ? {} : { opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="glass-panel rounded-xl p-8 lg:p-10 relative overflow-hidden flex flex-col justify-center"
          >
            <p className="font-heading text-[64px] lg:text-[72px] font-bold text-text mb-2"><CountUp end={100} suffix="%" /></p>
            <p className="text-[15px] sm:text-[16px] text-text-2 leading-relaxed font-light">Audit-ready from <span className="text-text font-medium">decision one</span> — no reconstruction</p>
          </motion.div>
        </div>

        <motion.div {...fadeUp} className="glass-panel p-8 md:p-12 rounded-xl border border-border/50 max-w-[800px] shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <p className="font-mono text-[12px] bg-surface rounded-full px-4 py-1.5 border border-border inline-block text-text-3 uppercase tracking-[0.1em] font-medium w-max">
              Example: mid-size fintech · 5,000 denials/month
            </p>
            <div className="font-mono text-[12px] bg-green/10 text-green font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_12px_rgba(16,185,129,0.2)]">
              Save $85K/yr
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative">
              <div className="flex justify-between font-mono text-[11px] uppercase tracking-wider text-text-3 font-semibold mb-3">
                <span>Manual compliance</span>
                <span className="text-text font-bold">$175,000</span>
              </div>
              <motion.div initial={reduced ? {} : { width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} className="h-10 bg-elevated border border-border rounded-r-md overflow-hidden relative">
                <div className="absolute inset-0 bg-red/10 animate-pulse pointer-events-none" />
                <div className="absolute top-0 right-0 h-full w-1/2 bg-[url('/stripe.png')] opacity-10 bg-repeat" />
              </motion.div>
            </div>

            <div className="relative">
              <div className="flex justify-between font-mono text-[11px] uppercase tracking-wider text-text-3 font-semibold mb-3">
                <span className="text-accent flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" /> With Alstro</span>
                <span className="text-green font-bold">$90,000</span>
              </div>
              <motion.div initial={reduced ? {} : { width: 0 }} whileInView={{ width: "51.4%" }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} className="h-10 bg-green/20 border border-green/30 rounded-r-md relative overflow-hidden shadow-[inset_0_0_12px_rgba(16,185,129,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-r from-green/10 to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
