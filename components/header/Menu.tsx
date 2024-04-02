import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/lib/lists";
import MenuLinkItem from "./MenuLinkItem";

const Menu = () => {
  return (
    <div className="cursor-pointer sm:hidden">
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="size-8" />
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[200px] px-0">
          <SheetHeader>
            <div className="w-full relative mt-20 flex flex-col items-center">
              {NavLinks.map((link, i) => (
                <MenuLinkItem name={link.name} href={link.href} key={i} />
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Menu;
