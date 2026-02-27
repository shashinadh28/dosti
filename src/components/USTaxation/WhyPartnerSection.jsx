import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ShieldCheck, Zap, Headphones } from 'lucide-react';

const items = [
    {
        title: 'Expert Knowledge',
        subtitle: 'US GAAP & Tax Code',
        icon: BookOpen,
        accent: '#3C3B6E',
        border: 'border-indigo-200',
    },
    {
        title: 'Data Security',
        subtitle: 'Secure & Confidential',
        icon: ShieldCheck,
        accent: '#dc2626',
        border: 'border-red-200',
    },
    {
        title: 'Efficiency',
        subtitle: 'Software Proficiency',
        icon: Zap,
        accent: '#3C3B6E',
        border: 'border-indigo-200',
    },
    {
        title: 'Dedicated Support',
        subtitle: '24/7 Dedicated Team',
        icon: Headphones,
        accent: '#dc2626',
        border: 'border-red-200',
    },
];

const WhyPartnerSection = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(60,59,110,0.04) 0%, transparent 60%)' }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div className="text-center mb-14"
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <span className="inline-block bg-[#3C3B6E] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                        Key Benefits
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mx-auto max-w-3xl" style={{ letterSpacing: '-0.02em' }}>
                        Why Partner with Gateway Workforce for{' '}
                        <span className="relative inline-block">
                            <span className="text-red-600">Taxation & Accounting?</span>
                            <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-red-600 opacity-50" />
                        </span>
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, i) => {
                        const Icon = item.icon;
                        const isHovered = hovered === i;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.12 }}
                                whileHover={{ y: -8 }}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                className={`relative p-7 rounded-2xl border text-center flex flex-col items-center cursor-pointer transition-all duration-300 overflow-hidden ${item.border}`}
                                style={{
                                    background: isHovered ? item.accent : '#fff',
                                    boxShadow: isHovered ? `0 20px 60px ${item.accent}30` : '0 2px 20px rgba(0,0,0,0.06)',
                                }}
                            >
                                {/* Icon circle */}
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 shadow-md"
                                    style={{ background: isHovered ? 'rgba(255,255,255,0.2)' : item.accent }}>
                                    <Icon size={28} className={isHovered ? 'text-white' : 'text-white'} strokeWidth={2} />
                                </div>
                                <h3 className={`font-black text-xl mb-1.5 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-900'}`}>
                                    {item.title}
                                </h3>
                                <p className={`text-sm transition-colors duration-300 ${isHovered ? 'text-white/80' : 'text-gray-500'}`}>
                                    {item.subtitle}
                                </p>
                                {/* Hover bottom accent */}
                                <div className={`absolute bottom-0 left-0 w-full h-1 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ background: 'rgba(255,255,255,0.3)' }} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyPartnerSection;
