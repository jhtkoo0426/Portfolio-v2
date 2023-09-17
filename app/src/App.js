import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Layout from "./pages/Layout";
import About from "./pages/About";
import Home from "./pages/Home";

import "../src/css/app.scss";
import "../src/css/components.scss";


const AppRoute = () => {
  return (
    <Routes>
      {/* Webframe for portfolio (Layout is the base template) */}
      <Route path="/" element={<Layout/>}>
        <Route path="/about" element={<About/>} />
        <Route path="/" index element={<Home/>} />
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