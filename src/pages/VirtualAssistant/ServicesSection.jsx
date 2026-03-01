import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Building, DollarSign, Heart, Megaphone, CheckCircle } from 'lucide-react';

const categories = [
    {
        id: 'administrative', title: 'ADMINISTRATIVE TASKS', icon: FileText,
        image: '/Virtual-Assistant-Page/administrative-tasks.webp',
        accent: '#0d9488',
        tasks: [
            'Calendar & schedule management', 'Email management', 'Travel coordination',
            'Meeting confirmation, preparation & notes', 'Event planning & coordination',
            'Project assistance, research & reporting', 'Employee candidate pre-screening',
            'Return calls & voicemails',
        ],
    },
    {
        id: 'operational', title: 'OPERATIONAL TASKS', icon: Building,
        image: '/Virtual-Assistant-Page/Operational-tasks.webp',
        accent: '#0891b2',
        tasks: [
            'Client intake', 'Project coordination', 'HR-related tasks',
            'CRM management and updating', 'Industry research', 'Report generation',
            'Data analysis enhanced by AI-powered insights', 'Project management assistance',
        ],
    },
    {
        id: 'financial', title: 'FINANCIAL TASKS', icon: DollarSign,
        image: '/Virtual-Assistant-Page/Financial-Tasks.webp',
        accent: '#0d9488',
        tasks: [
            'Expense tracking & categorization', 'Invoice processing', 'Budget monitoring',
            'Financial report generation', 'Vendor payment coordination', 'Cost analysis',
            'Accounts payable support', 'Financial data entry & reconciliation',
        ],
    },
    {
        id: 'personal', title: 'PERSONAL TASKS', icon: Heart,
        image: '/Virtual-Assistant-Page/Personal-Tasks.webp',
        accent: '#0891b2',
        tasks: [
            'Gift purchases', 'Send personal cards', 'Set personal appointments',
            'AI-enhanced vendor research', 'Vacation planning',
        ],
    },
    {
        id: 'marketing', title: 'MARKETING TASKS', icon: Megaphone,
        image: '/Virtual-Assistant-Page/marketing-tasks.webp',
        accent: '#0d9488',
        tasks: [
            'Schedule pre-written social media content', 'Report generation with AI insights',
            'Manage social calendar & library', 'eNewsletters, blogs & eBlasts',
            'Compile free or licensed stock photos', 'Responding to social media posts',
        ],
    },
];

const ServicesSection = () => {
    const [active, setActive] = useState('administrative');
    const activeData = categories.find(c => c.id === active);

    return (
        <section className="py-20 md:py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #f0fdfa 0%, #ecfeff 100%)' }}>
            <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(13,148,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.03) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />

            <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-14">
                {/* Header */}
                <motion.div className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <span className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5"
                        style={{ background: '#0d9488' }}>Our Services</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-5" style={{ letterSpacing: '-0.03em' }}>
                        Professional Virtual{' '}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: 'linear-gradient(135deg, #0d9488, #0891b2)' }}>
                            Assistant Services
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Gateway's Virtual Assistant services provide a variety of solutions — select a category to explore.
                    </p>
                    <motion.div className="w-full max-w-3xl mx-auto h-0.5 mt-8 rounded-full"
                        style={{ background: 'linear-gradient(90deg, transparent, #0d9488, transparent)' }}
                        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Left — category tabs */}
                    <motion.div className="space-y-4"
                        initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        {categories.map((cat, i) => {
                            const Icon = cat.icon;
                            const isActive = active === cat.id;
                            return (
                                <motion.button key={cat.id} onClick={() => setActive(cat.id)}
                                    className="w-full text-left rounded-2xl p-5 flex items-center gap-4 cursor-pointer border-2 transition-all duration-300"
                                    style={{
                                        background: isActive ? `linear-gradient(135deg, ${cat.accent}, #06b6d4)` : '#fff',
                                        borderColor: isActive ? 'transparent' : '#e5e7eb',
                                        boxShadow: isActive ? `0 8px 32px ${cat.accent}35` : '0 2px 8px rgba(0,0,0,0.04)',
                                        transform: isActive ? 'scale(1.02)' : 'scale(1)',
                                    }}
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileTap={{ scale: 0.98 }}>
                                    <div className="w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center shadow-sm"
                                        style={{ background: isActive ? 'rgba(255,255,255,0.25)' : `${cat.accent}15` }}>
                                        <Icon size={20} style={{ color: isActive ? '#fff' : cat.accent }} />
                                    </div>
                                    <span className={`text-sm font-black tracking-wider uppercase ${isActive ? 'text-white' : 'text-gray-800'}`}>
                                        {cat.title}
                                    </span>
                                    <div className="ml-auto w-2.5 h-2.5 rounded-full flex-shrink-0"
                                        style={{ background: isActive ? 'rgba(255,255,255,0.8)' : '#d1d5db' }} />
                                </motion.button>
                            );
                        })}
                    </motion.div>

                    {/* Right — dynamic content */}
                    <motion.div
                        className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 relative overflow-hidden"
                        initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <div className="absolute top-0 right-0 w-36 h-36 rounded-full pointer-events-none"
                            style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)', transform: 'translate(50%, -50%)' }} />

                        <AnimatePresence mode="wait">
                            <motion.div key={active}
                                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}>
                                <h3 className="text-2xl font-black text-gray-900 mb-5">{activeData?.title}</h3>
                                {/* Image */}
                                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 shadow-md">
                                    <img src={activeData?.image} alt={activeData?.title}
                                        className="object-cover w-full h-full" />
                                    <div className="absolute inset-0"
                                        style={{ background: `linear-gradient(180deg, transparent 40%, ${activeData?.accent}25 100%)` }} />
                                </div>
                                {/* Divider */}
                                <div className="h-0.5 w-full rounded-full mb-6"
                                    style={{ background: `linear-gradient(90deg, ${activeData?.accent}, #06b6d4)` }} />
                                {/* Tasks */}
                                <div className="space-y-3">
                                    {activeData?.tasks.map((task, i) => (
                                        <motion.div key={i} className="flex items-start gap-3"
                                            initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 + i * 0.05 }}>
                                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                                style={{ background: `linear-gradient(135deg, ${activeData?.accent}, #06b6d4)` }}>
                                                <CheckCircle size={10} className="text-white" />
                                            </div>
                                            <p className="text-gray-700 text-base leading-snug">{task}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
