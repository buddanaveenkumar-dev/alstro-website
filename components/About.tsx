"use client";

export default function About() {
  return (
    <section id="about" className="py-[100px] max-md:py-[60px] bg-surface" aria-labelledby="about-heading">
      <div className="container-main">
        <div className="reveal text-center mb-16">
          <p className="font-mono text-[13px] text-accent font-semibold uppercase tracking-[0.08em] mb-4">Leadership</p>
          <h2 id="about-heading" className="max-w-[700px] mx-auto">
            Built by domain experts in AI and Financial Services.
          </h2>
        </div>

        <div className="reveal max-w-[800px] mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="text-text-2">
            <p className="text-[17px] leading-relaxed mb-6">
              Our founding team brings deep expertise as serial entrepreneurs in both artificial intelligence and highly regulated fintech infrastructure.
            </p>
            <p className="text-[17px] leading-relaxed">
              We understand the friction between rapid model deployment and rigorous institutional compliance. Alstro was engineered specifically to dissolve that friction, providing mathematical proof of compliance without slowing down innovation.
            </p>
          </div>

          <div className="card">
            <blockquote className="border-l-[3px] border-accent pl-6 py-2 mb-8">
              <p className="text-[17px] sm:text-[19px] text-text font-medium italic leading-relaxed">
                &ldquo;Lending models run at milliseconds; compliance reviews take months. We built Alstro to enforce policy exactly where the risk is highest: at runtime.&rdquo;
              </p>
            </blockquote>

            <div className="bg-[#F7F8FA] rounded-xl p-6 border border-border">
              <h4 className="font-mono text-[12px] text-accent font-semibold uppercase tracking-wider mb-4">Core Expertise</h4>
              <ul className="space-y-3 text-[15px] text-text-2 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent leading-none mt-1.5" aria-hidden="true">•</span>
                  Serial Entrepreneurs in AI and Fintech
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent leading-none mt-1.5" aria-hidden="true">•</span>
                  Scaled previous fintech infrastructures to <span className="text-text font-semibold">500K+</span> active borrowers
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent leading-none mt-1.5" aria-hidden="true">•</span>
                  Deep expertise in deploying machine learning within highly regulated institutional environments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
