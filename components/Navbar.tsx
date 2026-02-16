
import React from 'react';

interface NavbarProps {
  onHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHome }) => {
  return (
    <nav className="fixed top-0 w-full z-50 apple-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button 
            onClick={onHome}
            className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            Lumina <span className="font-light">ADU</span>
          </button>
          <div className="hidden md:flex gap-6 text-xs font-normal text-gray-600">
            <a href="#solutions" className="hover:text-black transition-colors">Solutions</a>
            <a href="#gallery" className="hover:text-black transition-colors">Projects</a>
            <a href="#ai-assistant" className="hover:text-black transition-colors">AI Planner</a>
            <a href="#areas" className="hover:text-black transition-colors">Areas</a>
          </div>
        </div>
        <div>
          <a 
            href="#contact" 
            className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors"
          >
            Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
