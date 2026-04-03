import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatAlstroIs from "@/components/WhatAlstroIs";
import HowItWorks from "@/components/HowItWorks";
import Outputs from "@/components/Outputs";
import ShadowPilot from "@/components/ShadowPilot";
import DataProtection from "@/components/DataProtection";
import Responsibility from "@/components/Responsibility";
import DocumentRequest from "@/components/DocumentRequest";
import CTAForm from "@/components/CTAForm";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <WhatAlstroIs />
        <HowItWorks />
        <Outputs />
        <ShadowPilot />
        <DataProtection />
        <Responsibility />
        <DocumentRequest />
        <CTAForm />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
