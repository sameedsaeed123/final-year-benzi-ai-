import React from 'react';
import heroBg from '../assets/hero1.jpg';
import heroMbl from '../assets/aboutus-bg.jpg';
import icon1 from '../assets/icons (1).png';
import icon2 from '../assets/icons (2).png';
import icon3 from '../assets/icons (3).png';
import icon4 from '../assets/icons (4).png';
import icon5 from '../assets/icons (5).png';
import icon6 from '../assets/icons (6).png';

const services = [
    {
        title: 'Natural Language Processing (NLP)',
        description: 'Capable of understanding and analyzing natural language inputs from users, including text descriptions of emotions, symptoms, and concerns related to mental health.',
        icon: icon1,
    },
    {
        title: 'Emotion Recognition',
        description: 'Utilizes algorithms to recognize and interpret emotions expressed in user inputs, allowing for empathetic and contextually appropriate responses.',
        icon: icon2,
    },
    {
        title: 'Personalized Recommendations',
        description: 'Provides tailored suggestions, coping strategies, and resources based on individual user data, preferences, and historical interactions with the bot.',
        icon: icon3,
    },
    {
        title: 'Risk Assessment',
        description: 'Employs algorithms to assess the risk levels associated with mental health issues, such as depression, anxiety, self-harm, or suicidal ideation, and offers...',
        icon: icon4,
    },
    {
        title: '24/7 Availability',
        description: 'Accessible round-the-clock, ensuring users can seek support and assistance anytime, especially during urgent situations or outside typical office hours.',
        icon: icon5,
    },
    {
        title: 'Continuous Learning',
        description: 'Learns from user interactions, feedback, and data insights to improve response accuracy, adaptability, and the overall quality of assistance provided over time.',
        icon: icon6,
    },
];

const Services = () => {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Background Image - Mobile */}
            <div 
                className="absolute inset-0 z-0 md:hidden"
                style={{
                    backgroundImage: `url(${heroMbl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Background Image - Desktop */}
            <div 
                className="absolute inset-0 z-0 hidden md:block"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12">
                <div className="text-left mb-12 md:mb-16">
                    <span className="text-[#3AA6A0] font-bold uppercase tracking-wider text-xs md:text-sm mb-2 block">
                        Services
                    </span>
                    <h2 className="text-[#1F3A4F] text-3xl md:text-4xl lg:text-5xl font-bold">
                        Our Care Offerings
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map(({ title, description, icon }) => (
                        <div key={title} className="flex">
                            {/* Card with gradient background */}
                            <div className="flex flex-col rounded-[2rem] overflow-hidden shadow-[0_25px_60px_rgba(15,118,110,0.35)] w-full" style={{ background: 'linear-gradient(180deg, #008170 0%, #233D43 100%)' }}>
                                <div className="p-6 md:p-7 pb-5 flex-1 flex flex-col">
                                    {/* Icon - Already has background */}
                                    <div className="mb-4">
                                        <img src={icon} alt={title} className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-white text-lg md:text-xl font-semibold mb-3 leading-tight">
                                        {title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white/90 text-sm md:text-base leading-relaxed flex-1">
                                        {description}
                                    </p>
                                </div>

                                {/* White bottom section with button */}
                                <div className="bg-white px-5 md:px-6 py-3 md:py-4">
                                    <button className="bg-[#0F766E] hover:bg-[#0D6259] text-white px-5 py-2 md:px-6 md:py-2.5 rounded-lg font-medium text-sm md:text-base transition-all shadow-md hover:shadow-lg">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Services;