import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, ArrowRight } from 'lucide-react';

const techLogos = [
    { name: 'AWS', path: '/Cloud_Solutions_Page/aws.svg' },
    { name: 'Azure', path: '/Cloud_Solutions_Page/azure.svg' },
    { name: 'Docker', path: '/Cloud_Solutions_Page/docker.svg' },
    { name: 'Kubernetes', path: '/Cloud_Solutions_Page/kubernetes.svg' },
    { name: 'GitHub', path: '/Cloud_Solutions_Page/github.svg' },
    { name: 'MySQL', path: '/Cloud_Solutions_Page/mysql.svg' },
    { name: 'Oracle', path: '/Cloud_Solutions_Page/oracle.svg' },
    { name: 'Grafana', path: '/Cloud_Solutions_Page/grafana.svg' },
];

const HeroSection = () => {
    const [textAnimated, setTextAnimated] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setTextAnimated(true), 600);
        return () => clearTimeout(t);
    }, []);

    return (
        <section className="relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f0f9ff 50%, #ecfeff 100%)' }}>
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 70% 20%, rgba(59,130,246,0.12) 0%, transparent 60%)', filter: 'blur(40px)' }} />
            <div className="absolute bottom-0 left-0 w-2/3 h-2/3 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 30% 80%, rgba(6,182,212,0.10) 0%, transparent 60%)', filter: 'blur(40px)' }} />

            {/* Floating cloud shapes */}
            {[
                { size: 60, top: '12%', left: '4%', opacity: 0.12, dur: 6 },
                { size: 40, top: '70%', left: '3%', opacity: 0.08, dur: 8 },
                { size: 50, top: '20%', right: '5%', opacity: 0.1, dur: 7 },
                { size: 30, top: '80%', right: '6%', opacity: 0.12, dur: 5 },
            ].map((f, i) => (
                <motion.div key={i}
                    className="absolute pointer-events-none rounded-full hidden md:block"
                    style={{ width: f.size, height: f.size, top: f.top, left: f.left, right: f.right, background: '#3b82f6', opacity: f.opacity }}
                    animate={{ y: [0, -18, 0] }}
                    transition={{ duration: f.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }} />
            ))}

            <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-14 py-20 md:py-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* LEFT — text */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            className="inline-flex items-center gap-2 mb-5"
                            initial={{ x: -60, opacity: 0 }}
                            animate={textAnimated ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">Cloud Solutions Excellence</span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4"
                            style={{ letterSpacing: '-0.03em' }}
                            initial={{ y: 60, opacity: 0 }}
                            animate={textAnimated ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                        >
                            Transform with{' '}
                            <span className="text-transparent bg-clip-text"
                                style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #0891b2)' }}>
                                Cloud Excellence
                            </span>
                        </motion.h1>

                        <motion.h2
                            className="text-xl sm:text-2xl font-bold text-cyan-600 mb-5"
                            initial={{ y: 30, opacity: 0 }}
                            animate={textAnimated ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        >
                            AWS & Azure Migration Experts
                        </motion.h2>

                        <motion.p
                            className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl lg:max-w-none"
                            initial={{ y: 30, opacity: 0 }}
                            animate={textAnimated ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                        >
                            Accelerate your digital transformation with expert cloud migration, optimization, and SaaS development services. Scale seamlessly with enterprise-grade solutions.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ y: 30, opacity: 0 }}
                            animate={textAnimated ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                        >
                            <a
                                href="#services-section"
                                onClick={e => { e.preventDefault(); document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' }); }}
                                className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-white text-base transition-all duration-300 hover:-translate-y-1 group"
                                style={{ background: 'linear-gradient(135deg, #2563eb, #0891b2)', boxShadow: '0 4px 24px rgba(37,99,235,0.35)' }}>
                                Explore Services
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="https://calendly.com/deepak-teja/introduction" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-base bg-white border-2 border-blue-200 text-gray-700 hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                View Case Studies
                            </a>
                        </motion.div>
                    </div>

                    {/* RIGHT — hero image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <motion.div
                            className="relative w-full"
                            style={{ maxWidth: 520 }}
                            initial={{ x: 80, opacity: 0 }}
                            animate={textAnimated ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                        >
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                                <img
                                    src="/Cloud_Solutions_Page/cloud-hero2.webp"
                                    alt="Cloud Solutions"
                                    className="w-full object-contain drop-shadow-2xl"
                                    style={{ filter: 'drop-shadow(0 20px 60px rgba(37,99,235,0.2))' }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Tech logos strip */}
                <motion.div
                    className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-12"
                    initial={{ opacity: 0 }}
                    animate={textAnimated ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <p className="w-full text-center text-xs text-gray-400 uppercase tracking-widest mb-2 font-semibold">Powered by</p>
                    {techLogos.map((logo, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.15, filter: 'grayscale(0%)' }}
                            className="cursor-pointer transition-all duration-300 opacity-60 grayscale hover:opacity-100">
                            <img src={logo.path} alt={logo.name}
                                className="h-10 sm:h-12 w-auto object-contain"
                                style={{ maxWidth: logo.name === 'MySQL' ? 80 : 60 }}
                                onError={e => { e.currentTarget.style.display = 'none'; }} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
