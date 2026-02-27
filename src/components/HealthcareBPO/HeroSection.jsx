import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const [textAnimated, setTextAnimated] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setTextAnimated(true), 600);
        return () => clearTimeout(t);
    }, []);

    return (
        <section
            className="relative overflow-hidden"
            style={{ minHeight: 620, background: 'linear-gradient(135deg, #031936 0%, #0a2547 55%, #041d3d 100%)' }}
        >
            {/* Dot-grid backdrop */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(24,184,229,0.06) 1.5px, transparent 1.5px)',
                    backgroundSize: '38px 38px',
                }}
            />

            {/* Ambient glows */}
            <div className="absolute pointer-events-none"
                style={{ top: '-10%', left: '10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(24,184,229,0.10) 0%, transparent 70%)', filter: 'blur(70px)' }} />
            <div className="absolute pointer-events-none"
                style={{ bottom: 0, right: '30%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(24,184,229,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />

            {/* ── Hexagon SVG — animated, desktop only, sits behind the nurse image ── */}
            <div className="hidden md:block absolute pointer-events-none select-none"
                style={{ right: '2%', bottom: '-6%', zIndex: 1 }}>
                <motion.img
                    src="/SVG/Healthcare_BPO/hexagon.svg"
                    alt="Hexagon"
                    style={{ width: 340, height: 340, display: 'block', opacity: 0.45 }}
                    initial={{ opacity: 0, rotate: -20, scale: 0.7 }}
                    animate={{ opacity: 0.45, rotate: 0, scale: 1 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                />
                {/* Slow continuous spin overlay */}
                <motion.img
                    src="/SVG/Healthcare_BPO/hexagon.svg"
                    alt=""
                    aria-hidden="true"
                    style={{ position: 'absolute', inset: 0, width: 340, height: 340, display: 'block', opacity: 0.12 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                />
            </div>

            {/* ── Main content: two-column ── */}
            <div className="relative z-10 min-h-[620px] flex items-center">
                <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-14 flex flex-col lg:flex-row items-center py-16 lg:py-20 gap-10 lg:gap-16">

                    {/* LEFT — text */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">

                        {/* Badge */}
                        <div className="overflow-hidden mb-5">
                            <motion.div
                                className="inline-flex items-center gap-2"
                                initial={{ x: -80, opacity: 0 }}
                                animate={textAnimated ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <span className="w-2 h-2 rounded-full bg-[#18B8E5] animate-pulse" />
                                <span className="text-[#18B8E5] text-sm sm:text-base font-semibold uppercase tracking-widest">
                                    dhosti
                                </span>
                            </motion.div>
                        </div>

                        {/* Headline */}
                        <div className="overflow-hidden mb-6">
                            <motion.h1
                                className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-tight"
                                style={{ letterSpacing: '-0.02em', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
                                initial={{ y: 60, opacity: 0 }}
                                animate={textAnimated ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                            >
                                End-to-End{' '}
                                <span
                                    className="text-transparent bg-clip-text"
                                    style={{ backgroundImage: 'linear-gradient(90deg, #18B8E5, #38bdf8)' }}
                                >
                                    Medical Billing
                                </span>
                                {' '}&{' '}
                                <br className="hidden sm:block" />
                                Telehealth Support
                            </motion.h1>
                        </div>

                        {/* Subtitle */}
                        <motion.p
                            className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-md"
                            initial={{ y: 30, opacity: 0 }}
                            animate={textAnimated ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        >
                            Streamline your revenue cycle, reduce claim denials and empower your healthcare practice with our expert BPO team.
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
                                className="px-7 py-3.5 font-bold rounded-xl text-white text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                                style={{ background: 'linear-gradient(135deg, #18B8E5, #0ea5e9)', boxShadow: '0 4px 24px rgba(24,184,229,0.4)' }}
                            >
                                Schedule a Free Consultation
                            </a>
                            <button
                                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                                className="px-7 py-3.5 font-bold rounded-xl text-[#18B8E5] text-base border-2 border-[#18B8E5]/40 hover:border-[#18B8E5] hover:text-white transition-all duration-300 hover:-translate-y-1"
                            >
                                Explore Services ↓
                            </button>
                        </motion.div>

                        {/* Stats strip */}
                        <motion.div
                            className="flex flex-wrap gap-8 pt-8 border-t border-white/10"
                            initial={{ opacity: 0 }}
                            animate={textAnimated ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.65 }}
                        >
                            {[
                                { value: '95%', label: 'Clean Claim Rate' },
                                { value: '72hr', label: 'Turnaround Time' },
                                { value: 'HIPAA', label: 'Certified' },
                            ].map((s) => (
                                <div key={s.label}>
                                    <div className="text-2xl font-black text-white">{s.value}</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT — nurse image */}
                    <div className="w-full lg:w-1/2 flex items-end justify-center lg:justify-end relative" style={{ zIndex: 2 }}>
                        <motion.div
                            className="relative w-full"
                            style={{ maxWidth: 480 }}
                            initial={{ x: 80, opacity: 0 }}
                            animate={textAnimated ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                        >
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 pointer-events-none"
                                style={{ background: 'radial-gradient(circle, rgba(24,184,229,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }} />
                            <img
                                src="/Healthcare_BPO/nurse.webp"
                                alt="Healthcare Professional"
                                className="w-full object-contain object-bottom drop-shadow-2xl relative z-10"
                                style={{ maxHeight: 580, filter: 'drop-shadow(0 20px 60px rgba(24,184,229,0.2))' }}
                                onError={e => { e.currentTarget.style.display = 'none'; }}
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
