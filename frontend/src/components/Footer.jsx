import React from 'react';
import { FiFacebook, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/logowhite.png';

const Footer = () => {
    const quickLinksLeft = ['Home', 'About Us', 'Virtual Counselor', 'Rescources'];
    const quickLinksRight = ['Subscriptions', 'Blogs', "FAQ's", 'Contact Us'];
    const socialIcons = [
        { Icon: FiFacebook, href: '#' },
        { Icon: FiLinkedin, href: '#' },
        { Icon: FaXTwitter, href: '#' },
        { Icon: FiInstagram, href: '#' },
    ];

    return (
        <footer className="bg-[#17615B] text-[#FBF6F0]">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
                    {/* Logo and Description */}
                    <div className="sm:col-span-2 lg:col-span-3">
                        <div className="mb-4">
                            <img src={logo} alt="Benzi" className="h-10 sm:h-12 w-auto object-contain" />
                        </div>
                        <p className="text-[#FBF6F0]/80 text-sm leading-relaxed mb-6 max-w-xs">
                            Empowering mental wellness through personalized care and evidence-based therapies. Take the first step towards a brighter future with us.
                        </p>
                        <p className="font-semibold text-[#FBF6F0] mb-3">Social Links</p>
                        <div className="flex items-center gap-4">
                            {socialIcons.map(({ Icon, href }, idx) => (
                                <a
                                    key={`social-${idx}`}
                                    href={href}
                                    className="text-[#FBF6F0] hover:text-[#FBF6F0]/70 transition"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3">
                        <p className="font-semibold text-[#FBF6F0] mb-4">Quick Links</p>
                        <div className="flex gap-8 sm:gap-12">
                            <ul className="space-y-2 text-[#FBF6F0]/90 text-sm">
                                {quickLinksLeft.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-[#FBF6F0] transition">{item}</a>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-2 text-[#FBF6F0]/90 text-sm">
                                {quickLinksRight.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-[#FBF6F0] transition">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Links */}
                    <div className="lg:col-span-3">
                        <p className="font-semibold text-[#FBF6F0] mb-4">Contact Links</p>
                        <ul className="space-y-3 text-[#FBF6F0]/90 text-sm">
                            <li className="flex items-start gap-3">
                                <FiMapPin className="mt-0.5 flex-shrink-0" size={18} />
                                <span>Building number 81, G3 Johar Town, Lhr</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiMail className="flex-shrink-0" size={18} />
                                <span>benzi@example.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiPhone className="flex-shrink-0" size={18} />
                                <span>+92 234 567 890</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="sm:col-span-2 lg:col-span-3">
                        <p className="font-semibold text-[#FBF6F0] mb-4">Subscribe to Our Newsletter</p>
                        <p className="text-[#FBF6F0]/80 text-sm leading-relaxed mb-4">
                            Lorem ipsum dolor sit, consectetur elit, sed do adipisicing eiusmod tempor
                        </p>
                        <div className="flex max-w-sm border border-[#FBF6F0]/40 rounded-md overflow-hidden">
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="flex-1 min-w-0 px-3 sm:px-4 py-2.5 bg-transparent text-[#FBF6F0] placeholder:text-[#FBF6F0]/60 focus:outline-none text-sm"
                            />
                            <button className="bg-[#FBF6F0] text-[#17615B] font-semibold px-4 sm:px-5 py-2.5 text-sm hover:bg-[#FBF6F0]/90 transition whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-t border-[#FBF6F0]/20"></div>
            </div>

            {/* Bottom Bar */}
            <div className="py-4 sm:py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#FBF6F0]/90 text-sm">
                    ©2025 University of Central Punjab All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
