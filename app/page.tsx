import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyNow from "@/components/WhyNow";
import ExecutionGap from "@/components/ExecutionGap";
import DecisionFlow from "@/components/DecisionFlow";
import RuntimeArchitecture from "@/components/RuntimeArchitecture";
import Applications from "@/components/Applications";
import PlatformAlignment from "@/components/PlatformAlignment";
import AlphaProgram from "@/components/AlphaProgram";
import Deployment from "@/components/Deployment";
import ICP from "@/components/ICP";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";
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
        <RuntimeArchitecture />
        <Applications />
        <PlatformAlignment />
        <AlphaProgram />
        <Deployment />
        <ICP />
        <Founder />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
