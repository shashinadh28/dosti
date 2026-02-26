import React from 'react';
import { motion } from 'framer-motion';
import WorldMap from './ui/WorldMap';

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0, dur = 0.75) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0, transition: { duration: dur, ease: EASE, delay } },
});

const MAP_DOTS = [
    { start: { lat: 19.076, lng: 72.877 }, end: { lat: 51.508, lng: -0.128 } },
    { start: { lat: 19.076, lng: 72.877 }, end: { lat: 25.204, lng: 55.270 } },
    { start: { lat: 19.076, lng: 72.877 }, end: { lat: 1.352, lng: 103.820 } },
    { start: { lat: 51.508, lng: -0.128 }, end: { lat: 40.712, lng: -74.006 } },
    { start: { lat: 25.204, lng: 55.270 }, end: { lat: -33.869, lng: 151.209 } },
    { start: { lat: 40.712, lng: -74.006 }, end: { lat: -23.550, lng: -46.633 } },
];

const Stars = ({ count = 4 }) => (
    <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < count ? 'text-[#F5A023]' : 'text-white/20'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

const Hero = () => (
    <section
        id="home"
        className="relative bg-[#233824] overflow-hidden flex items-center"
        style={{ paddingTop: '96px', paddingBottom: '100px', minHeight: '100vh' }}
    >
        <WorldMap dots={MAP_DOTS} lineColor="#F5A023" opacity={0.18} />

        <div className="absolute top-[-60px] left-[-80px] w-[300px] h-[300px] rounded-full bg-[#2D6A27] opacity-20 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-[-40px] right-[10%] w-[220px] h-[220px] rounded-full bg-[#F5A023] opacity-[0.07] blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT: Copy */}
                <div>
                    <motion.div {...fadeUp(0.1)}>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-wide mb-5">
                            Staffing Power Your Success
                        </span>
                    </motion.div>

                    <motion.h1
                        className="font-display font-black text-white mb-5"
                        style={{ fontSize: 'clamp(2.4rem, 4.8vw, 3.6rem)', lineHeight: 1.08, fontFamily: "'DM Sans', 'Inter', sans-serif" }}
                        {...fadeUp(0.2)}
                    >
                        Growth Exceptional Talent Lets Build Success Together
                    </motion.h1>

                    <motion.p
                        className="text-white/60 text-sm leading-relaxed mb-7 max-w-[430px]"
                        {...fadeUp(0.34)}
                    >
                        Our tailored staffing solutions streamline the hiring process saving you time
                        and resources while ensuring the perfect fit.
                    </motion.p>

                    <motion.div className="flex flex-wrap gap-3 mb-8" {...fadeUp(0.46)}>
                        <motion.a
                            href="#jobs"
                            whileHover={{ scale: 1.04, boxShadow: '0 8px 28px rgba(245,160,35,0.45)' }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F5A023] text-white font-bold text-sm"
                        >
                            Start Your Search ↗
                        </motion.a>
                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 bg-white/5 text-white font-bold text-sm hover:border-white/50 transition-colors"
                        >
                            Discover More ↗
                        </motion.a>
                    </motion.div>

                    <motion.div className="flex items-center gap-3" {...fadeUp(0.56)}>
                        <div>
                            <p className="text-white font-bold text-sm mb-1">Trusted By 5,789 Users</p>
                            <div className="flex items-center gap-2">
                                <Stars count={4} />
                                <span className="text-white/55 text-xs font-medium">4K Happy Client</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT: Fixed-size image grid */}
                <motion.div
                    className="flex gap-4 justify-center lg:justify-end"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE, delay: 0.3 } }}
                >
                    <div className="w-[320px] h-[440px] rounded-2xl overflow-hidden flex-shrink-0">
                        <img src="/landing_page/employe1.webp" alt="Team meeting" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="w-[220px] h-[200px] rounded-2xl overflow-hidden flex-shrink-0">
                            <img src="/landing_page/employe2.webp" alt="Professional" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-[220px] h-[200px] rounded-2xl overflow-hidden flex-shrink-0">
                            <img src="/landing_page/employe3.webp" alt="Employee" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* ── Smooth bottom curve ── */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
            <svg
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                className="w-full h-20 md:h-28 lg:h-32"
                fill="white"
            >
                <path d="M0,40 C240,120 480,0 720,60 C960,120 1200,20 1440,80 L1440,120 L0,120 Z" />
            </svg>
        </div>
    </section>
);

export default Hero;
