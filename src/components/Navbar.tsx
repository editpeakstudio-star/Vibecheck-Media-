import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { BRAND } from '../data/agencyData';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  onReplayIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMuted, setIsMuted] = useState(soundManager.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'portfolio', 'process', 'founder', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Work', href: '#portfolio', id: 'portfolio' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Founder', href: '#founder', id: 'founder' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const toggleSound = () => {
    const next = soundManager.toggleMute();
    setIsMuted(next);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundManager.playClickSound();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080A0F]/90 backdrop-blur-md border-b border-[#222A36] py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Clean Brand Wordmark & Official Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55C8F5] rounded-lg"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#303744] bg-[#10141C] p-0.5 group-hover:border-[#55C8F5]/60 transition-colors">
              <img
                src={BRAND.logoImage}
                alt="VibeCheck Media"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-display text-base sm:text-lg font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#55C8F5] transition-colors whitespace-nowrap">
              VIBECHECK <span className="text-[#55C8F5]">MEDIA</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Clean Single-Line Typography) */}
          <nav className="hidden md:flex items-center gap-7 text-xs lg:text-sm font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-200 font-sans ${
                    isActive
                      ? 'text-[#F8FAFC] font-semibold'
                      : 'text-[#A7B0C0] hover:text-[#F8FAFC]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#55C8F5] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              type="button"
              title={isMuted ? 'Turn Sound On' : 'Mute Sound'}
              aria-label={isMuted ? 'Turn Sound On' : 'Mute Sound'}
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg border border-[#222A36] bg-[#10141C] text-[#A7B0C0] hover:text-[#F8FAFC] hover:border-[#303744] transition-all cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#788597]" /> : <Volume2 className="w-3.5 h-3.5 text-[#55C8F5]" />}
            </button>

            {/* Replay 3D Intro Button */}
            <button
              onClick={() => {
                soundManager.playClickSound();
                onReplayIntro();
              }}
              type="button"
              title="Replay 3D Titanium Opening"
              aria-label="Replay 3D Titanium Opening"
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#222A36] bg-[#10141C] text-xs font-mono text-kicker text-[#A7B0C0] hover:text-[#F8FAFC] hover:border-[#303744] transition-all cursor-pointer"
            >
              <Play className="w-3 h-3 text-[#55C8F5] fill-[#55C8F5]/30" />
              <span>3D INTRO</span>
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-[#080A0F] rounded-lg bg-[#55C8F5] hover:bg-[#72D3F7] glow-cyan-button transition-all transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer font-sans"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-[#222A36] bg-[#10141C] text-[#F8FAFC] hover:text-[#55C8F5] focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#222A36] bg-[#080A0F]/95 backdrop-blur-xl px-4 py-5 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors font-sans ${
                  activeSection === link.id
                    ? 'bg-[#1D2430] text-[#55C8F5] border border-[#303744]'
                    : 'text-[#A7B0C0] hover:text-[#F8FAFC] hover:bg-[#10141C]'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-[#222A36] flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                type="button"
                className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-kicker text-[#A7B0C0] border border-[#222A36] rounded-lg bg-[#10141C]"
              >
                <Play className="w-3 h-3 text-[#55C8F5] fill-[#55C8F5]" />
                <span>Replay 3D Intro</span>
              </button>

              <button
                onClick={toggleSound}
                type="button"
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#A7B0C0] border border-[#222A36] rounded-lg bg-[#10141C]"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#55C8F5]" />}
                <span>{isMuted ? 'Muted' : 'Sound'}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
