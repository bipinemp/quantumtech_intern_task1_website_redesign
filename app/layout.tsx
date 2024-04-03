import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import Container from "@/components/Container";
import Footer from "@/components/footer/Footer";
import Template from "./template";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({ subsets: ["latin"], variable: "--paragraph" });

export const metadata: Metadata = {
  title: "Quantum Compilers Technologies",
  description: "Created By Bipin Bhandari",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
