import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-transparent.png';
import logoWhite from '../assets/logowhite.png';

const NavbarAlt = ({ activePage = 'About Us' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling 100px
      setShowStickyNav(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Meditation Counselor', href: '/counselor' },
    { name: 'Resources', href: '/resources' },
    { name: 'Subscriptions', href: '/subscriptions' },
    { name: 'FAQS', href: '/faqs' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      {/* Sticky Navbar - appears after scrolling */}
      <nav 
        className={`fixed left-0 right-0 z-[9999] transition-all duration-500 ease-out ${showStickyNav ? 'top-0 opacity-100' : '-top-24 opacity-0'}`}
      >
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 md:px-6 py-3 flex justify-between items-center shadow-lg border border-gray-200/50">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img src={logo} alt="Benzi Logo" className="h-7 md:h-9" />
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-sm xl:text-base">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors ${
                    link.name === activePage ? 'text-[#17615B] font-bold' : 'text-[#2D3E4E] hover:text-[#17615B]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <Link 
                to="/register"
                className="hidden md:block text-white px-5 py-2 rounded-lg font-medium transition-all text-sm lg:text-base shadow-md hover:shadow-lg"
                style={{ background: 'linear-gradient(180deg, #17615B 0%, #394846 100%)' }}
              >
                Free Trail
              </Link>
              
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-[#2D3E4E] p-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Regular Navbar */}
      <nav className="bg-[#F5EFE7]">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="bg-white rounded-2xl px-4 md:px-6 py-3 flex justify-between items-center shadow-md">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img src={logo} alt="Benzi Logo" className="h-7 md:h-9" />
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-sm xl:text-base">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors ${
                    link.name === activePage ? 'text-[#17615B] font-bold' : 'text-[#2D3E4E] hover:text-[#17615B]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <Link 
                to="/register"
                className="hidden md:block text-white px-5 py-2 rounded-lg font-medium transition-all text-sm lg:text-base shadow-md hover:shadow-lg border border-[#17615B]"
                style={{ background: 'linear-gradient(180deg, #17615B 0%, #394846 100%)' }}
              >
                Free Trail
              </Link>
              
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-[#2D3E4E] p-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Off-canvas Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
        
        {/* Full Width Menu */}
        <div className={`absolute top-0 left-0 right-0 w-full bg-[#2D3E4E] shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex flex-col p-6">
            <div className="flex justify-between items-center mb-6">
              <Link to="/">
                <img src={logoWhite} alt="Benzi Logo" className="h-8" />
              </Link>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-base font-medium transition-colors py-2 border-b border-white/10 ${link.name === activePage ? 'text-white font-bold' : 'text-white/70 hover:text-white'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/20">
              <Link to="/register" className="text-white/80 hover:text-white font-medium" onClick={() => setIsOpen(false)}>Login</Link>
              <span className="text-white/40">|</span>
              <Link to="/register" className="text-white/80 hover:text-white font-medium" onClick={() => setIsOpen(false)}>Signup</Link>
            </div>
            
            <Link to="/register" className="mt-4 bg-white text-[#2D3E4E] px-5 py-3 rounded-lg font-bold shadow-md hover:bg-gray-100 transition-colors w-full text-center block" onClick={() => setIsOpen(false)}>
              Free Trail
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarAlt;
