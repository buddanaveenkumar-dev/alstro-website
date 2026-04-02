const navLinks = [
  { label: "Architecture", href: "#solution" },
  { label: "Pilot Program", href: "#shadow-pilot" },
  { label: "Partners", href: "#platforms" },
  { label: "About Us", href: "#about" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-12 lg:py-16" role="contentinfo">
      <div className="container-main space-y-10">

        {/* Row 1: Brand + Nav */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="font-heading text-[18px] font-semibold text-text">
              ALSTRO<span className="text-accent">.</span>
            </span>
            <span className="text-[13px] text-text-3">Institutional Compliance Layer</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-[14px] text-text-3 hover:text-accent transition-colors font-medium">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Row 2: Copyright + Legal + Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-8">
          <div className="flex flex-wrap items-center gap-4 text-[12px] text-text-3 font-mono">
            <p>&copy; {new Date().getFullYear()} Alstro AI &middot; Confidential</p>
            {/* TODO: Add policy pages */}
            <a href="#" className="hover:text-text transition-colors underline underline-offset-4 decoration-border">Privacy Policy</a>
            <a href="#" className="hover:text-text transition-colors underline underline-offset-4 decoration-border">Terms of Service</a>
          </div>

          <div className="flex items-center gap-5">
            <a href="mailto:sales@alstro.ai" className="text-[13px] text-text-3 hover:text-accent transition-colors font-mono">
              sales@alstro.ai
            </a>
            <a href="#" aria-label="LinkedIn" className="text-text-3 hover:text-accent transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="#" aria-label="Twitter / X" className="text-text-3 hover:text-accent transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
