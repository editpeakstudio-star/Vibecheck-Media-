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
    <section id="process" className="relative py-20 sm:py-28 bg-[#080F19] border-t border-[#1E344A] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101B2A] border border-[#1E344A] text-xs font-mono font-bold tracking-wider text-[#00D9FF] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]" />
            <span>METHODOLOGY / ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8FAFC] leading-tight mb-4">
            Execution <span className="text-cyan-glow">Framework.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#B7C4D5]">
            A battle-tested production sequence engineered to remove guesswork and turn strategic vision into high-converting brand equity.
          </p>
        </div>

        {/* 4-Step Interactive Timeline with Reference Cards */}
        <div className="relative">
          {/* Subtle connecting hairline on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-9 bg-gradient-to-r from-transparent via-[#00D9FF]/40 to-transparent z-0" />

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
                  className={`reference-card p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between text-left ${
                    isActive
                      ? '!border-[#00D9FF] shadow-[0_0_40px_rgba(0,217,255,0.4)] scale-[1.02]'
                      : 'hover:scale-[1.01]'
                  }`}
                >
                  <div>
                    {/* Top Step Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-mono font-bold tracking-wider ${isActive ? 'text-[#00D9FF]' : 'text-[#B7C4D5]'}`}>
                          PHASE {step.number}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#101B2A] border border-[#1E344A] text-[#00D9FF]">
                          {step.phase}
                        </span>
                      </div>

                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-gradient-to-tr from-[#00D9FF] to-[#168BFF] text-[#03070D] shadow-[0_0_15px_#00D9FF]'
                            : 'bg-[#101B2A] border border-[#1E344A] text-[#00D9FF]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="text-lg font-bold text-[#F8FAFC] tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B7C4D5] leading-relaxed mb-6 font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-[#1E344A] space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-[#00D9FF] font-bold tracking-wider block mb-1">
                      Deliverables:
                    </span>
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-[#F8FAFC]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
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
            className="btn-primary-cyan inline-flex items-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm cursor-pointer"
          >
            <span>Schedule Discovery Call</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
};
