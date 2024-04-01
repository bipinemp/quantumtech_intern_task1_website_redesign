// import img from "@/public/images/section1.png";
import Image from "next/image";
import DotSvg from "../DotSvg";
import { Button } from "../ui/button";
import { ChevronsRight } from "lucide-react";
import Container from "../Container";

const SectionOne = () => {
  return (
    <Container>
      <section className="relative my-20 w-full grid grid-cols-3 gap-x-5">
        <div className="flex flex-col gap-7 justify-center col-span-2">
          <div className="flex flex-col">
            <p className="font-black opacity-80 text-primary">
              WELCOME TO QUANTUMC
            </p>
            <h1 className="text-[2.5rem] font-black">
              Learn more about our organization
            </h1>
          </div>
          <p className="opacity-75">
            Our approach is simple. We learn about the unique customer value
            your business creates, before building a custom website, to ensure
            everything to help you and your brand achieve growth.
          </p>
          <div className="flex flex-col gap-5">
            <div className="relative flex items-center rounded-lg shadow bg-secondary">
              <div className="py-4 px-6">
                <Image
                  src="https://quantumctech.com/images/flag.svg"
                  width={80}
                  height={80}
                  alt=""
                />
              </div>
              <span className="w-[3px] h-full bg-[#1FB2D1]"></span>
              <div className="flex flex-col gap-1 py-4 px-6">
                <h3 className="font-black">Our Mission</h3>
                <p className="opacity-80 text-[0.9rem]">
                  To establish the company name and the expansion of company.
                </p>
              </div>
            </div>
            <div className="flex items-center rounded-lg shadow bg-secondary">
              <div className="py-4 px-6">
                <Image
                  src="https://quantumctech.com/images/goal.svg"
                  width={80}
                  height={80}
                  alt=""
                />
              </div>
              <span className="w-[3px] h-full bg-[#1FB2D1]"></span>
              <div className="flex flex-col gap-1 py-4 px-6">
                <h3 className="font-black">Our Goal</h3>
                <p className="opacity-80 text-[0.9rem]">
                  To reach to every potential customer and provide the best
                  service.
                </p>
              </div>
            </div>
          </div>
          <Button
            className="shadow-lg w-fit text-background transition-all duration-200 ease-out flex items-center gap-2 font-bold tracking-wide py-7 px-8 rounded-full"
            size={"lg"}
          >
            LEARN MORE <ChevronsRight className="size-10" />
          </Button>
        </div>

        <div className="absolute right-0 bottom-[8rem] col-span-1">
          <DotSvg />
        </div>
      </section>
    </Container>
  );
};

export default SectionOne;
