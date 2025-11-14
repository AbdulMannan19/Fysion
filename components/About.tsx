import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Abstract3D: React.FC = () => (
  <div className="absolute top-20 right-20 w-20 h-20 geometric-3d opacity-20 pointer-events-none hidden lg:block">
    <div className="w-full h-full relative">
      <div className="absolute inset-0 border-2 border-cyan-400/60 rounded-lg transform rotate-45" style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}></div>
      <div className="absolute inset-4 border-2 border-cyan-500/60 rounded-lg" style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)' }}></div>
      <div className="absolute inset-8 border-2 border-cyan-300/60 rounded-lg transform -rotate-45" style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)' }}></div>
    </div>
  </div>
);

interface Founder {
  name: string;
  role: string;
  image: string;
  description: string;
}

const founders: Founder[] = [
  {
    name: 'Abdul Mannan',
    role: 'CEO & Co-Founder',
    image: 'Images/Mannan AWS.jpeg',
    description: 'Visionary leader with 10+ years in AI and automation. Expert in transforming businesses through intelligent solutions.'
  },
  {
    name: 'Isfar Mohiuddin',
    role: 'CTO & Co-Founder',
    image: 'Images/Isfar.jpg',
    description: 'Tech innovator specializing in AI architecture and machine learning. Passionate about building scalable AI systems.'
  },
  {
    name: 'Mir Bariq Ali',
    role: 'COO & Co-Founder',
    image: '/Images/Bariq.jpg',
    description: 'Operations strategist with expertise in digital transformation. Focuses on delivering exceptional client experiences.'
  },
];

const FounderCard: React.FC<{ founder: Founder }> = ({ founder }) => (
  <div className="service-card-3d bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400/80 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300 text-center">
    <div className="mb-4 flex justify-center">
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-cyan-400/50" style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)' }}>
        <img 
          src={founder.image} 
          alt={founder.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <h3 className="text-xl font-bold mb-1 text-white">{founder.name}</h3>
    <p className="text-cyan-400 text-sm font-medium mb-3">{founder.role}</p>
    <p className="text-gray-300 text-sm leading-relaxed">{founder.description}</p>
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
  const { elementRef: foundersRef, isVisible: foundersVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-16 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Abstract3D />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={leftRef} className={`scroll-slide-left ${leftVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-gray-400 mb-8">
              We're not just a service provider; we're your dedicated partner in innovation. We combine technical excellence with a deep understanding of business challenges to create solutions that deliver real, measurable impact.
            </p>
            <div ref={pointsRef} className={`space-y-6 scroll-stagger ${pointsVisible ? 'visible' : ''}`}>
              {points.map((point) => (
                <div key={point.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 icon-3d bg-cyan-500/30 text-cyan-300 rounded-full p-3 border border-cyan-400/50" style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)' }}>
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/30 rounded-full blur-2xl" style={{ boxShadow: '0 0 80px rgba(0, 255, 255, 0.4)' }}></div>
            <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-72 h-72 bg-cyan-400/30 rounded-full blur-2xl" style={{ boxShadow: '0 0 80px rgba(0, 217, 255, 0.4)' }}></div>
             <img src="/Images/Our-work.jpg" alt="Team discussing" className="relative z-10 w-full h-full object-cover rounded-xl shadow-2xl"/>
          </div>
        </div>
        
        {/* Founders Section */}
        <div ref={foundersRef} className={`mt-20 scroll-fade-in ${foundersVisible ? 'visible' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Meet Our Founders</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">The visionary leaders behind FYSION Intelligence, driving innovation and excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <FounderCard key={index} founder={founder} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;