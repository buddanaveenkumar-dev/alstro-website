export default function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[12px] text-text-3">&copy; {new Date().getFullYear()} Alstro AI · Confidential</p>
        <div className="flex items-center gap-4">
          <a href="mailto:naveen@alstro.ai" className="font-mono text-[12px] text-text-3 hover:text-text transition-colors">naveen@alstro.ai</a>
          <span className="font-mono text-[12px] text-text-3">alstro.ai</span>
        </div>
      </div>
    </footer>
  );
}
