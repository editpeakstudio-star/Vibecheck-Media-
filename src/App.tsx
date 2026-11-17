/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CinematicIntro } from './components/CinematicIntro';
import { BackgroundParticles } from './components/BackgroundParticles';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { FounderSection } from './components/FounderSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);

  // Check if user already saw intro in current session
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSeen = sessionStorage.getItem('vibecheck_intro_seen');
      if (hasSeen === 'true') {
        setShowIntro(false);
      }
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('vibecheck_intro_seen', 'true');
    }
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-[#03070D] text-[#F8FAFC] font-sans antialiased relative selection:bg-[#00D9FF]/30 selection:text-white">
      {/* Cinematic 3D Armor Opening Sequence */}
      {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}

      {/* Desktop Custom Animated Cursor */}
      <CustomCursor />

      {/* Subtle Cyan Energy Particles Web */}
      <BackgroundParticles />

      {/* Sticky Futuristic Navbar */}
      <Navbar onReplayIntro={handleReplayIntro} />

      {/* Main Agency Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About Us Section */}
        <AboutSection />

        {/* 3. Six Core Services Section */}
        <ServicesSection />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* 5. Portfolio Section */}
        <PortfolioSection />

        {/* 6. Working Process Section */}
        <ProcessSection />

        {/* 7. Dedicated Founder Spotlight */}
        <FounderSection />

        {/* 8. Contact & Project Inquiry Form */}
        <ContactSection />
      </main>

      {/* Futuristic Agency Footer */}
      <Footer onReplayIntro={handleReplayIntro} />

      {/* Floating WhatsApp and Scroll-to-Top Control */}
      <FloatingWhatsApp />
    </div>
  );
}
