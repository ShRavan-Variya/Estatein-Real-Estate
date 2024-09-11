import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Home from "./Components/MainPages/Home/Home";
import './App.css'
import About from "./Components/MainPages/About/About";
import Properties from "./Components/MainPages/Properties/Properties";
import Services from "./Components/MainPages/Services/Services";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" index element={<Home />} />
            <Route path="/about" index element={<About />} />
            <Route path="/properties" index element={<Properties />} />
            <Route path="/services" index element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
