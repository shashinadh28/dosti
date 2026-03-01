import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: EASE, delay },
});

const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', phone: '', message: '' });
    const [focused, setFocused] = useState(null);
    const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const inp = (name) =>
        `w-full px-4 py-3.5 rounded-xl border-2 text-sm outline-none transition-all duration-300 bg-white placeholder-gray-400 ${focused === name ? 'border-[#F5A023] shadow-md shadow-[#F5A023]/10' : 'border-gray-200 hover:border-gray-300'
        }`;

    return (
        <section className="bg-gray-50 min-h-screen">

            {/* ── HERO full-width with black L→R fade ── */}
            <div className="relative w-full overflow-hidden" style={{ height: 'clamp(260px, 32vw, 400px)' }}>
                <img src="/contact/contact.webp" alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.15) 75%, transparent 100%)' }} />
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
                        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: EASE }}>
                            <p className="text-[#F5A023] text-xs font-bold tracking-widest uppercase mb-3">Home / Contact Us</p>
                            <h1 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
                                Contact Us
                            </h1>
                            <div className="w-16 h-1 bg-[#F5A023] rounded-full mt-4" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── MAIN LAYOUT: top info cards + 2-col below ── */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">

                {/* 3 info cards — inspired by reference: icon + title + value horizontally */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
                    {[
                        {
                            icon: (
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            ),
                            label: 'Call Us',
                            value: '+91 9963280892',
                            accent: '#F5A023',
                            href: 'tel:+919963280892',
                        },
                        {
                            icon: (
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            ),
                            label: 'Our Office',
                            value: 'Plot no 62 Varuna House, 3rd floor, KPHB 5th Phase Rd, Kukatpally, Hyderabad 500075',
                            accent: '#2D6A27',
                            href: 'https://maps.app.goo.gl/H74SHSGfcj5XcaiV6',
                        },
                        {
                            icon: (
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            ),
                            label: 'Email Us',
                            value: 'deepakt@dhostiglobal.com',
                            accent: '#4F46E5',
                            href: 'mailto:deepakt@dhostiglobal.com',
                        },
                    ].map((card, i) => (
                        <motion.a
                            href={card.href}
                            target={card.href.startsWith('http') ? '_blank' : undefined}
                            rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            key={card.label}
                            className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer no-underline"
                            {...fadeUp(i * 0.1)}
                            whileHover={{ y: -5, boxShadow: `0 16px 40px ${card.accent}20` }}
                        >
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                style={{ background: `${card.accent}12`, color: card.accent }}>
                                {card.icon}
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: card.accent }}>{card.label}</p>
                                <p className="text-gray-700 text-sm font-medium leading-relaxed">{card.value}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* ── 2-COL: left = Get In Touch title + map, right = form ── */}
                <div className="grid lg:grid-cols-2 gap-10 items-start">

                    {/* LEFT — "Get In Touch" + map below */}
                    <motion.div {...fadeUp(0.05)}>
                        <div className="mb-8">
                            <span className="text-[#F5A023] text-xs font-bold tracking-widest uppercase mb-2 block">Contact Us</span>
                            <h2 className="font-display font-bold text-gray-900 leading-tight mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                                Get In Touch
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md">
                                Write us any message. Complete system across various office scenarios.
                                We are here to help your business grow with global talent solutions.
                            </p>
                            <a
                                href="https://www.linkedin.com/company/dhosti-global-workforce/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#233824] text-white text-sm font-semibold hover:bg-[#F5A023] transition-colors duration-300"
                            >
                                <span className="font-bold text-base">in</span> Follow on LinkedIn
                            </a>
                        </div>

                        {/* Google Map */}
                        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md" style={{ height: '280px' }}>
                            <iframe
                                title="Dhosti Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.839!2d78.3917!3d17.4917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917955555555%3A0x1234567890abcdef!2sKPHB%205th%20Phase%20Rd%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1700000000000"
                                className="w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </motion.div>

                    {/* RIGHT — Form card */}
                    <motion.div
                        className="bg-white rounded-3xl p-8 border border-gray-100"
                        style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.07)' }}
                        {...fadeUp(0.12)}
                    >
                        <h3 className="font-display font-bold text-gray-900 text-xl mb-6">Send Us a Message</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-gray-600 text-xs font-semibold mb-1.5 block">Name</label>
                                <input name="name" value={form.name} onChange={onChange}
                                    onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                                    placeholder="Your name here" className={inp('name')} />
                            </div>
                            <div>
                                <label className="text-gray-600 text-xs font-semibold mb-1.5 block">Email</label>
                                <input name="email" value={form.email} onChange={onChange}
                                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                                    placeholder="Your email here" className={inp('email')} />
                            </div>
                            <div>
                                <label className="text-gray-600 text-xs font-semibold mb-1.5 block">Subject</label>
                                <input name="subject" value={form.subject} onChange={onChange}
                                    onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                                    placeholder="Your subject here" className={inp('subject')} />
                            </div>
                            <div>
                                <label className="text-gray-600 text-xs font-semibold mb-1.5 block">Message</label>
                                <textarea name="message" value={form.message} onChange={onChange}
                                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                                    rows={4} placeholder="Tell us a few words"
                                    className={`${inp('message')} resize-none`} />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: '0 10px 28px rgba(245,160,35,0.35)' }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full mt-2 py-3.5 rounded-xl bg-[#F5A023] text-white font-bold text-sm uppercase tracking-wide hover:bg-[#e8901a] transition-colors"
                            >
                                Send Now ↗
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
