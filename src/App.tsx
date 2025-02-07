



import React from "react";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/navMain/Home";


const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar will always be visible */}
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      
    </Router>
  );
};


export default App;