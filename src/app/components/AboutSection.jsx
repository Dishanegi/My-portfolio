"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white relative" id="about">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] opacity-50"></div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 relative">
        <div className="relative ml-2 sm:ml-8 lg:ml-12">
          <div className="relative rounded-[2rem] overflow-hidden">
            <Image 
              src="/images/image.png" 
              alt="Description of image" 
              width={400} 
              height={400}
              className="transform transition duration-500 hover:scale-105 rounded-[2rem]"
            />
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full pl-4 sm:pl-8">
          <div className="max-w-[90%]">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-6">About Me</h2>
            <div className="space-y-4">
              <p className="text-base lg:text-lg text-left leading-relaxed text-[#ADB7BE] first-letter:text-2xl first-letter:font-bold first-letter:text-primary-400">
                I work in Cloud and Software Development and like to develop efficient 
                solutions that scale. I have knowledge of AWS cloud platforms, JavaScript, 
                Python, React, Docker, Kubernetes, and multiple database platforms.
              </p>

              <p className="text-base lg:text-lg text-left leading-relaxed text-[#ADB7BE] italic">
                I specialize in microservices architecture, serverless architectures, 
                and optimizing ETL processes. I thrive in team settings and like to 
                lead development teams to deliver key projects successfully.
              </p>

              <p className="text-base lg:text-lg text-left leading-relaxed text-[#ADB7BE] border-l-2 border-primary-400 pl-4 bg-gradient-to-r from-[#1c1c1c] to-transparent py-2">
                I learn new things quickly, pay close attention to detail, and am enthusiastic about solving complex technical problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
