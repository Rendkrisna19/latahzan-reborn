import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Team from "./pages/Team";
import Schedule from "./pages/Schedule";
import Media from "./pages/Media";
import Corp from "./pages/Corp";
import Membership from "./pages/Membership";
import ContactUs from "./pages/ContactUs";
import Game from "./pages/Game";
import Training from "./pages/Training";
import Videos from "./pages/Videos"; // Konsisten dengan nama file
import Images from "./pages/images"; // Konsisten dengan nama file

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Halaman utama yang memuat Hero */}
        <Route
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        />
        <Route path="/team" element={<Team />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/training" element={<Training />} />
        <Route path="/game" element={<Game />} />
        <Route path="/media" element={<Media />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/images" element={<Images />} />
        <Route path="/corp" element={<Corp />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
