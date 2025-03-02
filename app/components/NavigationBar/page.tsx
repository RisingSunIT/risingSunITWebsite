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
  
    // Function to determine which section is most visible in the viewport
    const updateCurrentSection = () => {
      const sections = document.querySelectorAll("section");
      const navbarHeight = 120;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Default to blog if no section is prominent
      let maxVisibleSection = "blog";
      let maxVisibleAmount = 0;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        
        // Calculate how much of the section is visible in the viewport
        const sectionTop = Math.max(rect.top, navbarHeight);
        const sectionBottom = Math.min(rect.bottom, viewportHeight);
        const visibleAmount = Math.max(0, sectionBottom - sectionTop);
        
        if (visibleAmount > maxVisibleAmount) {
          maxVisibleAmount = visibleAmount;
          maxVisibleSection = section.id;
        }
      });
      
      // Update current section
      setCurrentSection(maxVisibleSection);
      
      // When switching to blog, force update scroll progress
      if (maxVisibleSection === "blog") {
        setScrollProgress(calculateScrollProgress());
      }
    };
    
    // Update on scroll and resize
    window.addEventListener("scroll", updateCurrentSection);
    window.addEventListener("resize", updateCurrentSection);
    
    // Initial update
    updateCurrentSection();
    
    return () => {
      window.removeEventListener("scroll", updateCurrentSection);
      window.removeEventListener("resize", updateCurrentSection);
    };
  }, []);

  const calculateScrollProgress = () => {
    const aboutSection = document.getElementById("about");
    const projectsSection = document.getElementById("projects");
    const windowHeight = window.innerHeight;
    
    if (!aboutSection || !projectsSection) return { about: 0, projects: 0 };
    
    const navbarHeight = 120; // Adjust based on actual navbar height
    
    // Get section positions relative to viewport
    const aboutRect = aboutSection.getBoundingClientRect();
    const projectsRect = projectsSection.getBoundingClientRect();
    
    // Calculate progress: 0 when section top is at viewport bottom, 1 when section top is at navbar bottom
    const viewportBottom = windowHeight;
    const transitionDistance = viewportBottom - navbarHeight;
    
    // For about section
    let aboutProgress = 0;
    if (aboutRect.top <= navbarHeight) {
      // Section is at or above navbar bottom
      aboutProgress = 1;
    } else if (aboutRect.top < viewportBottom) {
      // Section is between viewport bottom and navbar bottom
      aboutProgress = (viewportBottom - aboutRect.top) / transitionDistance;
    }
    
    // For projects section
    let projectsProgress = 0;
    if (projectsRect.top <= navbarHeight) {
      // Section is at or above navbar bottom
      projectsProgress = 1;
    } else if (projectsRect.top < viewportBottom) {
      // Section is between viewport bottom and navbar bottom
      projectsProgress = (viewportBottom - projectsRect.top) / transitionDistance;
    }
    
    // Ensure values are between 0 and 1
    aboutProgress = Math.min(1, Math.max(0, aboutProgress));
    projectsProgress = Math.min(1, Math.max(0, projectsProgress));
    
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
    const baseColor = "54, 193, 207";
    const highlightColor = isDark ? "0, 0, 0" : "255, 255, 255";
  
    // When on blog section, always use base color with full opacity
    if (currentSection === "blog") {
      return `rgba(${baseColor}, 1)`;
    }
  
    const aboutProgress = scrollProgress.about || initialProgress.about;
    const projectsProgress = scrollProgress.projects || initialProgress.projects;
  
    if (currentSection === "about") {
      return section === "about"
        ? `rgba(${highlightColor}, ${aboutProgress})`
        : `rgba(${baseColor}, ${aboutProgress})`;
    }
  
    if (currentSection === "projects") {
      return section === "projects"
        ? `rgba(${highlightColor}, ${projectsProgress})`
        : `rgba(${baseColor}, ${projectsProgress})`;
    }
  
    // Default fallback - should rarely be reached
    return `rgba(${baseColor}, 1)`;
  };

  const getTextColor = (section: string) => {
    const baseColor = isDark ? "0, 0, 0" : "255, 255, 255";
    const highlightColor = "54, 193, 207";
  
    // When on blog section, always use base color with full opacity
    if (currentSection === "blog") {
      return `rgba(${baseColor}, 1)`;
    }
  
    const aboutProgress = scrollProgress.about || initialProgress.about;
    const projectsProgress = scrollProgress.projects || initialProgress.projects;
  
    if (currentSection === "about") {
      return section === "about"
        ? `rgba(${highlightColor}, ${aboutProgress})`
        : `rgba(${baseColor}, ${aboutProgress})`;
    }
  
    if (currentSection === "projects") {
      return section === "projects"
        ? `rgba(${highlightColor}, ${projectsProgress})`
        : `rgba(${baseColor}, ${projectsProgress})`;
    }
  
    // Default fallback - should rarely be reached
    return `rgba(${baseColor}, 1)`;
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
