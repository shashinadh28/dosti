import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import DottedMap from 'dotted-map';

/**
 * GlobalConnect — "Connecting Global Businesses To India's Educated & Motivated Talent"
 * Dotted world map with animated connection arcs from global cities to India
 */

const EASE = [0.22, 1, 0.36, 1];

const CONNECTION_DOTS = [
    { start: { lat: 40.712, lng: -74.006 }, end: { lat: 13.083, lng: 80.271 } },   // New York → Chennai
    { start: { lat: 51.508, lng: -0.128 }, end: { lat: 12.972, lng: 77.595 } },   // London → Bangalore
    { start: { lat: 48.857, lng: 2.352 }, end: { lat: 17.385, lng: 78.487 } },   // Paris → Hyderabad
    { start: { lat: 25.204, lng: 55.270 }, end: { lat: 9.931, lng: 76.267 } },   // Dubai → Kochi
    { start: { lat: 35.689, lng: 139.692 }, end: { lat: 8.524, lng: 76.936 } },   // Tokyo → Trivandrum
    { start: { lat: -33.869, lng: 151.209 }, end: { lat: 11.017, lng: 76.956 } },  // Sydney → Coimbatore
];

const LINE_COLOR = '#F5A023';

function projectPoint(lat, lng) {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
}

function createCurvedPath(start, end) {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
}

const GlobalConnect = () => {
    const containerRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    const { svgMap, projectedDots } = useMemo(() => {
        const map = new DottedMap({ height: 100, grid: 'diagonal' });
        const svgMapData = map.getSVG({
            radius: 0.22,
            color: '#FFFFFF40',
            shape: 'circle',
            backgroundColor: '#233824',
        });

        const projected = CONNECTION_DOTS.map(dot => ({
            start: projectPoint(dot.start.lat, dot.start.lng),
            end: projectPoint(dot.end.lat, dot.end.lng),
        }));

        return { svgMap: svgMapData, projectedDots: projected };
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setIsInView(true); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section id="global-connect" className="py-20 overflow-hidden" style={{ backgroundColor: '#233824' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5A023]/15 border border-[#F5A023]/30 text-[#F5A023] text-xs font-bold tracking-wide uppercase mb-4"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5A023] animate-pulse" />
                        Global Reach
                    </motion.span>

                    <motion.h2
                        className="font-display font-bold text-white leading-tight mb-4"
                        style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.12 }}
                    >
                        Connecting Global Businesses To India's{' '}
                        <span className="text-[#F5A023]">Educated & Motivated Talent</span>
                    </motion.h2>

                    <motion.p
                        className="text-white/50 max-w-2xl mx-auto text-sm leading-relaxed"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.22 }}
                    >
                        Our extensive network spans across continents, bridging the gap between
                        international businesses and India's world-class talent pool.
                    </motion.p>
                </div>

                {/* World Map */}
                <motion.div
                    ref={containerRef}
                    className="w-full rounded-2xl overflow-hidden relative"
                    style={{ aspectRatio: '2/1', backgroundColor: '#233824' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.25 }}
                >
                    <img
                        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                        className="h-full w-full pointer-events-none select-none"
                        style={{
                            maskImage: 'linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)',
                        }}
                        alt="world map"
                        draggable={false}
                    />

                    <svg
                        viewBox="0 0 800 400"
                        className="w-full h-full absolute inset-0 pointer-events-none select-none"
                    >
                        <defs>
                            <linearGradient id="path-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="10%" stopColor={LINE_COLOR} />
                                <stop offset="90%" stopColor={LINE_COLOR} />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>

                        {projectedDots.map((dot, i) => (
                            <g key={i}>
                                {/* Curved connection path */}
                                <motion.path
                                    d={createCurvedPath(dot.start, dot.end)}
                                    fill="none"
                                    stroke="url(#path-grad)"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                    transition={{ duration: 1.6, delay: i * 0.2, ease: 'easeOut' }}
                                />
                                {/* Start dot */}
                                <motion.circle
                                    cx={dot.start.x} cy={dot.start.y} r="4"
                                    fill={LINE_COLOR} stroke="white" strokeWidth="2"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                />
                                {/* End dot (India) — with pulse */}
                                <motion.g
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                                >
                                    <circle cx={dot.end.x} cy={dot.end.y} r="5" fill="#F5A023" stroke="white" strokeWidth="2" />
                                    {isInView && (
                                        <circle cx={dot.end.x} cy={dot.end.y} r="5" fill="none" stroke="#F5A023" strokeWidth="2" opacity="0.5">
                                            <animate attributeName="r" values="5;14;5" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                                            <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                                        </circle>
                                    )}
                                </motion.g>
                            </g>
                        ))}
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};

export default GlobalConnect;
