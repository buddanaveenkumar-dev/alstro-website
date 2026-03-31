"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Architecture", href: "#solution" },
  { label: "Pilot Program", href: "#shadow-pilot" },
  { label: "Partners", href: "#platforms" },
  { label: "About Us", href: "#about" },
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
      <nav role="navigation" aria-label="Main" className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}>
        <div className="container-main flex items-center justify-between h-full">
          <a href="#" className="font-mono text-[18px] font-bold text-navy tracking-[0.1em] flex items-center" aria-label="Alstro home">
            ALSTRO<span className="text-accent ml-0.5">.</span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[14px] text-text-2 font-medium hover:text-navy transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <a href="#shadow-pilot" className="hidden md:inline-flex button-primary text-white px-5 py-2.5 rounded-lg text-[14px] font-medium shadow-sm hover:shadow-md transition-all">
            Contact Sales
          </a>
          <button className="md:hidden text-navy p-2 -mr-2" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={24} /></button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, backdropFilter: "blur(0px)" }} animate={{ opacity: 1, backdropFilter: "blur(16px)" }} exit={{ opacity: 0, backdropFilter: "blur(0px)" }} transition={{ duration: 0.2 }} className="fixed inset-0 z-50 bg-white/95 flex flex-col" role="dialog" aria-label="Menu">
            <div className="container-main flex items-center justify-between h-[72px]">
              <span className="font-mono text-[18px] font-bold text-navy tracking-[0.1em]">ALSTRO<span className="text-accent ml-0.5">.</span></span>
              <button onClick={() => setOpen(false)} aria-label="Close" className="p-2 -mr-2"><X size={24} className="text-navy" /></button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-10 pb-20">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[20px] text-navy font-medium hover:text-accent transition-colors">{l.label}</a>
              ))}
              <a href="#shadow-pilot" onClick={() => setOpen(false)} className="mt-8 button-primary text-white px-8 py-4 rounded-lg text-[15px] font-medium shadow-md">Contact Sales</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
