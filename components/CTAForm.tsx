"use client";

import { useState, useRef } from "react";
import { ArrowRight, Lock, CheckCircle2 } from "lucide-react";

export default function CTAForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (form: HTMLFormElement): boolean => {
    const errs: Record<string, string> = {};
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const company = (form.elements.namedItem("company") as HTMLInputElement).value.trim();
    const role = (form.elements.namedItem("role") as HTMLSelectElement).value;
    const volume = (form.elements.namedItem("volume") as HTMLSelectElement).value;

    if (!name) errs.name = "Full name is required";
    if (!email) errs.email = "Work email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email";
    if (!company) errs.company = "Company name is required";
    if (!role) errs.role = "Please select your role";
    if (!volume) errs.volume = "Please select a volume range";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;

    setStatus("submitting");
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xgvewqky", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const selectClasses = "input-field cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%234A5168%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-no-repeat bg-[right_16px_center]";

  return (
    <section id="cta" className="py-24 md:py-32 bg-surface" aria-labelledby="cta-heading">
      <div className="container-main">
        <div className="reveal text-center mb-10">
          <h2 id="cta-heading" className="max-w-[600px] mx-auto mb-4">
            Every AI lending decision should be provable.
          </h2>
          <p className="text-[17px] text-text-2 max-w-[480px] mx-auto">
            Apply for a 30-day shadow pilot. Your data stays confidential.
          </p>
        </div>

        <div className="reveal max-w-[520px] mx-auto">
          <div className="rounded-2xl border border-border bg-[rgba(255,255,255,0.03)] backdrop-blur-xl p-8">
            {status === "success" ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-[rgba(0,229,160,0.1)] text-accent flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={28} aria-hidden="true" />
                </div>
                <h3 className="text-[22px] mb-2">Application received</h3>
                <p className="text-[15px] text-text-2">We&apos;ll respond within 48 hours.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="pilot-name" className="input-label">Full Name</label>
                  <input id="pilot-name" name="name" type="text" required className="input-field" placeholder="Jane Doe" aria-required="true" aria-invalid={!!errors.name} />
                  {errors.name && <p className="text-[13px] text-[#FF6B35] mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="pilot-email" className="input-label">Work Email</label>
                  <input id="pilot-email" name="email" type="email" required className="input-field" placeholder="jane@institution.com" aria-required="true" aria-invalid={!!errors.email} />
                  {errors.email && <p className="text-[13px] text-[#FF6B35] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="pilot-company" className="input-label">Company</label>
                  <input id="pilot-company" name="company" type="text" required className="input-field" placeholder="Acme Financial" aria-required="true" aria-invalid={!!errors.company} />
                  {errors.company && <p className="text-[13px] text-[#FF6B35] mt-1">{errors.company}</p>}
                </div>

                <div>
                  <label htmlFor="pilot-role" className="input-label">Your Role</label>
                  <select id="pilot-role" name="role" required defaultValue="" className={selectClasses} aria-required="true" aria-invalid={!!errors.role}>
                    <option value="" disabled>Select your role...</option>
                    <option value="CRO">CRO</option>
                    <option value="CCO">CCO</option>
                    <option value="Head of Credit">Head of Credit</option>
                    <option value="Model Risk / Fair Lending">Model Risk / Fair Lending</option>
                    <option value="Platform / Partnerships">Platform / Partnerships</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.role && <p className="text-[13px] text-[#FF6B35] mt-1">{errors.role}</p>}
                </div>

                <div>
                  <label htmlFor="pilot-volume" className="input-label">Monthly AI Decisions</label>
                  <select id="pilot-volume" name="volume" required defaultValue="" className={selectClasses} aria-required="true" aria-invalid={!!errors.volume}>
                    <option value="" disabled>Select volume...</option>
                    <option value="Under 1,000">Under 1K</option>
                    <option value="1,000-10,000">1K – 10K</option>
                    <option value="10,000-50,000">10K – 50K</option>
                    <option value="Over 50,000">50K+</option>
                  </select>
                  {errors.volume && <p className="text-[13px] text-[#FF6B35] mt-1">{errors.volume}</p>}
                </div>

                <div className="pt-1">
                  <button type="submit" disabled={status === "submitting"} className="btn-primary w-full text-[15px] disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === "submitting" ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                        Submitting…
                      </span>
                    ) : (
                      <>Get Early Access <ArrowRight size={16} aria-hidden="true" /></>
                    )}
                  </button>
                  {status === "error" && <p className="text-[13px] text-[#FF6B35] text-center mt-3">Something went wrong. Please try again.</p>}
                </div>

                <div className="flex items-center justify-center gap-2 text-[13px] text-text-3 pt-1">
                  <Lock size={14} aria-hidden="true" />
                  We respond within 48 hours.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
