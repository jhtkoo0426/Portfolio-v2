import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


// General App & pages SCSS
import "../src/css/app.scss";
import "../src/css/layout.scss";
import "../src/css/home.scss";

// Specific component SCSS
import "../src/css/anchor.scss";
import "../src/css/title.scss";
import "../src/css/simple_showcase.scss";


const AppRoute = () => {
  return (
    <Routes>
      {/* Webframe for portfolio (Layout is the base template) */}
      <Route path="/" element={<Layout/>}>
        <Route path="/" index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Route>
    </Routes>
  );
};

// Main Function
export default function App() {
  return (
    // Page finished loading -> Load portfolio
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  )
}