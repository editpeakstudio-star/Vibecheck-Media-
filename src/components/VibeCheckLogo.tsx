import { useEffect, useMemo, useRef } from 'react';
import { playIntroSound } from './vibeAudio';
import './VibeCheckLogo.css';

// @@START
function buildSvg() {
  const C = 500;
  const pt = (r: number, a: number) => {
    const t = ((a - 90) * Math.PI) / 180;
    return [C + r * Math.cos(t), C + r * Math.sin(t)];
  };
  const arc = (r: number, a0: number, a1: number) => {
    const [x0, y0] = pt(r, a0);
    const [x1, y1] = pt(r, a1);
    return `M${x0.toFixed(2)} ${y0.toFixed(2)}A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
  };

  // Segmented HUD arcs (gap centred at 12 o'clock like the reference)
  const cols = ['#ffffff', '#a65cff', '#f1e6ff', '#c58bff'];
  let segs = '';
  for (let k = 0; k < 8; k++) {
    const mid = 22.5 + k * 45;
    const col = k % 2 === 0 ? (k % 4 === 0 ? cols[0] : cols[2]) : (k % 4 === 1 ? cols[1] : cols[3]);
    segs += `<path class="vc-a vc-seg" style="--d:${(3.2 + k * 0.28).toFixed(2)}s" d="${arc(335, mid - 17, mid + 17)}" stroke="${col}" stroke-width="15" fill="none" filter="url(#vc-glow)"/>`;
  }
  // thin outer partial arcs
  let thin = '';
  for (let k = 0; k < 8; k++) {
    thin += `<path d="${arc(362, k * 45 + 6, k * 45 + 30)}" stroke="#8b5cf6" stroke-opacity=".55" stroke-width="2" fill="none"/>`;
  }
  // cardinal tick markers
  let ticks = '';
  for (let k = 0; k < 4; k++) {
    const [x0, y0] = pt(262, k * 90);
    const [x1, y1] = pt(280, k * 90);
    ticks += `<line x1="${x0.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}" stroke="#e9d8ff" stroke-width="3" stroke-linecap="round"/>`;
  }
  // deterministic particles
  let s = 7;
  const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  let parts = '';
  for (let i = 0; i < 40; i++) {
    const a = rnd() * 360;
    const r = 330 + rnd() * 170;
    const [x, y] = pt(r, a);
    parts += `<circle class="vc-p" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(0.9 + rnd() * 2).toFixed(1)}" fill="${rnd() > 0.5 ? '#b794ff' : '#7c3aed'}" style="--d:${(3 + rnd() * 3).toFixed(1)}s;--t:${(5 + rnd() * 6).toFixed(1)}s;--dx:${(rnd() * 24 - 12).toFixed(0)}px;--dy:${(rnd() * 24 - 12).toFixed(0)}px"/>`;
  }

  const V = 'M335 418H402L440 540L486 418H508L452 592H424Z';
  const Cc = 'M663 456A66 76 0 1 0 663 554';
  const swoosh = 'M440 592C450 482 560 386 706 368C600 408 520 470 470 578Z';
  const star = 'M706 336Q711 363 738 368Q711 373 706 400Q701 373 674 368Q701 363 706 336Z';

  return `<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
<defs>
<radialGradient id="vc-bg" cx="50%" cy="50%" r="70%"><stop offset="0" stop-color="#140a2e"/><stop offset=".6" stop-color="#070818"/><stop offset="1" stop-color="#03030c"/></radialGradient>
<radialGradient id="vc-core" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#8b2ff7" stop-opacity=".75"/><stop offset=".5" stop-color="#5b21b6" stop-opacity=".3"/><stop offset="1" stop-color="#5b21b6" stop-opacity="0"/></radialGradient>
<radialGradient id="vc-disc" cx="50%" cy="35%" r="75%"><stop offset="0" stop-color="#26262e"/><stop offset=".45" stop-color="#07070b"/><stop offset="1" stop-color="#000"/></radialGradient>
<linearGradient id="vc-gloss" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9aa4b4" stop-opacity=".55"/><stop offset="1" stop-color="#9aa4b4" stop-opacity="0"/></linearGradient>
<linearGradient id="vc-silver" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".35" stop-color="#d7d9e8"/><stop offset=".55" stop-color="#9ea1ba"/><stop offset=".75" stop-color="#f3f3fb"/><stop offset="1" stop-color="#8e91aa"/></linearGradient>
<linearGradient id="vc-purple" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#5b12d6"/><stop offset=".5" stop-color="#8b3dff"/><stop offset="1" stop-color="#d2b4ff"/></linearGradient>
<linearGradient id="vc-bezel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9dbe8"/><stop offset=".5" stop-color="#2a2a38"/><stop offset="1" stop-color="#a9acc2"/></linearGradient>
<linearGradient id="vc-sw" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
<filter id="vc-glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<filter id="vc-glow2" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="14" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<mask id="vc-m"><path d="${V}" fill="#fff"/><path d="${Cc}" stroke="#fff" stroke-width="38" fill="none"/></mask>
</defs>
<rect width="1000" height="1000" fill="url(#vc-bg)"/>
<circle class="vc-a" style="--d:0s" cx="500" cy="500" r="430" fill="url(#vc-core)"/>
<g>${parts}</g>
<circle class="vc-draw" style="--d:.8s" pathLength="1" cx="500" cy="500" r="392" fill="none" stroke="#b78cff" stroke-width="7" filter="url(#vc-glow2)" transform="rotate(-90 500 500)"/>
<circle class="vc-a" style="--d:2.4s" cx="500" cy="500" r="374" fill="none" stroke="#8b5cf6" stroke-opacity=".6" stroke-width="2"/>
<g class="vc-a vc-rot" style="--d:2.2s">${thin}</g>
<circle class="vc-a" style="--d:2.6s" cx="500" cy="500" r="318" fill="none" stroke="#7c3aed" stroke-opacity=".55" stroke-width="2"/>
<circle class="vc-a" style="--d:2.8s" cx="500" cy="500" r="300" fill="none" stroke="#a78bfa" stroke-opacity=".4" stroke-width="1.5"/>
<g class="vc-arcs">${segs}</g>
<circle class="vc-a vc-spin" style="--d:3.6s" cx="500" cy="500" r="262" fill="none" stroke="#cdb8ff" stroke-opacity=".75" stroke-width="2.5" stroke-dasharray="1.5 7" stroke-linecap="round"/>
<g class="vc-a" style="--d:3.8s">${ticks}</g>
<circle class="vc-a" style="--d:3.9s" cx="500" cy="500" r="240" fill="none" stroke="url(#vc-bezel)" stroke-width="12"/>
<circle class="vc-a" style="--d:3.9s" cx="500" cy="500" r="228" fill="url(#vc-disc)" stroke="#6d28d9" stroke-opacity=".7" stroke-width="2"/>
<ellipse class="vc-a" style="--d:4.2s" cx="500" cy="390" rx="150" ry="80" fill="url(#vc-gloss)"/>
<g class="vc-a vc-mono" style="--d:5.2s">
<path d="${V}" fill="url(#vc-silver)" stroke="#7a3df0" stroke-width="4" stroke-linejoin="round"/>
<path d="${Cc}" fill="none" stroke="#7a3df0" stroke-width="46"/>
<path d="${Cc}" fill="none" stroke="url(#vc-silver)" stroke-width="37"/>
</g>
<g mask="url(#vc-m)"><polygon class="vc-sweep" points="250,380 340,380 300,620 210,620" fill="url(#vc-sw)"/></g>
<path class="vc-a" style="--d:6.2s" d="${swoosh}" fill="url(#vc-purple)" filter="url(#vc-glow)"/>
<path class="vc-a vc-star" style="--d:6.7s" d="${star}" fill="#e4d2ff" filter="url(#vc-glow2)"/>
</svg>`;
}
// @@END

export interface VibeCheckLogoProps {
  /** Play the cinematic intro. When false the finished logo is shown instantly. */
  animate?: boolean;
  /** Synthesized intro sound (Web Audio). Browsers need a prior click/tap for audio. */
  sound?: boolean;
  /** Playback speed multiplier for animation and sound (1 = original, 1.7 = default). */
  speed?: number;
  className?: string;
}

export default function VibeCheckLogo({ animate = true, sound = false, speed = 1.7, className = '' }: VibeCheckLogoProps) {
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
