import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const STATS = [
    { value: 12000, suffix: '+', label: 'Candidates Placed', icon: '👥' },
    { value: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐', isDecimal: false },
    { value: 25, suffix: '+', label: 'Countries Served', icon: '🌍' },
    { value: 15, suffix: '+', label: 'Years Experience', icon: '🏆' },
];

function useCountUp(target, triggered) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!triggered) return;
        let start = 0;
        const steps = 60;
        const inc = target / steps;
        let i = 0;
        const t = setInterval(() => {
            i++;
            start = Math.min(start + inc, target);
            setVal(Math.floor(start));
            if (i >= steps) clearInterval(t);
        }, 25);
        return () => clearInterval(t);
    }, [target, triggered]);
    return val;
}

const StatCard = ({ value, suffix, label, icon, triggered }) => {
    const count = useCountUp(value, triggered);
    return (
        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
            <span className="text-3xl mb-3">{icon}</span>
            <div className="font-display font-black text-white text-4xl mb-1">
                {count.toLocaleString()}<span className="text-[#F5A023]">{suffix}</span>
            </div>
            <p className="text-white/60 text-sm font-medium">{label}</p>
        </div>
    );
};

const Stats = () => {
    const ref = useRef(null);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTriggered(true); }, { threshold: 0.4 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section id="about" className="py-24 bg-[#233824] relative overflow-hidden" ref={ref}>
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <motion.h2
                        className="font-display font-black text-white mb-3"
                        style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                    >
                        Our Impact in <span className="text-[#F5A023]">Numbers</span>
                    </motion.h2>
                    <motion.p className="text-white/60 max-w-md mx-auto"
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                        A decade of excellence in global workforce solutions.
                    </motion.p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {STATS.map((s, i) => (
                        <motion.div key={s.label}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <StatCard {...s} triggered={triggered} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
