import Dividersvg from "@/components/Dividersvg";
import Hero from "@/components/Hero";
import Inquiry from "@/components/Home/Inquiry";
import SectionOne from "@/components/Home/SectionOne";
import SectionTwo from "@/components/Home/SectionTwo";
import Steps from "@/components/Home/Steps";
import Trusted from "@/components/Home/Trusted";
import Works from "@/components/Home/Works";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import wave from "@/public/images/waves.svg";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Hero />

      <SectionOne />
      <div className="relative w-full h-[20px] mb-20">
        <Image src={wave} fill alt="" className="bg-primary" />
      </div>
      <SectionTwo />
      <div className="relative w-full h-[20px] mb-20">
        <Image src={wave} fill alt="" className="bg-primary" />
      </div>
      <Works />
      <div className="relative w-full h-[20px] mb-20">
        <Image src={wave} fill alt="" className="bg-primary" />
      </div>
      <Steps />
      <Trusted />
      <Inquiry />
      <Footer />
    </main>
  );
}
