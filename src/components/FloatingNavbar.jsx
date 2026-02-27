import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * FloatingNavbar
 * - White top bar: Logo left | [Services ▾] [Contact] [Hire Now] right
 * - Floating pill card with scroll links + Services dropdown
 * - Services dropdown lists all 7 service names
 * - Contact moved to a button next to Hire Now
 */

const SERVICE_NAMES = [
    'IT Outsourcing',
    'Healthcare BPO',
    'US Taxation',
    'Cloud Solutions',
    'SaaS Experts',
    'AI Solutions',
    'Virtual Assistant',
];

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    {
        label: 'About',
        href: '#services',
        dropdown: [
            { label: 'Our Team', href: '/team', isRoute: true },
        ],
    },
    { label: 'Global Talent', href: '#global-connect' },
    { label: 'Challenges', href: '#challenges' },
    { label: 'Hiring Process', href: '#hiring' },
    {
        label: 'Services',
        href: '#services',
        dropdown: SERVICE_NAMES.map(name => {
            if (name === 'IT Outsourcing') return { label: name, href: '/it-outsourcing', isRoute: true };
            if (name === 'Healthcare BPO') return { label: name, href: '/healthcare-bpo', isRoute: true };
            if (name === 'US Taxation') return { label: name, href: '/us-taxation', isRoute: true };
            if (name === 'Cloud Solutions') return { label: name, href: '/cloud-solutions', isRoute: true };
            if (name === 'SaaS Experts') return { label: name, href: '/saas-experts', isRoute: true };
            if (name === 'AI Solutions') return { label: name, href: '/ai-solutions', isRoute: true };
            if (name === 'Virtual Assistant') return { label: name, href: '/virtual-assistant', isRoute: true };
            return { label: name, href: '#services' };
        }),
    },
];

const CARD_H = 52;
const BAR_H = 70;
const CARD_TOP = BAR_H - CARD_H / 2;

const FloatingNavbar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState('Home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [navVisible, setNavVisible] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [mobileOpenDD, setMobileOpenDD] = useState(null);
    const scrollTimer = useRef(null);
    const dropdownTimer = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            setNavVisible(false);
            clearTimeout(scrollTimer.current);
            scrollTimer.current = setTimeout(() => setNavVisible(true), 200);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => { window.removeEventListener('scroll', onScroll); clearTimeout(scrollTimer.current); };
    }, []);

    const openDD = (label) => { clearTimeout(dropdownTimer.current); setDropdownOpen(label); };
    const closeDD = () => { dropdownTimer.current = setTimeout(() => setDropdownOpen(null), 150); };

    const handleNavClick = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const id = href.slice(1);
            // If we're on the home page, just scroll
            if (window.location.pathname === '/') {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                else window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // Navigate to home and then scroll after page loads
                navigate('/');
                setTimeout(() => {
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    else window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 400);
            }
        }
    };

    return (
        <div className="relative" style={{ height: `${BAR_H}px` }}>

            {/* ── TOP BAR ── */}
            <div className="bg-white border-b border-gray-100 absolute inset-x-0 top-0" style={{ height: BAR_H }}>
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img src="/dhosti.jpeg" alt="Dhosti" className="h-10 w-auto object-contain"
                            onError={e => { e.currentTarget.style.display = 'none'; }} />
                    </Link>

                    {/* Right buttons */}
                    <div className="hidden md:flex items-center gap-2">
                        <Link to="/contact"
                            className="px-4 py-2 rounded-full text-sm font-bold text-[#233824] border-2 border-[#233824] hover:bg-[#233824] hover:text-white transition-all duration-200 whitespace-nowrap">
                            Contact Us
                        </Link>
                        <a
                            href="https://calendly.com/deepak-teja/introduction"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full border-2 border-[#F5A023] text-[#F5A023] text-sm font-bold hover:bg-[#F5A023] hover:text-white transition-all duration-200 whitespace-nowrap">
                            Hire Now
                        </a>
                    </div>

                    {/* Mobile burger */}
                    <button className="md:hidden ml-3 p-2 flex-shrink-0" onClick={() => setMenuOpen(o => !o)}>
                        <div className="space-y-1.5 w-5">
                            <span className={`block h-0.5 bg-gray-700 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block h-0.5 bg-gray-700 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* ── FLOATING NAV CARD ── */}
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
                            className="flex items-center justify-center rounded-2xl px-6"
                            style={{ height: CARD_H, minWidth: '820px', background: '#f0f2f4', boxShadow: '0 8px 32px rgba(0,0,0,0.16), 0 2px 10px rgba(0,0,0,0.10)' }}
                        >
                            {NAV_LINKS.map((link, idx) => (
                                <React.Fragment key={link.label}>
                                    {link.dropdown ? (
                                        /* Item with dropdown */
                                        <div className="relative" onMouseEnter={() => openDD(link.label)} onMouseLeave={closeDD}>
                                            <a
                                                href={link.href}
                                                onClick={(e) => { handleNavClick(e, link.href); setActive(link.label); }}
                                                className={`px-4 text-sm font-semibold whitespace-nowrap transition-colors duration-200 flex items-center gap-1
                          ${active === link.label ? 'text-[#F5A023]' : 'text-gray-600 hover:text-[#2D6A27]'}`}
                                            >
                                                {link.label}
                                                <svg className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen === link.label ? 'rotate-180' : ''}`}
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </a>

                                            <AnimatePresence>
                                                {dropdownOpen === link.label && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -6, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: -6, scale: 0.95 }}
                                                        transition={{ duration: 0.15 }}
                                                        className="absolute left-0 top-full mt-2 bg-white rounded-xl border border-gray-100 py-2 z-50"
                                                        style={{ boxShadow: '0 12px 30px rgba(0,0,0,0.12)', minWidth: link.label === 'Services' ? '200px' : '160px' }}
                                                    >
                                                        {link.dropdown.map(sub => (
                                                            sub.isRoute ? (
                                                                <Link key={sub.label} to={sub.href}
                                                                    onClick={() => { setActive(sub.label); setDropdownOpen(null); }}
                                                                    className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-[#F5A023] hover:bg-[#F5A023]/5 transition-colors rounded-lg mx-1">
                                                                    {sub.label}
                                                                </Link>
                                                            ) : (
                                                                <a key={sub.label} href={sub.href}
                                                                    onClick={() => { setActive(sub.label); setDropdownOpen(null); }}
                                                                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#F5A023] hover:bg-[#F5A023]/5 transition-colors rounded-lg mx-1">
                                                                    {sub.label}
                                                                </a>
                                                            )
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <a href={link.href}
                                            onClick={(e) => { handleNavClick(e, link.href); setActive(link.label); }}
                                            className={`px-4 text-sm font-semibold whitespace-nowrap transition-colors duration-200
                        ${active === link.label ? 'text-[#F5A023]' : 'text-gray-600 hover:text-[#2D6A27]'}`}>
                                            {link.label}
                                        </a>
                                    )}
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
                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="absolute inset-x-0 top-full overflow-hidden bg-white border-b border-gray-100 shadow-lg z-50 md:hidden"
                    >
                        <div className="px-4 py-3 space-y-1">
                            {NAV_LINKS.map(link => (
                                <React.Fragment key={link.label}>
                                    {link.dropdown ? (
                                        <>
                                            <button
                                                onClick={() => setMobileOpenDD(mobileOpenDD === link.label ? null : link.label)}
                                                className={`w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold ${active === link.label ? 'text-[#F5A023] bg-orange-50' : 'text-gray-700 hover:bg-green-50 hover:text-[#2D6A27]'}`}
                                            >
                                                {link.label}
                                                <svg className={`w-4 h-4 transition-transform duration-200 ${mobileOpenDD === link.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <AnimatePresence>
                                                {mobileOpenDD === link.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden pl-3"
                                                    >
                                                        {link.dropdown.map(sub =>
                                                            sub.isRoute ? (
                                                                <Link key={sub.label} to={sub.href}
                                                                    onClick={() => { setMenuOpen(false); setMobileOpenDD(null); setActive(sub.label); }}
                                                                    className="block px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-[#F5A023] hover:bg-orange-50">
                                                                    ↳ {sub.label}
                                                                </Link>
                                                            ) : (
                                                                <a key={sub.label} href={sub.href}
                                                                    onClick={(e) => { handleNavClick(e, sub.href); setMenuOpen(false); setMobileOpenDD(null); setActive(sub.label); }}
                                                                    className="block px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-[#F5A023] hover:bg-orange-50">
                                                                    ↳ {sub.label}
                                                                </a>
                                                            )
                                                        )}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : link.isRoute ? (
                                        <Link to={link.href} onClick={() => { setMenuOpen(false); setActive(link.label); }}
                                            className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${active === link.label ? 'text-[#F5A023] bg-orange-50' : 'text-gray-700 hover:bg-green-50 hover:text-[#2D6A27]'}`}>
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a href={link.href} onClick={(e) => { handleNavClick(e, link.href); setMenuOpen(false); setActive(link.label); }}
                                            className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${active === link.label ? 'text-[#F5A023] bg-orange-50' : 'text-gray-700 hover:bg-green-50 hover:text-[#2D6A27]'}`}>
                                            {link.label}
                                        </a>
                                    )}
                                </React.Fragment>
                            ))}
                            {/* Mobile contact + hire buttons */}
                            <div className="flex gap-2 pt-2 px-3">
                                <Link to="/contact" onClick={() => setMenuOpen(false)}
                                    className="flex-1 py-2.5 rounded-full border-2 border-[#233824] text-[#233824] text-sm font-bold text-center hover:bg-[#233824] hover:text-white transition-all">
                                    Contact Us
                                </Link>
                                <a
                                    href="https://calendly.com/deepak-teja/introduction"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex-1 py-2.5 rounded-full border-2 border-[#F5A023] text-[#F5A023] text-sm font-bold text-center hover:bg-[#F5A023] hover:text-white transition-all">
                                    Hire Now
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingNavbar;
