import Container from "@/components/Container";
import web from "@/public/images/webimg.png";
import Image from "next/image";
import logo from "@/public/images/realdaam.png";
import { Speech, SquareArrowOutUpRight } from "lucide-react";
import Inquiry from "@/components/Home/Inquiry";

const page = () => {
  return (
    <section className="flex flex-col gap-20 mt-20">
      <div className="flex flex-col items-center gap-0 sm:gap-3">
        <p className="font-bold text-primary text-[1.2rem] sm:text-[1.4rem]">
          COLLECTIONS
        </p>
        <h1 className="text-[2rem] text-center md:text-[3rem] font-black">
          <span className="z-10 relative inline-block">
            Our Portfolio
            <span className="hidden lg:block lg:absolute bottom-3 -z-10 left-0 w-full h-[8px] md:h-[15px] bg-primary"></span>
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-y-5 mmd:grid-cols-2 gap-x-10 max-w-[1920px] mx-auto px-4 md:px-10 xl:px-28 2xl:px-52">
        <div className="w-full col-span-1 flex flex-col gap-4">
          <div className="relative h-[300px]">
            <Image
              src={web}
              fill
              alt=""
              className="-z-10 object-cover brightness-75 rounded-lg"
            />
            <a
              href="https://realdaam.com"
              className="z-20 absolute right-3 top-3"
            >
              <span>
                <SquareArrowOutUpRight className="size-6" strokeWidth={3} />
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-1 p-4 rounded-xl bg-zinc-100 border border-primary">
            <h3 className="font-black opacity-80">Summary</h3>
            <p className="text-[0.9rem] opacity-80">
              Realdaam is an e-commerce website that allows you to buy and sell
              tangible goods, digital products or services online. It is a shop
              for anything right from a living room, with just a few clicks
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center p-4 rounded-xl border border-primary bg-zinc-100">
          <Image src={logo} width={200} height={200} alt="" />
          <div className="mt-10 flex flex-col gap-5">
            <p className="text-[0.9rem] opacity-80">
              I want to acknowledge everyone&apos;s extra effort. You did an
              excellent job on that report. I want to thank you publicly for
              your hard work and dedication. Your attitude and work level suits
              us here, so keep up the good work! Thank you for sharing your
              knowledge and experience with me.Thank you for giving me the
              chance to fulfill my potential here. I appreciate you supporting
              me at the meeting.
            </p>
            <p className="flex sm:flex-row flex-col gap-y-2 items-center gap-3 underline underline-offset-4">
              <Speech className="size-7" strokeWidth={3} />
              <span className="font-bold opacity-80">Rahul Bhagat:</span>{" "}
              <span className="opacity-80">Owner at Realdaam</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 bg-secondary py-10">
        <Inquiry />
      </div>
    </section>
  );
};

export default page;
