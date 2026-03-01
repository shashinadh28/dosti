import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, ArrowRight, Star } from 'lucide-react';

const featureCards = [
    {
        icon: Users,
        title: 'INDIA-BASED',
        description: 'We search the entire country for a Virtual Assistant to find the right person for your organization.',
    },
    {
        icon: Shield,
        title: 'HIGHLY VETTED',
        description: 'Our exhaustive recruiting process includes several video interviews and skills assessments to find talented, hard-working candidates.',
    },
];

const HeroSection = () => {
    const [on, setOn] = useState(false);
    useEffect(() => { const t = setTimeout(() => setOn(true), 600); return () => clearTimeout(t); }, []);

    return (
        <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Virtual-Assistant-Page/virtual-assestent-main.webp"
                    alt="Virtual Assistant Background"
                    className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.25) 100%)' }} />
                {/* Teal accent overlay */}
                <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 15% 50%, rgba(20,184,166,0.18) 0%, transparent 55%)' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-14 flex flex-col justify-center" style={{ minHeight: '100vh', paddingTop: '7rem', paddingBottom: '3rem' }}>
                {/* Stars trust row */}
                <motion.div className="flex items-center gap-2 mb-5"
                    initial={{ opacity: 0, y: 20 }} animate={on ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                    <span className="text-white/70 text-sm ml-1">Trusted by 200+ businesses</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 max-w-4xl"
                    style={{ letterSpacing: '-0.02em' }}
                    initial={{ opacity: 0, y: 50 }} animate={on ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}>
                    Hire a Virtual Assistant Expert
                    <br />
                    at just{' '}
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #14b8a6, #06b6d4)' }}>$6/hr</span>
                </motion.h1>

                {/* Underline */}
                <motion.div className="h-1 w-32 rounded-full mb-6"
                    style={{ background: 'linear-gradient(90deg, #14b8a6, #06b6d4)' }}
                    initial={{ scaleX: 0, originX: 0 }} animate={on ? { scaleX: 1 } : {}} transition={{ duration: 0.8, delay: 0.55 }} />

                {/* Subline */}
                <motion.p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 font-medium"
                    initial={{ opacity: 0, y: 20 }} animate={on ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }}>
                    Accomplish More. Juggle Less.
                </motion.p>

                {/* CTA */}
                <motion.div className="mb-12"
                    initial={{ opacity: 0, y: 20 }} animate={on ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.75 }}>
                    <motion.a
                        href="https://calendly.com/deepak-teja/introduction" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-black py-4 px-9 rounded-xl text-lg text-white group transition-all duration-300 hover:-translate-y-1"
                        style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)', boxShadow: '0 6px 32px rgba(13,148,136,0.5)' }}
                        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        Hire Gateway
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>

                {/* Feature cards */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl"
                    initial={{ opacity: 0, y: 30 }} animate={on ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.95 }}>
                    {featureCards.map((card, i) => (
                        <motion.div key={i}
                            className="flex items-start gap-4 p-5 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
                            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                            whileHover={{ background: 'rgba(255,255,255,0.14)' }}>
                            <div className="w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)' }}>
                                <card.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-black text-sm tracking-widest uppercase mb-1">{card.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Animated scroll indicator */}
            <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
                initial={{ opacity: 0 }} animate={on ? { opacity: 1 } : {}} transition={{ delay: 1.4 }}>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <div className="w-6 h-9 border-2 border-white/30 rounded-full flex justify-center">
                        <motion.div className="w-1 h-2.5 bg-teal-400 rounded-full mt-1.5"
                            animate={{ y: [0, 14, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
