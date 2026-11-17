import React from 'react';
import {
  Lightbulb,
  CheckCircle2,
  Target,
  Layers,
  MessageSquare,
  Users,
  Zap,
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
    <section className="relative py-24 sm:py-32 bg-[#10141C] border-t border-[#222A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2.5 text-xs font-mono text-kicker tracking-[0.2em] text-[#55C8F5] uppercase mb-3">
            <span>THE VIBECHECK ADVANTAGE</span>
            <span className="text-[#303744]">/</span>
            <span className="text-[#A7B0C0]">STANDARDS</span>
          </div>
          <h2 className="text-fluid-section font-extrabold text-[#F8FAFC] mb-5">
            Why Forward-Thinking Brands Choose{' '}
            <span className="text-shine">
              VibeCheck Media.
            </span>
          </h2>
          <p className="text-fluid-lead text-[#A7B0C0]">
            We reject cookie-cutter templates and vanity metrics. We construct bespoke creative systems designed to build genuine market authority.
          </p>
        </div>

        {/* 6 Feature Cards with Clean Editorial Indexing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.number}
                className="group relative rounded-2xl p-6 sm:p-7 bg-[#171B24] border border-[#222A36] hover:border-[#303744] hover:bg-[#1D2430] transition-all duration-300 flex flex-col justify-between text-left"
                onMouseEnter={() => soundManager.playClickSound()}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono text-kicker font-bold text-[#55C8F5]">
                      {item.number}. STANDARD
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#1D2430] border border-[#303744] flex items-center justify-center text-[#55C8F5] group-hover:border-[#55C8F5]/60 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-fluid-card font-bold text-[#F8FAFC] mb-2 group-hover:text-[#55C8F5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#222A36] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#788597]">Benchmark:</span>
                  <span className="text-[#55C8F5] font-semibold">{item.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
