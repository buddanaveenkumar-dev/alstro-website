import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/Stats";
import Problem from "@/components/Problem";
import Architecture from "@/components/Architecture";
import ShadowPilot from "@/components/ShadowPilot";
import ROI from "@/components/ROI";
import Platforms from "@/components/Platforms";
import MarketProof from "@/components/MarketProof";
import RegulatoryBar from "@/components/RegulatoryBar";
import About from "@/components/About";
import CTA from "@/components/CTA";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <StatsBar />
        <Problem />
        <Architecture />
        <ShadowPilot />
        <ROI />
        <Platforms />
        <MarketProof />
        <RegulatoryBar />
        <About />
        <CTA />
      </main>
      <StickyCTA />
      <Footer />
      <RevealObserver />
    </>
  );
}
