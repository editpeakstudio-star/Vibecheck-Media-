import React from 'react';
import {
  Video,
  PenTool,
  Compass,
  Palette,
  Code,
  Share2,
  Check,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { SERVICES, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return Video;
      case 'PenTool':
        return PenTool;
      case 'Compass':
        return Compass;
      case 'Palette':
        return Palette;
      case 'Code':
        return Code;
      case 'Share2':
        return Share2;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#080A0F] border-t border-[#222A36]">
      {/* Subtle Ambient Backing */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#55C8F5]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-mono text-kicker tracking-[0.2em] text-[#55C8F5] uppercase mb-3">
              <span>SPECIALIZED DISCIPLINES</span>
              <span className="text-[#303744]">/</span>
              <span className="text-[#A7B0C0]">END-TO-END</span>
            </div>
            <h2 className="text-fluid-section font-extrabold text-[#F8FAFC]">
              Six Core Disciplines.{' '}
              <br />
              <span className="text-white">One </span>
              <span className="text-shine">
                Unified Growth Engine.
              </span>
            </h2>
          </div>

          <p className="text-fluid-lead text-[#A7B0C0] max-w-md">
            Every service is precision-crafted to build unshakeable brand authority and drive genuine, measurable engagement.
          </p>
        </div>

        {/* 6 Core Service Cards in Asymmetric Bento Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.icon);
            const whatsappUrl = getWhatsAppUrl(service.whatsappMessage);

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl p-7 bg-[#171B24] border border-[#222A36] hover:border-[#303744] hover:bg-[#1D2430] transition-all duration-300 flex flex-col justify-between text-left"
                onMouseEnter={() => soundManager.playClickSound()}
              >
                <div>
                  {/* Top Header: Index & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-kicker font-bold text-[#55C8F5]">
                      {service.number}. SERVICE
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#1D2430] border border-[#303744] flex items-center justify-center text-[#55C8F5] group-hover:border-[#55C8F5]/60 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-fluid-card font-bold text-[#F8FAFC] mb-2 group-hover:text-[#55C8F5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#A7B0C0] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Capabilities Checklist */}
                  <div className="space-y-2 mb-8">
                    {service.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-[#F8FAFC]/90">
                        <Check className="w-3.5 h-3.5 text-[#55C8F5] shrink-0" />
                        <span className="leading-tight">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-5 border-t border-[#222A36] flex flex-col gap-3.5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#788597]">
                    <span className="text-[#A7B0C0]">Specialization:</span>
                    <span className="truncate max-w-[190px] text-[#F8FAFC]">{service.highlight}</span>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClickSound()}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-[#F8FAFC] bg-[#10141C] hover:bg-[#55C8F5] hover:text-[#080A0F] border border-[#303744] hover:border-[#55C8F5] transition-all transform hover:-translate-y-0.5 cursor-pointer font-sans"
                  >
                    <MessageSquare className="w-4 h-4 text-[#55C8F5] group-hover:text-[#080A0F]" />
                    <span>Inquire {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Solution Callout */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#171B24] border border-[#303744] flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-kicker text-[#55C8F5]">
              <span>AGENCY RETAINER</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-display text-[#F8FAFC] tracking-tight">
              Need a Custom Multi-Discipline Growth Retainer?
            </h4>
            <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
              Combine video editing, strategic content planning, graphic systems, and web architecture into a unified, dedicated monthly production engine.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(`Hi Ravi & VibeCheck Media! I need a custom multi-service growth retainer for our brand. Let's schedule a consultation!`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClickSound()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-[#080A0F] bg-[#55C8F5] hover:bg-[#72D3F7] glow-cyan-button transition-all shrink-0 cursor-pointer font-sans"
          >
            <span>Inquire Custom Retainer</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
