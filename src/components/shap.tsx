import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Shap = () => {
  return (
    <div className="relative mt-32 sm:mt-10 md:mt-20 ">
      <div className="w-72 h-72 space-y-3 -rotate-[30deg] ">
        <div className="flex gap-3 translate-x-8">
          <div className=" w-32 h-32 rounded-2xl bg-green-500"></div>

          <div className=" w-32 h-32 rounded-full bg-indigo-500"></div>
        </div>

        <div className="flex gap-3 -translate-x-8">
          <div className=" w-32 h-32 rounded-2xl bg-indigo-500"></div>

          <div className=" w-32 h-32 rounded-full bg-green-500"></div>
        </div>

        {/* <div className=" absolute -z-10  h-10 w-10 bg-white top-[40%] right-1/2 glow animate-roundLight "></div> */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 absolute -z-10 h-72 w-72 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[50px] rounded-full"></div>
      </div>
      <div className="absolute bottom-9 sm:bottom-14 left-12 sm:-left-10 hover:scale-105 transition-all">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black/70 bg-white text-black dark:text-white flex items-center space-x-2  "
        >
          <span>💼Avaialbe for Work</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default Shap;
