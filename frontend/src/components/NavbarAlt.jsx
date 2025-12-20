import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-transparent.png';

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
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-lg font-medium transition-colors ${
                      link.name === activePage ? 'text-white font-bold' : 'text-white/70 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <button className="mt-4 bg-white text-[#2D3E4E] px-5 py-3 rounded-lg font-bold shadow-md hover:bg-gray-100 transition-colors">
                  Free Trail
                </button>
                
                <div className="flex flex-col gap-4 mt-2 border-t border-white/20 pt-4 md:hidden">
                  <Link to="/login" className="text-white/80 hover:text-white font-medium text-lg">Login</Link>
                  <Link to="/signup" className="text-white/80 hover:text-white font-medium text-lg">Signup</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAlt;
