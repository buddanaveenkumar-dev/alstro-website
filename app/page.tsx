import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ShadowPilot from "@/components/ShadowPilot";
import TrustProtection from "@/components/TrustProtection";
import CTAForm from "@/components/CTAForm";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <HowItWorks />
        <ShadowPilot />
        <TrustProtection />
        <CTAForm />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
