"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";

const corePills = [
  "Attribution engine",
  "Audit ledger",
  "Explainability layer",
  "Policy enforcer",
  "HITL escalation",
  "Permissibility checker",
];

const packs = [
  {
    id: "us",
    name: "US Pack",
    version: "v1 · Active",
    status: "active" as const,
    regs: ["ECOA", "FCRA", "SR 11-7", "CFPB 2023-03"],
    footer: "Enforced on every decision · US lenders",
  },
  {
    id: "uk",
    name: "UK Pack",
    version: "2026",
    status: "coming" as const,
    regs: ["FCA", "CCA", "PRA SS1/23", "CREDS"],
    footer: "In design · UK lenders & FCA-supervised firms",
  },
  {
    id: "eu",
    name: "EU Pack",
    version: "2026",
    status: "coming" as const,
    regs: ["GDPR Art.22", "EBA ML", "Equal Treatment"],
    footer: "In design · EU lenders & EBA-supervised firms",
  },
];

function ConnectorLines({ animate }: { animate: boolean }) {
  return (
    <div className="flex justify-center py-2 overflow-hidden">
      <svg
        width="680"
        height="56"
        viewBox="0 0 680 56"
        fill="none"
        className="w-full max-w-[680px]"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Center line */}
        <motion.line
          x1="340" y1="0" x2="340" y2="28"
          stroke="var(--color-border-strong)"
          strokeWidth="1"
          initial={animate ? { pathLength: 0 } : {}}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
        />
        {/* Horizontal bar */}
        <motion.line
          x1="113" y1="28" x2="567" y2="28"
          stroke="var(--color-border-strong)"
          strokeWidth="1"
          initial={animate ? { pathLength: 0 } : {}}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
        />
        {/* Left branch */}
        <motion.line
          x1="113" y1="28" x2="113" y2="56"
          stroke="var(--color-border-strong)"
          strokeWidth="1"
          initial={animate ? { pathLength: 0 } : {}}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.55 }}
        />
        {/* Center branch */}
        <motion.line
          x1="340" y1="28" x2="340" y2="56"
          stroke="var(--color-border-strong)"
          strokeWidth="1"
          initial={animate ? { pathLength: 0 } : {}}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.55 }}
        />
        {/* Right branch */}
        <motion.line
          x1="567" y1="28" x2="567" y2="56"
          stroke="var(--color-border-strong)"
          strokeWidth="1"
          initial={animate ? { pathLength: 0 } : {}}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.55 }}
        />
      </svg>
    </div>
  );
}

export default function RegulatoryArchitecture() {
  const reduced = useReducedMotion();
  const animate = !reduced;

  const fade = (delay: number) =>
    animate
      ? {
          initial: { opacity: 0, y: 16 } as const,
          whileInView: { opacity: 1, y: 0 } as const,
          viewport: { once: true } as const,
          transition: { duration: 0.4, ease: "easeOut" as const, delay },
        }
      : {
          viewport: { once: true } as const,
        };

  return (
    <section id="regulatory-architecture" className="py-20 border-t border-border">
      <div className="section-container">
        {/* Header */}
        <motion.p
          {...fade(0)}
          className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
        >
          Built for scale
        </motion.p>
        <motion.h2
          {...fade(0)}
          className="font-heading text-[36px] lg:text-[40px] text-text leading-tight mb-4"
        >
          Core runtime, local compliance.
        </motion.h2>
        <motion.p
          {...fade(0)}
          className="text-[16px] text-text-secondary max-w-[560px] mb-14 leading-relaxed"
        >
          The compliance obligations in every underwriting market are
          structurally identical. Only the regulatory vocabulary changes. Alstro
          separates the two — so a single integration covers every jurisdiction
          your lenders operate in.
        </motion.p>

        {/* ── Core Runtime Block ── */}
        <motion.div
          {...fade(0.1)}
          className="max-w-[680px] mx-auto bg-bg-muted border border-border-strong border-l-[3px] border-l-accent rounded-lg p-6"
        >
          <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-4">
            Alstro Core Runtime
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {corePills.map((pill) => (
              <span
                key={pill}
                className="text-[12px] text-text-secondary bg-bg border border-border rounded-full px-3 py-1.5 text-center"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Connecting Lines ── */}
        <div className="max-w-[680px] mx-auto hidden md:block">
          <ConnectorLines animate={animate} />
        </div>
        {/* Mobile: simple vertical connector */}
        <div className="flex justify-center py-3 md:hidden">
          <div className="w-px h-8 bg-border-strong" />
        </div>

        {/* ── Pack Cards ── */}
        <div className="max-w-[680px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {packs.map((pack, i) => {
            const isActive = pack.status === "active";
            const cardDelay = animate ? 0.5 + i * 0.15 : 0;

            return (
              <motion.div
                key={pack.id}
                initial={animate ? { opacity: 0, y: 12 } : {}}
                whileInView={{ opacity: isActive ? 1 : 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut" as const,
                  delay: cardDelay,
                }}
                className={`rounded-xl p-6 ${
                  isActive
                    ? "border-2 border-accent bg-accent-light"
                    : "border border-border bg-bg"
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                    {pack.name}
                  </span>
                  <span
                    className={`text-[10px] font-mono rounded-full px-2 py-0.5 ${
                      isActive
                        ? "bg-green-light text-green"
                        : "bg-amber-light text-amber"
                    }`}
                  >
                    {pack.version}
                  </span>
                </div>

                {/* Regulations */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pack.regs.map((reg) => (
                    <span
                      key={reg}
                      className={`text-[10px] font-mono text-text-muted border border-border rounded-full px-2 py-0.5 ${
                        !isActive ? "opacity-50" : ""
                      }`}
                    >
                      {reg}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <p
                  className={`text-[11px] font-mono text-text-muted ${
                    !isActive ? "opacity-60" : ""
                  }`}
                >
                  {pack.footer}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Callout Lines ── */}
        <motion.div
          {...fade(0.9)}
          className="max-w-[560px] mx-auto mt-14 space-y-8 text-center"
        >
          <div>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">
              For lenders
            </p>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              One integration. Every jurisdiction your portfolio covers. As new
              packs launch, your existing integration covers them automatically
              — no new engineering required.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">
              For platform partners
            </p>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              Build once. Deploy globally. Alstro&apos;s core runtime integration on
              your platform becomes compliance infrastructure for every lender
              you serve, in every market you operate.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
