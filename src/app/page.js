"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import TerminalWindow from "./components/TerminalWindow";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // First approach: useLayoutEffect to force scroll to top BEFORE render
  useLayoutEffect(() => {
    // Force scroll to top immediately before painting
    window.scrollTo(0, 0);
  }, []);
  
  // Second approach: useEffect as a backup
  useEffect(() => {
    // Force scroll to top
    window.scrollTo(0, 0);
    
    // Additional technique: set body scroll position
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    // Disable scroll restoration if it exists
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Set loading to false after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-12">
        {/* Hero section should take full height of viewport minus navbar */}
        <section className="h-[calc(100vh-80px)] flex items-center">
          <HeroSection />
        </section>
        
        {/* Rest of the sections with loading state */}
        <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <SkillsSection />
          <TerminalWindow />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}