import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingBookButton from './components/FloatingBookButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import TestimonialsPage from './pages/TestimonialsPage';
import GalleryPage from './pages/GalleryPage';
import FAQPage from './pages/FAQPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="page-enter"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.main>
        <Footer />
        <FloatingBookButton />
      </div>
    </Router>
  );
}

export default App;