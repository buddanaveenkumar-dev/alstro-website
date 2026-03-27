import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Agents from "@/components/Agents";
import BeforeAfter from "@/components/BeforeAfter";
import ForLenders from "@/components/ForLenders";
import EarlyAccess from "@/components/EarlyAccess";
import Investors from "@/components/Investors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Agents />
        <BeforeAfter />
        <ForLenders />
        <EarlyAccess />
        <Investors />
      </main>
      <Footer />
    </>
  );
}
