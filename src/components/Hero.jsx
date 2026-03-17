
import React from 'react';
import praneshImg from '../assets/pranesh.jpeg';

const Hero = ({ setActiveSection }) => {
  return (
    <section id="home" className="hero-section animate-in">
      <div className="hero-container">
        {/* Profile Image */}
        <div className="profile-img-wrapper">
          <img 
            src={praneshImg} 
            alt="Pranesh S" 
            className="profile-img"
          />
        </div>

        <div className="hero-text-content">
          <h1 className="hero-name">PRANESH S</h1>
          <h2 className="hero-title">Senior Software Developer</h2>
        </div>
      </div>

      {/* Summary */}
      <div className="hero-summary-container">
        <p className='max-w-3xl text-xl leading-relaxed mb-12 text-slate-600 font-medium'>
          Results-driven <span className="text-slate-900 font-bold">Senior Software Developer</span> with over <span className="text-slate-900 font-bold">5+ years</span> of experience. 
          Highly skilled in <span className="text-blue-600 font-bold">React JS</span>, <span className="text-blue-600 font-bold">JavaScript</span>, and <span className="text-blue-600 font-bold">enterprise API integration</span> with a strong focus on 
          performance and security. Specializing in retail and corporate banking solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-6">
          <button 
            onClick={() => setActiveSection('experience')}
            className="btn-primary"
          >
            View Experience
          </button>
          <button 
            onClick={() => setActiveSection('contact')}
            className="btn-secondary"
          >
            Contact Me
          </button>
          <button 
            onClick={() => setActiveSection('resume')}
            className="btn-secondary"
          >
            Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;