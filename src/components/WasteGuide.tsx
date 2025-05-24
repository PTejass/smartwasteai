import React, { useMemo, useState } from 'react';
import { wasteTypes } from '../data/wasteTypes';
import { locationSpecificInfo } from '../data/locations';
import WasteCard from './WasteCard';
import AISearchResults from './AISearchResults';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);
interface WasteGuideProps {
  location: string;
  searchQuery: string;
  darkMode: boolean;
}

async function fetchWithRetry(url: string, options: RequestInit, maxRetries = 3): Promise<Response> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      
      // Consider any successful response or non-server error as final
      if (response.ok || response.status < 500) {
        return response;
      }
      
      // Retry on any 5xx server error
      if (attempt < maxRetries) {
        // Exponential backoff: 1s, 2s, 4s
        const delay = Math.pow(2, attempt - 1) * 1000;
        console.log(`Attempt ${attempt} failed with status ${response.status}. Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        // On final attempt, return the error response instead of throwing
        return response;
      }
    } catch (error) {
      if (attempt === maxRetries) {
        console.error('Network error during fetch:', error);
        throw new Error('Failed to connect to the server. Please check your internet connection and try again.');
      }
      console.log(`Attempt ${attempt} failed with network error. Retrying...`);
    }
  }
  throw new Error(`Failed after ${maxRetries} attempts`);
}

const WasteGuide = ({ location, searchQuery, darkMode }: WasteGuideProps) => {
  const [aiResult, setAiResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filteredWasteTypes = useMemo(() => {
    return wasteTypes.filter(waste => 
      waste.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      waste.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const locationInfo = locationSpecificInfo[location] || {};

  // Fetch AI recommendations when search query changes
  React.useEffect(() => {
    const fetchAIRecommendations = async () => {
      if (!searchQuery.trim()) {
        setAiResult(null);
        setError(null);
        return;
      }

      if (searchQuery.length < 3) {
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${supabaseUrl}/functions/v1/gemini-search`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabaseAnonKey}`
          },
          body: JSON.stringify({ query: searchQuery })
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || data.message || 'Failed to fetch AI recommendations');
        }

        if (!data.response) {
          throw new Error('Invalid response from AI service');
        }

        setAiResult(data.response);
      } catch (err) {
        console.error('AI Search Error:', err);
        const errorMessage = err instanceof Error 
          ? err.message 
          : 'Failed to fetch AI recommendations. Please try again later.';
        setError(errorMessage);
        setAiResult(null);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchAIRecommendations, 500);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  return (
    <section>
      <h2 className={`text-xl font-semibold mb-6 ${
        darkMode ? 'text-gray-100' : 'text-gray-700'
      }`}>
        Waste Disposal in {location}
      </h2>
      
      {searchQuery.trim() && (
        <AISearchResults
          result={aiResult}
          isLoading={isLoading}
          error={error}
          darkMode={darkMode}
        />
      )}
      
      {filteredWasteTypes.length === 0 ? (
        <p className={`mt-6 ${darkMode ? 'text-gray-400 italic' : 'text-gray-500 italic'}`}>
          No waste types match your search.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWasteTypes.map(waste => (
            <WasteCard 
              key={waste.id} 
              waste={waste} 
              locationSpecificInfo={locationInfo[waste.id] || {}}
              darkMode={darkMode}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default WasteGuide;