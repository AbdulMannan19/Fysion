import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex flex-col justify-center min-h-screen overflow-hidden pt-16">
      <div className="container mx-auto px-6 z-10 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 mb-8">
            <span className="text-sm text-purple-300">🚀 AI-Powered Business Transformation</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Automate Your Business with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-purple-300" style={{ textShadow: '0 0 30px rgba(167, 139, 250, 0.5)' }}>
              Intelligent AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your operations with cutting-edge AI automation. Streamline workflows, boost productivity, and scale effortlessly with custom AI solutions built for your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-400 hover:to-violet-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_20px_rgba(167,139,250,0.5)] hover:shadow-[0_0_40px_rgba(167,139,250,0.8)]"
            >
              Start Your AI Journey
            </a>
            <a
              href="#services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/60 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              Watch Demo
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400 mb-2">
                60%
              </div>
              <div className="text-gray-400 text-sm md:text-base">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400 mb-2">
                100%
              </div>
              <div className="text-gray-400 text-sm md:text-base">Auto-Reply Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400 mb-2">
                24/7
              </div>
              <div className="text-gray-400 text-sm md:text-base">Support</div>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="absolute top-1/4 right-10 hidden lg:block">
          <div className="bg-purple-500/20 backdrop-blur-md border border-purple-400/30 rounded-2xl p-4 shadow-[0_0_30px_rgba(167,139,250,0.3)] animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">AI Automation</div>
                <div className="text-purple-300 text-xs">Active</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-20 hidden lg:block" style={{ animationDelay: '1s' }}>
          <div className="bg-purple-500/20 backdrop-blur-md border border-purple-400/30 rounded-2xl p-4 shadow-[0_0_30px_rgba(167,139,250,0.3)] animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Analytics</div>
                <div className="text-green-400 text-xs">+127%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/4 right-32 hidden lg:block" style={{ animationDelay: '2s' }}>
          <div className="bg-purple-500/20 backdrop-blur-md border border-purple-400/30 rounded-2xl p-4 shadow-[0_0_30px_rgba(167,139,250,0.3)] animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Automation</div>
                <div className="text-purple-300 text-xs">Running</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ boxShadow: '0 0 100px rgba(167, 139, 250, 0.3)' }}></div>
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-violet-400/20 rounded-full blur-3xl animate-pulse delay-500" style={{ boxShadow: '0 0 100px rgba(196, 181, 253, 0.3)' }}></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black"></div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;