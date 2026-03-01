import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { number: '2022', label: 'Founded' },
    { number: '100+', label: 'Cloud Clients' },
    { number: '99.9%', label: 'Uptime SLA' },
];

const AboutSection = () => (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Left — text */}
                <motion.div
                    className="w-full lg:w-1/2 order-2 lg:order-1"
                    initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">About Us</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight"
                        style={{ letterSpacing: '-0.02em' }}>
                        Seamless Cloud Deployment,{' '}
                        <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #0891b2)' }}>
                            Migration & Management
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        At dhosti, we empower businesses with end-to-end cloud solutions, specializing in AWS and Azure deployment, migration, and management. Our certified cloud architects and engineers help organizations optimize performance, enhance security, and reduce costs through scalable, high-performance cloud infrastructure.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        {stats.map((s, i) => (
                            <motion.div key={i}
                                className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                                <p className="text-2xl sm:text-3xl font-black text-blue-600 mb-1">{s.number}</p>
                                <p className="text-xs text-gray-500 font-medium">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right — image */}
                <motion.div
                    className="w-full lg:w-1/2 order-1 lg:order-2"
                    initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <div className="relative">
                        <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full pointer-events-none"
                            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                        <img
                            src="/Cloud_Solutions_Page/about_us/about_cloud.webp"
                            alt="Cloud Solutions Professional"
                            className="rounded-2xl shadow-2xl w-full object-cover"
                            style={{ filter: 'drop-shadow(0 20px 40px rgba(37,99,235,0.15))' }}
                        />
                        {/* Floating badge */}
                        <div className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl shadow-2xl"
                            style={{ background: 'linear-gradient(135deg, #1e40af, #0891b2)', color: '#fff' }}>
                            <div className="text-lg font-black">AWS & Azure</div>
                            <div className="text-xs text-blue-200">Certified Architects</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default AboutSection;
