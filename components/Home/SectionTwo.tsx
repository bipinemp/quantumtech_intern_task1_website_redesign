import React from "react";
import web from "@/public/images/web.png";
import app from "@/public/images/app.png";
import machine from "@/public/images/machine.png";
import wordpress from "@/public/images/wordpress.png";

import webimg from "@/public/images/webimg.png";
import appimg from "@/public/images/appimg.png";
import machineimg from "@/public/images/machineimg.png";
import wordpressimg from "@/public/images/wordpressimg.png";
import Image from "next/image";
import LineConnectSvg from "../LineConnectSvg";
import Container from "../Container";

const SectionTwo = () => {
  return (
    <Container>
      <section className="relative my-20 w-full flex flex-col gap-10">
        <div className="flex justify-center gap-7 items-center">
          <div className="relative w-[300px] h-[200px] flex items-center justify-center flex-col gap-3 rounded-lg">
            <Image
              src={webimg}
              fill
              alt=""
              className="-z-10 brightness-[.4] rounded-lg"
            />
            <Image src={web} width={50} height={50} alt="web development" />
            <h3 className="text-[1.3rem] font-black text-background">
              Web Development
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-bold text-primary text-[1.4rem] underline underline-offset-4">
              Featured Services
            </p>
            <h1 className="font-black opacity-80 text-[2rem]">
              Services which we provide
            </h1>
          </div>
          <LineConnectSvg />
          <div className="relative w-[300px] h-[200px] flex items-center justify-center flex-col gap-3 rounded-lg">
            <Image
              src={appimg}
              fill
              alt=""
              className="-z-10 brightness-[.4] rounded-lg"
            />
            <Image src={app} width={50} height={50} alt="web development" />
            <h3 className="text-[1.3rem] font-black text-background">
              App Development
            </h3>
          </div>
        </div>

        <div className="flex items-ceter justify-center gap-10">
          <div className="relative w-[300px] h-[200px] flex items-center justify-center flex-col gap-3 rounded-lg">
            <Image
              src={machineimg}
              fill
              alt=""
              className="-z-10 brightness-[.4] rounded-lg"
            />
            <Image src={machine} width={50} height={50} alt="web development" />
            <h3 className="text-[1.3rem] font-black text-background">
              Machine Learning
            </h3>
          </div>

          <div className="relative w-[300px] h-[200px] flex items-center justify-center flex-col gap-3 rounded-lg">
            <Image
              src={wordpressimg}
              fill
              alt=""
              className="-z-10 brightness-[.4] rounded-lg"
            />
            <Image
              src={wordpress}
              width={50}
              height={50}
              alt="web development"
            />
            <h3 className="text-[1.3rem] font-black text-background">
              WordPress Development
            </h3>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default SectionTwo;
