import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Database, BrainCircuit, ArrowRight } from 'lucide-react';

const features = [
    { icon: Bot, label: 'AI Automation' },
    { icon: Database, label: 'Data Analytics' },
    { icon: BrainCircuit, label: 'Machine Learning' },
];

const HeroSection = () => {
    const [on, setOn] = useState(false);
    useEffect(() => { const t = setTimeout(() => setOn(true), 600); return () => clearTimeout(t); }, []);

    return (
        <section className="relative overflow-hidden min-h-[600px] flex items-center"
            style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #fdf4ff 40%, #fce7fd 100%)' }}>
            {/* Floating blobs */}
            <motion.div className="absolute top-20 left-10 w-24 h-24 rounded-full pointer-events-none hidden md:block"
                style={{ background: 'rgba(147,51,234,0.12)', filter: 'blur(40px)' }}
                animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.div className="absolute bottom-20 right-12 w-36 h-36 rounded-full pointer-events-none hidden md:block"
                style={{ background: 'rgba(219,39,119,0.10)', filter: 'blur(40px)' }}
                animate={{ y: [0, -16, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }} />
            {/* Dot-grid */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(rgba(107,33,168,0.04) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-14 py-20 md:py-28 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* LEFT */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                        {/* badge */}
                        <motion.div className="flex justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }} animate={on ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                                style={{ background: '#f3e8ff', borderColor: '#d8b4fe' }}>
                                <Bot size={14} style={{ color: '#7c3aed' }} />
                                <span className="text-sm font-semibold" style={{ color: '#6d28d9' }}>Gateway Workforce</span>
                            </div>
                        </motion.div>

                        {/* headline */}
                        <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
                            style={{ letterSpacing: '-0.03em' }}
                            initial={{ opacity: 0, y: 40 }} animate={on ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}>
                            <span className="text-transparent bg-clip-text"
                                style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed, #db2777)' }}>
                                AI & Data Intelligence
                            </span>
                            <br />Solutions
                        </motion.h1>

                        {/* sub */}
                        <motion.p className="text-lg text-gray-600 max-w-xl"
                            initial={{ opacity: 0, y: 20 }} animate={on ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }}>
                            Transform your business with cutting-edge AI solutions. From machine learning to data analytics, we deliver intelligent systems that drive innovation and growth.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }} animate={on ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.65 }}>
                            <motion.button
                                onClick={() => document.getElementById('ai-services')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-full text-white text-base group transition-all duration-300 hover:-translate-y-1"
                                style={{ background: 'linear-gradient(135deg, #7c3aed, #a21caf)', boxShadow: '0 4px 24px rgba(124,58,237,0.4)' }}
                                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                                Explore Solutions
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                                className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-full text-base border-2 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-50"
                                style={{ borderColor: '#7c3aed', color: '#7c3aed' }}
                                whileHover={{ scale: 1.04 }}>
                                Learn More
                            </motion.button>
                        </motion.div>

                        {/* Feature chips */}
                        <motion.div className="flex flex-wrap gap-5 pt-4 justify-center lg:justify-start"
                            initial={{ opacity: 0 }} animate={on ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.9 }}>
                            {features.map(({ icon: Icon, label }) => (
                                <div key={label} className="flex items-center gap-2 text-gray-700">
                                    <Icon size={18} style={{ color: '#7c3aed' }} />
                                    <span className="text-sm font-semibold">{label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT — hero image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <motion.div style={{ maxWidth: 500 }}
                            initial={{ scale: 0.85, opacity: 0 }} animate={on ? { scale: 1, opacity: 1 } : {}}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}>
                            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                                <img src="/AI_Solutions_Page/Hero/ai_background.webp" alt="AI Solutions"
                                    className="w-full object-contain"
                                    style={{ filter: 'drop-shadow(0 20px 60px rgba(124,58,237,0.22))' }} />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div className="flex flex-col items-center gap-2 mt-14 cursor-pointer"
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    initial={{ opacity: 0 }} animate={on ? { opacity: 1 } : {}} transition={{ delay: 1.3 }}>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                        <span className="text-gray-400 text-xs tracking-widest uppercase font-semibold">Scroll Down</span>
                        <div className="mx-auto mt-1 w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center">
                            <motion.div className="w-0.5 h-2 bg-gray-400 rounded-full mt-1.5"
                                animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
