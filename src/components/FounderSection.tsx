import React from 'react';
import { Mail, Instagram, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="relative py-24 sm:py-32 bg-[#080A0F] border-t border-[#222A36] overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#55C8F5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2.5 text-xs font-mono text-kicker tracking-[0.2em] text-[#55C8F5] uppercase mb-3">
            <span>LEADERSHIP SPOTLIGHT</span>
            <span className="text-[#303744]">/</span>
            <span className="text-[#A7B0C0]">FOUNDER & DIRECTOR</span>
          </div>
          <h2 className="text-fluid-section font-extrabold text-[#F8FAFC]">
            The Vision Behind{' '}
            <span className="text-shine">
              VibeCheck Media.
            </span>
          </h2>
        </div>

        {/* 2-Column Founder Spotlight Card */}
        <div className="rounded-2xl bg-[#171B24] border border-[#303744] p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Authentic Founder Portrait Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#303744] bg-[#10141C] aspect-[4/3] sm:aspect-square group">
                <img
                  src={BRAND.founderBannerImage}
                  alt="Ravi Chauhan - Founder of VibeCheck Media"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171B24] via-transparent to-transparent opacity-60" />

                {/* Corner Mark */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#080A0F]/85 backdrop-blur-md border border-[#303744] text-xs font-mono text-kicker text-[#F8FAFC]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#55C8F5]" />
                  <span>Ravi Chauhan · Founder</span>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Narrative & Direct Contact Channels */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-kicker text-[#55C8F5] mb-3">
                <span>FOUNDER & CREATIVE DIRECTOR</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-[#F8FAFC] tracking-tight mb-2">
                {BRAND.founder}
              </h3>
              <p className="text-sm font-mono text-[#A7B0C0] mb-6">
                Founder & Lead Strategist – VibeCheck Media
              </p>

              {/* Core Description Quote */}
              <div className="p-5 rounded-xl bg-[#10141C] border border-[#222A36] mb-8">
                <blockquote className="text-base sm:text-lg text-[#F8FAFC] leading-relaxed italic font-normal">
                  "{BRAND.description} Driven by creativity, digital innovation, and a passion for building meaningful brands, Ravi Chauhan leads VibeCheck Media with a clear mission: to make brands unforgettable."
                </blockquote>
              </div>

              {/* Philosophy Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                  <Check className="w-4 h-4 text-[#55C8F5] shrink-0" />
                  <span>Direct founder-led creative oversight</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                  <Check className="w-4 h-4 text-[#55C8F5] shrink-0" />
                  <span>Storytelling tuned to retention analytics</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                  <Check className="w-4 h-4 text-[#55C8F5] shrink-0" />
                  <span>Zero fluff, pure conversion design</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                  <Check className="w-4 h-4 text-[#55C8F5] shrink-0" />
                  <span>Fast turnaround & responsive weekly sync</span>
                </div>
              </div>

              {/* Direct Founder Contact Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppUrl(`Hi Ravi! I saw your founder profile on the VibeCheck Media website. I'd love to chat directly about a project.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClickSound()}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-[#080A0F] bg-[#55C8F5] hover:bg-[#72D3F7] glow-cyan-button transition-all cursor-pointer font-sans"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClickSound()}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium tracking-wide text-[#F8FAFC] hover:text-[#55C8F5] bg-[#10141C] border border-[#303744] hover:border-[#55C8F5] transition-all cursor-pointer font-sans"
                >
                  <Instagram className="w-4 h-4 text-[#55C8F5]" />
                  <span>{BRAND.instagramHandle}</span>
                </a>

                <a
                  href={`mailto:${BRAND.email}`}
                  onClick={() => soundManager.playClickSound()}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium tracking-wide text-[#F8FAFC] hover:text-[#55C8F5] bg-[#10141C] border border-[#303744] hover:border-[#55C8F5] transition-all cursor-pointer font-sans"
                >
                  <Mail className="w-4 h-4 text-[#55C8F5]" />
                  <span>Email Ravi</span>
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
