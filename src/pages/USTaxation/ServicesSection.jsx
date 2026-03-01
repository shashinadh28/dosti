import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, FileText, Users, Briefcase } from 'lucide-react';

const servicesData = [
    {
        title: 'Tax Preparation & Compliance',
        icon: FileText,
        bullets: [
            'Individual & business tax returns (1040, 1120, 1065, 1120S, etc.)',
            'State & federal tax filings',
            'Tax planning & strategy',
            'IRS audit support & resolution',
        ],
        iconColor: 'text-red-600',
        image: '/US_Taxation/services/Tax-Preparation-Compliance.webp',
    },
    {
        title: 'Accounting & Bookkeeping',
        icon: DollarSign,
        bullets: [
            'General ledger management',
            'Accounts payable/receivable (AP/AR)',
            'Bank & credit card reconciliation',
            'Financial statement preparation (P&L, balance sheets, cash flow)',
        ],
        iconColor: 'text-indigo-700',
        image: '/US_Taxation/services/Accounting-Bookkeeping.webp',
    },
    {
        title: 'CPA & Accounting Firm Support',
        icon: Users,
        bullets: [
            'Outsourced tax return preparation',
            'Client accounting & payroll processing',
            'Month-end & year-end closing',
            'Financial analysis & reporting',
        ],
        iconColor: 'text-red-600',
        image: '/US_Taxation/services/CPA-Accounting-Firm-Support.webp',
    },
    {
        title: 'Payroll & Business Advisory',
        icon: Briefcase,
        bullets: [
            'Payroll processing & tax filings (941, W-2, 1099)',
            'Sales tax compliance',
            'CFO advisory & financial consulting',
        ],
        iconColor: 'text-indigo-700',
        image: '/US_Taxation/services/Payroll-Business-Advisory.webp',
    },
];

const ServicesSection = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="py-20 md:py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)' }}>
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(220,38,38,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.02) 1px, transparent 1px)',
                    backgroundSize: '56px 56px',
                }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div className="text-center mb-14"
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <span className="inline-block bg-[#3C3B6E] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                        Our Services
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                        Our Taxation &{' '}
                        <span className="relative inline-block">
                            <span className="text-red-600">Accounting</span>
                            <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-red-600 opacity-60" />
                        </span>
                        {' '}Services
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="flex flex-col gap-7 max-w-5xl mx-auto">
                    {servicesData.map((service, i) => {
                        const Icon = service.icon;
                        const isHovered = hovered === i;
                        const isOther = hovered !== null && !isHovered;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.12 }}
                                className={`bg-white rounded-2xl shadow-md border overflow-hidden transition-all duration-300 cursor-pointer
                                    ${isHovered ? 'border-red-400 shadow-2xl scale-[1.02] z-10' : 'border-gray-100'}
                                    ${isOther ? 'opacity-60 blur-[1px]' : ''}`}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <div className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} min-h-[260px]`}>
                                    {/* Image */}
                                    <div className="lg:w-5/12 overflow-hidden bg-gray-50">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-56 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            style={{ transform: isHovered ? 'scale(1.07)' : 'scale(1)', transition: 'transform 0.5s ease' }}
                                        />
                                    </div>
                                    {/* Content */}
                                    <div className="lg:w-7/12 p-7 md:p-9 flex flex-col justify-center bg-white">
                                        <div className="flex items-start gap-4 mb-5">
                                            <div className={`w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center shadow-sm transition-colors duration-300 ${isHovered ? 'bg-red-50' : 'bg-gray-50'}`}>
                                                <Icon className={`w-6 h-6 ${service.iconColor}`} strokeWidth={2} />
                                            </div>
                                            <h3 className={`text-xl font-bold leading-tight transition-colors duration-300 ${isHovered ? 'text-red-600' : 'text-gray-800'}`}>
                                                {service.title}
                                            </h3>
                                        </div>
                                        <ul className="space-y-2.5">
                                            {service.bullets.map((b, j) => (
                                                <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className={`mt-6 h-0.5 w-0 transition-all duration-500 rounded-full ${isHovered ? 'w-full' : ''}`}
                                            style={{ background: 'linear-gradient(90deg, #dc2626, #4f46e5)' }} />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
