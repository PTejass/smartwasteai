import React from 'react';
import { Sparkles } from 'lucide-react';

interface AISearchResultsProps {
  result: string | null;
  isLoading: boolean;
  error: string | null;
  darkMode: boolean;
}

const AISearchResults = ({ result, isLoading, error, darkMode }: AISearchResultsProps) => {
  if (!result && !isLoading && !error) return null;

  return (
    <div className={`mt-6 rounded-xl p-6 ${
      darkMode 
        ? 'bg-gray-800/50 border border-gray-700' 
        : 'bg-white border border-gray-200'
    }`}>
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`} size={20} />
        <h3 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
          AI-Powered Recommendations
        </h3>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
        </div>
      )}

      {error && !isLoading && (
        <div className={`p-4 rounded-lg ${
          darkMode 
            ? 'bg-red-900/30 border border-red-800 text-red-300' 
            : 'bg-red-50 border border-red-100 text-red-600'
        }`}>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {result && !isLoading && !error && (
        <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none`}>
          <div className={`whitespace-pre-wrap text-sm leading-relaxed ${
            darkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>
            {result}
          </div>
        </div>
      )}
    </div>
  );
};

export default AISearchResults;