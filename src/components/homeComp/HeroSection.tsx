import Link from "next/link";
import React from "react";
import Shap from "../shap";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import TittleButton from "../ui/TittleButton";

const HeroSection = () => {
  return (
    <div className=" min-h-[60vh]  flex items-center justify-center w-full animate-moveup ">
      <div className="w-full flex flex-col-reverse gap-16 lg:flex-row items-center justify-between">
        <div className="space-y-10 text-center lg:text-left">
          <h1 className="text-4xl lg:text-7xl font-bold">
            Nice to meet you! 👋 <br />{" "}
            <span className="underline decoration-green-500">
              {" "}
              I&apos;m Alok Mishra.
            </span>{" "}
          </h1>
          <p className="md:w-96 text-gray-300 text-lg">
            {
              "Based in India , I'm a Fullstack developer passionate about building a modern web  application that users love."
            }
          </p>
          <div className="flex items-center gap-7">
            <Link
              href={"https://google.com"}
              target="_blank"
              className="cursor-pointer"
            >
              <TittleButton tittle={"MY CV"} />
            </Link>
            <Link href={"#connectme"} className="cursor-pointer" scroll={true}>
              <TittleButton tittle={"Contact me "} />
            </Link>
          </div>
        </div>

        <div>
          <Shap />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
