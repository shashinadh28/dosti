import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, BarChart3, Settings, CheckCircle } from 'lucide-react';

const services = [
    {
        title: 'Custom LLM Development & Fine-Tuning',
        icon: Brain,
        image: '/AI_Solutions_Page/services/Custom-LLM-Development-&-Fine-Tuning.webp',
        accentColor: '#7c3aed',
        bullets: [
            'Domain-specific LLMs for your industry',
            'Fine-tuning OpenAI, Llama 2, Claude & proprietary models',
            'Retrieval-Augmented Generation (RAG) systems',
            'AI chatbots & virtual assistants',
        ],
    },
    {
        title: 'Intelligent Process Automation',
        icon: Zap,
        image: '/AI_Solutions_Page/services/Intelligent-Process-Automation.webp',
        accentColor: '#db2777',
        bullets: [
            'AI-powered workflow automation',
            'Document processing & data extraction (IDP)',
            'Predictive maintenance & anomaly detection',
            'Robotic Process Automation (RPA) integration',
        ],
    },
    {
        title: 'Data Intelligence & Predictive Analytics',
        icon: BarChart3,
        image: '/AI_Solutions_Page/services/Data-Intelligence-&-Predictive-Analytics.webp',
        accentColor: '#7c3aed',
        bullets: [
            'Advanced data modeling & forecasting',
            'Customer behavior & sentiment analysis',
            'Real-time business intelligence dashboards',
            'Recommendation engines & personalization',
        ],
    },
    {
        title: 'AI Integration & Optimization',
        icon: Settings,
        image: '/AI_Solutions_Page/services/AI-Integration-&-Optimization.webp',
        accentColor: '#db2777',
        bullets: [
            'API integrations with existing enterprise systems',
            'AI performance monitoring & continuous learning',
            'Responsible AI governance & compliance',
            'Staff training & change management',
        ],
    },
];

const ServicesSection = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section id="ai-services" className="py-20 md:py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #f3f4f6 0%, #fdf4ff 100%)' }}>
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px)',
                    backgroundSize: '56px 56px',
                }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div className="text-center mb-14"
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <span className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4"
                        style={{ background: '#7c3aed' }}>Our Services</span>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900" style={{ letterSpacing: '-0.02em' }}>
                        Our AI & Data Intelligence{' '}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text"
                                style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed, #db2777)' }}>Services</span>
                            <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                                style={{ background: 'linear-gradient(90deg, #7c3aed, #db2777)', opacity: 0.4 }} />
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg mt-5 leading-relaxed">
                        Our AI specialists combine cutting-edge technology and innovative strategies to guide you towards intelligent business solutions.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-7 max-w-5xl mx-auto">
                    {services.map((svc, i) => {
                        const Icon = svc.icon;
                        const isHov = hovered === i;
                        const isOther = hovered !== null && !isHov;
                        return (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
                                className={`bg-white rounded-2xl shadow-md border overflow-hidden cursor-pointer transition-all duration-300
                                    ${isHov ? 'shadow-2xl scale-[1.02] z-10' : 'border-gray-100'}
                                    ${isOther ? 'opacity-60 blur-[1px]' : ''}`}
                                style={{ borderColor: isHov ? svc.accentColor : '' }}
                                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                                <div className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} min-h-[270px]`}>
                                    <div className="lg:w-5/12 overflow-hidden bg-gray-50">
                                        <img src={svc.image} alt={svc.title}
                                            className="w-full h-56 lg:h-full object-cover transition-transform duration-500"
                                            style={{ transform: isHov ? 'scale(1.08)' : 'scale(1)' }} />
                                    </div>
                                    <div className="lg:w-7/12 p-7 md:p-9 flex flex-col justify-center bg-white">
                                        <div className="flex items-start gap-4 mb-5">
                                            <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center shadow-sm transition-all duration-300"
                                                style={{ background: isHov ? `${svc.accentColor}15` : '#f9fafb', border: `1px solid ${isHov ? svc.accentColor : '#e5e7eb'}` }}>
                                                <Icon size={22} style={{ color: svc.accentColor }} strokeWidth={2} />
                                            </div>
                                            <h3 className="text-xl font-bold pt-1.5 leading-tight transition-colors duration-300"
                                                style={{ color: isHov ? svc.accentColor : '#1f2937' }}>{svc.title}</h3>
                                        </div>
                                        <ul className="space-y-2.5">
                                            {svc.bullets.map((b, j) => (
                                                <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                                                    <CheckCircle size={14} style={{ color: svc.accentColor, flexShrink: 0, marginTop: 2 }} />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-6 h-0.5 rounded-full transition-all duration-500"
                                            style={{
                                                background: `linear-gradient(90deg, ${svc.accentColor}, #7c3aed)`,
                                                width: isHov ? '100%' : '0%',
                                            }} />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
