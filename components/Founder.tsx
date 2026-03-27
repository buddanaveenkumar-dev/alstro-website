"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Founder() {
  const reduced = useReducedMotion();
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "mailto:founder@alstro.ai";
  const founderEmail =
    process.env.NEXT_PUBLIC_FOUNDER_EMAIL || "founder@alstro.ai";

  return (
    <section id="investors" className="py-20 border-t border-border">
      <div className="section-container">
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          Founder
        </motion.p>

        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="max-w-[600px]"
        >
          <p className="font-heading text-[28px] lg:text-[32px] text-text leading-snug mb-8">
            Built by a founder who has operated AI-driven credit systems in
            production — where models, compliance, and execution intersect.
          </p>

          <div className="flex items-start gap-5 mb-6">
            <div className="w-12 h-12 rounded-full bg-bg-muted border border-border flex items-center justify-center text-[15px] font-heading text-text shrink-0">
              NB
            </div>
            <div>
              <p className="text-[15px] font-medium text-text">Naveen Budda</p>
              <p className="text-[13px] text-text-muted mb-3">
                Founder, Alstro AI
              </p>
              <p className="text-[14px] text-text-secondary leading-relaxed mb-4">
                Previously built AI lending infrastructure at KarmaLife —
                alternative data credit systems deployed across 500,000+ users on
                regulated balance sheets. Deep experience operating at the
                intersection of credit risk modeling, compliance, and production
                execution.
              </p>
              <blockquote className="text-[14px] text-text-secondary italic leading-relaxed border-l-2 border-border-strong pl-4">
                &ldquo;I have sat across the table from a regulator trying to
                explain an AI credit decision. I built Alstro because lenders
                shouldn&apos;t have to improvise that answer.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Investor CTAs */}
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-4">
              For investors
            </p>
            <p className="text-[14px] text-text-secondary mb-5">
              We are raising a pre-seed round to take Alstro from alpha to
              production with design partners. If you invest in regulated fintech
              infrastructure, we should talk.
            </p>
            <div className="flex flex-wrap items-center gap-3">
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
            <p className="text-[12px] text-text-muted mt-3">
              We respond to every investor inquiry personally.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
