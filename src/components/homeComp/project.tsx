import React from "react";
import TittleButton from "../ui/TittleButton";
import { ProjectData } from "@/data/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import AnimatedGradientText from "../magicUi/gradientText";
import { ChevronRight } from "lucide-react";
import { LinkPreview } from "../magicUi/Linkpreview";

const project = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 p-5  relative">
      {/* <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-40 h-40 absolute blur-[70px] rounded-full items-center justify-center translate-x-[100%] translate-y-[40%] -z-2 lg:translate-x-[280%] md:translate-x-[180%]"></div> */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 absolute  h-96 w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[200px] rounded-full"></div>

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
        <div className="mt-10">
          <Link href={"/allproject"}>
            <AnimatedGradientText className="p-2 m-3">
              🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                View all project
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default project;
