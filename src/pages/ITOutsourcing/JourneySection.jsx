import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, Sparkles, Users, Rocket, Search } from 'lucide-react';

const journeyStepsData = [
    {
        id: 1,
        title: "Discovery Phase",
        subtitle: "Strategic Foundation",
        description: "We begin with a comprehensive analysis of your project requirements, conducting stakeholder interviews and technical assessments to identify the optimal technology stack and talent architecture for your success.",
        icon: Search,
        themeColor: "lightblue",
        position: "right",
    },
    {
        id: 2,
        title: "Talent Matching",
        subtitle: "Precision Curation",
        description: "Our senior consultants leverage advanced matching algorithms and cultural fit assessments to curate elite developers. We conduct rigorous technical interviews and handle all legal documentation seamlessly.",
        icon: Users,
        themeColor: "dark",
        position: "left",
    },
    {
        id: 3,
        title: "Build Your Dream Team",
        subtitle: "Excellence Assembly",
        description: "Select from our thoroughly vetted talent pool of top-tier professionals. We ensure comprehensive onboarding, premium tooling, and seamless integration with your existing workflows and systems.",
        icon: Sparkles,
        themeColor: "lightblue",
        position: "right",
    },
    {
        id: 4,
        title: "Launch & Thrive",
        subtitle: "Sustained Excellence",
        description: "Your premium development team accelerates from day one while our dedicated success managers handle operations, provide strategic insights, and deliver comprehensive performance analytics.",
        icon: Rocket,
        themeColor: "dark",
        position: "left",
    },
];

const getThemeColors = (themeName, isActive, isCompleted) => {
    const isOn = isActive || isCompleted;
    if (themeName === 'dark') {
        return {
            bg: isOn ? '#1E2939' : '#ffffff',
            border: isOn ? '#374151' : '#e5e7eb',
            text: isOn ? '#ffffff' : '#1f2937',
            subtitle: isOn ? '#9ca3af' : '#6b7280',
            desc: isOn ? '#e5e7eb' : '#6b7280',
            iconBg: isOn ? '#374151' : '#f3f4f6',
            iconColor: isOn ? '#ffffff' : '#374151',
            accentBg: '#1E2939',
        };
    }
    return {
        bg: isOn ? '#00A6F4' : '#ffffff',
        border: isOn ? '#38bdf8' : '#bfdbfe',
        text: isOn ? '#ffffff' : '#1e3a8a',
        subtitle: isOn ? '#bae6fd' : '#3b82f6',
        desc: isOn ? '#e0f2fe' : '#6b7280',
        iconBg: isOn ? '#0284c7' : '#dbeafe',
        iconColor: isOn ? '#ffffff' : '#2563eb',
        accentBg: '#00A6F4',
    };
};

const TimelineStep = ({ step, index, isActive, isCompleted }) => {
    const IconComponent = step.icon;
    const isLeft = step.position === "left";
    const theme = getThemeColors(step.themeColor, isActive, isCompleted);

    return (
        <div className={`flex items-center w-full ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col lg:gap-0`}>
            {/* Card side */}
            <div className={`w-full lg:w-[calc(50%-40px)] ${isLeft ? 'lg:pl-0 lg:pr-0' : 'lg:pl-0 lg:pr-0'} flex ${isLeft ? 'lg:justify-end' : 'lg:justify-start'}`}>
                <motion.div
                    initial={{ opacity: 0, x: isLeft ? -100 : 100, scale: 0.88 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-7 lg:p-9 rounded-2xl border-2 cursor-pointer group relative overflow-hidden w-full lg:max-w-md"
                    style={{
                        background: theme.bg,
                        borderColor: theme.border,
                        boxShadow: isActive || isCompleted ? '0 20px 50px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.06)',
                        transition: 'all 0.5s ease',
                    }}
                >
                    {/* Shimmer overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)' }} />

                    <div className="relative z-10 text-center">
                        {/* Icon */}
                        <motion.div
                            whileHover={{ rotate: 10 }}
                            className="inline-flex p-4 rounded-2xl mb-5 shadow-lg"
                            style={{ background: theme.iconBg }}
                        >
                            <IconComponent className="w-7 h-7" style={{ color: theme.iconColor }} strokeWidth={2} />
                        </motion.div>

                        {/* Subtitle */}
                        <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: theme.subtitle }}>
                            {step.subtitle}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl lg:text-2xl font-black mb-4 leading-tight" style={{ color: theme.text }}>
                            {step.title}
                        </h3>

                        {/* Accent bar */}
                        <div className="w-12 h-1 rounded-full mx-auto mb-4" style={{ background: theme.accentBg }} />

                        {/* Description */}
                        <p className="text-sm leading-relaxed" style={{ color: theme.desc }}>
                            {step.description}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Center spacer for desktop (timeline node sits here without overlapping) */}
            <div className="hidden lg:block w-20 flex-shrink-0" />

            {/* Empty right/left side for layout balance */}
            <div className="hidden lg:block w-[calc(50%-40px)]" />
        </div>
    );
};

const JourneySection = () => {
    const containerRef = useRef(null);
    const [activeStep, setActiveStep] = useState(-1);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 20%"]
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (progress) => {
            const stepThreshold = 1 / journeyStepsData.length;
            const currentStepIndex = Math.floor(progress / stepThreshold);
            if (progress > currentStepIndex * stepThreshold + stepThreshold * 0.3) {
                setActiveStep(Math.min(currentStepIndex, journeyStepsData.length - 1));
            } else {
                setActiveStep(currentStepIndex - 1);
            }
        });
        return unsubscribe;
    }, [scrollYProgress]);

    const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-20 lg:py-32 overflow-hidden relative" id="journey-section"
            style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%)' }}>
            {/* Decorative blobs */}
            <div className="absolute top-20 left-0 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,166,244,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
            <div className="absolute bottom-20 right-0 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(30,41,57,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16 lg:mb-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    <motion.span
                        className="inline-block text-white text-xs lg:text-sm font-bold px-5 py-2.5 rounded-full uppercase tracking-widest mb-6 shadow-lg"
                        style={{ background: 'linear-gradient(135deg, #00A6F4, #0284c7)' }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Our Methodology
                    </motion.span>
                    <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4"
                        style={{ color: '#0f172a', letterSpacing: '-0.03em' }}>
                        Your Strategic{' '}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: 'linear-gradient(135deg, #00A6F4, #2563eb)' }}>
                            Journey
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Four precise steps from vision to a high-performing global team.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div ref={containerRef} className="relative">
                    {/* Vertical line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 w-0.5 h-full bg-gray-200 -translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div
                            className="w-full rounded-full origin-top"
                            style={{ height: timelineHeight, background: 'linear-gradient(180deg, #00A6F4, #2563eb)' }}
                        />
                    </div>

                    <div className="space-y-14 lg:space-y-24">
                        {journeyStepsData.map((step, index) => (
                            <div key={step.id} className="relative">
                                {/* Timeline node */}
                                <div
                                    className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-4 z-20 items-center justify-center transition-all duration-700"
                                    style={{
                                        background: index <= activeStep ? '#10b981' : '#ffffff',
                                        borderColor: index <= activeStep ? '#6ee7b7' : '#d1d5db',
                                        boxShadow: index <= activeStep ? '0 0 30px rgba(16,185,129,0.5)' : '0 4px 12px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    <Check
                                        className="w-6 h-6 transition-colors duration-500"
                                        style={{ color: index <= activeStep ? '#ffffff' : '#9ca3af' }}
                                        strokeWidth={3}
                                    />
                                </div>

                                <TimelineStep
                                    step={step}
                                    index={index}
                                    isActive={index === activeStep}
                                    isCompleted={index < activeStep}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
