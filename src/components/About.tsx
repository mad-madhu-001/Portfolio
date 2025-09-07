import React from 'react';
import { User, MapPin, Phone, Mail } from 'lucide-react';

// SectionTitle Component (About white + Me gradient, no line)
const SectionTitle = ({ title }) => {
  const [first, second] = title.split(" "); // "About Me"

  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold">
        <span className="text-white">{first}</span>{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{second}</span>
      </h2>
    </div>
  );
};

const About = () => {
  const aboutInfo = [
    { icon: Mail, label: 'Email', value: 'madhusudhan01162@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7981081627' },
    { icon: MapPin, label: 'Location', value: 'Narasaraopet, Andhra Pradesh' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A glimpse into my coding world and learning path
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main content card with dark glass effect */}
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:bg-gray-800/60 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <User className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Madhusudhan Reddy</span>
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate AI & Data Science student with a strong foundation in web development and machine learning. 
                  Currently in my 4th year at Vignan's Institute of Information Technology, I combine my love for artificial 
                  intelligence with practical software development skills.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  With hands-on experience in Python, ReactJS, and machine learning frameworks, I've worked on various projects 
                  ranging from environmental sustainability apps to AI-powered solutions. My journey includes internships at 
                  Symbiosis Technologies, Eduskills, and Scitisense Futurize, where I've applied my skills in real-world scenarios.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm an active problem solver with 200+ problems solved on LeetCode (Rating: 1590+) and a 3-star coder on CodeChef. 
                  I believe in continuous learning and am always excited to tackle new challenges in AI and web development.
                </p>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="max-w-4xl mx-auto mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                {/* Email */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="text-blue-500 h-5 w-5" />
                    <p className="text-sm text-gray-400">Email</p>
                  </div>
                  <p className="text-white font-medium">{aboutInfo[0].value}</p>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="text-blue-500 h-5 w-5" />
                    <p className="text-sm text-gray-400">Phone</p>
                  </div>
                  <p className="text-white font-medium">{aboutInfo[1].value}</p>
                </div>

                {/* Location */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="text-blue-500 h-5 w-5" />
                    <p className="text-sm text-gray-400">Location</p>
                  </div>
                  <p className="text-white font-medium">Narasaraopet, Andhra Pradesh</p>
                </div>
              </div>
            </div>
            {/* End Contact Info Section */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;