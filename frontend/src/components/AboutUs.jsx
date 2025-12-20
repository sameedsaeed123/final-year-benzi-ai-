import React from 'react';
import { Bell } from 'lucide-react';
import robotImg from '../assets/aboutus-2.png';
import customer2 from '../assets/customer (2).jpg';

const AboutUs = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F5EFE7] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section 1: Track Your Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          {/* Text Content */}
          <div className="order-1 flex flex-col items-start text-left">
            <span className="text-[#17615B] font-bold text-lg mb-2 block">
              About Us
            </span>
            <h2 className="text-[#1F3A4F] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 font-sans">
              Track Your Progress and Celebrate Every Step of Your Journey
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Our progress tracking feature allows you to monitor your mental health journey with ease. Stay motivated as you see your improvements over time and celebrate each milestone.
            </p>
            <button className="bg-[#17615B] hover:bg-[#134e49] text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
              Learn more
            </button>
          </div>

          {/* Card Content */}
          <div className="order-2 relative flex justify-center lg:justify-end">
            <div className="bg-[#F8FAFC] rounded-[2rem] p-6 w-full max-w-[450px] shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">8 December 2025</p>
                  <h3 className="text-[#1F3A4F] text-2xl font-bold">Weekly Progress</h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 bg-white">
                    <Bell size={20} />
                  </div>
                  <img 
                    src={customer2} 
                    alt="User" 
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                </div>
              </div>

              {/* Bar Chart */}
              <div className="flex items-end justify-between gap-3 h-56 px-2">
                {/* Mon */}
                <div className="flex flex-col items-center justify-end gap-3 flex-1 h-full">
                  <div className="w-full bg-[#E5E7EB] rounded-t-sm" style={{ height: '45%' }}></div>
                  <span className="text-xs font-medium text-gray-900">Mon</span>
                </div>
                {/* Tue */}
                <div className="flex flex-col items-center justify-end gap-3 flex-1 h-full">
                  <div className="w-full bg-[#E5E7EB] rounded-t-sm" style={{ height: '65%' }}></div>
                  <span className="text-xs font-medium text-gray-900">Tue</span>
                </div>
                {/* Wed */}
                <div className="flex flex-col items-center justify-end gap-3 flex-1 h-full">
                  <div className="w-full bg-[#D1D5DB] rounded-t-sm" style={{ height: '55%' }}></div>
                  <span className="text-xs font-medium text-gray-900">Wed</span>
                </div>
                {/* Thu (Active - Dark Green) */}
                <div className="flex flex-col items-center justify-end gap-3 flex-1 h-full">
                  <div className="w-full bg-[#17615B] rounded-t-sm" style={{ height: '85%' }}></div>
                  <span className="text-xs font-medium text-gray-900">Thu</span>
                </div>
                {/* Fri */}
                <div className="flex flex-col items-center justify-end gap-3 flex-1 h-full">
                  <div className="w-full bg-[#E5E7EB] rounded-t-sm" style={{ height: '60%' }}></div>
                  <span className="text-xs font-medium text-gray-900">Fri</span>
                </div>
                {/* Sat */}
                <div className="flex flex-col items-center justify-end gap-3 flex-1 h-full">
                  <div className="w-full bg-[#E5E7EB] rounded-t-sm" style={{ height: '40%' }}></div>
                  <span className="text-xs font-medium text-gray-900">Sat</span>
                </div>
                {/* Sun */}
                <div className="flex flex-col items-center justify-end gap-3 flex-1 h-full">
                  <div className="w-full bg-[#E5E7EB] rounded-t-sm" style={{ height: '75%' }}></div>
                  <span className="text-xs font-medium text-gray-900">Sun</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Support, Share, and Grow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Robot Image */}
          <div className="order-1 relative flex justify-center lg:justify-start">
            <div className="w-full max-w-[400px]">
              <img 
                src={robotImg} 
                alt="Robot Assistant" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2">
            <h2 className="text-[#1F3A4F] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 font-sans">
              Support, Share, and Grow with Our Therapy
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
              Our therapy program allows patients to feel safe and supported while choosing the right professional for their needs. You can explore therapist profiles, read reviews, and select a trusted doctor without worrying about security or privacy concerns. This transparent approach ensures you join a group where you feel comfortable, understood, and confident in your care.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-300 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
                <h3 className="text-[#17615B] text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consect etur. Vestibulum elit eu vulputate tristique enim.
                </p>
              </div>
              <div className="border border-gray-300 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
                <h3 className="text-[#17615B] text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consect etur. Vestibulum elit eu vulputate tristique enim.
                </p>
              </div>
            </div>

            <button className="bg-[#17615B] hover:bg-[#134e49] text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
              Learn more
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
