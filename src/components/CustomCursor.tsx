import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Follower damping loop (60/120fps hardware-accelerated without React re-renders)
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animateFollower);
    };
    rafId = requestAnimationFrame(animateFollower);

    // Check hovered interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('input') ||
        target?.closest('textarea') ||
        target?.closest('select') ||
        target?.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousemove', handleElementHover, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', handleElementHover);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isClicking
              ? 'w-2 h-2 bg-[#00D9FF] shadow-[0_0_10px_#00D9FF]'
              : isHovered
              ? 'w-2.5 h-2.5 bg-[#00D9FF] shadow-[0_0_12px_#00D9FF]'
              : 'w-1.5 h-1.5 bg-[#00D9FF]'
          }`}
        />
      </div>

      {/* Outer sleek trailing ring with Cyan Glow */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isHovered
              ? 'w-10 h-10 border border-[#00D9FF] bg-[#00D9FF]/10 shadow-[0_0_20px_rgba(0,217,255,0.4)]'
              : isClicking
              ? 'w-6 h-6 border-[#00D9FF] bg-[#00D9FF]/25 shadow-[0_0_15px_rgba(0,217,255,0.6)]'
              : 'w-8 h-8 border border-[#1E344A] opacity-60'
          }`}
        />
      </div>
    </>
  );
};
