"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const reduced = useReducedMotion();

  return (
    <section className="py-20 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="max-w-[560px]"
        >
          <p className="font-heading text-[32px] lg:text-[40px] text-text leading-tight mb-5">
            The constraint in credit AI is no longer prediction. It is compliant
            execution.
          </p>
          <p className="text-[15px] text-text-secondary leading-relaxed mb-8">
            We are working with a small number of lenders and partners to
            validate Alstro in real workflows. If compliant credit decision
            execution is a priority for your institution, apply to join.
          </p>
          <a
            href="#alpha"
            className="inline-flex items-center gap-2 bg-text text-bg hover:bg-text/90 px-5 py-2.5 rounded-md text-[14px] font-medium transition-colors"
          >
            Apply to join the alpha program <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
