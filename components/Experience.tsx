import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Don't update scroll active index if we're on mobile view
      if (window.innerWidth < 768) return;
      
      if (!scrollRef.current) return;
      const containerRect = scrollRef.current.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (card) {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distance = Math.abs(containerCenter - cardCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll, { passive: true });
      handleScroll();
      const timeoutId = setTimeout(handleScroll, 500);
      
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (activeIndex > 0) {
      cardRefs.current[activeIndex - 1]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (activeIndex < EXPERIENCE_DATA.length - 1) {
      cardRefs.current[activeIndex + 1]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const activeMobileExp = EXPERIENCE_DATA[mobileActiveIndex];
  const nextMobileIndex = (mobileActiveIndex + 1) % EXPERIENCE_DATA.length;
  const nextMobileExp = EXPERIENCE_DATA[nextMobileIndex];

  return (
    <section id="experience" className="py-20 bg-darker min-h-[calc(100vh-4rem)] flex flex-col justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <div className="hidden md:flex items-center text-gray-500 text-sm animate-pulse">
            <ChevronLeft size={16} />
            <span className="mx-2">Swipe or scroll to explore</span>
            <ChevronRight size={16} />
          </div>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:block relative group">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 bg-dark p-2 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-primary hover:bg-card shadow-lg opacity-0 group-hover:opacity-100 transition-all focus:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 bg-dark p-2 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-primary hover:bg-card shadow-lg opacity-0 group-hover:opacity-100 transition-all focus:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={scrollRef}
            className="flex flex-row overflow-x-auto gap-6 pt-4 pb-12 snap-x snap-mandatory scrollbar-hide hide-scrollbar w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Spacer left */}
            <div className="min-w-[calc(50%-225px-24px)] lg:min-w-[calc(50%-250px-24px)] flex-shrink-0" aria-hidden="true" />

            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`w-full min-w-[450px] lg:min-w-[500px] max-w-[600px] snap-center flex-shrink-0 transition-all duration-500 opacity-100 blur-none scale-100 ${
                  activeIndex === index ? 'opacity-100 blur-none scale-100' : 'opacity-40 blur-[2px] scale-95 cursor-pointer'
                }`}
                onClick={() => {
                  if (activeIndex !== index && window.innerWidth >= 768) {
                    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                  }
                }}
              >
                <div className="bg-card p-6 h-full rounded-xl shadow-xl border border-gray-800 hover:border-primary/50 transition-all hover:-translate-y-2 duration-300 flex flex-col">
                  <div className="flex flex-col mb-4">
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <span className="text-secondary text-xs font-bold uppercase tracking-wider">
                        {exp.company}
                      </span>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {exp.types?.map((type, tdx) => (
                          <span key={tdx} className={`px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap ${type === 'management' ? 'bg-blue-900/30 text-blue-400' : 'bg-purple-900/30 text-purple-400'}`}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    {exp.grade && <h4 className="text-md font-semibold text-gray-400 mt-1">{exp.grade}</h4>}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6 border-b border-gray-800 pb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-3 flex-grow">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                        <span className="leading-relaxed text-justify">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
            
            {/* Spacer right */}
            <div className="min-w-[calc(50%-225px-24px)] lg:min-w-[calc(50%-250px-24px)] flex-shrink-0" aria-hidden="true" />
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex gap-3 h-[600px] max-h-[75vh]">
          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileActiveIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-xl shadow-xl border border-gray-800 flex flex-col h-full absolute inset-0"
              >
                <div className="p-5 flex-grow overflow-y-auto custom-scrollbar">
                  <div className="flex flex-col mb-4">
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <span className="text-secondary text-xs font-bold uppercase tracking-wider">
                        {activeMobileExp.company}
                      </span>
                      <div className="flex flex-wrap gap-1 justify-end">
                        {activeMobileExp.types?.map((type, tdx) => (
                          <span key={tdx} className={`px-1.5 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap ${type === 'management' ? 'bg-blue-900/30 text-blue-400' : 'bg-purple-900/30 text-purple-400'}`}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">{activeMobileExp.role}</h3>
                    {activeMobileExp.grade && <h4 className="text-sm font-semibold text-gray-400 mt-1">{activeMobileExp.grade}</h4>}
                  </div>
                  
                  <div className="flex flex-col gap-2 text-xs text-gray-500 mb-4 border-b border-gray-800 pb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-primary" />
                      {activeMobileExp.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-primary" />
                      {activeMobileExp.location}
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {activeMobileExp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-300 text-[13px] leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                        <span className="text-justify">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Vertical Next Button */}
          <button
            onClick={() => setMobileActiveIndex(nextMobileIndex)}
            className="flex flex-col justify-center items-center w-12 shrink-0 bg-card backdrop-blur-lg border border-gray-800 rounded-xl hover:bg-darker hover:border-gray-700 transition-all shadow-md active:scale-95"
            aria-label="Next Experience"
          >
            <div className="flex-1 flex flex-col items-center justify-center pt-4 gap-2">
              <span className="text-gray-300 font-semibold tracking-widest text-xs truncate max-h-[250px]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                {nextMobileExp.period}
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

export default Experience;
