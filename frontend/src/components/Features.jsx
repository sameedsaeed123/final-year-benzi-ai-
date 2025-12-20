import React from 'react';
import vector from '../assets/vector.png';
import vector2 from '../assets/vector2.png';
import robot from '../assets/robot.png';
import fingerprint from '../assets/fingerprint.png';
import time from '../assets/time.png';

const features = [
    {
        title: 'Prompt Response',
        copy:
            'Patients also receive prompt responses and assistance from the AI bot, ensuring quick support whenever they need it.',
        icon: robot,
    },
    {
        title: 'Confidentiality',
        copy:
            'Patients also receive prompt responses and assistance from the AI bot, allowing them to express themselves openly and confidentially.',
        icon: fingerprint,
    },
    {
        title: '24/7 Availability',
        copy:
            "Unlike traditional services limited by office hours, the AI bot is available round the clock to offer support whenever it's needed.",
        icon: time,
    },
];

const Features = () => {
    return (
        <section className="py-20 md:py-28 bg-[#F5EFE7] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-10">

                {/* ------------ Heading Section with Updated Vector ------------ */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mb-16 md:mb-20">
                    <div className="relative">
                        <img
                            src={vector}
                            alt="vector"
                            className="absolute -top-24 -left-20 w-56 md:w-72 lg:w-80 opacity-100 mix-blend-normal contrast-125 drop-shadow-[0_0_20px_rgba(0,0,0,0.12)] -z-0 pointer-events-none select-none"
                        />
                        <h2 className="text-[#1F3A4F] text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-tight tracking-tight relative">
                            <span className="block">Guiding You Towards</span>
                            <span className="block"><span className="italic text-[#3AA6A0]">Mental Health</span> with Care</span>
                        </h2>
                    </div>

                    <p className="text-gray-500 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
                        Our platform helps you take the first step toward better mental 
                        well-being with confidence by connecting you to trusted resources, 
                        supportive experts, and simple tools tailored to your needs.
                    </p>
                </div>

                {/* ------------------------ Cards Section ------------------------ */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map(({ title, copy, icon }) => (
                        <div key={title} className="relative overflow-hidden rounded-[1.8rem] shadow-[0_32px_70px_rgba(7,63,56,0.45)] flex">
                            <div className="absolute inset-0" style={{ background: 'linear-gradient(270deg, #233D43 0%, #008170 100%)' }} aria-hidden="true"></div>
                            <div className="absolute -top-16 -right-12 w-[280px] md:w-[320px] opacity-85 pointer-events-none select-none" aria-hidden="true">
                                <img src={vector2} alt="Texture overlay" className="w-full h-auto" />
                            </div>
                            <div className="relative p-9 md:p-10 flex flex-col w-full text-white min-h-[420px]">
                                <div className="w-16 h-16 md:w-20 md:h-20 mb-7 bg-white rounded-full flex items-center justify-center shadow-[0_18px_32px_rgba(7,63,56,0.35)]">
                                    <img src={icon} alt={title} className="w-12 h-12 object-contain" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                                    {title}
                                </h3>
                                <p className="text-sm md:text-base leading-relaxed text-white/90 flex-1">
                                    {copy}
                                </p>
                                <div className="mt-10">
                                    <a
                                        href="#"
                                        className="inline-flex items-center text-sm md:text-base font-medium text-white/90 hover:text-white transition-colors"
                                    >
                                        Learn more <span className="ml-2" aria-hidden="true">&rarr;</span>
                                    </a>
                                    <div className="mt-1 h-[1.5px] w-24 bg-white/55"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
