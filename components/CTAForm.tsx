"use client";
import { useState, useRef } from "react";

export default function CTAForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validateField = (n: string, v: string) => {
    if (n === "email") { if (!v) return "Work email is required."; if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Please enter a valid work email."; }
    if (n === "name" && !v) return "Full name is required.";
    if (n === "company" && !v) return "Institution name is required.";
    if (n === "role" && !v) return "Please select your role.";
    return "";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(p => ({ ...p, [name]: true }));
    setErrors(p => ({ ...p, [name]: validateField(name, value.trim()) }));
  };
  const validate = (form: HTMLFormElement) => {
    const errs: Record<string, string> = {};
    ["name", "email", "company", "role"].forEach(f => { const el = form.elements.namedItem(f) as HTMLInputElement | HTMLSelectElement; const err = validateField(f, el.value.trim()); if (err) errs[f] = err; });
    setErrors(errs); setTouched({ name: true, email: true, company: true, role: true });
    return Object.keys(errs).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const form = e.currentTarget; if (!validate(form)) return;
    setStatus("submitting");
    try { const r = await fetch("https://formspree.io/f/xgvewqky", { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } }); if (r.ok) { setStatus("success"); form.reset(); } else setStatus("error"); } catch { setStatus("error"); }
  };
  const fc = (n: string) => `input-field ${touched[n] && errors[n] ? "field-error" : ""}`;
  const sc = (n: string) => `${fc(n)} cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%234A5168%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-no-repeat bg-[right_14px_center]`;

  return (
    <section id="cta" className="py-24 md:py-32 bg-surface" aria-labelledby="cta-heading">
      <div className="container-main">
        {/* Founder Quote */}
        <blockquote className="reveal max-w-[640px] mx-auto border-l-[3px] border-accent pl-6 py-2 relative mb-20">
          <span className="absolute -top-6 -left-2 text-[64px] leading-none text-accent opacity-[0.2] font-serif select-none pointer-events-none" aria-hidden="true">&ldquo;</span>
          <p className="text-[18px] md:text-[20px] text-text font-medium italic leading-[32px] relative z-10">
            &ldquo;Lending models run at milliseconds. Compliance reviews take months. We built Alstro to enforce policy at runtime.&rdquo;
          </p>
          <cite className="block mt-4 text-[14px] text-text-3 not-italic">— Founding Team</cite>
        </blockquote>

        {/* Form */}
        <div className="reveal text-center mb-10">
          <h2 id="cta-heading" className="max-w-[600px] mx-auto mb-4">Every AI lending decision should be provable.</h2>
          <p className="text-[16px] text-text-2 max-w-[480px] mx-auto">Request a shadow pilot evaluation. Your data stays confidential.</p>
        </div>

        <div className="reveal max-w-[520px] mx-auto">
          <div className="rounded-2xl border border-border bg-glass backdrop-blur-xl p-8 md:p-10">
            {status === "success" ? (
              <div className="text-center py-10 transition-opacity duration-500">
                <h3 className="text-[20px] mb-2">Thank you.</h3>
                <p className="text-[15px] text-text-2">We&apos;ll follow up within 48 hours with pilot scope, technical documentation, and next steps.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="p-name" className="input-label">Full name</label>
                  <input id="p-name" name="name" type="text" required className={fc("name")} onBlur={handleBlur} aria-required="true" aria-invalid={!!errors.name} />
                  {touched.name && errors.name && <p className="text-[13px] text-[#EF4444] mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="p-email" className="input-label">Work email</label>
                  <input id="p-email" name="email" type="email" required className={fc("email")} onBlur={handleBlur} aria-required="true" aria-invalid={!!errors.email} />
                  {touched.email && errors.email && <p className="text-[13px] text-[#EF4444] mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="p-company" className="input-label">Institution</label>
                  <input id="p-company" name="company" type="text" required className={fc("company")} onBlur={handleBlur} aria-required="true" aria-invalid={!!errors.company} />
                  {touched.company && errors.company && <p className="text-[13px] text-[#EF4444] mt-1">{errors.company}</p>}
                </div>
                <div>
                  <label htmlFor="p-role" className="input-label">Role</label>
                  <select id="p-role" name="role" required defaultValue="" className={sc("role")} onBlur={handleBlur} aria-required="true" aria-invalid={!!errors.role}>
                    <option value="" disabled>Select your role</option>
                    <option value="CRO">CRO</option><option value="CCO">CCO</option>
                    <option value="Head of Credit">Head of Credit</option><option value="Model Risk">Model Risk / Fair Lending</option>
                    <option value="Platform">Platform & Partnerships</option><option value="Other">Other</option>
                  </select>
                  {touched.role && errors.role && <p className="text-[13px] text-[#EF4444] mt-1">{errors.role}</p>}
                </div>
                <div>
                  <label htmlFor="p-volume" className="input-label">Monthly AI decisions <span className="text-text-3 font-normal">(optional)</span></label>
                  <select id="p-volume" name="volume" defaultValue="" className={`input-field cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%234A5168%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-no-repeat bg-[right_14px_center]`}>
                    <option value="">Select if applicable</option>
                    <option value="Under 1K">Under 1K</option><option value="1K-10K">1K – 10K</option>
                    <option value="10K-50K">10K – 50K</option><option value="50K+">50K+</option>
                  </select>
                </div>
                <div className="pt-2">
                  <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed" style={{ borderRadius: 8, padding: 14 }}>
                    {status === "submitting" ? "Submitting\u2026" : "Request Shadow Pilot"}
                  </button>
                  {status === "error" && <p className="text-[13px] text-[#EF4444] text-center mt-2">Submission failed. Please try again or email sales@alstro.ai.</p>}
                </div>
                <p className="text-[12px] text-text-3 text-center leading-relaxed">Your information will be used to respond to this request only.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
