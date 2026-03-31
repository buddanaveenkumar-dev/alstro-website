import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 lg:py-16 bg-bg relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-main relative z-10 space-y-12">
        
        {/* Top Row: Brand & Trust Signals */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="font-heading text-[20px] font-bold text-text tracking-[0.05em]">ALSTRO<span className="text-accent ml-0.5">.</span></span>
            <div className="h-6 w-[1px] bg-border hidden md:block" />
            <div className="flex items-center gap-2 text-[13px] text-text-3 font-medium">
              <ShieldCheck size={16} className="text-green" /> SOC 2 Type II In Progress
            </div>
            <div className="flex items-center gap-2 text-[13px] text-text-3 font-medium">
              <ShieldCheck size={16} className="text-green" /> US Data Residency
            </div>
          </div>
          <a href="mailto:sales@alstro.ai" className="font-mono text-[13px] text-text-2 hover:text-accent transition-colors tracking-widest uppercase">
            sales@alstro.ai
          </a>
        </div>

        {/* Bottom Row: Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border/50 pt-8">
          <div className="flex items-center gap-6">
            <p className="font-mono text-[12px] text-text-3 font-medium tracking-wide">
              &copy; {new Date().getFullYear()} Alstro AI
            </p>
            {/* Add policy pages */}
            <a href="#" className="font-mono text-[12px] text-text-3 hover:text-text transition-colors tracking-wide underline underline-offset-4 decoration-border">Privacy Policy</a>
            <a href="#" className="font-mono text-[12px] text-text-3 hover:text-text transition-colors tracking-wide underline underline-offset-4 decoration-border">Terms of Service</a>
          </div>

          <p className="font-mono text-[12px] text-text-3 font-medium tracking-[0.1em] uppercase text-center hidden lg:block">
            Built for regulated lending
          </p>

          <div className="flex items-center gap-5">
            <a href="#" aria-label="LinkedIn" className="text-text-3 hover:text-accent transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" aria-label="Twitter / X" className="text-text-3 hover:text-accent transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
