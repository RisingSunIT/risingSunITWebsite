"use client";

import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "next-themes";
import { SiCss3, SiReact, SiNextdotjs, SiFlutter, SiTypescript } from "react-icons/si";
import { TbFlameFilled } from "react-icons/tb";

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile screen size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint is typically 640px
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const expandProject = (index: number) => {
    if (isMobile) return; // Don't expand on mobile
    
    // Only expand if not already expanded
    if (!expandedProjects.includes(index)) {
      setExpandedProjects(prev => [...prev, index]);
    }
  };

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
      technologies: (
        <div className="flex gap-2">
          <a href="#skillFlutter"><SiFlutter className="text-blue-500 text-3xl" /></a>
          <a href="#skillFlame" className="relative w-8 h-8">
            <TbFlameFilled className="absolute text-[#f21531] text-4xl" />
            <TbFlameFilled className="absolute text-[#ff8735] text-3xl left-[3px] top-[5px]" />
            <TbFlameFilled className="absolute text-[#ffc031] text-xl left-[8px] top-[14px]" />
          </a>
        </div>
      ),
      achievements: "Coming soon...",
      github: ""
    },
    {
      title: "RisingSunIT website⇧",
      link: "https://www.risingSunIt.com",
      startDate: "2025/1",
      endDate: "2025/2",
      summary: "Setting up and hosting this website. The start of our professional journey!",
      technologies: (
        <div className="flex gap-2">
          <a href="#skillNextJs"><SiNextdotjs className="text-black dark:text-white text-3xl" /></a>
          <a href="#skillReact"><SiReact className="text-cyan-500 text-3xl" /></a>
          <a href="#skillTypescript"><SiTypescript className="text-blue-500 text-3xl" /></a>
          <a href="#skillCSS"><SiCss3 className="text-blue-500 text-3xl" /></a>
        </div>
      ),
      achievements: "Establishing a strong online presence within a minimal timeframe.",
      github: "https://github.com/RisingSunIT/risingSunITWebsite"
    },
  ];

  return (
    <section id="projects" className="dark:bg-black relative overflow-hidden">
      {projects.map((project, index) => {
        const isExpanded = expandedProjects.includes(index);
        return (
          <div key={index} className="lg:m-16 m-8">
            {/* Mobile View (Always expanded) */}
            <div className="sm:hidden">
              <div className="bg-[#36c1cf] rounded-[30px] p-4 flex flex-col w-full mb-4 items-center text-center text-white dark:text-black">
                <div className="text-2xl w-full mb-2">
                  <a href={project.link} className="hover:underline">{project.title}</a>
                </div>
                <div className="flex w-full justify-evenly items-center">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-3xl cursor-pointer hover:text-gray-500 transition-colors" style={{ color: isDark ? "black" : "white" }} />
                  </a>
                  <div className="text-xl flex">
                    <p>{project.startDate}</p>
                    <span className="mx-1">~</span>
                    <p>{project.endDate}</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full">
                <div className="flex mb-2">
                  <div className="pr-4">📃</div>
                  <div>{project.summary}</div>
                </div>
                <div className="flex mb-2">
                  <div className="pr-4">⚙️</div>
                  <div>{project.technologies}</div>
                </div>
                <div className="flex">
                  <div className="pr-4">✅</div>
                  <div>{project.achievements}</div>
                </div>
              </div>
            </div>
            
            {/* Tablet and Desktop View (One-way Expansion) */}
            <div className="hidden sm:block">
              <div className="flex flex-col md:flex-row items-start">
                {/* Project Pill */}
                <div
                  className={`
                    bg-[#36c1cf] 
                    relative 
                    overflow-hidden 
                    rounded-[30px] 
                    p-4 
                    flex 
                    flex-col 
                    lg:flex-row 
                    items-center 
                    text-center 
                    text-white 
                    dark:text-black 
                    ${!isExpanded ? "cursor-pointer" : ""}
                    transform-gpu
                    will-change-transform
                    transition-all
                    duration-700
                    ease-in-out
                    ${isExpanded ? "w-[35%]" : "w-full"}
                  `}
                  onClick={() => expandProject(index)}
                  style={{
                    transitionProperty: "width, transform, background-color",
                  }}
                >
                  <div className="text-2xl w-full mb-2 lg:mb-0 lg:w-1/2 hover:underline">
                    <a href={project.link}>{project.title}</a>
                  </div>
                  <div className="flex w-full lg:w-1/2 justify-evenly items-center">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-3xl cursor-pointer hover:text-gray-500 transition-colors" style={{ color: isDark ? "black" : "white" }} />
                    </a>
                    <div className="text-xl flex lg:flex-col">
                      <p>{project.startDate}</p>
                      <span className="mx-1 lg:mx-0">~</span>
                      <p>{project.endDate}</p>
                    </div>
                  </div>
                </div>
                
                {/* Spacer - Always render but invisible when collapsed */}
                <div className={`w-[5%] transition-opacity duration-700 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0'}`}></div>
                
                {/* Project Details - Always in DOM for smooth animation */}
                <div 
                  className={`
                    flex-col 
                    pt-4 
                    lg:pt-0 
                    w-[60%] 
                    dark:text-white 
                    text-md 
                    lg:text-2xl 
                    transform-gpu
                    will-change-transform
                    transition-all
                    duration-700
                    ease-in-out
                    ${isExpanded 
                      ? "flex opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-[-20px] absolute pointer-events-none"
                    }
                  `}
                  style={{
                    transitionProperty: "opacity, transform, visibility",
                    transitionDelay: isExpanded ? "150ms" : "0ms",
                  }}
                >
                  <div className="flex mb-2">
                    <div className="pr-4">📃</div>
                    <div>{project.summary}</div>
                  </div>
                  <div className="flex mb-2">
                    <div className="pr-4">⚙️</div>
                    <div>{project.technologies}</div>
                  </div>
                  <div className="flex">
                    <div className="pr-4">✅</div>
                    <div>{project.achievements}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
