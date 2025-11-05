import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdulmannan095', icon: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.128 0c0 1.14-.926 2.065-2.065 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg> },
  ];

  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                Contact Us
            </h3>
            <p className="text-gray-400 mb-4">We're here to help and answer any question you might have.</p>
            <a href="mailto:abdulmannan34695@gmail.com" className="text-xl text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                abdulmannan34695@gmail.com
            </a>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:justify-between pt-8 border-t border-gray-700/50">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} AI Automation Agency. All rights reserved.</p>
          <div className="flex -mx-2 mt-4 sm:mt-0">
            {socialLinks.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300" aria-label={link.name}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;