import React from 'react';
import { Mail, Instagram, MessageSquare, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="relative py-20 sm:py-28 bg-[#03070D] border-t border-[#1E344A] overflow-hidden">
      {/* Background Cyan Glow */}
      <div className="cyan-ambient-glow w-[36rem] h-[36rem] top-1/4 right-1/4" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#080E18] border border-[#1E344A] text-xs font-mono font-bold tracking-wider text-[#00D9FF] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]" />
            <span>LEADERSHIP SPOTLIGHT / FOUNDER & DIRECTOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8FAFC] leading-tight mb-4">
            The Vision Behind{' '}
            <span className="text-cyan-glow">
              VibeCheck Media.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#B7C4D5]">
            Direct founder oversight on every project ensures unparalleled craft, uncompromising standards, and strategic execution.
          </p>
        </div>

        {/* 2-Column Founder Spotlight Reference Card */}
        <div className="reference-card p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Authentic Founder Portrait Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#1E344A] bg-[#03070D] aspect-[4/3] sm:aspect-square group">
                <img
                  src={BRAND.founderBannerImage}
                  alt="Ravi Chauhan - Founder of VibeCheck Media"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080E18] via-transparent to-transparent opacity-75" />

                {/* Corner Mark */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101B2A]/90 backdrop-blur-md border border-[#1E344A] text-xs font-mono text-[#F8FAFC]">
                  <span className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]" />
                  <span>Ravi Chauhan · Founder</span>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Narrative & Direct Contact Channels */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101B2A] border border-[#1E344A] text-[11px] font-mono text-[#00D9FF] font-bold w-fit mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D9FF]" />
                <span>FOUNDER & CREATIVE DIRECTOR</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-[#F8FAFC] tracking-tight mb-1">
                {BRAND.founder}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#00D9FF] font-semibold mb-6">
                Founder & Lead Strategist – VibeCheck Media
              </p>

              {/* Core Description Quote */}
              <div className="p-5 rounded-2xl bg-[#101B2A] border border-[#1E344A] mb-8">
                <blockquote className="text-sm sm:text-base text-[#F8FAFC] leading-relaxed italic font-normal">
                  "{BRAND.description} Driven by creativity, digital innovation, and a passion for building meaningful brands, Ravi Chauhan leads VibeCheck Media with a clear mission: to make brands unforgettable."
                </blockquote>
              </div>

              {/* Philosophy Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Direct founder-led creative oversight</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Storytelling tuned to retention analytics</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Zero fluff, pure conversion design</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                  <Check className="w-4 h-4 text-[#00D9FF] shrink-0" />
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
                  className="btn-primary-cyan inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>

                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClickSound()}
                  className="btn-inquire-pill inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm cursor-pointer"
                >
                  <Instagram className="w-4 h-4 text-[#00D9FF]" />
                  <span>{BRAND.instagramHandle}</span>
                </a>

                <a
                  href={`mailto:${BRAND.email}`}
                  onClick={() => soundManager.playClickSound()}
                  className="btn-inquire-pill inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#00D9FF]" />
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
