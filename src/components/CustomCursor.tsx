import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Follower damping loop
    let rafId: number;
    const animateFollower = () => {
      setFollowerPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      rafId = requestAnimationFrame(animateFollower);
    };
    rafId = requestAnimationFrame(animateFollower);

    // Check hovered elements
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

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousemove', handleElementHover);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', handleElementHover);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [pos.x, pos.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isClicking
              ? 'w-2 h-2 bg-[#55C8F5]'
              : isHovered
              ? 'w-2.5 h-2.5 bg-[#55C8F5]'
              : 'w-1.5 h-1.5 bg-[#F8FAFC]'
          }`}
        />
      </div>

      {/* Outer sleek trailing ring */}
      <div
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isHovered
              ? 'w-10 h-10 border border-[#55C8F5]/80 bg-[#55C8F5]/5'
              : isClicking
              ? 'w-6 h-6 border-[#55C8F5] bg-[#55C8F5]/15'
              : 'w-8 h-8 border border-[#303744] opacity-50'
          }`}
        />
      </div>
    </>
  );
};
