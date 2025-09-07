import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-400">{subtitle}</p>
      )}
      <div className="flex justify-center mt-6">
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
      </div>
    </div>
  );
};

export default SectionTitle;