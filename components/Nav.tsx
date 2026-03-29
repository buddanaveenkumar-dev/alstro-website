"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "How it works", href: "#solution" },
  { label: "Shadow Pilot", href: "#shadow-pilot" },
  { label: "For Platforms", href: "#platforms" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav role="navigation" aria-label="Main" className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200 ${scrolled ? "bg-bg/90 backdrop-blur-2xl border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.3)]" : "bg-transparent"}`}>
        <div className="container-main flex items-center justify-between h-full">
          <a href="#" className="font-mono text-[15px] font-semibold text-text tracking-[0.18em]" aria-label="Alstro home">
            ALSTRO<span className="text-accent">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="font-mono text-[11px] text-text-3 uppercase tracking-[0.08em] hover:text-text transition-colors">{l.label}</a>
            ))}
          </div>
          <a href="#shadow-pilot" className="hidden md:inline-flex font-mono text-[11px] font-medium uppercase tracking-[0.08em] bg-accent text-white px-4 py-2 rounded-sm transition-colors hover:bg-accent/90">
            Request Access
          </a>
          <button className="md:hidden text-text" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className="fixed inset-0 z-50 bg-bg flex flex-col" role="dialog" aria-label="Menu">
            <div className="container-main flex items-center justify-between h-16">
              <span className="font-mono text-[15px] font-semibold text-text tracking-[0.18em]">ALSTRO<span className="text-accent">.</span></span>
              <button onClick={() => setOpen(false)} aria-label="Close"><X size={20} className="text-text" /></button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-mono text-lg text-text uppercase tracking-[0.08em]">{l.label}</a>
              ))}
              <a href="#shadow-pilot" onClick={() => setOpen(false)} className="mt-4 bg-accent text-white px-6 py-2.5 rounded-sm font-mono text-[12px] uppercase tracking-[0.08em]">Request Access</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
