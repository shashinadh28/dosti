import React, { useState } from 'react';
import LogoIntro from './components/LogoIntro';
import FloatingNavbar from './components/FloatingNavbar';
import Hero from './components/Hero';
import LeverageSection from './components/LeverageSection';
import GlobalConnect from './components/GlobalConnect';
import TalentChallenges from './components/TalentChallenges';
import HiringProcess from './components/HiringProcess';
import CTA from './components/CTA';
import Footer from './components/Footer';

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
          <Hero />
          <LeverageSection />
          <GlobalConnect />
          <TalentChallenges />
          <HiringProcess />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
