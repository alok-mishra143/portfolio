"use client";

import React from "react";
import TittleButton from "../ui/TittleButton";
import { SkillData } from "@/data/data";
import { HoverEffect } from "../ui/card-hover-effect";
const Skill = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <TittleButton
        tittle={"Skills 🧠"}
        classname="flex flex-col items-center justify-center -rotate-6"
      />

      <HoverEffect items={SkillData} />
    </div>
  );
};

export default Skill;
