import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Star, ShieldCheck } from 'lucide-react';

const TransformSection = () => (
    <section className="py-20 md:py-28 relative overflow-hidden text-white"
        style={{ background: 'linear-gradient(135deg, #c2410c 0%, #F35120 50%, #ff7043 100%)' }}>
        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '56px 56px',
            }} />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-60 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        <div className="container mx-auto px-6 text-center relative z-10">
            {/* Stars */}
            <motion.div className="flex justify-center gap-1 mb-6"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />)}
                <span className="text-orange-100 text-sm ml-2 self-center">Trusted by 25+ enterprises</span>
            </motion.div>

            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 max-w-5xl mx-auto"
                style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
                Transform Your Business with{' '}
                <span className="text-white underline decoration-white/40 underline-offset-4">Optimized SaaS Solutions</span>
            </motion.h2>

            <motion.p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
                Maximize ROI and efficiency with our expert SaaS integration services. Whether it's Salesforce, HubSpot, or Shopify, our certified professionals ensure your platforms work seamlessly together to drive business growth.
            </motion.p>

            <motion.div className="flex items-center justify-center gap-3 mb-10"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)' }}>
                    <Phone size={14} className="text-white" />
                </div>
                <span className="text-orange-100 font-medium text-lg">Let's discuss how we can power your SaaS success!</span>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
                <a href="https://calendly.com/deepak-teja/introduction" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 font-bold rounded-xl text-[#F35120] text-base bg-white transition-all duration-300 hover:-translate-y-1 group hover:shadow-2xl hover:bg-orange-50">
                    <Phone size={18} className="group-hover:scale-110 transition-transform text-[#F35120]" />
                    Schedule 15 Min Call
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-[#F35120]" />
                </a>
                <a href="#"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-base border-2 border-white/40 text-white hover:border-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                    Talk to a SaaS Expert
                </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div className="flex flex-wrap justify-center gap-6 mt-14"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}>
                {['Salesforce Certified', 'HubSpot Certified', 'Shopify Partners', 'No Lock-in'].map(badge => (
                    <div key={badge} className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-orange-200" />
                        <span className="text-orange-100 text-sm font-medium">{badge}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default TransformSection;
