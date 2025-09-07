import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{title}</h2>
    <p className="text-xl text-gray-400">{subtitle}</p>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Scitisense Futurize Pvt Ltd',
      period: 'June 2025 - Present',
      location: 'Visakhapatnam',
      description: [
        'Engineered and maintained a responsive web application using React.js and Tailwind CSS.',
        'Implemented reusable components, routing, and API integration to enhance user experience.'
      ]
    },
    {
      title: 'Machine Learning Intern',
      company: 'Eduskills',
      period: 'October 2024 - December 2024',
      location: 'Remote',
      description: [
        'Gained hands-on experience in Artificial Intelligence and Machine Learning concepts through practical tasks and guided projects.',
        'Applied Python libraries like NumPy, Pandas, Scikit-learn, and TensorFlow to solve real-world problems.'
      ]
    },
    {
      title: 'Python Developer Intern',
      company: 'Symbiosis Technologies',
      period: 'May 2024 - June 2024',
      location: 'Visakhapatnam',
      description: [
        'Built a Python-based asset management tool to streamline tracking and handling of digital and physical assets.',
        'Implemented user-friendly interfaces and data handling functionalities to support efficient resource monitoring.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey
          </p>
        </div>


        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500/20" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex gap-8 mb-12 last:mb-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gray-900/50 border border-gray-700/50 rounded-full flex items-center justify-center border-2 border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                    <Briefcase className="h-6 w-6 text-blue-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-lg text-blue-400">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                <ul className="space-y-2">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-1">
                      <span className="text-blue-400 relative -top-[1px]">•</span>
                      <span className="text-gray-300">{desc}</span>
                    </li>
                  ))}
                </ul>

                </div>
              </div>
            ))}
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

export default Experience;