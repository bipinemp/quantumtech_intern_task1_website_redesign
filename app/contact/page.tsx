import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import { NextStepList } from "@/lib/lists";
import realdaam from "@/public/images/realdaam.png";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Container>
      <section className="flex flex-col gap-20 my-20">
        <div className="flex flex-col items-center gap-3">
          <p className="font-bold text-primary text-[1.4rem]">CONTACT US</p>
          <h1 className="text-[2rem] text-center md:text-[3rem] font-black">
            <span className="z-10 relative inline-block">
              Send Us Your Message
              <span className="absolute bottom-3 -z-10 left-0 w-full h-[8px] md:h-[15px] bg-primary"></span>
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-x-10">
          <div className="p-4 bg-zinc-50 flex flex-col gap-7 justify-center items-center rounded-lg border border-primary">
            <div className="flex flex-col gap-10 col-span-1 xl:col-span-2">
              <div className="flex flex-col gap-4">
                <h2 className="text-primary font-black underline underline-offset-4">
                  CONTACT INFORMATION
                </h2>
                <div className="flex items-center gap-3">
                  <Mail className="size-10 text-primary" />
                  <div className="flex flex-col">
                    <p className="text-[#1FB2D1] font-semibold">Message Us</p>
                    <Link
                      href={"mailto:sales@quantumc.tech"}
                      className="text-[1rem] font-bold"
                    >
                      sales@quantumc.tech
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="size-10 text-primary" />
                  <div className="flex flex-col">
                    <p className="text-[#1FB2D1] font-semibold">Visit Us</p>
                    <h3 className="text-[1rem] font-bold">Kathmandu, Nepal</h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="font-black opacity-80">Trusted By</h2>
                <Image src={realdaam} width={140} height={140} alt="" />
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="mt-10 flex flex-col gap-10">
          <div>
            <h1 className="text-[2rem] text-center md:text-[3rem] font-black">
              <span className="z-10 relative inline-block">
                Next Step?
                <span className="absolute bottom-3 -z-10 left-0 w-full h-[8px] md:h-[15px] bg-primary"></span>
              </span>
            </h1>
          </div>
          <div className="flex llg:flex-row flex-col items-center">
            {NextStepList.map((step, i) => (
              <>
                {i > 0 && NextStepList.length !== i && (
                  <div
                    key={i}
                    className="llg:w-[50px] h-[50px] llg:h-0 border-l-[3px] border-l-primary llg:border-b-[3px] border-b-primary border-dashed"
                  ></div>
                )}

                <div
                  key={i}
                  className="relative shadow-lg py-6 px-8 flex w-fit h-[220px] flex-col items-center justify-center gap-3 p-3 bg-secondary text-foreground"
                >
                  <h2 className="text-[1.2rem] llg:text-[1.5rem] py-2 px-3 rounded-full shadow bg-blue-500 text-background font-black">
                    0{i + 1}
                  </h2>
                  <h3 className="text-[0.7rem] opacity-80 llg:text-[1rem] text-center font-bold tracking-wider">
                    {step.name}
                  </h3>
                  <p className="text-[0.9rem] opacity-80 text-center">
                    {step.desc}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default page;
