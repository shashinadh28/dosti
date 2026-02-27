import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Palette, TrendingUp, Headphones } from 'lucide-react';

const items = [
    { title: 'Certified SaaS Specialists', subtitle: 'Salesforce, HubSpot & Shopify experts', icon: Award, accent: '#F35120' },
    { title: 'Seamless Integrations', subtitle: 'Connect critical business systems', icon: Zap, accent: '#F35120' },
    { title: 'Customization & Scalability', subtitle: 'Solutions that grow with you', icon: Palette, accent: '#111' },
    { title: 'Performance Optimization', subtitle: 'Enhance efficiency & adoption', icon: TrendingUp, accent: '#F35120' },
    { title: 'End-to-End Support', subtitle: 'Implementation to training', icon: Headphones, accent: '#111' },
];

const WhyPartnerSection = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="py-20 md:py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #f9fafb 0%, #fff7f5 100%)' }}>
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(243,81,32,0.06) 0%, transparent 55%)' }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div className="text-center mb-14"
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <span className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4"
                        style={{ background: '#F35120' }}>Key Benefits</span>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 max-w-3xl mx-auto" style={{ letterSpacing: '-0.02em' }}>
                        Why Partner with Gateway for{' '}
                        <span className="relative inline-block" style={{ color: '#F35120' }}>
                            SaaS Solutions?
                            <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full" style={{ background: '#F35120', opacity: 0.4 }} />
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed mt-5">
                        We take the time to listen, analyze your SaaS infrastructure, and deliver tailored solutions that drive growth and efficiency.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    {items.map((item, i) => {
                        const Icon = item.icon;
                        const isHovered = hovered === i;
                        return (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
                                className="relative p-7 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-all duration-300 overflow-hidden border"
                                style={{
                                    background: isHovered ? item.accent : '#fff',
                                    borderColor: isHovered ? 'transparent' : '#e5e7eb',
                                    boxShadow: isHovered ? `0 20px 60px ${item.accent}35` : '0 2px 16px rgba(0,0,0,0.05)',
                                }}>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-md transition-all duration-300"
                                    style={{ background: isHovered ? 'rgba(255,255,255,0.2)' : item.accent }}>
                                    <Icon size={28} className="text-white" strokeWidth={2} />
                                </div>
                                <h3 className={`font-black text-lg mb-1.5 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                                <p className={`text-sm leading-snug transition-colors duration-300 ${isHovered ? 'text-white/80' : 'text-gray-500'}`}>{item.subtitle}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyPartnerSection;
