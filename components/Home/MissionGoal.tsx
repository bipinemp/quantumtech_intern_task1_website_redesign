import Image from "next/image";
import DotSvg from "../svg/DotSvg";
import { Button } from "../ui/button";
import { ChevronsRight } from "lucide-react";
import Container from "../Container";
import { MotionDiv } from "../MotionDiv";

const MissionGoal = () => {
  return (
    <Container>
      <section className="relative my-20 w-full grid grid-cols-3 gap-x-10">
        <MotionDiv
          initial={{
            x: "-100px",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
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
          className="flex flex-col gap-2 md:gap-7 items-center lg:items-start justify-center col-span-3 lg:col-span-2"
        >
          <div className="flex flex-col gap-2 md:gap-7 items-center lg:items-start justify-center col-span-3 lg:col-span-2">
            <div className="flex flex-col items-center lg:items-start">
              <p className="font-black opacity-80 text-primary">
                WELCOME TO QUANTUMC
              </p>
              <h1 className="text-[1.9rem] md:text-[2.5rem] font-black text-center lg:text-start">
                Learn more about our organization
              </h1>
            </div>
            <p className="text-[0.9rem] opacity-70 text-center tracking-[0.02rem]">
              Our approach is simple. We learn about the unique customer value
              your business creates, before building a custom website, to ensure
              everything to help you and your brand achieve growth.
            </p>

            <div className="flex flex-col gap-5 mt-10 md:mt-0">
              <div className="relative flex items-center rounded-lg shadow bg-secondary">
                <div className="relative ml-4 sm:ml-0 py-4 px-6 size-[100px] md:size-[80px]">
                  <Image
                    src="https://quantumctech.com/images/flag.svg"
                    fill
                    alt=""
                    className="p-3"
                  />
                </div>
                <span className="ml-4 md:ml-0 w-[3px] h-full bg-[#1FB2D1]"></span>
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
                <span className="ml-4 sm:ml-0 w-[3px] h-full bg-[#1FB2D1]"></span>
                <div className="flex flex-col gap-1 py-4 px-6">
                  <h3 className="font-black">Our Goal</h3>
                  <p className="opacity-80 text-[0.8rem]">
                    To reach to every potential customer and provide the best
                    service.
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="mt-7 sm:mt-0 text-[0.9rem] md:text-[1.1rem] shadow-lg text-background transition-all duration-200 ease-out flex items-center gap-2 font-bold tracking-wide p-6 md:p-8 rounded-full"
              size={"lg"}
            >
              QUICK ENQUIRY <ChevronsRight className="size-10" />
            </Button>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{
            x: "100px",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
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
          className="relative lg:col-span-1"
        >
          <div className="lg:absolute lg:block lg:right-0 lg:top-6 bottom-[8rem] w-full hidden">
            <DotSvg />
          </div>
        </MotionDiv>
      </section>
    </Container>
  );
};

export default MissionGoal;
