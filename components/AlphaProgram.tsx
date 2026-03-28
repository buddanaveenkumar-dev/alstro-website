"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const tiles = [
  { title: "See results on your data", desc: "Not a generic demo. Your actual decisions, your models, your compliance workflow." },
  { title: "Zero production impact", desc: "Shadow mode runs parallel to your existing workflow. Nothing changes until you decide." },
  { title: "Shape the product", desc: "Validation partners influence the roadmap directly. Your use cases become the product." },
  { title: "No contract required", desc: "Evaluate the output completely before any procurement decision." },
];

interface FormData {
  name: string;
  company: string;
  role: string;
  email: string;
  volume: string;
  challenge: string;
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
    <section id="validate" className="py-20 border-t border-border">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — info */}
          <div>
            <motion.p
              {...fadeUp}
              className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
            >
              Validation
            </motion.p>
            <motion.h2
              {...fadeUp}
              className="font-heading text-[36px] lg:text-[40px] text-text leading-tight mb-5"
            >
              See Alstro on your data.
            </motion.h2>
            <motion.div {...fadeUp} className="space-y-4 mb-12">
              <p className="text-[16px] text-text-secondary leading-relaxed">
                We are running validation with a limited number of lenders. The
                process: we run your actual underwriting decisions through Alstro
                in shadow mode — parallel to your existing workflow, no
                production impact. You see exactly what Alstro produces. No
                commitment required.
              </p>
              <p className="text-[16px] text-text-secondary leading-relaxed">
                If compliant underwriting decision execution is a priority for
                your institution, request a demo.
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {tiles.map((t) => (
                <div key={t.title}>
                  <h4 className="text-[14px] font-medium text-text mb-1">
                    {t.title}
                  </h4>
                  <p className="text-[13px] text-text-muted leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.1 }}
            className="lg:pt-12"
          >
            <div className="bg-bg-raised border border-border rounded-xl p-7">
              <p className="text-[15px] font-medium text-text mb-1">
                Request a demo
              </p>
              <p className="text-[13px] text-text-muted mb-6">
                Run your actual underwriting decisions through Alstro in shadow
                mode. Validate the output. Shape the product.
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
                      <option value="CRO">Chief Risk Officer</option>
                      <option value="CCO">Chief Compliance Officer</option>
                      <option value="Head of Credit">Head of Credit / Underwriting</option>
                      <option value="Model Risk">Model Risk / Fair Lending</option>
                      <option value="BSA Officer">BSA Officer</option>
                      <option value="Platform Partner">Platform Partner / BD</option>
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
                  <div>
                    <textarea
                      {...register("challenge")}
                      placeholder="What is your most pressing compliance challenge? (optional)
e.g. adverse action methodology for ML models, fair lending monitoring frequency, SR 11-7 backlog..."
                      rows={3}
                      className={input}
                    />
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
                  We are validating with a limited number of lenders. No SDRs.
                  You will hear directly from Naveen.
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
