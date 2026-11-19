import React from 'react';
import {
  Instagram,
  Youtube,
  Film,
  Megaphone,
  User,
  Zap,
  ChevronRight,
  Star,
  Play,
  ArrowRight,
  Palette,
  Layers,
  Sparkles,
  Code,
  Globe,
  Compass,
  TrendingUp,
  PenTool,
  Share2,
  Building2,
  Smartphone,
  Box,
  Video,
} from 'lucide-react';
import { SERVICES, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

// 3D Visual Asset Mapping for each service (Optimized ultra-fast WebP renders)
const SERVICE_VISUALS: Record<string, string> = {
  'video-editing': '/src/assets/images/service_video_3d.webp',
  'graphic-designing': '/src/assets/images/service_design_3d.webp',
  'web-development': '/src/assets/images/service_web_3d.webp',
  'content-strategy': '/src/assets/images/service_growth_3d.webp',
  'script-writing': '/src/assets/images/service_script_3d.webp',
  'social-media-management': '/src/assets/images/service_social_3d.webp',
};

// Feature icon resolver
const getFeatureIcon = (featureName: string, serviceId: string) => {
  const lower = featureName.toLowerCase();
  if (lower.includes('instagram') || lower.includes('reel')) return Instagram;
  if (lower.includes('talking') || lower.includes('head') || lower.includes('interview')) return User;
  if (lower.includes('motion') || lower.includes('graphics')) return Layers;
  if (lower.includes('3d') || lower.includes('animation')) return Box;
  if (lower.includes('ugc')) return Smartphone;
  if (lower.includes('estate') || lower.includes('real')) return Building2;
  if (lower.includes('youtube')) return Youtube;
  if (lower.includes('cinematic') || lower.includes('film')) return Film;
  if (lower.includes('promotional') || lower.includes('marketing') || lower.includes('megaphone')) return Megaphone;
  if (lower.includes('short') || lower.includes('viral') || lower.includes('speed') || lower.includes('hook')) return Zap;
  if (lower.includes('web') || lower.includes('code') || lower.includes('landing')) return Code;
  if (lower.includes('design') || lower.includes('thumbnail') || lower.includes('brand')) return Palette;
  if (lower.includes('strategy') || lower.includes('plan') || lower.includes('calendar')) return Compass;
  if (lower.includes('script') || lower.includes('story')) return PenTool;
  if (lower.includes('social') || lower.includes('handling') || lower.includes('community')) return Share2;
  return Sparkles;
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#03070D] overflow-hidden">
      {/* Background Cyan Radial Horizons */}
      <div className="cyan-ambient-glow w-[36rem] h-[36rem] -top-20 left-1/4" />
      <div className="cyan-ambient-glow w-[38rem] h-[38rem] top-1/2 -right-20" />
      <div className="cyan-ambient-glow w-[36rem] h-[36rem] -bottom-20 left-1/3" />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,52,74,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,52,74,0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#080E18] border border-[#1E344A] text-xs font-mono tracking-widest text-[#00D9FF] mb-4 shadow-[0_0_15px_rgba(0,217,255,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]" />
            <span>AGENCY CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F8FAFC] leading-[1.1] mb-4">
            Our Core <span className="text-cyan-glow">Services.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#B7C4D5] leading-relaxed">
            High-converting digital growth, cinematic visual storytelling, and bespoke web architecture designed to make your brand impossible to ignore.
          </p>
        </div>

        {/* Large Futuristic Service Cards Stack (Exact Reference Blueprint) */}
        <div className="space-y-12 sm:space-y-16">
          {SERVICES.map((service, idx) => {
            const visualImage = SERVICE_VISUALS[service.id] || SERVICE_VISUALS['video-editing'];
            const whatsappUrl = getWhatsAppUrl(service.whatsappMessage);

            // Split title for two-tone styling: first word white, remainder in cyan glow
            const titleParts = service.title.split(' ');
            const firstWord = titleParts[0];
            const restOfTitle = titleParts.slice(1).join(' ');

            return (
              <div
                key={service.id}
                className="reference-card p-6 sm:p-10 lg:p-12 relative overflow-hidden"
              >
                {/* Asymmetric 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Details & Feature Capsule List (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between text-left">
                    
                    {/* Top Pill Service Badge with Extending Accent Line */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101B2A] border border-[#1E344A] text-xs font-mono font-bold tracking-wider text-[#00D9FF]">
                        <span className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]" />
                        <span>{service.number}. SERVICE</span>
                      </div>
                      <span className="hidden sm:block h-px w-24 bg-gradient-to-r from-[#1E344A] to-transparent" />
                    </div>

                    {/* Main Bold Title (Exact Reference Typography) */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
                      <span className="text-[#F8FAFC]">{firstWord} </span>
                      <span className="text-cyan-glow">{restOfTitle}</span>
                    </h3>

                    {/* Supporting Description */}
                    <p className="text-sm sm:text-base text-[#B7C4D5] max-w-xl leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Stacked 6 Feature Capsules with Icons and Chevron */}
                    <div className="space-y-2.5 mb-8">
                      {service.capabilities.map((cap, cIdx) => {
                        const CapIcon = getFeatureIcon(cap, service.id);
                        return (
                          <div
                            key={cIdx}
                            className="feature-capsule group cursor-default"
                          >
                            <div className="flex items-center gap-3.5">
                              {/* Round Icon Badge with Cyan Accent */}
                              <div className="w-8 h-8 rounded-lg bg-[#080E18] border border-[#1E344A] flex items-center justify-center text-[#00D9FF] shrink-0 group-hover:border-[#00D9FF]/60 group-hover:scale-105 transition-all">
                                <CapIcon className="w-4 h-4" />
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-[#F8FAFC] group-hover:text-[#00D9FF] transition-colors">
                                {cap}
                              </span>
                            </div>

                            <ChevronRight className="w-4 h-4 text-[#8493A8] group-hover:text-[#00D9FF] group-hover:translate-x-0.5 transition-all" />
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom Row: Specialization + Inquire Button */}
                    <div className="pt-6 border-t border-[#1E344A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Specialization Info */}
                      <div>
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00D9FF]">
                          <Star className="w-3.5 h-3.5 text-[#00D9FF] fill-[#00D9FF]" />
                          <span>Specialization:</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#B7C4D5] mt-0.5">
                          {service.highlight}
                        </p>
                      </div>

                      {/* Direct WhatsApp Pill CTA Button matching reference */}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClickSound()}
                        className="btn-inquire-pill px-5 sm:px-6 py-3 text-xs sm:text-sm flex items-center justify-center gap-2.5 shrink-0 cursor-pointer whitespace-nowrap"
                      >
                        <Play className="w-3.5 h-3.5 text-[#00D9FF] fill-[#00D9FF]" />
                        <span>Inquire {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#00D9FF]" />
                      </a>
                    </div>

                  </div>

                  {/* Right Column: 3D Holographic Illustrative Visual (5 cols) */}
                  <div className="lg:col-span-5 relative flex items-center justify-center">
                    
                    {/* Glowing circular backdrop aura */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00D9FF]/20 via-[#168BFF]/15 to-transparent blur-2xl pointer-events-none" />

                    {/* Circular orbital light rings */}
                    <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl overflow-hidden border border-[#1E344A]/80 bg-[#080E18] shadow-[0_0_40px_rgba(0,217,255,0.25)] group">
                      <img
                        src={visualImage}
                        alt={`${service.title} 3D Illustration`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="eager"
                        decoding="async"
                        width="500"
                        height="500"
                      />
                      
                      {/* Subtle Vignette Scrim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080E18] via-transparent to-transparent opacity-60" />

                      {/* Floating holographic corner tag */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2 rounded-xl bg-[#101B2A]/90 backdrop-blur-md border border-[#1E344A] text-xs font-mono">
                        <span className="text-[#00D9FF] font-bold">VIBECHECK STUDIO</span>
                        <span className="text-[#8493A8]">3D RENDER</span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Multi-Service Retainer Card */}
        <div className="mt-16 sm:mt-20 reference-card p-8 sm:p-12 text-left relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101B2A] border border-[#1E344A] text-xs font-mono text-[#00D9FF]">
                <Sparkles className="w-3.5 h-3.5 text-[#00D9FF]" />
                <span>AGENCY GROWTH RETAINER</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC]">
                Need a Custom <span className="text-cyan-glow">Multi-Service System?</span>
              </h3>
              <p className="text-sm sm:text-base text-[#B7C4D5] leading-relaxed">
                Combine cinematic video editing, custom graphic design, performance web development, and content strategy into a dedicated monthly growth retainer for your brand.
              </p>
            </div>

            <a
              href={getWhatsAppUrl(`Hi Ravi & VibeCheck Media! I need a custom multi-service growth retainer for our brand. Let's schedule a consultation!`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClickSound()}
              className="btn-primary-cyan px-6 sm:px-8 py-3.5 text-sm sm:text-base flex items-center justify-center gap-2.5 shrink-0 cursor-pointer whitespace-nowrap"
            >
              <span>Inquire Custom Retainer</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
