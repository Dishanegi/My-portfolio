"use client";
import { useEffect, useLayoutEffect } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import TerminalWindow from "./components/TerminalWindow";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
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
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-12">
        {/* Hero section should take full height of viewport minus navbar */}
        <section className="h-[calc(100vh-80px)] flex items-center">
          <HeroSection />
        </section>
        
        {/* Rest of the sections */}
        <SkillsSection />
        <TerminalWindow />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}