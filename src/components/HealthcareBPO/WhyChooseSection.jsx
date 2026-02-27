import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, DollarSign, Users, Cpu, Clock } from 'lucide-react';

const whyItems = [
    {
        icon: Briefcase,
        title: 'Industry Expertise',
        description: 'Skilled professionals with deep knowledge of medical billing, coding (ICD-10, CPT, HCPCS) and compliance (HIPAA, CMS).',
    },
    {
        icon: DollarSign,
        title: 'Cost-Effective Solutions',
        description: 'Reduce overhead costs while improving billing accuracy and collections — maximizing your net revenue.',
    },
    {
        icon: Users,
        title: 'Scalable Support',
        description: 'Flexible services tailored to practices of all sizes — from solo clinicians to large hospital networks.',
    },
    {
        icon: Cpu,
        title: 'Advanced Technology',
        description: 'Secure, AI-driven platforms for efficient claims processing, denial management, and telehealth management.',
    },
    {
        icon: Clock,
        title: '24/7 Support',
        description: 'Dedicated teams ensuring uninterrupted operations across all time zones with real-time reporting.',
    },
];

const WhyChooseSection = () => (
    <section className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f0f9ff 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(24,184,229,0.07) 0%, transparent 50%)',
            }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Header */}
            <motion.div
                className="text-center mb-14"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-3 mb-5">
                    <div className="h-px w-8 bg-[#18B8E5]" />
                    <span className="text-[#18B8E5] font-bold uppercase tracking-widest text-xs">Why Choose Us</span>
                    <div className="h-px w-8 bg-[#18B8E5]" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-800 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                    Why Choose Gateway Workforce{' '}
                    <br className="hidden sm:block" />
                    for{' '}
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #18B8E5, #0ea5e9)' }}>
                        Healthcare BPO?
                    </span>
                </h2>
            </motion.div>

            {/* Two-column layout */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">

                {/* Left — image */}
                <motion.div
                    className="lg:w-1/2 flex items-center justify-center"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="/Healthcare_BPO/Healthcare.webp"
                            alt="Healthcare BPO Illustration"
                            className="w-full h-auto object-contain"
                            style={{ display: 'block' }}
                        />
                    </div>
                </motion.div>

                {/* Right — feature cards */}
                <div className="lg:w-1/2 grid grid-cols-1 gap-5">
                    {whyItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                whileHover={{ x: 6 }}
                                className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                    style={{ background: 'linear-gradient(135deg, rgba(24,184,229,0.15), rgba(14,165,233,0.08))' }}>
                                    <Icon className="w-5 h-5 text-[#18B8E5]" strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-1 text-base">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                                </div>
                                <div className="ml-auto self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#18B8E5]" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
);

export default WhyChooseSection;
