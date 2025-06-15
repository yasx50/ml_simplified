import React from "react";
import { FaMoon, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black">
      <h1 className="text-xl font-semibold">ML Simplified</h1>
      <div className="flex gap-4 text-2xl">
        <FaMoon />
        <FaUserCircle />
      </div>
    </nav>
  );
};

export default Navbar;