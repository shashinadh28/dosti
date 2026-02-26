import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * TalentChallenges — enhanced with decorative bg elements
 * Alternating horizontal cards, blur-on-hover, #fffbec bg with patterns
 */

const EASE = [0.22, 1, 0.36, 1];

const CARDS = [
    {
        title: 'High Wages',
        desc: 'Employing global talent reduces overall salary expenses',
        points: ['Access talent at competitive global rates', 'Reduce overhead without sacrificing quality', 'Flexible pricing models for every budget', 'Save up to 60% on staffing costs'],
        img: '/Helping_Solve_Talent_Challenges/high_wages.webp',
        accent: '#F5A023',
    },
    {
        title: 'Talent Shortage',
        desc: 'Many IT skills are in high demand; Dhosti searches globally and finds available talent',
        points: ['Global network of pre-vetted professionals', 'Specialized recruitment for niche IT skills', 'Rapid sourcing from 25+ countries', 'Dedicated talent acquisition specialists'],
        img: '/Helping_Solve_Talent_Challenges/Talent_Shortage.webp',
        accent: '#2D6A27',
    },
    {
        title: 'Variable Staffing Needs',
        desc: 'When projects have fluctuating talent needs, staff augmentation is a good solution',
        points: ['Scale your team up or down instantly', 'No long-term hiring commitments required', 'Project-based staffing solutions', 'Seamless team integration process'],
        img: '/Helping_Solve_Talent_Challenges/Variable_Staffing_Needs.webp',
        accent: '#4F46E5',
    },
    {
        title: 'Compliance',
        desc: 'Labor laws and taxes vary widely; Dhosti keeps employers in full compliance',
        points: ['Full regulatory compliance management', 'Cross-border employment law expertise', 'Tax filing and documentation handled', 'Ongoing compliance monitoring & updates'],
        img: '/Helping_Solve_Talent_Challenges/Compliance.webp',
        accent: '#0891B2',
    },
    {
        title: 'Project Timelines',
        desc: 'Utilizing global talent extends work days to meet project deadlines',
        points: ['Follow-the-sun development model', '24/7 productivity across time zones', 'Rapid deployment within 48 hours', 'Dedicated project timeline management'],
        img: '/Helping_Solve_Talent_Challenges/Project_Timelines.webp',
        accent: '#DC2626',
    },
    {
        title: 'EOR',
        desc: 'As Employer Of Record, Dhosti takes care of employment regulations',
        points: ['Full employer of record services', 'Payroll, benefits & HR administration', 'Local employment contract management', 'Employee onboarding & offboarding'],
        img: '/Helping_Solve_Talent_Challenges/EOR.webp',
        accent: '#7C3AED',
    },
    {
        title: 'Budgetary Constraints',
        desc: "When work is piling up, but budgets don't allow permanent hires, Dhosti staff fills the gap",
        points: ['Cost-effective contract staffing', 'No recruitment agency fees', 'Pay only for productive hours', 'Transparent pricing with no hidden costs'],
        img: '/Helping_Solve_Talent_Challenges/Budgetary_Constraints.webp',
        accent: '#059669',
    },
    {
        title: 'Global Presence',
        desc: 'Business is global; hiring outside the US is a low risk first step to expansion',
        points: ['Establish presence in new markets', 'Local expertise in 25+ countries', 'Risk-free international hiring', 'Cultural compatibility assessment'],
        img: '/Helping_Solve_Talent_Challenges/Global_Presence.webp',
        accent: '#F5A023',
    },
];

const CardIcon = ({ accent, index }) => (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ background: accent }}>
        {String(index + 1).padStart(2, '0')}
    </div>
);

const ChallengeCard = ({ card, index, hoveredIdx, setHoveredIdx }) => {
    const isEven = index % 2 === 0;
    const isHovered = hoveredIdx === index;
    const someoneHovered = hoveredIdx !== null;
    const isBlurred = someoneHovered && !isHovered;

    return (
        <motion.div
            className="relative rounded-3xl overflow-hidden transition-all duration-500"
            style={{
                background: '#f7f7f5',
                filter: isBlurred ? 'blur(3px) brightness(0.92)' : 'none',
                transform: isBlurred ? 'scale(0.97)' : isHovered ? 'scale(1.01)' : 'scale(1)',
            }}
            initial={{ opacity: 0, x: isEven ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.05 }}
            onMouseEnter={() => setHoveredIdx(index)}
            onMouseLeave={() => setHoveredIdx(null)}
        >
            <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch min-h-[260px]`}>
                <div className="md:w-[45%] overflow-hidden">
                    <motion.img src={card.img} alt={card.title} className="w-full h-full object-cover min-h-[220px] md:min-h-full"
                        whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} />
                </div>
                <div className="md:w-[55%] p-6 md:p-8 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-3 mb-3">
                        <CardIcon accent={card.accent} index={index} />
                        <h3 className="font-display font-bold text-gray-900 text-lg md:text-xl">{card.title}</h3>
                    </div>
                    <ul className="space-y-2.5 mt-1 w-full">
                        {card.points.map((point, i) => (
                            <motion.li
                                key={i}
                                className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed justify-center md:justify-start"
                                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 + 0.2 }}
                            >
                                <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: card.accent }} />
                                {point}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
            <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none border-2 transition-opacity duration-300"
                style={{ borderColor: card.accent, opacity: isHovered ? 0.5 : 0 }}
            />
        </motion.div>
    );
};

const TalentChallenges = () => {
    const [hoveredIdx, setHoveredIdx] = useState(null);

    return (
        <section id="challenges" className="py-20 overflow-hidden relative" style={{ background: '#fffbec' }}>
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Large faded circles */}
                <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full border-2 border-[#F5A023]/10" />
                <div className="absolute -top-16 -right-16 w-[300px] h-[300px] rounded-full border border-[#2D6A27]/8" />
                <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full border-2 border-[#F5A023]/10" />
                {/* Dot pattern overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(245,160,35,0.04) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                    }}
                />
                {/* Diagonal accent lines */}
                <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A023]/10 to-transparent" />
                <div className="absolute top-[50%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2D6A27]/8 to-transparent" />
                <div className="absolute top-[80%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A023]/10 to-transparent" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-14">
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D6A27]/10 border border-[#2D6A27]/20 text-[#2D6A27] text-xs font-bold tracking-wide uppercase mb-4"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A27] animate-pulse" />
                        Talent Solutions
                    </motion.span>
                    <motion.h2
                        className="font-display font-bold text-gray-900 mb-4 leading-tight"
                        style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                    >
                        Helping Solve <span className="text-[#F5A023]">Talent Challenges</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-500 max-w-2xl mx-auto text-[0.95rem] leading-relaxed"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.16 }}
                    >
                        From compliance to cost, Dhosti provides targeted staffing solutions
                        for every talent challenge your business faces.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-8">
                    {CARDS.map((card, i) => (
                        <ChallengeCard key={card.title} card={card} index={i} hoveredIdx={hoveredIdx} setHoveredIdx={setHoveredIdx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TalentChallenges;
