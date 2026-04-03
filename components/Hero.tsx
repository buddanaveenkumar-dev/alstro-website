"use client";
import { useEffect, useRef } from "react";
import ParticleCanvas from "@/components/ParticleCanvas";

const cardLines = [
  { label: "", value: "Decision intercepted · 14ms", isHeader: true },
  { label: "Model", value: "XGBoost v3.2" },
  { label: "Action", value: "Denial → Blocked" },
  { label: "Policy", value: "ECOA §701(a)" },
  { label: "Status", value: "██████████ Compliant" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    ref.current.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F8FA] via-white to-white" aria-hidden="true" />
      <ParticleCanvas />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,201,139,0.05),transparent_40%)] pointer-events-none" aria-hidden="true" />

      <div className="container-main relative z-10 grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border-accent bg-accent-light px-4 py-1.5 text-[13px] font-mono text-text-2">
            <span className="live-dot" aria-hidden="true" />Accepting shadow pilot applications
          </div>
          <h1 className="max-w-[640px]">
            <span className="shimmer-text">Prove</span> every AI lending decision before execution.
          </h1>
          <p className="text-[17px] md:text-[18px] text-text-2 max-w-[580px] leading-relaxed">
            An API-based control layer that evaluates AI lending decisions against configured policies, generates documentation artifacts, and maintains audit-ready records — before downstream execution.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a href="#cta" className="btn-primary">Request Shadow Pilot</a>
            <a href="#how-it-works" className="btn-secondary">How It Works</a>
          </div>
        </div>

        <div className="relative rounded-xl border border-border-accent bg-white p-6 shadow-[0_0_40px_rgba(0,201,139,0.06),0_4px_20px_rgba(0,0,0,0.04)]">
          <div className="font-mono text-[14px] leading-relaxed space-y-1.5">
            {cardLines.map((line, idx) => (
              <div key={idx} className="typewriter-line" style={{ animationDelay: `${500 + idx * 300}ms` }}>
                {line.isHeader ? (
                  <span className="text-accent font-semibold inline-flex items-center gap-2"><span className="live-dot" aria-hidden="true" />{line.value}</span>
                ) : (
                  <div className="flex gap-4"><span className="text-text-3 w-[70px] shrink-0">{line.label}</span><span className="text-text">{line.value}</span></div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-[12px] text-text-3">API-based · Model-agnostic · Read-only deployment available</p>
        </div>
      </div>
    </section>
  );
}
