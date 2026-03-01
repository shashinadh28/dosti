import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Shield, Settings, ArrowRight } from 'lucide-react';

const features = [
    {
        title: 'Indian-Based Professionals',
        description: 'Our Professionals are all based in India with vetted and proven experience. Deep talent pool, English fluency, strong work ethic.',
        icon: Users,
    },
    {
        title: 'No Overhead Costs',
        description: 'Keep costs low by hiring someone remotely and skipping the overhead of benefits, office space, and equipment.',
        icon: DollarSign,
    },
    {
        title: 'Fully Managed Onboarding & Support',
        description: 'Our team guides you through every step of the process—as you onboard and beyond. We don\'t disappear after placement.',
        icon: Shield,
    },
    {
        title: 'Flexible Service Plans',
        description: 'Only pay for what you need. And if your needs change, so can your commitment. No long-term lock-in.',
        icon: Settings,
    },
];

const roles = ['Executives', 'Small Businesses', 'Church Leaders', 'Sales Teams', 'Attorneys', 'Consultants', 'Entrepreneurs', 'Photographers', 'Authors'];

const GatewayDifferenceSection = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="py-20 md:py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0f172a 0%, #134e4a 50%, #164e63 100%)' }}>
            {/* Blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'rgba(20,184,166,0.10)', filter: 'blur(80px)' }} />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'rgba(6,182,212,0.10)', filter: 'blur(80px)' }} />

            <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-14 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
                    {/* Left — Title */}
                    <motion.div className="space-y-7 text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <div>
                            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-5"
                                style={{ background: 'rgba(20,184,166,0.2)', color: '#5eead4' }}>
                                Why Choose Us
                            </div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight" style={{ letterSpacing: '-0.03em' }}>
                                The Gateway{' '}
                                <span className="text-transparent bg-clip-text"
                                    style={{ backgroundImage: 'linear-gradient(135deg, #5eead4, #67e8f9)' }}>
                                    Difference
                                </span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mt-5 max-w-lg">
                                Experience the advantages that set us apart from traditional staffing solutions.
                            </p>
                        </div>
                        <motion.a href="https://calendly.com/deepak-teja/introduction" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-black py-4 px-9 rounded-2xl text-lg text-teal-900 group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mx-auto lg:mx-0"
                            style={{ background: 'linear-gradient(135deg, #5eead4, #67e8f9)', boxShadow: '0 4px 24px rgba(94,234,212,0.4)' }}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            Hire Gateway
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </motion.div>

                    {/* Right — feature cards 2×2 */}
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                        initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                        {features.map((feat, i) => {
                            const Icon = feat.icon;
                            const isHov = hovered === i;
                            return (
                                <motion.div key={i}
                                    className="relative rounded-3xl border p-8 cursor-default overflow-hidden transition-all duration-400"
                                    style={{
                                        background: isHov ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)',
                                        borderColor: isHov ? 'rgba(94,234,212,0.5)' : 'rgba(255,255,255,0.12)',
                                        boxShadow: isHov ? '0 20px 60px rgba(20,184,166,0.2)' : 'none',
                                    }}
                                    onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
                                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
                                    whileHover={{ y: -8, scale: 1.03 }}>
                                    {/* Glow overlay on hover */}
                                    <div className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-400"
                                        style={{ background: 'linear-gradient(135deg, rgba(13,148,136,0.12), rgba(6,182,212,0.08))', opacity: isHov ? 1 : 0 }} />
                                    <motion.div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-5"
                                        style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)' }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}>
                                        <Icon size={24} className="text-white" />
                                    </motion.div>
                                    <h3 className="text-white font-black text-lg mb-3 transition-colors duration-300"
                                        style={{ color: isHov ? '#5eead4' : '#fff' }}>{feat.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">{feat.description}</p>
                                    <div className="h-0.5 mt-5 rounded-full transition-all duration-500"
                                        style={{ background: 'linear-gradient(90deg, #0d9488, #06b6d4)', width: isHov ? '100%' : '40px' }} />
                                    {/* floating dots */}
                                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full animate-pulse"
                                        style={{ background: '#5eead4', opacity: isHov ? 0.7 : 0, transition: 'opacity 0.3s' }} />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Who Can Use */}
                <motion.div className="text-center"
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-10">
                        Who Can Use Our Virtual Assistant Services?
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {roles.map((role, i) => (
                            <motion.div key={role}
                                className="px-6 py-3 rounded-2xl border border-white/15 text-gray-200 font-semibold transition-all duration-300 hover:border-teal-400/60 hover:text-white hover:bg-white/10 cursor-default"
                                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                                whileHover={{ scale: 1.07, y: -3 }}>
                                {role}
                            </motion.div>
                        ))}
                    </div>
                    <motion.p className="text-2xl font-black mt-8 text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(135deg, #5eead4, #67e8f9)' }}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: 1 }}>
                        And you, probably!
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default GatewayDifferenceSection;
