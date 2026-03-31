"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA once user scrolls past hero (approx 800px) but hide it when reaching the actual CTA section
      const scrolled = window.scrollY;
      const ctaSection = document.getElementById("cta");
      
      let hideAtBottom = false;
      if (ctaSection) {
        // If the bottom CTA is in view, hide the sticky one
        const ctaRect = ctaSection.getBoundingClientRect();
        if (ctaRect.top < window.innerHeight) {
          hideAtBottom = true;
        }
      }

      if (scrolled > 800 && !hideAtBottom) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-4 w-full flex justify-center pointer-events-none"
        >
          <div className="bg-white/95 backdrop-blur-md border border-border px-6 py-4 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center gap-6 pointer-events-auto transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
            <p className="hidden md:block text-[14px] font-medium text-text-2 border-r border-border pr-6 mr-1">
              Zero production risk shadow pilot.
            </p>
            <a href="#cta" className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full text-[14px]">
              Apply for Pilot
              <ArrowRight size={16} className="-mr-1" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
