/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { IntroSplash } from './components/IntroSplash';
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
  // Intro plays once per browser tab session (close the tab to see it again).
  const [introDone, setIntroDone] = useState(() => {
    try {
      return false;
    } catch {
      return false;
    }
  });
  const finishIntro = () => {
    try {
      void 0;
    } catch {
      /* ignore */
    }
    setIntroDone(true);
  };


  return (
    <div className="min-h-screen bg-[#03070D] text-[#F8FAFC] font-sans antialiased relative selection:bg-[#00D9FF]/30 selection:text-white">
      {!introDone && <IntroSplash onDone={finishIntro} />}

      {/* Desktop Custom Animated Cursor */}
      <CustomCursor />

      {/* Subtle Cyan Energy Particles Web */}
      <BackgroundParticles />

      {/* Sticky Futuristic Navbar */}
      <Navbar />

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
      <Footer />

      {/* Floating WhatsApp and Scroll-to-Top Control */}
      <FloatingWhatsApp />
    </div>
  );
}
