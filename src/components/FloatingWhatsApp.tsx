import React, { useState, useEffect } from 'react';
import { ArrowUp, X, MessageSquare } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const FloatingWhatsApp: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);

  // Throttled high-performance scroll handler via requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;

          const shouldShowTop = currentScroll > 320;
          setShowBackToTop((prev) => (prev !== shouldShowTop ? shouldShowTop : prev));

          if (totalScroll > 0) {
            const nextProgress = Math.round(Math.min((currentScroll / totalScroll) * 100, 100));
            setScrollProgress((prev) => (Math.abs(prev - nextProgress) >= 1 ? nextProgress : prev));
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    soundManager.playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Back to top with circular scroll progress */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="relative w-10 h-10 rounded-full bg-[#080E18]/90 backdrop-blur-md border border-[#1E344A] text-[#B7C4D5] hover:text-[#00D9FF] hover:border-[#00D9FF] transition-all duration-250 shadow-lg shadow-black/60 flex items-center justify-center cursor-pointer group active:scale-95"
        >
          {/* Circular SVG progress track */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 36 36">
            <path
              className="text-[#101B2A]"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-[#00D9FF]"
              strokeDasharray={`${scrollProgress}, 100`}
              strokeWidth="2.5"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-250" />
        </button>
      )}

      {/* Floating Cyan Chat Button matching Reference Blueprint */}
      <div className="relative flex items-center">
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-1.5 rounded-full bg-[#080E18]/95 backdrop-blur-md border border-[#1E344A] text-xs font-mono text-[#F8FAFC] shadow-xl shadow-black/60 animate-in fade-in duration-200">
            <span className="text-[#00D9FF] font-semibold">Chat with VibeCheck</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#8493A8] hover:text-[#F8FAFC] p-0.5 transition-colors duration-250"
              aria-label="Close tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        <a
          href={getWhatsAppUrl(`Hi Ravi! I'm browsing your VibeCheck Media website and would love to discuss a project with you!`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open chat conversation with VibeCheck Media"
          onClick={() => soundManager.playClickSound()}
          className="relative w-13 h-13 rounded-full bg-gradient-to-tr from-[#00D9FF] to-[#168BFF] text-[#03070D] flex items-center justify-center shadow-[0_0_30px_rgba(0,217,255,0.7)] hover:shadow-[0_0_40px_rgba(0,217,255,0.95)] transition-all duration-250 transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          {/* Subtle pulse aura */}
          <span className="absolute -inset-1 rounded-full border border-[#00D9FF]/50 animate-ping opacity-40 pointer-events-none" />
          <MessageSquare className="w-6 h-6 fill-[#03070D] text-[#03070D]" />
        </a>
      </div>
    </div>
  );
};
