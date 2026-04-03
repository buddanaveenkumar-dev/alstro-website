export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-main max-w-[720px]">
        <h1 className="mb-6">
          Decision infrastructure for AI-driven lending.
        </h1>
        <p className="text-[17px] md:text-[18px] text-text-2 leading-relaxed max-w-[600px] mb-10">
          Alstro is an API-based control layer that evaluates lending decisions against configured policies, generates documentation artifacts, and maintains audit-ready records — before downstream execution.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="btn-primary">Request Shadow Pilot</a>
          <a href="#documents" className="btn-secondary">Request Technical Overview</a>
        </div>
      </div>
    </section>
  );
}
