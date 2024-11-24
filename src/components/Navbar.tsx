import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calculator } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Biradial Horn', path: '/biradial' },
    { name: 'Share Certificate', path: '/share-certificate' },
    { name: 'Gem Calculator', path: '/gem' },
    { name: 'Pigeon Velocity', path: '/pigeon' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-4 mx-4 mb-8 rounded-xl bg-black/30 backdrop-blur-md border border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Calculator className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold">CalcHub</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;