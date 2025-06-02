import React, { useState } from 'react';
import Header from '../components/Header';
import LocationSelector from '../components/LocationSelector';
import WasteGuide from '../components/WasteGuide';
import SearchBar from '../components/SearchBar';
import ContactForm from '../components/ContactForm';
import RecyclingCenters from '../components/RecyclingCenters';

interface HomeProps {
  darkMode: boolean;
}

const Home = ({ darkMode }: HomeProps) => {
  const [selectedLocation, setSelectedLocation] = useState('Mumbai');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-stone-900 text-white' : 'bg-stone-50 text-gray-900'
    }`}>
      <Header darkMode={darkMode} />
      
      <main className="glass-container container mx-auto px-4 py-8 mt-8 mb-12 shadow-lg">
        <section className={`mb-12 rounded-2xl p-6 shadow-xl backdrop-blur-sm ${
          darkMode 
            ? 'bg-gray-800/50 border border-gray-700' 
            : 'bg-white/80 border border-gray-100'
        }`}>
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Find Waste Disposal Information
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <LocationSelector 
              selectedLocation={selectedLocation} 
              onLocationChange={setSelectedLocation}
              darkMode={darkMode}
            />
            <SearchBar 
              searchQuery={searchQuery} 
              onSearchChange={setSearchQuery}
              darkMode={darkMode}
            />
          </div>
        </section>

        <WasteGuide location={selectedLocation} searchQuery={searchQuery} darkMode={darkMode} />
        
        <RecyclingCenters location={selectedLocation} darkMode={darkMode} />
        
        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Suggest Disposal Tips
          </h2>
          <ContactForm darkMode={darkMode} />
        </section>
      </main>
    </div>
  );
};

export default Home; 