import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-transparent">
      <div className="container mx-auto px-4 md:px-6 py-2 flex flex-col md:flex-row justify-between items-center text-sm gap-2 md:gap-0">
      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-[#17615B]" />
          <span className="font-medium text-[#17615B]">+123 456789</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-[#17615B]" />
          <span className="font-medium text-[#17615B]">Benzi@gmail.com</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-2 font-medium">
        <span className="text-[#17615B]">Login/Signup</span>
      </div>
      </div>
    </div>
  );
};

export default TopBar;
