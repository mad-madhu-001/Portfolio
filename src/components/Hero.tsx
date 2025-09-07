import React, { useEffect, useState } from 'react';
import { Download, MessageCircle, Github, Linkedin, Code2, Eye, ArrowDown } from 'lucide-react';

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

const Hero = () => {
  const titles = [
    "Software Engineer",
    "AI Developer", 
    "ML Learner",
    "Web Architect"
  ];

  const [text, setText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentTitle.length) {
        setText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex, titles]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = '/resumeone.pdf';
    link.download = 'Madhusudhan_Reddy_Resume.pdf'; 
    link.click();
  };

  const handleViewCV = () => {
    window.open('/resumeone.pdf', '_blank'); 
  };

  const handleContact = () => {
    window.open('https://wa.me/917981081627', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-slide-in-left leading-relaxed text-white">
            Madhusudhan Reddy
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Mudhireddy</span>
          </h1>

          {/* Animated Titles */}
          <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-10">
            <span className="inline-block">
              {text}
              <span className="animate-blink text-blue-400">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
           Full-stack developer and passionate AI enthusiast, pursuing B.Tech in <br/>AI & DS branch at Vignan's Institute of Information Technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Button
              onClick={handleViewCV}
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
              size="lg"
            >
              <Eye className="mr-2 h-5 w-5" />
              View CV
            </Button>
            <Button
              onClick={handleDownloadCV}
              className="bg-blue-600 text-white hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 group"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button
              onClick={handleContact}
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <a
              href="https://github.com/mad-madhu-001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/madhusudhan-reddy-31482a284"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.codechef.com/users/madhusudhan01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Code2 size={24} />
            </a>
          </div>
          <br/>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <p className="text-sm text-gray-400 mb-2 animate-pulse">
              Scroll Down
            </p>
            <ArrowDown className="text-blue-400 h-6 w-6 animate-bounce" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(10px) rotate(-1deg); }
          66% { transform: translateY(-5px) rotate(1deg); }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;