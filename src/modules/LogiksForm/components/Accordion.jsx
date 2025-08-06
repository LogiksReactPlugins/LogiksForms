import React, { useState } from 'react';

export default function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
       <div className={`group relative mt-1`}>
      {/* Decorative gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
      
      <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden backdrop-blur-sm">
        {/* Header with gradient background */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center px-6 py-3 bg-gradient-to-r from-gray-50 via-white to-gray-50 hover:from-purple-50 hover:via-indigo-50 hover:to-blue-50 text-left transition-all duration-300 group-hover:shadow-inner"
        >
          <div className="flex items-center space-x-3">
            {/* Animated dot indicator */}
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              isOpen 
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg shadow-purple-200' 
                : 'bg-gray-300 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400'
            }`}></div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {title}
            </h3>
          </div>
          
          {/* Animated chevron with glow effect */}
          <div className={`relative transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <div className={`absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${
              isOpen ? 'bg-purple-400 opacity-30' : 'bg-transparent opacity-0'
            }`}></div>
            <svg
              className="relative w-6 h-6 text-gray-500 group-hover:text-purple-500 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Content with smooth slide animation */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 bg-gradient-to-br from-gray-50/50 to-white">
            <div className="space-y-5 pt-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
    );
};

;
