"use client";

import { useState, useRef } from "react";

export default function CTAForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validateField = (name: string, value: string): string => {
    if (name === "email") {
      if (!value) return "Work email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid work email.";
    }
    if (name === "name" && !value) return "Full name is required.";
    if (name === "company" && !value) return "Institution name is required.";
    if (name === "role" && !value) return "Please select your role.";
    return "";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value.trim());
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validate = (form: HTMLFormElement): boolean => {
    const errs: Record<string, string> = {};
    const fields = ["name", "email", "company", "role"];
    fields.forEach((f) => {
      const el = form.elements.namedItem(f) as HTMLInputElement | HTMLSelectElement;
      const err = validateField(f, el.value.trim());
      if (err) errs[f] = err;
    });
    setErrors(errs);
    setTouched({ name: true, email: true, company: true, role: true });
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

  const fieldClass = (name: string) =>
    `input-field ${touched[name] && errors[name] ? "field-error" : ""}`;

  const selectClass = (name: string) =>
    `${fieldClass(name)} cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%239CA3AF%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-no-repeat bg-[right_14px_center]`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface" aria-labelledby="contact-heading">
      <div className="container-main">
        <div className="reveal max-w-[480px] mb-10">
          <p className="section-label">Get started</p>
          <h2 id="contact-heading" className="mb-4">
            Request a shadow pilot evaluation.
          </h2>
          <p className="text-[15px] text-text-2 leading-relaxed">
            Provide your details and we will follow up with pilot scope, technical documentation, and next steps.
          </p>
        </div>

        <div className="reveal max-w-[440px]">
          {status === "success" ? (
            <div className="py-12">
              <h3 className="text-[18px] mb-2">Request received.</h3>
              <p className="text-[15px] text-text-2">We will respond within two business days.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="pilot-name" className="input-label">Full name</label>
                <input id="pilot-name" name="name" type="text" required className={fieldClass("name")} onBlur={handleBlur} aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
                {touched.name && errors.name && <p id="name-err" className="text-[13px] text-[#DC2626] mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="pilot-email" className="input-label">Work email</label>
                <input id="pilot-email" name="email" type="email" required className={fieldClass("email")} onBlur={handleBlur} aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
                {touched.email && errors.email && <p id="email-err" className="text-[13px] text-[#DC2626] mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="pilot-company" className="input-label">Institution</label>
                <input id="pilot-company" name="company" type="text" required className={fieldClass("company")} onBlur={handleBlur} aria-required="true" aria-invalid={!!errors.company} aria-describedby={errors.company ? "company-err" : undefined} />
                {touched.company && errors.company && <p id="company-err" className="text-[13px] text-[#DC2626] mt-1">{errors.company}</p>}
              </div>

              <div>
                <label htmlFor="pilot-role" className="input-label">Role</label>
                <select id="pilot-role" name="role" required defaultValue="" className={selectClass("role")} onBlur={handleBlur} aria-required="true" aria-invalid={!!errors.role} aria-describedby={errors.role ? "role-err" : undefined}>
                  <option value="" disabled>Select your role</option>
                  <option value="CRO">Chief Risk Officer</option>
                  <option value="CCO">Chief Compliance Officer</option>
                  <option value="Head of Credit">Head of Credit</option>
                  <option value="Model Risk">Model Risk / Fair Lending</option>
                  <option value="Lending CTO">Lending CTO / Engineering</option>
                  <option value="Other">Other</option>
                </select>
                {touched.role && errors.role && <p id="role-err" className="text-[13px] text-[#DC2626] mt-1">{errors.role}</p>}
              </div>

              <div>
                <label htmlFor="pilot-interest" className="input-label">Interest <span className="text-text-3 font-normal">(optional)</span></label>
                <select id="pilot-interest" name="interest" defaultValue="" className={`input-field cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%239CA3AF%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-no-repeat bg-[right_14px_center]`}>
                  <option value="">Select if applicable</option>
                  <option value="Shadow Pilot">Shadow pilot evaluation</option>
                  <option value="Technical Overview">Technical overview</option>
                  <option value="Security Overview">Security documentation</option>
                  <option value="Sample Report">Sample decision report</option>
                </select>
              </div>

              <div className="pt-2">
                <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === "submitting" ? "Submitting…" : "Submit Request"}
                </button>
                {status === "error" && <p className="text-[13px] text-[#DC2626] mt-2">Submission failed. Please try again or contact sales@alstro.ai directly.</p>}
              </div>

              <p className="text-[12px] text-text-3 leading-relaxed">
                Your information will be used to respond to this request. We do not share contact information with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
