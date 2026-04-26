import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cloud, Database, Cpu, Globe, ChevronRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

// Helper to map skill names to SimpleIcons slugs
const getIconSlug = (skill: string) => {
  const map: Record<string, string> = {
    "React.js": "react",
    "React Query": "reactquery",
    "Next.js": "nextdotjs",
    "Node.js": "nodedotjs",
    "Express.js": "express",
    "Google Cloud (GCP)": "googlecloud",
    "HTML5 & CSS3": "html5",
    "Ant Design": "antdesign",
    "Tailwind/Bootstrap": "tailwindcss",
    "C/C++": "cplusplus",
    "GitHub Actions": "githubactions",
    "GitHub Advanced Security": "github",
    "GitHub Copilot": "githubcopilot",
    "RESTful APIs": "openapiinitiative",
    "Cloud Run": "googlecloud",
    "Cloud Functions": "googlecloud",
    "BigQuery": "googlebigquery",
    "Vertex AI": "google",
    "Gen AI (Apps & Agents)": "google",
    "Agentic AI": "probot", // Proxy
    "MCP Protocol": "mqtt", // Proxy
    "Micro Frontends": "webpack", // Proxy
    "Module Federation": "webpack",
    "COBOL": "ibm", 
    "TypeScript": "typescript",
    "Redux": "redux",
    "AG Grid": "aggrid", 
    "Storybook": "storybook",
    "Cypress": "cypress",
    "Jest": "jest",
    "Zustand": "react", // Proxy
    "WebSockets": "socketdotio",
    "GKE": "kubernetes",
    "Docker": "docker",
    "Spinnaker": "spinnaker",
    "Vite": "vite",
    "Webpack": "webpack",
    "Spring Boot": "springboot",
    "Microservices": "dapr", // Proxy
    "SQL": "postgresql",
    "MongoDB": "mongodb",
    "Google BigQuery": "googlebigquery",
    "Oracle DB": "oracle",
    "Firebase": "firebase",
    "PostgreSQL": "postgresql",
    "Python": "python",
    "Java": "openjdk",
    "JavaScript (ES6+)": "javascript",
  };

  if (map[skill]) return map[skill];
  return skill.toLowerCase()
    .replace(/[\s\/\(\)]/g, '')
    .replace('js', 'dotjs')
    .replace('.', 'dot');
};

const getCategoryIcon = (title: string, isActive: boolean = false) => {
  if (title.includes('Frontend')) return <Code size={24} strokeWidth={isActive ? 2.5 : 2} />;
  if (title.includes('Cloud')) return <Cloud size={24} strokeWidth={isActive ? 2.5 : 2} />;
  if (title.includes('Backend')) return <Database size={24} strokeWidth={isActive ? 2.5 : 2} />;
  if (title.includes('AI')) return <Cpu size={24} strokeWidth={isActive ? 2.5 : 2} />;
  return <Globe size={24} strokeWidth={isActive ? 2.5 : 2} />;
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(SKILL_CATEGORIES[0].title);

  const activeCategoryData = SKILL_CATEGORIES.find(c => c.title === activeCategory) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-20 bg-dark relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-6xl mx-auto items-stretch h-full">
          {/* Vertical Tabs (Desktop only) */}
          <div className="hidden lg:flex w-1/3 flex-col gap-4 shrink-0">
            {SKILL_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.title;
              return (
                <button
                  key={category.title}
                  onClick={() => setActiveCategory(category.title)}
                  className={`group relative flex items-center justify-between p-5 rounded-2xl transition-all duration-300 text-left border ${
                    isActive 
                      ? 'bg-primary/10 border-primary/50 shadow-[0_0_20px_rgba(16,185,129,0.15)] text-white' 
                      : 'bg-darker/60 border-gray-800 text-gray-400 hover:bg-darker hover:border-gray-700 hover:text-gray-200 shadow-md hover:shadow-xl hover:-translate-y-0.5'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator" 
                      className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-r-md" 
                    />
                  )}
                  <div className="flex items-center gap-4 relative z-10 w-full">
                    <div className={`p-2.5 rounded-xl transition-all duration-300 ${isActive ? 'bg-primary text-darker shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-card text-gray-400 group-hover:text-gray-200 group-hover:bg-gray-800'}`}>
                      {getCategoryIcon(category.title, isActive)}
                    </div>
                    <span className="font-bold text-lg xl:text-xl tracking-wide whitespace-normal">{category.title}</span>
                  </div>
                  <ChevronRight 
                    size={20} 
                    className={`transition-all duration-300 ${isActive ? 'text-primary rotate-0 translate-x-0 opacity-100' : 'text-gray-600 -translate-x-4 opacity-0 group-hover:opacity-50 group-hover:translate-x-0'}`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Horizontal Tray / Content Area */}
          <div className="w-full lg:w-2/3 flex gap-3 relative min-h-[450px] lg:min-h-0 lg:flex-1">
            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategoryData.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="bg-card/70 backdrop-blur-lg rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-800/80 shadow-2xl h-full flex flex-col relative lg:absolute lg:inset-0 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                  <div className="flex items-center gap-4 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-800 relative z-10">
                    <div className="p-2 md:p-3 bg-primary/10 rounded-xl text-primary shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                       {getCategoryIcon(activeCategoryData.title, true)}
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-white tracking-wide">
                      {activeCategoryData.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3 md:gap-4 align-top place-content-start relative z-10 w-full overflow-y-auto pb-4 custom-scrollbar">
                  {activeCategoryData.skills.map((skill, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.25, delay: index * 0.04 }}
                      key={skill}
                      className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-5 md:py-3.5 rounded-xl bg-darker border border-gray-700/80 hover:border-primary/60 hover:bg-[#1a212c] hover:-translate-y-1.5 transition-all duration-300 group shadow-md hover:shadow-[0_10px_20px_-10px_rgba(16,185,129,0.2)]"
                      title={skill}
                    >
                      <div className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center shrink-0">
                        <img 
                          src={`https://cdn.simpleicons.org/${getIconSlug(skill)}/10b981`} 
                          className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity filter group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                          alt=""
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            (e.target as HTMLImageElement).nextElementSibling?.classList.add('ml-0');
                          }}
                        />
                      </div>
                      <span className="text-gray-300 text-xs md:text-base font-semibold truncate group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Next Category Button */}
            <button
              onClick={() => {
                const currentIndex = SKILL_CATEGORIES.findIndex(c => c.title === activeCategory);
                const nextIndex = (currentIndex + 1) % SKILL_CATEGORIES.length;
                setActiveCategory(SKILL_CATEGORIES[nextIndex].title);
              }}
              className="lg:hidden flex flex-col justify-center items-center w-12 shrink-0 bg-card backdrop-blur-lg border border-gray-800 rounded-2xl hover:bg-darker hover:border-gray-700 transition-all shadow-md active:scale-95"
              aria-label="Next Skill Category"
            >
              <div className="flex-1 flex flex-col items-center justify-center pt-4 gap-2">
                <span className="text-gray-300 font-semibold tracking-widest text-xs truncate max-h-[200px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  {SKILL_CATEGORIES[(SKILL_CATEGORIES.findIndex(c => c.title === activeCategory) + 1) % SKILL_CATEGORIES.length].title}
                </span>
                <span className="text-gray-500 font-bold tracking-[0.2em] uppercase text-[10px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Next</span>
              </div>
              <div className="pb-4 pt-4">
                <ChevronRight size={20} className="text-primary animate-pulse" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;