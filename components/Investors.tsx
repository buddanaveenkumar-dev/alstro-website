"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Investors() {
  const prefersReducedMotion = useReducedMotion();
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "mailto:founder@alstro.ai";
  const founderEmail =
    process.env.NEXT_PUBLIC_FOUNDER_EMAIL || "founder@alstro.ai";

  const fadeUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section id="investors" className="py-24 border-t border-border">
      <div className="mx-auto max-w-[1100px] px-6">
        <motion.p
          {...fadeUp}
          className="text-[11px] font-mono text-text-3 uppercase tracking-widest mb-4"
        >
          For investors
        </motion.p>

        <motion.h2
          {...fadeUp}
          className="font-heading text-[40px] text-text-1 leading-tight max-w-[560px] mb-12"
        >
          The compliance layer underwriting AI has been missing.
        </motion.h2>

        {/* Three columns */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            className="bg-bg border border-border rounded-lg p-6"
          >
            <h3 className="text-[11px] font-mono text-text-3 uppercase tracking-widest mb-4">
              The category
            </h3>
            <p className="text-sm text-text-2 leading-relaxed">
              Arva AI automated financial crime compliance and became
              infrastructure regulated banks depend on. The same category gap
              exists in underwriting compliance. Every ML lending decision
              triggers ECOA, FCRA, and SR 11-7 obligations. There is no
              purpose-built layer that enforces them. Alstro is that layer.
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              ease: "easeOut" as const,
              delay: 0.08,
            }}
            className="bg-bg border border-border rounded-lg p-6"
          >
            <h3 className="text-[11px] font-mono text-text-3 uppercase tracking-widest mb-4">
              The timing
            </h3>
            <p className="text-sm text-text-2 leading-relaxed mb-4">
              CFPB Circular 2023-03 created an enforcement moment: every ML
              lender now has explicit legal exposure on adverse action notices.
              The pipeline is self-identifying.
            </p>
            <p className="text-sm text-text-2 leading-relaxed">
              The window to become the standard is the next 18 months.
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              ease: "easeOut" as const,
              delay: 0.16,
            }}
            className="bg-bg border border-border rounded-lg p-6"
          >
            <h3 className="text-[11px] font-mono text-text-3 uppercase tracking-widest mb-4">
              The round
            </h3>
            <div className="space-y-2 text-sm text-text-2 mb-4">
              <div className="flex gap-4">
                <span className="text-text-3 w-16 shrink-0 font-mono text-xs">
                  Stage
                </span>
                <span>Pre-seed / seed</span>
              </div>
              <div className="flex gap-4">
                <span className="text-text-3 w-16 shrink-0 font-mono text-xs">
                  Raising
                </span>
                <span>$2.5M</span>
              </div>
              <div className="flex gap-4">
                <span className="text-text-3 w-16 shrink-0 font-mono text-xs">
                  Use
                </span>
                <span>2 design partners → 10 customers</span>
              </div>
            </div>
            <p className="text-sm text-text-2 leading-relaxed">
              Founding engineer hire. Regulatory affairs function.
            </p>
            <p className="text-xs text-text-3 mt-4 pt-4 border-t border-border">
              Founder has built AI lending infrastructure in production:
              KarmaLife — alternative data credit, 500K+ users, regulated
              balance sheets.
            </p>
          </motion.div>
        </div>

        {/* Founder block */}
        <motion.div
          {...fadeUp}
          className="max-w-[600px] mx-auto text-center mb-10"
        >
          <div className="w-14 h-14 rounded-full bg-accent-bg border border-accent/20 flex items-center justify-center text-lg font-heading text-accent mx-auto mb-4">
            NB
          </div>
          <h3 className="text-[15px] font-medium text-text-1">
            Naveen Budda
          </h3>
          <p className="text-sm text-text-3 mb-4">Founder, Alstro AI</p>
          <blockquote className="text-sm text-text-2 italic leading-relaxed mb-4">
            &ldquo;I have sat across the table from a regulator trying to
            explain an AI credit decision. I built Alstro because lenders
            shouldn&apos;t have to improvise that answer.&rdquo;
          </blockquote>
          <p className="text-xs text-text-3">
            Previously: KarmaLife (AI lending infrastructure, alternative data,
            500K+ users, regulated markets)
          </p>
        </motion.div>

        {/* Investor CTAs */}
        <motion.div
          {...fadeUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Schedule a call <ArrowRight size={15} />
          </a>
          <a
            href={`mailto:${founderEmail}`}
            className="inline-flex items-center gap-2 border border-border hover:border-border-2 text-text-2 hover:text-text-1 px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Email directly <Mail size={15} />
          </a>
        </motion.div>
        <p className="text-xs text-text-3 text-center mt-3">
          We respond to every investor inquiry personally.
        </p>
      </div>
    </section>
  );
}
