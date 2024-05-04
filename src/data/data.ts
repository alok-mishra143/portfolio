import { join } from "path";
import {
  SiClerk,
  SiCplusplus,
  SiDrizzle,
  SiExpress,
  SiGit,
  SiGithub,
  SiGooglebard,
  SiLeetcode,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiX,
} from "react-icons/si";

export const AllLinks = {
  github: "https://github.com/alok-mishra143",
  linkedin: "https://www.linkedin.com/in/alok-mishra143/",
  X: "https://www.google.com",
  resume: "https://www.google.com",
  email: "hey.alokmishra@gmail.com",
  leetcode: "https://leetcode.com/u/unknown_brain143/",
  description:
    "I`m a FullStack Developer with a passion for building beautiful, user-friendly websites and applications. I`m currently looking for new opportunities, my inbox is always open. Whether for a potential project or just to say hi, I`ll try my best to answer your email!",
};

export const SocialMediaData = [
  {
    id: 1,
    title: "Github",
    icon: SiGithub,
    link: AllLinks.github,
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: SiLinkedin,
    link: AllLinks.linkedin,
  },
  {
    id: 3,
    title: "X",
    icon: SiX,
    link: AllLinks.X,
  },
  {
    id: 4,
    title: "LeetCode",
    icon: SiLeetcode,
    link: AllLinks.leetcode,
  },
];

export const SkillData = [
  {
    title: "C++",
    icon: SiCplusplus,
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    title: "Node.js",
    icon: SiNodedotjs,
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
  },
  {
    title: "React.js",
    icon: SiReact,
  },
  {
    title: "Express.js",
    icon: SiExpress,
  },
  {
    title: "Drizzle ORM",
    icon: SiDrizzle,
  },
  {
    title: "Git",
    icon: SiGit,
  },
];

export const ProjectData = [
  {
    title: "DevFlow",
    tech: [SiNextdotjs, SiTailwindcss, SiMongodb, SiClerk, SiGooglebard],
    description:
      "Advance version of Stackover flow  with more features and better UI/UX.",
    cover: "/project/Devflow.png",
    bgcolor: "bg-red-500",
    link: "https://github.com/alok-mishra143/Dev-flow",
  },
  {
    title: "GenZbot",
    tech: [SiNextdotjs, SiTailwindcss, SiClerk, SiGooglebard],
    description: "A ChatBot that Behave like GenZ and can chat with you.",
    cover: "/project/GenZbot.png",
    bgcolor: "bg-green-500",
    link: "https://github.com/alok-mishra143/GenZbot",
  },
  {
    title: "Kanban Board",
    tech: [SiNextdotjs, SiTailwindcss, SiNodedotjs],
    description: "Organize your work with this Kanban board.",
    cover: "/project/Kanban.png",
    bgcolor: "bg-blue-500",
    link: "https://github.com/alok-mishra143/Kanban-board",
  },
  {
    title: "PassWord Generator",
    tech: [SiReact, SiTailwindcss, SiNodedotjs],
    description: "This is a project",
    cover: "/project/PasswordGen.png",
    bgcolor: "bg-pink-500",
    link: "https://github.com/alok-mishra143/PasswordGen",
  },
];

export const AllProjectdata = [
  {
    title: "DevFlow",
    tech: [SiNextdotjs, SiTailwindcss, SiMongodb, SiClerk, SiGooglebard],
    description:
      "Advance version of Stackover flow  with more features and better UI/UX.",
    cover: "/project/Devflow.png",
    bgcolor: "bg-red-500",
    link: "https://github.com/alok-mishra143/Dev-flow",
  },
  {
    title: "Bard-clone",
    tech: [SiNextdotjs, SiTailwindcss, SiGooglebard],
    description: "Bard clone",
    cover: "/project/BardClone.png",
    bgcolor: "bg-green-500",
    link: "https://github.com/alok-mishra143/bard-clone",
  },
  {
    title: "GenZbot",
    tech: [SiNextdotjs, SiTailwindcss, SiClerk, SiGooglebard],
    description: "A ChatBot that Behave like GenZ and can chat with you.",
    cover: "/project/GenZbot.png",
    bgcolor: "bg-[#6b21a8]",
    link: "https://github.com/alok-mishra143/GenZbot",
  },
  {
    title: "BrainWave",
    tech: [SiNextdotjs, SiTailwindcss],
    description: "My frontend project",
    cover: "/project/BrainWave.png",
    bgcolor: "bg-[#047857]",
    link: "https://github.com/alok-mishra143/BrainWave",
  },
  {
    title: "Kanban Board",
    tech: [SiNextdotjs, SiTailwindcss, SiNodedotjs],
    description: "Organize your work with this Kanban board.",
    cover: "/project/Kanban.png",
    bgcolor: "bg-[#ea580c]",
    link: "https://github.com/alok-mishra143/Kanban-board",
  },
  {
    title: "PassWord Generator",
    tech: [SiReact, SiTailwindcss, SiNodedotjs],
    description: "Generate password with this simple password generator.",
    cover: "/project/PasswordGen.png",
    bgcolor: "bg-pink-500",
    link: "https://github.com/alok-mishra143/PasswordGen",
  },
  {
    title: "TO-DO List",
    tech: [SiReact, SiTailwindcss, SiNodedotjs],
    description: "Manage your Task on TOdo",
    cover: "/project/Todo.png",
    bgcolor: "bg-[#a3e635]",
    link: "https://github.com/alok-mishra143/to-do-list",
  },
  {
    title: "Ochi",
    tech: [SiReact, SiTailwindcss, SiNodedotjs],
    description: "A frontend project",
    cover: "/project/Ochi.png",
    bgcolor: "bg-[#b45309]",
    link: "https://github.com/alok-mishra143/Ochi",
  },
];

export const ImWords = [
  {
    text: "Fullstack Developer",
  },
  {
    text: "Gamer",
  },
  {
    text: "AI enthusiast",
  },
];
