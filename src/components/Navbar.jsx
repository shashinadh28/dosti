import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navbar — Two-row professional design
 * Row 1 (top bar): Logo left │ Tagline center │ Contact + CTA right
 * Row 2 (bottom): Nav links │ Search icon
 */

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Jobs', href: '#jobs' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

const [activeLink, setActiveLinkState] = [null, () => { }];   // lightweight active tracking

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('Home');

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>

            {/* ── TOP BAR ── */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2.5 flex-shrink-0">
                        <img
                            src="/dhosti.jpeg"
                            alt="Dhosti"
                            className="h-10 w-auto object-contain"
                            onError={e => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        {/* Fallback inline logo if image fails */}
                        <div className="hidden items-center">
                            <span className="font-logo font-black text-[#F5A023] text-2xl">dh</span>
                            <div className="w-5 h-5 rounded-full bg-[#2D6A27] flex items-center justify-center mx-0.5">
                                <img src="/intro_animation/globe.png" alt="o" className="w-full h-full object-cover rounded-full" />
                            </div>
                            <span className="font-logo font-black text-[#F5A023] text-2xl">sti</span>
                        </div>
                    </a>

                    {/* Center tagline — hidden on small screens */}
                    <p className="hidden lg:block text-sm text-gray-500 font-medium tracking-wide">
                        Global Workforce Solutions Pvt Ltd
                    </p>

                    {/* Right: contact info + CTA */}
                    <div className="flex items-center gap-4">
                        {/* Phone — hidden on mobile */}
                        <a href="tel:+910000000000"
                            className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[#2D6A27] transition-colors">
                            <svg className="w-4 h-4 text-[#2D6A27]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +91 00000 00000
                        </a>

                        {/* Email — hidden on mobile */}
                        <a href="mailto:info@dhosti.com"
                            className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[#2D6A27] transition-colors">
                            <svg className="w-4 h-4 text-[#2D6A27]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            info@dhosti.com
                        </a>

                        {/* CTA */}
                        <a href="#contact"
                            className="px-5 py-2 rounded-full border-2 border-[#F5A023] text-[#F5A023] text-sm font-bold hover:bg-[#F5A023] hover:text-white transition-all duration-200">
                            Hire Now
                        </a>

                        {/* Mobile burger */}
                        <button
                            className="md:hidden p-1.5 rounded-lg text-gray-600 hover:bg-gray-100"
                            onClick={() => setMenuOpen(o => !o)}
                            aria-label="Toggle menu"
                        >
                            <div className="space-y-1.5 w-5">
                                <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                                <span className={`block h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* ── BOTTOM NAV BAR ── */}
            <div className="bg-white border-b border-gray-150 shadow-sm hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-11">

                    {/* Nav links */}
                    <nav className="flex items-center gap-0">
                        {NAV_LINKS.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setActive(link.label)}
                                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-200 border-b-2
                  ${active === link.label
                                        ? 'text-[#F5A023] border-[#F5A023]'
                                        : 'text-gray-600 border-transparent hover:text-[#2D6A27] hover:border-[#2D6A27]'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Search bar */}
                    <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 hover:border-[#2D6A27] transition-colors group">
                        <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#2D6A27]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search jobs, skills..."
                            className="w-40 text-xs text-gray-600 outline-none bg-transparent placeholder-gray-400"
                        />
                    </div>
                </div>
            </div>

            {/* ── MOBILE MENU ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-lg"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {NAV_LINKS.map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => { setMenuOpen(false); setActive(link.label); }}
                                    className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-700 hover:bg-green-50 hover:text-[#2D6A27]"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a href="#contact"
                                className="block mt-3 px-4 py-2.5 rounded-full border-2 border-[#F5A023] text-[#F5A023] text-sm font-bold text-center hover:bg-[#F5A023] hover:text-white">
                                Hire Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
