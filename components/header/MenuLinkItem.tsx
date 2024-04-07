"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";

type LinkType = {
  name: string;
  href: string;
};

const MenuLinkItem = ({ name, href }: LinkType) => {
  const pathname = usePathname();

  return (
    <SheetClose asChild key={name}>
      <Link
        href={href}
        className={cn(
          "w-full py-4 cursor-pointer transition hover:bg-zinc-100",
          {
            "text-primary font-semibold": pathname === href,
          }
        )}
      >
        {name}
      </Link>
    </SheetClose>
  );
};

export default MenuLinkItem;
