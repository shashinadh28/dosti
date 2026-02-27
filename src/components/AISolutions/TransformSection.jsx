import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Star, ShieldCheck } from 'lucide-react';

const TransformSection = () => (
    <section className="py-20 md:py-28 relative overflow-hidden text-white"
        style={{ background: 'linear-gradient(135deg, #581c87 0%, #7c3aed 40%, #be185d 100%)' }}>
        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '56px 56px',
            }} />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-72 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(219,39,119,0.2) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        <div className="container mx-auto px-6 text-center relative z-10">
            {/* Stars */}
            <motion.div className="flex justify-center gap-1 mb-6"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />)}
                <span className="text-purple-200 text-sm ml-2 self-center">Trusted by 75+ enterprises</span>
            </motion.div>

            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto"
                style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
                Transform Your Business with{' '}
                <span className="text-yellow-300">Optimized AI Solutions</span>
            </motion.h2>

            <motion.p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
                Unlock the full potential of artificial intelligence for your enterprise. Our certified experts deliver custom AI models, automation strategies, and data insights that drive measurable business growth and efficiency.
            </motion.p>

            <motion.div className="flex items-center justify-center gap-3 mb-10"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
                    <Phone size={14} className="text-white" />
                </div>
                <span className="text-purple-100 font-medium">Let's discuss how we can transform your business with AI!</span>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
                <a href="https://calendly.com/deepak-teja/introduction" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 font-bold rounded-xl text-purple-700 text-base bg-white transition-all duration-300 hover:-translate-y-1 group hover:shadow-2xl hover:bg-purple-50">
                    <Phone size={18} className="group-hover:scale-110 transition-transform text-purple-700" />
                    Schedule 15 Min Call
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-purple-700" />
                </a>
                <a href="#"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-base border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                    Talk to an AI Expert
                </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div className="flex flex-wrap justify-center gap-6 mt-14"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}>
                {['Custom LLMs', '95% Accuracy Rate', 'GDPR Compliant', 'Enterprise Security'].map(badge => (
                    <div key={badge} className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-pink-300" />
                        <span className="text-purple-200 text-sm font-medium">{badge}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default TransformSection;
