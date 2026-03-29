"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const platforms = [
  {
    name: "Salesforce",
    context: "Agentforce · Financial Services Cloud",
    title: "Make AI-assisted workflows deployable in regulated lending",
    body: "Salesforce is building AI agents for financial services. Regulated lenders need every AI-driven decision to be explainable and audit-ready before it can reach production. Alstro provides the execution layer that bridges Agentforce capability to regulator-safe deployment — reducing friction in enterprise FSI sales.",
  },
  {
    name: "Microsoft",
    context: "Azure AI · Copilot · FSI vertical",
    title: "Bridge AI capability to regulator-safe execution",
    body: "Azure AI and Copilot are entering banking and lending workflows. Regulated institutions require decision traceability, adverse action defensibility, and policy alignment before deployment. Alstro is the infrastructure layer that makes Microsoft AI outputs deployable in regulated financial environments.",
  },
  {
    name: "ServiceNow",
    context: "Workflow · Governance · Enterprise operations",
    title: "Extend workflow systems into decision enforcement",
    body: "ServiceNow manages enterprise workflows and governance. In regulated financial services, workflows that involve AI-driven decisions need execution integrity — defensible reasons, audit trails, and policy enforcement. Alstro extends workflow governance into the decision execution layer.",
  },
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
          Platform ecosystem fit
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="font-heading text-[32px] lg:text-[36px] text-text leading-tight max-w-[560px] mb-4"
        >
          How Alstro helps platforms win in financial services.
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="text-[16px] text-text-secondary max-w-[580px] mb-14 leading-relaxed"
        >
          Platforms selling AI into financial services face a common blocker:
          regulated institutions cannot deploy AI-driven decisions without
          execution infrastructure for explainability, auditability, and
          compliance. Alstro is that infrastructure.
        </motion.p>

        {/* Platform-specific cards */}
        <div className="space-y-4 mb-14">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut" as const,
                delay: reduced ? 0 : i * 0.06,
              }}
              className="card-hover bg-bg-raised border border-border rounded-xl p-7"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
                <div className="lg:w-48 shrink-0 mb-3 lg:mb-0">
                  <p className="text-[15px] font-medium text-text">
                    {p.name}
                  </p>
                  <p className="text-[11px] font-mono text-text-muted">
                    {p.context}
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] font-medium text-text mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp}
          className="text-[12px] text-text-muted text-center mb-8"
        >
          Positioned for strategic relevance within FSI platform ecosystems.
          No partnership claims — only alignment.
        </motion.p>

        {/* Partnership CTA */}
        <motion.div
          {...fadeUp}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start border-t border-border pt-12"
        >
          <div>
            <p className="font-heading text-[20px] text-text leading-snug mb-4">
              If you build for financial services, we should talk.
            </p>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              Alstro is designed to embed inside platforms, not compete with
              them. We are exploring how a compliance execution layer helps
              platform teams improve regulatory readiness, reduce deployment
              friction, and expand what AI-driven financial products can do in
              production.
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
                Discuss platform fit <ArrowRight size={15} />
              </a>
              <a
                href={`mailto:${founderEmail}`}
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-border-strong text-text-secondary hover:text-text px-5 py-2.5 rounded-md text-[14px] transition-colors"
              >
                Email the founder <Mail size={15} />
              </a>
            </div>
            <p className="text-[12px] text-text-muted">
              We respond to every inquiry personally within one business day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
