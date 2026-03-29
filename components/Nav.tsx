"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Shadow Pilot", href: "#shadow-pilot" },
  { label: "Platforms", href: "#platforms" },
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
      <nav role="navigation" aria-label="Main" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
        <div className="section-container flex items-center justify-between h-14">
          <a href="#" className="font-mono text-[15px] text-text tracking-tight" aria-label="Alstro home">
            ALSTRO<span className="text-accent">.</span>
          </a>
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="font-mono text-[12px] text-text-muted uppercase tracking-wider hover:text-text transition-colors">{l.label}</a>
            ))}
          </div>
          <a href="#shadow-pilot" className="hidden md:inline-flex text-[12px] font-mono uppercase tracking-wider bg-accent hover:bg-accent-dim text-white px-4 py-2 rounded transition-colors">
            Request Access
          </a>
          <button className="md:hidden text-text" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className="fixed inset-0 z-50 bg-bg flex flex-col" role="dialog" aria-label="Menu">
            <div className="section-container flex items-center justify-between h-14">
              <span className="font-mono text-[15px] text-text">ALSTRO<span className="text-accent">.</span></span>
              <button onClick={() => setOpen(false)} aria-label="Close"><X size={20} className="text-text" /></button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-mono text-lg text-text uppercase tracking-wider">{l.label}</a>
              ))}
              <a href="#shadow-pilot" onClick={() => setOpen(false)} className="mt-4 bg-accent text-white px-6 py-2.5 rounded font-mono text-sm uppercase tracking-wider">Request Access</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
