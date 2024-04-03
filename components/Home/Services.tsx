import web from "@/public/images/web.png";
import app from "@/public/images/app.png";
import machine from "@/public/images/machine.png";
import wordpress from "@/public/images/wordpress.png";
import webimg from "@/public/images/webimg.png";
import appimg from "@/public/images/appimg.png";
import machineimg from "@/public/images/machineimg.png";
import wordpressimg from "@/public/images/wordpressimg.png";
import Image from "next/image";
import LineConnectSvg from "../svg/LineConnectSvg";
import Container from "../Container";
import { MotionDiv } from "../MotionDiv";

const Services = () => {
  return (
    <Container>
      <section className="relative mt-0 mb-20 sm:my-20 w-full flex flex-col gap-10">
        <div className="w-full flex md:flex-row flex-col justify-center gap-7 items-center">
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
            className="relative w-full md:w-[300px] h-[200px] flex items-center justify-center flex-col gap-3 rounded-lg"
          >
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
          </MotionDiv>

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
              delay: 0.5,
            }}
            className="hidden lg:flex flex-col items-center"
          >
            <p className="font-bold text-primary text-[1.4rem] underline underline-offset-4">
              Featured Services
            </p>
            <h1 className="font-black opacity-80 text-[2rem] text-center">
              Services which we provide
            </h1>
          </MotionDiv>
          <LineConnectSvg />
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
            className="relative w-full md:w-[300px] h-[200px] flex items-center justify-center flex-col gap-3 rounded-lg"
          >
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
          </MotionDiv>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center gap-10">
          <MotionDiv
            initial={{
              y: "100px",
              opacity: 0,
            }}
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
            className="relative w-full md:w-[300px] h-[200px] flex items-center justify-center flex-col gap-3 rounded-lg"
          >
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
          </MotionDiv>

          <MotionDiv
            initial={{
              y: "100px",
              opacity: 0,
            }}
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
            className="relative w-full md:w-[300px] h-[200px] flex items-center justify-center flex-col gap-3 rounded-lg"
          >
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
            <h3 className="text-[1.3rem] font-black text-background text-center">
              WordPress Development
            </h3>
          </MotionDiv>
        </div>
      </section>
    </Container>
  );
};

export default Services;
