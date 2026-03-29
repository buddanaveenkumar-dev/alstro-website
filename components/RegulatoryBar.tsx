"use client";

import { motion, useReducedMotion } from "framer-motion";

const badges = ["ECOA Compliant", "FCRA Ready", "SR 11-7 Documented", "TILA Enforced", "UDAAP Checked", "OCC Exam-Ready", "CFPB Exam-Ready", "Cryptographic Audit"];

export default function RegulatoryBar() {
  const reduced = useReducedMotion();

  return (
    <section className="border-y border-border py-5 overflow-hidden">
      <div className="container-main">
        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {badges.map(b => (
            <span key={b} className="font-mono text-[10px] text-text-3 border border-border rounded-sm px-3 py-1.5 uppercase tracking-[0.06em] whitespace-nowrap">{b}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
