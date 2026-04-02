"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user already dismissed this session
    if (typeof window !== "undefined" && sessionStorage.getItem("sticky-cta-dismissed") === "true") {
      window.setTimeout(() => setDismissed(true), 0);
    }
  }, []);

  useEffect(() => {
    if (dismissed) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const ctaSection = document.getElementById("cta");
      let nearForm = false;
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) nearForm = true;
      }
      setVisible(scrolled > 400 && !nearForm);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  const dismiss = () => {
    setDismissed(true);
    setVisible(false);
    sessionStorage.setItem("sticky-cta-dismissed", "true");
  };

  if (dismissed || !visible) return null;

  return (
    <div className="fixed top-[72px] left-0 right-0 z-[100] bg-white border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all">
      <div className="container-main flex items-center justify-between h-11 gap-4">
        <p className="text-[14px] text-text-2 font-medium truncate">
          <span className="hidden sm:inline">Alstro is accepting enterprise shadow pilots</span>
          <span className="sm:hidden">Shadow pilots open</span>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <a href="#cta" className="btn-primary text-[13px]" style={{ padding: "6px 16px", borderRadius: 8 }}>
            Get Early Access <ArrowRight size={14} aria-hidden="true" className="hidden sm:inline-block" />
          </a>
          <button onClick={dismiss} className="text-text-3 hover:text-text transition-colors p-1" aria-label="Dismiss notification">
            <X size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
