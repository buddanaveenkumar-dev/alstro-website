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
      <nav role="navigation" aria-label="Main" className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${scrolled ? "bg-bg/70 backdrop-blur-xl border-b border-border/50 shadow-sm" : "bg-transparent"}`}>
        <div className="container-main flex items-center justify-between h-full">
          <a href="#" className="font-mono text-[16px] font-semibold text-text tracking-[0.2em] flex items-center" aria-label="Alstro home">
            ALSTRO<span className="text-accent ml-0.5">.</span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            {links.map(l => (
              <a key={l.href} href={l.href} className="font-mono text-[12px] text-text-3 font-medium uppercase tracking-[0.1em] hover:text-text transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <a href="#shadow-pilot" className="hidden md:inline-flex button-primary font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-white px-5 py-2.5 rounded-md">
            Request Access
          </a>
          <button className="md:hidden text-text p-2 -mr-2" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={24} /></button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, backdropFilter: "blur(0px)" }} animate={{ opacity: 1, backdropFilter: "blur(16px)" }} exit={{ opacity: 0, backdropFilter: "blur(0px)" }} transition={{ duration: 0.2 }} className="fixed inset-0 z-50 bg-bg/95 flex flex-col" role="dialog" aria-label="Menu">
            <div className="container-main flex items-center justify-between h-20">
              <span className="font-mono text-[16px] font-semibold text-text tracking-[0.2em]">ALSTRO<span className="text-accent ml-0.5">.</span></span>
              <button onClick={() => setOpen(false)} aria-label="Close" className="p-2 -mr-2"><X size={24} className="text-text" /></button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-10 pb-20">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-mono text-xl text-text uppercase tracking-[0.1em] hover:text-accent transition-colors">{l.label}</a>
              ))}
              <a href="#shadow-pilot" onClick={() => setOpen(false)} className="mt-8 button-primary text-white px-8 py-4 rounded-md font-mono text-[13px] uppercase tracking-[0.1em] font-semibold">Request Access</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
