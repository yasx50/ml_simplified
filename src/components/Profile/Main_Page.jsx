import React from "react";
import Navbar from "../Navbar";
import "../../index.css";

const Main_Page = () => {
  return (
    <>
      <div className="bg-black w-full h-screen flex">
        {/* Left Box */}
        <div className="w-1/2 h-full text-red-700 sarpanch-regular  items-center justify-center">
          <div className="photo hi ">
            <p className="mt-20 text-4xl">Hello User</p>
            <div className="flex ">
              <div className="h-40 w-40 border-1 border-red-700 flex flex-col "></div>
              <div className="flex flex-col">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="h-10 mb-2 w-100 border border-red-700"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-px h-full bg-red-700"></div>

        {/* Right Box */}
        <div className="w-1/2 h-full text-red-700 sarpanch-regular flex items-center justify-center">
          this is right box
        </div>
      </div>
    </>
  );
};

export default Main_Page;
