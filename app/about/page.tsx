import Image from "next/image";
import banner from "@/public/images/banner.jpg";
import Inquiry from "@/components/Home/Inquiry";
import TeamLists from "@/components/TeamLists";
import { MotionDiv } from "@/components/MotionDiv";

const page = () => {
  return (
    <section className="flex flex-col gap-20 mt-20">
      <div className="flex flex-col items-center gap-3">
        <p className="font-bold text-primary text-[1.4rem]">WHO WE ARE</p>
        <h1 className="text-[2rem] text-center md:text-[3rem] font-black">
          <span className="z-10 relative inline-block">
            Quantum Compilers Technologies
            <span className="hidden lg:block lg:absolute bottom-3 -z-10 left-0 w-full h-[8px] md:h-[15px] bg-primary"></span>
          </span>
        </h1>
      </div>

      <div className="relative w-full aspect-video h-[300px] 2xl:h-[700px] overflow-hidden bg-primary shadow-lg">
        <Image
          src={banner}
          fill
          alt=""
          className="shadow-lg object-cover object-top rotate-3 "
        />
      </div>

      <MotionDiv
        initial={{ y: 20, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 90,
          duration: 1.7,
          bounce: 0.3,
          delay: 0.1,
        }}
        className="flex items-center justify-center"
      >
        <div className="flex flex-col gap-2 items-center">
          <p className="font-bold text-primary text-[1.2rem] md:text-[1.4rem]">
            COMPANY OVERVIEW
          </p>
          <h1 className="text-[1.5rem] text-center md:text-[3rem] font-black">
            <span className="z-10 relative inline-block">
              Screw It, Let&apos;s Do it !!
              <span className="absolute bottom-2 md:bottom-3 -z-10 left-0 w-full h-[5px] md:h-[15px] bg-primary"></span>
            </span>
          </h1>
          <div className="flex flex-col gap-5 mt-10 md:mt-4 px-5">
            <div className="relative flex items-center rounded-lg shadow bg-secondary">
              <div className="relative ml-4 sm:ml-0 py-4 px-6 size-[100px] md:size-[80px]">
                <Image
                  src="https://quantumctech.com/images/flag.svg"
                  fill
                  alt=""
                  className="p-3"
                />
              </div>
              <span className="ml-4 md:ml-0 w-[3px] h-[110px] md:h-[100px] bg-[#1FB2D1]"></span>
              <div className="flex flex-col gap-1 py-4 px-6">
                <h3 className="font-black">Our Mission</h3>
                <p className="opacity-80 text-[0.8rem]">
                  To establish the company name and the expansion of company.
                </p>
              </div>
            </div>
            <div className="flex items-center rounded-lg shadow bg-secondary">
              <div className="relative ml-4 sm:ml-0 py-4 px-6 size-[100px] md:size-[80px]">
                <Image
                  src="https://quantumctech.com/images/goal.svg"
                  fill
                  alt=""
                  className="p-3"
                />
              </div>
              <span className="ml-4 md:ml-0 w-[3px] h-[110px] md:h-[100px] bg-[#1FB2D1]"></span>
              <div className="flex flex-col gap-1 py-4 px-6">
                <h3 className="font-black">Our Goal</h3>
                <p className="opacity-80 text-[0.8rem]">
                  To reach to every potential customer and provide the best
                  service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MotionDiv>

      <div className="flex items-center justify-center flex-col gap-7">
        <div className="flex items-center flex-col gap-3">
          <p className="font-bold text-primary text-[1.4rem]">WE ARE</p>
          <h1 className="text-[2rem] text-center md:text-[3rem] font-black">
            <span className="z-10 relative inline-block">
              Young, Vibrant and Passionate
              <span className="hidden lg:block lg:absolute bottom-3 -z-10 left-0 w-full h-[8px] md:h-[15px] bg-primary"></span>
            </span>
          </h1>
          <p className="text-[1rem] opacity-80 px-5 sm:px-32 text-center">
            We blend our skills for web development into a powerful, agile team.
            Our team of designers and project managers partner with you to build
            forward-thinking user experiences
          </p>
        </div>

        <TeamLists />
      </div>
      <div className="mt-20 bg-secondary py-10">
        <Inquiry />
      </div>
    </section>
  );
};

export default page;
