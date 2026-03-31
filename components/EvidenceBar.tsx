"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { value: "8,369", label: "FCRA lawsuits filed in 2025", color: "text-red", shadow: "drop-shadow-[0_0_12px_rgba(239,68,68,0.4)]" },
  { value: "+37.4%", label: "Year-over-year increase", color: "text-amber", shadow: "drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]" },
  { value: "$74.77M", label: "Class action settlements 2025", color: "text-red", shadow: "drop-shadow-[0_0_12px_rgba(239,68,68,0.4)]" },
  { value: "<400ms", label: "Alstro proof generation", color: "text-accent", shadow: "drop-shadow-[0_0_16px_rgba(59,130,246,0.6)]" },
];

export default function EvidenceBar() {
  const reduced = useReducedMotion();

  return (
    <section className="border-y border-border/50 bg-black/20 backdrop-blur-md relative z-20">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-border-active to-transparent" />
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border/50">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduced ? {} : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.1 }}
              className="py-10 px-6 text-center group hover:bg-surface/30 transition-colors duration-300"
            >
              <p className={`font-mono text-[32px] lg:text-[40px] font-bold ${s.color} ${s.shadow} leading-none mb-3 transform group-hover:scale-105 transition-transform duration-300`}>{s.value}</p>
              <p className="font-mono text-[11px] text-text-3 font-medium uppercase tracking-[0.15em]">{s.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="border-t border-border/50">
          <p className="font-mono text-[11px] text-text-3/60 text-center py-4 tracking-wider uppercase font-medium">
            Sources: WebRecon, CFPB Consumer Response Reports, Duane Morris Class Action Review 2026
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-border-active to-transparent" />
    </section>
  );
}
