
import React, { useState } from 'react';

interface NavbarProps {
  onHome: () => void;
}

const links = [
  { href: '#solutions', label: 'Solutions' },
  { href: '#gallery', label: 'Projects' },
  { href: '#feasibility', label: 'Calculator' },
  { href: '#areas', label: 'Areas' },
];

const Navbar: React.FC<NavbarProps> = ({ onHome }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 apple-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button
            onClick={() => { setOpen(false); onHome(); }}
            className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            Lumina <span className="font-light">ADU</span>
          </button>
          <div className="hidden md:flex gap-6 text-xs font-normal text-gray-600">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-black transition-colors">{l.label}</a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors"
          >
            Consultation
          </a>
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          >
            <span className={`block w-5 h-[1.5px] bg-black transition-all ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-black transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-black transition-all ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`md:hidden apple-blur border-b border-gray-200 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-gray-700 hover:text-black border-b border-gray-100 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
