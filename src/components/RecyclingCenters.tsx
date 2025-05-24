import React from 'react';
import { MapPin, Phone, Clock, Recycle } from 'lucide-react';
import { recyclingCenters } from '../data/recyclingCenters';

interface RecyclingCentersProps {
  location: string;
  darkMode: boolean;
}

const RecyclingCenters = ({ location, darkMode }: RecyclingCentersProps) => {
  const centers = recyclingCenters[location] || [];

  return (
    <section className="mt-12">
      <h2 className={`text-2xl font-semibold mb-6 flex items-center ${
        darkMode ? 'text-gray-100' : 'text-gray-800'
      }`}>
        <Recycle className={`mr-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`} size={24} />
        Recycling Centers in {location}
      </h2>
      
      {centers.length === 0 ? (
        <div className={`text-center py-8 rounded-lg border ${
          darkMode 
            ? 'bg-gray-800/50 border-gray-700 text-gray-400' 
            : 'bg-gray-50 border-gray-100 text-gray-500'
        }`}>
          <p className="italic">No recycling centers found in this area.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {centers.map(center => (
            <div 
              key={center.id} 
              className={`rounded-xl p-6 transition-all duration-200 ${
                darkMode
                  ? 'bg-gray-800/50 border border-gray-700 hover:bg-gray-800/70'
                  : 'bg-white border border-gray-200 hover:shadow-md'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
              }`}>
                {center.name}
              </h3>
              
              <div className="space-y-3 text-sm mb-6">
                <p className={`flex items-center ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <MapPin size={18} className={`mr-3 flex-shrink-0 ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`} />
                  {center.address}
                </p>
                
                <p className={`flex items-center ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <Phone size={18} className={`mr-3 flex-shrink-0 ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`} />
                  {center.phone}
                </p>
                
                <p className={`flex items-center ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <Clock size={18} className={`mr-3 flex-shrink-0 ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`} />
                  {center.hours}
                </p>
              </div>
              
              <div>
                <h4 className={`text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Accepted Items:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {center.acceptedItems.map(item => (
                    <span 
                      key={item}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        darkMode
                          ? 'bg-green-900/50 text-green-300 border border-green-800'
                          : 'bg-green-50 text-green-700'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default RecyclingCenters;