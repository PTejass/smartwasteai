import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  darkMode: boolean;
}

const SearchBar = ({ searchQuery, onSearchChange, darkMode }: SearchBarProps) => {
  return (
    <div className="flex flex-col flex-grow">
      <label htmlFor="search" className={`mb-2 font-medium flex items-center ${
        darkMode ? 'text-gray-200' : 'text-gray-700'
      }`}>
        <Search className={darkMode ? 'text-green-400' : 'text-green-600'} size={18} />
        <span className="ml-1">Search Waste Type</span>
      </label>
      <div className="relative">
        <input
          id="search"
          type="text"
          placeholder="Search (e.g., batteries, plastic bottle)"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={`w-full rounded-lg px-4 py-2.5 transition-colors duration-200 ${
            darkMode
              ? 'bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:border-green-500'
              : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-600'
          }`}
        />
      </div>
    </div>
  );
};

export default SearchBar;