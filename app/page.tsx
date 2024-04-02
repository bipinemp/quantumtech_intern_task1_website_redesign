import Hero from "@/components/Home/Hero";
import Inquiry from "@/components/Home/Inquiry";
import Steps from "@/components/Home/Steps";
import Trusted from "@/components/Home/Trusted";
import Works from "@/components/Home/Works";
import Image from "next/image";
import wave from "@/public/images/waves.svg";
import MissionGoal from "@/components/Home/MissionGoal";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Hero />

      <MissionGoal />
      <div className="relative w-full h-[20px] mb-20">
        <Image src={wave} fill alt="" className="bg-primary" />
      </div>

      <Services />
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
    </main>
  );
}
