import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CloudCog, Route, ServerCog, ShieldCheck, CheckCircle } from 'lucide-react';

const serviceCategories = [
    {
        name: 'Cloud Deployment & Architecture',
        icon: CloudCog,
        bullets: [
            'AWS & Azure infrastructure setup',
            'Hybrid & multi-cloud strategy',
            'Kubernetes & container orchestration',
            'Serverless computing (AWS Lambda, Azure Functions)',
        ],
        iconColor: 'text-blue-600',
        image: '/Cloud_Solutions_Page/services/cloud_architecture.webp',
    },
    {
        name: 'Cloud Migration Services',
        icon: Route,
        bullets: [
            'Lift-and-shift & refactoring strategies',
            'Database migration (SQL, NoSQL, Oracle to cloud)',
            'Application re-platforming & modernization',
            'Post-migration optimization',
        ],
        iconColor: 'text-cyan-600',
        image: '/Cloud_Solutions_Page/services/cloud_migration_services.webp',
    },
    {
        name: 'Cloud Management & DevOps',
        icon: ServerCog,
        bullets: [
            '24/7 monitoring & incident response',
            'Cost governance & FinOps optimization',
            'CI/CD pipeline automation',
            'Infrastructure as Code (Terraform, CloudFormation)',
        ],
        iconColor: 'text-blue-600',
        image: '/Cloud_Solutions_Page/services/cloud_management _&_devOps.webp',
    },
    {
        name: 'Security & Compliance',
        icon: ShieldCheck,
        bullets: [
            'Identity & Access Management (IAM)',
            'Data encryption & threat detection',
            'Compliance audits & remediation',
            'Disaster recovery & backup solutions',
        ],
        iconColor: 'text-cyan-600',
        image: '/Cloud_Solutions_Page/services/Security_&_Compliance.webp',
    },
];

const ServicesSection = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section id="services-section" className="py-20 md:py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #f1f5f9 0%, #e0f2fe 100%)' }}>
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)',
                    backgroundSize: '56px 56px',
                }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div className="text-center mb-14"
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <span className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Our Services</span>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900" style={{ letterSpacing: '-0.02em' }}>
                        Our Cloud{' '}
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #2563eb, #0891b2)' }}>
                            Services
                        </span>
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-7 max-w-5xl mx-auto">
                    {serviceCategories.map((service, i) => {
                        const Icon = service.icon;
                        const isHovered = hovered === i;
                        const isOther = hovered !== null && !isHovered;

                        return (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
                                className={`bg-white rounded-2xl shadow-md border overflow-hidden transition-all duration-300 cursor-pointer
                                    ${isHovered ? 'border-blue-400 shadow-2xl scale-[1.02] z-10' : 'border-gray-100'}
                                    ${isOther ? 'opacity-60 blur-[1px]' : ''}`}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}>
                                <div className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} min-h-[270px]`}>
                                    {/* Image */}
                                    <div className="lg:w-5/12 overflow-hidden bg-gray-50">
                                        <img src={service.image} alt={service.name}
                                            className="w-full h-56 lg:h-full object-cover"
                                            style={{ transform: isHovered ? 'scale(1.07)' : 'scale(1)', transition: 'transform 0.5s ease' }} />
                                    </div>
                                    {/* Content */}
                                    <div className="lg:w-7/12 p-7 md:p-9 flex flex-col justify-center bg-white">
                                        <div className="flex items-start gap-4 mb-5">
                                            <div className={`w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center shadow-sm transition-colors duration-300 ${isHovered ? 'bg-blue-50' : 'bg-gray-50'}`}>
                                                <Icon className={`w-6 h-6 ${service.iconColor}`} strokeWidth={2} />
                                            </div>
                                            <h3 className={`text-xl font-bold leading-tight transition-colors duration-300 pt-1.5 ${isHovered ? 'text-blue-600' : 'text-gray-800'}`}>
                                                {service.name}
                                            </h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {service.bullets.map((b, j) => (
                                                <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                                                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className={`mt-6 h-0.5 transition-all duration-500 rounded-full ${isHovered ? 'w-full' : 'w-0'}`}
                                            style={{ background: 'linear-gradient(90deg, #2563eb, #0891b2)' }} />
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
