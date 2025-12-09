import React from 'react';
import { Bell } from 'lucide-react';
import aboutBg from '../assets/aboutus-bg.jpg';
import aboutImg2 from '../assets/aboutus-2.jpg';
import customer2 from '../assets/customer (2).jpg';

const AboutUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section 1: Track Your Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start text-left">
            <span className="text-[#3AA6A0] font-bold uppercase tracking-wider text-sm mb-4 block">
              About Us
            </span>
            <h2 className="text-[#1F3A4F] text-4xl lg:text-[3.25rem] font-bold leading-[1.1] mb-6 font-sans">
              Track Your Progress and Celebrate Every Step of Your Journey
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">
              Our progress tracking feature allows you to monitor your mental health journey with ease. Stay motivated as you see your improvements over time and celebrate each milestone.
            </p>
            <button className="bg-[#134E4A] hover:bg-[#0f3f3c] text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
              Learn more
            </button>
          </div>

          {/* Card Content */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl w-full max-w-[500px] aspect-square">
              {/* Background Image */}
              <img 
                src={aboutBg} 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay Card - Positioned in Center */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white rounded-[2rem] p-6 w-full max-w-[380px] shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-gray-400 text-xs font-medium mb-1">8 December 2025</p>
                      <h3 className="text-[#1F3A4F] text-xl font-bold">Weekly Progress</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 bg-white shadow-sm">
                        <Bell size={18} />
                      </div>
                      <img 
                        src={customer2} 
                        alt="User" 
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                      />
                    </div>
                  </div>

                  {/* Bar Chart */}
                  <div className="flex items-end justify-between gap-3 h-48">
                    {/* Mon */}
                    <div className="flex flex-col items-center justify-end gap-2 flex-1 h-full">
                      <div className="w-full bg-[#E5E7EB] rounded-t-lg" style={{ height: '35%' }}></div>
                      <span className="text-[10px] font-semibold text-gray-500">Mon</span>
                    </div>
                    {/* Tue */}
                    <div className="flex flex-col items-center justify-end gap-2 flex-1 h-full">
                      <div className="w-full bg-[#E5E7EB] rounded-t-lg" style={{ height: '65%' }}></div>
                      <span className="text-[10px] font-semibold text-gray-500">Tue</span>
                    </div>
                    {/* Wed */}
                    <div className="flex flex-col items-center justify-end gap-2 flex-1 h-full">
                      <div className="w-full bg-[#D1D5DB] rounded-t-lg" style={{ height: '55%' }}></div>
                      <span className="text-[10px] font-semibold text-gray-500">Wed</span>
                    </div>
                    {/* Thu (Active - Tallest Dark Blue) */}
                    <div className="flex flex-col items-center justify-end gap-2 flex-1 h-full">
                      <div className="w-full bg-[#1F3A4F] rounded-t-lg" style={{ height: '100%' }}></div>
                      <span className="text-[10px] font-bold text-gray-900">Thu</span>
                    </div>
                    {/* Fri */}
                    <div className="flex flex-col items-center justify-end gap-2 flex-1 h-full">
                      <div className="w-full bg-[#E5E7EB] rounded-t-lg" style={{ height: '65%' }}></div>
                      <span className="text-[10px] font-semibold text-gray-500">Fri</span>
                    </div>
                    {/* Sat */}
                    <div className="flex flex-col items-center justify-end gap-2 flex-1 h-full">
                      <div className="w-full bg-[#E5E7EB] rounded-t-lg" style={{ height: '45%' }}></div>
                      <span className="text-[10px] font-semibold text-gray-500">Sat</span>
                    </div>
                    {/* Sun */}
                    <div className="flex flex-col items-center justify-end gap-2 flex-1 h-full">
                      <div className="w-full bg-[#E5E7EB] rounded-t-lg" style={{ height: '85%' }}></div>
                      <span className="text-[10px] font-semibold text-gray-500">Sun</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Group Therapy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mt-24 md:mt-32">
          {/* Image Content */}
          <div className="order-1 relative flex justify-center lg:justify-start">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl w-full max-w-[350px] lg:max-w-[420px] aspect-[3/4]">
              <img 
                src={aboutImg2} 
                alt="Group Therapy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2">
            <h2 className="text-[#1F3A4F] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 font-sans">
              Support, Share, and Grow with Our Group Therapy
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Our group therapy sessions provide a safe and supportive space where individuals can connect, share experiences, and learn from one another. Guided by trained professionals, each session encourages personal growth, emotional healing, and confidence-building through collective understanding. Together, participants develop healthier coping skills and a stronger sense of community.
            </p>
            <button className="bg-gradient-to-r from-[#134E4A] to-[#0D9488] hover:from-[#0f3f3c] hover:to-[#0a7a6f] text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
              Learn more
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
