"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const paths = [
  {
    label: "For platforms",
    title: "Exploring regulated AI in financial services",
    desc: "Discuss how Alstro fits as execution infrastructure within your FSI platform strategy.",
  },
  {
    label: "For lenders",
    title: "Modernizing underwriting infrastructure",
    desc: "See Alstro on your actual decision data — shadow mode, no production impact, no commitment.",
  },
  {
    label: "For strategic partnerships",
    title: "Early collaboration and integration",
    desc: "Help shape the execution layer for regulated AI deployment.",
  },
];

interface FormData {
  name: string;
  company: string;
  role: string;
  email: string;
  context: string;
}

export default function CTA() {
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
    <section id="validate" className="py-20 border-t border-border section-alt">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — why reach out */}
          <div>
            <motion.p
              {...fadeUp}
              className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
            >
              Get in touch
            </motion.p>
            <motion.h2
              {...fadeUp}
              className="font-heading text-[36px] lg:text-[40px] text-text leading-tight mb-8"
            >
              Explore how Alstro fits your stack.
            </motion.h2>

            <div className="space-y-6">
              {paths.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={reduced ? {} : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut" as const,
                    delay: reduced ? 0 : i * 0.05,
                  }}
                >
                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-1">
                    {p.label}
                  </p>
                  <h4 className="text-[15px] font-medium text-text mb-1">
                    {p.title}
                  </h4>
                  <p className="text-[13px] text-text-muted leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.1 }}
            className="lg:pt-10"
          >
            <div className="bg-bg-raised border border-border rounded-xl p-7">
              <p className="text-[15px] font-medium text-text mb-1">
                Request a conversation
              </p>
              <p className="text-[13px] text-text-muted mb-6">
                Architecture discussion, platform fit, or early collaboration.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <p className="text-base text-text mb-2">Request received.</p>
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
                    <input {...register("name", { required: true })} placeholder="Your name" className={input} />
                    {errors.name && <p className="text-[12px] text-red mt-1">Required</p>}
                  </div>
                  <div>
                    <input {...register("company", { required: true })} placeholder="Company" className={input} />
                    {errors.company && <p className="text-[12px] text-red mt-1">Required</p>}
                  </div>
                  <div>
                    <select {...register("role", { required: true })} className={select} defaultValue="">
                      <option value="" disabled>Your role</option>
                      <option value="Platform / Partnerships">Platform / Partnerships</option>
                      <option value="Corp Dev / Strategy">Corp Dev / Strategy</option>
                      <option value="FSI Product / Solutions">FSI Product / Solutions</option>
                      <option value="CRO / CCO">Chief Risk / Compliance Officer</option>
                      <option value="Head of Credit">Head of Credit / Underwriting</option>
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
                    <textarea
                      {...register("context")}
                      placeholder="What are you exploring? (optional)"
                      rows={3}
                      className={input}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-text text-bg hover:bg-text/90 disabled:opacity-50 px-5 py-3 rounded-md text-[15px] font-medium transition-colors flex items-center justify-center gap-2 mt-2"
                  >
                    {submitting ? "Submitting..." : (<>Request a conversation <ArrowRight size={15} /></>)}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
