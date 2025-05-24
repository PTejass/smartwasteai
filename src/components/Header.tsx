import React from 'react';
import { Recycle } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
}

const Header = ({ darkMode }: HeaderProps) => {
  return (
    <header className={`${
      darkMode 
        ? 'bg-gradient-to-r from-green-800 to-emerald-900 text-white' 
        : 'bg-gradient-to-r from-green-600 to-emerald-500 text-white'
    } py-12 shadow-lg relative overflow-hidden transition-colors duration-300`}>
      <div 
        className={`absolute inset-0 bg-[url('https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg')] bg-cover bg-center ${
          darkMode ? 'opacity-5' : 'opacity-10'
        }`} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
      <div className="container mx-auto px-4 flex items-center justify-center relative z-10">
        <div className={`${
          darkMode 
            ? 'bg-white/5 border border-white/10' 
            : 'bg-white/10'
        } p-8 rounded-2xl backdrop-blur-sm transition-all duration-300`}>
          <div className="flex items-center gap-6">
            <div className={`${
              darkMode 
                ? 'bg-emerald-700' 
                : 'bg-emerald-500'
            } p-4 rounded-full transition-colors duration-300`}>
              <Recycle className="text-white" size={40} />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white">Smart Waste Disposal Guide</h1>
              <p className={`${
                darkMode 
                  ? 'text-emerald-300' 
                  : 'text-emerald-50'
              } mt-2 text-lg font-medium transition-colors duration-300`}>
                Keep India Clean & Green
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header