import { ChevronsRight } from "lucide-react";
import { Button } from "../ui/button";
import Container from "../Container";
import ArrowSvg from "../svg/ArrowSvg";

const Hero = () => {
  return (
    <Container>
      <section className="relative mt-10 mb-20 md:my-20 w-full flex flex-col items-center justify-center gap-10">
        <ArrowSvg val="hello" />
        <ArrowSvg val="" />
        <div className="sm:absolute sm:block hidden size-80 rounded-full bg-primary/40 blur-3xl z-0 -top-1 left-20"></div>
        <div className="flex flex-col md:gap-5 items-center">
          <h1 className="text-[2rem] text-center md:text-[4rem] font-black">
            Striving For&nbsp;
            <span className="z-10 relative inline-block">
              Progress,
              <span className="absolute bottom-3 -z-10 left-0 w-full h-[8px] md:h-[25px] bg-primary"></span>
            </span>
          </h1>
          <h1 className="text-[2rem] text-center md:text-[4rem] font-black">
            Leading Towards&nbsp;
            <span className="z-10 relative inline-block">
              Perfection.
              <span className="absolute bottom-3 -z-10 left-0 w-full h-[8px] md:h-[25px] bg-primary"></span>
            </span>
          </h1>
        </div>
        <p className="text-[0.9rem] md:text-lg opacity-70 text-center tracking-[0.02rem]">
          You understand your customers better than anyone.
          <br /> We know that, and we can help you turn that knowledge into
          results.
        </p>
        <Button
          className="text-[0.9rem] md:text-[1.1rem] shadow-lg text-background transition-all duration-200 ease-out flex items-center gap-2 font-bold tracking-wide p-6 md:p-8 rounded-full"
          size={"lg"}
        >
          QUICK ENQUIRY <ChevronsRight className="size-8 md:size-10" />
        </Button>
      </section>
    </Container>
  );
};

export default Hero;
