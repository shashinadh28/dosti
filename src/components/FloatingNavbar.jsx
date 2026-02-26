import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * FloatingNavbar — Two-layer design
 *  Layer 1: White top bar  (logo left, Hire Now right) — 70px
 *  Layer 2: Floating nav card — absolute positioned so its CENTER
 *            sits exactly at the bottom edge of the top bar,
 *            making it 50% in white space, 50% overlapping the green hero.
 *
 *  Scroll-hide: hides on scroll, reappears 200ms after stop.
 */

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#services' },
    { label: 'Global Talent', href: '#global-connect' },
    { label: 'Challenges', href: '#challenges' },
    { label: 'Hiring Process', href: '#hiring' },
    { label: 'Contact', href: '#contact' },
];

const CARD_H = 52;   /* px — height of floating nav card  */
const BAR_H = 70;   /* px — height of top info bar        */
/* Card top = BAR_H - CARD_H/2, so card center = BAR_H (= white/green boundary) */
const CARD_TOP = BAR_H - CARD_H / 2;   /* = 44px */

const FloatingNavbar = () => {
    const [active, setActive] = useState('Home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [navVisible, setNavVisible] = useState(true);
    const scrollTimer = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            setNavVisible(false);
            clearTimeout(scrollTimer.current);
            scrollTimer.current = setTimeout(() => setNavVisible(true), 200);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => { window.removeEventListener('scroll', onScroll); clearTimeout(scrollTimer.current); };
    }, []);

    return (
        /*
         * Wrapper is exactly BAR_H (70px) tall in document flow.
         * The floating card is positioned absolute so it pokes below by CARD_H/2 (26px).
         * Hero must have paddingTop = BAR_H + CARD_H/2 = 96px.
         */
        <div className="relative" style={{ height: `${BAR_H}px` }}>

            {/* ── TOP BAR ── */}
            <div className="bg-white border-b border-gray-100 absolute inset-x-0 top-0"
                style={{ height: BAR_H }}>
                <div className="max-w-[1300px] mx-auto px-6 h-full flex items-center justify-between">

                    {/* Logo */}
                    <a href="#home" className="flex-shrink-0">
                        <img src="/dhosti.jpeg" alt="Dhosti"
                            className="h-11 w-auto object-contain"
                            onError={e => { e.currentTarget.style.display = 'none'; }} />
                    </a>

                    {/* Hire Now — right */}
                    <a href="#contact"
                        className="flex-shrink-0 px-5 py-2 rounded-full border-2 border-[#F5A023] text-[#F5A023] text-sm font-bold hover:bg-[#F5A023] hover:text-white transition-all duration-200 whitespace-nowrap">
                        Hire Now
                    </a>

                    {/* Mobile burger */}
                    <button className="md:hidden ml-3 p-2" onClick={() => setMenuOpen(o => !o)}>
                        <div className="space-y-1.5 w-5">
                            <span className={`block h-0.5 bg-gray-700 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block h-0.5 bg-gray-700 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* ── FLOATING NAV CARD ─────────────────────────────────
            absolute, centered horizontally
            top=CARD_TOP(44px) → card spans 44px–96px
            boundary (white/green) is at 70px → card center = 70px = exact 50/50
          ───────────────────────────────────────────────────── */}
            <AnimatePresence>
                {navVisible && (
                    <motion.div
                        key="floatnav"
                        className="hidden md:flex absolute z-50"
                        style={{ top: CARD_TOP, left: '50%' }}
                        initial={{ opacity: 0, x: '-50%', y: -6 }}
                        animate={{ opacity: 1, x: '-50%', y: 0 }}
                        exit={{ opacity: 0, x: '-50%', y: -6 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                        <div
                            className="flex items-center justify-center bg-white rounded-2xl px-8"
                            style={{
                                height: CARD_H,
                                minWidth: '700px',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.07)',
                            }}
                        >
                            {NAV_LINKS.map((link, idx) => (
                                <React.Fragment key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={() => setActive(link.label)}
                                        className={`px-5 text-sm font-semibold whitespace-nowrap transition-colors duration-200
                      ${active === link.label ? 'text-[#F5A023]' : 'text-gray-600 hover:text-[#2D6A27]'}`}
                                    >
                                        {link.label}
                                    </a>
                                    {idx < NAV_LINKS.length - 1 && (
                                        <span className="text-gray-200 text-base font-light select-none">|</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Mobile menu ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="absolute inset-x-0 top-full overflow-hidden bg-white border-b border-gray-100 shadow-lg z-50 md:hidden"
                    >
                        <div className="px-4 py-3 space-y-1">
                            {NAV_LINKS.map(link => (
                                <a key={link.label} href={link.href}
                                    onClick={() => { setMenuOpen(false); setActive(link.label); }}
                                    className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${active === link.label ? 'text-[#F5A023] bg-orange-50' : 'text-gray-700 hover:bg-green-50 hover:text-[#2D6A27]'}`}>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingNavbar;
