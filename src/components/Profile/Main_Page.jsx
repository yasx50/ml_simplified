import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import '../../index.css';

const Main_Page = () => {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row h-auto md:h-[calc(100vh-64px)] w-full">
      
      {/* Left Panel */}
      <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-red-700 p-6 flex flex-col items-center gap-4">
        <h2 className="text-green-600 text-3xl md:text-4xl silkscreen-bold text-center">HELLO USER</h2>

        <div className="w-24 h-24 md:w-32 md:h-32 bg-red-700"></div>

        <div className="border border-green-600 text-green-600 p-4 text-center max-w-xs text-sm md:text-base sarpanch-regular">
          Machine Learning lets developers build intelligent systems that learn automatically.
        </div>

        <div className="w-full flex flex-col items-center gap-2">
          {[Github, Instagram, Linkedin].map((Icon, index) => (
            <div
              key={index}
              className="border border-gray-700 w-2/3 sm:w-1/2 p-2 flex justify-center"
            >
              <Icon className="text-red-600" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center gap-4">
        {['python', 'numpy', 'pandas', 'sci-kit learn', 'machine learning'].map((item, index) => (
          <div
            key={index}
            className="border border-gray-700 text-red-600 text-xl md:text-2xl text-center py-4 silkscreen-regular"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main_Page;
