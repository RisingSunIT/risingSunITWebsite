"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import DarkModeToggle from "../dark_mode_button";
import Logo from "./logo";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function NavigationBar() {
  const [currentSection, setCurrentSection] = useState("blog");
  const [scrollProgress, setScrollProgress] = useState({ about: 0, projects: 0 });
  const [initialProgress, setInitialProgress] = useState({ about: 0, projects: 0 });

  const { theme } = useTheme();
  const isDark = theme === "dark";
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrentSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const calculateScrollProgress = () => {
    const aboutSection = document.getElementById("about");
    const projectsSection = document.getElementById("projects");
    const windowHeight = window.innerHeight;
  
    if (!aboutSection || !projectsSection) return { about: 0, projects: 0 };
  
    const navbarHeight = 120; // Adjust based on actual navbar height
    const aboutTop = aboutSection.getBoundingClientRect().top;
    const projectsTop = projectsSection.getBoundingClientRect().top - navbarHeight;
  
    // Ensure about is fully white when in view
    let aboutProgress = 1 - Math.min(1, Math.max(0, aboutTop / windowHeight));
    let projectsProgress = 1 - Math.min(1, Math.max(0, projectsTop / windowHeight));
  
    // Adjust the overlap: About should fade before projects takes over
    if (projectsProgress > 0) {
      aboutProgress = Math.max(0, 1 - projectsProgress * 1.2); // Overlap for smooth transition
    }
  
    return {
      about: aboutProgress,
      projects: projectsProgress,
    };
  };
  

  useEffect(() => {
    if (typeof window === "undefined") return;
    setInitialProgress(calculateScrollProgress());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => setScrollProgress(calculateScrollProgress());
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  const getBackgroundColor = (section: string) => {
    let alpha = scrollProgress[section as keyof typeof scrollProgress] || 0;
  
    // Ensure minimum visibility
    if (alpha < 0.1) alpha = 0;
  
    return `rgba(${isDark ? "0, 0, 0" : "255, 255, 255"}, ${alpha})`;
  };
  

  const getTextColor = (section: string) => {
    const baseColor = isDark ? "0, 0, 0" : "255, 255, 255";
    const highlightColor = "54, 193, 207";

    if (currentSection === "blog") return `rgba(${baseColor})`;

    const progress = scrollProgress.about || initialProgress.about;
    const projectsProgress = scrollProgress.projects || initialProgress.projects;

    if (currentSection === "about") {
      return section === "about"
        ? `rgba(${highlightColor}, ${progress})`
        : `rgba(${baseColor}, ${progress})`;
    }

    if (currentSection === "projects") {
      return section === "projects"
        ? `rgba(${highlightColor}, ${projectsProgress})`
        : `rgba(${baseColor}, ${projectsProgress})`;
    }

    return `rgba(${baseColor})`;
  };

  const handleNavClick = (sectionId: string, pagePath: string) => {
    if (pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        const navHeight = 120; // Height of navbar
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: sectionTop - navHeight, behavior: "smooth" });
      }
    } else {
      router.push(pagePath);
    }
  };

  return (
    <nav id="divNavBar" className="fixed top-0 left-0 w-full z-50 h-[120px] shadow-md bg-[#36c1cf] flex items-center">

      <div className="flex flex-col flex-grow items-center sm:flex-row h-full">
        {/* About Tab */}
        <div
          id="divAboutTab"
          className="h-full w-full flex-1 text-center content-center text-2xl sm:text-5xl font-['Lustria'] transition-colors duration-200 cursor-pointer"
          style={{
            backgroundColor: getBackgroundColor("about"),
            color: getTextColor("about"),
          }}
          onClick={() => handleNavClick("about", "/about")}
        >
          About
        </div>

        <a href="https://github.com/orgs/RisingSunIT" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl cursor-pointer hover:text-gray-500 transition-colors" style={{ color : isDark ? "black" : "white"}} />
        </a>
      </div>

      {/* Logo in the center */}
      <div id="divLogo" className="flex-1 flex justify-center items-center cursor-pointer transition-opacity duration-500"
        onClick={() => handleNavClick("blog", "/blog")}>
        <Logo scrollProgress={scrollProgress} />
      </div>

      <div className="h-full flex flex-col-reverse flex-grow items-center sm:flex-row">
        <a href="https://linkedin.com/in/fabian-philippczyck" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl cursor-pointer hover:text-blue-500 transition-colors" style={{ color : isDark ? "black" : "white"}} />
        </a>

        {/* Projects Tab */}
        <div
          id="divProjectTab"
          className="flex-1 h-full w-full text-center content-center text-2xl sm:text-5xl font-['Lustria'] transition-colors duration-200 cursor-pointer"
          style={{
            backgroundColor: getBackgroundColor("projects"),
            color: getTextColor("projects"),
          }}
          onClick={() => handleNavClick("projects", "/projects")}
        >
          Projects
        </div>
      </div>

      {/* for testing dark mode */}
      {/* <DarkModeToggle /> */}
    </nav>
  );
}
