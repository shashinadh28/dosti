import React from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
    {
        name: 'Rajesh Kumar',
        role: 'HR Director, Gulf Petroleum Co.',
        avatar: 'R',
        color: '#F5A023',
        quote: 'Dhosti placed 85 skilled engineers for us within 6 weeks. Their screening quality is exceptional.',
    },
    {
        name: 'Sarah Thompson',
        role: 'Operations Head, TechBridge UK',
        avatar: 'S',
        color: '#2D6A27',
        quote: 'We\'ve tried many staffing agencies — none come close. Dhosti truly understands global talent.',
    },
    {
        name: 'Mohammed Al-Farsi',
        role: 'CEO, Al-Farsi Construction, UAE',
        avatar: 'M',
        color: '#4DB6AC',
        quote: 'Reliable, fast, and transparent. They supplied our entire site workforce in under 3 weeks.',
    },
];

const Testimonials = () => (
    <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
                <motion.span className="inline-block px-4 py-1.5 rounded-full bg-[#F5A023]/10 text-[#F5A023] text-xs font-bold tracking-widest uppercase mb-4"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    Client Stories
                </motion.span>
                <motion.h2 className="font-display font-black text-gray-900 mb-3"
                    style={{ fontSize: 'clamp(1.9rem,4vw,3rem)' }}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                    What Our <span className="text-[#2D6A27]">Clients Say</span>
                </motion.h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {TESTIMONIALS.map((t, i) => (
                    <motion.div key={t.name}
                        className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex gap-1 mb-4">
                            {Array.from({ length: 5 }).map((_, j) => (
                                <svg key={j} className="w-4 h-4 text-[#F5A023]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <blockquote className="text-gray-600 text-sm leading-relaxed mb-6">"{t.quote}"</blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                                style={{ backgroundColor: t.color }}>
                                {t.avatar}
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                                <p className="text-gray-500 text-xs">{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Testimonials;
