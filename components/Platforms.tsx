"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Platforms() {
  return (
    <section id="platforms" className="py-24 lg:py-32 bg-bg relative border-y border-border">
      <div className="container-main reveal-stagger">
        <div className="reveal flex flex-col items-center text-center mb-16">
          <h2 className="max-w-[700px] text-text mb-12">
            The compliance standard for AI lending platforms
          </h2>
          
          {/* Logo Row */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16 opacity-60 grayscale">
            <span className="font-heading text-[24px] font-bold text-text-2">LoanPro</span>
            <span className="font-heading text-[24px] font-bold text-text-2 tracking-tight">taktile</span>
            <span className="font-heading text-[24px] font-bold text-text-2">Zest AI</span>
            <span className="font-heading text-[24px] font-bold text-text-2">databricks</span>
            <span className="font-heading text-[24px] font-bold text-text-2">salesforce</span>
          </div>
        </div>

        {/* Info Cards */}
        <div className="reveal grid md:grid-cols-2 gap-6 lg:gap-8 max-w-[900px] mx-auto mb-12">
          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-shadow">
            <h3 className="text-[20px] font-semibold text-text mb-3">For Origination Platforms</h3>
            <p className="text-[16px] text-text-2 leading-relaxed">
              Provide out-of-the-box compliance for your lenders. Embed Alstro's runtime and let your customers deploy advanced AI decisioning with instant regulatory documentation.
            </p>
          </div>

          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-shadow">
            <h3 className="text-[20px] font-semibold text-text mb-3">For AI Model Providers</h3>
            <p className="text-[16px] text-text-2 leading-relaxed">
              Let lenders deploy your models without regulatory risk. We generate the adverse action notices and policy proofs so your models pass compliance review faster.
            </p>
          </div>
        </div>

        <div className="reveal flex justify-center">
          <a href="#cta" className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-hover transition-colors">
            Partner with Alstro <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
