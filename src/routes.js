import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AllEvent from "./pages/all-event";
import Home from "./pages/home";

function NavigationRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-events" element={<AllEvent />} />
      </Routes>
      <Footer />
    </>
  );
}

export default NavigationRoutes;
