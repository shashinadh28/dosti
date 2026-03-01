import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: '2022', label: 'Founded' },
    { value: '25+', label: 'Active Clients' },
    { value: '95%', label: 'Client Satisfaction' },
];

const AboutSection = () => (
    <section className="py-20 sm:py-28 bg-white overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(243,81,32,0.04) 0%, transparent 60%)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* LEFT — text */}
                <motion.div className="w-full lg:w-1/2 order-2 lg:order-1"
                    initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <span className="text-[#F35120] font-bold tracking-widest uppercase text-xs mb-4 block">About Us</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight"
                        style={{ letterSpacing: '-0.02em' }}>
                        Maximize Your Business Potential with{' '}
                        <span style={{ color: '#F35120' }}>Seamless SaaS Solutions</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        At dhosti, we specialize in end-to-end SaaS integration, customization, and optimization for leading platforms including Salesforce, Shopify, and HubSpot. Our certified experts help businesses streamline operations, enhance customer experiences, and drive growth through powerful SaaS solutions tailored to your unique needs.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        {stats.map((s, i) => (
                            <motion.div key={i}
                                className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm text-center cursor-default transition-all duration-300 hover:shadow-lg"
                                style={{ ['--hover-border']: '#F35120' }}
                                whileHover={{ borderColor: '#F35120', y: -4 }}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                                <p className="text-2xl sm:text-3xl font-black mb-1" style={{ color: '#F35120' }}>{s.value}</p>
                                <p className="text-xs text-gray-500 font-medium">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT — image */}
                <motion.div className="w-full lg:w-1/2 order-1 lg:order-2"
                    initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <div className="relative">
                        <div className="absolute -top-6 -right-6 w-52 h-52 rounded-full pointer-events-none"
                            style={{ background: 'radial-gradient(circle, rgba(243,81,32,0.08) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                        <img src="/SaaS_Experts_Page/about/saas.webp" alt="SaaS Solutions"
                            className="rounded-2xl shadow-2xl w-full object-cover"
                            style={{ filter: 'drop-shadow(0 20px 40px rgba(243,81,32,0.12))' }} />
                        {/* Overlay badge */}
                        <div className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl shadow-2xl"
                            style={{ background: 'linear-gradient(135deg, #F35120, #ff7043)', color: '#fff' }}>
                            <div className="text-base font-black">Certified Experts</div>
                            <div className="text-xs text-orange-200">Salesforce · Shopify · HubSpot</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default AboutSection;
