import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { WorksList } from "@/lib/lists";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export function WorksSlide() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="z-30 w-[250px] sm:w-[500px] md:w-[600px] mx-auto xl:w-[1000px]"
    >
      <CarouselContent className="">
        {WorksList.map((work, i) => (
          <CarouselItem key={i} className="basis-3/3 sm:basis-2/3 xl:basis-1/3">
            <div
              key={i}
              className="transition bg-zinc-100 border border-input shadow cursor-pointer relative w-[250px] sm:w-[300px] md:[320px] xl:w-[300px] h-[370px] px-3 pt-3 pb-4 rounded-lg flex flex-col gap-4"
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-1 vsm:-left-12" />
      <CarouselNext className="-right-1 vsm:-right-12" />
    </Carousel>
  );
}
