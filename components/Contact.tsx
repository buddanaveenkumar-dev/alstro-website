"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

interface FormData {
  company: string;
  role: string;
  email: string;
  volume: string;
}

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Integrate with Resend or Formspree here
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  const fadeUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  const inputClass =
    "w-full bg-bg-3 border border-border rounded-lg px-4 py-3 text-sm text-text-1 placeholder:text-text-3 focus:outline-none focus:border-accent transition-colors";
  const selectClass =
    "w-full bg-bg-3 border border-border rounded-lg px-4 py-3 text-sm text-text-1 focus:outline-none focus:border-accent transition-colors appearance-none";

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          {...fadeUp}
          className="text-sm text-text-2 text-center mb-16 max-w-2xl mx-auto"
        >
          The constraint in credit AI is no longer prediction. It is compliant
          execution.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Lenders */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-bg-2 border border-border rounded-xl p-8"
          >
            <h3 className="font-heading text-2xl text-text-1 mb-2">
              Talk to a compliance engineer
            </h3>
            <p className="text-sm text-text-3 mb-1">(not a sales rep)</p>
            <p className="text-sm text-text-2 leading-relaxed mb-6">
              We run a 30-day shadow pilot on your actual decision data before
              asking for a contract. No commitment. No model changes.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="text-green text-lg font-heading mb-2">
                  Request received
                </div>
                <p className="text-sm text-text-2">
                  We&apos;ll respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input
                    {...register("company", { required: true })}
                    placeholder="Company name"
                    className={inputClass}
                  />
                  {errors.company && (
                    <p className="text-xs text-red mt-1">Required</p>
                  )}
                </div>

                <div>
                  <select {...register("role", { required: true })} className={selectClass}>
                    <option value="" className="text-text-3">
                      Your role
                    </option>
                    <option value="BSA Officer">BSA Officer</option>
                    <option value="CRO">CRO</option>
                    <option value="CCO">CCO</option>
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
                  >
                    <option value="" className="text-text-3">
                      Monthly decision volume (approx)
                    </option>
                    <option value="<1K">&lt;1K</option>
                    <option value="1K-10K">1K–10K</option>
                    <option value="10K-50K">10K–50K</option>
                    <option value="50K+">50K+</option>
                  </select>
                  {errors.volume && (
                    <p className="text-xs text-red mt-1">Required</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dim text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  Request pilot <ArrowRight size={16} />
                </button>
              </form>
            )}

            <p className="text-xs text-text-3 mt-4">
              We respond within one business day. No SDRs. You&apos;ll talk
              directly to the founder.
            </p>
          </motion.div>

          {/* For Investors */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="bg-bg-2 border border-border rounded-xl p-8"
          >
            <h3 className="font-heading text-2xl text-text-1 mb-4">
              Investor inquiries
            </h3>
            <p className="text-sm text-text-2 leading-relaxed mb-8">
              We are raising a $2.5M seed round. If you invest in regulated
              fintech infrastructure, we should talk.
            </p>

            <div className="space-y-3 mb-8">
              <a
                href="mailto:founder@alstro.ai?subject=Deck%20Request"
                className="w-full bg-accent hover:bg-accent-dim text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                Request deck <ArrowRight size={16} />
              </a>
              <a
                href="mailto:founder@alstro.ai"
                className="w-full border border-border hover:border-border-2 text-text-2 hover:text-text-1 px-6 py-3 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
              >
                Email directly <Mail size={16} />
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-text-2 mb-6">
              <Mail size={14} className="text-text-3" />
              <span className="font-mono">founder@alstro.ai</span>
            </div>

            <p className="text-xs text-text-3">
              We respond to every investor inquiry personally.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
