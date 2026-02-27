import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * LogoIntro — enhanced with floating elements, bigger text + caption
 * Raw globe PNG (no green ring), Nunito font, orange dot above "i"
 * Floating decorative elements: circles, dots, lines
 */

const EASE = [0.22, 1, 0.36, 1];
const SESSION_KEY = 'dhosti_intro_shown';

/* Floating decorative elements — kept well away from center logo */
const FLOATERS = [
    { x: '8%', y: '15%', size: 60, color: '#F5A023', opacity: 0.15, dur: 5, delay: 0 },
    { x: '85%', y: '20%', size: 40, color: '#2D6A27', opacity: 0.12, dur: 6, delay: 1 },
    { x: '12%', y: '75%', size: 35, color: '#2D6A27', opacity: 0.1, dur: 7, delay: 0.5 },
    { x: '90%', y: '70%', size: 50, color: '#F5A023', opacity: 0.12, dur: 5.5, delay: 1.5 },
    { x: '30%', y: '85%', size: 30, color: '#2D6A27', opacity: 0.08, dur: 6.5, delay: 0.8 },
    { x: '70%', y: '88%', size: 22, color: '#F5A023', opacity: 0.15, dur: 5, delay: 1.2 },
];

/* Small floating plus/cross shapes — only edges, away from logo center */
const SHAPES = [
    { x: '6%', y: '30%', rotate: 45, color: '#F5A023', opacity: 0.2 },
    { x: '88%', y: '35%', rotate: 0, color: '#2D6A27', opacity: 0.15 },
    { x: '7%', y: '65%', rotate: 30, color: '#F5A023', opacity: 0.12 },
    { x: '90%', y: '60%', rotate: -20, color: '#2D6A27', opacity: 0.18 },
    { x: '45%', y: '90%', rotate: 60, color: '#F5A023', opacity: 0.1 },
];

const LogoIntro = ({ logoImage = '/intro_animation/globe.png', onComplete }) => {
    const [skip] = useState(() => sessionStorage.getItem(SESSION_KEY) === '1');
    const [phase, setPhase] = useState('step1');
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        if (skip) { onComplete?.(); return; }
        sessionStorage.setItem(SESSION_KEY, '1');
        const t1 = setTimeout(() => setPhase('step2'), 1100);
        const t2 = setTimeout(() => setPhase('step3'), 2400);
        const t3 = setTimeout(() => setPhase('caption'), 3200);
        const t4 = setTimeout(() => {
            setExiting(true);
            setTimeout(() => onComplete?.(), 750);
        }, 4600);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    }, [skip, onComplete]);

    if (skip) return null;

    /* Bigger sizes */
    const FONT = 'clamp(64px, 10.5vw, 130px)';
    const GLOBE_BIG = 'clamp(90px, 13vw, 155px)';
    const GLOBE_SMALL = 'clamp(54px, 8.5vw, 105px)';

    const letterStyle = {
        fontFamily: "'Nunito', 'Outfit', sans-serif",
        fontWeight: 900,
        color: '#F5A023',
        fontSize: FONT,
        lineHeight: 1,
        userSelect: 'none',
        letterSpacing: '-0.01em',
    };

    return (
        <AnimatePresence>
            {!exiting && (
                <motion.div
                    key="intro"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
                >
                    {/* Dot grid backdrop */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: 'radial-gradient(circle, rgba(45,106,39,0.04) 1.5px, transparent 1.5px)',
                            backgroundSize: '36px 36px',
                        }}
                    />

                    {/* ── Floating circles ── */}
                    {FLOATERS.map((f, i) => (
                        <motion.div
                            key={`f-${i}`}
                            className="absolute rounded-full pointer-events-none"
                            style={{
                                left: f.x,
                                top: f.y,
                                width: f.size,
                                height: f.size,
                                background: f.color,
                                opacity: 0,
                            }}
                            animate={{
                                opacity: [0, f.opacity, f.opacity, 0],
                                y: [0, -20, 20, 0],
                                x: [0, 10, -10, 0],
                                scale: [0.8, 1.1, 0.9, 0.8],
                            }}
                            transition={{
                                duration: f.dur,
                                repeat: Infinity,
                                delay: f.delay,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}

                    {/* ── Floating plus/cross shapes ── */}
                    {SHAPES.map((s, i) => (
                        <motion.div
                            key={`s-${i}`}
                            className="absolute pointer-events-none"
                            style={{
                                left: s.x,
                                top: s.y,
                                opacity: 0,
                                color: s.color,
                                fontSize: '18px',
                                fontWeight: 300,
                            }}
                            animate={{
                                opacity: [0, s.opacity, s.opacity, 0],
                                rotate: [s.rotate, s.rotate + 90, s.rotate + 180, s.rotate + 360],
                                y: [0, -15, 15, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                delay: i * 0.7,
                                ease: 'easeInOut',
                            }}
                        >
                            ✦
                        </motion.div>
                    ))}

                    {/* ── Floating horizontal lines ── */}
                    {[
                        { x: '5%', y: '25%', w: 60 },
                        { x: '88%', y: '55%', w: 45 },
                        { x: '10%', y: '80%', w: 35 },
                    ].map((line, i) => (
                        <motion.div
                            key={`l-${i}`}
                            className="absolute pointer-events-none rounded-full"
                            style={{
                                left: line.x,
                                top: line.y,
                                width: line.w,
                                height: 3,
                                background: i % 2 === 0 ? '#F5A023' : '#2D6A27',
                                opacity: 0,
                            }}
                            animate={{
                                opacity: [0, 0.15, 0.15, 0],
                                scaleX: [0, 1, 1, 0],
                            }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                delay: i * 1.5 + 0.5,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}

                    {/* ── Main logo ── */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                        <div
                            className="flex items-center justify-center"
                            style={{ gap: phase === 'step1' ? 0 : 'clamp(0px, 0.2vw, 4px)' }}
                        >
                            {/* "dh" */}
                            <motion.span
                                style={letterStyle}
                                initial={{ x: 80, opacity: 0, filter: 'blur(10px)' }}
                                animate={
                                    phase === 'step1'
                                        ? { x: 80, opacity: 0, filter: 'blur(10px)' }
                                        : {
                                            x: 0, opacity: 1, filter: 'blur(0px)',
                                            transition: { duration: 1.2, ease: EASE, delay: 0.05 }
                                        }
                                }
                            >
                                dh
                            </motion.span>

                            {/* Globe — RAW PNG, NO background */}
                            <motion.div
                                className="relative flex-shrink-0 z-20"
                                initial={{ width: GLOBE_BIG, height: GLOBE_BIG }}
                                animate={{
                                    width: (phase === 'step1' || phase === 'step2') ? GLOBE_BIG : GLOBE_SMALL,
                                    height: (phase === 'step1' || phase === 'step2') ? GLOBE_BIG : GLOBE_SMALL,
                                    transition: { duration: 0.8, ease: EASE },
                                }}
                            >
                                <motion.div
                                    className="w-full h-full"
                                    initial={{ scale: 0.3, opacity: 0, rotate: -30 }}
                                    animate={{ scale: 1, opacity: 1, rotate: 0, transition: { duration: 1.1, ease: EASE } }}
                                >
                                    <motion.img
                                        src={logoImage}
                                        alt="Globe"
                                        className="w-full h-full object-contain"
                                        animate={{ y: [0, -5, 0], transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' } }}
                                    />
                                </motion.div>

                                {phase === 'step3' && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full border-2 border-[#F5A023]"
                                        initial={{ scale: 1, opacity: 0.5 }}
                                        animate={{ scale: 1.4, opacity: 0 }}
                                        transition={{ duration: 0.7, ease: 'easeOut' }}
                                    />
                                )}
                            </motion.div>

                            {/* "sti" + orange dot */}
                            <div className="relative">
                                <motion.span
                                    style={letterStyle}
                                    initial={{ x: -80, opacity: 0, filter: 'blur(10px)' }}
                                    animate={
                                        phase === 'step1'
                                            ? { x: -80, opacity: 0, filter: 'blur(10px)' }
                                            : {
                                                x: 0, opacity: 1, filter: 'blur(0px)',
                                                transition: { duration: 1.2, ease: EASE, delay: 0.05 }
                                            }
                                    }
                                >
                                    sti
                                </motion.span>

                                {/* Orange dot — sits above the 'i' (rightmost letter in 'sti') */}
                                <motion.div
                                    className="absolute rounded-full bg-[#F5A023]"
                                    style={{
                                        width: 'clamp(8px, 1.1vw, 14px)',
                                        height: 'clamp(8px, 1.1vw, 14px)',
                                        bottom: '100%',
                                        marginBottom: 'clamp(4px, 0.6vw, 8px)',
                                        right: 'clamp(2px, 0.5vw, 6px)',
                                    }}
                                    initial={{ scale: 0 }}
                                    animate={
                                        phase === 'step1' ? { scale: 0 }
                                            : { scale: 1, transition: { duration: 0.4, ease: 'backOut', delay: 0.85 } }
                                    }
                                />
                            </div>
                        </div>

                        {/* Caption — slightly bigger */}
                        <motion.p
                            style={{
                                fontFamily: "'Inter', 'Space Grotesk', sans-serif",
                                fontWeight: 600,
                                color: '#2D6A27',
                                fontSize: 'clamp(10px, 1.1vw, 14px)',
                                letterSpacing: '0.25em',
                                textAlign: 'center',
                                textTransform: 'uppercase',
                            }}
                            initial={{ opacity: 0, y: 8 }}
                            animate={
                                phase === 'caption'
                                    ? { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                                    : { opacity: 0, y: 8 }
                            }
                        >
                            GLOBAL WORKFORCE  SOLUTIONS PVT LTD
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LogoIntro;
