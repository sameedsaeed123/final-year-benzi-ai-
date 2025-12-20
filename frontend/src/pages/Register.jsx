import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import NavbarAlt from '../components/NavbarAlt';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import logo from '../assets/logo-transparent.png';
import therapistImg from '../assets/psycatrist.jpg';
import patientImg from '../assets/patient.jpg';

const Register = () => {
  return (
    <div className="min-h-screen font-sans bg-[#F5EFE7] flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#F5EFE7]">
        <TopBar />
      </div>

      {/* Navbar */}
      <NavbarAlt activePage="" />

      {/* Main Content */}
      <div className="flex-1 bg-[#F5EFE7] py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6">
          {/* Logo and Tagline */}
          <div className="text-center mb-10 md:mb-12">
            <div className="flex justify-center mb-4">
              <img src={logo} alt="Benzi" className="h-16 md:h-24 w-auto" />
            </div>
            <p className="text-[#2D3E4E] text-sm md:text-base max-w-md mx-auto leading-relaxed">
              Empowering mental wellness through personalized care and evidence-based therapies. Take the first step towards a brighter future with us.
            </p>
          </div>

          {/* Registration Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
            {/* Register As Therapist Card */}
            <div className="rounded-3xl shadow-[0_8px_30px_rgba(23,97,91,0.25)] flex flex-col overflow-hidden">
              {/* Teal Content Area */}
              <div className="bg-[#17615B] flex-1 flex flex-col">
                {/* Profile Image */}
                <div className="flex justify-center pt-6 pb-4">
                  <div className="w-20 h-20 md:w-[85px] md:h-[85px] rounded-full bg-[#c8ddd7] p-1 flex items-center justify-center">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src={therapistImg} 
                        alt="Therapist" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="flex-1 flex flex-col px-5 md:px-6 pb-5 text-center">
                  <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                    Register As Therapist
                  </h3>
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                    It's free to join, just add your portfolio, your website and all your social media links. Now let's find you some work.
                  </p>
                </div>
              </div>
              
              {/* White Button Container */}
              <div className="bg-white px-4 md:px-5 py-4 flex justify-center gap-3">
                <Link 
                  to="/register/therapist"
                  className="bg-[#17615B] border border-[#17615B] text-white px-5 md:px-6 py-2 rounded-lg font-medium text-sm hover:bg-transparent hover:text-[#17615B] transition-colors"
                >
                  Register Now
                </Link>
                <Link 
                  to="/login"
                  className="bg-[#17615B] border border-[#17615B] text-white px-5 md:px-6 py-2 rounded-lg font-medium text-sm hover:bg-transparent hover:text-[#17615B] transition-colors"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* Register As User Card */}
            <div className="rounded-3xl shadow-[0_8px_30px_rgba(23,97,91,0.25)] flex flex-col overflow-hidden">
              {/* Teal Content Area */}
              <div className="bg-[#17615B] flex-1 flex flex-col">
                {/* Profile Image */}
                <div className="flex justify-center pt-6 pb-4">
                  <div className="w-20 h-20 md:w-[85px] md:h-[85px] rounded-full bg-[#c8ddd7] p-1 flex items-center justify-center">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src={patientImg} 
                        alt="User" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="flex-1 flex flex-col px-5 md:px-6 pb-5 text-center">
                  <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                    Register As User
                  </h3>
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                    Find a therapist near you or leave a review for a therapist you found on Benzi.
                  </p>
                </div>
              </div>
              
              {/* White Button Container */}
              <div className="bg-white px-4 md:px-5 py-4 flex justify-center gap-3">
                <Link 
                  to="/register/user"
                  className="bg-[#17615B] border border-[#17615B] text-white px-5 md:px-6 py-2 rounded-lg font-medium text-sm hover:bg-transparent hover:text-[#17615B] transition-colors"
                >
                  Register Now
                </Link>
                <Link 
                  to="/login"
                  className="bg-[#17615B] border border-[#17615B] text-white px-5 md:px-6 py-2 rounded-lg font-medium text-sm hover:bg-transparent hover:text-[#17615B] transition-colors"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Register;
