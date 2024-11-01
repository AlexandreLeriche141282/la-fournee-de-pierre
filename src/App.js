import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact';
import './App.css';
import './components/Footer/footer.module.scss';
import './components/Navbar/navbar.module.scss';
import './components/TopBanner/topBanner.module.scss';
import TopBanner from './components/TopBanner/TopBanner';
import Loader from './components/Loader/Loader';
import SaintJean from './pages/SaintJean/SaintJean';
import SaintLamb from './pages/SaintLamb/SaintLamb';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router basename="/la-fournee-de-pierre">
            <ScrollToTop />
            <Loader />
            <TopBanner />
            <Navbar />
            <Routes>
                {/* Route par défaut pour afficher About */}
                <Route path="/" element={<Navigate to="/about" />} />
                <Route path="/about" element={<About />} />
                <Route path="/saintJean" element={<SaintJean />} />
                <Route path="/saintLambert" element={<SaintLamb />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/about" replace />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
