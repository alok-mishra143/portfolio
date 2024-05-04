import React from "react";
import { SocialMediaData } from "@/data/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-10 flex justify-between items-center ">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Alok Mishra 🧑‍💻
      </h1>
      <div className="flex items-center gap-5 ">
        {SocialMediaData.map((social) => (
          <Link
            href={social.link}
            key={social.id}
            aria-label={social.title}
            target="_blank"
          >
            <social.icon className="w-5 h-5 hover:scale-125 transition-all" />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
