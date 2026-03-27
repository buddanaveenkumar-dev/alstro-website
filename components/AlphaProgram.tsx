"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const validating = [
  "Shadow-mode decision processing",
  "Adverse action workflow generation",
  "Fair lending monitoring outputs",
  "Governance documentation quality",
];

const reasons = [
  {
    title: "Evaluate before procurement",
    desc: "See Alstro on your data before any commitment. No contract required.",
  },
  {
    title: "Test in shadow mode",
    desc: "Run parallel to your existing workflow. No production impact.",
  },
  {
    title: "Shape the system design",
    desc: "Design partners influence the product roadmap directly.",
  },
  {
    title: "Early access advantage",
    desc: "First institutions to validate compliance infrastructure for AI credit decisions.",
  },
];

interface FormData {
  name: string;
  company: string;
  role: string;
  email: string;
  volume: string;
}

export default function AlphaProgram() {
  const reduced = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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

  const input =
    "w-full bg-bg border border-border rounded-md px-3.5 py-2.5 text-[14px] text-text placeholder:text-text-muted focus:outline-none focus:border-text transition-colors";
  const select =
    "w-full bg-bg border border-border rounded-md px-3.5 py-2.5 text-[14px] text-text focus:outline-none focus:border-text transition-colors appearance-none";

  return (
    <section id="alpha" className="py-20 border-t border-border">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — info */}
          <div>
            <motion.p
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
              className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3"
            >
              Alpha program
            </motion.p>
            <motion.h2
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
              className="font-heading text-[32px] lg:text-[36px] text-text leading-tight mb-5"
            >
              Join the Alstro alpha program
            </motion.h2>
            <motion.p
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
              className="text-[15px] text-text-secondary leading-relaxed mb-8"
            >
              Working with select lenders to validate:
            </motion.p>

            <motion.ul
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
              className="space-y-3 mb-12"
            >
              {validating.map((v) => (
                <li
                  key={v}
                  className="flex items-center gap-2.5 text-[14px] text-text-secondary"
                >
                  <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                  {v}
                </li>
              ))}
            </motion.ul>

            {/* Why participate */}
            <motion.p
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
              className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-5"
            >
              Why participate
            </motion.p>
            <div className="space-y-4">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={reduced ? {} : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut" as const,
                    delay: reduced ? 0 : i * 0.04,
                  }}
                >
                  <h4 className="text-[14px] font-medium text-text mb-0.5">
                    {r.title}
                  </h4>
                  <p className="text-[13px] text-text-muted">{r.desc}</p>
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
            className="lg:pt-12"
          >
            <div className="bg-bg-raised border border-border rounded-xl p-7">
              <p className="text-[15px] font-medium text-text mb-1">
                Apply to join
              </p>
              <p className="text-[13px] text-text-muted mb-6">
                We review every application. Expect a response within two
                business days.
              </p>

              {submitted ? (
                <div className="py-10 text-center">
                  <p className="text-[16px] font-heading text-text mb-2">
                    Application received
                  </p>
                  <p className="text-[14px] text-text-secondary">
                    We&apos;ll be in touch within two business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-3.5"
                >
                  <div>
                    <input
                      {...register("name", { required: true })}
                      placeholder="Your name"
                      className={input}
                    />
                    {errors.name && (
                      <p className="text-[12px] text-red mt-1">Required</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("company", { required: true })}
                      placeholder="Company"
                      className={input}
                    />
                    {errors.company && (
                      <p className="text-[12px] text-red mt-1">Required</p>
                    )}
                  </div>
                  <div>
                    <select
                      {...register("role", { required: true })}
                      className={select}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Your role
                      </option>
                      <option value="CRO">Chief Risk Officer</option>
                      <option value="CCO">Chief Compliance Officer</option>
                      <option value="Head of Credit">Head of Credit</option>
                      <option value="Model Risk">Model Risk / Fair Lending</option>
                      <option value="BSA Officer">BSA Officer</option>
                      <option value="Platform">Platform / Partnerships</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.role && (
                      <p className="text-[12px] text-red mt-1">Required</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      })}
                      type="email"
                      placeholder="Work email"
                      className={input}
                    />
                    {errors.email && (
                      <p className="text-[12px] text-red mt-1">
                        Valid email required
                      </p>
                    )}
                  </div>
                  <div>
                    <select
                      {...register("volume", { required: true })}
                      className={select}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Monthly credit decisions
                      </option>
                      <option value="<1K">Under 1,000</option>
                      <option value="1K-10K">1,000–10,000</option>
                      <option value="10K-50K">10,000–50,000</option>
                      <option value="50K+">Over 50,000</option>
                    </select>
                    {errors.volume && (
                      <p className="text-[12px] text-red mt-1">Required</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-text text-bg hover:bg-text/90 disabled:opacity-50 px-5 py-2.5 rounded-md text-[14px] font-medium transition-colors flex items-center justify-center gap-2 mt-2"
                  >
                    {submitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Apply to join the alpha program{" "}
                        <ArrowRight size={15} />
                      </>
                    )}
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
