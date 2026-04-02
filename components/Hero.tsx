"use client";

import { useEffect, useRef } from "react";
import ParticleCanvas from "@/components/ParticleCanvas";

const cardLines = [
  { label: "", value: "Decision intercepted · 14ms", isHeader: true },
  { label: "Model", value: "XGBoost v3.2", isHeader: false },
  { label: "Action", value: "Denial → Blocked", isHeader: false },
  { label: "Policy", value: "ECOA §701(a)", isHeader: false },
  { label: "Status", value: "██████████ Compliant", isHeader: false },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sectionRef.current.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F8FA] via-white to-white" aria-hidden="true" />
      <ParticleCanvas />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,201,139,0.05),transparent_40%)] pointer-events-none" aria-hidden="true" />

      <div className="container-main relative z-10 grid gap-12 lg:grid-cols-2 items-center">
        {/* Left — copy (visible immediately, no scroll trigger) */}
        <div className="space-y-6">
          <h1 className="max-w-[640px]">
            <span className="shimmer-text">Prove</span>{" "}
            every AI lending decision before execution.
          </h1>

          <p className="text-[17px] md:text-[19px] text-text-2 max-w-[560px] leading-relaxed">
            Alstro intercepts AI-driven lending decisions and enforces ECOA, FCRA, and fair lending compliance — automatically, in under 14ms.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a href="#cta" className="btn-primary">Join Shadow Pilot</a>
            <a href="#how-it-works" className="btn-secondary">How It Works</a>
          </div>
        </div>

        {/* Right — live decision card with CSS typewriter */}
        <div className="relative rounded-2xl border border-[rgba(0,201,139,0.2)] bg-white p-6 shadow-[0_0_40px_rgba(0,201,139,0.06),0_4px_20px_rgba(0,0,0,0.04)]">
          <div className="font-mono text-[13px] leading-relaxed space-y-1.5">
            {cardLines.map((line, idx) => (
              <div
                key={idx}
                className="typewriter-line"
                style={{ animationDelay: `${500 + idx * 300}ms` }}
              >
                {line.isHeader ? (
                  <span className="text-accent font-semibold inline-flex items-center gap-2">
                    <span className="live-dot" aria-hidden="true" />
                    {line.value}
                  </span>
                ) : (
                  <div className="flex gap-4">
                    <span className="text-text-3 w-[70px] shrink-0">{line.label}</span>
                    <span className="text-text">{line.value}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
