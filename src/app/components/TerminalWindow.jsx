"use client";
import React, { useState, useEffect } from "react";

const TerminalWindow = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [inputCommand, setInputCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [easterEggCounter, setEasterEggCounter] = useState(0);

  const asciiArt = {
    coffee: `
      ( (
       ) )
    ._______.
    |       |]
    \\       /
     \`-----'
    `,
    heart: `
      💗 💗
    💗     💗
      💗 💗
    `
  };

  const initialCommands = [
    { text: "Initializing digital space...", delay: 500 },
    { text: "Welcome to Disha's Digital Terminal 🚀", delay: 1000 },
    { text: "Ready to explore the tech universe? Try these commands:", delay: 1500 },
    { text: "'about'     - My story", delay: 2000 },
    { text: "'skills'    - Tech toolkit", delay: 2500 },
    { text: "'projects'  - Project showcase", delay: 3000 },
    { text: "'contact'   - Let's connect!", delay: 3500 },
    { text: "'cloud'     - Cloud expertise", delay: 4000 },
    { text: "'devops'    - DevOps magic", delay: 4500 },
    { text: "'code'      - Coding adventures", delay: 5000 },
    { text: "'clear'     - Reset terminal", delay: 5500 },
    { text: "'easter'    - Find hidden gems!", delay: 6000 },
    { text: "", delay: 6500 },
    { text: "✨ Ready to explore? Type a command!", delay: 7000 },
  ];

  const surprises = [
    "🌟 A spark of innovation appears!",
    "⚡ Lightning-fast code detected!",
    "🌪️ A whirlwind of ideas is brewing!",
    "🌠 Your terminal is now supercharged!",
    "🌈 A rainbow of possibilities appears!",
  ];

  const handleCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    let response = "";

    switch (command) {
      case "about":
        response = `${asciiArt.heart}\nHey there! I'm Disha, a tech enthusiast who loves turning complex problems into elegant solutions. 
                   \nWhen I'm not coding, you might find me:\n• Exploring new technologies 🚀\n• Solving coding puzzles 🧩\n• Contributing to open source 🌟
                   \nMy mission? Making technology work for everyone, one line of code at a time! ✨`;
        break;
      case "skills":
        response = `🎯 Tech Arsenal:
                   \n💻 Development:
                   • Full Stack Development
                   • Cloud Computing
                   • DevOps Practices
                   \n🛠️ Tools & Technologies:
                   • Modern Frameworks
                   • Version Control
                   • CI/CD Pipelines
                   \n⚡ Specialties:
                   • Problem Solving
                   • System Design
                   • Technical Writing
                   \n🌟 Soft Skills:
                   • Team Collaboration
                   • Communication
                   • Project Management`;
        break;
      case "cloud":
        response = `☁️ Cloud Journey:
                   \n• Cloud Architecture
                   • Infrastructure as Code
                   • Container Orchestration
                   • Serverless Computing
                   \n💡 Cloud Philosophy:
                   • Scalability First
                   • Security Always
                   • Cost Optimization
                   \n🎯 Cloud Goals:
                   • Building Resilient Systems
                   • Automating Everything
                   • Continuous Learning`;
        break;
      case "devops":
        response = `🔄 DevOps Magic:
                   \n• Continuous Integration
                   • Automated Deployment
                   • Infrastructure Automation
                   • Monitoring & Logging
                   \n💡 Best Practices:
                   • Version Control Everything
                   • Automate Repetitive Tasks
                   • Measure Everything
                   \n🎯 DevOps Culture:
                   • Collaboration
                   • Continuous Learning
                   • Innovation`;
        break;
      case "code":
        response = `💻 Coding Adventures:
                   \n• Clean Code Principles
                   • Design Patterns
                   • Testing Practices
                   • Code Review
                   \n💡 Coding Philosophy:
                   • Write Readable Code
                   • Document Everything
                   • Learn from Others
                   \n🎯 Code Goals:
                   • Maintainable Code
                   • Efficient Solutions
                   • Beautiful Architecture`;
        break;
      case "projects":
        response = `🚀 Project Showcase:
                   \n1. 🌐 Web Applications
                   • Modern UI/UX
                   • Responsive Design
                   • Type 'project web' for details
                   \n2. 🔄 Automation Tools
                   • Process Optimization
                   • Type 'project auto' for info
                   \n3. 🎮 Interactive Apps
                   • User Engagement
                   • Type 'project app' to explore`;
        break;
      case "contact":
        response = `📫 Let's Create Together:
                   \n${asciiArt.coffee}
                   \n• 📧 Email: dinegi@syr.edu
                   • 🐙 GitHub: github.com/dishanegi06
                   • 🔗 LinkedIn: linkedin.com/in/disha-negi
                   \nReady to build something amazing! ✨`;
        break;
      case "easter":
        const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
        setEasterEggCounter(prev => prev + 1);
        response = `${randomSurprise}\n${easterEggCounter >= 3 ? "\n🎁 You've unlocked the secret theme! Type 'theme' to activate!" : ""}`;
        break;
      case "theme":
        if (easterEggCounter >= 3) {
          response = "🌟 Terminal upgraded to awesome theme! (Note: This would trigger a theme change in the actual implementation)";
        } else {
          response = "🔒 This command is still locked! Try finding more surprises...";
        }
        break;
      case "clear":
        setCommandHistory([]);
        return;
      default:
        if (command.startsWith("project ")) {
          const projectName = command.split(" ")[1];
          response = getProjectDetails(projectName);
        } else {
          response = `Command not found: ${command}. Type 'about', 'skills', 'cloud', 'devops', 'code', or try 'easter' for some magic! ✨`;
        }
    }
    setCommandHistory([...commandHistory, { type: "input", text: cmd }, { type: "output", text: response }]);
  };

  const getProjectDetails = (projectName) => {
    const projects = {
      web: `🌐 Web Application Project
             \n• Modern, responsive design
             • Optimized performance
             • User-friendly interface
             • Cross-browser compatibility
             \nTech Stack: React, Next.js, TailwindCSS`,
      auto: `🔄 Automation Project
             \n• Process optimization
             • Time-saving solutions
             • Error reduction
             • Increased efficiency
             \nTech Stack: Python, Node.js, Shell Scripting`,
      app: `🎮 Interactive Application
                  \n• Engaging user experience
                  • Real-time features
                  • Smooth animations
                  • Mobile-first approach
                  \nTech Stack: React Native, Firebase, Redux`
    };
    return projects[projectName] || "Project not found! Try 'project web', 'project auto', or 'project app'";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputCommand.trim()) {
      handleCommand(inputCommand);
      setInputCommand("");
    }
  };

  useEffect(() => {
    if (currentCommand < initialCommands.length) {
      const timer = setTimeout(() => {
        setCurrentCommand(prev => prev + 1);
      }, initialCommands[currentCommand].delay);
      return () => clearTimeout(timer);
    }
  }, [currentCommand]);

  return (
    <div className="relative py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#1a1b26] rounded-full px-6 py-2 flex items-center space-x-2 shadow-lg border border-[#30363d]">
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-gray-300 text-sm font-semibold">Status: Crafting Digital Magic ✨</span>
      </div>

      <div className="w-full max-w-3xl mx-auto bg-[#0D1117] rounded-lg overflow-hidden shadow-2xl border border-[#30363d] mt-8">
        <div className="flex items-center px-4 py-3 bg-[#161B22] border-b border-[#30363d] relative">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-lg"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-lg"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-lg"></div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 text-sm text-[#8B949E] font-medium">
            ✨ Disha&apos;s Magical Terminal ✨
          </div>
        </div>
        
        <div className="p-6 font-mono text-sm bg-gradient-to-b from-[#0D1117] to-[#161B22] h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#30363d] scrollbar-track-[#0D1117]">
          <div className="space-y-2">
            {initialCommands.slice(0, currentCommand + 1).map((command, index) => (
              <div key={index} className="mb-2">
                <span className="text-[#27C93F] font-bold">✨</span>
                <span className="text-[#8B949E]"> ~/disha</span>
                <span className="text-white"> $ </span>
                <span className="text-[#C9D1D9] whitespace-pre-line">{command.text}</span>
              </div>
            ))}

            {commandHistory.map((item, index) => (
              <div key={`history-${index}`} className="mb-2">
                {item.type === "input" ? (
                  <>
                    <span className="text-[#27C93F] font-bold">✨</span>
                    <span className="text-[#8B949E]"> ~/disha</span>
                    <span className="text-white"> $ </span>
                    <span className="text-[#C9D1D9]">{item.text}</span>
                  </>
                ) : (
                  <span className="text-[#C9D1D9] whitespace-pre-line">{item.text}</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center mt-4">
            <span className="text-[#27C93F] font-bold">✨</span>
            <span className="text-[#8B949E]"> ~/disha</span>
            <span className="text-white"> $ </span>
            <input
              type="text"
              value={inputCommand}
              onChange={(e) => setInputCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none border-none text-[#C9D1D9] ml-2"
              autoFocus
            />
          </div>
        </div>

        <div className="px-4 py-2 bg-[#161B22] border-t border-[#30363d] flex justify-between items-center text-xs text-[#8B949E]">
          <span>✨ Magic Level: 100%</span>
          <span>🌟 Enchanted Connection</span>
          <span>⚡ Powered by Dreams</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;