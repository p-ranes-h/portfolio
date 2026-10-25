import React from 'react';

const Projects = () => {
  const experiences = [
    {
      company: 'CreditAccess Grameen Bank',
      role: 'Deputy Manager',
      work: 'Unnathi – NeSL Digital e-Sign Integration',
      period: 'May 2026 – Present',
      location: 'Bangalore, Karnataka',
      details: [
        'Gathered and analysed project requirements for the Unnathi digital lending platform, coordinating directly with the National e-Governance Services Limited (NeSL) team.',
        'Integrated NeSL APIs to securely collect borrower details and transmit them to the NeSL portal for processing.',
        'Engineered a seamless in-app navigation flow that redirects users to the NeSL website for Aadhaar-based e-sign authentication.',
        'Fetched digitally signed loan agreements post-verification and rendered them in-app for instant review.',
        'Implemented a one-click secure document download feature, enabling borrowers to save their signed agreements.',
        'Ensured end-to-end compliance with NeSL API specifications, handling error states and timeout edge cases.'
      ]
    },
    {
      company: 'Zenithbyte Innovations Pvt. Ltd.',
      role: 'Senior Software Developer',
      work: 'ClarityAI – User Activity Tracking Module',
      period: 'May 2025 – May 2026',
      location: 'Chennai, Tamil Nadu',
      details: [
        'Led development of a user activity tracking module (ClarityAI) to monitor interactions and behavioral analytics.',
        'Built an event-driven architecture capturing clicks, scrolls, searches, hover hesitations, and inactivity signals.',
        'Implemented a secure, anonymized data pipeline with geolocation, browser/OS detection, and device fingerprinting.',
        'Designed a common API wrapper featuring real-time performance monitoring, retry logic, and circular tracking prevention.',
        'Engineered real-time cart analytics capturing product and transaction data via DOM extraction.',
        'Added Text-to-Speech feedback and accessibility enhancements to improve usability.'
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
          desc: 'Designed dashboard interfaces with role-based filtering, data visualization, and pagination logic for the Unnathi lending platform.'
        }
      ]
    }
  ];

  return (
    <section className="animate-in slide-in-from-bottom duration-500 py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-16 border-b-4 border-blue-600 w-fit pb-2">Professional Experience</h2>
      <div className="space-y-16">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm">
            {/* Header Section: Company & Role */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-2xl font-black text-slate-900">{exp.company}</h3>
                <p className="text-blue-600 font-bold text-lg">{exp.role}</p>
              </div>
              <div className="md:text-right mt-2 md:mt-0">
                <span className="text-slate-500 font-bold block">{exp.period}</span>
                <span className="text-slate-400 text-xs font-black uppercase tracking-widest">{exp.location}</span>
                
              </div>
              {/* <h5 className="text-lg font-bold text-slate-800 mb-1">{exp.work}</h5> */}
            </div>
            
            {/* Direct Details (For Zenithbyte) */}
            <div className="space-y-8 mt-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Key Projects</h4>
              <h5 className="text-lg font-bold text-slate-800 mb-1">{exp.work}</h5>
              {exp.details && (
                <ul className="list-disc list-outside ml-6 space-y-3 text-slate-600 text-lg">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="pl-4">{detail}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Project List (For I-exceed) */}
            {exp.projects && (
              <div className="space-y-8 mt-6">
                {/* <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Key Projects</h4> */}
                {exp.projects.map((project, i) => (
                  <div key={i} className="pl-4 border-l-2 border-blue-100 hover:border-blue-500 transition-colors">
                    <h5 className="text-lg font-bold text-slate-800 mb-1">{project.name}</h5>
                    <p className="text-slate-600 leading-relaxed font-medium">{project.desc}</p>
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