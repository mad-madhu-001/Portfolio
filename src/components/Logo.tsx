import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean; // 👈 new prop to control "Portfolio" text
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-5xl'
  };
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`font-bold ${sizeClasses[size]} bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent`}>
        MSR
      </span>
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

export default Logo;