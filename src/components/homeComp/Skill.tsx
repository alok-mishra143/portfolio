"use client";

import React from "react";
import TittleButton from "../ui/TittleButton";
import { SkillData } from "@/data/data";
import { HoverEffect } from "../ui/card-hover-effect";
import ShowCase from "./ShowCase";
import ShineBorder from "../magicUi/shineBorder";
const Skill = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 relative">
      <div className="mb-10">
        <ShineBorder
          className="text-center text-2xl font-bold capitalize w-full"
          color={["#DA22FF", "#9733EE", "#F58529"]}
        >
          <ShowCase github="alok-mishra143" leetcode="unknown_brain143" />
        </ShineBorder>
      </div>
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-48 h-48 absolute blur-[100px]  translate-x-[100%] translate-y-[180%] -z-2 lg:translate-x-[220%] md:translate-x-[200%] animate-pulse hidden lg:flex md:flex"></div>
      <TittleButton
        tittle={"Skills 🧠"}
        classname="flex flex-col items-center justify-center -rotate-6"
      />

      <HoverEffect items={SkillData} />
    </div>
  );
};

export default Skill;
