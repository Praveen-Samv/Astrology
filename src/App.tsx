



import React from "react";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/navMain/Home";
import About from "./components/navMain/About";
import Incarnations from "./components/navMain/Incarnations";
import Teachings from "./components/navMain/Teachings";
import Scripturs from "./components/navMain/Scripturs";
import Temples from "./components/navMain/Temples";
import ModernTeaching from "./components/navMain/ModernTeching";


const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar will always be visible */}
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="incarnations" element={<Incarnations />} />
        <Route path="teachings" element={<Teachings />} />
        <Route path="scripture" element={<Scripturs />} />
        <Route path="temples" element={<Temples />} />
        <Route path="modern" element={<ModernTeaching />} />
      </Routes>
      
      
    </Router>
  );
};


export default App;