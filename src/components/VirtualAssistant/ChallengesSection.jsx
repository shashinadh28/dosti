import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Mail, AlertTriangle } from 'lucide-react';

const cards = [
    {
        icon: Clock,
        title: 'Lack of Time',
        description: 'Are you stretched so thin that you don\'t have time to hire the help you need—let alone take a vacation?',
        image: '/Virtual-Assistant-Page/virtual-assestent-main.webp',
        accentColor: '#0d9488',
        delay: 0.1,
    },
    {
        icon: Mail,
        title: 'Unanswered Calls & Emails',
        description: 'Have you missed information critical for growing your organization or serving your clients?',
        image: '/Virtual-Assistant-Page/virtual-assestent.webp',
        accentColor: '#0891b2',
        delay: 0.2,
    },
    {
        icon: AlertTriangle,
        title: 'Missed Projects & Deadlines',
        description: 'How many opportunities do you miss because of your chaos? It\'s time to hire a Virtual Assistant!',
        image: '/Virtual-Assistant-Page/administrative-tasks.webp',
        accentColor: '#0d9488',
        delay: 0.3,
    },
];

const ChallengesSection = () => (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(13,148,136,0.04) 0%, transparent 60%)' }} />

        <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-14">
            {/* Header */}
            <motion.div className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <span className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5"
                    style={{ background: '#0d9488' }}>Your Challenges</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
                    style={{ letterSpacing: '-0.03em' }}>
                    What Challenges Are{' '}
                    <span className="text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(135deg, #0d9488, #0891b2)' }}>
                        Limiting Your Growth?
                    </span>
                </h2>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {cards.map((card, i) => {
                    const Icon = card.icon;
                    return (
                        <motion.div key={i}
                            className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-400 hover:-translate-y-3 hover:shadow-2xl cursor-default"
                            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.7, delay: card.delay }}>
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <img src={card.image} alt={card.title}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0"
                                    style={{ background: `linear-gradient(180deg, transparent 40%, ${card.accentColor}22 100%)` }} />
                            </div>
                            {/* Content */}
                            <div className="p-7">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
                                        style={{ background: `${card.accentColor}18` }}>
                                        <Icon size={18} style={{ color: card.accentColor }} />
                                    </div>
                                    <h3 className="text-lg font-black text-gray-900 transition-colors duration-300 group-hover:text-teal-600">
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">{card.description}</p>
                                {/* Animated border */}
                                <div className="mt-5 h-0.5 rounded-full transition-all duration-500"
                                    style={{ background: `linear-gradient(90deg, ${card.accentColor}, #06b6d4)`, width: '0%' }}
                                    ref={el => { if (el) el.style.width = '0%'; }}
                                    onMouseEnter={e => { e.currentTarget.style.width = '100%'; }}
                                    onMouseLeave={e => { e.currentTarget.style.width = '0%'; }} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default ChallengesSection;
