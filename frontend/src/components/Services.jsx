import React from 'react';
import {
    FiMessageCircle,
    FiSmile,
    FiUserCheck,
    FiActivity,
    FiClock,
    FiRefreshCw,
    FiArrowRight,
} from 'react-icons/fi';

const services = [
    {
        title: 'Natural Language Processing (NLP)',
        description: 'Capable of understanding and analyzing natural language inputs from users, including text descriptions of emotions, symptoms, and concerns related to mental health.',
        icon: FiMessageCircle,
    },
    {
        title: 'Emotion Recognition',
        description: 'Utilizes algorithms to recognize and interpret emotions expressed in user inputs, allowing for empathetic and contextually appropriate responses.',
        icon: FiSmile,
    },
    {
        title: 'Personalized Recommendations',
        description: 'Provides tailored suggestions, coping strategies, and resources based on individual user data, preferences, and historical interactions with the bot.',
        icon: FiUserCheck,
    },
    {
        title: 'Risk Assessment',
        description: 'Employs algorithms to assess the risk levels associated with mental health issues, such as depression, anxiety, self-harm, or suicidal ideation, and offers...',
        icon: FiActivity,
    },
    {
        title: '24/7 Availability',
        description: 'Accessible round-the-clock, ensuring users can seek support and assistance anytime, especially during urgent situations or outside typical office hours.',
        icon: FiClock,
    },
    {
        title: 'Continuous Learning',
        description: 'Learns from user interactions, feedback, and data insights to improve response accuracy, adaptability, and the overall quality of assistance provided over time.',
        icon: FiRefreshCw,
    },
];

const Services = () => {
    return (
        <section className="bg-[#F5EFE7] py-20 md:py-28">
            <div className="max-w-[90rem] mx-auto px-6 md:px-12">
                <div className="text-left mb-12 md:mb-16">
                    <span className="text-[#3AA6A0] font-bold uppercase tracking-wider text-xs md:text-sm mb-2 block">
                        Services
                    </span>
                    <h2 className="text-[#1F3A4F] text-3xl md:text-4xl lg:text-5xl font-bold">
                        Our Care Offerings
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map(({ title, description, icon: Icon }) => (
                        <div key={title} className="flex">
                            <div
                                className="flex flex-col rounded-[1.5rem] overflow-hidden shadow-[0_22px_55px_rgba(15,118,110,0.35)] w-full"
                                style={{ background: 'linear-gradient(180deg, #0F7F73 0%, #1B363B 100%)' }}
                            >
                                <div className="p-6 md:p-7 pb-5 flex-1 flex flex-col">
                                    <div className="mb-6">
                                        <div className="relative w-16 h-16 md:w-20 md:h-20">
                                            <span className="absolute inset-0 rounded-full bg-white/10 blur-xl"></span>
                                            <div className="relative w-full h-full rounded-full border border-white/30 bg-white/15 flex items-center justify-center">
                                                <Icon className="text-white text-2xl md:text-3xl" />
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-white text-lg md:text-xl font-semibold mb-3 leading-tight">
                                        {title}
                                    </h3>

                                    <p className="text-white/90 text-sm md:text-base leading-relaxed flex-1">
                                        {description}
                                    </p>
                                </div>

                                <div className="bg-white px-5 md:px-6 py-3 md:py-4 flex justify-center">
                                    <button className="bg-[#0F766E] hover:bg-[#0D6259] text-white px-6 py-2.5 rounded-lg font-semibold text-sm md:text-base transition-all shadow-[0_12px_25px_rgba(15,118,110,0.25)] flex items-center gap-2 w-full sm:w-auto justify-center">
                                        Learn More
                                        <FiArrowRight className="text-base" />
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