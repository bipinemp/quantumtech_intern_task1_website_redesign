import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { Button } from "../ui/button";
import NavLinkItem from "./NavLinkItem";

const NavLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About us",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-inherit max-w-[1920px] mx-auto md:px-10 xl:px-28 2xl:px-52 sticky top-0 inset-x-0 z-40 flex justify-between items-center px-10 py-5 border-b border-b-zinc-400">
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={logo}
          width={40}
          height={40}
          alt="Quantum Compilers Technologies"
        />
      </Link>
      <div className="flex items-center">
        {NavLinks.map((link, i) => (
          <NavLinkItem i={i} name={link.name} href={link.href} key={i} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
