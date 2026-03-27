"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Product", href: "#product" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "For Lenders", href: "#roi" },
  { label: "Investors", href: "#investors" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["product", "how-it-works", "roi", "investors"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
          <a
            href="#"
            className="font-heading text-xl text-text-1 tracking-tight"
          >
            Alstro
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-150 ${
                  activeSection === link.href.slice(1)
                    ? "text-text-1"
                    : "text-text-2 hover:text-text-1"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-sm text-text-2 hover:text-text-1 transition-colors border border-border px-4 py-2 rounded-lg hover:border-border-2"
            >
              Talk to founder
            </a>
            <a
              href="#contact"
              className="text-sm bg-accent hover:bg-accent-dim text-white px-4 py-2 rounded-lg transition-colors"
            >
              Book a Demo
            </a>
          </div>

          <button
            className="md:hidden text-text-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-bg flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <span className="font-heading text-xl text-text-1">Alstro</span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} className="text-text-1" />
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
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 bg-accent hover:bg-accent-dim text-white px-8 py-3 rounded-lg text-lg transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
