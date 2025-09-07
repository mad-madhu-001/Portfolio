import React from 'react';
import { ExternalLink, Github, Trophy, Users, Leaf, Smartphone } from 'lucide-react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{title}</h2>
    <p className="text-xl text-gray-400">{subtitle}</p>
  </div>
);

const Button = ({ children, onClick, variant = 'default', size = 'default', className = '' }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
  
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
  };
  
  const sizes = {
    default: 'h-10 py-2 px-4',
    lg: 'h-11 px-8 text-lg'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Greenify',
      icon: Leaf,
      description: 'Environmental focused project with renewable energy and carbon dioxide reduction.',
      features: [
        'Participated in an App Designing Competition by developing a user-friendly and innovative mobile application.',
        'Secured 1st prize in an inter-college App Designing Competition.',
        'Designed and built a creative app prototype focusing on usability, innovation, and problem-solving.'
      ],
      technologies: ['React', 'HTML', 'Tailwind CSS'],
      github: 'https://github.com/mad-madhu-001/Greenify.git',
      live: 'https://ecogreeny.netlify.app/',
      achievement: '🏆 1st Prize Winner - App Designing Competition.'
    },
    {
      title: 'AI-Powered Asset Management',
      icon: Trophy,
      description: 'Python-based asset management tool for tracking digital and physical assets.',
      features: [
        'Streamlined tracking and handling of company assets.',
        'User-friendly interface with data visualization.',
        'Real-time monitoring and reporting capabilities.'
      ],
      technologies: ['Python', 'Flask', 'SQLite', 'Pandas'],
      github: 'https://github.com',
      live: null,
      achievement: null
    },
    {
      title: 'ML Classification Model',
      icon: Users,
      description: 'Machine Learning model for classification tasks using advanced algorithms.',
      features: [
        'Implemented various ML algorithms for comparison.',
        'Achieved 94% accuracy on test dataset.',
        'Interactive visualization of results.'
      ],
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Streamlit'],
      github: 'https://github.com',
      live: null,
      achievement: null
    },
    {
      title: 'Portfolio Website',
      icon: Smartphone,
      description: 'Modern, responsive portfolio website with animations and dark theme.',
      features: [
        'Fully responsive design with mobile-first approach.',
        'Smooth animations and transitions.',
        'SEO optimized with meta tags.'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com',
      live: 'https://madhusudhan.dev',
      achievement: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">Projects</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Things I've built
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:bg-gray-800/60 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 hover:scale-[1.02] transform group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <project.icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
                    >
                      <Github className="h-5 w-5 text-gray-400 hover:text-blue-400" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 text-gray-400 hover:text-blue-400" />
                    </a>
                  )}
                </div>
              </div>

              {/* Achievement Badge */}
              {project.achievement && (
                <div className="mb-4 p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-sm text-blue-400 font-medium">{project.achievement}</p>
                </div>
              )}

              {/* Description */}
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-1">
                    <span className="text-blue-400 relative -top-[2px]">•</span>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>


              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coding Profiles */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">Coding Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center backdrop-blur-sm hover:bg-gray-800/60 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300">
              <h4 className="text-lg font-bold mb-2 text-white">LeetCode</h4>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">1590+</p>
              <p className="text-gray-400">Score</p>
              <p className="text-sm text-blue-400 mt-2">200+ Problems Solved</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center backdrop-blur-sm hover:bg-gray-800/60 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300">
              <h4 className="text-lg font-bold mb-2 text-white">CodeChef</h4>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">3★</p>
              <p className="text-gray-400">Rating</p>
              <p className="text-sm text-blue-400 mt-2">280+ Problems Solved</p>
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

export default Projects;