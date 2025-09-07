import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { MessageCircle, Mail, Phone, MapPin, Github, Linkedin, Code2, Send, ArrowRight } from 'lucide-react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{title}</h2>
    <p className="text-xl text-gray-400">{subtitle}</p>
  </div>
);

const Button = ({ children, onClick, variant = 'default', size = 'default', className = '', disabled = false }) => {
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
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit via EmailJS - EXACT SAME AS FIRST CODE
  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("❌ Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);

    emailjs.send(
  "service_8eu5vhm",
  "template_2sogk4b",
  {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    reply_to: formData.email, // 👈 this is key
  },
  "1y4I4OqOUdzBkQ2jA"
)
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        () => {
          setStatus("❌ Failed to send message. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7981081627',
      link: 'tel:+917981081627'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'madhusudhan01162@gmail.com',
      link: 'mailto:madhusudhan01162@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Narasaraopet, Andhra Pradesh',
      link: null
    }
  ];

  const socialLinks = [];

  const handleWhatsApp = () => {
    window.open('https://wa.me/917981081627?text=Hi%20Madhusudhan,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:madhusudhan01162@gmail.com';
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Get In</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's Work Together
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Contact Info */}
            <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:bg-gray-800/60 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 animate-fade-in-up">
              {/* Contact Message */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-gray-300">
                  I'm always interested in hearing about new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              {/* Contact Info Grid */}
              <div className="space-y-4 mb-10">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        className="flex items-center p-4 bg-gray-800/50 border border-gray-700/30 rounded-xl hover:bg-gray-700/60 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 hover:scale-[1.02] transform"
                      >
                        <info.icon className="h-6 w-6 text-blue-400 mr-4" />
                        <div>
                          <p className="text-sm text-gray-400">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center p-4 bg-gray-800/50 border border-gray-700/30 rounded-xl">
                        <info.icon className="h-6 w-6 text-blue-400 mr-4" />
                        <div>
                          <p className="text-sm text-gray-400">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 mb-10">
                <Button
                  onClick={handleWhatsApp}
                  className="hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Message on WhatsApp
                </Button>
                {/* <Button
                  onClick={handleEmail}
                  variant="outline"
                  className="hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                  size="lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Quick Email
                </Button> */}
              </div>

              {/* Social Links */}
              <div className="border-t border-gray-700/50 pt-8">
                {/* <h3 className="text-lg font-semibold mb-6 text-white">Connect With Me</h3> */}
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-xl hover:bg-gray-700/60 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:scale-[1.02] transform transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <social.icon className="h-5 w-5 text-blue-400" />
                      <div>
                        <p className="text-sm font-medium text-white">{social.label}</p>
                        <p className="text-xs text-gray-400">@Madhusudhan</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:bg-gray-800/60 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send me an Email
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-colors"
                  />
                </div>

                {status && (
                  <div
                    className={`p-4 rounded-lg text-sm border ${
                      status.includes("✅")
                        ? "bg-green-900/30 text-green-400 border-green-500/30"
                        : "bg-red-900/30 text-red-400 border-red-500/30"
                    }`}
                  >
                    {status}
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  I'll get back to you as soon as possible!
                </p>
              </div>
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

export default Contact;