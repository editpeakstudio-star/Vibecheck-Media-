import { useEffect, useMemo, useRef } from 'react';
import { playIntroSound } from './vibeAudio';
import './VibeCheckLogo.css';

// @@START
function buildSvg() {
  const V = 'M12 160H112L240 352L205 410Z';
  const Cc = 'M258 392C288 290 360 195 452 160C390 222 338 305 306 392ZM603 195C580 168 540 155 480 158C400 162 345 222 345 280C345 345 400 398 482 398C548 398 592 375 603 322H528C515 340 497 348 472 348C428 348 400 320 400 280C400 240 432 208 477 208C502 208 522 217 535 238H603Z';
  const swoosh = 'M187 285C260 180 400 120 640 116C490 134 360 190 300 270C275 305 255 335 240 352Z';
  const star = 'M652 70Q657 107 692 116Q657 125 652 162Q647 125 612 116Q647 107 652 70Z';
  return `<svg viewBox="-40 20 780 440" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
<defs>
<radialGradient id="vc-glowbg" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#0ea5ff" stop-opacity=".45"/><stop offset=".6" stop-color="#1d4ed8" stop-opacity=".12"/><stop offset="1" stop-color="#1d4ed8" stop-opacity="0"/></radialGradient>
<linearGradient id="vc-white" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dfe9f5"/></linearGradient>
<linearGradient id="vc-blue" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#0b5bff"/><stop offset=".55" stop-color="#1fa2ff"/><stop offset="1" stop-color="#9fe7ff"/></linearGradient>
<linearGradient id="vc-sw" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7fd8ff" stop-opacity="0"/><stop offset=".5" stop-color="#bfeaff" stop-opacity=".9"/><stop offset="1" stop-color="#7fd8ff" stop-opacity="0"/></linearGradient>
<filter id="vc-glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<clipPath id="vc-wipe"><rect class="vc-wipe" x="150" y="40" width="560" height="360"/></clipPath>
<clipPath id="vc-letters"><path d="${V}"/><path d="${Cc}"/></clipPath>
</defs>
<ellipse class="vc-a" style="--d:0s" cx="350" cy="260" rx="420" ry="230" fill="url(#vc-glowbg)"/>
<g filter="url(#vc-glow)">
<path class="vc-line" style="--d:.25s" pathLength="1" d="${V}"/>
<path class="vc-line" style="--d:.55s" pathLength="1" d="${Cc}"/>
</g>
<g class="vc-a" style="--d:1.1s">
<path d="${V}" fill="url(#vc-white)"/>
<path d="${Cc}" fill="url(#vc-white)"/>
</g>
<g clip-path="url(#vc-letters)"><polygon class="vc-sweep" points="-60,60 20,60 -20,430 -100,430" fill="url(#vc-sw)"/></g>
<g clip-path="url(#vc-wipe)"><path d="${swoosh}" fill="url(#vc-blue)" filter="url(#vc-glow)"/></g>
<circle class="vc-ring" cx="652" cy="116" r="30" fill="none" stroke="#7fd8ff" stroke-width="3"/>
<path class="vc-star" d="${star}" fill="#d6f3ff" filter="url(#vc-glow)"/>
</svg>`;
}
// @@END

export interface VibeCheckLogoProps {
  /** Play the intro animation. When false the finished logo is shown instantly. */
  animate?: boolean;
  /** Synthesized intro sound (Web Audio). Browsers need a prior click/tap for audio. */
  sound?: boolean;
  /** Playback speed multiplier for animation and sound (1 = normal). */
  speed?: number;
  className?: string;
}

export default function VibeCheckLogo({ animate = true, sound = false, speed = 1, className = '' }: VibeCheckLogoProps) {
  const svg = useMemo(() => buildSvg(), []);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!animate) return;
    ref.current?.getAnimations({ subtree: true }).forEach((a) => a.updatePlaybackRate(speed));
  }, [animate, speed]);
  useEffect(() => {
    if (!sound || !animate) return;
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    let cancelled = false;
    let played = false;
    const begin = Date.now();
    // Plays right away if the browser allows sound; otherwise on the visitor's first
    // tap/key press during the intro, jumping to the matching point so it stays in sync.
    const tryPlay = () => {
      void ctx.resume().then(() => {
        if (cancelled || played || ctx.state !== 'running') return;
        played = true;
        playIntroSound(ctx, speed, ((Date.now() - begin) / 1000) * speed);
      });
    };
    tryPlay();
    const evs = ['pointerdown', 'touchstart', 'keydown'];
    evs.forEach((e) => window.addEventListener(e, tryPlay));
    return () => {
      cancelled = true;
      evs.forEach((e) => window.removeEventListener(e, tryPlay));
      void ctx.close();
    };
  }, [sound, animate, speed]);
  return (
    <div
      ref={ref}
      className={`vc-logo ${animate ? '' : 'vc-static'} ${className}`.trim()}
      role="img"
      aria-label="VibeCheck Media logo"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
