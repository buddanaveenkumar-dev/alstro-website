export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 bg-surface/20">
      <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[13px] text-text-3/80 font-medium tracking-wide">&copy; {new Date().getFullYear()} Alstro AI · Confidential</p>
        <div className="flex items-center gap-6">
          <a href="mailto:naveen@alstro.ai" className="font-mono text-[13px] text-text-3/80 hover:text-text transition-colors tracking-wide">naveen@alstro.ai</a>
          <span className="font-mono text-[13px] text-text-3/80 tracking-wide">alstro.ai</span>
        </div>
      </div>
    </footer>
  );
}
