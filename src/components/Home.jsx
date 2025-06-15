import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Hero from "./Hero";
import TechIcons from "./TechIcons";
import FeedbackSlider from "./FeedbackSlider";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <TechIcons />
      <FeedbackSlider />
      <Footer />
    </div>
  );
};

export default Home;