import logo from "@/public/images/logo.png";
import { Dot, Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CompanyList = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact us", href: "/contact" },
];

const ServicesList = [
  { name: "Web Development" },
  { name: "App Development" },
  { name: "Machine Learning" },
  { name: "WordPress Development" },
  { name: "UI/UX Design" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground py-16 text-background flex flex-col gap-20 justify-center px-20 items-center">
      <div className="flex justify-center gap-32 items-start">
        <div className="flex flex-col gap-5 w-[25%]">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="Quantum Compilers Technologies Logo"
          />
          <p className="opacity-80">
            We blend our skills for web development into a powerful, agile team.
            Our team of designers and project managers partner with you to build
            forward-thinking user experiences
          </p>
          <div className="flex items-center gap-5">
            <p className="font-bold underline underline-offset-4">Follow US</p>
            <div className="flex items-center gap-4">
              <Link href={"/"}>
                <Facebook className="size-6 text-primary " />
              </Link>
              <Link href={"/"}>
                <Instagram className="size-6 text-primary " />
              </Link>
              <Link href={"/"}>
                <Linkedin className="size-6 text-primary " />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-primary font-black">Company</h2>
          <ul className="flex flex-col gap-3">
            {CompanyList.map((company, i) => (
              <Link
                className="hover:text-primary transition flex items-center gap-2"
                key={i}
                href={company.href}
              >
                <Dot className="size-5 text-primary" strokeWidth={8} />
                <li>{company.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-primary font-black">Services</h2>
          <ul className="flex flex-col gap-3">
            {ServicesList.map((service, i) => (
              <li key={i} className="flex items-center gap-2">
                <Dot className="size-5 text-primary" strokeWidth={8} />
                {service.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-primary font-black">Get In Touch</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Mail className="size-10 text-primary" />
              <div className="flex flex-col">
                <p className="text-primary font-semibold">Mail Us</p>
                <h3 className="text-[1rem]">sales@quantumc.tech</h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="size-10 text-primary" />
              <div className="flex flex-col">
                <p className="text-primary font-semibold">Visit Us</p>
                <h3 className="text-[1rem]">Kathmandu, Nepal</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="opacity-80 text-sm">
          Copyright©2020. QuantumCompilersTechnology. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
