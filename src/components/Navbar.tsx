import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Logo component matching the projects style
const Logo = ({ size = 'md', showText = true, className = '' }) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-5xl'
  };
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
  {/* Logo Image */}
  <img
    src="/msr.png"
    alt="MSR Logo"
    className={`h-10 w-auto ${sizeClasses[size]}`}
  />

  {/* Optional Portfolio Text */}
  {showText && (
    <span
      className={`${
        size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-md' : 'text-sm'
      } text-gray-400`}
    >
      Portfolio
    </span>
  )}
</div>

  );
};

// Button component matching the projects style
const Button = ({ children, onClick, variant = 'default', size = 'default', className = '' }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
  
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white',
    ghost: 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
  };
  
  const sizes = {
    default: 'h-10 py-2 px-4',
    lg: 'h-11 px-8 text-lg',
    icon: 'h-10 w-10'
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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Logo size="sm" />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-sm font-medium transition-colors hover:text-blue-400 ${
                  activeSection === item.id ? 'text-blue-400' : 'text-white'
                }`}
              >
                <span className="hover-underline">{item.label}</span>
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 animate-slide-in-left" />
                )}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-700/50 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-all hover:bg-gray-800/50 ${
                  activeSection === item.id ? 'text-blue-400 bg-gray-800/50' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes slide-in-left {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.3s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .hover-underline {
          position: relative;
        }
        
        .hover-underline::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #60a5fa;
          transition: width 0.3s ease;
        }
        
        .hover-underline:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;