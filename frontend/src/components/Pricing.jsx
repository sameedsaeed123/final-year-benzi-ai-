import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import vectorPrice from '../assets/vectorprice.png';

const planContent = {
    monthly: [
        {
            tier: 'Basic',
            price: '$49',
            features: [
                'Personalized AI chat support',
                'Weekly wellbeing summaries',
                'Mood tracking dashboard',
                'Community resources access',
            ],
        },
        {
            tier: 'Standard',
            price: '$99',
            features: [
                'Everything in Basic',
                'On-demand therapist matching',
                'Guided coping exercises',
                'Priority response queue',
            ],
        },
        {
            tier: 'Premium',
            price: '$149',
            features: [
                'Everything in Standard',
                'Dedicated care concierge',
                'Advanced analytics & reports',
                'Quarterly clinician sessions',
            ],
        },
    ],
    annual: [
        {
            tier: 'Basic',
            price: '$100',
            features: [
                'Personalized AI chat support',
                'Weekly wellbeing summaries',
                'Mood tracking dashboard',
                'Community resources access',
            ],
        },
        {
            tier: 'Standard',
            price: '$200',
            features: [
                'Everything in Basic',
                'On-demand therapist matching',
                'Guided coping exercises',
                'Priority response queue',
            ],
        },
        {
            tier: 'Premium',
            price: '$300',
            features: [
                'Everything in Standard',
                'Dedicated care concierge',
                'Advanced analytics & reports',
                'Quarterly clinician sessions',
            ],
        },
    ],
};

const cardGradients = [
    'linear-gradient(180deg, #0F6E64 0%, #0B4C45 100%)',
    'linear-gradient(180deg, #0EB6A5 0%, #0F6E64 60%, #0B3B38 100%)',
    'linear-gradient(180deg, #0F6E64 0%, #0B4C45 100%)',
];

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('annual');
    const plans = planContent[billingCycle];

    return (
        <section className="bg-[#F5EFE7] py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-[#0F6F66] text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                        Select a Affordable Plans for You.
                    </h2>
                    <p className="text-[#3AA6A0] uppercase tracking-[0.4em] text-xs md:text-sm font-semibold">
                        Subscription
                    </p>
                </div>

                <div className="flex justify-center mb-16">
                    <div className="bg-[#0A4F48] rounded-full p-1 flex items-center gap-1 w-full max-w-xs md:max-w-sm">
                        {['monthly', 'annual'].map((cycle) => {
                            const isActive = billingCycle === cycle;
                            return (
                                <button
                                    key={cycle}
                                    type="button"
                                    onClick={() => setBillingCycle(cycle)}
                                    className={`flex-1 px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all ${
                                        isActive
                                            ? 'bg-white text-[#0F6F66] shadow-[0_10px_25px_rgba(8,56,49,0.3)]'
                                            : 'text-white/60'
                                    }`}
                                >
                                    {cycle === 'monthly' ? 'Monthly' : 'Annual'}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.tier}
                            className={`relative rounded-[32px] border border-black/10 shadow-[0_40px_90px_rgba(7,47,43,0.6)] text-white overflow-hidden flex flex-col min-h-[28rem] ${
                                index === 1 ? 'scale-[1.04]' : ''
                            }`}
                            style={{ background: cardGradients[index] }}
                        >
                            {index === 1 && (
                                <img
                                    src={vectorPrice}
                                    alt="Pricing texture"
                                    className="absolute -top-8 md:-top-10 w-36 md:w-44 opacity-95 pointer-events-none select-none"
                                    style={{ right: '-2.4rem' }}
                                />
                            )}
                            <div className="flex flex-col flex-1 px-8 py-10">
                                <div className="text-center">
                                    <h3 className="text-[1.9rem] md:text-[2.2rem] font-bold mb-3 tracking-tight">{plan.tier}</h3>
                                    <div className="h-px bg-white/45 mb-4"></div>
                                    <p className="text-[3rem] md:text-[3.5rem] font-black tracking-tight">{plan.price}</p>
                                </div>

                                <ul className="mt-8 space-y-4 text-sm md:text-base text-white/85">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <FiCheckCircle className="text-white text-lg mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-10">
                                    <Link
                                        to="/register"
                                        className={`w-full flex items-center justify-center gap-2 rounded-[2rem] font-semibold text-sm md:text-base py-3 transition-all ${
                                            index === 1
                                                ? 'text-white'
                                                : 'bg-white text-[#0F6F66]'
                                        }`}
                                        style={
                                            index === 1
                                                ? { background: 'linear-gradient(90deg, #17615B 0%, #2FC7BB 100%)' }
                                                : undefined
                                        }
                                    >
                                        Get Started <FiArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
