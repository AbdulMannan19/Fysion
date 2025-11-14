import React from 'react';
import type { Service } from '../types';
import WorkflowIcon from './icons/WorkflowIcon';
import TasksIcon from './icons/TasksIcon';
import BusinessIcon from './icons/BusinessIcon';
import BotIcon from './icons/BotIcon';
import CodeIcon from './icons/CodeIcon';
import MarketingIcon from './icons/MarketingIcon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services: Service[] = [
  { icon: WorkflowIcon, title: 'Simplified AI Workflows', description: 'We design and implement intuitive AI-powered workflows to enhance productivity and reduce complexity.' },
  { icon: TasksIcon, title: 'Automating Repetitive Tasks', description: 'Free up your team\'s valuable time by automating mundane and repetitive tasks with intelligent bots.' },
  { icon: BusinessIcon, title: 'AI for Business Owners', description: 'Leverage AI to gain strategic insights, optimize operations, and make data-driven decisions for growth.' },
  { icon: BotIcon, title: 'Automating Customer Service', description: 'Enhance customer satisfaction with 24/7 AI-powered support, instant responses, and personalized interactions.' },
  { icon: MarketingIcon, title: 'Lead Generation Automation', description: 'Automatically identify, qualify, and nurture leads using AI, filling your sales pipeline effortlessly.' },
  { icon: BotIcon, title: 'AI Chatbots', description: 'Deploy intelligent chatbots on your website and social media to engage visitors and convert them into customers.' },
  { icon: BotIcon, title: 'AI Voice Call Agents', description: 'Implement sophisticated voice agents for customer service, appointment setting, and outbound calls.' },
  { icon: CodeIcon, title: 'Web Development', description: 'Creating modern, responsive, and high-performance websites tailored to your business needs.' },
  { icon: CodeIcon, title: 'App Development', description: 'Building custom mobile applications for iOS and Android to connect with your customers on the go.' },
  { icon: BusinessIcon, title: 'Google Business Profiles', description: 'Optimize your GBP listing to improve local SEO, attract more customers, and manage your online reputation.' },
  { icon: MarketingIcon, title: 'Digital Marketing', description: 'Comprehensive digital marketing strategies including SEO, SEM, and content marketing to boost your online presence.' },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="service-card-3d bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400/80 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300">
    <div className="mb-4 icon-3d">
      <service.icon />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
    <p className="text-gray-300">{service.description}</p>
  </div>
);

const Robot3D: React.FC = () => (
  <div className="robot-3d absolute bottom-10 right-10 w-32 h-40 opacity-20 pointer-events-none hidden lg:block">
    {/* Robot Head */}
    <div className="robot-head absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-cyan-500/40 rounded-lg border border-cyan-400/70" style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)' }}>
      <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-300 rounded-full" style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }}></div>
      <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-300 rounded-full" style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }}></div>
    </div>
    {/* Robot Body */}
    <div className="robot-body absolute top-12 left-1/2 -translate-x-1/2 w-16 h-20 bg-cyan-500/40 rounded-lg border border-cyan-400/70" style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-300/60 rounded-full" style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.7)' }}></div>
    </div>
    {/* Robot Arms */}
    <div className="absolute top-14 left-0 w-4 h-8 bg-cyan-500/40 rounded border border-cyan-400/70 transform -rotate-12" style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}></div>
    <div className="absolute top-14 right-0 w-4 h-8 bg-cyan-500/40 rounded border border-cyan-400/70 transform rotate-12" style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}></div>
  </div>
);

const Services: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="services" className="pb-16 relative">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 floating-shape opacity-30">
          <div className="w-full h-full border-2 border-cyan-400/50 rounded-lg transform rotate-45" style={{ boxShadow: '0 0 30px rgba(0, 255, 255, 0.4)' }}></div>
        </div>
        <div className="absolute bottom-20 right-10 w-24 h-24 floating-shape opacity-30">
          <div className="w-full h-full border-2 border-cyan-500/50 rounded-full" style={{ boxShadow: '0 0 25px rgba(0, 255, 255, 0.4)' }}></div>
        </div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 floating-shape opacity-25">
          <div className="w-full h-full bg-cyan-500/30 rounded-lg transform rotate-12" style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' }}></div>
        </div>
        <Robot3D />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerRef} className={`text-center mb-12 scroll-fade-in ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Services</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">We offer a comprehensive suite of AI and development services to transform your business.</p>
        </div>
        <div ref={cardsRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-stagger ${cardsVisible ? 'visible' : ''}`}>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;