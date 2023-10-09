import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/nabar/navbar'; // Replace with your Navbar component
import Features from './component/Features/features';
import Pricing from './component/pricing/pricing';
import Home from './component/home/home'
import LatestVideos from './component/latest_video/latestvideo';
import Footer from './component/Footer/footer';
import Service from './service';
import Contact from './component/contact/Contact';
import '../src/App.css'
import Sigup from './component/sigup/sigup';

function App() {
  return (
    <Router> {/* Make sure to wrap your routes with the Router */}
      <Navbar /> {/* Your Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/latest" element={<LatestVideos />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sigup" element={<Sigup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
