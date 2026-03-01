import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp } from 'lucide-react';

const benefits = [
    'Faster reimbursements & fewer denials',
    'Reduced administrative overhead by 40%',
    'Real-time revenue cycle analytics',
    'Dedicated account manager included',
];

const VisualCalloutSection = () => (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Floating blob */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(24,184,229,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div className="absolute -bottom-10 right-10 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

                {/* Left — image with floating decoration */}
                <motion.div
                    className="lg:w-1/2 flex items-center justify-center"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="relative w-full max-w-sm">
                        {/* Floating blue circle beneath image */}
                        <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full pointer-events-none"
                            style={{ background: 'rgba(24,184,229,0.12)', filter: 'blur(30px)' }} />
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative z-10"
                        >
                            <img
                                src="/Healthcare_BPO/Visual_Callout_Section/hospital.webp"
                                alt="Boost Efficiency illustration"
                                className="w-full rounded-2xl shadow-2xl"
                                style={{ display: 'block' }}
                            />
                        </motion.div>
                        {/* Floating stat badge */}
                        <motion.div
                            className="absolute -bottom-5 -right-5 px-5 py-3 rounded-2xl shadow-2xl z-20"
                            style={{ background: 'linear-gradient(135deg, #031936, #0a2547)', border: '1px solid rgba(24,184,229,0.2)' }}
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-[#18B8E5]" />
                                <div>
                                    <div className="text-white font-black text-lg leading-none">40%</div>
                                    <div className="text-gray-400 text-xs">Cost Reduction</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right — content */}
                <motion.div
                    className="lg:w-1/2"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{ background: 'rgba(24,184,229,0.1)', border: '1px solid rgba(24,184,229,0.2)' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#18B8E5] animate-pulse" />
                        <span className="text-[#18B8E5] text-xs font-bold uppercase tracking-widest">The dhosti Advantage</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black text-slate-800 mb-5 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                        Boost Efficiency &{' '}
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #18B8E5, #0ea5e9)' }}>
                            Maximize Revenue
                        </span>
                    </h2>

                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                        By partnering with dhosti, healthcare providers can focus on delivering quality care while we handle the complexities of billing, coding, and telehealth operations. Our end-to-end solutions ensure faster reimbursements, fewer claim denials, and improved financial performance.
                    </p>

                    <ul className="space-y-4 mb-10">
                        {benefits.map((b, i) => (
                            <motion.li
                                key={i}
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                            >
                                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#18B8E5]" strokeWidth={2} />
                                <span className="text-gray-700 font-medium">{b}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="h-1 w-24 rounded-full" style={{ background: 'linear-gradient(90deg, #18B8E5, #0ea5e9)' }} />
                </motion.div>

            </div>
        </div>
    </section>
);

export default VisualCalloutSection;
