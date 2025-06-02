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
      question: "How does Ecoquest identify different types of waste?",
      answer: "Ecoquest uses advanced image recognition technology to analyze photos of waste items. Our system can identify various materials and provide appropriate disposal instructions based on local recycling guidelines."
    },
    {
      question: "What types of waste can Ecoquest help me dispose of?",
      answer: "Ecoquest can help with a wide range of waste types including plastics, paper, glass, metal, electronic waste, organic waste, and hazardous materials. We provide specific instructions for each category."
    },
    {
      question: "How accurate is the waste identification system?",
      answer: "Our system has been trained on thousands of waste items and maintains a high accuracy rate. However, for best results, ensure your photos are clear and well-lit. When in doubt, you can always manually select the waste type."
    },
    {
      question: "Can I track my recycling impact?",
      answer: "Yes! Ecoquest keeps track of your recycling activities and provides insights into your environmental impact, including metrics like CO2 saved and materials diverted from landfills."
    },
    {
      question: "Is Ecoquest available in my area?",
      answer: "Ecoquest is continuously expanding its coverage. We currently support major cities and regions, with regular updates to include more locations. Check our app for the most up-to-date coverage in your area."
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