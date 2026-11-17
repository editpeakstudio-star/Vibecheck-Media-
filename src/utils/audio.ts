/**
 * Procedural Web Audio API sound synthesizer for VibeCheck Media
 * Generates futuristic mechanical, servo, and energy chime sound effects without any external audio files.
 */

class SoundController {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;

  constructor() {
    // Sound starts unmuted but won't play until user interaction or intro start
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vibecheck_sound_muted');
      if (saved !== null) {
        this.muted = saved === 'true';
      }
    }
  }

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public setMuted(muted: boolean) {
    this.muted = muted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('vibecheck_sound_muted', String(muted));
    }
  }

  public toggleMute(): boolean {
    this.setMuted(!this.muted);
    return this.muted;
  }

  // Step 1: System Activation (Subtle electronic humming tone + frequency rise)
  public playSystemActivationSound() {
    if (this.muted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(60, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 1.2);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.4);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.4);
    } catch {
      // Audio error silently caught
    }
  }

  // Step 2: Mechanical Armor Opening (Metallic hydraulic servo + slide clicks)
  public playMechanicalUnlockSound() {
    if (this.muted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      // Part 1: Hydraulic slide sound
      const bufferSize = ctx.sampleRate * 0.8;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.3));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, ctx.currentTime);
      filter.frequency.linearRampToValueAtTime(2200, ctx.currentTime + 0.6);
      filter.Q.value = 4.0;

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.05, ctx.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.7);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noise.start(ctx.currentTime);

      // Part 2: High tech mechanical latch clicks
      [0.05, 0.18, 0.32, 0.5].forEach((delay) => {
        const clickOsc = ctx.createOscillator();
        const clickGain = ctx.createGain();
        clickOsc.type = 'sine';
        clickOsc.frequency.setValueAtTime(1200 + Math.random() * 400, ctx.currentTime + delay);
        clickOsc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + delay + 0.06);

        clickGain.gain.setValueAtTime(0.08, ctx.currentTime + delay);
        clickGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.06);

        clickOsc.connect(clickGain);
        clickGain.connect(ctx.destination);

        clickOsc.start(ctx.currentTime + delay);
        clickOsc.stop(ctx.currentTime + delay + 0.07);
      });
    } catch {
      // Audio error silently caught
    }
  }

  // Step 3: Energy Core Surge
  public playEnergyCoreSurgeSound() {
    if (this.muted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(130, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(520, ctx.currentTime + 0.8);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.0);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.0);
    } catch {
      // Audio error caught
    }
  }

  // Step 4: Logo Reveal Chime (Harmonic crystal chord)
  public playLogoChimeSound() {
    if (this.muted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      // Chord frequencies: C#5, E5, G#5, B5 (futuristic minor 7th)
      const frequencies = [554.37, 659.25, 830.61, 987.77];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.04);

        gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.04);
        gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + idx * 0.04 + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.04 + 1.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.04);
        osc.stop(ctx.currentTime + idx * 0.04 + 1.6);
      });
    } catch {
      // Audio error caught
    }
  }

  // Generic subtle UI click sound
  public playClickSound() {
    if (this.muted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Audio error caught
    }
  }
}

export const soundManager = new SoundController();
