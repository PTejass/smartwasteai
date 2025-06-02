import React from 'react';
import { Leaf } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
}

const Header = ({ darkMode }: HeaderProps) => {
  return (
    <header className={`relative overflow-hidden min-h-[180px] flex items-center justify-center transition-colors duration-500 ${
      darkMode
        ? 'bg-gradient-to-br from-stone-800 via-emerald-900 to-slate-800 text-white'
        : 'bg-gradient-to-br from-stone-100 via-emerald-50 to-slate-100 text-gray-900'
    }`}>
      {/* Natural Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.15] bg-[radial-gradient(#2c3e2c_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* Organic Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-stone-200/20 via-emerald-200/20 to-slate-200/20" />
      
      {/* Main Content Card - natural paper-like texture */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-4 py-5 flex flex-col items-center rounded-xl shadow-lg border border-stone-200/40 dark:border-stone-700/30 bg-stone-50/90 dark:bg-stone-800/20 backdrop-blur-sm">
        {/* Icon */}
        <div className="mb-3 p-2 rounded-full bg-gradient-to-tr from-stone-600 via-emerald-600 to-slate-600 shadow-md">
          <Leaf className="text-white" size={30} />
        </div>
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-stone-800 dark:text-stone-200 mb-1 text-center">
          Ecoquest
        </h1>
        {/* Subtitle */}
        <p className={`text-sm md:text-base font-medium text-center mb-1 transition-colors duration-300 ${
          darkMode ? 'text-stone-100/90' : 'text-stone-800/90'
        }`}>
          Your Smart Guide to Sustainable Waste Disposal
        </p>
        {/* Tagline */}
        <span className={`inline-block mt-1 px-3 py-0.5 rounded-full text-xs tracking-wider font-semibold transition-all duration-300 ${
          darkMode ? 'bg-stone-800/60 text-stone-100' : 'bg-stone-200 text-stone-800'
        }`}>
          Clean. Green. Future-ready.
        </span>
      </div>
    </header>
  );
};

export default Header;