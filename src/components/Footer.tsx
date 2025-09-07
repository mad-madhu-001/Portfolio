import React from 'react';
import { Heart } from 'lucide-react';

// Simple Logo component placeholder
const Logo = ({ size = 'default' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    default: 'text-xl',
    lg: 'text-2xl'
  };
  
  return (
    <div className={`flex items-center gap-2 ${sizeClasses[size]}`}>
  <img 
    src="/msr.png"  // place msr.png inside your public/ folder
    alt="MSR Logo" 
    className="w-10 h-10 object-contain"
  />
  <span
    className={`${
      size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-md' : 'text-sm'
    } text-gray-400 font-small`}
  >
    Portfolio
  </span>
</div>




  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-700/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          
          <div className="text-center space-y-1">
  <p className="text-sm text-gray-400">
    © {currentYear} Madhusudhan Reddy. All rights reserved.
  </p>
  <p className="text-xs text-gray-500">
    Last updated Sep 2025
  </p>
</div>

          <div className="text-center space-y-1">
          <p className="text-sm text-gray-400 text-center leading-relaxed">
  Built with React.js • Framer Motion • Tailwind CSS
</p>
<p className="text-xs text-gray-500">
    Performance focused • Accessible • Responsive
  </p>
  </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;