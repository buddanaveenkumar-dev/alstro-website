export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-main max-w-[720px]">
        <h1 className="mb-6">
          Runtime control for AI-driven lending decisions.
        </h1>
        <p className="text-[17px] md:text-[18px] text-text-2 leading-relaxed max-w-[620px] mb-10">
          Alstro sits between your decision systems and downstream execution workflows. It evaluates configured policy checks, generates decision documentation artifacts, and maintains append-only, timestamped records — before operational actions are triggered.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="btn-primary">Request Shadow Pilot</a>
          <a href="#documents" className="btn-secondary">Request Technical Overview</a>
        </div>
      </div>
    </section>
  );
}
