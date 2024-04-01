import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { Button } from "../ui/button";

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
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          width={40}
          height={40}
          alt="Quantum Compilers Technologies"
        />
        <h2></h2>
      </div>
      <div className="flex items-center">
        {NavLinks.map((link) => (
          <Link href={link.href} key={link.name}>
            <Button
              variant={"ghost"}
              className="rounded-full px-7 font-semibold tracking-[0.02rem] text-[1.1rem] transition duration-200 ease-linear"
            >
              {link.name}
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
