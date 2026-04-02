"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ParticleCanvas from "@/components/ParticleCanvas";

const cardLines = [
  { label: "", value: "● Decision intercepted · 14ms" },
  { label: "Model", value: "XGBoost v3.2" },
  { label: "Action", value: "Denial → Blocked" },
  { label: "Policy", value: "ECOA §701(a)" },
  { label: "Status", value: "██████████ Compliant" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= cardLines.length) return;
    const timer = window.setTimeout(() => setLineIndex((p) => p + 1), 220);
    return () => window.clearTimeout(timer);
  }, [lineIndex]);

  useEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sectionRef.current.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    sectionRef.current.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const visibleLines = useMemo(() => cardLines.slice(0, lineIndex), [lineIndex]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F8FA] via-white to-white" aria-hidden="true" />
      <ParticleCanvas />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,201,139,0.05),transparent_40%)] pointer-events-none" aria-hidden="true" />

      <div className="container-main relative z-10 grid gap-12 lg:grid-cols-2 items-center">
        {/* Left — copy */}
        <div className="space-y-6">
          <h1 className="reveal max-w-[640px]">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #00C98B 0%, #1A1D26 60%)",
                backgroundSize: "200% auto",
                animation: "shimmer 4s ease-in-out infinite",
              }}
            >Prove</span>{" "}
            every AI lending decision before execution.
          </h1>

          <p className="reveal text-[17px] md:text-[19px] text-text-2 max-w-[560px] leading-relaxed">
            Alstro intercepts AI-driven lending decisions and enforces ECOA, FCRA, and fair lending compliance — automatically, in under 14ms.
          </p>

          <div className="reveal flex flex-col sm:flex-row sm:items-center gap-4">
            <a href="#cta" className="btn-primary">Join Shadow Pilot</a>
            <a href="#how-it-works" className="btn-secondary">How It Works</a>
          </div>
        </div>

        {/* Right — live decision card */}
        <div className="reveal relative rounded-2xl border border-[rgba(0,201,139,0.2)] bg-white p-6 shadow-[0_0_40px_rgba(0,201,139,0.06),0_4px_20px_rgba(0,0,0,0.04)]">
          <div className="font-mono text-[13px] leading-relaxed space-y-1">
            {visibleLines.map((line, idx) => (
              <div key={idx} className="animate-fade-in">
                {idx === 0 ? (
                  <span className="text-accent font-semibold">{line.value}</span>
                ) : (
                  <div className="flex gap-4">
                    <span className="text-text-3 w-[70px] shrink-0">{line.label}</span>
                    <span className="text-text">{line.value}</span>
                  </div>
                )}
              </div>
            ))}
            {/* Blinking cursor */}
            {lineIndex < cardLines.length && (
              <span className="inline-block w-[8px] h-[16px] bg-accent/60 animate-pulse" aria-hidden="true" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
