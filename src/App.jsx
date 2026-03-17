
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
      console.log(`%c 🚀 Navigation Change: ${activeSection.toUpperCase()}`, "color: #ff4d5a; font-weight: bold; font-size: 12px;");
    }, [activeSection]);
  const renderSection = () => {
    switch(activeSection) {
      case 'home': return <Hero setActiveSection={setActiveSection} />;
      case 'experience': return <Projects />;
      case 'education': return <About />;
      case 'resume': return <Resume />;
      case 'contact': return <Contact />;
      default: return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar className="fixed top-0 left-0 right-0 z-50" activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="max-w-[1000px] mx-auto bg-white pt-24 min-h-[calc(100vh-80px)]">
        {renderSection()}
      </main>
      
      {/* <footer className="py-12 text-center border-t border-border bg-slate-50">
        <p className="text-slate-900 font-extrabold mb-1">
          Pranesh S
        </p>
        <p className="text-slate-500 text-sm font-medium">
          Senior Software Developer • 5+ Years Experience
        </p>
        <p className="text-[10px] text-slate-400 mt-6 uppercase tracking-[0.2em] font-bold">
          &copy; {new Date().getFullYear()} • Section-Based Professional Portfolio
        </p>
      </footer> */}
    </div>
  );
}

export default App;
