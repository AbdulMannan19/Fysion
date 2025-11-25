
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import DataDeletion from './components/DataDeletion';

const HomePage: React.FC = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen overflow-x-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-purple-950/30 to-violet-900/20 z-0"></div>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<><PrivacyPolicy /><Footer /></>} />
            <Route path="/terms-conditions" element={<><TermsConditions /><Footer /></>} />
            <Route path="/data-deletion" element={<><DataDeletion /><Footer /></>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
