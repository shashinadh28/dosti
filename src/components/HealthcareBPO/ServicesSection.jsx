import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Laptop, Briefcase } from 'lucide-react';

const servicesData = [
    {
        title: 'End-to-End Medical Billing & Revenue Cycle Management',
        bullets: [
            'Claims submission & processing',
            'Denial management & appeals',
            'Payment posting & reconciliation',
            'Patient billing & collections',
            'A/R follow-ups & reporting',
        ],
        icon: DollarSign,
    },
    {
        title: 'Telehealth Support Services',
        bullets: [
            'Virtual appointment scheduling',
            'Patient intake & documentation',
            'Remote care coordination',
            'Telemedicine billing & coding',
            'Compliance & data security',
        ],
        icon: Laptop,
    },
    {
        title: 'Additional Healthcare BPO Solutions',
        bullets: [
            'Medical coding & auditing',
            'Credentialing & provider enrollment',
            'Customer service & patient support',
            'EHR/EMR management',
        ],
        icon: Briefcase,
    },
];

const card = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.18 } }),
};

const ServicesSection = () => (
    <section className="py-20 sm:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0f1e38 100%)' }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: 'linear-gradient(rgba(24,184,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(24,184,229,0.04) 1px, transparent 1px)',
                backgroundSize: '56px 56px',
            }} />
        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(24,184,229,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Header */}
            <motion.div
                className="text-center mb-14"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                    style={{ background: 'rgba(24,184,229,0.1)', border: '1px solid rgba(24,184,229,0.25)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18B8E5] animate-pulse" />
                    <span className="text-[#18B8E5] text-xs font-bold uppercase tracking-widest">Our Services</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
                    Our Healthcare{' '}
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #18B8E5, #38bdf8)' }}>
                        BPO Services
                    </span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Comprehensive solutions covering every aspect of healthcare administration.
                </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {servicesData.map((s, i) => {
                    const Icon = s.icon;
                    return (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={card}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="relative rounded-2xl overflow-hidden group cursor-pointer"
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(24,184,229,0.15)',
                            }}
                        >
                            {/* Hover full highlight */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: 'linear-gradient(135deg, rgba(24,184,229,0.12) 0%, transparent 60%)' }} />

                            <div className="relative z-10 p-7 sm:p-8">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                                    style={{ background: 'rgba(24,184,229,0.12)', border: '1px solid rgba(24,184,229,0.25)' }}>
                                    <Icon className="w-7 h-7 text-[#18B8E5]" strokeWidth={2} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-5 leading-tight">{s.title}</h3>

                                {/* Bullets */}
                                <ul className="space-y-3">
                                    {s.bullets.map((b, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                                                style={{ background: '#18B8E5' }} />
                                            {b}
                                        </li>
                                    ))}
                                </ul>

                                {/* Bottom accent */}
                                <div className="mt-7 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                                    style={{ background: 'linear-gradient(90deg, #18B8E5, #38bdf8)' }} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default ServicesSection;
