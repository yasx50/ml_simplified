import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechIcons from "./components/TechIcons";
import FeedbackSlider from "./components/FeedbackSlider";
import Footer from "./components/Footer";

const App = () => {
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

export default App;