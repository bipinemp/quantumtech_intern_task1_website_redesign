"use client";

import { MotionDiv } from "@/components/MotionDiv";
import { TeamList } from "@/lib/lists";
import Image from "next/image";

const fadeInAnimateVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const TeamLists = () => {
  return (
    <div className="grid grid-cols-1 ssm:grid-cols-2 mmd:grid-cols-3 xxl:grid-cols-4 gap-x-10 gap-y-40 mt-5">
      {TeamList.map((team, i) => (
        <MotionDiv
          variants={fadeInAnimateVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={i}
          key={i}
          className="relative w-[280px] vsm:w-[300px] ssm:w-[250px]"
        >
          <div className="relative w-[full] h-[200px]">
            <Image
              src={team.img}
              fill
              alt=""
              className="object-cover object-top shadow rounded-3xl"
            />
          </div>
          <div className="absolute py-5 px-3 w-full -bottom-20 h-[100px] flex items-center flex-col bg-zinc-100 shadow-lg rounded-2xl border border-input">
            <h3 className="font-semibold opacity-80">{team.name}</h3>
            <p className="text-center opacity-80 text-[0.9rem]">{team.role}</p>
          </div>
        </MotionDiv>
      ))}
    </div>
  );
};

export default TeamLists;
