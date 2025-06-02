import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, HelpCircle } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
}

const Navbar = ({ darkMode }: NavbarProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`w-full py-3 px-4 border-b transition-colors duration-500 ${
      darkMode 
        ? 'bg-stone-800/90 border-stone-700/30' 
        : 'bg-stone-50/90 border-stone-200/40'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-center space-x-8">
        <Link 
          to="/"
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
            isActive('/') 
              ? darkMode 
                ? 'bg-stone-700 text-white' 
                : 'bg-stone-200 text-stone-800'
              : darkMode 
                ? 'text-stone-300 hover:bg-stone-700/50' 
                : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <Home size={20} />
          <span>Home</span>
        </Link>

        <Link 
          to="/about"
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
            isActive('/about') 
              ? darkMode 
                ? 'bg-stone-700 text-white' 
                : 'bg-stone-200 text-stone-800'
              : darkMode 
                ? 'text-stone-300 hover:bg-stone-700/50' 
                : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <Info size={20} />
          <span>About Us</span>
        </Link>

        <Link 
          to="/faq"
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
            isActive('/faq') 
              ? darkMode 
                ? 'bg-stone-700 text-white' 
                : 'bg-stone-200 text-stone-800'
              : darkMode 
                ? 'text-stone-300 hover:bg-stone-700/50' 
                : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <HelpCircle size={20} />
          <span>FAQ</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 