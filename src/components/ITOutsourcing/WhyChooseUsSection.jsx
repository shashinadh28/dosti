import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeDollarSign, ShieldCheck, GitMerge, Globe, UserCog, Replace, Award, Rocket } from 'lucide-react';

const advantages = [
    {
        title: "Affordable Excellence",
        subtitle: "Top-tier talent at $15/hour",
        icon: BadgeDollarSign,
        dark: true,
    },
    {
        title: "Pre-Vetted Talent",
        subtitle: "Rigorously screened experts",
        icon: ShieldCheck,
        dark: false,
    },
    {
        title: "Seamless Integration",
        subtitle: "Effortless team collaboration",
        icon: GitMerge,
        dark: true,
    },
    {
        title: "24/7 Global Support",
        subtitle: "Round-the-clock assistance",
        icon: Globe,
        dark: false,
    },
    {
        title: "Dedicated Managers",
        subtitle: "Smooth project operations",
        icon: UserCog,
        dark: true,
    },
    {
        title: "Quick Replacement",
        subtitle: "Minimal project disruption",
        icon: Replace,
        dark: false,
    },
    {
        title: "Proven Track Record",
        subtitle: "Trusted by global businesses",
        icon: Award,
        dark: true,
    },
    {
        title: "Fast Turnaround",
        subtitle: "Accelerate your timeline",
        icon: Rocket,
        dark: false,
    },
];

const WhyChooseUsSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="py-20 md:py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' }}>
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,166,244,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(253,199,0,0.04) 0%, transparent 50%)',
                }} />
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                        style={{ background: 'rgba(253,199,0,0.1)', border: '1px solid rgba(253,199,0,0.25)' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Key Advantages</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
                        Why{' '}
                        <span className="relative">
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #FDC700, #f59e0b)' }}>
                                Choose
                            </span>
                            <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                                <path d="M0 2 Q50 0 100 2" stroke="#FDC700" strokeWidth="3" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>
                        {' '}Gateway Workforce?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Experience the difference of working with India's most elite development talent.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {advantages.map((item, index) => {
                        const IconComponent = item.icon;
                        const isHovered = hoveredIndex === index;
                        const accentColor = item.dark ? '#1E2939' : '#FDC700';
                        const isYellow = !item.dark;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                whileHover={{ y: -6 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="relative p-6 rounded-2xl cursor-pointer overflow-hidden group transition-all duration-400"
                                style={{
                                    background: isHovered
                                        ? (isYellow ? 'linear-gradient(135deg, #FDC700, #f59e0b)' : 'linear-gradient(135deg, #1E2939, #2d3748)')
                                        : 'rgba(255,255,255,0.04)',
                                    border: isHovered
                                        ? `1px solid ${accentColor}`
                                        : '1px solid rgba(255,255,255,0.08)',
                                    boxShadow: isHovered ? `0 20px 50px ${isYellow ? 'rgba(253,199,0,0.25)' : 'rgba(30,41,57,0.5)'}` : '0 2px 12px rgba(0,0,0,0.2)',
                                    transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                                }}
                            >
                                {/* Shimmer */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)' }} />

                                {/* Icon */}
                                <div className="relative z-10 mb-5">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
                                        style={{
                                            background: isHovered ? 'rgba(255,255,255,0.15)' : `${accentColor}20`,
                                            border: `1px solid ${isHovered ? 'rgba(255,255,255,0.2)' : accentColor + '30'}`,
                                        }}
                                    >
                                        <IconComponent
                                            size={26}
                                            style={{ color: isHovered ? '#ffffff' : accentColor }}
                                            className="transition-colors duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="relative z-10">
                                    <h3 className="font-bold text-lg mb-1.5 transition-colors duration-300"
                                        style={{ color: isHovered ? '#ffffff' : '#f1f5f9' }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed transition-colors duration-300"
                                        style={{ color: isHovered ? (isYellow ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.7)') : 'rgba(148,163,184,1)' }}>
                                        {item.subtitle}
                                    </p>
                                </div>

                                {/* Bottom accent */}
                                <div
                                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                                    style={{ background: isYellow ? '#1E2939' : '#FDC700' }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
