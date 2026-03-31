"use client";

import { useState, useRef } from "react";
import { ArrowRight, Lock, CheckCircle2 } from "lucide-react";

export default function CTA() {
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

  const inputClass = `input-field ${errors ? "" : ""}`;

  return (
    <section id="cta" className="py-[100px] max-md:py-[60px] bg-bg" aria-labelledby="cta-heading">
      <div className="container-main">
        <div className="reveal text-center mb-12">
          <h2 id="cta-heading" className="max-w-[700px] mx-auto mb-4">
            Every regulated AI decision should be provable.
          </h2>
          <p className="text-[17px] text-text-2 max-w-[600px] mx-auto">
            We are accepting design partner applications for 30-day shadow pilots. Your actual data. Zero production risk.
          </p>
        </div>

        <div className="reveal max-w-[520px] mx-auto">
          {/* Card container */}
          <div className="bg-white border border-border rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-light text-green flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} aria-hidden="true" />
                </div>
                <h3 className="text-[24px] mb-2">Application received</h3>
                <p className="text-[16px] text-text-2">Expect to hear from us within 48 hours.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="pilot-name" className="input-label">Full Name</label>
                  <input id="pilot-name" name="name" type="text" required className="input-field" placeholder="Jane Doe" aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
                  {errors.name && <p id="name-error" className="text-[13px] text-red mt-1">{errors.name}</p>}
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="pilot-email" className="input-label">Work Email</label>
                  <input id="pilot-email" name="email" type="email" required className="input-field" placeholder="jane@institution.com" aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
                  {errors.email && <p id="email-error" className="text-[13px] text-red mt-1">{errors.email}</p>}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="pilot-company" className="input-label">Company</label>
                  <input id="pilot-company" name="company" type="text" required className="input-field" placeholder="Acme Financial" aria-required="true" aria-invalid={!!errors.company} aria-describedby={errors.company ? "company-error" : undefined} />
                  {errors.company && <p id="company-error" className="text-[13px] text-red mt-1">{errors.company}</p>}
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="pilot-role" className="input-label">Your Role</label>
                  <select id="pilot-role" name="role" required defaultValue="" className="input-field cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2394a3b8%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-no-repeat bg-[right_16px_center]" aria-required="true" aria-invalid={!!errors.role} aria-describedby={errors.role ? "role-error" : undefined}>
                    <option value="" disabled>Select your role...</option>
                    <option value="CRO">CRO</option>
                    <option value="CCO">CCO</option>
                    <option value="Head of Credit">Head of Credit</option>
                    <option value="Model Risk / Fair Lending">Model Risk / Fair Lending</option>
                    <option value="Platform / Partnerships">Platform / Partnerships</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.role && <p id="role-error" className="text-[13px] text-red mt-1">{errors.role}</p>}
                </div>

                {/* Monthly AI-Assisted Decisions */}
                <div>
                  <label htmlFor="pilot-volume" className="input-label">Monthly AI-Assisted Decisions</label>
                  <select id="pilot-volume" name="volume" required defaultValue="" className="input-field cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2394a3b8%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-no-repeat bg-[right_16px_center]" aria-required="true" aria-invalid={!!errors.volume} aria-describedby={errors.volume ? "volume-error" : undefined}>
                    <option value="" disabled>Select volume...</option>
                    <option value="Under 1,000">Under 1,000</option>
                    <option value="1,000-10,000">1,000 – 10,000</option>
                    <option value="10,000-50,000">10,000 – 50,000</option>
                    <option value="Over 50,000">Over 50,000</option>
                  </select>
                  {errors.volume && <p id="volume-error" className="text-[13px] text-red mt-1">{errors.volume}</p>}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary w-full text-[16px] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                        Submitting…
                      </span>
                    ) : (
                      <>Request Shadow Pilot <ArrowRight size={16} aria-hidden="true" /></>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-[13px] text-red text-center mt-3">Something went wrong. Please try again.</p>
                  )}
                </div>

                {/* Trust footer */}
                <div className="flex items-center justify-center gap-2 text-[13px] text-text-3 pt-2">
                  <Lock size={14} aria-hidden="true" />
                  Your data stays confidential. We respond within 48 hours.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
