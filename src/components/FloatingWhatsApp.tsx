import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, X } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const FloatingWhatsApp: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setShowBackToTop(currentScroll > 320);

      if (totalScroll > 0) {
        setScrollProgress(Math.min((currentScroll / totalScroll) * 100, 100));
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
          className="relative w-10 h-10 rounded-full bg-[#171B24]/90 backdrop-blur-md border border-[#303744] text-[#A7B0C0] hover:text-[#55C8F5] hover:border-[#55C8F5] transition-all shadow-lg shadow-black/60 flex items-center justify-center cursor-pointer group"
        >
          {/* Circular SVG progress track */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 36 36">
            <path
              className="text-[#1D2430]"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-[#55C8F5]"
              strokeDasharray={`${scrollProgress}, 100`}
              strokeWidth="2.5"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Floating WhatsApp Action with Tooltip */}
      <div className="relative flex items-center">
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 mr-3 px-3 py-1.5 rounded-xl bg-[#171B24]/95 backdrop-blur-md border border-[#303744] text-xs font-mono text-[#F8FAFC] shadow-xl shadow-black/60 animate-in fade-in duration-300">
            <span>Direct chat with Ravi</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#788597] hover:text-[#F8FAFC] p-0.5"
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
          aria-label="Open WhatsApp conversation with VibeCheck Media"
          onClick={() => soundManager.playClickSound()}
          className="relative w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/50 hover:bg-[#20bd5a] transition-all transform hover:scale-105 cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
        </a>
      </div>
    </div>
  );
};
