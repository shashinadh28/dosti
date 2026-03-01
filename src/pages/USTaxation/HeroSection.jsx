import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Phone } from 'lucide-react';

/* Decorative floating element using pure CSS/JSX — American flag colour palette */
const FloatShape = ({ style, className }) => (
    <motion.div
        className={`absolute pointer-events-none rounded-sm ${className}`}
        style={style}
        animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 6 + Math.random() * 3, repeat: Infinity, ease: 'easeInOut' }}
    />
);

const HeroSection = () => {
    const [textAnimated, setTextAnimated] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setTextAnimated(true), 600);
        return () => clearTimeout(t);
    }, []);

    return (
        <section
            className="relative overflow-hidden"
            style={{ minHeight: 620, background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
        >
            {/* Stars dot pattern */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1.5px, transparent 1.5px)',
                    backgroundSize: '36px 36px',
                }} />

            {/* American flag colour glows */}
            <div className="absolute pointer-events-none"
                style={{ top: '10%', left: '5%', width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(178,34,52,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} />
            <div className="absolute pointer-events-none"
                style={{ bottom: '5%', right: '8%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(60,59,110,0.25) 0%, transparent 70%)', filter: 'blur(70px)' }} />
            <div className="absolute pointer-events-none"
                style={{ top: '40%', left: '45%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(178,34,52,0.1) 0%, transparent 70%)', filter: 'blur(50px)' }} />

            {/* Floating decorative shapes — American flag themed */}
            {/* Red stripes */}
            <FloatShape className="hidden md:block" style={{ width: 90, height: 12, background: '#B22234', opacity: 0.35, borderRadius: 6, top: '18%', right: '12%', rotate: '-8deg' }} />
            <FloatShape className="hidden md:block" style={{ width: 60, height: 8, background: '#B22234', opacity: 0.25, borderRadius: 6, top: '72%', right: '18%', rotate: '5deg' }} />
            <FloatShape className="hidden md:block" style={{ width: 50, height: 8, background: '#B22234', opacity: 0.2, borderRadius: 6, top: '35%', left: '6%', rotate: '-12deg' }} />
            {/* Blue canton squares */}
            <FloatShape className="hidden md:block" style={{ width: 40, height: 40, background: '#3C3B6E', opacity: 0.25, borderRadius: 8, top: '14%', right: '30%', rotate: '15deg' }} />
            <FloatShape className="hidden md:block" style={{ width: 28, height: 28, background: '#3C3B6E', opacity: 0.2, borderRadius: 6, bottom: '20%', left: '10%', rotate: '-20deg' }} />
            {/* White twinkling stars */}
            {[
                { top: '8%', left: '2%', size: 22, delay: 0 },
                { top: '20%', left: '48%', size: 16, delay: 0.8 },
                { top: '55%', left: '56%', size: 20, delay: 1.6 },
                { top: '80%', left: '3%', size: 14, delay: 0.4 },
                { top: '35%', left: '95%', size: 18, delay: 1.2 },
                { top: '65%', left: '92%', size: 14, delay: 0.6 },
                { top: '12%', left: '75%', size: 24, delay: 1.0 },
            ].map((s, i) => (
                <motion.div
                    key={i}
                    className="absolute hidden md:block pointer-events-none select-none font-black"
                    style={{ top: s.top, left: s.left, color: 'rgba(255,255,255,0.55)', fontSize: s.size }}
                    animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.85, 1.15, 0.85] }}
                    transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
                >
                    ★
                </motion.div>
            ))}

            {/* Two-column content */}
            <div className="relative z-10 min-h-[620px] flex items-center">
                <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-14 flex flex-col lg:flex-row items-center py-16 lg:py-20 gap-10 lg:gap-16">

                    {/* LEFT — text */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">

                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 mb-5 w-fit"
                            initial={{ x: -60, opacity: 0 }}
                            animate={textAnimated ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-red-400 text-sm font-bold uppercase tracking-widest">dhosti</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-5"
                            style={{ letterSpacing: '-0.02em' }}
                            initial={{ y: 60, opacity: 0 }}
                            animate={textAnimated ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                        >
                            Expert{' '}
                            <span className="text-white">
                                US Taxation
                            </span>
                            {' '}&{' '}
                            <br className="hidden sm:block" />
                            <span className="text-white">
                                Accounting
                            </span>{' '}Services
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-md"
                            initial={{ y: 30, opacity: 0 }}
                            animate={textAnimated ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        >
                            Comprehensive tax preparation, bookkeeping, and compliance services for CPAs and accounting firms — accurate, secure, and always compliant.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-wrap gap-4 mb-12"
                            initial={{ y: 30, opacity: 0 }}
                            animate={textAnimated ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                        >
                            <a
                                href="https://calendly.com/deepak-teja/introduction"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl text-white text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
                                style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)', boxShadow: '0 4px 24px rgba(220,38,38,0.45)' }}
                            >
                                <Phone size={16} />
                                Schedule a Free Consultation
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button
                                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                                className="px-7 py-3.5 font-bold rounded-xl text-indigo-300 text-base border-2 border-indigo-400/40 hover:border-indigo-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
                            >
                                Explore Services ↓
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="flex flex-wrap gap-8 pt-8 border-t border-white/10"
                            initial={{ opacity: 0 }}
                            animate={textAnimated ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.65 }}
                        >
                            {[
                                { value: '99%', label: 'Filing Accuracy' },
                                { value: 'IRS', label: 'Audit Ready' },
                                { value: 'CPA', label: 'Firm Partners' },
                            ].map((s) => (
                                <div key={s.label}>
                                    <div className="text-2xl font-black text-white">{s.value}</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT — taxation image */}
                    <div className="w-full lg:w-1/2 flex items-end justify-center lg:justify-end relative" style={{ zIndex: 2 }}>
                        <motion.div
                            className="relative w-full"
                            style={{ maxWidth: 520 }}
                            initial={{ x: 80, opacity: 0 }}
                            animate={textAnimated ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                        >
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 pointer-events-none"
                                style={{ background: 'radial-gradient(circle, rgba(178,34,52,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }} />
                            <img
                                src="/US_Taxation/taxation.webp"
                                alt="US Taxation Services"
                                className="w-full object-contain object-bottom relative z-10"
                                style={{ maxHeight: 560, filter: 'drop-shadow(0 20px 60px rgba(178,34,52,0.3))' }}
                                onError={e => { e.currentTarget.style.opacity = '0'; }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
