"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Agents", href: "#agents" },
  { label: "Demo", href: "#demo" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <a href="#" className="font-heading text-[18px] text-text tracking-tight" aria-label="Alstro home">Alstro</a>
            <span className="text-[10px] font-mono text-accent bg-accent-light border border-accent/15 rounded px-1.5 py-[2px] leading-none uppercase tracking-wider">
              Beta
            </span>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] text-text-secondary hover:text-text transition-colors">{l.label}</a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="#demo" className="text-[13px] font-medium bg-text text-bg hover:bg-text/90 px-4 py-[7px] rounded-md transition-colors">
              Request a demo
            </a>
          </div>

          <button className="md:hidden text-text" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-bg flex flex-col"
            role="dialog" aria-label="Navigation menu"
          >
            <div className="section-container flex items-center justify-between h-14">
              <div className="flex items-center gap-3">
                <span className="font-heading text-[18px] text-text">Alstro</span>
                <span className="text-[10px] font-mono text-accent bg-accent-light border border-accent/15 rounded px-1.5 py-[2px] leading-none uppercase tracking-wider">Beta</span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close menu"><X size={20} className="text-text" /></button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-xl text-text">{l.label}</a>
              ))}
              <a href="#demo" onClick={() => setOpen(false)} className="mt-4 bg-text text-bg px-6 py-2.5 rounded-md text-sm">Request a demo</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
