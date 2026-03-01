import React from 'react';
import HeroSection from '../components/HealthcareBPO/HeroSection';
import AboutSection from '../components/HealthcareBPO/AboutSection';
import WhyChooseSection from '../components/HealthcareBPO/WhyChooseSection';
import ServicesSection from '../components/HealthcareBPO/ServicesSection';
import VisualCalloutSection from '../components/HealthcareBPO/VisualCalloutSection';
import TransformSection from '../components/HealthcareBPO/TransformSection';

const HealthcareBPOPage = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <WhyChooseSection />
            <ServicesSection />
            <VisualCalloutSection />
            <TransformSection />
        </>
    );
};

export default HealthcareBPOPage;
