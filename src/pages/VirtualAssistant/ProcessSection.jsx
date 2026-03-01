import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Search, UserCheck, PlayCircle, Settings, Handshake, ArrowRight } from 'lucide-react';

const steps = [
    {
        title: 'Step 1. Sales Call',
        icon: Phone,
        color: '#0d9488',
        description: 'Meet with your Solutions Consultant to identify your exact needs and pain points and determine the right hire for you. If Gateway is a good fit, we\'ll send you an agreement to sign, and you\'ll be paired with a Client Success Consultant.',
    },
    {
        title: 'Step 2. Discovery Call',
        icon: Search,
        color: '#0891b2',
        description: 'Meet with your Client Success Consultant to deep dive into your tasks, tools, culture, and personality requirements to ensure we match you with the right Gateway Professional.',
    },
    {
        title: 'Step 3. Placement Process',
        icon: UserCheck,
        color: '#0d9488',
        description: 'Now for our Secret Sauce: Your Client Success Consultant will vet and interview top candidates from our bench of nearly 2,000 India-based Professionals. They\'ll select the best match for you—in an average of just one week.',
    },
    {
        title: 'Step 4. Kickoff Call',
        icon: PlayCircle,
        color: '#0891b2',
        description: 'You, your Client Success Consultant, and your new teammate will have a kickoff call—the official start to your partnership—to set initial goals, discuss communication plans, and set yourselves up for success.',
    },
    {
        title: 'Step 5. Onboarding',
        icon: Settings,
        color: '#0d9488',
        description: 'Your Client Success Consultant stays close to provide our signature exceptional service and guide you through our proven onboarding process.',
    },
    {
        title: 'Step 6. Nurturing',
        icon: Handshake,
        color: '#0891b2',
        description: 'You will have ongoing check-ins to support both you and your Gateway Professional throughout your partnership with Gateway.',
    },
];

const ProcessSection = () => (
    <section className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #f0fdfa 0%, #fff 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(13,148,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.03) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />

        <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-14 relative z-10">
            {/* Header */}
            <motion.div className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <span className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5"
                    style={{ background: '#0d9488' }}>Our Process</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-5" style={{ letterSpacing: '-0.03em' }}>
                    Our Virtual Assistant{' '}
                    <span className="text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(135deg, #0d9488, #0891b2)' }}>Process</span>
                </h2>
                <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
                    Our streamlined process ensures you get matched with the perfect virtual assistant quickly and efficiently.
                </p>
            </motion.div>

            {/* Steps grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {steps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                        <motion.div key={i}
                            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-3 p-7 relative overflow-hidden cursor-default"
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                            {/* Gradient corner */}
                            <div className="absolute top-0 right-0 w-20 h-20 rounded-full pointer-events-none transition-all duration-300 group-hover:w-40 group-hover:h-40"
                                style={{ background: `radial-gradient(circle, ${step.color}14 0%, transparent 70%)`, transform: 'translate(50%, -50%)' }} />
                            {/* Step number + icon */}
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0"
                                    style={{ background: `linear-gradient(135deg, ${step.color}, #06b6d4)` }}>
                                    <Icon size={24} className="text-white" />
                                </div>
                                <span className="text-5xl font-black opacity-10 text-gray-900 leading-none"
                                    style={{ color: step.color }}>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">{step.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                            {/* Bottom bar */}
                            <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                                style={{ background: `linear-gradient(90deg, ${step.color}, #67e8f9)` }} />
                        </motion.div>
                    );
                })}
            </div>

            {/* CTA */}
            <motion.div className="flex justify-center mt-14"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
                <motion.a href="https://calendly.com/deepak-teja/introduction" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-black py-4 px-9 rounded-xl text-lg text-white group transition-all duration-300 hover:-translate-y-1"
                    style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)', boxShadow: '0 4px 24px rgba(13,148,136,0.45)' }}
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    Hire Gateway
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
            </motion.div>
        </div>
    </section>
);

export default ProcessSection;
