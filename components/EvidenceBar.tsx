"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { value: "8,369", label: "FCRA lawsuits filed in 2025", color: "text-red" },
  { value: "+37.4%", label: "Year-over-year increase", color: "text-amber" },
  { value: "$74.77M", label: "Class action settlements 2025", color: "text-red" },
  { value: "<400ms", label: "Alstro proof generation", color: "text-accent" },
];

export default function EvidenceBar() {
  const reduced = useReducedMotion();

  return (
    <section className="border-y border-border">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduced ? {} : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.06 }}
              className={`py-8 px-4 text-center ${i > 0 ? "border-l border-border" : ""}`}
            >
              <p className={`font-mono text-[26px] lg:text-[32px] font-semibold ${s.color} leading-none mb-2`}>{s.value}</p>
              <p className="font-mono text-[10px] text-text-3 uppercase tracking-[0.08em]">{s.label}</p>
            </motion.div>
          ))}
        </div>
        <p className="font-mono text-[10px] text-text-3/50 text-center py-3 border-t border-border tracking-wider">
          Sources: WebRecon, CFPB Consumer Response Reports, Duane Morris Class Action Review 2026
        </p>
      </div>
    </section>
  );
}
