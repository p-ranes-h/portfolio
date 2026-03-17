
import React from 'react';

const About = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering (B.E.) – Computer Science & Engineering',
      institution: 'Sri Shakthi Institute of Engineering and Technology (Anna University)',
      period: '2016 – 2020',
    },
    {
      degree: 'HSC & SSLC',
      institution: 'Perks Matriculation Higher Secondary School',
      period: '2013 – 2016',
    }
  ];

  const skills = {
    "Programming": "JavaScript (ES6), jQuery, AJAX",
    "Frontend": "React JS (Hooks – useState, useEffect, useContext, useRef, useParams)",
    "Web Technologies": "HTML 5, CSS 3, Bootstrap, Semantic UI",
    "API Integration": "REST API, HTTP Services, AJAX Requests",
    "Version Control": "Git, GitHub",
    "Tools": "Postman, Xcode (iOS), VS Code",
    "Concepts": "Responsive Design, Geolocation API, Form Validation, Localization, Accessibility"
  };

  return (
    <div className="animate-in fade-in duration-500">
      <section className="py-12">
        <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-blue-600 w-fit pb-2">Education</h2>
        <div className="space-y-10">
            {education.map((edu, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                    <span className="text-sm font-black text-blue-600 mb-2 block uppercase tracking-widest">{edu.period}</span>
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-lg text-slate-500 font-semibold">{edu.institution}</p>
                </div>
            ))}
        </div>
      </section>

      <section className="py-12 border-t border-slate-100 mt-12">
        <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-blue-600 w-fit pb-2">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="group">
                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{category}</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">{items}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default About;
