"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Product", href: "#decision-flow" },
  { label: "Architecture", href: "#runtime" },
  { label: "Validate", href: "#validate" },
  { label: "Global", href: "#regulatory-architecture" },
  { label: "Partners", href: "#partners" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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
          scrolled
            ? "bg-bg/85 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <a href="#" className="font-heading text-[18px] text-text tracking-tight" aria-label="Alstro AI home">
              Alstro
            </a>
            <span className="flex items-center gap-1.5 text-[10px] font-mono text-accent bg-accent-light border border-accent/15 rounded px-1.5 py-[2px] leading-none uppercase tracking-wider">
              Beta
              <span className="w-1.5 h-1.5 rounded-full bg-green pulse-live" />
            </span>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link text-[13px] transition-colors ${
                  active === l.href.slice(1)
                    ? "text-text"
                    : "text-text-secondary hover:text-text"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#validate"
              className="text-[13px] font-medium bg-text text-bg hover:bg-text/90 px-4 py-[7px] rounded-md transition-colors"
            >
              Request a demo
            </a>
          </div>

          <button
            className="md:hidden text-text"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-bg flex flex-col"
            role="dialog"
            aria-label="Navigation menu"
          >
            <div className="section-container flex items-center justify-between h-14">
              <div className="flex items-center gap-3">
                <span className="font-heading text-[18px] text-text">Alstro</span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-accent bg-accent-light border border-accent/15 rounded px-1.5 py-[2px] leading-none uppercase tracking-wider">
                  Beta
                  <span className="w-1.5 h-1.5 rounded-full bg-green pulse-live" />
                </span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={20} className="text-text" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-xl text-text"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#validate"
                onClick={() => setOpen(false)}
                className="mt-4 bg-text text-bg px-6 py-2.5 rounded-md text-sm"
              >
                Request a demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
