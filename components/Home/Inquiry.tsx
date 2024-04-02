import { Button } from "../ui/button";
import { ChevronsRight } from "lucide-react";

const Inquiry = () => {
  return (
    <section className="h-[200px] w-full flex flex-col gap-1 sm:gap-3 justify-center items-center mb-20">
      <h1 className="font-black opacity-80 text-center text-[1.5rem] sm:text-[2.5rem]">
        Looking for business opportunity?
      </h1>
      <p className="uppercase text-center font-bold text-primary text-[1rem] sm:text-[1.3rem]">
        Request for a call today
      </p>

      <Button
        className="text-[0.9rem] mt-3 sm:text-[1.1rem] shadow-lg text-background transition-all duration-200 ease-out flex items-center gap-2 font-bold tracking-wide py-6 px-7 rounded-full"
        size={"lg"}
      >
        QUICK ENQUIRY <ChevronsRight className="size-8 sm:size-10" />
      </Button>
    </section>
  );
};

export default Inquiry;
