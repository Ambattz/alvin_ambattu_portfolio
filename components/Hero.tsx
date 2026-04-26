import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Download, Bot, Sparkles, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  // Use string path relative to the root (index.html) because we cannot import non-JS files in this environment
  const profileImage = "/assets/hero-image.png"; 
  
  const techStack = [
    { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/646CFF' },
    { name: 'Javascript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Java', icon: 'https://img.icons8.com/?size=100&id=lTKW3iI3wIT0&format=png&color=000000' },
    { name: 'Google Cloud', icon: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
    { name: 'Cypress', icon: 'https://cdn.simpleicons.org/cypress/69D3A7' },
    { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot/6DB33F' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/ffffff' },
    { name: 'Gen AI', icon: Sparkles, isComponent: true, color: 'text-purple-400' },
    { name: 'Agentic AI', icon: Bot, isComponent: true, color: 'text-emerald-400' },
    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS', icon: 'https://cdn.simpleicons.org/css/1572B6' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
    { name: 'Copilot', icon: 'https://cdn.simpleicons.org/githubcopilot/ffffff' },
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  ]; 

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 bg-darker">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <h2 className="text-lg md:text-xl font-semibold text-primary mb-4 tracking-wide uppercase flex items-center justify-center md:justify-start gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Hello, I am
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Alvin <br className="hidden md:block" /> Ambattu
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
              Frontend Tech Lead <span className="text-primary">&</span> GCP Specialist
            </h3>
            <p className="max-w-lg mx-auto md:mx-0 text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
              Delivering scalable, high-performance frontend solutions and modernizing enterprise applications.
              Specializing in React.js, Micro Frontends, and Google Cloud Platform.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a 
                href={SOCIAL_LINKS.find(l => l.platform === 'LinkedIn')?.url}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-primary hover:bg-green-700 text-white font-medium rounded-full transition-all flex items-center gap-2 shadow-lg shadow-primary/25 hover:scale-105"
              >
                <Linkedin size={30} /> LinkedIn
              </a>
              <a 
                href={SOCIAL_LINKS.find(l => l.platform === 'Credly')?.url}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-card hover:bg-gray-700 text-white font-medium rounded-full transition-all flex items-center gap-2 border border-gray-600 hover:border-gray-400 hover:scale-105"
              >
                <img src={SOCIAL_LINKS.find(l => l.platform === 'Credly')?.icon} className="w-14 h-12 object-contain" alt="Credly" />
              </a>
              <a 
                href="/assets/resume-f6.pdf" 
                download="Alvin_Ambattu_Resume.pdf"
                className="px-6 py-3  bg-primary hover:bg-green-700 text-white font-medium rounded-full transition-all flex items-center gap-2 shadow-lg shadow-primary/25 hover:scale-105"
              >
                <Download size={30} /> Resume
              </a>
            </div>
          </motion.div>

          {/* Photo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center md:justify-end relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Spinning Ring */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border-2 border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-full blur-3xl opacity-50"></div>
              
              {/* Main Image Container */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-full border-4 border-gray-800 overflow-hidden shadow-2xl z-10 bg-darker"
              >
                <img 
                  src={profileImage} 
                  alt="Alvin George Ambattu" 
                  className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    // Robust fallback if image path is incorrect
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Alvin+George+Ambattu&background=059669&color=fff&size=512";
                  }}
                />
              </motion.div>
              
              {/* Orbiting Tech Badges */}
              {/* React */}
              <motion.div 
                className="absolute -right-6 top-[50%] -translate-y-1/2 bg-darker p-3 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src="https://cdn.simpleicons.org/react/61DAFB" className="w-8 h-8" alt="React" />
              </motion.div>
              
              {/* GitHub */}
              <motion.div 
                className="absolute -right-4 top-[30%] -translate-x-1/2 bg-darker p-2 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <img src="https://cdn.simpleicons.org/github/ffffff" className="w-6 h-6" alt="GitHub" />
              </motion.div>

              {/* Cypress */}
              <motion.div 
                className="absolute -right-0 top-[10%] bg-darker p-2 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
                transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              >
                <img src="https://cdn.simpleicons.org/cypress/69D3A7" className="w-6 h-6" alt="Cypress" />
              </motion.div>

              {/* JS */}
              <motion.div 
                className="absolute right-[15%] -top-2 bg-darker p-3 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <img src="https://cdn.simpleicons.org/javascript/F7DF1E" className="w-6 h-6" alt="JS" />
              </motion.div>

              {/* Next.js */}
              <motion.div 
                className="absolute right-[35%] -top-6 bg-darker p-2 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              >
                <img src="https://cdn.simpleicons.org/nextdotjs/ffffff" className="w-6 h-6" alt="Next.js" />
              </motion.div>

              {/* TypeScript */}
              <motion.div 
                className="absolute left-[35%] -top-6 bg-darker p-3 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <img src="https://cdn.simpleicons.org/typescript/3178C6" className="w-6 h-6" alt="TypeScript" />
              </motion.div>

              {/* Node.js */}
              <motion.div 
                className="absolute left-[15%] -top-2 bg-darker p-2 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <img src="https://cdn.simpleicons.org/nodedotjs/339933" className="w-6 h-6" alt="Node.js" />
              </motion.div>

              {/* HTML5 */}
              <motion.div 
                className="absolute left-1 top-[10%] bg-darker p-2 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, 10, 0], x: [0, -4, 0] }}
                transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
              >
                <img src="https://cdn.simpleicons.org/html5/E34F26" className="w-6 h-6" alt="HTML5" />
              </motion.div>

              {/* GCP */}
              <motion.div 
                className="absolute -left-6 top-[50%] -translate-y-1/2 bg-darker p-3 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <img src="https://cdn.simpleicons.org/googlecloud/4285F4" className="w-8 h-8" alt="GCP" />
              </motion.div>

              {/* Git */}
              <motion.div 
                className="absolute -left-4 top-[31%] -translate-y-1/2 bg-darker p-3 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <img src="https://cdn.simpleicons.org/git/F05032" className="w-6 h-6" alt="Git" />
              </motion.div>

              {/* CSS */}
              <motion.div 
                className="absolute -left-2 bottom-[13%] bg-darker p-2 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, -10, 0], x: [0, -6, 0] }}
                transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              >
                <img src="https://cdn.simpleicons.org/css/1572B6" className="w-6 h-6" alt="CSS" />
              </motion.div>

              {/* Python */}
              <motion.div 
                className="absolute left-[15%] -bottom-2 bg-darker p-2 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              >
                <img src="https://cdn.simpleicons.org/python/3776AB" className="w-6 h-6" alt="Python" />
              </motion.div>

              {/* Gen AI */}
              <motion.div 
                className="absolute left-[35%] -bottom-6 bg-darker p-2 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
              >
                <Sparkles className="w-6 h-6 text-purple-400" />
              </motion.div>

              {/* Vite */}
              <motion.div 
                className="absolute right-[35%] -bottom-6 bg-darker p-2 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
              >
                <img src="https://cdn.simpleicons.org/vite/646CFF" className="w-6 h-6" alt="Vite" />
              </motion.div>

              {/* Tailwind CSS */}
              <motion.div 
                className="absolute right-[15%] -bottom-2 bg-darker p-2 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" className="w-6 h-6" alt="Tailwind" />
              </motion.div>

              {/* Copilot */}
              <motion.div 
                className="absolute -right-2 bottom-[13%] bg-darker p-2 rounded-full border border-gray-700 shadow-xl z-20"
                animate={{ y: [0, 8, 0], x: [0, 5, 0] }}
                transition={{ duration: 5.7, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
              >
                <img src="https://cdn.simpleicons.org/githubcopilot/ffffff" className="w-6 h-6" alt="Copilot" />
              </motion.div>


            </div>
          </motion.div>

        </div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-darker/50 backdrop-blur-sm border-t border-gray-800/50 py-6">
        <motion.div
          className="flex gap-16 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-400 font-medium px-4">
              {tech.isComponent ? (
                <tech.icon className={`w-6 h-6 ${tech.color}`} />
              ) : (
                <img src={tech.icon as string} alt={tech.name} className="w-6 h-6" />
              )}
              <span className="text-sm tracking-wider">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;