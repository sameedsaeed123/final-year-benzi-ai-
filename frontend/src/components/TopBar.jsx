import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-2 flex flex-col md:flex-row justify-between items-center text-sm text-gray-800 gap-2 md:gap-0">
      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-gray-700" />
          <span className="font-medium">+123 456789</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-gray-700" />
          <span className="font-medium">Benzi@gmail.com</span>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-4 font-medium">
        <a href="#" className="hover:text-gray-600">Login</a>
        <a href="#" className="hover:text-gray-600">Signup</a>
      </div>
    </div>
  );
};

export default TopBar;
