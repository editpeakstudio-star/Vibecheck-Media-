import React, { useState, useEffect } from 'react';
import { Menu, X, LayoutGrid, Briefcase, User, Mail, ArrowRight, Play, Volume2, VolumeX } from 'lucide-react';
import { BRAND } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('services');
  const [isMuted, setIsMuted] = useState(soundManager.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'portfolio', 'about', 'process', 'founder', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services', id: 'services', icon: LayoutGrid },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio', icon: Briefcase },
    { label: 'About', href: '#about', id: 'about', icon: User },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
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
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 pt-3 sm:pt-5 pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <nav
          className={`rounded-full border border-[#1E344A] px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 flex items-center justify-between gap-4 shadow-[0_0_35px_rgba(0,217,255,0.14)] ${
            scrolled
              ? 'bg-[#080E18]/92 backdrop-blur-xl shadow-[0_0_45px_rgba(0,217,255,0.22)] border-[#1E344A]/90'
              : 'bg-[#080E18]/80 backdrop-blur-lg'
          }`}
        >
          {/* Brand Logo & Wordmark matching Reference */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF] rounded-full"
          >
            {/* Double-V Futuristic Cyan Icon Mark matching reference */}
            <div className="relative w-8 h-8 rounded-lg flex items-center justify-center p-0.5">
              <svg className="w-7 h-7 drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]" viewBox="0 0 32 32" fill="none">
                <path
                  d="M4 8L16 26L28 8"
                  stroke="url(#vGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 8L16 18L22 8"
                  stroke="#00D9FF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="vGrad" x1="4" y1="8" x2="28" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00D9FF" />
                    <stop offset="1" stopColor="#168BFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Typography: VIBE CHECK (white) / MEDIA (cyan) */}
            <div className="flex flex-col text-left leading-none">
              <span className="font-display font-black text-xs sm:text-sm tracking-wider text-[#F8FAFC]">
                VIBE CHECK
              </span>
              <span className="font-display font-extrabold text-[10px] sm:text-xs tracking-widest text-[#00D9FF] mt-0.5">
                MEDIA
              </span>
            </div>
          </a>

          {/* Navigation Links with Icons (Exact Reference Styling) */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5 text-xs lg:text-sm font-medium">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <div key={item.id} className="relative flex flex-col items-center">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#101B2A] border border-[#1E344A] text-[#00D9FF] shadow-[0_0_15px_rgba(0,217,255,0.2)] font-semibold'
                        : 'text-[#B7C4D5] hover:text-[#F8FAFC] hover:bg-[#101B2A]/50'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#00D9FF]' : 'text-[#8493A8]'}`} />
                    <span>{item.label}</span>
                  </a>

                  {/* Active Underline Glowing Bar */}
                  {isActive && (
                    <span className="absolute -bottom-1.5 w-7 h-0.5 bg-[#00D9FF] rounded-full shadow-[0_0_10px_#00D9FF]" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Action Section */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              type="button"
              title={isMuted ? 'Turn Sound On' : 'Mute Sound'}
              aria-label={isMuted ? 'Turn Sound On' : 'Mute Sound'}
              className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full border border-[#1E344A] bg-[#101B2A] text-[#B7C4D5] hover:text-[#00D9FF] hover:border-[#00D9FF]/40 transition-all cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#8493A8]" /> : <Volume2 className="w-3.5 h-3.5 text-[#00D9FF]" />}
            </button>

            {/* Glowing Pill "Get in Touch" Button matching reference */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary-cyan px-4 sm:px-5 py-2 text-xs sm:text-sm flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>

            {/* Circular Hamburger Menu Button matching reference */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="w-9 h-9 rounded-full bg-[#101B2A] border border-[#1E344A] text-[#F8FAFC] hover:text-[#00D9FF] hover:border-[#00D9FF]/60 flex items-center justify-center cursor-pointer transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu with matching reference styling */}
        {mobileMenuOpen && (
          <div className="mt-2 rounded-2xl bg-[#080E18]/95 backdrop-blur-xl border border-[#1E344A] p-4 shadow-[0_0_40px_rgba(0,217,255,0.2)] animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#101B2A] border border-[#00D9FF]/50 text-[#00D9FF] shadow-[0_0_15px_rgba(0,217,255,0.25)]'
                        : 'text-[#B7C4D5] hover:text-white hover:bg-[#101B2A]/40'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#00D9FF]" />
                    <span>{item.label}</span>
                  </a>
                );
              })}

              <div className="pt-2 border-t border-[#1E344A] flex items-center justify-between gap-2">
                <button
                  onClick={toggleSound}
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#B7C4D5] border border-[#1E344A] rounded-xl bg-[#101B2A]"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#00D9FF]" />}
                  <span>{isMuted ? 'Muted' : 'Sound'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
