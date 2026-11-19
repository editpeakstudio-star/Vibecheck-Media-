import React, { useEffect, useRef, useState } from 'react';

interface FadeScrollSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  initialVisible?: boolean;
}

export const FadeScrollSection: React.FC<FadeScrollSectionProps> = ({
  children,
  id,
  className = '',
  initialVisible = false,
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState<boolean>(initialVisible);

  useEffect(() => {
    if (initialVisible) return;
    const el = domRef.current;
    if (!el) return;

    // Respect user's motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    // Smooth reveal once entering viewport; stays visible to prevent scroll-up jumping
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      {
        threshold: 0.01,
        rootMargin: '400px 0px 200px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [initialVisible]);

  return (
    <div
      ref={domRef}
      id={id}
      className={`fade-scroll-section ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
