import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ServicesSection — stacking scroll cards (adapted from Next.js version)
 * Pure React + framer-motion, no lenis, no Next.js imports
 * Images from /Service_Images/
 */

const SERVICES = [
    {
        title: 'IT Outsourcing',
        description: [
            'Scalable Teams for Web & Mobile Development',
            'Empower your digital growth with agile, cross-functional teams tailored to your project needs.',
            'We deliver high-quality, scalable solutions that accelerate time-to-market and drive business impact.',
        ],
        src: '/Service_Images/outsourcing.webp',
        color: '#1a3a5c',
        accent: '#5196fd',
    },
    {
        title: 'Healthcare BPO',
        description: [
            'End-to-End Medical Billing & Telehealth Support',
            'Streamline your revenue cycle with accurate billing and seamless virtual care services.',
        ],
        src: '/Service_Images/medicall.webp',
        color: '#2a1a4a',
        accent: '#8f89ff',
    },
    {
        title: 'US Taxation',
        description: [
            'Accurate Accounting & Compliance for Firms and CPAs',
            'Ensure financial precision and regulatory adherence with our expert-led services.',
            'We help streamline bookkeeping, reporting, and tax workflows for maximum efficiency.',
        ],
        src: '/Service_Images/tax.webp',
        color: '#0e1f3a',
        accent: '#5196fd',
    },
    {
        title: 'Cloud Solutions',
        description: [
            'AWS/Azure Deployment, Migration & Management',
            'Seamlessly deploy, scale, and manage applications across leading cloud platforms.',
            'Our experts ensure secure migration, cost optimization, and high availability for your infrastructure.',
        ],
        src: '/Service_Images/cloud.webp',
        color: '#2a1030',
        accent: '#ed649e',
    },
    {
        title: 'SaaS Experts',
        description: [
            'Salesforce, Shopify & HubSpot Integration & Optimization',
            'Unify your CRM, e-commerce, and marketing platforms for seamless operations.',
            'We tailor integrations to boost productivity, enhance customer experience, and drive revenue growth.',
        ],
        src: '/Service_Images/saas.webp',
        color: '#2a1200',
        accent: '#fd521a',
    },
    {
        title: 'AI Solutions',
        description: [
            'Custom LLMs, Automation & Data Intelligence',
            'Build tailored AI solutions to streamline workflows and uncover deep insights.',
            'Leverage the power of automation and large language models to drive smart, data-led decisions.',
        ],
        src: '/Service_Images/artificial.webp',
        color: '#00251e',
        accent: '#00c4a7',
    },
    {
        title: 'Virtual Assistant',
        description: [
            'Professional Administrative & Operational Support',
            'Delegate routine tasks and focus on strategic growth.',
            'Our skilled assistants handle scheduling, research, communication, and project coordination with precision.',
        ],
        src: '/Service_Images/virtual-assestent-main.webp',
        color: '#1e0a2e',
        accent: '#9b59b6',
    },
];

/* ── Single stacking card ── */
const ServiceCard = ({ service, i, total, scrollYProgress }) => {
    const cardRef = useRef(null);

    // Each card contributes 1/total of the scroll range to "stick"
    const rangeStart = i / total;
    const rangeEnd = (i + 1) / total;

    // Card scales down as subsequent cards stack on top
    const targetScale = 1 - (total - i) * 0.04;
    const scale = useTransform(scrollYProgress, [rangeStart, 1], [1, targetScale]);

    // Image parallax within its own card
    const { scrollYProgress: cardScroll } = useScroll({
        target: cardRef,
        offset: ['start end', 'start start'],
    });
    const imageScale = useTransform(cardScroll, [0, 1], [1.25, 1]);

    return (
        <div
            ref={cardRef}
            className="service-sticky-card"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky', top: 0 }}
        >
            <style>{`
                .service-sticky-card {
                    height: 100svh;
                }
                @media (max-width: 640px) {
                    .service-sticky-card { height: auto; min-height: 100svh; padding: 20px 0; }
                    .service-card-inner {
                        flex-direction: column !important;
                        min-height: unset !important;
                        padding: 28px 20px !important;
                        width: 95% !important;
                    }
                    .service-card-left { flex: unset !important; width: 100% !important; }
                    .service-card-right { min-height: 180px !important; width: 100% !important; flex: unset !important; margin-top: 16px; }
                }
                @media (min-width: 641px) and (max-width: 900px) {
                    .service-card-inner {
                        width: 95% !important;
                        min-height: 420px !important;
                        padding: 32px 28px !important;
                    }
                    .service-card-right { min-height: 220px !important; }
                }
            `}</style>
            <motion.div
                className="service-card-inner"
                style={{
                    scale,
                    top: `calc(-3vh + ${i * 22}px)`,
                    background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                    willChange: 'transform',
                    maxWidth: 1000,
                    width: '90%',
                    minHeight: 520,
                    borderRadius: 24,
                    padding: '40px 40px',
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: `0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)`,
                    borderTop: `2px solid ${service.accent}40`,
                }}
            >
                {/* Accent glow blob */}
                <div style={{
                    position: 'absolute', top: -60, right: -60, width: 220, height: 220,
                    borderRadius: '50%', background: service.accent, opacity: 0.08, filter: 'blur(60px)',
                    pointerEvents: 'none',
                }} />

                {/* Card number */}
                <div style={{
                    position: 'absolute', top: 24, right: 32,
                    fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase',
                }}>
                    {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3 style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                    fontWeight: 800, color: '#fff', marginBottom: 32,
                    textAlign: 'center', letterSpacing: '-0.02em',
                }}>
                    {service.title}
                    <span style={{ display: 'block', width: 40, height: 3, background: service.accent, borderRadius: 2, margin: '12px auto 0' }} />
                </h3>

                {/* Two-col layout */}
                <div style={{
                    display: 'flex', gap: 32, flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    {/* Left: bullets + CTA */}
                    <div className="service-card-left" style={{ flex: '0 0 38%', display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {service.description.map((point, j) => (
                                <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>
                                    <span style={{
                                        flexShrink: 0, width: 6, height: 6, borderRadius: '50%',
                                        background: service.accent, marginTop: 8,
                                    }} />
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: `0 6px 20px ${service.accent}60` }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                                marginTop: 20, width: 'fit-content',
                                padding: '11px 22px', borderRadius: 999,
                                background: '#fff', color: '#0f1623',
                                fontWeight: 700, fontSize: 14, border: 'none',
                                cursor: 'pointer', transition: 'background 0.2s',
                            }}
                        >
                            Learn More
                            <svg width="16" height="10" viewBox="0 0 22 12" fill="none">
                                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="currentColor" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Right: image */}
                    <div className="service-card-right" style={{ flex: 1, borderRadius: 16, overflow: 'hidden', position: 'relative', minHeight: 300 }}>
                        <motion.div style={{ scale: imageScale, width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
                            <img
                                src={service.src}
                                alt={service.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                onError={e => { e.currentTarget.style.background = service.accent + '40'; }}
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

/* ── Section wrapper ── */
const ServicesSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    return (
        <section id="services" ref={containerRef} style={{ background: '#fff' }}>

            {/* Header */}
            <div style={{
                minHeight: '40vh', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '60px 24px 40px', textAlign: 'center',
            }}>
                <motion.span
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '6px 18px', borderRadius: 999,
                        background: 'rgba(245,160,35,0.1)', border: '1px solid rgba(245,160,35,0.2)',
                        color: '#F5A023', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                        textTransform: 'uppercase', marginBottom: 20,
                    }}
                    initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.7 }}
                >
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F5A023' }} />
                    What We Offer
                </motion.span>

                <motion.h2
                    style={{
                        color: '#0f172a', fontWeight: 800, lineHeight: 1.1,
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        marginBottom: 16, letterSpacing: '-0.03em',
                    }}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.1 }}
                >
                    Our <span style={{ color: '#F5A023' }}>Services</span>
                </motion.h2>

                <motion.p
                    style={{ color: 'rgba(15,23,42,0.55)', fontSize: 16, maxWidth: 560, lineHeight: 1.7 }}
                    initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                >
                    We power global businesses with India's top talent — offering specialized outsourcing solutions across every domain.
                </motion.p>
            </div>

            {/* Stacking cards */}
            <div style={{ paddingBottom: 80 }}>
                {SERVICES.map((service, i) => (
                    <ServiceCard
                        key={service.title}
                        service={service}
                        i={i}
                        total={SERVICES.length}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>
        </section>
    );
};

export { SERVICES };
export default ServicesSection;
