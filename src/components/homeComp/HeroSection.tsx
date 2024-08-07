"use client";

import Link from "next/link";
import React from "react";
import Shap from "../shap";
import TittleButton from "../ui/TittleButton";
import { Typewriter } from "react-simple-typewriter";
import { AllLinks } from "@/data/data";
import WordRotate from "../ui/word-rotate";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../magicUi/TextGen";
const HeroSection = () => {
  return (
    <div className=" min-h-[60vh]  flex items-center justify-center w-full   ">
      <motion.div className="w-full flex flex-col-reverse gap-16 lg:flex-row items-center justify-between">
        <motion.div className="space-y-10 text-center lg:text-left ">
          <h1 className="text-4xl lg:text-7xl font-bold sm:text-4xl">
            Nice to meet you! 👋 <br />
            <span className="  flex gap-3">
              I&apos;m{" "}
              <span className={`decoration-green-500 underline`}>
                <WordRotate
                  words={[
                    "FullStack dev",
                    "Gamer",
                    "AI Enthusiast",
                    "UI/UX Designer",
                    "Tech Enthusiast",
                  ]}
                />
              </span>
            </span>{" "}
          </h1>
          <div className="  max-w-xl justify-start">
            {/* {AllLinks.description} */}
            <TextGenerateEffect
              words={AllLinks.description}
              className="text-gray-300  max-w-xl"
            />
          </div>
          <div className="flex items-center gap-7">
            <Link
              href={AllLinks.resume}
              target="_blank"
              className="cursor-pointer hover:scale-105 transition-all"
            >
              <TittleButton tittle={"MY CV"} />
            </Link>
            <Link
              href={"#connectme"}
              className="cursor-pointer hover:scale-105 transition-all"
              scroll={true}
            >
              <TittleButton tittle={"Contact me "} />
            </Link>
          </div>
        </motion.div>

        <div className="  fadein">
          <Shap />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
