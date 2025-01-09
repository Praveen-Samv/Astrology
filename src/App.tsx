
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog_1 from "./components/NavbarInfo/Blog_1";
import About from "./components/NavbarInfo/About";
import Contact from "./components/NavbarInfo/Contact";
import Home from "./components/NavbarInfo/Home";
import More from "./components/NavbarInfo/More";
import AstroRegForm from "./components/servicesInfo/AstroRegForm";
import BolgsMalooha from "./components/bolgs/BolgsMalooha";

import Registration from "./components/loginandReg/Registration";
import Login from "./components/loginandReg/Login";
import PremiumServices from "./components/servicesInfo/PremiumServices";
import FreeServices from "./components/servicesInfo/FreeServices";
import SubstrictionServices from "./components/servicesInfo/SubstrictionServices";

import DownloadApp from "./components/servicesInfo/premium/DownloadApp";
import BusinessNumber from "./components/servicesInfo/freeTools/BusinessNumber";
import BrandNumber from "./components/servicesInfo/freeTools/BrandNumber";
import FavorableColor from "./components/servicesInfo/freeTools/FavorableColor";
import CompanyLogo from "./components/servicesInfo/freeTools/CompanyLogo";
import SolarEclipe from "./components/bolgs/SolarEclipe";
import CarrerInfo from "./components/bolgs/CarrerInfo";
import Mercury from "./components/bolgs/Mercury";
import FinacialAstro from "./components/bolgs/FinacialAstro";
import GlobalAffairs from "./components/bolgs/GlobalAffiars";


const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar will always be visible */}
      <div>
        <Navbar />
      </div>
      
      <div>
      <Routes>
        <Route path="/" element={< Home/>} />
          <Route path="/premium" element={< PremiumServices/>} />
            <Route path="/astro-permium" element={<DownloadApp />} />
            <Route path="/astro-permium" element={<DownloadApp />} />

          <Route path="/numerology" element={< FreeServices/>} />
            <Route path="/compay-name" element={< BusinessNumber/>} />
            <Route path="/brand-name" element={< BrandNumber/>} />
            <Route path="/favourable-color" element={< FavorableColor/>} />
            <Route path="/company-logo" element={< CompanyLogo/>} />
            <Route path="/company-tagline" element={< CompanyLogo/>} />

          <Route path="/subscription" element={< SubstrictionServices/>} />
            <Route path="/astro-service" element={<DownloadApp />} />
            {/* <Route path="/muhurthas-days" element={< Muhurathas/>} />
            <Route path="/business-predictions" element={< BusinessPredictions/>} />
            <Route path="/dos-and-donots" element={< DosandDonot/>} />
            <Route path="/business-report" element={< BusinessReport/>} /> */}

        
        <Route path="/blog" element={<BolgsMalooha />} />
          <Route path="/blog/Zodiac" element={<SolarEclipe />} />
          <Route path="/blog/astrology-chakras-psychic-energy" element={<CarrerInfo />} />
          <Route path="/blog/mercury-retro" element={<Mercury />} />
          <Route path="/blog/finacial-astrology" element={<FinacialAstro />} />
          <Route path="/blog/global-affairs-events." element={<GlobalAffairs />} />
          
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
        
        <Route path="/book" element={<AstroRegForm />} />
        <Route path="/blog/one" element={<Blog_1 />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
      
      
    </Router>
    
  );
};

export default App;




