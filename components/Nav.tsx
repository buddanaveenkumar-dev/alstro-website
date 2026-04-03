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

  useEffect(() => { const fn = () => setScrolled(window.scrollY > 80); window.addEventListener("scroll", fn, { passive: true }); return () => window.removeEventListener("scroll", fn); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  useEffect(() => { if (!open) return; const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); }; window.addEventListener("keydown", fn); return () => window.removeEventListener("keydown", fn); }, [open]);
  useEffect(() => {
    if (!open || !menuRef.current) return;
    const els = menuRef.current.querySelectorAll<HTMLElement>("a, button"); if (!els.length) return;
    const first = els[0], last = els[els.length - 1]; first.focus();
    const trap = (e: KeyboardEvent) => { if (e.key !== "Tab") return; if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } } else { if (document.activeElement === last) { e.preventDefault(); first.focus(); } } };
    window.addEventListener("keydown", trap); return () => window.removeEventListener("keydown", trap);
  }, [open]);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header role="banner" className={`fixed top-0 left-0 right-0 z-[110] h-[72px] transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]" : "bg-transparent border-b border-transparent"}`}>
        <nav aria-label="Main" className="container-main flex items-center justify-between h-full">
          <a href="#" className="font-heading text-[20px] font-extrabold tracking-widest text-text z-50" aria-label="Alstro home">ALSTRO<span className="text-accent">.</span></a>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => <a key={l.href} href={l.href} className="text-[14px] font-medium text-text-2 hover:text-text transition-colors">{l.label}</a>)}
            <a href="#cta" className="btn-primary inline-flex items-center gap-2" style={{ padding: "8px 20px" }}>Request Shadow Pilot <span className="live-dot-sm" aria-hidden="true" /></a>
          </div>
          <div className="flex md:hidden">
            <button className="text-text-2 p-2 -mr-2 flex flex-col justify-center items-center w-10 h-10 relative z-50" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">
              <span className={`bg-text-2 block transition-all duration-200 h-[2px] w-6 rounded-sm ${open ? "rotate-45 translate-y-[5px]" : "-translate-y-1"}`} />
              <span className={`bg-text-2 block transition-all duration-200 h-[2px] w-6 rounded-sm my-0.5 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`bg-text-2 block transition-all duration-200 h-[2px] w-6 rounded-sm ${open ? "-rotate-45 -translate-y-[5px]" : "translate-y-1"}`} />
            </button>
          </div>
        </nav>
      </header>
      {open && (<>
        <div className="fixed inset-0 z-[100] bg-black/40 md:hidden" onClick={close} aria-hidden="true" />
        <div ref={menuRef} id="mobile-menu" role="dialog" aria-label="Mobile navigation" className="fixed top-0 right-0 bottom-0 w-[280px] z-[105] bg-white shadow-2xl md:hidden flex flex-col pt-24 px-6">
          <div className="flex flex-col gap-1">
            {links.map(l => <a key={l.href} href={l.href} onClick={close} className="text-[18px] font-semibold text-text hover:text-accent transition-colors py-3 border-b border-border" style={{ minHeight: 48 }}>{l.label}</a>)}
            <a href="#cta" onClick={close} className="btn-primary mt-5 justify-center">Request Shadow Pilot <span className="live-dot-sm" aria-hidden="true" /></a>
          </div>
          <div className="mt-auto mb-8"><p className="font-mono text-[12px] text-text-3 tracking-wider uppercase">Decision Infrastructure</p></div>
        </div>
      </>)}
    </>
  );
}
