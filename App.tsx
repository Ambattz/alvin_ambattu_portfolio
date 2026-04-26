import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default App;