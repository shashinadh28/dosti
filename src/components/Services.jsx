import React from 'react';
import { motion } from 'framer-motion';

const SERVICES = [
    {
        icon: '🌍',
        title: 'International Staffing',
        desc: 'We source qualified professionals from India and place them across global markets — Gulf, Europe, Southeast Asia & beyond.',
        color: 'from-green-50 to-emerald-50',
        border: 'border-green-200',
        iconBg: 'bg-[#2D6A27]',
    },
    {
        icon: '🎯',
        title: 'Executive Search',
        desc: 'Specialized headhunting for C-suite, senior management, and niche technical roles with discreet, precision-driven outreach.',
        color: 'from-orange-50 to-amber-50',
        border: 'border-orange-200',
        iconBg: 'bg-[#F5A023]',
    },
    {
        icon: '📋',
        title: 'Contract Workforce',
        desc: 'Flexible contract and temporary staffing solutions to ramp your team exactly when you need it, without long-term overheads.',
        color: 'from-blue-50 to-sky-50',
        border: 'border-blue-200',
        iconBg: 'bg-blue-500',
    },
    {
        icon: '🏗️',
        title: 'Industrial & Technical',
        desc: 'From engineers and technicians to skilled tradespeople — we cover manufacturing, construction, oil & gas, and more.',
        color: 'from-purple-50 to-violet-50',
        border: 'border-purple-200',
        iconBg: 'bg-purple-500',
    },
    {
        icon: '🏥',
        title: 'Healthcare Talent',
        desc: 'Nurses, doctors, and allied health professionals placed in hospitals and clinics across multiple continents.',
        color: 'from-rose-50 to-pink-50',
        border: 'border-rose-200',
        iconBg: 'bg-rose-500',
    },
    {
        icon: '💼',
        title: 'HR & Payroll Services',
        desc: 'End-to-end HR outsourcing — from onboarding and compliance to payroll processing and employee benefits management.',
        color: 'from-teal-50 to-cyan-50',
        border: 'border-teal-200',
        iconBg: 'bg-teal-500',
    },
];

const Services = () => (
    <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="text-center mb-16">
                <motion.span
                    className="inline-block px-4 py-1.5 rounded-full bg-[#2D6A27]/10 text-[#2D6A27] text-xs font-bold tracking-widest uppercase mb-4"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    What We Offer
                </motion.span>
                <motion.h2
                    className="font-display font-black text-gray-900 mb-4"
                    style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                >
                    Our <span className="text-[#F5A023]">Services</span>
                </motion.h2>
                <motion.p
                    className="text-gray-500 max-w-xl mx-auto text-base"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.2 }}
                >
                    Comprehensive workforce solutions designed to connect exceptional talent with the right opportunities worldwide.
                </motion.p>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((svc, i) => (
                    <motion.div
                        key={svc.title}
                        className={`group rounded-2xl border ${svc.border} bg-gradient-to-br ${svc.color} p-7 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className={`w-12 h-12 rounded-xl ${svc.iconBg} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                            {svc.icon}
                        </div>
                        <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{svc.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                        <div className="mt-5 flex items-center gap-2 text-[#2D6A27] font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                            <span>Learn more</span>
                            <span>→</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Services;
