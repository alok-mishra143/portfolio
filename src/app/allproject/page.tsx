import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import React from "react";
import { AllProjectdata } from "@/data/data";
import Link from "next/link";
import TittleButton from "@/components/ui/TittleButton";
import { SiGithub, SiHomeadvisor } from "react-icons/si";
import { AllLinks } from "@/data/data";
import { LinkPreview } from "@/components/magicUi/Linkpreview";
const page = () => {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-1/2 h-1/2 absolute lg:blur-[200px] blur-[100px] lg:translate-y-[50%] md:translate-y-[10%] opacity-80 hidden lg:flex "></div>

      <div className="flex-col  items-center justify-center  m-5 ">
        <Link href={"/"} className="text-3xl">
          <SiHomeadvisor />
        </Link>
        <TittleButton
          tittle={"ALL PROJECTS 💻"}
          classname="flex flex-col items-center justify-center -rotate-4 m-5 "
        />
        <Link
          href={AllLinks.github}
          className="cursor-pointer "
          target="_blank"
        >
          <div className="bg-black/50  rounded-md hover:bg-black/90 transition-all inline-block items-center justify-center">
            <h1 className="text-4xl flex gap-2 items-center justify-center  ">
              <SiGithub />
              <p className="">alok-mishra143</p>
            </h1>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4  ">
        {AllProjectdata.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            className="col-span-1 lg:col-span-2 h-full  min-h-[400px] lg:min-h-[300px]"
            target="_blank"
          >
            <LinkPreview url={project.plink}>
              <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full  min-h-[400px] lg:min-h-[300px]"
                className={`${project.bgcolor}`}
              >
                <div className="lg:max-w-xs z-10 bg-black/50 backdrop-blur-sm rounded-md md:max-w-md  w-full">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    {project.description}
                  </p>
                  <p className="mt-4 text-left  text-base/6 text-neutral-200 flex gap-2 ">
                    {project.tech.map((Tech, index) => (
                      <Tech key={index} />
                    ))}
                  </p>
                </div>
                <Image
                  src={project.cover}
                  width={500}
                  height={500}
                  alt="linear demo image"
                  className="absolute -right-2 lg:-right-[20%]  -bottom-10 object-contain rounded-2xl -z-10 "
                />
              </WobbleCard>
            </LinkPreview>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
