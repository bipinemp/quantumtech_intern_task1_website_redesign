import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import NavLinkItem from "./NavLinkItem";
import Menu from "./Menu";
import { NavLinks } from "@/lib/lists";

const Navbar = () => {
  console.log(NavLinks);
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
      <Menu />
    </nav>
  );
};

export default Navbar;
