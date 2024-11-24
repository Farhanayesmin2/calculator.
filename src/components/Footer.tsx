import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Github, Twitter, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="mt-16 bg-black/30 backdrop-blur-md border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-bold">CalcHub</span>
            </div>
            <p className="text-gray-400">
              Professional calculation tools for specialized needs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Calculators</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/biradial" className="hover:text-white transition-colors">
                  Biradial Horn Calculator
                </Link>
              </li>
              <li>
                <Link to="/share-certificate" className="hover:text-white transition-colors">
                  Share Certificate Calculator
                </Link>
              </li>
              <li>
                <Link to="/gem" className="hover:text-white transition-colors">
                  Lords Mobile Gem Calculator
                </Link>
              </li>
              <li>
                <Link to="/pigeon" className="hover:text-white transition-colors">
                  Pigeon Velocity Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} CalcHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;