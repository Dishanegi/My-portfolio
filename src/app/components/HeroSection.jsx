"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  const [typingSpeed, setTypingSpeed] = useState(50);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Mark as loaded immediately
    setIsLoaded(true);
    
    const handleResize = () => {
      setTypingSpeed(window.innerWidth < 768 ? 70 : 50);
    };

    // Set initial speed
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full py-4">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8">
        <div 
          className="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left order-2 sm:order-1"
          style={{ 
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 font-black font-[var(--font-space-grotesk)]">
              Hello, I&apos;m{" "}
            </span>
            <br className="hidden sm:block" />
            <TypeAnimation
              sequence={[
                "Disha!",
                1000,
                "Cloud Engineer!",
                1000,
                "DevOps Engineer!",
                1000,
                "Data Analyst!",
                1000,
                "Backend Developer!",
                1000
              ]}
              wrapper="span"
              speed={typingSpeed}
              repeat={Infinity}
              className="font-black font-[var(--font-orbitron)]"
            />
          </h1>
          <div className="text-[#ADB7BE] space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto sm:mx-0 leading-relaxed px-4 sm:px-0 font-[var(--font-space-grotesk)]">
            <p className="first-letter:text-2xl sm:first-letter:text-3xl first-letter:font-bold first-letter:text-primary-400 sm:max-w-[90%]">
              I&apos;m just a human, not a robot (yet), who somehow manages to harmonize cloud technologies, AI, and data analytics without missing a beat.
            </p>

            <p className="italic hidden sm:block sm:max-w-[85%]">
              Just like finding the right note in a song, I believe every problem has its own rhythm—it just requires some clever adjustments to resolve it.
            </p>

            <p className="font-light sm:max-w-[80%]">
              When I&apos;m not orchestrating solutions, you&apos;ll catch me singing (mostly on key) or chasing sunrises and sunsets for that perfect spark of inspiration.
            </p>

            <p className="border-l-2 sm:border-l-4 border-primary-400 pl-3 sm:pl-6 sm:max-w-[75%] bg-gradient-to-r from-[#1c1c1c] to-transparent py-2">
              Balancing creativity with logic is my forte, though I sometimes wish debugging was as simple as skipping to the next track!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8">
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white text-center transition-all duration-300"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white text-center transition-all duration-300"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>
        <div 
          className="col-span-12 sm:col-span-4 place-self-center order-1 sm:order-2 mt-8 sm:mt-12 lg:mt-16"
          style={{ 
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[460px] relative overflow-hidden mx-auto">
            <Image
              src="/images/Disha.png"
              alt="hero image"
              className="rounded-full object-cover"
              fill
              sizes="(max-width: 640px) 200px, (max-width: 1024px) 250px, 400px"
              priority
              onLoadingComplete={() => setIsLoaded(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;