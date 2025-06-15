import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import User from "./components/User";


const App = () => {
  return (
    <>
     <Routes>
         
            <Route path="/" element={ <Home/>} />
            <Route path="/profile" element={<User/>} />
           
         </Routes>
      </>
    
  );
};

export default App;