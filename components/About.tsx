import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, ChevronRight } from 'lucide-react';
import { RESUME_SUMMARY, EDUCATION_DATA, CERTIFICATIONS } from '../constants';

const About: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sections = [
    { title: "Professional Profile", shortTitle: "Profile" },
    { title: "Education", shortTitle: "Education" }
  ];
  const nextIndex = (activeIndex + 1) % sections.length;

  return (
    <section id="about" className="py-20 bg-darker min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-primary">01.</span> Professional Profile
            </h3>
            <div className="bg-card p-8 rounded-2xl shadow-xl border border-gray-800 h-[calc(100%-3.5rem)] flex flex-col">
              <div className="flex-grow flex flex-col gap-4 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-white">Frontend Tech Lead & GCP Specialist</h4>
                  <div className="flex items-center gap-2 mt-1 mb-4 text-primary font-medium">
                    <span>The Home Depot</span>
                    <span className="text-gray-400 text-sm font-normal">(via TCS)</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-justify">
                  5 years of professional experience in all-round application development. 
                  Managed a Nearshore team for one of the portfolios in TCS for The Home Depot. 
                  Excelled in managing people, as well as developing and supporting complex applications. 
                  Have received multiple awards and recognitions.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {CERTIFICATIONS.map((cert, index) => (
                  <span key={index} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                    <Award size={14} /> {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-primary">02.</span> Education
            </h3>
            <div className="bg-card p-8 rounded-2xl shadow-xl border border-gray-800 relative overflow-hidden h-[calc(100%-3.5rem)] flex flex-col gap-8">
               {/* Decorative background element */}
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <GraduationCap size={150} />
              </div>
              
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="relative z-10 font-sans">
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-primary font-medium mt-1 mb-4">{edu.institution} <span className="text-gray-400 text-sm font-normal ml-2">| {edu.date}</span></p>
                  
                  <ul className="space-y-3">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-gray-300 leading-relaxed text-justify">
                        <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex gap-3 h-[550px]">
          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              {activeIndex === 0 ? (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-2xl shadow-xl border border-gray-800 flex flex-col h-full absolute inset-0"
                >
                  <div className="p-6 flex-grow overflow-y-auto custom-scrollbar">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-gray-800 pb-4">
                      <span className="text-primary">01.</span> Professional Profile
                    </h3>
                    <div className="flex flex-col gap-4 mb-6 relative z-10">
                      <div>
                        <h4 className="text-lg font-bold text-white leading-tight">Frontend Tech Lead & GCP Specialist</h4>
                        <div className="flex flex-wrap items-center gap-2 mt-2 mb-4 text-primary font-medium text-sm">
                          <span>The Home Depot</span>
                          <span className="text-gray-400 font-normal">(via TCS)</span>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-justify text-sm">
                        5 years of professional experience in all-round application development. 
                        Managed a Nearshore team for one of the portfolios in TCS for The Home Depot. 
                        Excelled in managing people, as well as developing and supporting complex applications. 
                        Have received multiple awards and recognitions.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {CERTIFICATIONS.map((cert, index) => (
                        <span key={index} className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                          <Award size={12} /> {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-2xl shadow-xl border border-gray-800 relative overflow-hidden flex flex-col h-full absolute inset-0"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <GraduationCap size={120} />
                  </div>
                  <div className="p-6 flex-grow overflow-y-auto custom-scrollbar relative z-10">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-gray-800 pb-4">
                      <span className="text-primary">02.</span> Education
                    </h3>
                    <div className="flex flex-col gap-8">
                      {EDUCATION_DATA.map((edu, idx) => (
                        <div key={idx} className="font-sans">
                          <h4 className="text-lg font-bold text-white leading-tight">{edu.degree}</h4>
                          <p className="text-primary font-medium mt-2 mb-4 text-sm">
                            {edu.institution} <br className="hidden" /><span className="text-gray-400 font-normal">| {edu.date}</span>
                          </p>
                          
                          <ul className="space-y-3">
                            {edu.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2 text-gray-300 leading-relaxed text-justify text-sm">
                                <span className="mt-1.5 w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Vertical Next Button */}
          <button
            onClick={() => setActiveIndex(nextIndex)}
            className="flex flex-col justify-center items-center w-12 shrink-0 bg-card backdrop-blur-lg border border-gray-800 rounded-xl hover:bg-darker hover:border-gray-700 transition-all shadow-md active:scale-95"
            aria-label="Next Section"
          >
            <div className="flex-1 flex flex-col items-center justify-center pt-4 gap-2">
              <span className="text-gray-300 font-semibold tracking-widest text-xs truncate max-h-[250px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                {sections[nextIndex].title}
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

export default About;