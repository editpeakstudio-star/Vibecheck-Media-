// @@START
// Simple, clean intro sound: soft swell, airy draw, one comet swoosh, glass-bell sparkle.
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
  const air = (f0: number, f1: number, t: number, a: number, dur: number, peak: number) => {
    if (t < off) return;
    const s = ctx.createBufferSource();
    const f = ctx.createBiquadFilter();
    const g = ctx.createGain();
    s.buffer = nb;
    s.loop = true;
    f.type = 'bandpass';
    f.Q.value = 1.4;
    f.frequency.setValueAtTime(f0, t0 + t / sp);
    f.frequency.exponentialRampToValueAtTime(f1, t0 + (t + dur) / sp);
    env(g, t, a, peak, dur);
    s.connect(f);
    f.connect(g);
    g.connect(master);
    s.start(t0 + t / sp);
    s.stop(t0 + (t + dur) / sp + 0.1);
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

  sine(60, 96, 0, 1.2, 3.4, 0.3); // soft swell under everything
  air(500, 3200, 0.25, 0.8, 1.1, 0.1); // outline drawing
  sine(130, 65, 1.1, 0.01, 0.9, 0.45); // letters fill: soft thum
  air(900, 6000, 1.5, 0.6, 0.9, 0.18); // swoosh sweep
  sine(500, 2200, 1.5, 0.8, 0.9, 0.07); // comet glide
  bell(2349, 2.3, 0.14, 2); // star pop
  bell(3136, 2.42, 0.09, 2);
  bell(1568, 2.5, 0.07, 1.6); // light sweep sparkle
}
// @@END
export { playIntroSound };
