"use client";

import { Link } from "lucide-react";
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
    <div onClick={() => router.push(href)} key={i}>
      <Button
        variant={"ghost"}
        className={cn(
          "rounded-full px-7 hover:text-primary hover:bg-primary/10 font-semibold tracking-[0.02rem] text-[1.1rem] transition duration-200 ease-linear",
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
