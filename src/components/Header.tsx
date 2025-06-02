import React from 'react';
import { Recycle } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
}

const Header = ({ darkMode }: HeaderProps) => {
  return (
    <header className={`${
      darkMode 
        ? 'bg-gradient-to-r from-green-900 via-emerald-800 to-green-900 text-white' 
        : 'bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 text-white'
    } py-16 shadow-xl relative overflow-hidden transition-all duration-500`}>
      <div 
        className={`absolute inset-0 bg-[url('https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg')] bg-cover bg-center ${
          darkMode ? 'opacity-10' : 'opacity-15'
        } transform scale-105 transition-all duration-700`} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />
      <div className="container mx-auto px-4 flex items-center justify-center relative z-10">
        <div className={`${
          darkMode 
            ? 'bg-white/10 border border-white/20 shadow-2xl' 
            : 'bg-white/20 shadow-xl'
        } p-10 rounded-3xl backdrop-blur-md transition-all duration-500 hover:scale-[1.02]`}>
          <div className="flex items-center gap-8">
            <div className={`${
              darkMode 
                ? 'bg-emerald-600 shadow-lg shadow-emerald-900/50' 
                : 'bg-emerald-400 shadow-lg shadow-emerald-500/50'
            } p-5 rounded-2xl transition-all duration-500 hover:rotate-12`}>
              <Recycle className="text-white" size={48} />
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white tracking-tight mb-2">Ecoquest</h1>
              <p className={`${
                darkMode 
                  ? 'text-emerald-200' 
                  : 'text-emerald-50'
              } text-xl font-medium transition-colors duration-300 tracking-wide`}>
                Journey to a Sustainable Future
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header