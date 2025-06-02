import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
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

        <Navbar darkMode={darkMode} />
        
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<AboutUs darkMode={darkMode} />} />
          <Route path="/faq" element={<FAQ darkMode={darkMode} />} />
        </Routes>

        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;