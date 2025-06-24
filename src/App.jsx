import React from "react";
import { Routes, Route } from 'react-router-dom';
import MLSimplifiedLanding from "./components/Home";
// import User from "./components/User";


const App = () => {
  return (
    <>
     <Routes>
         
            <Route path="/" element={ <MLSimplifiedLanding/>} />
            {/* <Route path="/profile" element={<User/>} /> */}
           
         </Routes>
      </>
    
  );
};

export default App;