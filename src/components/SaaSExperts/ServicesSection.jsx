import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, ShoppingCart, Target, CheckCircle } from 'lucide-react';

const services = [
    {
        title: 'Salesforce Solutions',
        icon: Cloud,
        image: '/SaaS_Experts_Page/services/salesforce_services.webp',
        bullets: [
            'Implementation & customization',
            'CRM migration & data integration',
            'Sales Cloud & Service Cloud optimization',
            'Lightning migration & app development',
            'Analytics & AI (Einstein) integration',
        ],
    },
    {
        title: 'Shopify E-Commerce Excellence',
        icon: ShoppingCart,
        image: '/SaaS_Experts_Page/services/Shopify_E_Commerce_Excellence.webp',
        bullets: [
            'Store setup & theme customization',
            'App integration & API development',
            'Migration from other platforms',
            'Performance optimization & SEO',
            'Multi-channel sales integration',
        ],
    },
    {
        title: 'HubSpot Growth Stack',
        icon: Target,
        image: '/SaaS_Experts_Page/services/HubSpot_Growth_Stack.webp',
        bullets: [
            'CRM implementation & automation',
            'Marketing Hub setup & campaign strategy',
            'Sales Hub pipeline optimization',
            'Service Hub customer support solutions',
            'Data sync & system integrations',
        ],
    },
    {
        title: 'SaaS Integration & Support',
        icon: CheckCircle,
        image: '/SaaS_Experts_Page/services/SaaS_Integration_&_Support.webp',
        bullets: [
            'Multi-platform SaaS integration',
            'Custom API development',
            'Data migration & synchronization',
            'Ongoing maintenance & support',
            'User training & adoption programs',
        ],
    },
];

const ServicesSection = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section id="saas-services" className="py-20 md:py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #f3f4f6 0%, #fdf2ef 100%)' }}>
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(243,81,32,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(243,81,32,0.03) 1px, transparent 1px)',
                    backgroundSize: '56px 56px',
                }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div className="text-center mb-14"
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <span className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4"
                        style={{ background: '#F35120' }}>Our Services</span>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900" style={{ letterSpacing: '-0.02em' }}>
                        Our SaaS{' '}
                        <span className="relative inline-block" style={{ color: '#F35120' }}>
                            Expertise
                            <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full" style={{ background: '#F35120', opacity: 0.35 }} />
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg mt-5 leading-relaxed">
                        Our team of experienced SaaS specialists combines industry knowledge and innovative strategies to guide you towards optimized business operations.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-7 max-w-5xl mx-auto">
                    {services.map((svc, i) => {
                        const Icon = svc.icon;
                        const isHov = hovered === i;
                        const isOther = hovered !== null && !isHov;
                        return (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
                                className={`bg-white rounded-2xl shadow-md border overflow-hidden cursor-pointer transition-all duration-300
                                    ${isHov ? 'border-[#F35120] shadow-2xl scale-[1.02] z-10' : 'border-gray-100'}
                                    ${isOther ? 'opacity-60 blur-[1px]' : ''}`}
                                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                                <div className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} min-h-[270px]`}>
                                    <div className="lg:w-5/12 overflow-hidden bg-gray-50">
                                        <img src={svc.image} alt={svc.title}
                                            className="w-full h-56 lg:h-full object-cover transition-transform duration-500"
                                            style={{ transform: isHov ? 'scale(1.07)' : 'scale(1)' }} />
                                    </div>
                                    <div className="lg:w-7/12 p-7 md:p-9 flex flex-col justify-center bg-white">
                                        <div className="flex items-start gap-4 mb-5">
                                            <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center shadow-sm transition-colors duration-300"
                                                style={{ background: isHov ? '#fff5f2' : '#f9fafb', border: isHov ? '1px solid #F35120' : '1px solid #e5e7eb' }}>
                                                <Icon size={22} style={{ color: '#F35120' }} strokeWidth={2} />
                                            </div>
                                            <h3 className="text-xl font-bold pt-1.5 leading-tight transition-colors duration-300"
                                                style={{ color: isHov ? '#F35120' : '#1f2937' }}>{svc.title}</h3>
                                        </div>
                                        <ul className="space-y-2.5">
                                            {svc.bullets.map((b, j) => (
                                                <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                                                    <CheckCircle size={14} style={{ color: '#F35120', flexShrink: 0, marginTop: 2 }} />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-6 h-0.5 rounded-full transition-all duration-500"
                                            style={{ background: 'linear-gradient(90deg, #F35120, #ff7043)', width: isHov ? '100%' : '0%' }} />
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
