import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import Footer from './components/Footer';

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

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <LogoIntro
        logoImage="/intro_animation/globe.png"
        onComplete={() => setIntroComplete(true)}
      />

      <div
        style={{
          opacity: introComplete ? 1 : 0,
          transition: 'opacity 0.8s ease',
          pointerEvents: introComplete ? 'auto' : 'none',
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
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
