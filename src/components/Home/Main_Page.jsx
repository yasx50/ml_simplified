import React from 'react';
import '../../index.css';
import Svg from './Svg';

const Main_Page = () => {
  return (
    <div className="bg-black text-center sarpanch-regular min-h-screen flex flex-col items-center justify-center">
      <p className="text-red-900 text-xl mb-6">Learn Machine Learning for Free</p>

      {/* Center the SVG properly */}
      <div className="flex justify-center items-center overflow-x-auto w-full">
        <Svg />
      </div>
    </div>
  );
};

export default Main_Page;
