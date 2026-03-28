"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, BarChart3, ShieldCheck, FileText, Database, Send } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Download,
    title: "Ingest model output",
    desc: "Underwriting decision and model output received — score, features, outcome, and context.",
    detail: "GBM-v4.2 · score: 0.38 · outcome: deny",
  },
  {
    num: "02",
    icon: BarChart3,
    title: "Attribute decision factors",
    desc: "Feature importance computed via SHAP. Top contributing factors ranked and validated.",
    detail: "DTI ratio → 0.41 · revolving util → 0.29 · derog activity → 0.18",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Apply policy checks",
    desc: "ECOA, FCRA, and SR 11-7 policy rules evaluated against the decision and its factors.",
    detail: "ECOA reason-code check ✓ · fair lending DIR ✓ · SR 11-7 logging ✓",
  },
  {
    num: "04",
    icon: FileText,
    title: "Generate compliant artifacts",
    desc: "Adverse action notice, fair lending record, and governance documentation generated.",
    detail: "notice: AA-20251114-4189 · model-doc update queued",
  },
  {
    num: "05",
    icon: Database,
    title: "Log audit record",
    desc: "Immutable, exam-ready audit trail written. Decision, rationale, and artifacts linked.",
    detail: "audit-id: AUD-20251114-4189 · hash: 0x7a3f...c912",
  },
  {
    num: "06",
    icon: Send,
    title: "Release or escalate",
    desc: "Decision released to downstream systems, or escalated to human review if policy requires.",
    detail: "→ LOS release · adverse action notice dispatched",
    badge: "312ms total",
  },
];

export default function DecisionFlow() {
  const reduced = useReducedMotion();

  return (
    <section id="decision-flow" className="py-20 border-t border-border">
      <div className="section-container">
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          How one decision flows
        </motion.p>
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="font-heading text-[32px] lg:text-[36px] text-text leading-tight max-w-[580px] mb-3"
        >
          See how one underwriting decision flows through Alstro
        </motion.h2>
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="text-[13px] font-mono text-text-muted mb-14"
        >
          Illustrative beta workflow
        </motion.p>

        <div className="max-w-[680px]">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;

            return (
              <motion.div
                key={step.num}
                initial={reduced ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut" as const,
                  delay: reduced ? 0 : i * 0.04,
                }}
              >
                <div className="flex gap-5 lg:gap-7">
                  {/* Timeline column */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center ${
                        isLast
                          ? "bg-green-light border-2 border-green"
                          : "bg-bg-raised border-2 border-text"
                      }`}
                    >
                      <Icon
                        size={15}
                        className={isLast ? "text-green" : "text-text"}
                      />
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 bg-border-strong mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={isLast ? "pb-0" : "pb-10"}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono text-text-muted">
                        {step.num}
                      </span>
                      <h3 className="text-[15px] font-medium text-text">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[14px] text-text-secondary leading-relaxed mb-2.5">
                      {step.desc}
                    </p>
                    <div className="bg-bg-muted border border-border rounded px-3 py-2 flex items-center justify-between gap-3">
                      <p className="text-[12px] font-mono text-text-muted leading-relaxed">
                        {step.detail}
                      </p>
                      {"badge" in step && step.badge && (
                        <span className="text-[10px] font-mono font-medium text-green bg-green-light border border-green/20 rounded-full px-2 py-0.5 shrink-0">
                          {step.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
