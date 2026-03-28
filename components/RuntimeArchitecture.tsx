"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Eye, BookOpen, Users } from "lucide-react";

const components = [
  {
    name: "Policy Engine",
    icon: ShieldCheck,
    desc: "Evaluates each decision against ECOA, FCRA, and SR 11-7 rules. Configurable per institution and model type.",
  },
  {
    name: "Explainability Layer",
    icon: Eye,
    desc: "Computes feature attribution (SHAP) for every decision. Maps model outputs to compliant, human-readable reason codes.",
  },
  {
    name: "Audit Ledger",
    icon: BookOpen,
    desc: "Immutable record of every decision, every artifact, and every policy evaluation. Exam-ready by default.",
  },
  {
    name: "HITL Escalation",
    icon: Users,
    desc: "Routes decisions that require human review. Captures reviewer rationale. Maintains the audit chain.",
  },
];

function ArchitectureDiagram({ reduced }: { reduced: boolean | null }) {
  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.1 }}
      className="mb-14 max-w-[720px] mx-auto"
    >
      <div className="flex flex-col md:flex-row items-stretch gap-3">
        {/* Input */}
        <div className="flex-1 bg-bg-muted border border-border rounded-lg p-4 text-center flex flex-col justify-center">
          <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-1">Input</p>
          <p className="text-[13px] text-text-secondary">Model output</p>
          <p className="text-[11px] text-text-muted">Score · Features · Outcome</p>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center px-1">
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
            <path d="M0 6h20m0 0l-4-4m4 4l-4 4" stroke="var(--color-border-strong)" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="flex md:hidden items-center justify-center py-1">
          <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
            <path d="M6 0v20m0 0l-4-4m4 4l4-4" stroke="var(--color-border-strong)" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Runtime */}
        <div className="flex-[2] border-2 border-text rounded-lg p-4 bg-bg-raised shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <p className="text-[10px] font-mono text-accent uppercase tracking-widest mb-3 text-center">Alstro Runtime</p>
          <div className="grid grid-cols-2 gap-2">
            {components.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.name} className="flex items-center gap-2 bg-bg-muted border border-border rounded px-2.5 py-1.5">
                  <Icon size={12} className="text-text-muted shrink-0" />
                  <span className="text-[11px] text-text-secondary">{c.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center px-1">
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
            <path d="M0 6h20m0 0l-4-4m4 4l-4 4" stroke="var(--color-border-strong)" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="flex md:hidden items-center justify-center py-1">
          <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
            <path d="M6 0v20m0 0l-4-4m4 4l4-4" stroke="var(--color-border-strong)" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Output */}
        <div className="flex-1 bg-bg-muted border border-border rounded-lg p-4 text-center flex flex-col justify-center">
          <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-1">Output</p>
          <p className="text-[13px] text-text-secondary">Compliant execution</p>
          <p className="text-[11px] text-text-muted">Notices · Records · Audit trail</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function RuntimeArchitecture() {
  const reduced = useReducedMotion();

  return (
    <section id="runtime" className="py-20 border-t border-border section-alt">
      <div className="section-container">
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          Runtime architecture
        </motion.p>
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="font-heading text-[32px] lg:text-[36px] text-text leading-tight max-w-[600px] mb-3"
        >
          The regulated runtime between model output and underwriting execution
        </motion.h2>
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="text-[14px] text-text-muted mb-12"
        >
          Designed for regulated deployment.
        </motion.p>

        <ArchitectureDiagram reduced={reduced} />

        <div className="grid sm:grid-cols-2 gap-4">
          {components.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.name}
                initial={reduced ? {} : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut" as const,
                  delay: reduced ? 0 : i * 0.05,
                }}
                className="card-hover border border-border rounded-lg p-6 bg-bg-raised"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <Icon size={16} className="text-text-muted" />
                  <h3 className="text-[14px] font-medium text-text font-mono">
                    {c.name}
                  </h3>
                </div>
                <p className="text-[14px] text-text-secondary leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
