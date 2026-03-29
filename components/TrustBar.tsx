"use client";

import { motion, useReducedMotion } from "framer-motion";

const badges = [
  "ECOA Compliant",
  "FCRA Ready",
  "SR 11-7 Documentation",
  "Cryptographic Audit Trail",
  "OCC/CFPB Exam-Ready",
];

export default function TrustBar() {
  const reduced = useReducedMotion();

  return (
    <section className="border-y border-border py-6">
      <div className="section-container">
        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map((b) => (
            <span
              key={b}
              className="font-mono text-[10px] text-text-muted border border-border rounded-full px-3 py-1.5 uppercase tracking-wider"
            >
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
