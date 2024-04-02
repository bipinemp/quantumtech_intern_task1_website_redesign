import Container from "@/components/Container";
import Inquiry from "@/components/Home/Inquiry";
import ArrowSvg from "@/components/svg/ArrowSvg";
import { ServicesList } from "@/lib/lists";
import Image from "next/image";

const page = () => {
  return (
    <section className="flex flex-col gap-20 mt-20">
      <div className="flex flex-col items-center gap-3">
        <p className="font-bold text-primary text-[1.4rem]">WHO WE ARE</p>
        <h1 className="text-[2rem] text-center md:text-[3rem] font-black">
          <span className="z-10 relative inline-block">
            Quantum Compilers Technologies
            <span className="absolute bottom-3 -z-10 left-0 w-full h-[8px] md:h-[15px] bg-primary"></span>
          </span>
        </h1>
      </div>

      <div className="flex flex-col gap-10 mb-20 max-w-[1920px] mx-auto px-4 md:px-10 xl:px-28 2xl:px-52">
        {ServicesList.map((service, i) => (
          <div key={i} className="grid grid-cols-2 items-center gap-5">
            {i % 2 === 0 ? (
              <>
                <div className="relative w-full h-[350px]">
                  <Image
                    src={service.img}
                    fill
                    alt=""
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="relative flex flex-col">
                  <div className="rotate-180 absolute left-12">
                    <ArrowSvg />
                  </div>
                  <h1 className="text-[2.2rem] opacity-80 font-black">
                    <span className="z-10 relative inline-block">
                      {service.name}
                      <span className="absolute bottom-3 -z-10 left-0 w-full h-[8px] md:h-[10px] bg-primary"></span>
                    </span>
                  </h1>
                  <p className="opacity-80 text-[0.9rem]">{service.desc}</p>
                </div>
              </>
            ) : (
              <>
                <div className="relative flex flex-col">
                  <div className="rotate-[50] z-20 -top-28 absolute right-12">
                    <ArrowSvg />
                  </div>
                  <h1 className="text-[2.2rem] text-end opacity-80 font-black">
                    <span className="z-10 relative inline-block">
                      {service.name}
                      <span className="absolute bottom-3 -z-10 left-0 w-full h-[8px] md:h-[10px] bg-primary"></span>
                    </span>
                  </h1>
                  <p className="opacity-80 text-[0.9rem] text-end">
                    {service.desc}
                  </p>
                </div>
                <div className="relative w-full h-[350px]">
                  <Image
                    src={service.img}
                    fill
                    alt=""
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="mt-20 bg-secondary py-10">
        <Inquiry />
      </div>
    </section>
  );
};

export default page;
