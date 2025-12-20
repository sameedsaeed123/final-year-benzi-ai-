import React from 'react';
import TopBar from '../components/TopBar';
import NavbarAlt from '../components/NavbarAlt';
import AboutUs from '../components/AboutUs';
import Doctors from '../components/Doctors';
import Achievements from '../components/Achievements';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen font-sans bg-[#F5EFE7]">
      {/* Top Bar */}
      <div className="bg-[#F5EFE7]">
        <TopBar />
      </div>

      {/* Navbar */}
      <NavbarAlt activePage="About Us" />

      {/* About Us Content */}
      <div className="bg-[#F5EFE7]">
        <AboutUs />
      </div>

      {/* Doctors Section */}
      <Doctors />

      {/* Achievements Section */}
      <Achievements />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default AboutUsPage;
