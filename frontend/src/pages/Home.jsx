import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import heroBg from '../assets/hero-main.jpg';
import heroMbl from '../assets/hero-main.jpg';

const Home = () => {
  return (
    <div className="relative min-h-screen font-sans bg-[#F5EFE7]">
      {/* Background Image - Mobile */}
      <div 
        className="absolute top-0 left-0 w-full h-screen z-0 md:hidden"
        style={{
          backgroundImage: `url(${heroMbl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'grayscale(100%)'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Background Image - Desktop */}
      <div 
        className="absolute top-0 left-0 w-full h-screen z-0 hidden md:block"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'grayscale(100%)'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <Hero />
      </div>
      
      {/* About Us Section (Outside the hero background wrapper) */}
      <div className="relative bg-[#F5EFE7]">
        <AboutUs />
      </div>
   

      {/* Features Section */}
      <div className="relative bg-[#F5EFE7]">
        <Features />
      </div>

      {/* Services Section */}
      <div className="relative">
        <Services />
      </div>

      {/* Pricing Section */}
      <div className="relative">
        <Pricing />
      </div>

      {/* CTA Section */}
      <div className="relative">
        <CallToAction />
      </div>

      {/* Footer */}
      <div className="relative">
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
