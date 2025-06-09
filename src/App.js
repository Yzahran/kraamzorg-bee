// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import OverOns from './pages/OverOns';
import Werkgebied from './pages/Werkgebied';
import Vergoedingen from './pages/Vergoedingen';
import WerkenBij from './pages/WerkenBij';
import Inschrijven from './pages/Inschrijven';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/werkgebied" element={<Werkgebied />} />
          <Route path="/vergoedingen" element={<Vergoedingen />} />
          <Route path="/werken-bij" element={<WerkenBij />} />
          <Route path="/inschrijven" element={<Inschrijven />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />

    </Router>
  );
}

export default App;
