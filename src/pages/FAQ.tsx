import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  darkMode: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = ({ darkMode }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is Ecoquest?",
      answer: "Ecoquest is a smart waste disposal guide that helps you find the right way to dispose of different types of waste. We provide detailed information about proper waste disposal methods and connect you with local recycling facilities."
    },
    {
      question: "What types of waste can Ecoquest help me dispose of?",
      answer: "Ecoquest provides guidance for various types of waste including plastics, paper, glass, metal, electronic waste, organic waste, and hazardous materials. Each category comes with specific disposal instructions and local guidelines."
    },
    {
      question: "How do I find disposal information for my waste?",
      answer: "Simply use our search feature to look up the type of waste you want to dispose of. You can also browse through different waste categories to find detailed disposal instructions and local recycling options."
    },
    {
      question: "How can I contribute to Ecoquest?",
      answer: "You can help improve Ecoquest by submitting new disposal tips or suggestions through our contact form. Your input helps us make the platform more comprehensive and useful for everyone."
    },
    {
      question: "Is Ecoquest available in my area?",
      answer: "Ecoquest is currently focused on providing waste disposal information for major cities. We're continuously working to expand our coverage to include more locations. Check our platform for the most up-to-date information about your area."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-stone-900 text-white' : 'bg-stone-50 text-gray-900'
    }`}>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                darkMode ? 'bg-stone-800/50' : 'bg-white'
              }`}
            >
              <button
                className={`w-full px-6 py-4 text-left flex justify-between items-center ${
                  darkMode ? 'hover:bg-stone-700/50' : 'hover:bg-stone-50'
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              
              {openIndex === index && (
                <div className={`px-6 pb-4 ${
                  darkMode ? 'text-stone-200' : 'text-gray-600'
                }`}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 