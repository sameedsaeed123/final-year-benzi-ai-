import React from 'react';
import customer1 from '../assets/customer (1).jpg';
import customer2 from '../assets/customer (2).jpg';
import customer3 from '../assets/customer (3).jpg';

const Hero = () => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4 md:px-8 py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium max-w-5xl leading-tight drop-shadow-sm">
        <span className="italic font-serif text-[#2D3E4E]">Restoring Balance</span> <span className="text-white font-light">with</span> <br />
        <span className="font-sans font-semibold text-white">Evidence-Based Care</span>
      </h1>
      
      <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 max-w-xl md:max-w-3xl drop-shadow-md leading-relaxed px-2">
        Experience the transformative power of AI-driven empathy, providing insightful guidance and personalized strategies to support progress on your unique mental health journey.
      </p>

      <div className="mt-8 md:mt-10 flex flex-col items-center gap-6">
        <button className="bg-[#2D3E4E] hover:bg-[#1a252f] text-white px-8 py-3 rounded-xl font-medium text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
          Get Early Access
        </button>

        {/* Social Proof */}
        <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
          <div className="flex -space-x-3">
            <img src={customer1} alt="Client" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src={customer2} alt="Client" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src={customer3} alt="Client" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
          </div>
          <div className="text-left">
            <p className="text-xs text-white font-medium">Already helped</p>
            <p className="text-xs text-white font-bold">10,091 clients</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
