"use client";

import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { SiPagekit } from "react-icons/si";
import CustomButton from "./CustomButton";
import { SocialMediaData } from "@/data/data";
import Link from "next/link";
import { AllLinks } from "@/data/data";
import ShineBorder from "../magicUi/shineBorder";
import BubbleText from "../magicUi/BubbleText";
import { motion } from "framer-motion";

const Footer = () => {
  const email = AllLinks.email;

  return (
    <div
      className="h-[40rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md relative   "
      id="connectme"
    >
      <motion.div className="absolute  w-[80%] h-8  bottom-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  blur-[100px] rounded-full   sm:flex animate-gradient"></motion.div>
      <h1 className="md:text-8xl sm:text-7xl text-5xl lg:text-9xl text-center  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
        ALOK MISHRA
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className=" flex items-center justify-center gap-5 ">
        <div className="cursor-text xs:text-xl  text-sm ">
          <BubbleText word={email} />
        </div>
        <CustomButton name="COPY" />
      </div>
      <div className="flex items-center gap-5 mt-10 ">
        {SocialMediaData.map((social) => (
          <Link
            href={social.link}
            key={social.id}
            aria-label={social.title}
            target="_blank"
          >
            <ShineBorder
              className="text-center text-2xl font-bold capitalize"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              key={social.id}
            >
              <social.icon className="w-6 h-6 hover:scale-125 transition-all" />
            </ShineBorder>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
