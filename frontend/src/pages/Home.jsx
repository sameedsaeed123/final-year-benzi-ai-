import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import heroBg from '../assets/hero1.jpg';
import heroMbl from '../assets/hero-mbl.jpg';

const Home = () => {
  return (
    <div className="relative min-h-screen font-sans text-white">
      {/* Background Image - Mobile */}
      <div 
        className="absolute inset-0  z-0 md:hidden"
        style={{
          
          backgroundImage: `url(${heroMbl})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Background Image - Desktop */}
      <div 
        className="absolute inset-0 w-full  z-0 hidden md:block"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <Hero />
      </div>
      
      {/* About Us Section (Outside the hero background wrapper) */}
      <div className="relative z-20 bg-white">
        <AboutUs />
      </div>

      {/* Features Section */}
      <div className="relative z-20 bg-white">
        <Features />
      </div>
    </div>
  );
};

export default Home;
