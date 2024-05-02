import HeroSection from "@/components/homeComp/HeroSection";
import Navbar from "@/components/homeComp/Navbar";
import Skill from "@/components/homeComp/Skill";
import Footer from "@/components/homeComp/footer";
import Project from "@/components/homeComp/project";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.2">
        <div className=" max-w-7xl mx-auto p-5">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 sm:h-32 w-full absolute -bottom-5 left-0 sm:bottom-0 bg-gradient-to-t from-black"></div>
      </div>

      <div className=" max-w-7xl mx-auto p-5 mt-20">
        <Skill />
        <Project />
      </div>
      <div className="">
        <div className=" max-w-7xl mx-auto p-5 mt-20">
          <Footer />{" "}
        </div>
      </div>
    </div>
  );
}
