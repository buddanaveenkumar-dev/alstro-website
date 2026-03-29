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
}

export default function DemoForm() {
  const reduced = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (id) {
      try {
        await fetch(`https://formspree.io/f/${id}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch {
        // Formspree handles retries
      }
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  const input = "w-full bg-bg border border-border rounded-md px-3.5 py-2.5 text-[14px] text-text placeholder:text-text-muted focus:outline-none focus:border-text transition-colors";
  const select = "w-full bg-bg border border-border rounded-md px-3.5 py-2.5 text-[14px] text-text focus:outline-none focus:border-text transition-colors appearance-none";

  const fadeUp = {
    initial: reduced ? {} : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.4, ease: "easeOut" as const },
  };

  return (
    <section id="demo" className="py-20 border-t border-border">
      <div className="section-container">
        <div className="max-w-[480px] mx-auto">
          <motion.p
            {...fadeUp}
            className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3 text-center"
          >
            Get a demo
          </motion.p>
          <motion.h2
            {...fadeUp}
            className="font-heading text-[32px] lg:text-[38px] text-text leading-tight mb-5 text-center"
          >
            See it on your data.
          </motion.h2>
          <motion.div {...fadeUp} className="text-center mb-10">
            <p className="text-[16px] text-text-secondary leading-relaxed mb-4">
              We run your actual underwriting decisions through Alstro in shadow
              mode — no production impact, no commitment. You see exactly what
              Alstro produces on your data.
            </p>
            <p className="text-[14px] text-text-muted">
              We are currently working with a small number of lenders.
            </p>
          </motion.div>

          {/* Founder trust line */}
          <motion.div {...fadeUp} className="flex items-center gap-4 justify-center mb-8">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-mono text-white text-sm font-medium shrink-0">
              NB
            </div>
            <p className="text-sm text-text-secondary text-left">
              <span className="font-medium text-text">Naveen Budda</span>
              {" "}— Founder, Alstro AI. Previously KarmaLife (AI lending,
              500K+ users, regulated balance sheets). You will hear from me
              directly.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div {...fadeUp}>
            <div className="bg-bg-raised border border-border rounded-xl p-7">
              {submitted ? (
                <div className="text-center py-16">
                  <p className="text-lg text-text mb-2">Request received.</p>
                  <p className="text-sm text-text-secondary">
                    Naveen will be in touch within one business day.
                  </p>
                  <p className="font-mono text-xs text-text-muted mt-4">
                    — Naveen Budda, Founder
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
                  <div>
                    <input {...register("name", { required: true })} placeholder="Name" className={input} />
                    {errors.name && <p className="text-[12px] text-red mt-1">Required</p>}
                  </div>
                  <div>
                    <input {...register("company", { required: true })} placeholder="Company" className={input} />
                    {errors.company && <p className="text-[12px] text-red mt-1">Required</p>}
                  </div>
                  <div>
                    <select {...register("role", { required: true })} className={select} defaultValue="">
                      <option value="" disabled>Role</option>
                      <option value="CCO">Chief Compliance Officer</option>
                      <option value="CRO">Chief Risk Officer</option>
                      <option value="Head of Credit">Head of Credit / Underwriting</option>
                      <option value="BSA Officer">BSA Officer</option>
                      <option value="Model Risk">Model Risk / Fair Lending</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.role && <p className="text-[12px] text-red mt-1">Required</p>}
                  </div>
                  <div>
                    <input
                      {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                      type="email"
                      placeholder="Work email"
                      className={input}
                    />
                    {errors.email && <p className="text-[12px] text-red mt-1">Valid email required</p>}
                  </div>
                  <div>
                    <select {...register("volume", { required: true })} className={select} defaultValue="">
                      <option value="" disabled>Monthly underwriting decisions</option>
                      <option value="<1K">Under 1,000</option>
                      <option value="1K-10K">1,000 – 10,000</option>
                      <option value="10K-50K">10,000 – 50,000</option>
                      <option value="50K+">Over 50,000</option>
                    </select>
                    {errors.volume && <p className="text-[12px] text-red mt-1">Required</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-text text-bg hover:bg-text/90 disabled:opacity-50 px-5 py-3 rounded-md text-[15px] font-medium transition-colors flex items-center justify-center gap-2 mt-2"
                  >
                    {submitting ? "Submitting..." : (<>Request a demo <ArrowRight size={15} /></>)}
                  </button>
                </form>
              )}

              {!submitted && (
                <p className="text-[12px] text-text-muted mt-4 text-center">
                  No SDRs. You will hear from Naveen within one business day.
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
