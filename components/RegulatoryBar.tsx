"use client";

import { motion, useReducedMotion } from "framer-motion";

const badges = ["ECOA Compliant", "FCRA Ready", "SR 11-7 Documented", "TILA Enforced", "UDAAP Checked", "OCC Exam-Ready", "CFPB Exam-Ready", "Cryptographic Audit"];

export default function RegulatoryBar() {
  const reduced = useReducedMotion();

  return (
    <section className="border-y border-border/50 bg-black/40 backdrop-blur-md py-6 overflow-hidden relative z-20">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-border-active to-transparent" />
      <div className="container-main relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/40 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/40 to-transparent z-10" />
        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="flex flex-wrap items-center justify-center gap-3 lg:gap-4"
        >
          {badges.map(b => (
            <span key={b} className="font-mono text-[11px] font-medium text-text-3/80 border border-border/50 bg-surface/30 rounded-full px-5 py-2 uppercase tracking-[0.1em] whitespace-nowrap hover:text-accent hover:border-accent/40 hover:bg-accent/5 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
              {b}
            </span>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-border-active to-transparent" />
    </section>
  );
}
