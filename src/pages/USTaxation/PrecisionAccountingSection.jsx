import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: 'easeOut' } }),
};

const PrecisionAccountingSection = () => (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Subtle BG accent */}
        <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-30"
            style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                {/* Left — image */}
                <motion.div
                    className="w-full md:w-1/2 lg:w-5/12"
                    variants={fadeIn} custom={0.1}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/US_Taxation/usaa.webp"
                            alt="Precision Accounting Services"
                            className="w-full h-auto object-cover"
                            style={{ display: 'block' }}
                        />
                        {/* Overlay badge */}
                        <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl font-bold text-white text-sm"
                            style={{ background: 'rgba(220,38,38,0.9)', backdropFilter: 'blur(8px)' }}>
                            U.S. Taxation Experts
                        </div>
                    </div>
                </motion.div>

                {/* Right — content */}
                <motion.div
                    className="w-full md:w-1/2 lg:w-7/12"
                    variants={fadeIn} custom={0.25}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                >
                    <span className="inline-block bg-[#3C3B6E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                        U.S. Taxation
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black mb-5 text-gray-900 leading-tight"
                        style={{ letterSpacing: '-0.02em' }}>
                        Precision Accounting &{' '}
                        <span className="relative inline-block">
                            <span className="text-red-600">Compliance</span>
                            <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-red-600 opacity-60" />
                        </span>
                        {' '}Solutions for Financial Success
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                        At dhosti, we provide comprehensive US taxation and accounting services tailored for accounting firms, CPAs, and financial professionals. Our expert team ensures accurate bookkeeping, tax compliance, and financial reporting, allowing you to focus on strategic growth while we handle the complexities of numbers and regulations.
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {['IRS Compliant', 'Secure & Confidential', 'CPA Expertise', '24/7 Support'].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                                <span className="text-sm font-medium text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>

                    <motion.a
                        href="https://calendly.com/deepak-teja/introduction"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:-translate-y-1"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Learn More
                    </motion.a>
                </motion.div>
            </div>
        </div>
    </section>
);

export default PrecisionAccountingSection;
