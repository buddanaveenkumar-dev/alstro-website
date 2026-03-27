"use client";

import { motion, useReducedMotion } from "framer-motion";

const logos = [
  "Meridian Bank",
  "Northline Credit Union",
  "Veritas Lending",
  "ClearPath Finance",
  "Summit BaaS",
  "Apex Fintech",
];

export default function LogoBar() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-16 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-sm text-text-3 text-center mb-10"
        >
          Trusted by compliance teams at —
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={prefersReducedMotion ? {} : { opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              whileHover={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: prefersReducedMotion ? 0 : i * 0.05,
              }}
              className="transition-opacity duration-150"
            >
              <svg
                width="140"
                height="32"
                viewBox="0 0 140 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="70"
                  y="20"
                  textAnchor="middle"
                  fill="#a1a1aa"
                  fontFamily="system-ui, sans-serif"
                  fontSize="14"
                  fontWeight="500"
                  letterSpacing="0.5"
                >
                  {name}
                </text>
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
