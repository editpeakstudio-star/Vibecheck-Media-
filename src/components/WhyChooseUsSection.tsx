import React from 'react';
import {
  Lightbulb,
  CheckCircle2,
  Target,
  Layers,
  MessageSquare,
  Users,
  Zap,
  Star,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return Lightbulb;
      case 'CheckCircle':
        return CheckCircle2;
      case 'Target':
        return Target;
      case 'Layers':
        return Layers;
      case 'MessageSquare':
        return MessageSquare;
      case 'Users':
        return Users;
      default:
        return Zap;
    }
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#080F19] border-t border-[#1E344A] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101B2A] border border-[#1E344A] text-xs font-mono font-bold tracking-wider text-[#00D9FF] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]" />
            <span>THE VIBECHECK ADVANTAGE / STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8FAFC] leading-tight mb-4">
            Why Brands Choose{' '}
            <span className="text-cyan-glow">
              VibeCheck Media.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#B7C4D5]">
            We reject cookie-cutter templates and vanity metrics. We construct bespoke creative systems designed to build genuine market authority.
          </p>
        </div>

        {/* 6 Feature Cards with Reference Glowing Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.number}
                className="reference-card p-6 sm:p-7 flex flex-col justify-between text-left"
                onMouseEnter={() => soundManager.playClickSound()}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#00D9FF]">
                      {item.number}. STANDARD
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#101B2A] border border-[#1E344A] flex items-center justify-center text-[#00D9FF] shadow-[0_0_12px_rgba(0,217,255,0.2)]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B7C4D5] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#1E344A] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#8493A8]">Benchmark:</span>
                  <div className="flex items-center gap-1 font-semibold text-[#00D9FF]">
                    <Star className="w-3.5 h-3.5 text-[#00D9FF] fill-[#00D9FF]" />
                    <span>{item.metric}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
