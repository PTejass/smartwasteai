import React from 'react';
import { Trash2, Recycle, Info } from 'lucide-react';
import { WasteType, LocationWasteInfo } from '../data/types';

interface WasteCardProps {
  waste: WasteType;
  locationSpecificInfo: LocationWasteInfo;
  darkMode: boolean;
}

const WasteCard = ({ waste, locationSpecificInfo, darkMode }: WasteCardProps) => {
  const getIcon = () => {
    switch(waste.category) {
      case 'recyclable':
        return <Recycle className={darkMode ? 'text-blue-400' : 'text-blue-500'} />;
      case 'hazardous':
        return <Info className={darkMode ? 'text-red-400' : 'text-red-500'} />;
      default:
        return <Trash2 className={darkMode ? 'text-gray-400' : 'text-gray-500'} />;
    }
  };

  const getCategoryColor = () => {
    switch(waste.category) {
      case 'recyclable':
        return darkMode 
          ? 'bg-blue-900/30 border-blue-800'
          : 'bg-blue-50 border-blue-100';
      case 'hazardous':
        return darkMode
          ? 'bg-red-900/30 border-red-800'
          : 'bg-red-50 border-red-100';
      case 'compostable':
        return darkMode
          ? 'bg-green-900/30 border-green-800'
          : 'bg-green-50 border-green-100';
      default:
        return darkMode
          ? 'bg-gray-800/30 border-gray-700'
          : 'bg-gray-50 border-gray-100';
    }
  };

  return (
    <div className={`rounded-xl p-5 border transition-all duration-200 ${getCategoryColor()} ${
      darkMode ? 'hover:bg-opacity-40' : 'hover:shadow-md'
    }`}>
      <div className="flex items-start mb-3">
        <div className={`p-2.5 rounded-full mr-3 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-sm`}>
          {getIcon()}
        </div>
        <h3 className={`text-lg font-semibold ${
          darkMode ? 'text-gray-100' : 'text-gray-800'
        }`}>{waste.name}</h3>
      </div>
      <p className={`text-sm mb-4 ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>{waste.description}</p>
      
      <div className={`p-4 rounded-lg border ${
        darkMode
          ? 'bg-gray-800/50 border-gray-700'
          : 'bg-white/80 border-gray-100'
      }`}>
        <h4 className={`text-sm font-medium mb-2 ${
          darkMode ? 'text-gray-200' : 'text-gray-700'
        }`}>How to dispose:</h4>
        <p className={`text-sm ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {locationSpecificInfo.disposalMethod || waste.generalDisposal}
        </p>
        
        {locationSpecificInfo.locationNote && (
          <p className={`text-xs mt-2 italic ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Note: {locationSpecificInfo.locationNote}
          </p>
        )}
      </div>
      
      {waste.tips && (
        <div className={`mt-4 text-xs rounded-lg p-3 ${
          darkMode
            ? 'bg-yellow-900/30 border border-yellow-800 text-yellow-200'
            : 'bg-yellow-50 border border-yellow-100 text-gray-600'
        }`}>
          <span className={`font-medium ${
            darkMode ? 'text-yellow-300' : 'text-yellow-800'
          }`}>Tip:</span>{' '}
          {waste.tips}
        </div>
      )}
    </div>
  );
};

export default WasteCard;