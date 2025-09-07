import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{title}</h2>
    <p className="text-xl text-gray-400">{subtitle}</p>
  </div>
);

const Education = () => {
  const education = [
    {
      degree: "B.Tech - Artificial Intelligence and Data Science",
      institution: "Vignan's Institute of Information Technology",
      period: "2022 - 2026",
      location: "Duvvada, Andhra Pradesh",
      grade: "CGPA: 8.95",
      highlights: [
        // "Specialization in AI & Machine Learning.",
        // "Active member of technical clubs.",
        // "Participated in multiple hackathons."
      ]
    },
    {
      degree: "Intermediate - MPC",
      institution: "Sri Chaitanya Junior College",
      period: "2020 - 2022",
      location: "Narasaraopet, Andhra Pradesh",
      grade: "Percentage: 96.7%",
      highlights: [
        // "Mathematics, Physics, Chemistry.",
        // "Well performer in academics.",
        // " participant."
      ]
    },
    {
      degree: "SSC (10th Grade)",
      institution: "Oxford Concept School",
      period: "2019 - 2020",
      location: "Narasaraopet, Andhra Pradesh",
      grade: "Percentage: 100%",
      highlights: [
        // "Perfect score achievement",
        // "School topper",
        // "Excellence in Mathematics and Science"
      ]
    }
  ];

  const certifications = [
    {
      title: "ServiceNow - Certified System Administrator (CSA)",
      issuer: "ServiceNow",
      icon: Award
    },
    {
      title: "ServiceNow - Certified Application Developer (CAD)",
      issuer: "ServiceNow",
      icon: Award
    },
    {
      title: "Cisco - Networking and Routing/Switching",
      issuer: "Cisco",
      icon: Award
    },
    {
      title: "Cisco Python Essentials",
      issuer: "Cisco",
      icon: Award
    },
    {
      title: "Introduction to Machine Learning on AWS",
      issuer: "edX",
      icon: Award
    },
    {
      title: "NPTEL - Cloud Computing and Internet Protocols",
      issuer: "NPTEL",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">Education</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          My academic journey
        </p>
      </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Cards */}
          <div className="space-y-6 mb-16">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:bg-gray-800/60 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 hover:scale-[1.02] transform group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Education Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <GraduationCap className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-blue-400 font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Grade Badge */}
                <div className="mb-4 inline-block p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-sm text-blue-400 font-medium">{edu.grade}</p>
                </div>

                {/* Highlights */}
              <ul className="space-y-2">
                {edu.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-start gap-1">
                    <span className="text-blue-400 relative -top-[2px]">•</span>
                    <span className="text-sm text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>


              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-white">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm hover:bg-gray-800/60 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 hover:scale-[1.02] transform group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <cert.icon className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{cert.title}</h4>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Education;