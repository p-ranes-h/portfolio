
import React from 'react';

const Projects = () => {
  const experiences = [
    {
      company: 'Zenithbyte Innovations Pvt. Ltd.',
      role: 'Senior Software Developer',
      period: 'May 2025 – Present',
      location: 'Chennai, Tamil Nadu',
      details: [
        'Leading development of a user activity tracking module (ClarityAI) to monitor interactions and behavioral analytics.',
        'Built an event-driven architecture capturing clicks, scrolls, searches, and inactivity.',
        'Implemented a secure data pipeline with geolocation, browser/OS detection, and device fingerprinting.',
        'Designed common API wrapper featuring real-time performance monitoring and retry logic.',
        'Engineered real-time cart analytics via DOM extraction.'
      ]
    },
    {
      company: 'I-exceed Technologies Pvt. Ltd.',
      role: 'Software Developer',
      period: 'Feb 2020 – May 2025',
      location: 'Bangalore, Karnataka',
      projects: [
        {
          name: 'United Commercial Bank (Bangladesh)',
          desc: 'Developed Internet and Mobile Banking applications using React JS with CRUD operations and Loan Service API integration.'
        },
        {
          name: 'L&T Finance – Two-Wheeler Loan Journey',
          desc: 'Implemented API integrations using AJAX and used Geolocation API to plot user locations on maps.'
        },
        {
          name: 'Consumer Retail Banking – Appzillon',
          desc: 'Designed a base Internet and Mobile Banking framework with multilingual support and card application workflows.'
        },
        {
          name: 'Indian Bank Corporate',
          desc: 'Created mobile-friendly UI layouts using HTML, CSS, and Xcode for iOS with API-based fund transfers.'
        },
        {
          name: 'Central Bank of India',
          desc: 'Built profile management and KYC verification modules with PAN/AADHAR validation via eKYC API.'
        },
        {
          name: 'Grameen Koota – Unnathi',
          desc: 'Designed dashboard interfaces with role-based filtering, data visualization, and pagination logic.'
        }
      ]
    }
  ];

  return (
    <section className="animate-in slide-in-from-bottom duration-500 py-12">
      <h2 className="text-4xl font-extrabold mb-16 border-b-4 border-blue-600 w-fit pb-2">Professional Experience</h2>
      <div className="space-y-20">
        {experiences.map((exp, idx) => (
            <div key={idx} className="relative bg-white border border-slate-100 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-6 border-b border-slate-100">
                    <div>
                        <h3 className="text-3xl font-black mb-2 text-slate-900">{exp.role}</h3>
                        <p className="text-blue-600 font-extrabold text-xl mb-0">{exp.company}</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                        <span className="text-slate-500 font-bold block text-lg">{exp.period}</span>
                        <span className="text-slate-400 text-sm font-black uppercase tracking-widest">{exp.location}</span>
                    </div>
                </div>

                {exp.details && (
                    <ul className="list-disc list-outside ml-6 space-y-4 text-slate-600 mb-10 text-lg">
                        {exp.details.map((detail, i) => (
                            <li key={i} className="pl-2">{detail}</li>
                        ))}
                    </ul>
                )}

                {exp.projects && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {exp.projects.map((project, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-xl hover:border-blue-200 transition-colors flex flex-col">
                                <h4 className="text-blue-600 font-black mb-4 text-lg leading-tight">{project.name}</h4>
                                <p className="text-base text-slate-600 leading-relaxed mb-0 font-medium">{project.desc}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
