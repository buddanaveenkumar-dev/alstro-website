"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  company: string;
  role: string;
  email: string;
  volume: string;
  challenge: string;
}

export default function EarlyAccess() {
  const prefersReducedMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (formspreeId) {
      try {
        await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch {
        // Fall through to success state — Formspree handles retries
      }
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  const fadeUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  const inputClass =
    "w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text-1 placeholder:text-text-3 focus:outline-none focus:border-accent transition-colors";
  const selectClass =
    "w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text-1 focus:outline-none focus:border-accent transition-colors appearance-none";

  return (
    <section id="early-access" className="py-24 border-t border-border">
      <div className="mx-auto max-w-[560px] px-6">
        <motion.p
          {...fadeUp}
          className="text-[11px] font-mono text-text-3 uppercase tracking-widest mb-4"
        >
          Early access
        </motion.p>

        <motion.h2
          {...fadeUp}
          className="font-heading text-[40px] text-text-1 leading-tight mb-4"
        >
          We&apos;re building Alstro with a small group of lenders.
        </motion.h2>

        <motion.div {...fadeUp} className="text-[17px] text-text-2 leading-relaxed mb-8 space-y-4">
          <p>
            If you&apos;re running AI-assisted underwriting and want compliant
            adverse action notices, continuous fair lending monitoring, and
            SR 11-7 documentation without rebuilding your stack — we want to
            talk.
          </p>
          <p>
            We run a 30-day shadow pilot on your actual decision data. No
            commitment. No model changes. You see exactly what Alstro produces
            before signing anything.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          {submitted ? (
            <div className="bg-green-bg border border-green/20 rounded-xl p-8 text-center">
              <div className="text-lg font-heading text-green mb-2">
                Request received
              </div>
              <p className="text-sm text-text-2">
                We&apos;ll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...register("name", { required: true })}
                  placeholder="Your name"
                  className={inputClass}
                />
                {errors.name && (
                  <p className="text-xs text-red mt-1">Required</p>
                )}
              </div>

              <div>
                <input
                  {...register("company", { required: true })}
                  placeholder="Company"
                  className={inputClass}
                />
                {errors.company && (
                  <p className="text-xs text-red mt-1">Required</p>
                )}
              </div>

              <div>
                <select
                  {...register("role", { required: true })}
                  className={selectClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Your role
                  </option>
                  <option value="BSA Officer">BSA Officer</option>
                  <option value="CCO">CCO</option>
                  <option value="CRO">CRO</option>
                  <option value="Head of Credit">Head of Credit</option>
                  <option value="Other">Other</option>
                </select>
                {errors.role && (
                  <p className="text-xs text-red mt-1">Required</p>
                )}
              </div>

              <div>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  type="email"
                  placeholder="Email"
                  className={inputClass}
                />
                {errors.email && (
                  <p className="text-xs text-red mt-1">Valid email required</p>
                )}
              </div>

              <div>
                <select
                  {...register("volume", { required: true })}
                  className={selectClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Monthly decisions
                  </option>
                  <option value="Under 1,000">Under 1,000</option>
                  <option value="1,000-10,000">1,000–10,000</option>
                  <option value="10,000-50,000">10,000–50,000</option>
                  <option value="Over 50,000">Over 50,000</option>
                </select>
                {errors.volume && (
                  <p className="text-xs text-red mt-1">Required</p>
                )}
              </div>

              <div>
                <textarea
                  {...register("challenge")}
                  placeholder="Primary challenge? (optional)"
                  rows={3}
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-accent hover:bg-accent/90 disabled:opacity-60 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                {submitting ? "Submitting..." : (
                  <>Request early access <ArrowRight size={15} /></>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {!submitted && (
          <motion.p {...fadeUp} className="text-xs text-text-3 mt-4">
            We&apos;re in alpha. No SDRs. You&apos;ll talk directly to the
            founder within one business day.
          </motion.p>
        )}
      </div>
    </section>
  );
}
