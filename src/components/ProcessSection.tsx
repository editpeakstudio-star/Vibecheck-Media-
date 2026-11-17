import React, { useState } from 'react';
import { Search, Crosshair, Cpu, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return Search;
      case 'Crosshair':
        return Crosshair;
      case 'Cpu':
        return Cpu;
      case 'Rocket':
        return Rocket;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#10141C] border-t border-[#222A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2.5 text-xs font-mono text-kicker tracking-[0.2em] text-[#55C8F5] uppercase mb-3">
            <span>METHODOLOGY</span>
            <span className="text-[#303744]">/</span>
            <span className="text-[#A7B0C0]">EXECUTION ROADMAP</span>
          </div>
          <h2 className="text-fluid-section font-extrabold text-[#F8FAFC] mb-5">
            Four-Phase Execution Framework.{' '}
            <br />
            <span className="text-white">From </span>
            <span className="text-shine">
              Raw Concept to Scale.
            </span>
          </h2>
          <p className="text-fluid-lead text-[#A7B0C0]">
            A battle-tested production sequence engineered to remove guesswork and turn strategic vision into high-converting brand equity.
          </p>
        </div>

        {/* 4-Step Interactive Timeline */}
        <div className="relative">
          {/* Subtle connecting hairline on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-9 bg-[#303744] z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = getStepIcon(step.icon);
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => {
                    soundManager.playClickSound();
                    setActiveStep(idx);
                  }}
                  className={`group relative rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between text-left ${
                    isActive
                      ? 'bg-[#1D2430] border-2 border-[#55C8F5] shadow-xl shadow-black/60 scale-[1.02]'
                      : 'bg-[#171B24] border border-[#222A36] hover:border-[#303744] hover:bg-[#1D2430]'
                  }`}
                >
                  <div>
                    {/* Top Step Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-mono text-kicker font-bold ${isActive ? 'text-[#55C8F5]' : 'text-[#A7B0C0]'}`}>
                          PHASE {step.number}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10141C] border border-[#303744] text-[#A7B0C0]">
                          {step.phase}
                        </span>
                      </div>

                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-[#55C8F5] text-[#080A0F]'
                            : 'bg-[#10141C] border border-[#303744] text-[#55C8F5]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="text-fluid-card font-bold text-[#F8FAFC] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed mb-6 font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-[#222A36] space-y-1.5">
                    <span className="text-[10px] font-mono text-kicker text-[#788597] block mb-1">
                      Deliverables Handed Over:
                    </span>
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-[#F8FAFC]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#55C8F5]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 text-center">
          <a
            href={getWhatsAppUrl(`Hi Ravi! I loved your 4-phase working methodology and want to schedule a Phase 01 Discovery Call for my brand!`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClickSound()}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-[#080A0F] bg-[#55C8F5] hover:bg-[#72D3F7] glow-cyan-button transition-all cursor-pointer font-sans"
          >
            <span>Schedule Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
