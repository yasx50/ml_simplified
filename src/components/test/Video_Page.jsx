import React from 'react';
import Navbar from '../Navbar';
import '../../index.css'; // custom fonts, etc.
import Footer from '../Footer';

const Video_Page = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Navbar />

      <div className="flex flex-col md:flex-row p-4 gap-4">
        {/* Left Section */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          {/* Video Placeholder */}
          <div className="border border-gray-700 aspect-video h-70">
            {/* Replace with <iframe> or <video> tag */}
            <img
              src="https://img.youtube.com/vi/YOUR_VIDEO_ID/hqdefault.jpg"
              alt="ML Video"
              className=" object-cover"
            />
          </div>

          {/* Explanation Box */}
        
          <textarea placeholder='explain above video in your words' className='border border-gray-700 p-4 text-sm sm:text-base sarpanch-regular'></textarea>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 w-full flex flex-col gap-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="border border-gray-700 p-3 text-green-600 text-center silkscreen-regular hover:bg-green-900/20 cursor-pointer transition"
            >
              mcq {index + 1}
            </div>
          ))}
        </div>
        <div>
        </div>
      </div>
          <Footer/>
    </div>
  );
};

export default Video_Page;
