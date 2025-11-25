import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Abstract3D: React.FC = () => (
  <div className="absolute top-20 right-20 w-20 h-20 geometric-3d opacity-20 pointer-events-none hidden lg:block">
    <div className="w-full h-full relative">
      <div className="absolute inset-0 border-2 border-purple-400/60 rounded-lg transform rotate-45" style={{ boxShadow: '0 0 20px rgba(167, 139, 250, 0.5)' }}></div>
      <div className="absolute inset-4 border-2 border-purple-500/60 rounded-lg" style={{ boxShadow: '0 0 15px rgba(167, 139, 250, 0.4)' }}></div>
      <div className="absolute inset-8 border-2 border-purple-300/60 rounded-lg transform -rotate-45" style={{ boxShadow: '0 0 10px rgba(167, 139, 250, 0.3)' }}></div>
    </div>
  </div>
);

const About: React.FC = () => {
  const points = [
    { title: 'Innovation at Core', description: 'We are constantly exploring new AI technologies to deliver cutting-edge solutions.' },
    { title: 'Client-Centric Approach', description: 'Your success is our priority. We work closely with you to understand your needs and goals.' },
    { title: 'Expert Team', description: 'Our team consists of experienced AI specialists, developers, and digital strategists.' },
  ];

  const { elementRef: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { elementRef: rightRef, isVisible: rightVisible } = useScrollAnimation();
  const { elementRef: pointsRef, isVisible: pointsVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-16 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Abstract3D />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={leftRef} className={`scroll-slide-left ${leftVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why Partner With Fysion Intelligence?</h2>
            <p className="text-lg text-gray-400 mb-8">
              We're not just a service provider; we're your dedicated partner in innovation. We combine technical excellence with a deep understanding of business challenges to create solutions that deliver real, measurable impact.
            </p>
            <div ref={pointsRef} className={`space-y-6 scroll-stagger ${pointsVisible ? 'visible' : ''}`}>
              {points.map((point) => (
                <div key={point.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 icon-3d bg-purple-500/30 text-purple-300 rounded-full p-3 border border-purple-400/50" style={{ boxShadow: '0 0 15px rgba(167, 139, 250, 0.4)' }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{point.title}</h3>
                    <p className="text-gray-400">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div ref={rightRef} className={`relative h-96 scroll-slide-right ${rightVisible ? 'visible' : ''}`}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-500/30 rounded-full blur-2xl" style={{ boxShadow: '0 0 80px rgba(167, 139, 250, 0.4)' }}></div>
            <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-72 h-72 bg-violet-400/30 rounded-full blur-2xl" style={{ boxShadow: '0 0 80px rgba(196, 181, 253, 0.4)' }}></div>
            <img src="/Images/Our-work.jpg" alt="Team discussing" className="relative z-10 w-full h-full object-cover rounded-xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;