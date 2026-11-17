import React from 'react';
import { Palette, Compass, TrendingUp, Check } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const AboutSection: React.FC = () => {
  const cards = [
    {
      number: '01',
      title: 'Creativity First',
      subtitle: 'Original Storytelling & Visual Mastery',
      description: 'We believe genuine creativity stops the infinite scroll. From cinematic video pacing to provocative brand design, we inject memorable artistry into every deliverable.',
      icon: Palette,
      metrics: '100% Bespoke Creatives',
      detail: 'Tailored aesthetic signatures engineered for maximum retention and viewer resonance.',
    },
    {
      number: '02',
      title: 'Strategy Driven',
      subtitle: 'Data-Backed Audience Positioning',
      description: 'Visual brilliance requires strategic direction. We analyze audience psychology, platform distribution patterns, and competitive whitespace to ensure your brand commands authority.',
      icon: Compass,
      metrics: '3.4x Reach Multiplier',
      detail: 'Precision content calendars, narrative hooks, and distribution architectures.',
    },
    {
      number: '03',
      title: 'Growth Focused',
      subtitle: 'Converting Attention to Business ROI',
      description: 'Followers are vanity; revenue and brand authority are sanity. Every campaign, script, and web interface is architected to convert passive eyeballs into loyal clients.',
      icon: TrendingUp,
      metrics: 'Measurable Commercial Return',
      detail: 'Frictionless inquiry funnels, high-conversion web experiences, and ongoing optimization.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#10141C] border-t border-[#222A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2.5 text-xs font-mono text-kicker tracking-[0.2em] text-[#55C8F5] uppercase mb-3">
            <span>WHO WE ARE</span>
            <span className="text-[#303744]">/</span>
            <span className="text-[#A7B0C0]">AGENCY IDENTITY</span>
          </div>
          <h2 className="text-fluid-section font-extrabold text-[#F8FAFC] mb-5">
            More Than Creativity.{' '}
            <br className="hidden sm:block" />
            <span className="text-white">
              We Engineer{' '}
            </span>
            <span className="text-shine">
              Digital Impact.
            </span>
          </h2>
          <p className="text-fluid-lead text-[#A7B0C0] leading-relaxed">
            VibeCheck Media is a next-generation creative digital agency helping brands establish an unshakeable digital presence through compelling storytelling, strategic content, and modern technology.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group relative rounded-2xl p-7 bg-[#171B24] border border-[#222A36] hover:border-[#303744] hover:bg-[#1D2430] transition-all duration-300 flex flex-col justify-between text-left"
                onMouseEnter={() => soundManager.playClickSound()}
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-kicker font-bold text-[#55C8F5]">
                      {card.number}. PILLAR
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#1D2430] border border-[#303744] flex items-center justify-center text-[#55C8F5] group-hover:border-[#55C8F5]/60 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-fluid-card font-bold text-[#F8FAFC] mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs font-mono text-[#A7B0C0] mb-4">
                    {card.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#A7B0C0] leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Metric & Unboxed Spec */}
                <div className="pt-4 border-t border-[#222A36] flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#F8FAFC] tracking-wide">
                    <Check className="w-3.5 h-3.5 text-[#55C8F5]" />
                    <span>{card.metrics}</span>
                  </div>
                  <span className="text-[11px] text-[#788597]">
                    {card.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
