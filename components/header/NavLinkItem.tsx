"use client";

import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type LinkType = {
  name: string;
  href: string;
  i: number;
};

const NavLinkItem = ({ name, href, i }: LinkType) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div onClick={() => router.push(href)} key={i} className="hidden sm:block">
      <Button
        variant={"ghost"}
        className={cn(
          "rounded-full px-4 md:px-7 hover:text-primary hover:bg-primary/10 font-semibold tracking-xs md:text-[1.1rem] text-sm transition duration-200 ease-linear",
          {
            "text-primary": pathname === href,
          }
        )}
      >
        {name}
      </Button>
    </div>
  );
};

export default NavLinkItem;
