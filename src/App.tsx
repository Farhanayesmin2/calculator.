import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BiradialCalculator from './pages/BiradialCalculator';
import ShareCalculator from './pages/ShareCalculator';
import GemCalculator from './pages/GemCalculator';
import PigeonCalculator from './pages/PigeonCalculator';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100">
      <div className="backdrop-blur-sm">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biradial" element={<BiradialCalculator />} />
            <Route path="/share-certificate" element={<ShareCalculator />} />
            <Route path="/gem" element={<GemCalculator />} />
            <Route path="/pigeon" element={<PigeonCalculator />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;