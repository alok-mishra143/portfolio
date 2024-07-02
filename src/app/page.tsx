"use client";

import HeroSection from "@/components/homeComp/HeroSection";
import Navbar from "@/components/homeComp/Navbar";
import Skill from "@/components/homeComp/Skill";
import Footer from "@/components/homeComp/footer";
import Project from "@/components/homeComp/project";
import Section from "@/components/inView";
import { VelocityScroll } from "@/components/ui/scrollbase-velocity";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden w-full  relative ">
      <TracingBeam className="">
        <motion.div
          className="absolute  w-24 h-24 top-24 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  blur-[50px] rounded-full opacity-75 hidden sm:flex"
          initial={{ opacity: 0, scale: 1.5, x: -1000, y: -100 }}
          animate={{ opacity: 1, scale: 1, x: 1350, y: 0 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute  w-24 h-24 top-24 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  blur-[50px] rounded-full opacity-75 hidden sm:flex"
          initial={{ opacity: 0, scale: 1.5, x: 1300, y: -100 }}
          animate={{ opacity: 1, scale: 1, x: -180, y: 100 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        ></motion.div>
        <div className="dark:bg-black bg-white   ">
          <Section>
            <div className=" max-w-7xl mx-auto p-5">
              <Navbar />
              <div className="w-screen h-[1px] bg-gray-800 -mt-8 -ml-16"></div>
              <HeroSection />
            </div>
          </Section>
        </div>

        <div className=" max-w-7xl mx-auto p-5 mt-20 z-50">
          <Section>
            <Skill />
          </Section>
          <Section>
            <div className="flex flex-row relative ">
              <div className=" bg-black  w-[3%]  absolute h-[110%] z-50 -left-5 blur-sm"></div>
              <VelocityScroll
                text="Projects"
                default_velocity={4}
                className="font-display text-center text-9xl font-extrabold tracking-[-0.02em]  drop-shadow-sm  md:text-7xl md:leading-[5rem] -z-50 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-800 to-neutral-100 dark:to-neutral-700 inset-x-0"
              />
              <div className=" bg-black w-[5%]  absolute h-[110%] z-50 -right-5 blur-sm"></div>
            </div>
          </Section>
          <Section>
            <Project />
          </Section>
        </div>
        <Section>
          <div className="">
            <div className=" max-w-7xl mx-auto p-5 mt-20 ">
              <Footer />{" "}
            </div>
          </div>
        </Section>
      </TracingBeam>
    </div>
  );
}
