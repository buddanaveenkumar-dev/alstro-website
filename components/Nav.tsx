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
      <nav role="navigation" aria-label="Main" className={`fixed top-0 left-0 right-0 z-[110] h-[72px] transition-colors duration-300 ${scrolled ? "bg-bg/80 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"}`}>
        <div className="container-main flex items-center justify-between h-full">
          <a href="#" className="font-heading text-[20px] font-bold text-text tracking-[0.05em] flex items-center z-50 relative" aria-label="Alstro home">
            ALSTRO<span className="text-accent ml-0.5">.</span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[14px] text-text-2 font-medium hover:text-text transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#cta" className="button-primary text-text px-5 py-2.5 rounded-lg text-[14px] font-medium shadow-sm hover:shadow-md transition-all">
              Contact Sales
            </a>
          </div>
          <button className="md:hidden text-text p-2 -mr-2 relative z-50 flex flex-col justify-center items-center w-10 h-10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span className={`bg-text block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm ${open ? 'rotate-45 translate-y-[5px]' : '-translate-y-1'}`}></span>
            <span className={`bg-text block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm my-0.5 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-text block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm ${open ? '-rotate-45 -translate-y-[5px]' : 'translate-y-1'}`}></span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            transition={{ duration: 0.3, ease: "easeInOut" }} 
            className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-xl flex flex-col pt-32 px-6" 
            role="dialog" 
            aria-label="Mobile Menu"
          >
            <div className="flex flex-col items-start w-full gap-8">
              {links.map((l, i) => (
                <motion.a 
                  key={l.href} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1, duration: 0.3 }}
                  href={l.href} 
                  onClick={() => setOpen(false)} 
                  className="text-[28px] font-heading font-semibold text-text hover:text-accent transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                href="#cta" 
                onClick={() => setOpen(false)} 
                className="mt-6 button-primary text-text px-8 py-4 w-full text-center rounded-lg text-[16px] font-semibold tracking-wide"
              >
                Contact Sales
              </motion.a>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-auto mb-10 text-center"
            >
              <p className="font-mono text-[12px] text-text-3 font-medium tracking-wider uppercase">Institutional Compliance Layer</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
