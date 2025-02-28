"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FaPython, 
  FaReact, 
  FaNode, 
  FaAws, 
  FaDocker, 
  FaGitAlt 
} from "react-icons/fa";
import { 
  SiKubernetes, 
  SiMongodb, 
  SiPostgresql, 
  SiJavascript,
  SiTerraform,
  SiAnsible,
  SiRedhat  // Changed from SiOpenshift to SiRedhat for OpenShift
} from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";
import { AiOutlineCloudServer } from "react-icons/ai";

const SkillsSection = () => {
  const skills = [
    { name: "Python", icon: <FaPython className="text-[#3776AB] w-12 h-12" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] w-12 h-12" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB] w-12 h-12" /> },
    { name: "Node.js", icon: <FaNode className="text-[#339933] w-12 h-12" /> },
    { name: "AWS", icon: <FaAws className="text-[#FF9900] w-12 h-12" /> },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED] w-12 h-12" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5] w-12 h-12" /> },
    { name: "OpenShift", icon: <SiRedhat className="text-[#EE0000] w-12 h-12" /> }, // Using SiRedhat
    { name: "Terraform", icon: <SiTerraform className="text-[#7B42BC] w-12 h-12" /> },
    { name: "Ansible", icon: <SiAnsible className="text-[#EE0000] w-12 h-12" /> },
    { name: "DevOps", icon: <BiGitBranch className="text-[#FC6D26] w-12 h-12" /> },
    { name: "CI/CD", icon: <AiOutlineCloudServer className="text-[#FF9900] w-12 h-12" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] w-12 h-12" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791] w-12 h-12" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032] w-12 h-12" /> },
    { name: "REST APIs", icon: <TbApi className="text-[#FF9900] w-12 h-12" /> },
    { name: "Data Analytics", icon: <BsDatabase className="text-[#47A248] w-12 h-12" /> },
  ];

  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="w-full overflow-hidden py-12">
      <div className="relative">
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex gap-8 px-4"
            animate={{
              x: [0, -3000],
            }}
            transition={{
              x: {
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 
                border border-white/10 shadow-xl hover:shadow-2xl hover:scale-110 
                transition-all duration-300 flex flex-col items-center gap-3"
              >
                {skill.icon}
                <span className="text-white/80 text-base font-medium">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;