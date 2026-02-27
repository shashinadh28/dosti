import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const HeroSection = () => {
    const [textAnimated, setTextAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setTextAnimated(true), 600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0c1a2e 100%)' }}>
            {/* Animated grid background */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(rgba(0,166,244,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,166,244,0.04) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
            }} />

            {/* Glowing orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,166,244,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,160,35,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28 lg:py-32">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 xl:w-7/12">
                        {/* Badge */}
                        <div className="overflow-hidden mb-5">
                            <motion.div
                                initial={{ x: -80, opacity: 0 }}
                                animate={textAnimated ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                className="inline-flex items-center gap-2"
                            >
                                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                                <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">
                                    Gateway Workforce: IT Outsourcing
                                </span>
                            </motion.div>
                        </div>

                        {/* Headline */}
                        <div className="overflow-hidden mb-5">
                            <motion.h1
                                initial={{ y: 60, opacity: 0 }}
                                animate={textAnimated ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
                                style={{ letterSpacing: '-0.02em' }}
                            >
                                Scale Your Team with{' '}
                                <span className="relative">
                                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #38bdf8, #00A6F4)' }}>
                                        Expert Indian
                                    </span>
                                </span>
                                {' '}Developers
                            </motion.h1>
                        </div>

                        {/* Price tag */}
                        <div className="overflow-hidden mb-6">
                            <motion.div
                                initial={{ y: 40, opacity: 0 }}
                                animate={textAnimated ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                                className="flex items-center gap-3"
                            >
                                <div className="px-4 py-2 rounded-full text-sm font-bold" style={{ background: 'rgba(253,199,0,0.12)', border: '1px solid rgba(253,199,0,0.3)', color: '#FDC700' }}>
                                    Starting at Just
                                </div>
                                <span className="text-3xl sm:text-4xl font-black text-yellow-400">$15<span className="text-2xl">/Hour</span></span>
                            </motion.div>
                        </div>

                        {/* Description */}
                        <div className="overflow-hidden mb-8">
                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={textAnimated ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                                className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg"
                            >
                                Access Pre-Vetted, Top-Tier Developers at Competitive Rates. Our skilled Indian developers seamlessly integrate with your team, accelerating project delivery without compromising quality.
                            </motion.p>
                        </div>

                        {/* Stats row */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={textAnimated ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
                            className="flex flex-wrap gap-6 mb-10"
                        >
                            {[
                                { value: '500+', label: 'Developers' },
                                { value: '98%', label: 'Client Satisfaction' },
                                { value: '72hrs', label: 'To Onboard' },
                            ].map((stat) => (
                                <div key={stat.label} className="flex flex-col">
                                    <span className="text-2xl font-black text-white">{stat.value}</span>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={textAnimated ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button
                                onClick={() => document.getElementById('journey-section')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 font-bold rounded-xl text-white text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                                style={{ background: 'linear-gradient(135deg, #00A6F4, #0284c7)', boxShadow: '0 4px 24px rgba(0,166,244,0.35)' }}
                            >
                                Discover Our Process
                            </button>
                            <a
                                href="https://calendly.com/deepak-teja/introduction"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 font-bold rounded-xl text-base border-2 border-sky-500/40 text-sky-300 hover:border-sky-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
                            >
                                Book a Call →
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ x: 80, opacity: 0 }}
                        animate={textAnimated ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        className="w-full lg:w-1/2 xl:w-5/12"
                    >
                        <div className="lg:sticky lg:top-24">
                            <ContactForm />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
