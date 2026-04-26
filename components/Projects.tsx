import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { FolderGit2, ChevronRight } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = PROJECTS_DATA[activeIndex];
  const nextIndex = (activeIndex + 1) % PROJECTS_DATA.length;
  const nextProject = PROJECTS_DATA[nextIndex];

  return (
    <section id="projects" className="py-20 bg-dark min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Desktop View (Grid) */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              variants={item}
              key={idx}
              className="group bg-card rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-primary/50 transition-all flex flex-col h-full hover:-translate-y-2 duration-300"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-darker rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                    <FolderGit2 size={24} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-gray-400 text-sm leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>

              <div className="px-6 py-4 bg-darker/50 border-t border-gray-800 mt-auto h-28 flex items-center">
                <div className="flex flex-wrap gap-2 content-center">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View */}
        <div className="md:hidden flex gap-3 h-[500px]">
          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="group bg-card rounded-xl overflow-hidden shadow-lg border border-gray-800 flex flex-col h-full absolute inset-0"
              >
                <div className="p-6 flex-grow overflow-y-auto custom-scrollbar">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-darker rounded-lg text-primary">
                      <FolderGit2 size={24} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 text-primary">
                    {activeProject.name}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    {activeProject.description.map((desc, i) => (
                      <p key={i} className="text-gray-400 text-sm leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 content-center pb-2">
                    {activeProject.tech.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Vertical Next Button */}
          <button
            onClick={() => setActiveIndex(nextIndex)}
            className="flex flex-col justify-center items-center w-12 shrink-0 bg-card backdrop-blur-lg border border-gray-800 rounded-xl hover:bg-darker hover:border-gray-700 transition-all shadow-md active:scale-95"
            aria-label="Next Project"
          >
            <div className="flex-1 flex flex-col items-center justify-center pt-4 gap-2">
              <span className="text-gray-300 font-semibold tracking-widest text-xs truncate max-h-[250px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                {nextProject.name}
              </span>
              <span className="text-gray-500 font-bold tracking-[0.2em] uppercase text-[10px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Next</span>
            </div>
            <div className="pb-4 pt-4">
              <ChevronRight size={20} className="text-primary animate-pulse" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;