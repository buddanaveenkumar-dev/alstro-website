"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";

const links = [
  { label: "Architecture", href: "#solution" },
  { label: "Pilot Program", href: "#shadow-pilot" },
  { label: "Partners", href: "#platforms" },
  { label: "About Us", href: "#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Scroll + active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sectionIds = links.map((l) => l.href.replace("#", ""));
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = "#" + id;
        }
      }
      setActiveHash(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Focus trap inside mobile menu
  useEffect(() => {
    if (!open || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", trap);
    return () => window.removeEventListener("keydown", trap);
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-[110] h-[72px] transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-border"
            : "bg-white border-b border-transparent"
        }`}
      >
        <nav aria-label="Main" className="container-main flex items-center justify-between h-full">
          <a href="#" className="font-heading text-[18px] font-semibold text-text tracking-tight z-50 relative" aria-label="Alstro home">
            ALSTRO<span className="text-accent">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => {
              const isActive = activeHash === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`text-[14px] font-medium relative py-2 transition-colors ${
                    isActive ? "text-accent" : "text-text-2 hover:text-text"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 ${
                      isActive ? "w-full bg-accent" : "w-0 bg-transparent group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a href="#cta" className="btn-primary" style={{ padding: "10px 20px", fontSize: 14 }}>
              Contact Sales
            </a>
          </div>

          {/* Mobile: CTA always visible + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a href="#cta" className="btn-primary text-[13px]" style={{ padding: "8px 16px" }}>
              Contact Sales
            </a>
            <button
              ref={hamburgerRef}
              className="text-text p-2 -mr-2 relative z-50 flex flex-col justify-center items-center w-10 h-10"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span className={`bg-text block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm ${open ? "rotate-45 translate-y-[5px]" : "-translate-y-1"}`} />
              <span className={`bg-text block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm my-0.5 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`bg-text block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm ${open ? "-rotate-45 -translate-y-[5px]" : "translate-y-1"}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-[100] bg-black/20 md:hidden" onClick={close} aria-hidden="true" />

          {/* Panel */}
          <div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            className="fixed top-0 right-0 bottom-0 w-[280px] z-[105] bg-white shadow-2xl md:hidden flex flex-col pt-24 px-6"
            style={{ animation: "slideIn 0.3s ease forwards" }}
          >
            <style>{`@keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }`}</style>

            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="text-[18px] font-semibold text-text hover:text-accent transition-colors py-3 border-b border-border-subtle"
                  style={{ minHeight: 48 }}
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="mt-auto mb-8">
              <p className="font-mono text-[12px] text-text-3 tracking-wider uppercase">Institutional Compliance Layer</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
