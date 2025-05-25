import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 text-center text-gray-600 dark:text-gray-300 text-sm">
      <div className="container mx-auto px-4">
        <p className="flex items-center justify-center">
          Made with <Heart size={16} className="mx-1 text-red-500" /> by Computer Science Students
        </p>
        <p className="mt-1">© {new Date().getFullYear()} Smart Waste Disposal Guide</p>
      </div>
    </footer>
  );
};

export default Footer;