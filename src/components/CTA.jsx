import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CTA — exact clone of reference design:
 *   Dark green outer bg → orange rounded banner
 *   Lady image LEFT (with semi-circle bg behind her)
 *   Content RIGHT: headline, description, email + subscribe
 *   Content changed to "Contact Us" theme
 */

const CTA = () => {
    const [email, setEmail] = useState('');

    return (
        <section className="py-16" style={{ backgroundColor: '#233824' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                <motion.div
                    className="relative rounded-3xl overflow-hidden"
                    style={{ background: '#F5A023' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex flex-col md:flex-row items-stretch" style={{ minHeight: '300px' }}>

                        {/* LEFT — Lady image with semi-circle behind */}
                        <div className="md:w-[38%] relative flex items-end justify-center">
                            {/* Semi-circle bg behind the person — matching reference */}
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

                        {/* RIGHT — Content */}
                        <div className="md:w-[62%] p-8 md:p-10 md:pl-4 flex flex-col justify-center">
                            <motion.h2
                                className="font-display font-bold text-white leading-tight mb-3"
                                style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)' }}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                Ready to Power up your<br />Savings and Reliability?
                            </motion.h2>

                            <motion.p
                                className="text-white/80 text-sm leading-relaxed mb-6 max-w-md"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Get in touch with us today. Our team is ready to help you
                                find the perfect global talent for your business needs.
                            </motion.p>

                            {/* Email + Subscribe — matching reference exactly */}
                            <motion.div
                                className="flex max-w-md"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
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
