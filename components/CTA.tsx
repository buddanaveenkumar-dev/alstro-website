"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const reduced = useReducedMotion();
  const fadeUp = { initial: reduced ? {} : { opacity: 0, scale: 0.98, y: 20 }, whileInView: { opacity: 1, scale: 1, y: 0 }, viewport: { once: true } as const, transition: { duration: 0.6, ease: "easeOut" as const } };

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="cta" className="py-24 lg:py-32 relative bg-surface">
      <div className="container-main">
        <motion.div {...fadeUp} className="glass-panel max-w-[1000px] mx-auto rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden group border border-border bg-bg shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none transition-colors duration-700" />
          
          <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h2 className="font-heading text-[32px] sm:text-[40px] text-text leading-[1.08] tracking-[-0.02em] mb-6 font-semibold">
                Start <span className="text-gradient-accent">shadowing</span> your models.
              </h2>
              <p className="text-[17px] text-text-2 leading-relaxed mb-10 font-light">
                Request access for a 30-day shadow pilot. Compare your current output with Alstro's cryptographic proof. Zero production risk.
              </p>
              <div className="hidden lg:flex flex-col gap-5 text-[14px] text-text-3 font-medium">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-elevated border border-border flex justify-center items-center text-accent"><Lock size={16} /></div>
                  Bank-grade security architecture
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-elevated border border-border flex justify-center items-center text-accent"><Lock size={16} /></div>
                  SOC 2 Type II compliant
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-3 bg-surface border border-border/50 rounded-xl p-6 sm:p-8 relative">
              {status === "success" ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-green/10 text-green flex justify-center items-center mx-auto mb-6 border border-green/20">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="font-heading text-[28px] font-semibold text-text mb-3">Request Received</h3>
                  <p className="text-[16px] text-text-2 max-w-[300px] mx-auto">Our team will be in touch shortly to schedule your compliance assessment.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[13px] font-medium text-text-3 px-1">Full Name</label>
                      <input id="name" required type="text" className="w-full bg-bg border border-border rounded-lg px-4 py-3.5 text-[15px] text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[13px] font-medium text-text-3 px-1">Work Email</label>
                      <input id="email" required type="email" className="w-full bg-bg border border-border rounded-lg px-4 py-3.5 text-[15px] text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors" placeholder="jane@institution.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-[13px] font-medium text-text-3 px-1">Institution Name</label>
                    <input id="company" required type="text" className="w-full bg-bg border border-border rounded-lg px-4 py-3.5 text-[15px] text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors" placeholder="Acme Financial" />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="volume" className="text-[13px] font-medium text-text-3 px-1">Annual Application Volume</label>
                    <div className="relative">
                      <select id="volume" required defaultValue="" className="w-full bg-bg border border-border rounded-lg px-4 py-3.5 text-[15px] text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors cursor-pointer appearance-none">
                        <option value="" disabled>Select volume...</option>
                        <option value="<50k">Less than 50k</option>
                        <option value="50k-250k">50k - 250k</option>
                        <option value="250k-1M">250k - 1M</option>
                        <option value=">1M">More than 1M</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-text-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[13px] font-medium text-text-3 px-1">Context (Optional)</label>
                    <textarea id="message" rows={3} className="w-full bg-bg border border-border rounded-lg px-4 py-3.5 text-[15px] text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors resize-none" placeholder="What core lending systems or models are you running?"></textarea>
                  </div>

                  <div className="pt-2">
                    <button disabled={status === "submitting"} type="submit" className="button-primary w-full inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg text-[16px] font-semibold disabled:opacity-70 disabled:cursor-not-allowed">
                      {status === "submitting" ? "Submitting Request..." : (
                        <>Submit Request <ArrowRight size={18} /></>
                      )}
                    </button>
                    <p className="text-center text-[12px] text-text-3/60 font-medium mt-4">By submitting this form, you agree to our privacy policy and terms.</p>
                  </div>
                </form>
              )}
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
