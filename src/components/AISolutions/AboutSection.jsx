import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: '10+', label: 'AI Models Deployed' },
    { value: '75+', label: 'Clients' },
    { value: '95%', label: 'Accuracy Rate' },
];

const AboutSection = () => (
    <section className="py-20 sm:py-28 bg-white overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.05) 0%, transparent 60%)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* LEFT — text */}
                <motion.div className="w-full lg:w-3/5 order-2 lg:order-1"
                    initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <span className="font-bold tracking-widest uppercase text-xs mb-4 block" style={{ color: '#7c3aed' }}>About Us</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight"
                        style={{ letterSpacing: '-0.02em' }}>
                        Transform Your Business with
                        <br />
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed, #db2777, #4338ca)' }}>
                            Custom AI, Automation & Data-Driven Insights
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        At Gateway Workforce, we build cutting-edge AI solutions that empower enterprises to harness the full potential of artificial intelligence. From custom Large Language Models (LLMs) to intelligent automation and predictive analytics, we deliver tailored AI strategies that drive efficiency, innovation, and competitive advantage.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        {stats.map((s, i) => (
                            <motion.div key={i}
                                className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm text-center cursor-default transition-all duration-300 hover:shadow-lg"
                                whileHover={{ y: -4, borderColor: '#7c3aed' }}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                                <p className="text-2xl sm:text-3xl font-black mb-1 text-transparent bg-clip-text"
                                    style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed, #db2777)' }}>{s.value}</p>
                                <p className="text-xs text-gray-500 font-medium">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT — image */}
                <motion.div className="w-full lg:w-2/5 order-1 lg:order-2"
                    initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <div className="relative">
                        <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full pointer-events-none"
                            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                        <img src="/AI_Solutions_Page/About-use/ai-hero.webp" alt="AI Solutions Professional"
                            className="rounded-2xl shadow-2xl w-full object-cover"
                            style={{ filter: 'drop-shadow(0 20px 40px rgba(124,58,237,0.18))' }} />
                        {/* Badge */}
                        <div className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl shadow-2xl"
                            style={{ background: 'linear-gradient(135deg, #7c3aed, #a21caf)', color: '#fff' }}>
                            <div className="text-base font-black">AI Certified Experts</div>
                            <div className="text-xs text-purple-200">LLM · ML · Data Analytics</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default AboutSection;
