import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const brandLogos = [
    { name: 'Salesforce', path: '/SaaS_Experts_Page/hero/salesforce.svg' },
    { name: 'Shopify', path: '/SaaS_Experts_Page/hero/shopify.svg' },
    { name: 'HubSpot', path: '/SaaS_Experts_Page/hero/hubspot.svg' },
    { name: 'Stripe', path: '/SaaS_Experts_Page/hero/stripe.svg' },
    { name: 'Slack', path: '/SaaS_Experts_Page/hero/slack.svg' },
];

const badges = [
    { text: 'Certified Experts', bg: '#F35120' },
    { text: 'Custom Integration', bg: '#000' },
    { text: '24/7 Support', bg: '#F35120' },
    { text: 'ROI Optimization', bg: '#000' },
];

const HeroSection = () => {
    const [on, setOn] = useState(false);
    useEffect(() => { const t = setTimeout(() => setOn(true), 600); return () => clearTimeout(t); }, []);

    const tx = (val, delay = 0) => ({
        style: {
            transform: on ? 'translate(0,0)' : val,
            opacity: on ? 1 : 0,
            filter: on ? 'blur(0)' : 'blur(4px)',
            transition: `all 1s ease-out ${delay}ms`,
        },
    });

    return (
        <section className="relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #fff7f5 0%, #fff 50%, #fff5f0 100%)' }}>
            {/* Glows */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 75% 20%, rgba(243,81,32,0.10) 0%, transparent 60%)', filter: 'blur(60px)' }} />
            <div className="absolute bottom-0 left-0 w-2/3 h-2/3 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 25% 80%, rgba(243,81,32,0.07) 0%, transparent 60%)', filter: 'blur(60px)' }} />

            {/* Floating dots */}
            {[
                { top: '15%', left: '3%', size: 50, dur: 6 },
                { top: '70%', left: '2%', size: 30, dur: 8 },
                { top: '20%', right: '4%', size: 44, dur: 7 },
                { bottom: '15%', right: '3%', size: 26, dur: 5 },
            ].map((f, i) => (
                <motion.div key={i} className="absolute rounded-full pointer-events-none hidden md:block"
                    style={{ width: f.size, height: f.size, top: f.top, left: f.left, right: f.right, bottom: f.bottom, background: '#F35120', opacity: 0.08 }}
                    animate={{ y: [0, -18, 0] }}
                    transition={{ duration: f.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }} />
            ))}

            <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-14 py-20 md:py-28 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* LEFT */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className="overflow-hidden mb-4">
                            <div {...tx('translateX(-100%)')}>
                                <span className="text-[#F35120] text-sm font-bold uppercase tracking-widest flex items-center gap-2 justify-center lg:justify-start">
                                    <span className="w-2 h-2 rounded-full bg-[#F35120] animate-pulse" />
                                    SaaS Integration Excellence
                                </span>
                            </div>
                        </div>

                        <div className="overflow-hidden mb-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
                                style={{ letterSpacing: '-0.03em', ...tx('translateY(40px)', 200).style }}>
                                Optimize with{' '}
                                <span style={{ color: '#F35120' }}>SaaS Mastery</span>
                            </h1>
                        </div>

                        <div className="overflow-hidden mb-5">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-700"
                                style={tx('translateY(20px)', 300).style}>
                                Salesforce, Shopify & HubSpot Specialists
                            </h2>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl"
                            style={tx('translateY(20px)', 400).style}>
                            Maximize your business potential with seamless SaaS integration, customization, and optimization. Scale efficiently with expert-driven solutions tailored to your needs.
                        </p>

                        {/* Feature badges */}
                        <motion.div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={on ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.7 }}>
                            {badges.map((b, i) => (
                                <motion.span key={i} whileHover={{ scale: 1.07 }}
                                    className="px-5 py-2 rounded-full text-sm font-semibold text-white shadow-lg cursor-default"
                                    style={{ background: b.bg }}>
                                    {b.text}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }} animate={on ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.85 }}>
                            <motion.button
                                onClick={() => document.getElementById('saas-services')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-white text-base group transition-all duration-300 hover:-translate-y-1"
                                style={{ background: 'linear-gradient(135deg, #F35120, #ff7043)', boxShadow: '0 4px 24px rgba(243,81,32,0.4)' }}
                                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                Explore Services
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.a href="https://calendly.com/deepak-teja/introduction" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-gray-700 text-base bg-white border-2 border-gray-200 hover:border-[#F35120] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                whileHover={{ scale: 1.03 }}>
                                Book a Demo
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* RIGHT — hero image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <motion.div style={{ maxWidth: 500 }}
                            initial={{ x: 80, opacity: 0 }} animate={on ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}>
                            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                                <img src="/SaaS_Experts_Page/hero/saap-hero.webp" alt="SaaS Solutions"
                                    className="w-full object-contain"
                                    style={{ filter: 'drop-shadow(0 20px 60px rgba(243,81,32,0.2))' }} />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Brand logos */}
                <motion.div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-12"
                    initial={{ opacity: 0 }} animate={on ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 1.1 }}>
                    <p className="w-full text-center text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">Platforms We Master</p>
                    {brandLogos.map((l, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.15, filter: 'grayscale(0%) opacity(1)' }}
                            className="opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer">
                            <img src={l.path} alt={l.name}
                                className="object-contain"
                                style={{ height: 44, maxWidth: l.name === 'Shopify' ? 90 : 70 }}
                                onError={e => { e.currentTarget.style.display = 'none'; }} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
