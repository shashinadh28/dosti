import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CTA — "Schedule a 15-Min Call" with decorative shapes
 * Orange banner, lady image left, contact-focused content right
 */

const CTA = () => {
    const [email, setEmail] = useState('');

    return (
        <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#233824' }}>
            {/* Background decorative shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute -top-10 -left-10 w-40 h-40 rounded-full border-2 border-[#F5A023]/15"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute top-8 right-[15%] w-20 h-20 rounded-full border border-white/8"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-6 left-[20%] w-3 h-3 rounded-full bg-[#F5A023]/20"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-[40%] right-8 w-6 h-6 rotate-45 border border-[#F5A023]/15"
                    animate={{ rotate: [45, 135, 225, 315, 405] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute bottom-10 right-[30%] w-16 h-16 rounded-full border border-white/5"
                    animate={{ scale: [0.8, 1.1, 0.8] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    className="relative rounded-3xl overflow-hidden"
                    style={{ background: '#F5A023' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Decorative shapes inside banner */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-2 border-white/15" />
                        <div className="absolute bottom-4 right-[20%] w-20 h-20 rounded-full border border-white/10" />
                        <div className="absolute top-[50%] left-[35%] w-4 h-4 rounded-full bg-white/10" />
                        <motion.div
                            className="absolute top-6 right-[40%] w-3 h-3 rotate-45 bg-white/15"
                            animate={{ rotate: [45, 405] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row items-stretch" style={{ minHeight: '300px' }}>

                        {/* Left — Lady image with semi-circle */}
                        <div className="md:w-[38%] relative flex items-end justify-center">
                            <div
                                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                                style={{
                                    width: '320px',
                                    height: '160px',
                                    borderRadius: '160px 160px 0 0',
                                    background: 'rgba(233,147,30,0.6)',
                                }}
                            />
                            <img
                                src="/footer/footer women.webp"
                                alt="Professional"
                                className="relative z-10 h-[280px] md:h-[300px] object-contain object-bottom"
                            />
                        </div>

                        {/* Right — Contact content */}
                        <div className="md:w-[62%] p-8 md:p-10 md:pl-4 flex flex-col justify-center relative z-10">
                            <motion.h2
                                className="font-display font-bold text-white leading-tight mb-3"
                                style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)' }}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                            >
                                Schedule a Free<br />15-Minute Consultation
                            </motion.h2>

                            <motion.p
                                className="text-white/80 text-sm leading-relaxed mb-6 max-w-md"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                Let's discuss how Dhosti can help you find the perfect global talent.
                                Drop your email and our team will reach out within 24 hours.
                            </motion.p>

                            {/* Email + Subscribe */}
                            <motion.div
                                className="flex max-w-md"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            >
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="flex-1 px-5 py-3.5 rounded-l-lg bg-white text-gray-700 text-sm font-medium outline-none placeholder-gray-400 border-0"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="px-6 py-3.5 rounded-r-lg text-white font-bold text-sm whitespace-nowrap border-2 border-white/80 hover:bg-white/10 transition-colors"
                                >
                                    Subscribe Now ↗
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
