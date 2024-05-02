"use client";

import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { SiPagekit } from "react-icons/si";
import CustomButton from "./CustomButton";
import { SocialMediaData } from "@/data/data";
import Link from "next/link";

const Footer = () => {
  const email = "hey.alokmishra@gmail.com";

  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md" id="connectme">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
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
      <div className=" flex items-center justify-center gap-5">
        <h1>{email}</h1>
        <CustomButton name="Copy" />
      </div>
      <div className="flex items-center gap-5 mt-10 ">
        {SocialMediaData.map((social) => (
          <Link href={social.link} key={social.id} aria-label={social.title}>
            <social.icon className="w-5 h-5 hover:scale-125 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
