import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('');
  const navLinks = ['Services', 'About', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.toLowerCase());
      const scrollPosition = window.scrollY + 200;
      let currentSection = '';

      // Check if we're in the home/hero section
      const homeElement = document.getElementById('home');
      if (homeElement) {
        const homeBottom = homeElement.offsetTop + homeElement.offsetHeight;
        if (scrollPosition < homeBottom) {
          setActiveLink('');
          return;
        }
      }

      // Check each section to find which one is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop - 100) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setActiveLink(targetId); // Set active immediately on click
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="flex flex-col items-center">
          <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-purple-300" style={{ textShadow: '0 0 20px rgba(167, 139, 250, 0.5)' }}>
            F Y S I O N
          </span>
          <span className="text-sm text-purple-400/80 font-medium mt-0.5">INTELLIGENCE</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const linkId = link.toLowerCase();
            return (
              <a
                key={link}
                href={`#${linkId}`}
                onClick={(e) => handleScroll(e, linkId)}
                className={`nav-link text-gray-300 hover:text-white transition-all duration-300 ${activeLink === linkId ? 'active' : ''}`}
              >
                {link}
              </a>
            );
          })}
        </nav>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hidden md:block bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-400 hover:to-violet-400 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_20px_rgba(167,139,250,0.5)] hover:shadow-[0_0_30px_rgba(167,139,250,0.8)]">
          Get a Quote
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-purple-500/20">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => {
              const linkId = link.toLowerCase();
              return (
                <a
                  key={link}
                  href={`#${linkId}`}
                  onClick={(e) => handleScroll(e, linkId)}
                  className={`nav-link text-gray-300 hover:text-white transition-all duration-300 ${activeLink === linkId ? 'active' : ''}`}
                >
                  {link}
                </a>
              );
            })}
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-400 hover:to-violet-400 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_20px_rgba(167,139,250,0.5)] hover:shadow-[0_0_30px_rgba(167,139,250,0.8)]">
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;