import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import DecisionFlow from "@/components/DecisionFlow";
import Applications from "@/components/Applications";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <BeforeAfter />
        <DecisionFlow />
        <Applications />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
