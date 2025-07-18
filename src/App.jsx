import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Video_Page from "./components/test/Video_Page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Video_Page />} />
      </Routes>
    </Router>
  );
};

export default App;
