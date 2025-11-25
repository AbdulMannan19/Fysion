import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
      </svg>
    ),
    title: 'Intelligent Chatbots',
    description: 'Deploy AI-powered chatbots that understand context, learn from interactions, and provide 24/7 customer support.',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Seamless integrations',
      'CRM integration'
    ],
    badge: null,
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
      </svg>
    ),
    title: 'AI Call Agents',
    description: 'Intelligent voice agents that handle calls, customizable to your business needs for customer service and sales.',
    features: [
      'Custom voice personalities',
      'Appointment scheduling',
      'Lead qualification',
      'Real-time call analytics'
    ],
    badge: 'Most Popular',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    ),
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and streamline complex workflows with intelligent process automation.',
    features: [
      'Custom workflow design',
      'API integrations',
      'Task scheduling',
      'Real-time monitoring'
    ],
    badge: null,
    color: 'from-blue-500 to-cyan-500'
  }
];

const Services: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-fade-in ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Our AI Solutions</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive automation services tailored to your business needs
          </p>
        </div>

        {/* Service Cards */}
        <div ref={cardsRef} className={`grid grid-cols-1 md:grid-cols-3 gap-8 scroll-stagger ${cardsVisible ? 'visible' : ''}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-black/60 to-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(167,139,250,0.3)] group"
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-violet-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 floating-shape">
          <div className="w-full h-full border-2 border-purple-400/50 rounded-lg transform rotate-45" style={{ boxShadow: '0 0 30px rgba(167, 139, 250, 0.4)' }}></div>
        </div>
        <div className="absolute bottom-20 right-10 w-24 h-24 floating-shape">
          <div className="w-full h-full border-2 border-purple-500/50 rounded-full" style={{ boxShadow: '0 0 25px rgba(167, 139, 250, 0.4)' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Services;