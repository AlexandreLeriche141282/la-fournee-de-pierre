import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css'
import './components/Footer/footer.module.scss'
import './components/Navbar/navbar.module.scss'
import './components/TopBanner/topBanner.module.scss'
import TopBanner from './components/TopBanner/TopBanner';

function App() {
    return (
      <Router>
        <TopBanner />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
