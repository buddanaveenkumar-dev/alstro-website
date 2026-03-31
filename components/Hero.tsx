"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden bg-bg">
      {/* Subtle dot-grid background */}
      <div className="absolute inset-0 dot-grid-bg pointer-events-none" aria-hidden="true" />
      {/* Subtle radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent opacity-[0.03] rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="container-main relative z-10 flex flex-col items-center text-center reveal-stagger">
        {/* Announcement Pill */}
        <div className="reveal inline-flex items-center gap-2.5 border border-accent/20 bg-accent-light rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" aria-hidden="true" />
          <span className="text-[13px] text-text font-medium">Accepting enterprise shadow pilots</span>
        </div>

        {/* H1 Headline */}
        <h1 className="reveal max-w-[800px] mb-6">
          Deploy AI models with cryptographic proof of compliance.
        </h1>

        {/* Subhead */}
        <p className="reveal text-[17px] md:text-[19px] text-text-2 max-w-[640px] mb-10 leading-relaxed">
          The institutional enforcement layer. We make every AI-driven lending decision transparent, explainable, and fully compliant with ECOA and FCRA regulations before execution.
        </p>

        {/* Two CTAs */}
        <div className="reveal flex flex-col sm:flex-row items-center gap-4 mb-10 w-full justify-center">
          <a href="#cta" className="btn-primary w-full sm:w-auto">
            Request Pilot Access
          </a>
          <a href="#solution" className="btn-secondary w-full sm:w-auto">
            View Architecture <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>

        {/* Feature Pills */}
        <div className="reveal flex items-center gap-3 flex-wrap justify-center">
          <span className="px-3 py-1 border border-border rounded-full text-[12px] text-text-2 font-mono">Model-Agnostic API</span>
          <span className="w-1 h-1 rounded-full bg-border" aria-hidden="true" />
          <span className="px-3 py-1 border border-border rounded-full text-[12px] text-text-2 font-mono">Zero Model Retraining</span>
        </div>

        {/* Floating "Decision intercepted" badge — desktop only */}
        <div className="hidden lg:flex absolute top-1/2 right-[5%] xl:right-[8%] -translate-y-1/2 items-center gap-3 bg-white border border-border p-3 pr-5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)]" aria-hidden="true">
          <CheckCircle2 size={22} className="text-green" />
          <div className="text-left">
            <div className="text-[13px] font-semibold text-text leading-tight">Decision intercepted</div>
            <div className="text-[11px] text-text-3 font-mono">14ms · <span className="text-green font-medium">live</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
