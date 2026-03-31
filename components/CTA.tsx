"use client";

import { useState } from "react";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xgvewqky", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("idle");
        alert("There was an error submitting your request. Please try again.");
      }
    } catch (error) {
      setStatus("idle");
      alert("Network error. Please try again.");
    }
  };

  return (
    <section id="cta" className="py-24 lg:py-32 bg-surface relative">
      <div className="container-main reveal-stagger">
        <div className="reveal bg-white border border-border shadow-[0_8px_30px_rgba(0,0,0,0.06)] max-w-[1000px] mx-auto rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid lg:grid-cols-5 gap-12 items-center relative z-10">
            {/* Left Copy */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h2 className="text-[32px] sm:text-[40px] text-text leading-[1.1] mb-6">
                Start shadowing your models.
              </h2>
              <p className="text-[17px] text-text-2 leading-relaxed mb-10">
                Request access for a 30-day shadow pilot. Compare your current output with Alstro's cryptographic proof. Zero production risk.
              </p>
              
              <div className="hidden lg:flex flex-col gap-5 text-[15px] text-text">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface border border-border flex justify-center items-center text-accent">
                    <Lock size={18} />
                  </div>
                  <span className="font-medium">Bank-grade security architecture</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface border border-border flex justify-center items-center text-accent">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="font-medium">SOC 2 Type II compliant</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-3 bg-surface border border-border rounded-xl p-6 sm:p-8">
              {status === "success" ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-green-light text-green flex justify-center items-center mx-auto mb-6">
                    <ShieldCheck size={40} />
                  </div>
                  <h3 className="text-[28px] font-semibold text-text mb-3">Request Received</h3>
                  <p className="text-[16px] text-text-2 max-w-[300px] mx-auto">
                    Our team will be in touch shortly to schedule your compliance assessment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5 align-left text-left">
                      <label htmlFor="name" className="text-[13px] font-medium text-text px-1">Full Name</label>
                      <input id="name" name="name" required type="text" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-[15px] text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-1.5 align-left text-left">
                      <label htmlFor="email" className="text-[13px] font-medium text-text px-1">Work Email</label>
                      <input id="email" name="email" required type="email" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-[15px] text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="jane@institution.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 align-left text-left">
                    <label htmlFor="company" className="text-[13px] font-medium text-text px-1">Institution Name</label>
                    <input id="company" name="company" required type="text" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-[15px] text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="Acme Financial" />
                  </div>

                  <div className="space-y-1.5 align-left text-left">
                    <label htmlFor="volume" className="text-[13px] font-medium text-text px-1">Annual Application Volume</label>
                    <select id="volume" name="volume" required defaultValue="" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-[15px] text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors cursor-pointer">
                      <option value="" disabled>Select volume...</option>
                      <option value="<50k">Less than 50k</option>
                      <option value="50k-250k">50k - 250k</option>
                      <option value="250k-1M">250k - 1M</option>
                      <option value=">1M">More than 1M</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button disabled={status === "submitting"} type="submit" className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed text-[16px]">
                      {status === "submitting" ? "Submitting Request..." : (
                        <>Submit Request <ArrowRight size={18} /></>
                      )}
                    </button>
                    <p className="text-center text-[12px] text-text-3 font-medium mt-4">By submitting this form, you agree to our privacy policy and terms.</p>
                  </div>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
