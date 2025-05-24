import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  darkMode: boolean;
}

const ContactForm = ({ darkMode }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    wasteType: '',
    disposalTip: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const subject = `New Waste Disposal Tip: ${formData.wasteType}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Waste Type: ${formData.wasteType}

Disposal Tip:
${formData.disposalTip}
      `;

      const mailtoLink = `mailto:pbtejas10bvhs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setSubmitted(true);
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          wasteType: '',
          disposalTip: '',
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError('Failed to send email. Please try again.');
      console.error('Error sending email:', err);
    }
  };

  const inputClasses = `w-full rounded-lg px-4 py-2.5 transition-colors duration-200 ${
    darkMode
      ? 'bg-gray-800 border border-gray-700 text-gray-100 focus:border-green-500'
      : 'bg-white border border-gray-300 text-gray-900 focus:border-green-600'
  }`;

  return (
    <div className={`max-w-lg mx-auto rounded-lg shadow-lg ${
      darkMode
        ? 'bg-gray-800/50 border border-gray-700'
        : 'bg-white border border-gray-200'
    } p-6`}>
      {submitted ? (
        <div className="text-center py-8">
          <div className={`rounded-md p-4 mb-4 ${
            darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-700'
          }`}>
            Thank you for your suggestion! We appreciate your contribution.
          </div>
          <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
            We'll review your tip and add it to our guide soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className={`rounded-md p-4 mb-4 ${
              darkMode ? 'bg-red-900/50 text-red-300' : 'bg-red-100 text-red-700'
            }`}>
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="name" className={`block mb-2 font-medium ${
              darkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className={`block mb-2 font-medium ${
              darkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
          
          <div>
            <label htmlFor="wasteType" className={`block mb-2 font-medium ${
              darkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>Waste Type</label>
            <input
              type="text"
              id="wasteType"
              name="wasteType"
              value={formData.wasteType}
              onChange={handleChange}
              placeholder="e.g., Light Bulbs, Batteries, etc."
              className={inputClasses}
              required
            />
          </div>
          
          <div>
            <label htmlFor="disposalTip" className={`block mb-2 font-medium ${
              darkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>Disposal Tip</label>
            <textarea
              id="disposalTip"
              name="disposalTip"
              value={formData.disposalTip}
              onChange={handleChange}
              rows={4}
              className={inputClasses}
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className={`w-full py-2.5 px-4 rounded-lg flex items-center justify-center transition-colors duration-200 ${
              darkMode
                ? 'bg-green-600 hover:bg-green-500 text-white'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            <Send size={18} className="mr-2" />
            Submit Tip
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;