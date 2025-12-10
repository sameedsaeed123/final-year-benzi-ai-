import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-transparent.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    { name: 'Home', active: true },
    { name: 'About Us', active: false },
    { name: 'Meditation Counselor', active: false },
    { name: 'Resources', active: false },
    { name: 'Subscriptions', active: false },
    { name: 'FAQS', active: false },
    { name: 'Contact Us', active: false },
  ];

  return (
    <nav className="container mx-auto px-4 md:px-6 py-4 relative z-50">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl px-4 md:px-6 py-3 flex justify-between items-center shadow-lg border border-white/30 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Benzi Logo" className="h-8 md:h-10" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-sm xl:text-base">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              className={`transition-colors ${
                link.active ? 'text-[#1F3A4F] font-bold' : 'text-white hover:text-gray-200'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-[#2D3E4E] hover:bg-[#1a252f] text-white px-5 py-2 rounded-lg font-medium transition-colors text-sm lg:text-base shadow-md">
            Free Trial
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Off-canvas Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
        
        {/* Sidebar */}
        <div className={`absolute top-0 right-0 w-[280px] h-full bg-[#2D3E4E]/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  className={`text-lg font-medium transition-colors ${
                    link.active ? 'text-white font-bold' : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-4 bg-white text-[#2D3E4E] px-5 py-3 rounded-lg font-bold shadow-md hover:bg-gray-100 transition-colors">
                Free Trial
              </button>
              
              <div className="flex flex-col gap-4 mt-2 border-t border-white/20 pt-4 md:hidden">
                <a href="#" className="text-white/80 hover:text-white font-medium text-lg">Login</a>
                <a href="#" className="text-white/80 hover:text-white font-medium text-lg">Signup</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
