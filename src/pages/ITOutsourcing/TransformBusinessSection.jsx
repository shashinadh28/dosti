import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Star } from 'lucide-react';

const TransformBusinessSection = () => {
    return (
        <section className="py-20 md:py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0c1a2e 100%)' }}>
            {/* Background grid */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0,166,244,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,166,244,0.04) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }} />

            {/* Glow orbs */}
            <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,166,244,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
            <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(14,116,144,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />

            <div className="container mx-auto px-6 text-center relative z-10">
                {/* Stars rating */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center gap-1 mb-6"
                >
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-gray-400 text-sm ml-2 self-center">Trusted by 200+ global clients</span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 max-w-4xl mx-auto"
                    style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
                >
                    Transform Your Business with{' '}
                    <span className="text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(135deg, #38bdf8, #00A6F4)' }}>
                        Optimized IT
                    </span>{' '}
                    Outsourcing
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    dhosti connects you with India's top-tier developers to scale your team efficiently.
                    From custom software development to complete project delivery, our experts ensure you get
                    premium talent at competitive rates with seamless collaboration.
                </motion.p>

                {/* Call line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex items-center justify-center gap-3 mb-10"
                >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(0,166,244,0.15)', border: '1px solid rgba(0,166,244,0.3)' }}>
                        <Phone size={14} className="text-sky-400" />
                    </div>
                    <span className="text-gray-300 text-base font-medium">
                        Let's discuss how we can scale your development team!
                    </span>
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="https://calendly.com/deepak-teja/introduction"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-8 py-4 font-bold rounded-xl text-white text-base transition-all duration-300 hover:-translate-y-1 group"
                        style={{
                            background: 'linear-gradient(135deg, #00A6F4, #0284c7)',
                            boxShadow: '0 4px 30px rgba(0,166,244,0.4)',
                        }}
                    >
                        <Phone size={18} className="transition-transform duration-300 group-hover:scale-110" />
                        Schedule 15 Min Call
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>

                    <a
                        href="#journey-section"
                        onClick={e => { e.preventDefault(); document.getElementById('journey-section')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-base border-2 border-sky-500/30 text-sky-300 hover:border-sky-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
                    >
                        Learn Our Process
                    </a>
                </motion.div>

                {/* Bottom trust badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-6 mt-14"
                >
                    {['No Lock-in Contracts', '72hr Onboarding', 'Free Trial Period', 'ISO Certified'].map((badge) => (
                        <div key={badge} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                            <span className="text-gray-500 text-sm font-medium">{badge}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TransformBusinessSection;
