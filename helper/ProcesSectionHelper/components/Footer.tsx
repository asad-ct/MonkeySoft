
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 mt-24">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display tracking-tight font-medium text-gray-900 mb-4">portfolio.</h3>
            <p className="text-gray-500 text-sm">
              A minimal portfolio showcasing my work and skills.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Pages</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-500 hover:text-gray-900 text-sm">Home</Link>
              <Link to="/about" className="text-gray-500 hover:text-gray-900 text-sm">About</Link>
              <Link to="/projects" className="text-gray-500 hover:text-gray-900 text-sm">Projects</Link>
              <Link to="/skills" className="text-gray-500 hover:text-gray-900 text-sm">Skills</Link>
              <Link to="/contact" className="text-gray-500 hover:text-gray-900 text-sm">Contact</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Connect</h4>
            <div className="flex flex-col space-y-2">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 text-sm">Twitter</a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 text-sm">GitHub</a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 text-sm">LinkedIn</a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 text-sm">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
