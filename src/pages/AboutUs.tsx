import React from 'react';

interface AboutUsProps {
  darkMode: boolean;
}

const AboutUs = ({ darkMode }: AboutUsProps) => {
  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-stone-900 text-white' : 'bg-stone-50 text-gray-900'
    }`}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">About Ecoquest</h1>
        
        <div className="space-y-8">
          <section className={`p-6 rounded-xl shadow-lg ${
            darkMode ? 'bg-stone-800/50' : 'bg-white'
          }`}>
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="leading-relaxed">
              At Ecoquest, we're dedicated to making waste disposal smarter and more sustainable. 
              Our mission is to empower individuals and communities with the knowledge and tools 
              they need to make environmentally conscious decisions about waste management.
            </p>
          </section>

          <section className={`p-6 rounded-xl shadow-lg ${
            darkMode ? 'bg-stone-800/50' : 'bg-white'
          }`}>
            <h2 className="text-xl font-semibold mb-4">What We Do</h2>
            <p className="leading-relaxed mb-4">
              We provide an intelligent platform that helps users identify and properly dispose of 
              different types of waste. Our system uses advanced technology to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Identify waste types through image recognition</li>
              <li>Provide accurate disposal instructions</li>
              <li>Connect users with local recycling facilities</li>
              <li>Track environmental impact</li>
            </ul>
          </section>

          <section className={`p-6 rounded-xl shadow-lg ${
            darkMode ? 'bg-stone-800/50' : 'bg-white'
          }`}>
            <h2 className="text-xl font-semibold mb-4">Our Journey</h2>
            <p className="leading-relaxed">
              As a team of passionate students from Dayananda Sagar College of Engineering, we're 
              embarking on this journey to make a difference in waste management. While we're just 
              starting out, we're committed to learning, growing, and building a platform that can 
              truly help people make better waste disposal decisions. We believe in the power of 
              technology to solve real-world problems, and we're excited to be part of the solution 
              for a cleaner, greener future.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 