import React from "react";
import { Button } from "../ui/button";
import { ChevronsRight } from "lucide-react";

const Inquiry = () => {
  return (
    <section className="h-[200px] w-full flex flex-col gap-3 justify-center items-center mb-20">
      <h1 className="font-black opacity-80">
        Looking for business opportunity?
      </h1>
      <p className="uppercase font-bold text-primary text-[1.3rem]">
        Request for a call today
      </p>

      <Button
        className="text-[1.1rem] shadow-lg text-background transition-all duration-200 ease-out flex items-center gap-2 font-bold tracking-wide py-6 px-7 rounded-full"
        size={"lg"}
      >
        QUICK ENQUIRY <ChevronsRight className="size-10" />
      </Button>
    </section>
  );
};

export default Inquiry;
