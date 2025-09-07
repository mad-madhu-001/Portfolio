import React from 'react';

const Skills = () => {
  const topRowSkills = [
    {
      name: 'C',
      icon: (
        <svg viewBox="0 0 32 32" className="w-12 h-12">
          <rect fill="#00599C" width="32" height="32" rx="2"/>
          <text x="16" y="22" textAnchor="middle" fill="white" fontSize="16" fontFamily="serif" fontWeight="bold">C</text>
        </svg>
      ),
      glowColor: '0, 89, 156'
    },
    {
      name: 'C++',
      icon: (
        <svg viewBox="0 0 32 32" className="w-12 h-12">
          <rect fill="#00599C" width="32" height="32" rx="2"/>
          <text x="16" y="20" textAnchor="middle" fill="white" fontSize="12" fontFamily="serif" fontWeight="bold">C++</text>
        </svg>
      ),
      glowColor: '0, 89, 156'
    },
    {
      name: 'Python',
      icon: (
        <svg viewBox="0 0 32 32" className="w-12 h-12">
          <defs>
            <linearGradient id="python-blue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:"#3776AB"}} />
              <stop offset="100%" style={{stopColor:"#4B8BBE"}} />
            </linearGradient>
            <linearGradient id="python-yellow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:"#FFD43B"}} />
              <stop offset="100%" style={{stopColor:"#FFE873"}} />
            </linearGradient>
          </defs>
          <path fill="url(#python-blue)" d="M13.275 15.88h5.417c1.508 0 2.712-1.241 2.712-2.756v-5.164c0-1.47-1.24-2.574-2.712-2.819-0.932-0.155-1.898-0.226-2.825-0.221s-1.813 0.083-2.592 0.221c-2.295 0.405-2.712 1.254-2.712 2.819v2.067h5.423v0.689h-7.459c-1.576 0-2.956 0.947-3.388 2.75-0.498 2.066-0.52 3.355 0 5.512 0.385 1.606 1.306 2.75 2.882 2.75h1.865v-2.478c0-1.79 1.549-3.369 3.388-3.369z"/>
          <path fill="url(#python-yellow)" d="M26.826 13.465c-0.389-1.569-1.133-2.75-2.712-2.75h-2.035v2.408c0 1.867-1.583 3.439-3.388 3.439h-5.417c-1.484 0-2.712 1.27-2.712 2.756v5.164c0 1.47 1.278 2.334 2.712 2.756 1.717 0.505 3.363 0.596 5.417 0 1.365-0.395 2.712-1.191 2.712-2.756v-2.067h-5.417v-0.689h8.129c1.576 0 2.163-1.099 2.712-2.75 0.566-1.699 0.542-3.332 0-5.512z"/>
          <circle fill="#3776AB" cx="12.933" cy="7.619" r="1.018"/>
          <circle fill="#FFD43B" cx="19.033" cy="24.794" r="1.018"/>
        </svg>
      ),
      glowColor: '55, 118, 171'
    },
    {
      name: 'JavaScript',
      icon: (
        <svg viewBox="0 0 32 32" className="w-12 h-12">
          <rect fill="#F7DF1E" width="32" height="32" rx="2"/>
          <text x="16" y="20" textAnchor="middle" fill="#000" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="bold">JS</text>
        </svg>
      ),
      glowColor: '247, 223, 30'
    },
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 32 32" className="w-12 h-12">
          <circle fill="#61DAFB" cx="16" cy="16" r="2"/>
          <g fill="none" stroke="#61DAFB" strokeWidth="1.5">
            <ellipse cx="16" cy="16" rx="11" ry="4.2"/>
            <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(60 16 16)"/>
            <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(120 16 16)"/>
          </g>
        </svg>
      ),
      glowColor: '97, 218, 251'
    },
    {
      name: 'Node.js',
      icon: (
        <svg viewBox="0 0 32 32" className="w-12 h-12">
          <path fill="#83CD29" d="M16,30a2.151,2.151,0,0,1-1.076-.288L11.5,27.685c-.513-.288-.263-.39-.093-.449a6.828,6.828,0,0,0,1.549-.7.263.263,0,0,1,.263.026l2.631,1.563a.34.34,0,0,0,.318,0l10.258-5.922a.323.323,0,0,0,.157-.278V10.075a.331.331,0,0,0-.157-.278L16.17,3.875a.323.323,0,0,0-.318,0L5.594,9.8a.331.331,0,0,0-.157.278V21.925a.323.323,0,0,0,.157.278L8.4,23.675c1.528.763,2.462-.136,2.462-1.038V11.085a.3.3,0,0,1,.3-.3h1.3a.3.3,0,0,1,.3.3V22.637c0,2.035-1.108,3.2-3.038,3.2a4.389,4.389,0,0,1-2.363-.65L4.9,23.675A2.151,2.151,0,0,1,3.823,21.9V10.075A2.151,2.151,0,0,1,4.9,8.3L15.157,2.378a2.248,2.248,0,0,1,2.165,0L27.58,8.3a2.151,2.151,0,0,1,1.076,1.774V21.925A2.151,2.151,0,0,1,27.58,23.7L17.322,29.623A2.151,2.151,0,0,1,16,30Z"/>
        </svg>
      ),
      glowColor: '131, 205, 41'
    },
    {
      name: 'HTML5',
      icon: (
        <svg viewBox="0 0 32 32" className="w-12 h-12">
          <polygon fill="#E44D26" points="4,2 6,26 16,29 26,26 28,2"/>
          <polygon fill="#F16529" points="16,4 16,28 24,26 26,4"/>
          <polygon fill="#EBEBEB" points="16,13 11,13 10.5,8 16,8 16,3 21.5,3 20.5,15 16,16"/>
          <polygon fill="#FFF" points="16,21 15.5,19 13,19 13.5,24 16,25"/>
        </svg>
      ),
      glowColor: '227, 79, 38'
    },
    {
      name: 'CSS3',
      icon: (
        <svg viewBox="0 0 32 32" className="w-12 h-12">
          <polygon fill="#1572B6" points="4,2 6,26 16,29 26,26 28,2"/>
          <polygon fill="#33A9DC" points="16,4 16,28 24,26 26,4"/>
          <polygon fill="#FFF" points="16,13 21,13 21.5,8 16,8 16,3 10.5,3 11.5,15 16,16"/>
          <polygon fill="#EBEBEB" points="16,21 15.5,19 13,19 13.5,24 16,25"/>
        </svg>
      ),
      glowColor: '21, 114, 182'
    }
  ];

  const bottomRowSkills = [
    {
      name: 'SQL',
      icon: (
        <svg viewBox="0 0 32 32" className="w-12 h-12">
          <rect fill="#4479A1" x="2" y="2" width="28" height="28" rx="4"/>
          <text x="16" y="12" textAnchor="middle" fill="white" fontSize="6" fontFamily="Arial, sans-serif" fontWeight="bold">SQL</text>
          <path fill="white" d="M8,16 Q8,14 10,14 L22,14 Q24,14 24,16 Q24,18 22,18 L10,18 Q8,18 8,16 Z"/>
          <rect fill="white" x="6" y="20" width="20" height="6" rx="2"/>
        </svg>
      ),
      glowColor: '68, 121, 161'
    },
    {
      name: 'Git & GitHub',
      icon: (
        <svg viewBox="0 0 32 32" className="w-12 h-12">
          <circle fill="#333" cx="16" cy="16" r="14"/>
          <path fill="white" d="M16,4a12,12,0,0,0-3.8,23.38c.6.12.82-.26.82-.58s0-1-.01-2.13c-3.34.73-4.04-1.61-4.04-1.61A3.17,3.17,0,0,0,7.61,21.8c-1.09-.74.08-.73.08-.73a2.52,2.52,0,0,1,1.84,1.24,2.56,2.56,0,0,0,3.5,1,2.56,2.56,0,0,1,.76-1.61c-2.67-.3-5.48-1.34-5.48-5.95a4.65,4.65,0,0,1,1.24-3.23,4.32,4.32,0,0,1,.12-3.18s1-.32,3.3,1.23a11.5,11.5,0,0,1,6,0c2.28-1.55,3.29-1.23,3.29-1.23a4.32,4.32,0,0,1,.12,3.18,4.64,4.64,0,0,1,1.24,3.23c0,4.63-2.81,5.65-5.49,5.95a2.86,2.86,0,0,1,.82,2.23c0,1.61,0,2.91,0,3.31s.21.7.83.58A12,12,0,0,0,16,4Z"/>
        </svg>
      ),
      glowColor: '240, 80, 51'
    },
    {
      name: 'ServiceNow',
      icon: (
        <svg viewBox="0 0 32 32" className="w-12 h-12">
          <circle fill="#81C784" cx="16" cy="16" r="14"/>
          <circle fill="white" cx="16" cy="16" r="6"/>
        </svg>
      ),
      glowColor: '129, 199, 132'
    },
    {
      name: 'AI/ML',
      icon: (
        <svg viewBox="0 0 32 32" className="w-12 h-12">
          <defs>
            <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#FF6B6B"}} />
              <stop offset="50%" style={{stopColor:"#4ECDC4"}} />
              <stop offset="100%" style={{stopColor:"#45B7D1"}} />
            </linearGradient>
          </defs>
          <circle fill="url(#ai-gradient)" cx="16" cy="16" r="14"/>
          <circle fill="white" cx="12" cy="12" r="2"/>
          <circle fill="white" cx="20" cy="12" r="2"/>
          <circle fill="white" cx="16" cy="20" r="2"/>
          <path fill="none" stroke="white" strokeWidth="2" d="M12,12 L20,12 L16,20 Z"/>
          <circle fill="white" cx="16" cy="8" r="1"/>
          <circle fill="white" cx="8" cy="16" r="1"/>
          <circle fill="white" cx="24" cy="16" r="1"/>
        </svg>
      ),
      glowColor: '255, 107, 107'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-400">Technologies and tools I work with to bring ideas to life</p>
          <div className="flex justify-center mt-6">
            {/* <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" /> */}
          </div>
        </div>

        {/* Top Row - 8 Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-6xl mx-auto mb-8">
          {topRowSkills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')} aspect-square flex flex-col items-center justify-center p-6 bg-gray-900/50 border border-gray-700/50 rounded-xl backdrop-blur-sm hover:bg-gray-800/60 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-pointer group hover:scale-105 transform animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-glow={skill.glowColor}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-white text-sm font-medium text-center group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Row - 4 Skills Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {bottomRowSkills.map((skill, index) => (
              <div
                key={index + 8}
                className={`skill-card skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')} aspect-square flex flex-col items-center justify-center p-6 bg-gray-900/50 border border-gray-700/50 rounded-xl backdrop-blur-sm hover:bg-gray-800/60 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-pointer group hover:scale-105 transform animate-fade-in-up`}
                style={{ animationDelay: `${(index + 8) * 0.1}s` }}
                data-glow={skill.glowColor}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-white text-sm font-medium text-center group-hover:text-white transition-colors">
                  {skill.name}
                </span>
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

        .skill-python:hover {
          background: rgba(0, 0, 0, 0.8) !important;
          border-color: rgba(55, 118, 171, 0.6) !important;
          box-shadow: 
            0 0 20px rgba(55, 118, 171, 0.3),
            0 0 40px rgba(55, 118, 171, 0.2),
            0 0 60px rgba(55, 118, 171, 0.1),
            inset 0 0 20px rgba(55, 118, 171, 0.1) !important;
        }

        .skill-javascript:hover {
          background: rgba(0, 0, 0, 0.8) !important;
          border-color: rgba(247, 223, 30, 0.6) !important;
          box-shadow: 
            0 0 20px rgba(247, 223, 30, 0.3),
            0 0 40px rgba(247, 223, 30, 0.2),
            0 0 60px rgba(247, 223, 30, 0.1),
            inset 0 0 20px rgba(247, 223, 30, 0.1) !important;
        }

        .skill-react:hover {
          background: rgba(0, 0, 0, 0.8) !important;
          border-color: rgba(97, 218, 251, 0.6) !important;
          box-shadow: 
            0 0 20px rgba(97, 218, 251, 0.3),
            0 0 40px rgba(97, 218, 251, 0.2),
            0 0 60px rgba(97, 218, 251, 0.1),
            inset 0 0 20px rgba(97, 218, 251, 0.1) !important;
        }

        .skill-node-js:hover {
          background: rgba(0, 0, 0, 0.8) !important;
          border-color: rgba(131, 205, 41, 0.6) !important;
          box-shadow: 
            0 0 20px rgba(131, 205, 41, 0.3),
            0 0 40px rgba(131, 205, 41, 0.2),
            0 0 60px rgba(131, 205, 41, 0.1),
            inset 0 0 20px rgba(131, 205, 41, 0.1) !important;
        }

        .skill-html5:hover {
          background: rgba(0, 0, 0, 0.8) !important;
          border-color: rgba(227, 79, 38, 0.6) !important;
          box-shadow: 
            0 0 20px rgba(227, 79, 38, 0.3),
            0 0 40px rgba(227, 79, 38, 0.2),
            0 0 60px rgba(227, 79, 38, 0.1),
            inset 0 0 20px rgba(227, 79, 38, 0.1) !important;
        }

        .skill-css3:hover {
          background: rgba(0, 0, 0, 0.8) !important;
          border-color: rgba(21, 114, 182, 0.6) !important;
          box-shadow: 
            0 0 20px rgba(21, 114, 182, 0.3),
            0 0 40px rgba(21, 114, 182, 0.2),
            0 0 60px rgba(21, 114, 182, 0.1),
            inset 0 0 20px rgba(21, 114, 182, 0.1) !important;
        }

        .skill-sql:hover {
          background: rgba(0, 0, 0, 0.8) !important;
          border-color: rgba(68, 121, 161, 0.6) !important;
          box-shadow: 
            0 0 20px rgba(68, 121, 161, 0.3),
            0 0 40px rgba(68, 121, 161, 0.2),
            0 0 60px rgba(68, 121, 161, 0.1),
            inset 0 0 20px rgba(68, 121, 161, 0.1) !important;
        }

        .skill-git---github:hover {
          background: rgba(0, 0, 0, 0.8) !important;
          border-color: rgba(240, 80, 51, 0.6) !important;
          box-shadow: 
            0 0 20px rgba(240, 80, 51, 0.3),
            0 0 40px rgba(240, 80, 51, 0.2),
            0 0 60px rgba(240, 80, 51, 0.1),
            inset 0 0 20px rgba(240, 80, 51, 0.1) !important;
        }

        .skill-c:hover {
          background: rgba(0, 0, 0, 0.8) !important;
          border-color: rgba(0, 89, 156, 0.6) !important;
          box-shadow: 
            0 0 20px rgba(0, 89, 156, 0.3),
            0 0 40px rgba(0, 89, 156, 0.2),
            0 0 60px rgba(0, 89, 156, 0.1),
            inset 0 0 20px rgba(0, 89, 156, 0.1) !important;
        }

        .skill-c--:hover {
          background: rgba(0, 0, 0, 0.8) !important;
          border-color: rgba(0, 89, 156, 0.6) !important;
          box-shadow: 
            0 0 20px rgba(0, 89, 156, 0.3),
            0 0 40px rgba(0, 89, 156, 0.2),
            0 0 60px rgba(0, 89, 156, 0.1),
            inset 0 0 20px rgba(0, 89, 156, 0.1) !important;
        }

        .skill-servicenow:hover {
          background: rgba(0, 0, 0, 0.8) !important;
          border-color: rgba(129, 199, 132, 0.6) !important;
          box-shadow: 
            0 0 20px rgba(129, 199, 132, 0.3),
            0 0 40px rgba(129, 199, 132, 0.2),
            0 0 60px rgba(129, 199, 132, 0.1),
            inset 0 0 20px rgba(129, 199, 132, 0.1) !important;
        }

        .skill-ai-ml:hover {
          background: rgba(0, 0, 0, 0.8) !important;
          border-color: rgba(255, 107, 107, 0.6) !important;
          box-shadow: 
            0 0 20px rgba(255, 107, 107, 0.3),
            0 0 40px rgba(255, 107, 107, 0.2),
            0 0 60px rgba(255, 107, 107, 0.1),
            inset 0 0 20px rgba(255, 107, 107, 0.1) !important;
        }

        .skill-card {
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .skill-card {
            aspect-ratio: 1;
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;