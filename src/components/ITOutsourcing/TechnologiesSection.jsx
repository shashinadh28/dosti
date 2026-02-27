import React, { useState } from 'react';
import { motion } from 'framer-motion';

const technologiesData = [
    { name: 'Angular', svgPath: '/SVG/angular.svg', category: 'Frontend' },
    { name: 'React', svgPath: '/SVG/react.svg', category: 'Frontend' },
    { name: 'Node.js', svgPath: '/SVG/nodejs.svg', category: 'Backend' },
    { name: 'Laravel', svgPath: '/SVG/laravel.svg', category: 'Backend' },
    { name: 'Python', svgPath: '/SVG/pythonn.svg', category: 'Backend' },
    { name: 'Flutter', svgPath: '/SVG/flutter.svg', category: 'Mobile' },
    { name: 'Electron', svgPath: '/SVG/electron.svg', category: 'Desktop' },
    { name: 'iOS/Swift', svgPath: '/SVG/swift.svg', category: 'Mobile' },
    { name: 'MongoDB', svgPath: '/SVG/mongodb.svg', category: 'Database' },
    { name: 'MySQL', svgPath: '/SVG/mysql.svg', category: 'Database' },
    { name: 'PostgreSQL', svgPath: '/SVG/postgresql.svg', category: 'Database' },
    { name: 'DigitalOcean', svgPath: '/SVG/digitalocean.svg', category: 'Cloud' },
    { name: 'Azure', svgPath: '/SVG/azure.svg', category: 'Cloud' },
    { name: 'AWS', svgPath: '/SVG/aws.svg', category: 'Cloud' },
    { name: 'Strapi', svgPath: '/SVG/strapi.svg', category: 'CMS' },
    { name: 'Other', svgPath: '/SVG/other.svg', category: 'More' },
];

const categories = ['All', ...new Set(technologiesData.map(t => t.category))];

const TechnologiesSection = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [hoveredTech, setHoveredTech] = useState(null);

    const filtered = activeCategory === 'All'
        ? technologiesData
        : technologiesData.filter(t => t.category === activeCategory);

    return (
        <section className="py-20 md:py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f0f9ff 100%)' }}>
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 10% 50%, rgba(0,166,244,0.05) 0%, transparent 40%), radial-gradient(circle at 90% 50%, rgba(30,41,57,0.04) 0%, transparent 40%)',
                }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                        style={{ background: 'rgba(0,166,244,0.1)', border: '1px solid rgba(0,166,244,0.2)' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                        <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">Tech Stack</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
                        Technologies We{' '}
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00A6F4, #2563eb)' }}>
                            Work With
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Our developers are experts in modern, battle-tested tech stacks across every domain.
                    </p>
                </motion.div>

                {/* Category filters */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                            style={{
                                background: activeCategory === cat ? 'linear-gradient(135deg, #00A6F4, #0284c7)' : 'white',
                                color: activeCategory === cat ? 'white' : '#64748b',
                                border: activeCategory === cat ? '1px solid transparent' : '1px solid #e2e8f0',
                                boxShadow: activeCategory === cat ? '0 4px 16px rgba(0,166,244,0.3)' : '0 1px 4px rgba(0,0,0,0.06)',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Tech grid */}
                <motion.div
                    key={activeCategory}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    {filtered.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.85, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.04 }}
                            whileHover={{ y: -6, scale: 1.04 }}
                            onMouseEnter={() => setHoveredTech(tech.name)}
                            onMouseLeave={() => setHoveredTech(null)}
                            className="flex flex-col items-center justify-center p-5 rounded-2xl cursor-pointer relative overflow-hidden group transition-all duration-300"
                            style={{
                                background: hoveredTech === tech.name ? 'white' : 'white',
                                border: hoveredTech === tech.name ? '1px solid rgba(0,166,244,0.3)' : '1px solid #e5e7eb',
                                boxShadow: hoveredTech === tech.name
                                    ? '0 16px 40px rgba(0,166,244,0.15), 0 4px 12px rgba(0,0,0,0.05)'
                                    : '0 2px 8px rgba(0,0,0,0.04)',
                            }}
                        >
                            {/* Category badge on hover */}
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                                    style={{ background: 'rgba(0,166,244,0.1)', color: '#0284c7' }}>
                                    {tech.category}
                                </span>
                            </div>

                            <div className="relative w-14 h-14 mb-3 flex items-center justify-center">
                                <img
                                    src={tech.svgPath}
                                    alt={`${tech.name} logo`}
                                    className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="hidden w-12 h-12 items-center justify-center rounded-xl text-2xl"
                                    style={{ background: 'rgba(0,166,244,0.1)' }}>
                                    ⚙️
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-center transition-colors duration-300"
                                style={{ color: hoveredTech === tech.name ? '#0284c7' : '#374151' }}>
                                {tech.name}
                            </p>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-400 rounded-full"
                                style={{ background: 'linear-gradient(90deg, #00A6F4, #2563eb)' }} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechnologiesSection;
