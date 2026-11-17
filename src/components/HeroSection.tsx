import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Check } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const HeroSection: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    soundManager.playClickSound();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#080A0F]"
    >
      {/* Subtle Ambient Lighting (Quiet Cyan and Steel) */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-[#55C8F5]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#1D2430]/60 rounded-full blur-[120px] pointer-events-none" />

      {/* Very subtle architectural hairline grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(48,55,68,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(48,55,68,0.12)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Main 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Unboxed Metadata Kicker (Luxury Zero-Pill Discipline) */}
            <div className="flex items-center gap-2.5 text-xs font-mono text-kicker tracking-[0.2em] text-[#55C8F5] mb-6">
              <span>CREATIVE DIGITAL AGENCY</span>
              <span className="text-[#303744]" aria-hidden="true">/</span>
              <span className="text-[#A7B0C0]">EST. 2026</span>
            </div>

            {/* Oversized Editorial Headline with Shining Gradient on "Growth" */}
            <h1 className="text-fluid-hero font-extrabold text-[#F8FAFC] mb-6 text-balance">
              We Build Brands.{' '}
              <br />
              We Create{' '}
              <span className="text-shine">
                Growth.
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-fluid-lead text-[#A7B0C0] max-w-xl font-normal mb-8">
              From cinematic visual content to strategic digital architectures, we help forward-thinking businesses build authority, engage audiences, and scale with conviction.
            </p>

            {/* Modern Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-12">
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, 'services')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-[#080A0F] bg-[#55C8F5] hover:bg-[#72D3F7] glow-cyan-button transition-all transform hover:-translate-y-0.5 cursor-pointer font-sans"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl(`Hi Ravi & VibeCheck Media! I'm interested in scaling my brand with your creative agency services.`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClickSound()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-[#F8FAFC] bg-[#171B24] hover:bg-[#1D2430] border border-[#303744] hover:border-[#55C8F5]/60 transition-all transform hover:-translate-y-0.5 cursor-pointer font-sans"
              >
                <span>Schedule Consultation</span>
                <MessageSquare className="w-4 h-4 text-[#55C8F5]" />
              </a>
            </div>

            {/* 3 Core Capability Pillars (Clean Editorial Architecture) */}
            <div className="pt-7 border-t border-[#222A36] grid grid-cols-3 gap-4 sm:gap-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono text-kicker text-[#55C8F5]">01. STRATEGY</span>
                <h4 className="text-sm font-semibold text-[#F8FAFC] tracking-tight">Market Positioning</h4>
                <p className="text-xs text-[#788597] hidden sm:block">Audience-centric roadmaps</p>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono text-kicker text-[#55C8F5]">02. PRODUCTION</span>
                <h4 className="text-sm font-semibold text-[#F8FAFC] tracking-tight">Cinematic Content</h4>
                <p className="text-xs text-[#788597] hidden sm:block">Retention-driven storytelling</p>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono text-kicker text-[#55C8F5]">03. SCALE</span>
                <h4 className="text-sm font-semibold text-[#F8FAFC] tracking-tight">Digital Growth</h4>
                <p className="text-xs text-[#788597] hidden sm:block">Conversion web & campaigns</p>
              </div>
            </div>

          </div>

          {/* Right Column: Founder & Studio Prestige Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient Surface Backplate */}
            <div className="relative w-full max-w-md rounded-2xl bg-[#171B24] border border-[#303744] overflow-hidden shadow-2xl shadow-black/60">
              
              {/* Founder Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden bg-[#10141C] group">
                <img
                  src={BRAND.founderBannerImage}
                  alt="Ravi Chauhan - Founder of VibeCheck Media"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Measured Dark Scrim for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171B24] via-[#171B24]/40 to-transparent" />

                {/* Top Corner Unboxed Marker */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#080A0F]/85 backdrop-blur-md border border-[#303744] text-[11px] font-mono text-kicker text-[#F8FAFC]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#55C8F5]" />
                  <span>FOUNDER & DIRECTOR</span>
                </div>

                {/* Top Right Direct Status */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#080A0F]/85 backdrop-blur-md border border-[#303744] text-[11px] font-mono text-kicker text-[#A7B0C0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#55C8F5]" />
                  <span>DIRECTOR-LED</span>
                </div>
              </div>

              {/* Lower Details Box */}
              <div className="p-6 text-left">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight">
                      {BRAND.founder}
                    </h3>
                    <p className="text-xs font-mono text-kicker text-[#55C8F5] mt-0.5">
                      VIBECHECK MEDIA
                    </p>
                  </div>

                  <a
                    href={BRAND.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#A7B0C0] hover:text-[#55C8F5] border border-[#303744] rounded-lg px-2.5 py-1 bg-[#10141C] transition-colors"
                  >
                    {BRAND.instagramHandle}
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed mt-3">
                  "Driven by creativity, digital innovation, and a passion for building meaningful brands that command real attention."
                </p>

                {/* Trust Verification Strip */}
                <div className="mt-5 pt-4 border-t border-[#222A36] flex items-center justify-between text-[11px] font-mono text-[#788597]">
                  <span className="flex items-center gap-1.5 text-[#A7B0C0]">
                    <Check className="w-3.5 h-3.5 text-[#55C8F5]" />
                    Full-Stack Growth Agency
                  </span>
                  <span>Pan-India & Global</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Full-Width Quantitative Proof Ribbon Below Hero Split */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#222A36] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-left">
          <div className="p-4 rounded-xl bg-[#10141C]/60 border border-[#222A36]">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] font-display tabular-nums tracking-tight">
              50M+
            </div>
            <p className="text-xs text-[#788597] mt-1 font-mono text-kicker">Organic Impressions</p>
          </div>

          <div className="p-4 rounded-xl bg-[#10141C]/60 border border-[#222A36]">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] font-display tabular-nums tracking-tight">
              100+
            </div>
            <p className="text-xs text-[#788597] mt-1 font-mono text-kicker">Brand Deliverables</p>
          </div>

          <div className="p-4 rounded-xl bg-[#10141C]/60 border border-[#222A36]">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] font-display tabular-nums tracking-tight">
              4.8x
            </div>
            <p className="text-xs text-[#788597] mt-1 font-mono text-kicker">Reach Multiplier</p>
          </div>

          <div className="p-4 rounded-xl bg-[#10141C]/60 border border-[#222A36]">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] font-display tabular-nums tracking-tight">
              100%
            </div>
            <p className="text-xs text-[#788597] mt-1 font-mono text-kicker">Custom Production</p>
          </div>
        </div>

      </div>
    </section>
  );
};
