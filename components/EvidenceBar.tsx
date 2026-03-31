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

export default function EvidenceBar() {
  const reduced = useReducedMotion();

  return (
    <section className="border-y border-border/50 bg-bg relative z-20 py-8">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <p className="font-heading text-[48px] lg:text-[56px] font-bold text-text leading-none mb-1 shadow-sm"><CountUp end={8369} prefix="8," /></p>
            <p className="text-[14px] text-text-3 font-medium">FCRA lawsuits filed in 2025</p>
          </motion.div>
          
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <p className="font-heading text-[48px] lg:text-[56px] font-bold text-text leading-none mb-1 shadow-sm"><CountUp end={37} prefix="+" suffix=".4%" /></p>
            <p className="text-[14px] text-text-3 font-medium">Year-over-year increase</p>
          </motion.div>
          
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <p className="font-heading text-[48px] lg:text-[56px] font-bold text-text leading-none mb-1 shadow-sm"><CountUp end={74} prefix="$" suffix=".77M" /></p>
            <p className="text-[14px] text-text-3 font-medium">Class action settlements 2025</p>
          </motion.div>
          
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col relative before:absolute before:-inset-4 before:border before:border-accent/40 before:bg-accent/5 before:rounded-lg before:pointer-events-none before:-z-10"
          >
            <p className="font-heading text-[48px] lg:text-[56px] font-bold text-accent leading-none mb-1 shadow-[0_0_16px_rgba(59,130,246,0.3)]"><CountUp end={400} prefix="<" suffix="ms" /></p>
            <p className="text-[14px] text-text-2 font-medium">Alstro proof generation</p>
          </motion.div>
        </div>
        
        <div className="mt-12 text-left">
          <p className="text-[11px] text-text-3/40 font-medium">
            Sources: WebRecon, CFPB Consumer Response Reports, Duane Morris Class Action Review 2026
          </p>
        </div>
      </div>
    </section>
  );
}
