import work1 from "@/public/images/work1.png";
import { Code, Lightbulb, Palette, Rocket } from "lucide-react";
import person1 from "@/public/images/person1.jpg";
import person2 from "@/public/images/person2.jpg";
import person3 from "@/public/images/person3.webp";
import person4 from "@/public/images/person4.png";
import person5 from "@/public/images/person5.jpg";
import person6 from "@/public/images/person6.jpg";
import web from "@/public/images/webimg.png";
import app from "@/public/images/appimg.png";
import machine from "@/public/images/machineimg.png";
import wordpress from "@/public/images/wordpressimg.png";

export const NavLinks = [
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

export const WorksList = [
  {
    type: "Ecommerce",
    img: work1,
    name: "Realdaam",
    desc: "For all people in need",
    href: "https://realdaam.com",
  },
  {
    type: "Ecommerce",
    img: work1,
    name: "Realdaam",
    desc: "For all people in need",
    href: "https://realdaam.com",
  },
  {
    type: "Ecommerce",
    img: work1,
    name: "Realdaam",
    desc: "For all people in need",
    href: "https://realdaam.com",
  },
  {
    type: "Ecommerce",
    img: work1,
    name: "Realdaam",
    desc: "For all people in need",
    href: "https://realdaam.com",
  },
  {
    type: "Ecommerce",
    img: work1,
    name: "Realdaam",
    desc: "For all people in need",
    href: "https://realdaam.com",
  },
];

export const StepsList = [
  { name: "Analysis and Investage", icon: Lightbulb },
  { name: "Wireframe and Design", icon: Palette },
  { name: "Development and Integration", icon: Code },
  { name: "Testing and Deployment", icon: Rocket },
];

export const NextStepList = [
  {
    name: "We'll prepare a proposal",
    desc: "Required scope, timeline and approximate price will be included if you provide us with a detail information about your project.",
  },
  {
    name: "Together we discuss it",
    desc: "Lets get acquainted and discuss all the possible alternatives , variants and options. through the help of social platforms.",
  },
  {
    name: "Let’s start building",
    desc: "When the contract is signed and all the goals are set, we can start the first sprint and wait for further output.",
  },
];

export const TeamList = [
  { name: "Abinash Rana", role: "Project Director", img: person1 },
  {
    name: "Atush Maharjan",
    role: "Chief Financial Officer (CFO)",
    img: person2,
  },
  {
    name: "Bipin Budhathoki",
    role: "Chief Technology Officer (CTO)",
    img: person3,
  },
  { name: "Sabin Sharma Paudel", role: "Managing Director (MD)", img: person4 },
  { name: "Saugat Bhusal", role: "Sales and Marketing", img: person5 },
  { name: "Sushan Maharjan", role: "Lead Designer", img: person6 },
];

export const ServicesList = [
  {
    name: "Website Development",
    desc: "We mainly deals with the aspect of building , designing websites, which includes coding and writing markup ranges as creating plain text pages to complex web-based applications, social network applications and electronic business applications.",
    img: web,
  },
  {
    name: "Application Development",
    desc: "We create a mobile application or a set of programs to perform the different tasks that a business requires. From calculating monthly expenses to scheduling sales reports, applications help businesses automate processes and increase efficiency",
    img: app,
  },
  {
    name: "Machine/Deep learning",
    desc: "We deal with an application of AI that includes algorithms that parse data, learn from that data, and then apply what they’ve learned to make informed decisions as well as to manage data and information",
    img: machine,
  },
  {
    name: "Wordpress Development",
    desc: "We deal with developing and publishing software that can be installed locally on a web server and viewed on a proprietary web site or hosted in the cloud and viewed on the WordPress web site",
    img: wordpress,
  },
];
