import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/itzskgithub', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shubham-kumar-pandey-bbb15b272', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shubhampandey8969@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="w-6 h-6" />
            <span className="text-xl font-bold">Portfolio</span>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Portfolio. Shubham kr. Pandey.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;