"use client";

import Link from "next/link";
import React from "react";
import Shap from "../shap";
import TittleButton from "../ui/TittleButton";
import { Typewriter } from "react-simple-typewriter";
import { AllLinks } from "@/data/data";
const HeroSection = () => {
  return (
    <div className=" min-h-[60vh]  flex items-center justify-center w-full   ">
      <div className="w-full flex flex-col-reverse gap-16 lg:flex-row items-center justify-between">
        <div className="space-y-10 text-center lg:text-left fadein ">
          <h1 className="text-4xl lg:text-7xl font-bold">
            Nice to meet you! 👋 <br />
            <span className="  flex gap-3">
              I&apos;m{" "}
              <span className={`decoration-green-500 underline`}>
                <Typewriter
                  words={["FullStack dev", "Gamer", "AI Enthusiast"]}
                  loop={0}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </span>{" "}
          </h1>
          <p className=" text-gray-300 text-lg max-w-xl">
            {AllLinks.description}
          </p>
          <div className="flex items-center gap-7">
            <Link
              href={AllLinks.resume}
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

        <div className="fadein">
          <Shap />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
