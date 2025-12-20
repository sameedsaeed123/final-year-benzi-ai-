import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-transparent.png';
import logoWhite from '../assets/logowhite.png';

const NavbarAlt = ({ activePage = 'About Us' }) => {
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
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Meditation Counselor', href: '/counselor' },
    { name: 'Resources', href: '/resources' },
    { name: 'Subscriptions', href: '/subscriptions' },
    { name: 'FAQS', href: '/faqs' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-[#F5EFE7]">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="bg-[#F5EFE7] rounded-2xl px-4 md:px-6 py-3 flex justify-between items-center">
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
            <button 
              className="hidden md:block text-white px-5 py-2 rounded-lg font-medium transition-all text-sm lg:text-base shadow-md hover:shadow-lg border border-[#17615B]"
              style={{ background: 'linear-gradient(180deg, #17615B 0%, #394846 100%)' }}
            >
              Free Trail
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-[#2D3E4E] p-1"
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
                <Link to="/login" className="text-white/80 hover:text-white font-medium">Login</Link>
                <span className="text-white/40">|</span>
                <Link to="/signup" className="text-white/80 hover:text-white font-medium">Signup</Link>
              </div>
              
              <button className="mt-4 bg-white text-[#2D3E4E] px-5 py-3 rounded-lg font-bold shadow-md hover:bg-gray-100 transition-colors w-full">
                Free Trail
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAlt;
