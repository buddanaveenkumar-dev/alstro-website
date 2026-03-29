import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyNow from "@/components/WhyNow";
import WhyRevenue from "@/components/WhyRevenue";
import ExecutionGap from "@/components/ExecutionGap";
import DecisionFlow from "@/components/DecisionFlow";
import BeforeAfter from "@/components/BeforeAfter";
import RuntimeArchitecture from "@/components/RuntimeArchitecture";
import RegulatoryArchitecture from "@/components/RegulatoryArchitecture";
import Applications from "@/components/Applications";
import Founder from "@/components/Founder";
import AlphaProgram from "@/components/AlphaProgram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <WhyNow />
        <WhyRevenue />
        <ExecutionGap />
        <DecisionFlow />
        <BeforeAfter />
        <RuntimeArchitecture />
        <RegulatoryArchitecture />
        <Applications />
        <Founder />
        <AlphaProgram />
      </main>
      <Footer />
    </>
  );
}
