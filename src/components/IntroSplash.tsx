import { useEffect, useState } from 'react';
import VibeCheckLogo from './VibeCheckLogo';

/** Total time the logo stays on screen after the tap (ms). */
const INTRO_MS = 5600;

export function IntroSplash({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const finish = () => {
    setLeaving(true);
    window.setTimeout(onDone, 700);
  };

  useEffect(() => {
    const id = window.setTimeout(finish, INTRO_MS);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#03030c',
        display: 'grid',
        placeItems: 'center',
        opacity: leaving ? 0 : 1,
        transition: 'opacity .7s ease',
        cursor: 'auto',
      }}
    >
      <VibeCheckLogo sound />
      {!leaving && (
        <button
          onClick={finish}
          style={{
            position: 'absolute',
            right: 16,
            top: 'max(16px, env(safe-area-inset-top))',
            padding: '6px 14px',
            borderRadius: 999,
            border: '1px solid rgba(167,139,250,.5)',
            background: 'transparent',
            color: '#c4b5fd',
            fontSize: 12,
          }}
        >
          Skip
        </button>
      )}
    </div>
  );
}
