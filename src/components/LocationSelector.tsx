import React from 'react';
import { MapPin } from 'lucide-react';
import { locations } from '../data/locations';

interface LocationSelectorProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  darkMode: boolean;
}

const LocationSelector = ({ selectedLocation, onLocationChange, darkMode }: LocationSelectorProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="location" className={`mb-2 font-medium flex items-center ${
        darkMode ? 'text-gray-200' : 'text-gray-700'
      }`}>
        <MapPin className={darkMode ? 'text-green-400' : 'text-green-600'} size={18} />
        <span className="ml-1">Your Location</span>
      </label>
      <select
        id="location"
        value={selectedLocation}
        onChange={(e) => onLocationChange(e.target.value)}
        className={`rounded-lg px-4 py-2.5 transition-colors duration-200 ${
          darkMode
            ? 'bg-gray-800 border border-gray-700 text-gray-100 focus:border-green-500'
            : 'bg-white border border-gray-300 text-gray-900 focus:border-green-600'
        }`}
      >
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;