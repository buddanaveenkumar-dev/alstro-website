"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { value: "5M+", label: "CFPB complaints since 2020", color: "text-red", source: "CFPB Consumer Complaint Database" },
  { value: "8,369", label: "FCRA lawsuits filed (2023)", color: "text-amber", source: "WebRecon LLC" },
  { value: "$74.77M", label: "CFPB enforcement settlements", color: "text-red", source: "CFPB Enforcement Actions" },
  { value: "<400ms", label: "Alstro decision enforcement", color: "text-text", source: "" },
];

export default function StatsBar() {
  const reduced = useReducedMotion();

  return (
    <section className="border-y border-border">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.06 }}
              className={`py-8 px-4 text-center ${i > 0 ? "border-l border-border" : ""}`}
            >
              <p className={`font-mono text-[28px] lg:text-[34px] font-medium ${s.color} leading-none mb-2`}>
                {s.value}
              </p>
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">
                {s.label}
              </p>
              {s.source && (
                <p className="font-mono text-[9px] text-text-muted/50 tracking-wider">
                  Source: {s.source}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
