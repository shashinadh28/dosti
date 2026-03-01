import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Star, ShieldCheck } from 'lucide-react';

const TransformSection = () => (
    <section className="py-20 md:py-28 relative overflow-hidden text-white"
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #B22234 100%)' }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
            }} />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-60 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(178,34,52,0.25) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        <div className="container mx-auto px-6 text-center relative z-10">
            {/* Stars */}
            <motion.div className="flex justify-center gap-1 mb-6"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                <span className="text-gray-400 text-sm ml-2 self-center">Trusted by 25+ accounting firms</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto"
                style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
                Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(135deg, #fca5a5, #f87171)' }}>
                    Optimized US Taxation
                </span>{' '}Solutions
            </motion.h2>

            {/* Subtitle */}
            <motion.p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
                dhosti provides comprehensive US taxation services with precision and expertise. From individual tax preparation to complex business filings, our certified professionals ensure compliance while maximizing your tax benefits and minimizing liabilities.
            </motion.p>

            {/* Phone line */}
            <motion.div className="flex items-center justify-center gap-3 mb-10"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(220,38,38,0.2)', border: '1px solid rgba(220,38,38,0.4)' }}>
                    <Phone size={14} className="text-red-400" />
                </div>
                <span className="text-gray-200 text-base font-medium">
                    Let's discuss how we can optimize your tax strategy!
                </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
                <a
                    href="https://calendly.com/deepak-teja/introduction"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 font-bold rounded-xl text-white text-base transition-all duration-300 hover:-translate-y-1 group"
                    style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)', boxShadow: '0 4px 30px rgba(220,38,38,0.5)' }}>
                    <Phone size={18} className="group-hover:scale-110 transition-transform" />
                    Schedule 15 Min Call
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-base border-2 border-red-400/30 text-red-300 hover:border-red-400 hover:text-white transition-all duration-300 hover:-translate-y-1">
                    Talk to a Tax Expert
                </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div className="flex flex-wrap justify-center gap-6 mt-14"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}>
                {['IRS Compliant', '99% Accuracy', 'HIPAA Secure', 'No Lock-in'].map((badge) => (
                    <div key={badge} className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-red-400" />
                        <span className="text-gray-400 text-sm font-medium">{badge}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default TransformSection;
