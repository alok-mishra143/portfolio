import React from "react";
import TittleButton from "../ui/TittleButton";
import { ProjectData } from "@/data/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

const project = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 p-5  relative">
      <div className="bg-[#c026d3] w-40 h-40 absolute blur-[100px] rounded-full items-center justify-center translate-x-[100%] translate-y-[40%] -z-2 lg:translate-x-[280%] md:translate-x-[180%]"></div>
      <TittleButton
        tittle={"Projects 🟢"}
        classname="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5  pt-10">
        {ProjectData.map((item, index) => (
          <Link href={item.link} key={index}>
            <div className={cn("p-1 rounded-md", item.bgcolor)}>
              <DirectionAwareHover
                imageUrl={item.cover}
                className="w-full space-y-2 cursor-pointer "
              >
                <div className="space-y-3 bg-black/70  p-5 rounded-md ">
                  <h1 className="font-bold text-xl">{item.title}</h1>
                  <h2 className="text-gray-400 p-2">{item.description}</h2>
                  <div className="flex items-center gap-2">
                    {item.tech.map((Icon, index) => (
                      <Icon key={index} className="w-6 h-6 " />
                    ))}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center p-1  ">
        <div className="rounded-lg bg-gradient-to-r from-[#ff00cc] to-[#3333ff] hover:from-[#ff33cc] hover:to-[#6633ff] hover:text-white inline-block p-3 m-5">
          <Link href={"/allproject"}> View all project</Link>
        </div>
      </div>
    </div>
  );
};

export default project;
