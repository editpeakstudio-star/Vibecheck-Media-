import React from 'react';
import { Mail, Instagram, MessageSquare, ArrowUp } from 'lucide-react';
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
    <footer className="relative bg-[#080A0F] border-t border-[#222A36] pt-16 pb-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#222A36]">
          
          {/* Col 1: Brand Info & Official Logo (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden border border-[#303744] bg-[#10141C] p-0.5">
                <img
                  src={BRAND.logoImage}
                  alt="VibeCheck Media"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-[#F8FAFC]">
                  VIBECHECK <span className="text-[#55C8F5]">MEDIA</span>
                </span>
                <span className="text-[10px] font-mono text-kicker text-[#788597]">
                  {BRAND.subtitle}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A7B0C0] leading-relaxed max-w-sm font-normal">
              {BRAND.description}
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                onClick={() => soundManager.playClickSound()}
                className="w-8 h-8 rounded-lg bg-[#10141C] border border-[#222A36] flex items-center justify-center text-[#A7B0C0] hover:text-[#55C8F5] hover:border-[#303744] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BRAND.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                onClick={() => soundManager.playClickSound()}
                className="w-8 h-8 rounded-lg bg-[#10141C] border border-[#222A36] flex items-center justify-center text-[#A7B0C0] hover:text-[#55C8F5] hover:border-[#303744] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                aria-label="Email"
                onClick={() => soundManager.playClickSound()}
                className="w-8 h-8 rounded-lg bg-[#10141C] border border-[#222A36] flex items-center justify-center text-[#A7B0C0] hover:text-[#55C8F5] hover:border-[#303744] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClickSound();
                  onReplayIntro();
                }}
                className="px-2.5 py-1.5 rounded-lg bg-[#10141C] border border-[#222A36] text-[11px] font-mono text-kicker text-[#A7B0C0] hover:text-[#55C8F5] hover:border-[#303744] transition-colors cursor-pointer"
              >
                Replay 3D Intro
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono text-kicker font-bold text-[#55C8F5] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A7B0C0] font-sans">
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="hover:text-[#F8FAFC] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:text-[#F8FAFC] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-[#F8FAFC] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleScrollTo(e, '#portfolio')} className="hover:text-[#F8FAFC] transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleScrollTo(e, '#process')} className="hover:text-[#F8FAFC] transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#founder" onClick={(e) => handleScrollTo(e, '#founder')} className="hover:text-[#F8FAFC] transition-colors">
                  Founder
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:text-[#F8FAFC] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: All Six Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono text-kicker font-bold text-[#55C8F5] mb-4">
              Core Disciplines
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A7B0C0] font-sans">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a
                    href={getWhatsAppUrl(srv.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClickSound()}
                    className="hover:text-[#55C8F5] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#303744] text-xs">›</span>
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Channels (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono text-kicker font-bold text-[#55C8F5] mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#A7B0C0] font-sans">
              <div>
                <span className="block text-[11px] font-mono text-kicker text-[#788597]">Direct Inquiries</span>
                <a href={`mailto:${BRAND.email}`} className="text-[#F8FAFC] hover:text-[#55C8F5] transition-colors">
                  {BRAND.email}
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-mono text-kicker text-[#788597]">WhatsApp & Phone</span>
                <a href={`https://wa.me/${BRAND.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="text-[#F8FAFC] hover:text-[#55C8F5] transition-colors">
                  {BRAND.phone}
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-mono text-kicker text-[#788597]">Instagram</span>
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-[#F8FAFC] hover:text-[#55C8F5] transition-colors">
                  {BRAND.instagramHandle}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#788597]">
          <div>
            © 2026 VibeCheck Media. All rights reserved. Founder: {BRAND.founder}.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-[#A7B0C0] hover:text-[#55C8F5] transition-colors cursor-pointer text-kicker"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#55C8F5]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
