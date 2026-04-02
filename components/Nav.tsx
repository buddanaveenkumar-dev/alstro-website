"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Shadow Pilot", href: "#shadow-pilot" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Focus trap
  useEffect(() => {
    if (!open || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>('a, button');
    if (!focusable.length) return;
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
            ? "bg-surface/80 backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav aria-label="Main" className="container-main flex items-center justify-between h-full">
          <a href="#" className="font-heading text-[20px] font-extrabold tracking-widest text-text z-50 relative" aria-label="Alstro home">
            ALSTRO<span className="text-accent">.</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[14px] font-medium text-text-2 hover:text-text transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#cta" className="btn-primary" style={{ padding: "10px 20px" }}>
              Early Access
            </a>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <a href="#cta" className="btn-primary text-[13px]" style={{ padding: "8px 16px" }}>
              Early Access
            </a>
            <button
              className="text-text-2 p-2 -mr-2 relative z-50 flex flex-col justify-center items-center w-10 h-10"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span className={`bg-text-2 block transition-all duration-300 h-[2px] w-6 rounded-sm ${open ? "rotate-45 translate-y-[5px]" : "-translate-y-1"}`} />
              <span className={`bg-text-2 block transition-all duration-300 h-[2px] w-6 rounded-sm my-0.5 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`bg-text-2 block transition-all duration-300 h-[2px] w-6 rounded-sm ${open ? "-rotate-45 -translate-y-[5px]" : "translate-y-1"}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {open && (
        <>
          <div className="fixed inset-0 z-[100] bg-black/40 md:hidden" onClick={close} aria-hidden="true" />
          <div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            className="fixed top-0 right-0 bottom-0 w-[280px] z-[105] bg-surface shadow-2xl md:hidden flex flex-col pt-24 px-6"
            style={{ animation: "slideIn 0.3s ease forwards" }}
          >
            <style>{`@keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }`}</style>
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={close} className="text-[18px] font-semibold text-text hover:text-accent transition-colors py-3 border-b border-border" style={{ minHeight: 48 }}>
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
