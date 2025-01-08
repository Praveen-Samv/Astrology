
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
import Panchang_1 from "./components/bolgs/Panchang_1";
import Astrology_2 from "./components/bolgs/Astrology_2";
import Planets9_3 from "./components/bolgs/Planets9_3";
import MyJoureny_4 from "./components/bolgs/MyJoureny_4";
import NovAstro_5 from "./components/bolgs/NovAstro_5";
import Registration from "./components/loginandReg/Registration";
import Login from "./components/loginandReg/Login";
import PremiumServices from "./components/servicesInfo/PremiumServices";
import FreeServices from "./components/servicesInfo/FreeServices";
import SubstrictionServices from "./components/servicesInfo/SubstrictionServices";
import Example from "./components/bolgs/Example";
import DownloadApp from "./components/servicesInfo/premium/DownloadApp";
import BusinessNumber from "./components/servicesInfo/freeTools/BusinessNumber";
import BrandNumber from "./components/servicesInfo/freeTools/BrandNumber";
import FavorableColor from "./components/servicesInfo/freeTools/FavorableColor";
import CompanyLogo from "./components/servicesInfo/freeTools/CompanyLogo";


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
          <Route path="/blog/panchang" element={<Panchang_1 />} />
          <Route path="/blog/astrology-chakras-psychic-energy" element={<Astrology_2 />} />
          <Route path="/blog/9-planets-characteristics" element={<Planets9_3 />} />
          <Route path="/blog/My Journey with Mindfulness" element={<MyJoureny_4 />} />
          <Route path="/blog/November Astrology event." element={<NovAstro_5 />} />
          <Route path="/blog/3 Pillars for Scalable Astrology Platform" element={<Example />} />
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




