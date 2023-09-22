import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";

import Layout from "./pages/Layout";
import About from "./pages/About";
import Home from "./pages/Home";


// General App & pages SCSS
import "../src/css/app.scss";
import "../src/css/layout.scss";
import "../src/css/about.scss";
import "../src/css/home.scss";

// Specific component SCSS
import "../src/css/anchor.scss";
import "../src/css/skill.scss";
import "../src/css/title.scss";
import "../src/css/simple_showcase.scss";


const AppRoute = () => {
  return (
    <Routes>
      {/* Webframe for portfolio (Layout is the base template) */}
      <Route path="/" element={<Layout/>}>
        <Route path="/" index element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Route>
    </Routes>
  );
};

// Main Function
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ?
    <div className="splash-screen">
        <div className="splash-screen">
            {/* https://codepen.io/aaroniker/pen/omvYNZ */}
            <div class="loader circle">
                <svg viewBox="0 0 80 80">
                    <circle id="test" cx="40" cy="40" r="32"></circle>
                </svg>
            </div>
        </div>
    </div>:
    // Page finished loading -> Load portfolio
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
}