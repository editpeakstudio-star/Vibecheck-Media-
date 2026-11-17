import React from 'react';
import { Mail, Instagram, MessageSquare, ArrowUp, Sparkles } from 'lucide-react';
import { BRAND, SERVICES, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

interface FooterProps {
  onReplayIntro: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundManager.playClickSound();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    soundManager.playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03070D] border-t border-[#1E344A] pt-16 pb-12 overflow-hidden text-left">
      {/* Background Cyan Ambient Glow */}
      <div className="cyan-ambient-glow w-[36rem] h-[36rem] -bottom-20 left-1/3" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1E344A]">
          
          {/* Col 1: Brand Info & Reference Stylized Logo (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              {/* Reference Stylized Double-V Cyan Mark */}
              <div className="w-10 h-10 rounded-xl bg-[#080E18] border border-[#1E344A] p-2 flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.35)] shrink-0">
                <svg viewBox="0 0 40 34" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 6L18 30L26 15"
                    stroke="#00D9FF"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 6L28 28L36 14"
                    stroke="#168BFF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-display text-lg font-black tracking-tight text-[#F8FAFC]">
                  VIBE CHECK <span className="text-[#00D9FF]">MEDIA</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#8493A8]">
                  {BRAND.subtitle}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#B7C4D5] leading-relaxed max-w-sm font-normal">
              {BRAND.description}
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                onClick={() => soundManager.playClickSound()}
                className="w-9 h-9 rounded-xl bg-[#101B2A] border border-[#1E344A] flex items-center justify-center text-[#B7C4D5] hover:text-[#00D9FF] hover:border-[#00D9FF] hover:shadow-[0_0_15px_rgba(0,217,255,0.3)] transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BRAND.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                onClick={() => soundManager.playClickSound()}
                className="w-9 h-9 rounded-xl bg-[#101B2A] border border-[#1E344A] flex items-center justify-center text-[#B7C4D5] hover:text-[#00D9FF] hover:border-[#00D9FF] hover:shadow-[0_0_15px_rgba(0,217,255,0.3)] transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                aria-label="Email"
                onClick={() => soundManager.playClickSound()}
                className="w-9 h-9 rounded-xl bg-[#101B2A] border border-[#1E344A] flex items-center justify-center text-[#B7C4D5] hover:text-[#00D9FF] hover:border-[#00D9FF] hover:shadow-[0_0_15px_rgba(0,217,255,0.3)] transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClickSound();
                  onReplayIntro();
                }}
                className="px-3 py-1.5 rounded-full bg-[#101B2A] border border-[#1E344A] text-[11px] font-mono text-[#00D9FF] hover:border-[#00D9FF] hover:shadow-[0_0_12px_rgba(0,217,255,0.25)] transition-all cursor-pointer"
              >
                Replay 3D Intro
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold text-[#00D9FF] tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#B7C4D5] font-sans">
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="hover:text-[#00D9FF] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-[#00D9FF] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleScrollTo(e, '#portfolio')} className="hover:text-[#00D9FF] transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:text-[#00D9FF] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleScrollTo(e, '#process')} className="hover:text-[#00D9FF] transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#founder" onClick={(e) => handleScrollTo(e, '#founder')} className="hover:text-[#00D9FF] transition-colors">
                  Founder
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:text-[#00D9FF] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: All Six Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold text-[#00D9FF] tracking-wider uppercase mb-4">
              Core Disciplines
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#B7C4D5] font-sans">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a
                    href={getWhatsAppUrl(srv.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClickSound()}
                    className="hover:text-[#00D9FF] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#00D9FF] text-xs">›</span>
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Channels (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold text-[#00D9FF] tracking-wider uppercase mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#B7C4D5] font-sans">
              <div>
                <span className="block text-[11px] font-mono text-[#8493A8]">Direct Inquiries</span>
                <a href={`mailto:${BRAND.email}`} className="text-[#F8FAFC] hover:text-[#00D9FF] transition-colors">
                  {BRAND.email}
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-mono text-[#8493A8]">WhatsApp & Phone</span>
                <a href={`https://wa.me/${BRAND.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="text-[#F8FAFC] hover:text-[#00D9FF] transition-colors">
                  {BRAND.phone}
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-mono text-[#8493A8]">Instagram</span>
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-[#F8FAFC] hover:text-[#00D9FF] transition-colors">
                  {BRAND.instagramHandle}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8493A8]">
          <div>
            © 2026 VibeCheck Media. All rights reserved. Founder: {BRAND.founder}.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-[#B7C4D5] hover:text-[#00D9FF] transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00D9FF]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
