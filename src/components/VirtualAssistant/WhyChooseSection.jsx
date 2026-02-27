import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Shield, ArrowRight } from 'lucide-react';

const WhyChooseSection = () => (
    <section className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #f0fdfa 0%, #fff 50%, #ecfeff 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(13,148,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.03) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-64 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(13,148,136,0.04) 0%, transparent 60%)', filter: 'blur(50px)' }} />

        <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-14 relative z-10">
            {/* Header */}
            <motion.div className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <span className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5"
                    style={{ background: '#0d9488' }}>Why Us</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-5" style={{ letterSpacing: '-0.03em' }}>
                    Why Choose Gateway Workforce
                    <br />
                    <span className="text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(135deg, #0d9488, #0891b2)' }}>
                        for Virtual Assistant Services?
                    </span>
                </h2>
            </motion.div>

            {/* Two-card layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-14">
                {/* Problem card */}
                <motion.div
                    className="group relative rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 p-9 md:p-11 bg-white overflow-hidden"
                    initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
                    whileHover={{ y: -8, scale: 1.01 }}>
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: 'linear-gradient(135deg, #fff7ed, #fff1f2)' }} />
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-7 transition-transform duration-300 group-hover:scale-110"
                            style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)' }}>
                            <BarChart3 size={28} className="text-white" />
                        </div>
                        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                            <p>As a busy leader, there are a lot of things on your plate.</p>
                            <p>Whether it's managing email, staying on top of project updates, or keeping up with an overloaded schedule, there are so many details required to run a successful organization.</p>
                            <p className="font-bold text-orange-600">But those details come at a heavy cost: your focus.</p>
                            <p>The important details of your organization have to be handled, but who says you're the best person to handle them?</p>
                            <p>We all want to focus on things that make the biggest impact—professionally and personally. But too often, the demanding details steal our time and attention.</p>
                            <p className="font-black text-2xl text-red-600 mt-4">It's time to take it back with Gateway.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Solution card */}
                <motion.div
                    className="group relative rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 p-9 md:p-11 bg-white overflow-hidden"
                    initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.25 }}
                    whileHover={{ y: -8, scale: 1.01 }}>
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: 'linear-gradient(135deg, #f0fdfa, #ecfeff)' }} />
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-7 transition-transform duration-300 group-hover:scale-110"
                            style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)' }}>
                            <Shield size={28} className="text-white" />
                        </div>
                        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                            <p>Gateway's AI-empowered Virtual Assistant services are pre-vetted and intentionally matched with you and your organization, saving you countless hours of managing job postings.</p>
                            <p>By combining human expertise with powerful AI-enhanced tools, our assistants bring greater efficiency and insight to every task.</p>
                            <p className="font-bold text-teal-600">Our standards are high, and our acceptance rate is lower than Harvard's, ensuring you get the right Virtual Assistant for your needs.</p>
                            <p>So, instead of accomplishing those important (but time-consuming) administrative tasks, work with Gateway.</p>
                            <p className="font-black text-xl text-teal-600">We are a flexible staffing company you can trust—powered by people, enhanced by AI, giving you more time to focus on what matters most.</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom CTA strip */}
            <motion.div className="rounded-2xl text-center py-12 px-8"
                style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)' }}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                    Stop spending countless hours every week on tasks someone else can do.
                </h3>
                <p className="text-teal-100 mb-8 max-w-2xl mx-auto text-lg">
                    Contact us today to discover how you can reclaim your schedule, focus on what matters, and achieve the growth you deserve.
                </p>
                <motion.a href="https://calendly.com/deepak-teja/introduction" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-black py-4 px-9 rounded-xl text-teal-700 bg-white group text-lg transition-all duration-300 hover:-translate-y-1 hover:bg-teal-50 hover:shadow-2xl"
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    Hire Gateway
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-teal-600" />
                </motion.a>
            </motion.div>
        </div>
    </section>
);

export default WhyChooseSection;
