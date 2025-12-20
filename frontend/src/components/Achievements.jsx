import React from 'react';
import { TbAtom2 } from 'react-icons/tb';
import { FaUserDoctor, FaHospital, FaUserGroup } from 'react-icons/fa6';
import { HiUserGroup } from 'react-icons/hi2';
import { RiTeamFill } from 'react-icons/ri';
import { BsHospitalFill } from 'react-icons/bs';
import { MdGroups } from 'react-icons/md';

const Achievements = () => {
    const achievements = [
        {
            icon: <TbAtom2 size={70} strokeWidth={1.5} className="text-[#17615B]" />,
            label: 'Year of Experience',
            value: '1+',
        },
        {
            icon: <MdGroups size={70} className="text-[#17615B]" />,
            label: 'Medical Specialist',
            value: '5+',
        },
        {
            icon: <FaHospital size={60} className="text-[#17615B]" />,
            label: 'Medical Specialities',
            value: '100+',
        },
        {
            icon: <FaUserGroup size={60} className="text-[#17615B]" />,
            label: 'Happy Patients',
            value: '9+',
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-[#F5EFE7]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-[#17615B] text-3xl md:text-4xl lg:text-5xl font-bold">
                        Our Achievements
                    </h2>
                </div>

                {/* Achievements Grid */}
                <div className="flex flex-wrap justify-center md:justify-between items-start max-w-5xl mx-auto gap-y-12">
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center w-1/2 md:w-auto md:flex-1"
                        >
                            {/* Icon */}
                            <div className="h-20 flex items-center justify-center mb-5">
                                {item.icon}
                            </div>

                            {/* Label */}
                            <p className="text-[#2D3E4E] text-sm md:text-base mb-3">
                                {item.label}
                            </p>

                            {/* Value */}
                            <p className="text-[#2D3E4E] text-3xl md:text-4xl font-bold">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
