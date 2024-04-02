"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type LinkType = {
  name: string;
  href: string;
};

const MenuLinkItem = ({ name, href }: LinkType) => {
  const pathname = usePathname();

  return (
    <div
      className={cn("w-full py-4 cursor-pointer transition hover:bg-zinc-100", {
        "text-primary font-semibold": pathname === href,
      })}
    >
      {name}
    </div>
  );
};

export default MenuLinkItem;
