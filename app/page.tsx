import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyNow from "@/components/WhyNow";
import ExecutionGap from "@/components/ExecutionGap";
import DecisionFlow from "@/components/DecisionFlow";
import BeforeAfter from "@/components/BeforeAfter";
import RuntimeArchitecture from "@/components/RuntimeArchitecture";
import RegulatoryArchitecture from "@/components/RegulatoryArchitecture";
import Applications from "@/components/Applications";
import PlatformAlignment from "@/components/PlatformAlignment";
import ICP from "@/components/ICP";
import Founder from "@/components/Founder";
import AlphaProgram from "@/components/AlphaProgram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyNow />
        <ExecutionGap />
        <DecisionFlow />
        <BeforeAfter />
        <RuntimeArchitecture />
        <RegulatoryArchitecture />
        <Applications />
        <PlatformAlignment />
        <ICP />
        <Founder />
        <AlphaProgram />
      </main>
      <Footer />
    </>
  );
}
