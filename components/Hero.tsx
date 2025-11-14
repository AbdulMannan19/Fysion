import React from 'react';
import BotIcon from './icons/BotIcon';
import CodeIcon from './icons/CodeIcon';
import WorkflowIcon from './icons/WorkflowIcon';
import MarketingIcon from './icons/MarketingIcon';
import TasksIcon from './icons/TasksIcon';
import BusinessIcon from './icons/BusinessIcon';

const CubeFace: React.FC<{ className: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={`cube-face ${className}`}>{children}</div>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="container mx-auto px-6 z-10 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200" style={{ textShadow: '0 0 30px rgba(0, 255, 255, 0.5)' }}>
                Supercharge
              </span> Your Business with AI & Automation
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              We build intelligent solutions to streamline your workflows, boost efficiency, and drive unprecedented growth.
            </p>
            <a href="#services" className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out hover:scale-105 inline-block shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_40px_rgba(0,255,255,0.8)]">
              Explore Our Solutions
            </a>
          </div>
          <div className="perspective-container flex items-center justify-center h-full min-h-[300px] md:min-h-[400px] overflow-hidden">
             <div className="w-[200px] h-[200px] relative cube">
                <CubeFace className="front"><BotIcon /></CubeFace>
                <CubeFace className="back"><CodeIcon /></CubeFace>
                <CubeFace className="right"><WorkflowIcon /></CubeFace>
                <CubeFace className="left"><MarketingIcon /></CubeFace>
                <CubeFace className="top"><TasksIcon /></CubeFace>
                <CubeFace className="bottom"><BusinessIcon /></CubeFace>
            </div>
          </div>
        </div>
      </div>
       <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ boxShadow: '0 0 100px rgba(0, 255, 255, 0.3)' }}></div>
       <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-500" style={{ boxShadow: '0 0 100px rgba(0, 217, 255, 0.3)' }}></div>
       <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black"></div>

       {/* Floating 3D Shapes with Neon Glow */}
       <div className="absolute top-20 left-10 w-16 h-16 floating-shape opacity-30 pointer-events-none">
         <div className="w-full h-full bg-cyan-500/40 rounded-lg transform rotate-45" style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)' }}></div>
       </div>
       <div className="absolute bottom-40 right-20 w-12 h-12 floating-shape opacity-30 pointer-events-none">
         <div className="w-full h-full bg-cyan-400/40 rounded-full" style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)' }}></div>
       </div>
       <div className="absolute top-1/2 right-1/4 w-10 h-10 floating-shape opacity-25 pointer-events-none">
         <div className="w-full h-full bg-cyan-300/40 transform rotate-45" style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)' }}></div>
       </div>
       <div className="absolute bottom-20 left-1/3 w-14 h-14 floating-shape opacity-30 pointer-events-none">
         <div className="w-full h-full border-2 border-cyan-400/50 rounded-lg" style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)' }}></div>
       </div>

    </section>
  );
};

export default Hero;