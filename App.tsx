
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-black to-cyan-900/20 z-0"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
