import React, { useState } from 'react';
import { Search, Sun, Moon } from 'lucide-react';
import Header from './components/Header';
import LocationSelector from './components/LocationSelector';
import WasteGuide from './components/WasteGuide';
import SearchBar from './components/SearchBar';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import RecyclingCenters from './components/RecyclingCenters';

function App() {
  const [selectedLocation, setSelectedLocation] = useState('Mumbai');
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-green-50 via-white to-emerald-50'
    }`}>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-full ${
            darkMode 
              ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
              : 'bg-white text-gray-800 hover:bg-gray-50'
          } shadow-lg hover:scale-110 transition-all duration-300`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <Header darkMode={darkMode} />
      
      <main className="container mx-auto px-4 py-8">
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

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;