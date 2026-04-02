"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";

const heroCardLines = [
  "Decision intercepted",
  "14ms · live",
  "Model: XGBoost v3.2",
  "Action: Denial → Blocked",
  "Reason: ECOA §701(a)",
  "Status: ██████████ Compliant",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= heroCardLines.length) return;
    const timer = window.setTimeout(() => setLineIndex((prev) => prev + 1), 220);
    return () => window.clearTimeout(timer);
  }, [lineIndex]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      sectionRef.current.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const reveals = sectionRef.current.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const typewriterLines = useMemo(() => heroCardLines.slice(0, lineIndex), [lineIndex]);

  return (
    <section id="hero" ref={sectionRef} className="relative overflow-hidden py-28 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#090C13] via-[#07090F] to-[#07090F]" aria-hidden="true" />
      <ParticleCanvas />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,229,160,0.08),transparent_40%)] pointer-events-none" aria-hidden="true" />
      <div className="container-main relative z-10 grid gap-10 lg:grid-cols-2 items-start">
        <div className="space-y-6">
          <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-[rgba(0,229,160,0.25)] bg-[rgba(0,229,160,0.08)] px-4 py-1.5 text-[13px] font-mono text-text-secondary">
            <span className="h-2 w-2 rounded-full bg-status-live animate-pulse" />
            Now accepting enterprise shadow pilots
          </div>

          <h1 className="reveal max-w-[720px] text-[42px] md:text-[64px] leading-[1.06] font-bold tracking-tight">
            Deploy AI models with <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-white">cryptographic proof</span> of compliance.
          </h1>

          <p className="reveal text-[17px] md:text-[19px] text-text-secondary max-w-[640px] leading-relaxed">
            The institutional enforcement layer for AI lending. Every decision — transparent, explainable, and regulation-ready before execution.
          </p>

          <div className="reveal flex flex-col sm:flex-row sm:items-center gap-4">
            <a href="#cta" className="btn-primary">
              Get Early Access
            </a>
            <a href="#solution" className="btn-secondary">
              View Architecture <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="reveal flex flex-wrap gap-2 text-[12px] font-mono text-text-secondary">
            <span className="inline-flex items-center rounded-full bg-[rgba(255,255,255,0.06)] px-3 py-1">Policy-first enforcement</span>
            <span className="inline-flex items-center rounded-full bg-[rgba(255,255,255,0.06)] px-3 py-1">Live decision proof</span>
            <span className="inline-flex items-center rounded-full bg-[rgba(255,255,255,0.06)] px-3 py-1">Regulator-ready output</span>
          </div>
        </div>

        <div className="reveal relative rounded-2xl border border-[rgba(0,229,160,0.25)] bg-[rgba(255,255,255,0.06)] p-6 shadow-[0_0_30px_rgba(0,229,160,0.12)] backdrop-blur-xl min-h-[280px]">
          <div className="mb-4 text-[12px] font-mono uppercase tracking-widest text-text-secondary">Decision intercepted</div>
          <div className="relative text-[13px] font-mono leading-snug text-text-primary">
            <div className="h-5">
              {typewriterLines.map((line, idx) => (
                <p key={idx} className="animate-fade-in text-text-primary">{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
