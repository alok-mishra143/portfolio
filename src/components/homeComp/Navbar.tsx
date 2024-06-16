"use client";

import React from "react";
import { SocialMediaData } from "@/data/data";
import Link from "next/link";
import ShineBorder from "../magicUi/shineBorder";

const Navbar = () => {
  return (
    <nav className="py-10 flex justify-between items-center showup  ">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 hover:scale-105 transition-all cursor-default  ">
        Alok Mishra 🧑‍💻
      </h1>
      <div className="flex items-center gap-5  ">
        {SocialMediaData.map((social) => (
          <Link
            href={social.link}
            key={social.id}
            aria-label={social.title}
            target="_blank"
          >
            <ShineBorder
              className="text-center text-2xl font-bold capitalize"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              key={social.id}
            >
              <social.icon className="sm:w-6 sm:h-6 hover:scale-125 transition-all w-3 h-3" />
            </ShineBorder>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
