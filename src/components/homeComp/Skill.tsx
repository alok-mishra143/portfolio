"use client";

import React from "react";
import TittleButton from "../ui/TittleButton";
import { SkillData } from "@/data/data";
import { HoverEffect } from "../ui/card-hover-effect";
const Skill = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 relative">
      <div className="bg-[#c026d3] w-48 h-48 absolute blur-[100px]  translate-x-[100%] translate-y-[180%] -z-2 lg:translate-x-[220%] md:translate-x-[200%] animate-pulse"></div>
      <TittleButton
        tittle={"Skills 🧠"}
        classname="flex flex-col items-center justify-center -rotate-6"
      />

      <HoverEffect items={SkillData} />
    </div>
  );
};

export default Skill;
