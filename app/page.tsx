import Hero from "@/components/Hero";
import Inquiry from "@/components/Home/Inquiry";
import SectionOne from "@/components/Home/SectionOne";
import SectionTwo from "@/components/Home/SectionTwo";
import Steps from "@/components/Home/Steps";
import Trusted from "@/components/Home/Trusted";
import Works from "@/components/Home/Works";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <SectionOne />
      <SectionTwo />
      <Works />
      <Steps />
      <Trusted />
      <Inquiry />
      <Footer />
    </main>
  );
}
