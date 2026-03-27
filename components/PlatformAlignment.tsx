"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const cards = [
  {
    label: "For model and data platforms",
    title: "Make your models lender-deployable",
    body: "AI models in credit underwriting require adverse action compliance, fair lending monitoring, and SR 11-7 documentation before a regulated lender can put them into production. Alstro provides that runtime layer — so your model reaches production instead of stalling in compliance review.",
  },
  {
    label: "For LOS and decision platforms",
    title: "Close the compliance gap at execution",
    body: "Loan origination and decision platforms handle the workflow. Alstro handles what the workflow must produce: ECOA-compliant notices, fair lending records, and examiner-ready audit trails. A single runtime integration covers every lender on your platform.",
  },
  {
    label: "For CRM and financial services clouds",
    title: "Regulatory readiness as a platform feature",
    body: "Enterprise lenders buying financial services platforms increasingly require AI compliance infrastructure as a procurement condition. Alstro gives your platform the answer to \u201Chow does your AI handle CFPB adverse action requirements?\u201D before the question is asked.",
  },
];

const platforms = [
  "Salesforce",
  "Microsoft",
  "nCino",
  "Blend",
  "Finastra",
  "Jack Henry",
];

export default function PlatformAlignment() {
  const reduced = useReducedMotion();
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "mailto:naveen@alstro.ai";
  const founderEmail = process.env.NEXT_PUBLIC_FOUNDER_EMAIL || "naveen@alstro.ai";

  const fadeUp = {
    initial: reduced ? {} : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section id="partners" className="py-20 border-t border-border">
      <div className="section-container">
        <motion.p
          {...fadeUp}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          For platform partners
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="font-heading text-[32px] lg:text-[36px] text-text leading-tight max-w-[520px] mb-4"
        >
          The compliance runtime your AI stack is missing.
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="text-[16px] text-text-secondary max-w-[580px] mb-14 leading-relaxed"
        >
          If your platform powers AI-assisted underwriting decisions, every
          decision your customers make carries a compliance obligation your
          platform doesn&apos;t yet cover. Alstro is the layer that closes that
          gap — deployable inside your platform, invisible to your customers,
          indispensable to their regulators.
        </motion.p>

        {/* Three value cards */}
        <div className="grid lg:grid-cols-3 gap-4 mb-14">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut" as const,
                delay: reduced ? 0 : i * 0.06,
              }}
              className="bg-bg-raised border border-border rounded-xl p-7 transition-colors duration-150 hover:border-l-2 hover:border-l-accent"
            >
              <p className="text-[11px] font-mono text-text-muted uppercase tracking-wider mb-3">
                {c.label}
              </p>
              <h3 className="text-[15px] font-medium text-text mb-3">
                {c.title}
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Platform logos */}
        <motion.div {...fadeUp} className="mb-14">
          <p className="text-[12px] text-text-muted text-center mb-6">
            In conversation with platforms serving regulated lenders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {platforms.map((name) => (
              <span
                key={name}
                className="text-[15px] font-medium text-text-muted/35 hover:text-text-muted/65 transition-colors select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          {...fadeUp}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start border-t border-border pt-12"
        >
          <div>
            <p className="font-heading text-[20px] text-text leading-snug mb-4">
              If you build for lenders, we should talk.
            </p>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              Alstro embeds inside platforms, not competes with them.
              We are in active conversations with platform teams exploring how a
              compliance runtime layer improves regulatory readiness, reduces
              compliance friction in enterprise sales, and expands what
              AI-driven underwriting products can do in production.
            </p>
            <p className="text-[14px] text-text-secondary leading-relaxed mt-3">
              If you lead product, partnerships, or financial services strategy
              at a platform that powers underwriting decisions, reach out
              directly.
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-text text-bg hover:bg-text/90 px-5 py-2.5 rounded-md text-[14px] font-medium transition-colors"
              >
                Schedule a platform conversation <ArrowRight size={15} />
              </a>
              <a
                href={`mailto:${founderEmail}`}
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-border-strong text-text-secondary hover:text-text px-5 py-2.5 rounded-md text-[14px] transition-colors"
              >
                Email the founder <Mail size={15} />
              </a>
            </div>
            <p className="text-[12px] text-text-muted">
              We respond to every platform inquiry personally. Expect a reply
              within one business day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
