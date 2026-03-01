import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * TalentChallenges — warm cream bg, 3-col cards
 * Enhanced: no emoji icons, decorative geometric shapes in bg,
 * card hover: expands with image + accent gradient reveal
 */

const EASE = [0.22, 1, 0.36, 1];

const CARDS = [
    {
        title: 'High Wages',
        desc: 'Employing global talent reduces overall salary expenses while maintaining quality output.',
        img: '/Helping_Solve_Talent_Challenges/high_wages.webp',
        accent: '#F5A023',
    },
    {
        title: 'Talent Shortage',
        desc: 'Many IT skills are in high demand; Dhosti searches globally and finds available talent fast.',
        img: '/Helping_Solve_Talent_Challenges/Talent_Shortage.webp',
        accent: '#2D6A27',
    },
    {
        title: 'Variable Staffing',
        desc: 'When projects have fluctuating talent needs, staff augmentation is a perfect solution.',
        img: '/Helping_Solve_Talent_Challenges/Variable_Staffing_Needs.webp',
        accent: '#4F46E5',
    },
    {
        title: 'Compliance',
        desc: 'Labor laws and taxes vary widely; Dhosti keeps employers in full compliance across regions.',
        img: '/Helping_Solve_Talent_Challenges/Compliance.webp',
        accent: '#0891B2',
    },
    {
        title: 'Project Timelines',
        desc: 'Utilizing global talent extends work days to meet deadlines with the follow-the-sun model.',
        img: '/Helping_Solve_Talent_Challenges/Project_Timelines.webp',
        accent: '#DC2626',
    },
    {
        title: 'EOR',
        desc: 'As Employer Of Record, Dhosti takes care of all employment regulations and onboarding.',
        img: '/Helping_Solve_Talent_Challenges/EOR.webp',
        accent: '#7C3AED',
    },
    {
        title: 'Budgetary Constraints',
        desc: "When budgets don't allow permanent hires, Dhosti staff fills the gap cost-effectively.",
        img: '/Helping_Solve_Talent_Challenges/Budgetary_Constraints.webp',
        accent: '#059669',
    },
    {
        title: 'Global Presence',
        desc: 'Business is global; hiring outside the US is a low risk first step to international expansion.',
        img: '/Helping_Solve_Talent_Challenges/Global_Presence.webp',
        accent: '#F5A023',
    },
];

const ChallengeCard = ({ card, index, hoveredIdx, setHoveredIdx }) => {
    const isHovered = hoveredIdx === index;

    return (
        <motion.div
            className="group relative overflow-hidden cursor-pointer"
            style={{
                background: '#ffffff',
                border: `2px solid ${isHovered ? card.accent : '#ede9de'}`,
                borderRadius: '20px',
                minHeight: isHovered ? '380px' : '200px',
                transition: 'min-height 0.5s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: isHovered ? `0 16px 48px ${card.accent}22` : '0 2px 12px rgba(0,0,0,0.05)',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.8, ease: EASE, delay: (index % 3) * 0.12 }}
            onMouseEnter={() => setHoveredIdx(index)}
            onMouseLeave={() => setHoveredIdx(null)}
        >
            {/* Image: slides down from top on hover */}
            <div
                className="overflow-hidden transition-all duration-500 ease-out"
                style={{ maxHeight: isHovered ? '180px' : '0px', opacity: isHovered ? 1 : 0 }}
            >
                <img src={card.img} alt={card.title}
                    className="w-full h-[175px] object-cover transition-transform duration-700 group-hover:scale-105" />
                {/* Gradient over image */}
                <div className="absolute top-0 left-0 right-0 h-[175px]"
                    style={{ background: `linear-gradient(to bottom, ${card.accent}10, transparent)` }} />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
                {/* Number + accent bar */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ background: card.accent }}>
                        {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${card.accent}40, transparent)` }} />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-gray-900 text-base mb-2 leading-snug">
                    {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                    {card.desc}
                </p>

                {/* Arrow on hover */}
                <div
                    className="mt-3 flex items-center gap-1 text-xs font-bold transition-all duration-300"
                    style={{
                        color: card.accent,
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'translateY(0)' : 'translateY(6px)',
                    }}
                >
                    Learn more →
                </div>
            </div>
        </motion.div>
    );
};

const TalentChallenges = () => {
    const [hoveredIdx, setHoveredIdx] = useState(null);

    return (
        <section id="challenges" className="py-24 relative overflow-hidden" style={{ background: '#fffbec' }}>

            {/* ── Decorative background shapes ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Large quarter-circles */}
                <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border-[3px] border-[#F5A023]/08" />
                <div className="absolute -top-12 -right-12 w-[350px] h-[350px] rounded-full border-2 border-[#F5A023]/10" />
                <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full border-[3px] border-[#2D6A27]/06" />
                <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full border-2 border-[#2D6A27]/08" />

                {/* Dot pattern */}
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(245,160,35,0.05) 1.5px, transparent 1.5px)',
                        backgroundSize: '30px 30px',
                    }}
                />

                {/* Floating geometric shapes */}
                <motion.div className="absolute top-[15%] left-[8%] w-16 h-16 rounded-2xl border-2 border-[#F5A023]/15"
                    animate={{ rotate: [0, 90, 180, 270, 360], y: [0, -15, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} />

                <motion.div className="absolute top-[25%] right-[6%] w-10 h-10 rounded-lg border-2 border-[#2D6A27]/20"
                    animate={{ rotate: [45, 135, 225, 315, 405], y: [0, 12, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'linear' }} />

                <motion.div className="absolute bottom-[20%] right-[10%] w-14 h-14 rounded-full border-2 border-[#F5A023]/12"
                    animate={{ scale: [1, 1.15, 1], y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />

                <motion.div className="absolute top-[60%] left-[5%] w-8 h-8 rotate-45 border-2 border-[#F5A023]/20"
                    animate={{ rotate: [45, 135, 225, 315, 405] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} />

                {/* Horizontal gradient lines */}
                <div className="absolute top-[22%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A023]/12 to-transparent" />
                <div className="absolute top-[55%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2D6A27]/10 to-transparent" />
                <div className="absolute top-[80%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A023]/10 to-transparent" />

                {/* Corner accent blobs */}
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#F5A023]/04 rounded-full blur-[60px]" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#2D6A27]/04 rounded-full blur-[60px]" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D6A27]/10 border border-[#2D6A27]/20 text-[#2D6A27] text-xs font-bold tracking-wide uppercase mb-4"
                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8 }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A27] animate-pulse" />
                        Talent Solutions
                    </motion.span>

                    <motion.h2
                        className="font-display font-bold text-gray-900 mb-4 leading-tight"
                        style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.12 }}
                    >
                        Helping Solve <span className="text-[#F5A023]">Talent Challenges</span>
                    </motion.h2>

                    <motion.p
                        className="text-gray-500 max-w-2xl mx-auto text-[0.95rem] leading-relaxed"
                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.22 }}
                    >
                        From compliance to cost, Dhosti provides targeted staffing solutions
                        for every talent challenge your business faces.
                    </motion.p>
                </div>

                {/* 3-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {CARDS.map((card, i) => (
                        <ChallengeCard
                            key={card.title}
                            card={card}
                            index={i}
                            hoveredIdx={hoveredIdx}
                            setHoveredIdx={setHoveredIdx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TalentChallenges;
