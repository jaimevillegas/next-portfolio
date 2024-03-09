import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Intro from "@/components/Intro";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jaime | Personal Portfolio",
  description: "Jaime is a full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36 elative`}
      >
        <div className="bg-[#fbe2e3]  absolute top-[-6rem] right-[11rem] h-[31.25rem] -z-10 w-[31.25rem] blur-[10rem] sm:w-[68.76rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] -z-10 w-[50rem] blur-[10rem] sm:w-[68.76rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
