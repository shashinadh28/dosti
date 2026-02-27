import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LogoIntro from './components/LogoIntro';
import FloatingNavbar from './components/FloatingNavbar';
import Hero from './components/Hero';
import LeverageSection from './components/LeverageSection';
import GlobalConnect from './components/GlobalConnect';
import TalentChallenges from './components/TalentChallenges';
import HiringProcess from './components/HiringProcess';
import ServicesSection from './components/ServicesSection';
import CTA from './components/CTA';
import ContactPage from './components/ContactPage';
import TeamPage from './components/TeamPage';
import ITOutsourcingPage from './components/ITOutsourcingPage';
import HealthcareBPOPage from './components/HealthcareBPOPage';
import USTaxationPage from './components/USTaxationPage';
import CloudSolutionsPage from './components/CloudSolutionsPage';
import SaaSExpertsPage from './components/SaaSExpertsPage';
import AISolutionsPage from './components/AISolutionsPage';
import VirtualAssistantPage from './components/VirtualAssistantPage';
import Footer from './components/Footer';
import ServiceFooter from './components/ServiceFooter';

const HomePage = () => (
  <>
    <Hero />
    <LeverageSection />
    <GlobalConnect />
    <ServicesSection />
    <TalentChallenges />
    <HiringProcess />
    <CTA />
  </>
);

const SERVICE_ROUTES = [
  '/it-outsourcing', '/healthcare-bpo', '/us-taxation', '/cloud-solutions',
  '/saas-experts', '/ai-solutions', '/virtual-assistant',
];

const AppInner = () => {
  const location = useLocation();
  const isServicePage = SERVICE_ROUTES.includes(location.pathname);

  return (
    <div
      style={{
        opacity: 1,
        pointerEvents: 'auto',
      }}
    >
      <div className="sticky top-0 z-50">
        <FloatingNavbar />
      </div>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/it-outsourcing" element={<ITOutsourcingPage />} />
          <Route path="/healthcare-bpo" element={<HealthcareBPOPage />} />
          <Route path="/us-taxation" element={<USTaxationPage />} />
          <Route path="/cloud-solutions" element={<CloudSolutionsPage />} />
          <Route path="/saas-experts" element={<SaaSExpertsPage />} />
          <Route path="/ai-solutions" element={<AISolutionsPage />} />
          <Route path="/virtual-assistant" element={<VirtualAssistantPage />} />
        </Routes>
      </main>
      {isServicePage ? <ServiceFooter /> : <Footer />}
    </div>
  );
};

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <LogoIntro
        logoImage="/intro_animation/globe.png"
        onComplete={() => setIntroComplete(true)}
      />
      <div style={{ opacity: introComplete ? 1 : 0, transition: 'opacity 0.8s ease', pointerEvents: introComplete ? 'auto' : 'none' }}>
        <AppInner />
      </div>
    </>
  );
};

export default App;
