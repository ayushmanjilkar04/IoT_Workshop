import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/home/Home";
import About from "./Components/pages/about/About";
import Services from "./Components/pages/services/Services";
import Contact from "./Components/pages/contact/Contact";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
