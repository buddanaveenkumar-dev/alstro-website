import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Agents from "@/components/Agents";
import BeforeAfter from "@/components/BeforeAfter";
import ComparisonTable from "@/components/ComparisonTable";
import ROI from "@/components/ROI";
import Investors from "@/components/Investors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoBar />
        <Problem />
        <HowItWorks />
        <Agents />
        <BeforeAfter />
        <ComparisonTable />
        <ROI />
        <Investors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
