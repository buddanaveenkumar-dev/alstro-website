"use client";

import { motion } from "framer-motion";

const badges = ["ECOA Compliant", "FCRA Ready", "SR 11-7 Documented", "TILA Enforced", "UDAAP Checked", "OCC Exam-Ready", "CFPB Exam-Ready", "Cryptographic Audit"];

export default function RegulatoryBar() {
  return (
    <section className="bg-surface py-8 border-y border-border overflow-hidden">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3 lg:gap-4"
        >
          {badges.map(b => (
            <span key={b} className="font-mono text-[12px] font-medium text-text-3 border border-border bg-white rounded-full px-5 py-2 uppercase tracking-[0.05em] hover:text-accent hover:border-accent hover:bg-accent-light transition-all duration-300">
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
