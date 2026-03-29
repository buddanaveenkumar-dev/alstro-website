"use client";

import { motion, useReducedMotion } from "framer-motion";

const metrics = [
  { value: "95%", label: "Reduction in adverse action preparation time" },
  { value: "30→0", label: "Days: dispute investigation replaced by instant replay" },
  { value: "100%", label: "Audit-ready from decision one — no reconstruction" },
];

export default function ROI() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.4, ease: "easeOut" as const } };

  return (
    <section className="py-24 bg-surface">
      <div className="container-main">
        <motion.p {...fadeUp} className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-3">The math</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-[30px] lg:text-[40px] text-text leading-[1.1] tracking-[-0.02em] max-w-[520px] mb-14">
          Manual compliance breaks at AI-scale volume.
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-4 mb-12">
          {metrics.map((m, i) => (
            <motion.div key={m.value} initial={reduced ? {} : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" as const, delay: reduced ? 0 : i * 0.06 }}
              className="bg-elevated border border-border rounded-sm p-6"
            >
              <p className="font-mono text-[32px] text-green font-semibold leading-none mb-3">{m.value}</p>
              <p className="text-[14px] text-text-2 leading-relaxed">{m.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="bg-elevated border border-border rounded-sm p-6 max-w-[560px]">
          <p className="font-mono text-[10px] text-text-3 uppercase tracking-[0.1em] mb-4">
            Example: mid-size fintech · 5,000 denials/month
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="font-mono text-[10px] text-text-3 uppercase tracking-[0.06em] mb-1">Manual compliance</p>
              <p className="font-mono text-[24px] text-red font-semibold leading-none">$175K<span className="text-[14px] text-text-3 font-normal">/yr</span></p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-text-3 uppercase tracking-[0.06em] mb-1">With Alstro</p>
              <p className="font-mono text-[24px] text-green font-semibold leading-none">$90K<span className="text-[14px] text-text-3 font-normal">/yr</span></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
