import React from 'react';
import heroRight from '../assets/hero-right.png';

const Hero = () => {
  return (
    <main className="lg:flex-grow flex items-start justify-center text-center px-4 md:px-8 pt-20 min-[480px]:pt-12 md:pt-16 lg:pt-6 pb-6 md:pb-8 lg:pb-5 relative overflow-hidden min-h-[85vh] md:min-h-[80vh] lg:min-h-0">
      {/* Left Robot - Hidden on mobile, flipped version */}
      <div className="hidden lg:block absolute left-0 bottom-0 pointer-events-none" style={{ width: '380px', height: 'auto' }}>
        <img 
          src={heroRight} 
          alt="AI Assistant" 
          className="w-full h-auto"
          style={{ 
            transform: 'scaleX(-1)',
            filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))'
          }}
        />
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center z-10 w-full max-w-5xl">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-medium leading-tight md:leading-tight lg:leading-tight drop-shadow-lg mb-4 md:mb-6 lg:mb-0">
            <span className="italic font-serif text-[#17615B]">Restoring Balance</span>{' '}
            <span className="text-white font-light">with</span>
            <br />
            <span className="font-sans font-semibold text-white">Evidence-Based Care</span>
          </h1>
          
          {/* Hide description on screens below 480px */}
          <p className="hidden min-[480px]:block text-white/90 text-sm sm:text-base md:text-xl lg:hidden mt-3 md:mt-6 max-w-xl px-2 leading-relaxed">
            Your AI companion for mental wellness, offering 24/7 support with evidence-based guidance.
          </p>

          <div className="hidden lg:block mt-8">
            <button 
              className="text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(180deg, #17615B 0%, #394846 100%)' }}
            >
              Get Early Access
            </button>
          </div>
        </div>
        
        <div className="lg:hidden w-full mt-4 md:mt-8">
          <button 
            className="text-white px-6 md:px-10 py-2.5 md:py-3.5 rounded-lg font-medium text-sm md:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full max-w-xs mx-auto block"
            style={{ background: 'linear-gradient(180deg, #17615B 0%, #394846 100%)' }}
          >
            Get Early Access
          </button>
        </div>
      </div>

      {/* Right Robot - Hidden on mobile */}
      <div className="hidden lg:block absolute right-0 bottom-0 pointer-events-none" style={{ width: '380px', height: 'auto' }}>
        <img 
          src={heroRight} 
          alt="AI Assistant" 
          className="w-full h-auto"
          style={{ 
            filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))'
          }}
        />
      </div>
    </main>
  );
};

export default Hero;
