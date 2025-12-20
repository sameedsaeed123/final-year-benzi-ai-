import React from 'react';

const CallToAction = () => {
    return (
        <section className="bg-[#F5EFE7] py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="relative overflow-hidden rounded-[3.5rem] md:rounded-[4.5rem] bg-[#135F59] px-6 py-14 md:px-10 md:py-16 flex items-center justify-center min-h-[260px] md:min-h-[320px]">
                    {/* Concentric circle motif */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                        <div className="relative w-[85vw] max-w-[520px] aspect-square">
                            <span
                                className="absolute inset-0 rounded-full"
                                style={{ background: 'radial-gradient(circle, #D4E3E0 0%, #AFC8C3 65%, #7DA49F 100%)' }}
                            ></span>
                            <span
                                className="absolute inset-[5%] rounded-full"
                                style={{ background: 'radial-gradient(circle, #E3EFEC 0%, #C2D7D2 70%, #9BBFB9 100%)' }}
                            ></span>
                            <span
                                className="absolute inset-[14%] rounded-full"
                                style={{ background: 'radial-gradient(circle, #F5FAF9 0%, #E2EBE9 75%, #C9D8D4 100%)' }}
                            ></span>
                        </div>
                    </div>

                    <div className="relative z-10 text-center px-2 md:px-4 max-w-lg mx-auto">
                        <h2 className="text-[1.3rem] md:text-[2rem] font-semibold leading-tight text-[#145C56]">
                            <span className="block">Take The First</span>
                            <span className="block">Step To The</span>
                            <span className="block">Healthier Mind</span>
                        </h2>
                        <p className="mt-3 text-sm md:text-base text-[#6B8480] max-w-2xl mx-auto">
                            Begin your journey toward emotional well-being with accessible, supportive care.
                        </p>
                        <div className="mt-8">
                            <button
                                className="inline-flex items-center justify-center text-white font-semibold text-sm md:text-lg px-7 py-3 rounded-[1rem] shadow-[0_18px_40px_rgba(5,45,42,0.35)]"
                                style={{ background: '#0B6B60' }}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
