import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="glass-mid"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 999,
          borderRadius: '4px',
          padding: '20px 24px',
          maxWidth: '320px',
          background: 'var(--glass-dark-mid)',
          backdropFilter: 'blur(32px) saturate(180%) brightness(1.1)',
          border: '1px solid var(--glass-dark-border-mid)'
        }}
      >
        <p style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
          THIS SITE USES COOKIES TO IMPROVE YOUR EXPERIENCE.
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setVisible(false)}
            style={{
              background: 'var(--accent)',
              color: '#0a0a0a',
              fontSize: '8px',
              padding: '8px 16px',
              borderRadius: '2px',
              cursor: 'pointer',
              border: 'none',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
              letterSpacing: '0.2em'
            }}
          >
            ACCEPT
          </button>
          <button
            onClick={() => setVisible(false)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.18)',
              color: 'rgba(255,255,255,0.65)',
              fontSize: '8px',
              padding: '8px 16px',
              borderRadius: '2px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
              letterSpacing: '0.2em'
            }}
          >
            DECLINE
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
