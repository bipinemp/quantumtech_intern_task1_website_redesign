import { ChevronsRight } from "lucide-react";
import { Button } from "./ui/button";
import Container from "./Container";

const Hero = () => {
  return (
    <Container>
      <section className="relative min-h-[85vh] w-full flex flex-col items-center justify-center gap-10">
        <div className="absolute size-80 rounded-full bg-primary/40 blur-3xl z-0 top-20 left-32"></div>
        <div className="flex flex-col gap-5 items-center">
          {/* <h1 className="text-[3.5rem] font-black">
          Striving for&nbsp;
          <span className="py-5 px-8 bg-primary/80 rounded-3xl">
          <span className="opacity-80">Progress,</span>
          </span>
        </h1> */}
          <h1 className="text-[4rem] font-black">
            Striving For&nbsp;
            <span className="z-10 relative inline-block">
              Progress,
              <span className="absolute bottom-3 -z-10 left-0 w-full h-[25px] bg-primary"></span>
            </span>
          </h1>
          <h1 className="text-[4rem] font-black">
            Leading Towards&nbsp;
            <span className="z-10 relative inline-block">
              Perfection.
              <span className="absolute bottom-3 -z-10 left-0 w-full h-[25px] bg-primary"></span>
            </span>
          </h1>
        </div>

        <p className="text-lg opacity-70 text-center tracking-[0.02rem]">
          You understand your customers better than anyone.
          <br /> We know that, and we can help you turn that knowledge into
          results.
        </p>

        <Button
          className="text-[1.1rem] shadow-lg text-background transition-all duration-200 ease-out flex items-center gap-2 font-bold tracking-wide py-9 px-8 rounded-full"
          size={"lg"}
        >
          QUICK ENQUIRY <ChevronsRight className="size-10" />
        </Button>
      </section>
    </Container>
  );
};

export default Hero;
