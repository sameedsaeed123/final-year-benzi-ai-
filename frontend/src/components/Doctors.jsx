import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import doctor1 from '../assets/doctor (1).png';
import doctor2 from '../assets/doctor (2).png';
import doctor3 from '../assets/doctor (3).png';

const Doctors = () => {
    const doctors = [
        {
            name: 'Dr. Aasma',
            title: 'Psychiatrist',
            image: doctor1,
            rating: 4.5,
            socials: {
                facebook: '#',
                linkedin: '#',
                twitter: '#',
            },
        },
        {
            name: 'Dr. Zahid',
            title: 'Counselor',
            image: doctor2,
            rating: 5,
            socials: {
                facebook: '#',
                linkedin: '#',
                twitter: '#',
            },
        },
        {
            name: 'Dr. Fatima',
            title: 'Psychologist',
            image: doctor3,
            rating: 4.5,
            socials: {
                facebook: '#',
                linkedin: '#',
                twitter: '#',
            },
        },
    ];

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#17615B" stroke="#17615B" strokeWidth="1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                );
            } else if (i === fullStars && hasHalfStar) {
                stars.push(
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id={`half-${i}`}>
                                <stop offset="50%" stopColor="#17615B" />
                                <stop offset="50%" stopColor="#A8C5C2" />
                            </linearGradient>
                        </defs>
                        <polygon 
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" 
                            fill={`url(#half-${i})`}
                            stroke="#17615B"
                            strokeWidth="1"
                        />
                    </svg>
                );
            } else {
                stars.push(
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#A8C5C2" stroke="#A8C5C2" strokeWidth="1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                );
            }
        }
        return stars;
    };

    return (
        <section className="py-16 md:py-24 bg-[#F5EFE7]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-[#17615B] text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                        Meet Our Doctors
                    </h2>
                    <p className="text-[#2D3E4E] text-lg">Our Team</p>
                </div>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {doctors.map((doctor, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200 flex flex-col items-center"
                        >
                            {/* Social Icons */}
                            <div className="flex justify-end w-full gap-4 mb-4">
                                <a
                                    href={doctor.socials.facebook}
                                    className="text-[#17615B] hover:text-[#134e49] transition"
                                >
                                    <FaFacebookF size={18} />
                                </a>
                                <a
                                    href={doctor.socials.linkedin}
                                    className="text-[#17615B] hover:text-[#134e49] transition"
                                >
                                    <FaLinkedinIn size={18} />
                                </a>
                                <a
                                    href={doctor.socials.twitter}
                                    className="text-[#17615B] hover:text-[#134e49] transition"
                                >
                                    <FaXTwitter size={18} />
                                </a>
                            </div>

                            {/* Doctor Image */}
                            <div className="w-full h-64 md:h-80 flex items-end justify-center mb-4">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="h-full w-auto object-contain object-bottom"
                                />
                            </div>

                            {/* Doctor Info */}
                            <h3 className="text-[#17615B] text-2xl font-bold mb-1">
                                {doctor.name}
                            </h3>
                            <p className="text-[#2D3E4E] text-base mb-3">
                                {doctor.title}
                            </p>

                            {/* Star Rating */}
                            <div className="flex items-center gap-1">
                                {renderStars(doctor.rating)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
