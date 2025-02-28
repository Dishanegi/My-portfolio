"use client";
import React, { useState, useEffect } from "react";

const TerminalWindow = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [inputCommand, setInputCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [easterEggCounter, setEasterEggCounter] = useState(0);

  const asciiArt = {
    logo: `
     ____  _     _           
    |  _ \\(_)___| |__   __ _ 
    | | | | / __| '_ \\ / _\` |
    | |_| | \\__ \\ | | | (_| |
    |____/|_|___/_| |_|\\__,_|
    `,
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
    { text: "Initializing personal space...", delay: 500 },
    { text: asciiArt.logo, delay: 1000 },
    { text: "Welcome to Disha's Creative Terminal 🎨", delay: 1500 },
    { text: "Discover my world with these magical commands:", delay: 2000 },
    { text: "'about'     - Unveil my story", delay: 2500 },
    { text: "'skills'    - Explore my tech arsenal", delay: 3000 },
    { text: "'projects'  - Peek into my digital gallery", delay: 3500 },
    { text: "'contact'   - Let's connect!", delay: 4000 },
    { text: "'coffee'    - Buy me a virtual coffee ☕", delay: 4500 },
    { text: "'clear'     - Reset the magic", delay: 5000 },
    { text: "'surprise'  - Try your luck!", delay: 5500 },
    { text: "", delay: 6000 },
    { text: "✨ The terminal awaits your command ✨", delay: 6500 },
  ];

  const surprises = [
    "🎉 You found a hidden treasure!",
    "🌈 A wild rainbow appears!",
    "🦄 A unicorn gallops through your terminal!",
    "🎮 Ready Player One?",
    "🎨 Your terminal is now in creative mode!",
  ];

  const handleCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    let response = "";

    switch (command) {
      case "about":
        response = `${asciiArt.heart}\nHey there! I'm Disha, a Full Stack Developer who believes in crafting digital experiences that spark joy. 
                   \nWhen I'm not coding, you might find me:\n• Exploring new coffee shops ☕\n• Reading sci-fi novels 📚\n• Playing with new tech toys 🤖
                   \nMy mission? Making the web a more beautiful place, one line of code at a time! ✨`;
        break;
      case "skills":
        response = `🎯 Weaponry in my Tech Arsenal:
                   \n💻 Frontend Mastery:
                   • React & Next.js - Building magical interfaces
                   • TypeScript - Because types are friends
                   • CSS Wizardry - Making pixels dance
                   \n🛠️ Backend Sorcery:
                   • Node.js - Server-side spells
                   • Python - Data manipulation magic
                   • Java - Enterprise enchantments
                   \n🗄️ Database Wisdom:
                   • MongoDB - NoSQL adventures
                   • PostgreSQL - Relational reliability
                   \n☁️ Cloud Powers:
                   • AWS - Sky-high solutions
                   • Docker - Containerization magic
                   • Kubernetes - Orchestration mastery`;
        break;
      case "projects":
        response = `🚀 My Digital Creations:
                   \n1. 🛍️ E-commerce Wonderland
                   • A magical shopping experience
                   • Type 'project shop' for the tale
                   \n2. 💬 ChatterBox
                   • Real-time communication spells
                   • Type 'project chat' for secrets
                   \n3. 🎨 Portfolio Universe
                   • You're already here!
                   • Type 'project portfolio' to go deeper`;
        break;
      case "contact":
        response = `📫 Let's Create Magic Together:
                   \n${asciiArt.coffee}
                   \n• 📧 Summon me: your.email@example.com
                   • 🐙 GitHub Spells: github.com/yourusername
                   • 🔗 LinkedIn Portal: linkedin.com/in/yourusername
                   • 🐦 Twitter Chronicles: @yourusername`;
        break;
      case "coffee":
        response = `${asciiArt.coffee}\nAww! Thanks for offering to buy me a coffee! 
                   \nHere's a virtual cookie in return: 🍪
                   \nP.S. The real coffee button is coming soon! `;
        break;
      case "surprise":
        const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
        setEasterEggCounter(prev => prev + 1);
        response = `${randomSurprise}\n${easterEggCounter >= 3 ? "\n🎁 You've unlocked the secret theme! Type 'theme' to activate!" : ""}`;
        break;
      case "theme":
        if (easterEggCounter >= 3) {
          response = "🌟 Terminal aesthetic upgraded! (Note: This would trigger a theme change in the actual implementation)";
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
          response = `Command not found: ${command}. Type 'about', 'skills', 'projects', 'contact', or try 'surprise' for some magic! ✨`;
        }
    }
    setCommandHistory([...commandHistory, { type: "input", text: cmd }, { type: "output", text: response }]);
  };

  const getProjectDetails = (projectName) => {
    const projects = {
      shop: `🛍️ E-commerce Wonderland
             \n• Built with Next.js, TypeScript, and Stripe
             • Full-featured shopping cart with real-time updates
             • AI-powered product recommendations
             • 5000+ happy customers and counting!
             \nTech Stack: Next.js, TypeScript, Stripe, MongoDB, AWS`,
      chat: `💬 ChatterBox
             \n• Real-time messaging with WebSocket magic
             • End-to-end encryption for secure communications
             • Custom emoji system and rich media sharing
             • Supporting 1000+ concurrent users
             \nTech Stack: React, Node.js, Socket.io, PostgreSQL`,
      portfolio: `🎨 Portfolio Universe
                  \n• Interactive terminal interface (you're here!)
                  • Dynamic theme switching
                  • Easter eggs hidden throughout
                  • Mobile-responsive design
                  \nTech Stack: React, Next.js, TailwindCSS`
    };
    return projects[projectName] || "Project not found! Try 'project shop', 'project chat', or 'project portfolio'";
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
            ✨ Disha's Magical Terminal ✨
          </div>
        </div>
        
        <div className="p-6 font-mono text-sm bg-gradient-to-b from-[#0D1117] to-[#161B22] min-h-[400px]">
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

          <div className="flex items-center">
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