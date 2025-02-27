"use client";

import { FaGithub } from "react-icons/fa";
import { useTheme } from "next-themes";

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
      technologies: "flutter with flame engine",
      achievements: "Coming soon...",
      github: ""
    },
    {
      title: "RisingSunIT website",
      link: "https://www.risingSunIt.com",
      startDate: "2025/1",
      endDate: "2025/2",
      summary: "Setting up and hosting this website. The start of our professional journey!",
      technologies: "Next.js, React, Typescript, animations with CSS",
      achievements: "✅ Establishing a strong online presence within a minimal timeframe",
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
            className={`m-16 flex ${isFirst ? "mt-8" : ""} ${isLast ? "mb-8" : ""}`}
          >
          <div id="projectPill"
            className="bg-[#36c1cf] relative overflow-hidden rounded-[30px] w-[35%] p-4 flex items-center text-center text-white dark:text-black transition-shadow duration-300"
            style={{ boxShadow: shadowSize }} >
            {/* Glare Effect */}
            <div className="absolute top-0 left-[-100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-black/60 opacity-0 skew-x-[-20deg] 
                          transition-opacity duration-300 hover:opacity-100 hover:animate-glare infinite"></div>
            <div className="text-2xl w-1/2"><a href={project.link}>{project.title}</a></div>
            <div className="w-1/6 flex justify-center items-center">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub 
                  className="text-3xl cursor-pointer hover:text-gray-500 transition-colors" 
                  style={{ color: isDark ? "black" : "white" }} 
                />
              </a>
            </div>
            <div className="text-xl w-1/3">
              <p>{project.startDate} ~</p>
              <p className="pr-4">{project.endDate}</p>
            </div>
          </div>
            <div id="spacer" className="w-[5%]"></div>
            <div className="w-[60%] dark:text-white text-2xl">
              <div>{project.summary}</div>
              <div>{project.technologies}</div>
              <div>{project.achievements}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
