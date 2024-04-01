import Link from "next/link";
import React from "react";
import work1 from "@/public/images/work1.png";
import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";
import Container from "../Container";
import Dividersvg from "../Dividersvg";

const WorksList = [
  {
    type: "Ecommerce",
    img: work1,
    name: "Realdaam",
    desc: "For all people in need",
    href: "https://realdaam.com",
  },
  {
    type: "Ecommerce",
    img: work1,
    name: "Realdaam",
    desc: "For all people in need",
    href: "https://realdaam.com",
  },
  {
    type: "Ecommerce",
    img: work1,
    name: "Realdaam",
    desc: "For all people in need",
    href: "https://realdaam.com",
  },
];

const Works = () => {
  return (
    <Container>
      <section className="flex flex-col items-center gap-10 relative min-h-screen w-full">
        <h1 className="z-10 relative w-fit inline-block text-[4rem] text-center font-black">
          Our Works
          <span className="absolute bottom-4 -z-10 left-0 w-full h-[15px] bg-primary"></span>
        </h1>
        <div className="flex justify-between gap-5">
          {WorksList.map((work, i) => (
            <div
              key={i}
              className="transition bg-zinc-100 border border-input shadow cursor-pointer relative w-[350px] h-[370px] px-3 pt-3 pb-4 rounded-lg flex flex-col gap-4"
            >
              <h1 className="absolute z-20 left-6 top-5 text-[2.2rem] font-black text-background">
                0{i + 1}
              </h1>
              <div className="relative w-full h-[200px] p-5">
                <Image
                  src={work.img}
                  fill
                  alt=""
                  className="object-cover rounded-lg brightness-[.60]"
                />
              </div>

              <div className="flex flex-col items-start gap-1">
                <h1 className="text-[1.2rem] font-black text-primary">
                  {work.type}
                </h1>
                <h1 className="font-black opacity-80 text-[2rem]">
                  {work.name}
                </h1>
                <p className="opacity-80">{work.desc}</p>
                <Link
                  href={work.href}
                  target="_blank"
                  className="absolute -top-1 shadow right-4 p-3 rounded-full bg-primary flex items-center gap-2 mt-5"
                >
                  <SquareArrowOutUpRight
                    className="size-6 text-background"
                    strokeWidth={3}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Works;
