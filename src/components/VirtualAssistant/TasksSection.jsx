import React from 'react';
import { motion } from 'framer-motion';

const tasks = [
    { id: 1, title: 'Calendar management', description: 'Prioritize high-impact meetings and protect your time so you\'re focused on what moves the needle in a resource-constrained environment.' },
    { id: 2, title: 'Inbox management', description: 'Triage and organize emails to ensure critical opportunities aren\'t missed and you\'re not constantly task-switching when clarity matters most.' },
    { id: 3, title: 'Meeting prep and follow-up', description: 'Maximize the value of every meeting by arriving prepared and capturing action items—so nothing gets lost.' },
    { id: 4, title: 'Travel coordination', description: 'Book efficient, budget-conscious travel that supports business-critical trips and relationship building.' },
    { id: 5, title: 'Competitive and market intelligence', description: 'Monitor competitor shifts, gather client feedback, and track industry changes so leadership can quickly pivot.' },
    { id: 6, title: 'Recession-specific strategy support', description: 'Assist with gathering internal and external insights to shape your response plan and identify new opportunities.' },
    { id: 7, title: 'Process documentation', description: 'Build up SOPs to make operations more efficient, reduce training time, and protect against disruptions.' },
    { id: 8, title: 'Expense Tracking', description: 'Track budget details and flag unnecessary or redundant costs—helping everyone save and avoid death by a thousand cuts.' },
    { id: 9, title: 'Cold email outreach', description: 'Support relationship generation with targeted, personalized email outreach—creating new revenue opportunities.' },
    { id: 10, title: 'Research and vendor support', description: 'Source budget-friendly vendors and summarize relevant market data to accelerate smarter decisions.' },
    { id: 11, title: 'Project coordination', description: 'Keep cross-functional initiatives on track and within budget as business priorities shift.' },
    { id: 12, title: 'Relationship management', description: 'Maintain clean CRM records and proactively schedule check-ins to strengthen client relationships.' },
    { id: 13, title: 'File and document organization', description: 'Keep files efficiently organized across digital systems so teams can access what they need—fast.' },
    { id: 14, title: 'Light bookkeeping support', description: 'Help compile and generate simple reports that give leadership quick visibility into spend patterns.' },
    { id: 15, title: 'Task tracking and reminders', description: 'Prevent details from slipping through the cracks—especially when teams are juggling more with less.' },
    { id: 16, title: 'Gift or appreciation coordination', description: 'Support morale and relationship building in cost-conscious ways, fulfilling loyalty among clients.' },
    { id: 17, title: 'Internal dashboard updates', description: 'Keep KPIs and financial snapshots current so leaders can see at a glance how it\'s working.' },
    { id: 18, title: 'Software/tool vetting', description: 'Audit current tools and compare alternatives to eliminate redundancy and boost team efficiency.' },
    { id: 19, title: 'Social Media Scheduling', description: 'Maintain a consistent online presence that supports visibility—without needing paid campaigns.' },
    { id: 20, title: 'Team Communication Support', description: 'Help distribute updates, share important messages, and keep team aligned even when moving fast.' },
    { id: 21, title: 'Document editing and proofreading', description: 'Polish internal and external communications so your messaging stays sharp and credible when it matters.' },
];

const TasksSection = () => (
    <section className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #134e4a 50%, #0f172a 100%)' }}>
        {/* Blurred orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'rgba(20,184,166,0.09)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'rgba(6,182,212,0.09)', filter: 'blur(80px)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'rgba(16,185,129,0.06)', filter: 'blur(60px)' }} />

        <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-14 relative z-10">
            {/* Header */}
            <motion.div className="text-center mb-14"
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <span className="inline-block text-teal-900 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-5"
                    style={{ background: 'linear-gradient(135deg, #5eead4, #67e8f9)' }}>Delegate Today</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
                    Essential Tasks You Can Delegate
                    <br />
                    <span className="text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(90deg, #5eead4, #67e8f9)' }}>
                        to Virtual Assistants
                    </span>
                </h2>
                <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
                    Delegation is one of the most effective tools in a leader's toolbox. Here are 21 commonly delegated tasks you can hand over today!
                </p>
                {/* Key benefits strip */}
                <div className="inline-flex flex-wrap gap-8 px-8 py-4 rounded-2xl border border-white/10 backdrop-blur-sm"
                    style={{ background: 'rgba(255,255,255,0.05)' }}>
                    {[
                        { color: '#14b8a6', label: 'Save Time' },
                        { color: '#22c55e', label: 'Cut Costs' },
                        { color: '#60a5fa', label: 'Increase Efficiency' },
                    ].map(b => (
                        <div key={b.label} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: b.color }} />
                            <span className="text-white font-semibold text-sm">{b.label}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {tasks.map((task, i) => (
                    <motion.div key={task.id}
                        className="group relative rounded-xl border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-default"
                        style={{ background: 'rgba(255,255,255,0.05)' }}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.5) }}
                        whileHover={{ background: 'rgba(255,255,255,0.10)', borderColor: 'rgba(94,234,212,0.4)' }}>
                        <div className="p-6">
                            <div className="flex items-start gap-4 mb-3">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-teal-900"
                                    style={{ background: 'linear-gradient(135deg, #5eead4, #67e8f9)' }}>{task.id}</div>
                                <h3 className="text-white font-bold text-lg leading-snug group-hover:text-teal-300 transition-colors">{task.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{task.description}</p>
                        </div>
                        <div className="h-0.5 w-0 group-hover:w-full transition-all duration-400 rounded-full"
                            style={{ background: 'linear-gradient(90deg, #14b8a6, #06b6d4)' }} />
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <motion.div className="text-center mt-16"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-5">Ready to Delegate and Focus on What Matters Most?</h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">Let our skilled virtual assistants handle these 21 critical tasks so you can focus on growing your business.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a href="https://calendly.com/deepak-teja/introduction" target="_blank" rel="noopener noreferrer"
                        className="font-bold py-4 px-9 rounded-xl text-lg text-teal-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        style={{ background: 'linear-gradient(135deg, #5eead4, #67e8f9)', boxShadow: '0 4px 24px rgba(20,184,166,0.4)' }}
                        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        Get Started Today
                    </motion.a>
                    <motion.a href="#services-section"
                        className="font-bold py-4 px-9 rounded-xl text-lg text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                        whileHover={{ scale: 1.04 }}>
                        Learn More About Our Services
                    </motion.a>
                </div>
            </motion.div>
        </div>
    </section>
);

export default TasksSection;
