"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Shadow Pilot", href: "#shadow-pilot" },
  { label: "Data Protection", href: "#data-protection" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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

  useEffect(() => {
    if (!open || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>("a, button");
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
        className={`fixed top-0 left-0 right-0 z-[110] h-[64px] transition-all duration-200 ${
          scrolled
            ? "bg-white border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav aria-label="Main" className="container-main flex items-center justify-between h-full">
          <a href="#" className="font-heading text-[18px] font-bold tracking-wide text-text" aria-label="Alstro home">
            Alstro
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[14px] text-text-2 hover:text-text transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary" style={{ padding: "8px 18px", fontSize: 13 }}>
              Request Shadow Pilot
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              className="text-text-2 p-2 -mr-2 flex flex-col justify-center items-center w-10 h-10 relative z-50"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span className={`bg-text-2 block transition-all duration-200 h-[1.5px] w-5 rounded-sm ${open ? "rotate-45 translate-y-[4px]" : "-translate-y-1"}`} />
              <span className={`bg-text-2 block transition-all duration-200 h-[1.5px] w-5 rounded-sm my-0.5 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`bg-text-2 block transition-all duration-200 h-[1.5px] w-5 rounded-sm ${open ? "-rotate-45 -translate-y-[4px]" : "translate-y-1"}`} />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <>
          <div className="fixed inset-0 z-[100] bg-black/10 md:hidden" onClick={close} aria-hidden="true" />
          <div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            className="fixed top-0 right-0 bottom-0 w-[280px] z-[105] bg-white border-l border-border md:hidden flex flex-col pt-20 px-6"
          >
            <div className="flex flex-col gap-0">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={close} className="text-[16px] text-text hover:text-text-2 transition-colors py-3 border-b border-border">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={close} className="btn-primary mt-6 justify-center text-[14px]">
                Request Shadow Pilot
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
