



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
import DeadChild from "./components/books/DeadChild";
import Washerman from "./components/books/Washerman";
import Blinddevoot from "./components/books/Blinddevoot";
import LeperBrahma from "./components/books/LeperBrahma";
import BarrenWoman from "./components/books/BarrenWoman";
import ProtectionThieve from "./components/books/ProtectionThieve";
import TuringScarcity from "./components/books/TuringScarcity";
import Liberation from "./components/books/Liberation";
import RestoringTheDevotee from "./components/books/RestoringTheDevotee";
import MiraculasFood from "./components/books/MiraculasFood";
import TheLeelas from "./components/books/TheLeelas";
import SwamiSmarth from "./components/books/SwamiSmarth";
import Contact from "./components/navMain/Contact";


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
          <Route path="revival-story" element={<DeadChild />} />
          <Route path="washerman-story" element={<Washerman />} />
          <Route path="healing-story" element={<Blinddevoot />} />
          <Route path="leper-story" element={<LeperBrahma />} />
          <Route path="barren-woman-story" element={<BarrenWoman />} />
          <Route path="protection-story" element={<ProtectionThieve />} />
          <Route path="abundance-story" element={<TuringScarcity />} />
          <Route path="liberation-story" element={<Liberation />} />
          <Route path="speech-story" element={<RestoringTheDevotee />} />
          <Route path="food-story" element={<MiraculasFood />} />
          <Route path="leelas-story" element={<TheLeelas />} />
          <Route path="teachings-story" element={<SwamiSmarth />} />

        <Route path="temples" element={<Temples />} />
        <Route path="modern" element={<ModernTeaching />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      
      
    </Router>
  );
};


export default App;