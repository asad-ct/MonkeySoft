
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    if (isHomePage) {
      return location.hash === path;
    }
    return location.pathname === path;
  };

  const getNavLinkClass = (path: string) => {
    return `text-sm uppercase tracking-wide ${isActive(path)
        ? 'text-white font-medium'
        : 'text-gray-400 hover:text-white'
      }`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}>
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className={`text-xl font-display tracking-tight font-medium ${isScrolled ? 'text-white' : 'text-black'}`}>
            portfolio.
          </Link>

          <div className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <a
                  href="#about"
                  className={getNavLinkClass('#about')}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className={getNavLinkClass('#projects')}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className={getNavLinkClass('#skills')}
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className={getNavLinkClass('#contact')}
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/about"
                  className={getNavLinkClass('/about')}
                >
                  About
                </Link>
                <Link
                  to="/projects"
                  className={getNavLinkClass('/projects')}
                >
                  Projects
                </Link>
                <Link
                  to="/skills"
                  className={getNavLinkClass('/skills')}
                >
                  Skills
                </Link>
                <Link
                  to="/contact"
                  className={getNavLinkClass('/contact')}
                >
                  Contact
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden">
            <MobileMenu isHomePage={isHomePage} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const MobileMenu = ({ isHomePage }: { isHomePage: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (isHomePage) {
      return location.hash === path;
    }
    return location.pathname === path;
  };

  const getNavLinkClass = (path: string) => {
    return `py-3 px-4 text-sm uppercase tracking-wide ${isActive(path)
        ? 'text-white font-medium'
        : 'text-gray-400'
      }`;
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white focus:outline-none"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black/95 border-b border-gray-800 shadow-lg animate-fade-in">
          <div className="flex flex-col p-4">
            {isHomePage ? (
              <>
                <a
                  href="#about"
                  className={getNavLinkClass('#about')}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className={getNavLinkClass('#projects')}
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className={getNavLinkClass('#skills')}
                  onClick={() => setIsOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className={getNavLinkClass('#contact')}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/about"
                  className={getNavLinkClass('/about')}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/projects"
                  className={getNavLinkClass('/projects')}
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  to="/skills"
                  className={getNavLinkClass('/skills')}
                  onClick={() => setIsOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  to="/contact"
                  className={getNavLinkClass('/contact')}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
