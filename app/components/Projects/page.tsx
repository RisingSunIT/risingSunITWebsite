"use client";

import { FaGithub } from "react-icons/fa";
import { useTheme } from "next-themes";

import { SiCss3, SiReact, SiNextdotjs, SiFlutter, SiTypescript } from "react-icons/si";
import { TbFlameFilled } from "react-icons/tb";
export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const projects = [
    {
      title: "Coming soon...",
      link: "",
      startDate: "20XX/XX",
      endDate: "20XX/XX",
      summary: "Coming soon...",
      technologies: "Coming soon...",
      achievements: "Coming soon...",
      github: ""
    },
    {
      title: "Coming soon...",
      link: "",
      startDate: "20XX/XX",
      endDate: "20XX/XX",
      summary: "Coming soon...",
      technologies: "Coming soon...",
      achievements: "Coming soon...",
      github: ""
    },
    {
      title: "Coming soon...",
      link: "",
      startDate: "2025/3",
      endDate: "ongoing",
      summary: "Developing and publishing a popular mobile game.",
      technologies:
        <div className="flex">
          <a href="#skillFlutter"><SiFlutter className="text-blue-500 text-3xl" /></a>,
          <a href="#skillFlame" className="relative">
            <TbFlameFilled className="absolute text-[#f21531] text-4xl" />
            <TbFlameFilled className="absolute text-[#ff8735] text-3xl left-[3px] top-[5px]" />
            <TbFlameFilled className="absolute text-[#ffc031] text-xl left-[8px] top-[14px]" />
          </a>
        </div>,
      achievements: "Coming soon...",
      github: ""
    },
    {
      title: "RisingSunIT website⇧",
      link: "https://www.risingSunIt.com",
      startDate: "2025/1",
      endDate: "2025/2",
      summary: "Setting up and hosting this website. The start of our professional journey!",
      technologies:
        <div className="flex">
          <a href="#skillNextJs"><SiNextdotjs className="text-black dark:text-white text-3xl" /></a>,
          <a href="#skillReact"><SiReact className="text-cyan-500 text-3xl" /></a>,
          <a href="#skillTypescript"><SiTypescript className="text-blue-500 text-3xl" /></a>,
          <a href="#skillCSS"><SiCss3 className="text-blue-500 text-3xl" /></a>
        </div>,
      achievements: "Establishing a strong online presence within a minimal timeframe.",
      github: "https://github.com/RisingSunIT/risingSunITWebsite"
    },
  ];

  return (
    <section id="projects" className="dark:bg-black relative overflow-hidden">
      {projects.map((project, index) => {
        const isFirst = index === 0;
        const isLast = index === projects.length - 1;
        const shadowSize = `${index * 4}px ${index * 4}px ${index * 8}px rgba(0,0,0,0.3)`;

        return (
          <div
            key={index}
            id="projectRow"
            className={`lg:m-16 m-8 flex flex-col md:flex-row ${isFirst ? "mt-8" : ""} ${isLast ? "mb-8" : ""}`}
          >
            <div
              id="projectPill"
              className="bg-[#36c1cf] relative overflow-hidden rounded-[30px] w-full md:w-[35%] p-4 flex flex-col lg:flex-row items-center text-center text-white dark:text-black transition-shadow duration-300"
              style={{ boxShadow: shadowSize }}
            >
              {/* Glare Effect */}
              <div className="absolute top-0 left-[-100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-black/60 opacity-0 skew-x-[-20deg] animate-glare"></div>
              <div className="text-2xl w-full mb-2 lg:mb-0 lg:w-1/2 hover:underline">
                <a href={project.link}>{project.title}</a>
              </div> 
              <div className="flex w-full lg:w-1/2 justify-evenly items-center">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub
                    className="text-3xl cursor-pointer hover:text-gray-500 transition-colors"
                    style={{ color: isDark ? "black" : "white" }}
                  />
                </a>
                <div className="text-xl flex lg:flex-col">
                  <p>{project.startDate}</p>
                  ~
                  <p>{project.endDate}</p>
                </div>
              </div>
            </div>
            <div id="spacer" className="hidden md:block w-[5%]"></div>
            <div className="flex flex-col pt-4 lg:pt-0 lg:w-[60%] dark:text-white text-md lg:text-2xl">
              <div className="flex">
                <div className="pr-4">📃</div>
                <div>{project.summary}</div>
              </div>
              <div className="flex">
                <div className="pr-4">⚙️</div>
                <div>{project.technologies}</div>
              </div>
              <div className="flex">
                <div className="pr-4">✅</div>
                <div>{project.achievements}</div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
