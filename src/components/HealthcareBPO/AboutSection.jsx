import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, HeartPulse } from 'lucide-react';

const highlights = [
    { icon: ShieldCheck, title: 'HIPAA Compliant', desc: 'Full compliance with healthcare data regulations and security standards.' },
    { icon: TrendingUp, title: 'Revenue Optimized', desc: 'Maximize collections with expert-driven billing and coding workflows.' },
    { icon: HeartPulse, title: 'Patient-Centric', desc: 'Reduce administrative load so your team can focus on patient care.' },
];

const stats = [
    { number: '2022', label: 'Founded' },
    { number: '25+', label: 'Clients Served' },
    { number: '95%', label: 'Satisfaction Rate' },
];

const AboutSection = () => (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        {/* Subtle background shape */}
        <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-30"
            style={{ background: 'radial-gradient(circle, rgba(24,184,229,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Header */}
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-3 mb-5">
                    <div className="h-px w-8 bg-[#18B8E5]" />
                    <span className="text-[#18B8E5] font-bold uppercase tracking-widest text-xs">About Our Services</span>
                    <div className="h-px w-8 bg-[#18B8E5]" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-800 leading-tight mb-5" style={{ letterSpacing: '-0.02em' }}>
                    Streamline Your Healthcare{' '}
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #18B8E5, #0ea5e9)' }}>
                        Operations
                    </span>
                </h2>
                <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                    At Gateway Workforce, we provide comprehensive Healthcare BPO services — specializing in end-to-end medical billing and telehealth support. Our solutions help healthcare providers optimize revenue cycles, reduce administrative burdens, and enhance patient care.
                </p>
            </motion.div>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {highlights.map((h, i) => {
                    const Icon = h.icon;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            whileHover={{ y: -6 }}
                            className="p-7 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                                style={{ background: 'linear-gradient(135deg, rgba(24,184,229,0.12), rgba(14,165,233,0.08))' }}>
                                <Icon className="w-6 h-6 text-[#18B8E5]" strokeWidth={2} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{h.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                            <div className="mt-5 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                                style={{ background: 'linear-gradient(90deg, #18B8E5, #0ea5e9)' }} />
                        </motion.div>
                    );
                })}
            </div>

            {/* Stats row */}
            <motion.div
                className="flex flex-wrap justify-center gap-10 sm:gap-20 py-10 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #031936 0%, #0a2547 100%)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    >
                        <div className="text-4xl font-black text-[#18B8E5] mb-1">{s.number}</div>
                        <div className="text-gray-400 text-sm uppercase tracking-wider">{s.label}</div>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    </section>
);

export default AboutSection;
