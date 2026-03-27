"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Investors() {
  const reduced = useReducedMotion();
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/naveenbudda/30min";
  const founderEmail = process.env.NEXT_PUBLIC_FOUNDER_EMAIL || "naveen@alstro.ai";

  const fadeUp = {
    initial: reduced ? {} : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section id="investors" className="py-20 border-t border-border">
      <div className="section-container">
        <motion.p
          {...fadeUp}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          For investors
        </motion.p>
        <motion.div {...fadeUp} className="max-w-[600px]">
          <h2 className="font-heading text-[32px] lg:text-[36px] text-text leading-tight mb-5">
            The compliance layer underwriting AI has been missing.
          </h2>
          <p className="text-[15px] text-text-secondary leading-relaxed mb-5">
            We are raising a pre-seed round to take Alstro from beta to
            production with design partners. If you invest in regulated fintech
            infrastructure, we should talk.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-text text-bg hover:bg-text/90 px-4 py-2 rounded-md text-[13px] font-medium transition-colors"
            >
              Schedule a call <ArrowRight size={14} />
            </a>
            <a
              href={`mailto:${founderEmail}`}
              className="inline-flex items-center gap-2 border border-border hover:border-border-strong text-text-secondary hover:text-text px-4 py-2 rounded-md text-[13px] transition-colors"
            >
              Email directly <Mail size={14} />
            </a>
          </div>
          <p className="text-[12px] text-text-muted">
            We respond to every investor inquiry personally.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
