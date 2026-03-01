import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';

const TransformSection = () => (
    <section className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a1f3a 0%, #031936 50%, #0d2547 100%)' }}>
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: 'linear-gradient(rgba(24,184,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(24,184,229,0.04) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
            }} />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-72 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(24,184,229,0.12) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        <div className="container mx-auto px-6 text-center relative z-10">

            {/* Stars */}
            <motion.div
                className="flex justify-center gap-1 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-gray-500 text-sm ml-2 self-center">Trusted by 25+ healthcare providers</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 max-w-4xl mx-auto"
                style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(135deg, #18B8E5, #38bdf8)' }}>
                    Optimized Healthcare
                </span>{' '}
                BPO Solutions
            </motion.h2>

            {/* Subtitle */}
            <motion.p
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                dhosti streamlines your healthcare operations with comprehensive BPO services. From medical billing to telehealth support, our experts ensure you maximize revenue while reducing administrative burdens and enhancing patient care.
            </motion.p>

            {/* Call line */}
            <motion.div
                className="flex items-center justify-center gap-3 mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <div className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(24,184,229,0.15)', border: '1px solid rgba(24,184,229,0.3)' }}>
                    <Phone size={14} className="text-[#18B8E5]" />
                </div>
                <span className="text-gray-300 text-base font-medium">
                    Let's discuss how we can optimize your healthcare operations!
                </span>
            </motion.div>

            {/* CTA */}
            <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                <a
                    href="https://calendly.com/deepak-teja/introduction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 font-bold rounded-xl text-white text-base transition-all duration-300 hover:-translate-y-1 group"
                    style={{ background: 'linear-gradient(135deg, #18B8E5, #0ea5e9)', boxShadow: '0 4px 30px rgba(24,184,229,0.4)' }}
                >
                    <Phone size={18} className="transition-transform duration-300 group-hover:scale-110" />
                    Schedule 15 Min Call
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                    href="tel:+1234567890"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-base border-2 border-[#18B8E5]/30 text-[#18B8E5] hover:border-[#18B8E5] hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                    Talk to an Expert
                </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
                className="flex flex-wrap justify-center gap-6 mt-14"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                {[
                    { icon: ShieldCheck, label: 'HIPAA Certified' },
                    { icon: Clock, label: '24/7 Support' },
                    { icon: Star, label: '95% Satisfaction' },
                    { icon: ArrowRight, label: 'No Lock-in Contracts' },
                ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-[#18B8E5]" />
                        <span className="text-gray-500 text-sm font-medium">{label}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default TransformSection;
