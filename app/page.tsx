import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ShadowValidation from "@/components/ShadowValidation";
import ROI from "@/components/ROI";
import Platforms from "@/components/Platforms";
import TrustBar from "@/components/TrustBar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <Problem />
        <Solution />
        <ShadowValidation />
        <ROI />
        <Platforms />
        <TrustBar />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
