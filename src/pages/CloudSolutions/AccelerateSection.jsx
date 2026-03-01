import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';

const AccelerateSection = () => (
    <section className="py-20 md:py-28 relative overflow-hidden text-white"
        style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #0891b2 50%, #312e81 100%)' }}>
        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
            }} />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-72 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.25) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        <div className="container mx-auto px-6 text-center relative z-10">
            {/* Stars */}
            <motion.div className="flex justify-center gap-1 mb-6"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />)}
                <span className="text-blue-200 text-sm ml-2 self-center">Trusted by 100+ enterprises</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 max-w-5xl mx-auto"
                style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
                Accelerate Your Cloud Journey with{' '}
                <span className="text-yellow-300">dhosti</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
                Whether you're migrating to the cloud, optimizing existing workloads, or managing infrastructure, dhosti provides reliable, scalable, and secure cloud solutions tailored to your business needs.
            </motion.p>

            {/* Phone line */}
            <motion.div className="flex items-center justify-center gap-3 mb-10"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
                    <Phone size={14} className="text-white" />
                </div>
                <span className="text-blue-100 font-medium">Let's discuss how we can accelerate your cloud journey!</span>
            </motion.div>

            {/* CTAs */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
                <a
                    href="https://calendly.com/deepak-teja/introduction"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 font-bold rounded-xl text-blue-700 text-base bg-white transition-all duration-300 hover:-translate-y-1 group hover:shadow-2xl hover:bg-blue-50">
                    <Phone size={18} className="group-hover:scale-110 transition-transform text-blue-600" />
                    Schedule 15 Min Call
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-blue-600" />
                </a>
                <a href="#"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-base border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                    Talk to a Cloud Expert
                </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div className="flex flex-wrap justify-center gap-6 mt-14"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}>
                {[
                    { icon: ShieldCheck, label: 'Enterprise Security' },
                    { icon: Zap, label: '99.9% Uptime SLA' },
                    { icon: Star, label: 'AWS & Azure Certified' },
                    { icon: ArrowRight, label: 'No Vendor Lock-in' },
                ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-cyan-300" />
                        <span className="text-blue-200 text-sm font-medium">{label}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default AccelerateSection;
