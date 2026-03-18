
import React from 'react';
import { useState } from 'react';
import resumeFile from '../assets/pranesh_s.pdf';
const useFileDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const downloadFile = async (url, filename) => {
    setIsDownloading(true);
    setProgress(0);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Resource not found');

      const contentLength = response.headers.get('content-length');
      const total = parseInt(contentLength, 10);
      
      const reader = response.body.getReader();
      const chunks = [];
      let loaded = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        loaded += value.length;
        if (total) setProgress(Math.round((loaded / total) * 100));
      }

      const blob = new Blob(chunks, { type: 'application/pdf' });
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download failed:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  return { downloadFile, isDownloading, progress };
};
const Resume = () => {
  const { downloadFile, isDownloading, progress } = useFileDownload();
  const downloadCV = () => {
    console.log("Downloading resume from path:", resumeFile);
    downloadFile(resumeFile, 'Pranesh_S_Resume.pdf');
  };

  const resumeData = {
    name: "PRANESH S",
    title: "Senior Software Developer",
    summary: "Results-driven Senior Software Developer with over 5+ years of experience in designing, developing, and testing scalable web and mobile applications. Skilled in React JS, JavaScript, jQuery, and API integration with a strong focus on user experience, performance optimization, and security.",
    experience: [
      {
        company: "Zenithbyte Innovations Pvt. Ltd.",
        role: "Senior Software Developer",
        period: "May 2025 – Present",
        project:"ClarityAI – User Tracking Module",
        highlights: [
          "Leading development of a user activity tracking module to monitor interactions, device insights, and behavioral analytics across the platform",
          "Built an event-driven architecture capturing clicks, scrolls, searches, form events, hesitations (hover ≥ 3 s), and inactivity",
          "Implemented a secure, anonymized data pipeline with geolocation, browser/OS detection, and device fingerprinting",
          "Designed a common API wrapper featuring real-time performance monitoring, retry logic, and circular tracking prevention.",
          "Enhanced error tracking and diagnostics to improve system uptime and reliability.",
          "Integrated IP + browser geolocation fallback for privacy-aware, permission-based location accuracy.",
          "Added Text-to-Speech feedback and accessibility enhancements to improve usability.",
          "Engineered real-time cart analytics capturing product and transaction data via DOM extraction."
        ]
      },
      {
        company: "I-Exceed Technologies Pvt. Ltd.",
        role: "Software Developer",
        period: "Feb 2020 – May 2025",
        project:"United Commercial Bank (Bangladesh)- Nov 2020 – Jun 2021",
        highlights: [
          "Developed Internet and Mobile Banking applications with advanced features using React JS.",
          "Designed login and registration workflows with CRUD operations and service-based user validation.",
          "Integrated Loan Service APIs for application and eligibility checks based on existing dues."
        ]
      },
      {
        company: "I-Exceed Technologies Pvt. Ltd.",
        role: "Software Developer",
        period: "Feb 2020 – May 2025",
        project:"L&T Finance – Two-Wheeler Loan Journey - Jun 2021 – May 2023",
        highlights: [
          "Created a project structure and Git branching strategy for scalable front-end development.",
          "Implemented API integrations using AJAX for dynamic content rendering and user interactivity.",
          "Utilized Geolocation API to retrieve user location from PIN codes and plot them on maps.",
          "Developed document upload and validation modules with callback response handling."
        ]
      },
      {
        company: "I-Exceed Technologies Pvt. Ltd.",
        role: "Software Developer",
        period: "Feb 2020 – May 2025",
        project:"Consumer Retail Banking – Appzillon - Jun 2023 – Nov 2023",
        highlights: [
          "Designed and developed a base Internet and Mobile Banking framework reused across multiple projects.",
          "Implemented credit/debit card application and cheque book service workflows with DB integration.",
          "Built multilingual support enabling dynamic language translation across the application."
        ]
      },
      {
        company: "I-Exceed Technologies Pvt. Ltd.",
        role: "Software Developer",
        period: "Feb 2020 – May 2025",
        project:"Indian Bank Corporate Internet Banking - Nov 2023 – Mar 2024",
        highlights: [
          "Created mobile-friendly UI layouts using HTML, CSS, and Xcode for iOS.",
          "Developed beneficiary management with account validation and API-based fund transfer integration.",
          "Implemented OTP authentication with input validation and error handling."
        ]
      },
      {
        company: "I-Exceed Technologies Pvt. Ltd.",
        role: "Software Developer",
        period: "Feb 2020 – May 2025",
        project:"Central Bank of India - Apr 2024 – Jan 2025",
        highlights: [
          "Built profile management and KYC verification modules with PAN/AADHAR validation via eKYC API.",
          "Enhanced input validation, pincode, and phone checks for accuracy and security.",
          "Implemented deposit management workflows (FD/RD) with email (SMTP) authentication.",
          "Developed language localization by dynamically mapping terms to a translation file."
        ]
      },
      {
        company: "I-Exceed Technologies Pvt. Ltd.",
        role: "Software Developer",
        period: "Feb 2020 – May 2025",
        project:"Grameen Koota – Unnathi - Jan 2025 – May 2025",
        highlights: [
          "Designed dashboard interfaces with role-based filtering and data visualization.",
          "Implemented pagination logic and reusable utility functions to improve performance."
        ]
      }
    ],
    skills: ["React JS", "JavaScript (ES6+)", "jQuery", "HTML5", "CSS3", "API Integration", "Performance Optimization", "Security Best Practices"],
    education: [
      {
        degree: "Bachelor of Engineering (Computer Science)",
        institution: "Sri Shakthi Institute of Engineering and Technology (Anna University)",
        year: "2016 – 2020"
      },
      {
        degree: "HSC & SSLC",
        institution: "Perks Matriculation Higher Secondary School",
        year: "2013 – 2016"
      }
    ]
  };

//   const handleDownload = () => {
//     const content = `
// ${resumeData.name}
// ${resumeData.title}

// PROFESSIONAL SUMMARY
// ${resumeData.summary}

// EXPERIENCE
// ${resumeData.experience.map(exp => `
// - ${exp.role} at ${exp.company} (${exp.period})
//   ${exp.highlights.join('\n  ')}
// `).join('')}

// SKILLS
// ${resumeData.skills.join(', ')}

// EDUCATION
// ${resumeData.education.map(edu => `${edu.degree} - ${edu.institution} (${edu.year})`).join('\n')}
//     `.trim();

//     const blob = new Blob([content], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `Pranesh_S_Resume.txt`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//   };

  return (
    <section className="resume-section animate-in">
      <div className="resume-content-wrapper">
        {/* Header with Title and Download Button */}
        <div className="resume-header">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">Professional Resume</h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-0">
              Pranesh S • Senior Software Developer
            </p>
          </div>
          <button 
            onClick={downloadCV}
            className="btn-primary"
            disabled={isDownloading}
          >
            {isDownloading ? `Downloading ${progress}%...` : 'Download PDF'}
          </button>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column: Summary & Skills */}
          <div className="md:col-span-1">
            <div className="mb-10">
              <h3 className="text-xl font-bold border-l-4 border-[#ff4d5a] pl-4 mb-4">Summary</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                {resumeData.summary}
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold border-l-4 border-[#ff4d5a] pl-4 mb-4">Core Skills</h3>
              <div className="flex flex-wrap">
                {resumeData.skills.map((skill, index) => (
                  <span key={index} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold border-l-4 border-[#ff4d5a] pl-4 mb-4">Education</h3>
              {resumeData.education.map((edu, index) => (
                <div key={index}>
                  <p className="font-bold text-slate-900">{edu.degree}</p>
                  <p className="text-sm text-slate-500">{edu.institution}</p>
                  <p className="text-sm text-[#ff4d5a] font-bold">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Experience */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold border-l-4 border-[#ff4d5a] pl-4 mb-6">Professional Experience</h3>
            <div className="space-y-10">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-slate-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-[#ff4d5a] rounded-full"></div>
                  <div className="mb-2">
                    <h4 className="text-xl font-extrabold text-slate-900 mb-0">{exp.role}</h4>
                    <p className="text-[#ff4d5a] font-bold text-sm uppercase tracking-widest">{exp.company} • {exp.period}</p>
                    {/* Second line: tight leading ensures it sits right under the first */}
                    <p className="text-[#ff4d5a] font-bold text-[12px] uppercase tracking-widest opacity-80 leading-none">
                      Project: {exp.project}
                    </p>
                    {/* <p className="text-[#ff4d5a] font-bold text-sm uppercase tracking-widest">{exp.project}</p> */}
                  </div>
                  <ul className="list-disc list-inside text-slate-600 space-y-2 font-medium">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
