import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Check, Sparkles, Rocket, Video, TrendingUp } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const HeroSection: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    soundManager.playClickSound();
    const target = document.getElementById(id);
    if (target) {
      const navOffset = 84;
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementPosition - navOffset),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#03070D]"
    >
      {/* Background Cyan Radial Horizons */}
      <div className="cyan-ambient-glow w-[36rem] h-[36rem] top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="cyan-ambient-glow w-[32rem] h-[32rem] bottom-10 right-1/4" />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,52,74,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,52,74,0.14)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Main 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Pill Kicker with Cyan Glowing Dot matching reference */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#080E18] border border-[#1E344A] text-xs font-mono font-bold tracking-wider text-[#00D9FF] mb-6 shadow-[0_0_15px_rgba(0,217,255,0.2)] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]" />
              <span>CREATIVE DIGITAL AGENCY</span>
              <span className="text-[#1E344A]" aria-hidden="true">/</span>
              <span className="text-[#8493A8]">EST. 2026</span>
            </div>

            {/* Oversized Headline matching Reference Style */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#F8FAFC] leading-[1.08] mb-6">
              We Build Brands.{' '}
              <br />
              We Create{' '}
              <span className="text-cyan-glow">
                Growth.
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-[#B7C4D5] max-w-xl font-normal leading-relaxed mb-8">
              From cinematic visual content to strategic digital architectures, we help forward-thinking businesses build authority, engage audiences, and scale with conviction.
            </p>

            {/* CTAs matching Reference Button Styles */}
            <div className="flex flex-wrap items-center gap-3.5 mb-12">
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, 'services')}
                className="btn-primary-cyan px-7 py-3.5 text-xs sm:text-sm flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href={getWhatsAppUrl(`Hi Ravi & VibeCheck Media! I'm interested in scaling my brand with your creative agency services.`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClickSound()}
                className="btn-inquire-pill px-6 py-3.5 text-xs sm:text-sm flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <span>Let's Work Together</span>
                <MessageSquare className="w-4 h-4 text-[#00D9FF]" />
              </a>
            </div>

            {/* 3 Core Capability Pillars (Stacked Capsules) */}
            <div className="pt-7 border-t border-[#1E344A] grid grid-cols-3 gap-3 sm:gap-5">
              <div className="feature-capsule flex-col !items-start gap-1 p-3">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#00D9FF]">01. STRATEGY</span>
                <h4 className="text-xs sm:text-sm font-bold text-[#F8FAFC]">Market Positioning</h4>
                <p className="text-[11px] text-[#8493A8] hidden sm:block">Audience blueprints</p>
              </div>

              <div className="feature-capsule flex-col !items-start gap-1 p-3">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#00D9FF]">02. CREATIVE</span>
                <h4 className="text-xs sm:text-sm font-bold text-[#F8FAFC]">Cinematic Video</h4>
                <p className="text-[11px] text-[#8493A8] hidden sm:block">High retention hooks</p>
              </div>

              <div className="feature-capsule flex-col !items-start gap-1 p-3">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#00D9FF]">03. GROWTH</span>
                <h4 className="text-xs sm:text-sm font-bold text-[#F8FAFC]">Full Digital Scale</h4>
                <p className="text-[11px] text-[#8493A8] hidden sm:block">Frictionless funnels</p>
              </div>
            </div>

          </div>

          {/* Right Column: Founder & Studio Showcase (Reference Card Style) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Reference Card Container with Glowing Cyan Borders */}
            <div className="relative w-full max-w-md reference-card p-2 sm:p-3 overflow-hidden">
              <div className="rounded-[1.75rem] overflow-hidden bg-[#080E18]">
                
                {/* Founder Image Frame */}
                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[#03070D] group">
                  <img
                    src={BRAND.founderBannerImage}
                    alt="Ravi Chauhan - Founder of VibeCheck Media"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                    decoding="async"
                    width="600"
                    height="600"
                  />
                  
                  {/* Dark Vignette Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080E18] via-[#080E18]/40 to-transparent" />

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101B2A]/90 backdrop-blur-md border border-[#1E344A] text-[11px] font-mono font-bold text-[#F8FAFC]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00D9FF]" />
                    <span>FOUNDER & DIRECTOR</span>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#101B2A]/90 backdrop-blur-md border border-[#1E344A] text-[11px] font-mono text-[#00D9FF]">
                    <span className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]" />
                    <span>DIRECTOR-LED</span>
                  </div>
                </div>

                {/* Information Card Body */}
                <div className="p-6 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#F8FAFC] tracking-tight">
                        {BRAND.founder}
                      </h3>
                      <p className="text-xs font-mono font-bold tracking-wider text-[#00D9FF] uppercase mt-0.5">
                        FOUNDER — VIBECHECK MEDIA
                      </p>
                    </div>

                    <a
                      href={BRAND.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#B7C4D5] hover:text-[#00D9FF] border border-[#1E344A] rounded-full px-3 py-1 bg-[#101B2A] transition-colors"
                    >
                      {BRAND.instagramHandle}
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-[#B7C4D5] leading-relaxed mt-3">
                    "Driven by creativity, digital innovation, and a passion for building meaningful brands that command real attention."
                  </p>

                  {/* Trust Markers */}
                  <div className="mt-5 pt-4 border-t border-[#1E344A] flex items-center justify-between text-[11px] font-mono text-[#8493A8]">
                    <span className="flex items-center gap-1.5 text-[#B7C4D5]">
                      <Check className="w-3.5 h-3.5 text-[#00D9FF]" />
                      Full-Service Production
                    </span>
                    <span>Pan-India & Global</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Full-Width Quantitative Proof Ribbon */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#1E344A] grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="feature-capsule flex-col !items-start p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F8FAFC] font-display tabular-nums tracking-tight">
              50M+
            </div>
            <p className="text-xs text-[#00D9FF] mt-1 font-mono font-semibold uppercase tracking-wider">Organic Reach</p>
          </div>

          <div className="feature-capsule flex-col !items-start p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F8FAFC] font-display tabular-nums tracking-tight">
              100+
            </div>
            <p className="text-xs text-[#00D9FF] mt-1 font-mono font-semibold uppercase tracking-wider">Brand Projects</p>
          </div>

          <div className="feature-capsule flex-col !items-start p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F8FAFC] font-display tabular-nums tracking-tight">
              4.8x
            </div>
            <p className="text-xs text-[#00D9FF] mt-1 font-mono font-semibold uppercase tracking-wider">Reach Multiplier</p>
          </div>

          <div className="feature-capsule flex-col !items-start p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F8FAFC] font-display tabular-nums tracking-tight">
              100%
            </div>
            <p className="text-xs text-[#00D9FF] mt-1 font-mono font-semibold uppercase tracking-wider">Custom Built</p>
          </div>
        </div>

      </div>
    </section>
  );
};
