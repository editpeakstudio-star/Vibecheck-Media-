// @@START
// Minimal "glass bell" sound: soft sub swell, one airy breath, pentatonic FM bells.
function playIntroSound(ctx: AudioContext, sp = 1, off = 0) {
  const t0 = ctx.currentTime + 0.1 - off / sp;
  const master = ctx.createGain();
  master.gain.value = 0.5;
  const comp = ctx.createDynamicsCompressor();
  master.connect(comp);
  comp.connect(ctx.destination);
  const len = ctx.sampleRate * 2;
  const nb = ctx.createBuffer(1, len, ctx.sampleRate);
  const nd = nb.getChannelData(0);
  for (let i = 0; i < len; i++) nd[i] = Math.random() * 2 - 1;

  const env = (g: GainNode, t: number, a: number, peak: number, dur: number) => {
    g.gain.setValueAtTime(0.0001, t0 + t / sp);
    g.gain.exponentialRampToValueAtTime(peak, t0 + (t + a) / sp);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + (t + dur) / sp);
  };
  const sine = (f0: number, f1: number, t: number, a: number, dur: number, peak: number) => {
    if (t < off) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.setValueAtTime(f0, t0 + t / sp);
    o.frequency.exponentialRampToValueAtTime(f1, t0 + (t + dur) / sp);
    env(g, t, a, peak, dur);
    o.connect(g);
    g.connect(master);
    o.start(t0 + t / sp);
    o.stop(t0 + (t + dur) / sp + 0.1);
  };
  const bell = (f: number, t: number, peak: number, dur: number) => {
    if (t < off) return;
    const o = ctx.createOscillator();
    const m = ctx.createOscillator();
    const mg = ctx.createGain();
    const g = ctx.createGain();
    o.frequency.value = f;
    m.frequency.value = f * 3.5;
    mg.gain.setValueAtTime(f * 1.4, t0 + t / sp);
    mg.gain.exponentialRampToValueAtTime(1, t0 + (t + dur) / sp);
    m.connect(mg);
    mg.connect(o.frequency);
    env(g, t, 0.004, peak, dur);
    o.connect(g);
    g.connect(master);
    const end = t0 + (t + dur) / sp + 0.1;
    o.start(t0 + t / sp);
    m.start(t0 + t / sp);
    o.stop(end);
    m.stop(end);
  };

  // soft sub swell under everything
  sine(55, 82, 0, 2.5, 6.5, 0.35);
  // one airy breath across ring draw + arc spin
  const s = ctx.createBufferSource();
  const f = ctx.createBiquadFilter();
  const g = ctx.createGain();
  s.buffer = nb;
  s.loop = true;
  f.type = 'bandpass';
  f.Q.value = 1.2;
  f.frequency.setValueAtTime(300, t0 + 0.8 / sp);
  f.frequency.exponentialRampToValueAtTime(2600, t0 + 5.6 / sp);
  env(g, 0.8, 3.6, 0.1, 5);
  s.connect(f);
  f.connect(g);
  g.connect(master);
  if (off < 0.8) {
    s.start(t0 + 0.8 / sp);
    s.stop(t0 + 5.9 / sp);
  }
  // arcs: ascending D-major-pentatonic glass bells
  [587, 659, 784, 880, 988, 1175, 1319, 1568].forEach((hz, k) => bell(hz, 3.2 + k * 0.28, 0.16, 1.6));
  // monogram reveal: soft thum + warm bell chord
  sine(110, 55, 5.2, 0.01, 1.6, 0.6);
  [294, 440, 587].forEach((hz) => bell(hz, 5.2, 0.1, 3));
  // star: high twin bells
  bell(2349, 6.7, 0.12, 2.5);
  bell(3136, 6.85, 0.08, 2.5);
}
// @@END
export { playIntroSound };
