import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import heroBg from '../assets/hero1.jpg';

const Home = () => {
  return (
    <div className="relative min-h-screen font-sans text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
    </div>
  );
};

export default Home;
