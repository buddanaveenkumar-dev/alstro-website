"use client";

import { motion, useReducedMotion } from "framer-motion";

const platformValue = [
  "Enables AI models to move into production with compliance coverage",
  "Improves regulatory credibility for platform customers",
  "Fills the compliance gap between model output and execution",
  "Helps close enterprise deals that stall on regulatory readiness",
];

export default function PlatformAlignment() {
  const reduced = useReducedMotion();

  return (
    <section className="py-20 border-t border-border">
      <div className="section-container">
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          Platform &amp; partner alignment
        </motion.p>
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="font-heading text-[32px] lg:text-[36px] text-text leading-tight max-w-[560px] mb-4"
        >
          Designed to work inside existing enterprise platforms
        </motion.h2>
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="text-[15px] text-text-secondary max-w-[540px] mb-12 leading-relaxed"
        >
          Alstro is built to integrate into CRM and workflow systems, data and AI
          platforms, and decision engines. Two paths to market: direct with
          lenders, or through platform ecosystems.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Value for platforms */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
          >
            <p className="text-[12px] font-mono text-text-muted uppercase tracking-wider mb-5">
              Value for platform partners
            </p>
            <ul className="space-y-4">
              {platformValue.map((v, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15px] text-text-secondary leading-relaxed"
                >
                  <span className="w-5 h-5 rounded border border-border bg-bg-muted flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-mono text-text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  {v}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Key line */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.08 }}
            className="bg-bg-raised border border-border rounded-lg p-7"
          >
            <p className="font-heading text-[22px] text-text leading-snug mb-4">
              Alstro is not another application. It is a runtime control layer.
            </p>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              It does not compete with CRMs, model platforms, or decision
              engines. It makes their AI-driven outputs compliant, explainable,
              and audit-ready — so they can be deployed in regulated credit
              environments.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
