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
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = links.map(l => document.getElementById(l.href.replace('#', '')));
      let current = "";
      sections.forEach(sec => {
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 200) {
            current = "#" + sec.id;
          }
        }
      });
      setActiveHash(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav role="navigation" aria-label="Main" className={`fixed top-0 left-0 right-0 z-[110] h-[72px] transition-all duration-300 ${scrolled ? "bg-bg/90 backdrop-blur-xl border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.05)]" : "bg-bg border-b border-transparent"}`}>
        <div className="container-main flex items-center justify-between h-full w-full">
          <a href="#" className="font-heading text-[20px] font-bold text-text tracking-tight flex items-center z-50 relative" aria-label="Alstro home">
            ALSTRO<span className="text-accent ml-0.5">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => {
              const isActive = activeHash === l.href;
              return (
                <a key={l.href} href={l.href} className={`text-[14px] font-medium transition-colors relative group py-2 ${isActive ? "text-accent" : "text-text-2 hover:text-text"}`}>
                  {l.label}
                  <span className={`absolute bottom-[4px] left-0 h-[2px] transition-all duration-300 ${isActive ? "w-full bg-accent" : "w-0 bg-border group-hover:w-full"}`}></span>
                </a>
              );
            })}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <a href="#cta" className="btn-primary" style={{ padding: "10px 24px" }}>
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
            initial={{ opacity: 0, x: "100%" }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: "100%" }} 
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} 
            className="fixed inset-0 z-[100] bg-bg flex flex-col pt-32 px-8 shadow-2xl" 
            role="dialog" 
            aria-label="Mobile Menu"
          >
            <div className="flex flex-col items-start w-full gap-8">
              {links.map((l, i) => (
                <motion.a 
                  key={l.href} 
                  initial={{ opacity: 0, x: 20 }}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                href="#cta" 
                onClick={() => setOpen(false)} 
                className="mt-6 btn-primary w-full"
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
