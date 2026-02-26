import React from 'react';
import { motion } from 'framer-motion';

/**
 * LeverageSection — Replaces "Our Services"
 *
 * Layout: Image (left) | Content (right, scroll-animated)
 * Image: /levearage_global_talent/levearage_global_talent.webp
 * Content: headline, description, 4 benefit points, CTA
 */

const EASE = [0.22, 1, 0.36, 1];

const BENEFITS = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Global Reach',
        desc: 'Access a vast pool of pre-vetted professionals from 25+ countries across every industry.',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Fast Turnaround',
        desc: 'Our streamlined process delivers qualified candidates within 48 hours of your request.',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Compliance Assured',
        desc: 'We handle all legal, visa, and compliance requirements so you can focus on your business.',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Perfect Fit Guarantee',
        desc: '98% placement satisfaction with our rigorous screening and cultural compatibility assessment.',
    },
];

const LeverageSection = () => (
    <section id="services" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* ── LEFT: Image ── */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.1, ease: EASE }}
                    className="relative"
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="/levearage_global_talent/levearage_global_talent.webp"
                            alt="Leverage Global Talent"
                            className="w-full h-full object-cover"
                            style={{ minHeight: '480px', maxHeight: '580px' }}
                        />
                    </div>

                    {/* Decorative blob */}
                    <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 rounded-full bg-green-50 blur-3xl opacity-60" />
                </motion.div>

                {/* ── RIGHT: Content with staggered animation ── */}
                <div className="space-y-6">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.8, ease: EASE }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-[#2D6A27] text-xs font-bold tracking-wide uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A27] animate-pulse" />
                            Strategic Staffing
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        className="font-display font-bold text-gray-900 leading-tight"
                        style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.85, ease: EASE, delay: 0.15 }}
                    >
                        Leverage <span className="text-[#F5A023]">Global Talent</span>{' '}
                        for Your Growth
                    </motion.h2>

                    {/* Sub-description */}
                    <motion.p
                        className="text-gray-500 leading-relaxed text-[0.95rem]"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.85, ease: EASE, delay: 0.25 }}
                    >
                        Dhosti connects ambitious companies with world-class professionals.
                        Our global network and deep industry expertise ensure you get the
                        <strong className="text-gray-700"> right talent</strong>, at the{' '}
                        <strong className="text-gray-700">right time</strong>, wherever you are.
                    </motion.p>

                    {/* Benefit rows */}
                    <div className="space-y-4 pt-2">
                        {BENEFITS.map((b, i) => (
                            <motion.div
                                key={b.title}
                                className="flex gap-4 items-start"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.75, ease: EASE, delay: 0.35 + i * 0.12 }}
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#2D6A27]/10 flex items-center justify-center text-[#2D6A27]">
                                    {b.icon}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 text-sm">{b.title}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed mt-0.5">{b.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        className="flex flex-wrap gap-3 pt-2"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
                    >
                        <motion.a href="#contact"
                            whileHover={{ scale: 1.04, boxShadow: '0 8px 28px rgba(245,160,35,0.35)' }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#F5A023] text-white font-bold text-sm">
                            Find Talent Now ↗
                        </motion.a>
                        <motion.a href="#about"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-gray-200 text-gray-700 font-bold text-sm hover:border-[#2D6A27] hover:text-[#2D6A27] transition-colors">
                            Learn More ↗
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
);

export default LeverageSection;
