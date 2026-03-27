"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "What it does", href: "#how-it-works" },
  { label: "For Lenders", href: "#early-access" },
  { label: "Investors", href: "#investors" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1100px] px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-2.5">
            <a href="#" className="font-heading text-lg text-text-1">
              Alstro
            </a>
            <span className="text-[10px] font-mono text-text-3 border border-border rounded px-1.5 py-0.5 leading-none">
              alpha
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-2 hover:text-text-1 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#early-access"
              className="text-[13px] bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Request early access
            </a>
          </div>

          <button
            className="md:hidden text-text-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" as const }}
            className="fixed inset-0 z-50 bg-bg flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-14">
              <div className="flex items-center gap-2.5">
                <span className="font-heading text-lg text-text-1">
                  Alstro
                </span>
                <span className="text-[10px] font-mono text-text-3 border border-border rounded px-1.5 py-0.5 leading-none">
                  alpha
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} className="text-text-1" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl text-text-1 font-heading"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#early-access"
                onClick={() => setMobileOpen(false)}
                className="mt-4 bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg transition-colors"
              >
                Request early access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
