import Image from "next/image";
import realdaam from "@/public/images/realdaam.png";
import Link from "next/link";

const Trusted = () => {
  return (
    <div className="my-20 bg-zinc-100 py-10 w-full flex items-center justify-center flex-col gap-4">
      <h1 className="relative inline-block w-fit font-black opacity-80 text-[2.2rem]">
        Trusted By
        <span className="absolute bottom-2 -z-10 left-0 w-full h-[10px] bg-primary"></span>
      </h1>
      <Link href="https://realdaam.com" target="_blank">
        <Image src={realdaam} width={300} height={300} alt="realdaam logo" />
      </Link>
    </div>
  );
};

export default Trusted;
