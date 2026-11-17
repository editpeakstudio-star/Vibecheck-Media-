import React from 'react';
import { Palette, Compass, TrendingUp, Check, Star } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const AboutSection: React.FC = () => {
  const cards = [
    {
      number: '01',
      title: 'Creativity First',
      highlight: 'Original Visual Mastery',
      description: 'We believe genuine creativity stops the infinite scroll. From cinematic video pacing to provocative brand design, we inject memorable artistry into every deliverable.',
      icon: Palette,
      metrics: '100% Bespoke Creatives',
      detail: 'Tailored aesthetic signatures engineered for maximum retention and viewer resonance.',
    },
    {
      number: '02',
      title: 'Strategy Driven',
      highlight: 'Data-Backed Positioning',
      description: 'Visual brilliance requires strategic direction. We analyze audience psychology, platform distribution patterns, and competitive whitespace to ensure your brand commands authority.',
      icon: Compass,
      metrics: '3.4x Reach Multiplier',
      detail: 'Precision content calendars, narrative hooks, and distribution architectures.',
    },
    {
      number: '03',
      title: 'Growth Focused',
      highlight: 'Commercial Conversion',
      description: 'Followers are vanity; revenue and brand authority are sanity. Every campaign, script, and web interface is architected to convert passive eyeballs into loyal clients.',
      icon: TrendingUp,
      metrics: 'Measurable Commercial Return',
      detail: 'Frictionless inquiry funnels, high-conversion web experiences, and ongoing optimization.',
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#080F19] border-t border-[#1E344A] overflow-hidden">
      {/* Background Cyan Glow */}
      <div className="cyan-ambient-glow w-[32rem] h-[32rem] -top-10 right-1/4" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101B2A] border border-[#1E344A] text-xs font-mono font-bold tracking-wider text-[#00D9FF] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]" />
            <span>WHO WE ARE / AGENCY IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8FAFC] leading-tight mb-4">
            More Than Creativity.{' '}
            <br className="hidden sm:block" />
            <span className="text-[#F8FAFC]">We Engineer </span>
            <span className="text-cyan-glow">Digital Impact.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#B7C4D5] leading-relaxed">
            VibeCheck Media is a next-generation creative digital agency helping brands establish an unshakeable digital presence through compelling storytelling, strategic content, and modern technology.
          </p>
        </div>

        {/* 3 Reference Style Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="reference-card p-6 sm:p-8 flex flex-col justify-between text-left"
                onMouseEnter={() => soundManager.playClickSound()}
              >
                <div>
                  {/* Top Bar with Number Badge and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101B2A] border border-[#1E344A] text-xs font-mono font-bold text-[#00D9FF]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
                      <span>{card.number}. PILLAR</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#101B2A] border border-[#1E344A] flex items-center justify-center text-[#00D9FF] shadow-[0_0_15px_rgba(0,217,255,0.2)]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Highlight */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#F8FAFC] tracking-tight mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-[#00D9FF] mb-4">
                    {card.highlight}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#B7C4D5] leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Metric & Spec */}
                <div className="pt-4 border-t border-[#1E344A] flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#F8FAFC]">
                    <Star className="w-3.5 h-3.5 text-[#00D9FF] fill-[#00D9FF]" />
                    <span className="text-[#00D9FF]">{card.metrics}</span>
                  </div>
                  <span className="text-xs text-[#8493A8]">
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
