import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * HiringProcess — with real images from /Our_Hiring_Process/
 */

const processStepsData = [
    {
        id: 1,
        title: 'Send A Job Description',
        description: 'Send A Job Description to jobs@dhosti.com and our team will review it promptly',
        image: '/Our_Hiring_Process/description.webp',
    },
    {
        id: 2,
        title: 'Candidate Sourcing',
        description: 'Dhosti finds qualified candidates from current staff, vetted resumes or the recruiting process',
        image: '/Our_Hiring_Process/recruitment.webp',
    },
    {
        id: 3,
        title: 'Interview & Selection',
        description: 'You meet, interview and select the candidate, and Dhosti onboards them seamlessly',
        image: '/Our_Hiring_Process/select.webp',
    },
];

const HiringProcess = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimationComplete(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="hiring" className="pt-24 pb-24 lg:pt-28 lg:pb-28 relative overflow-hidden" style={{ backgroundColor: '#233824' }}>
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#F5A023] rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#2D6A27] rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
                <motion.div className="text-center mb-12 lg:mb-16"
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <motion.span
                        className="inline-block bg-[#F5A023] text-white text-xs font-bold px-6 py-2.5 rounded-full uppercase tracking-widest mb-5 shadow-lg"
                        whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(245,160,35,0.3)' }}
                        transition={{ duration: 0.3 }}>
                        Our Hiring Process
                    </motion.span>
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-3"
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}>
                        <span className="text-[#F5A023]">Hiring</span> with Dhosti is as simple as:
                    </motion.h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-3 items-center">
                    {processStepsData.map((step, index) => (
                        <React.Fragment key={step.id}>
                            <motion.div className="flex-1 relative"
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                                <div className="relative mb-6 flex justify-center">
                                    <div className="relative">
                                        <motion.div
                                            className="w-48 h-48 rounded-full border-[3px] border-dashed absolute inset-0"
                                            style={{ borderColor: 'rgba(245,160,35,0.4)' }}
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} />
                                        <div className="w-48 h-48 rounded-full flex items-center justify-center relative">
                                            <div className="w-40 h-40 rounded-full overflow-hidden">
                                                <img src={step.image} alt={step.title} className="w-full h-full object-cover rounded-full" />
                                            </div>
                                            <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#F5A023] text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg border-2 border-white">
                                                {String(step.id).padStart(2, '0')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center px-2">
                                    <motion.h3 className="text-lg lg:text-xl font-bold text-white mb-3"
                                        initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                                        whileHover={{ scale: 1.03, color: '#F5A023' }}>
                                        {step.title}
                                    </motion.h3>
                                    <motion.p className="text-white/60 leading-relaxed text-sm lg:text-base max-w-xs mx-auto"
                                        initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}>
                                        {step.description}
                                    </motion.p>
                                </div>
                            </motion.div>

                            {index < processStepsData.length - 1 && (
                                <motion.div className="hidden lg:flex items-center justify-center px-2 -mt-16"
                                    initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.6, duration: 0.4, type: 'spring', bounce: 0.3 }}>
                                    <div className="relative">
                                        <motion.div animate={{ x: [0, 8, 0] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
                                            <ArrowRight className="w-8 h-8 text-[#F5A023]" strokeWidth={2} />
                                        </motion.div>
                                        <motion.div className="absolute inset-0 w-8 h-8 bg-[#F5A023] rounded-full opacity-15 blur-lg"
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0.4, 0.15] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} />
                                    </div>
                                </motion.div>
                            )}
                            {index < processStepsData.length - 1 && (
                                <motion.div className="lg:hidden flex justify-center my-4"
                                    initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: index * 0.15 + 0.8 }}>
                                    <motion.div animate={{ y: [0, 6, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
                                        <ArrowRight className="w-6 h-6 text-[#F5A023] rotate-90" strokeWidth={2} />
                                    </motion.div>
                                </motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HiringProcess;
