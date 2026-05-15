import { AnimatePresence, motion } from 'motion/react';

interface AboutPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutPage({ isOpen, onClose }: AboutPageProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} style={{ position: 'fixed', inset: 0, zIndex: 200, backgroundColor: 'var(--bg-base)', overflowY: 'auto' }}>
          <div style={{ position: 'sticky', top: 0, zIndex: 10, height: '72px', backgroundColor: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(240,240,240,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(24px,6vw,80px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M2 14 L10 4 L18 14" stroke="#C6FF00" strokeWidth="1.8" /><line x1="6" y1="14" x2="14" y2="14" stroke="#C6FF00" strokeWidth="1.5" /></svg>
              <span style={{ fontSize: 14, letterSpacing: '0.28em', color: '#f0f0f0' }}>VELOCE</span>
              <span style={{ color: 'rgba(240,240,240,0.25)' }}>/</span>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(240,240,240,0.45)' }}>ABOUT</span>
            </div>
            <button onClick={onClose} style={{ padding: '9px 22px', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(240,240,240,0.55)', background: 'transparent', border: '1px solid rgba(240,240,240,0.1)', borderRadius: 100, cursor: 'pointer' }}>× CLOSE</button>
          </div>
          <div style={{ padding: 'clamp(48px,6vw,80px)' }}>
            <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#f0f0f0', fontWeight: 400, lineHeight: 0.95, marginBottom: '48px' }}>THE STORY<br />OF VELOCE.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
              <div>
                <p style={{ fontSize: '10px', lineHeight: 2, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>
                  Founded in 2008, VELOCE was born from a simple belief: that the world's most extraordinary driving experiences should be accessible to those who truly appreciate them.
                </p>
                <p style={{ fontSize: '10px', lineHeight: 2, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>
                  What began as a small collection of three vehicles has evolved into one of Europe's most exclusive private automotive clubs. Our fleet is curated with a single criterion: each car must represent the pinnacle of its class.
                </p>
                <p style={{ fontSize: '10px', lineHeight: 2, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)' }}>
                  Today, we serve members across three continents, offering not just vehicles, but complete experiences. From the Nürburgring to the Amalfi Coast, our journeys are designed to create memories that last a lifetime.
                </p>
              </div>
              <div style={{ background: '#111111', borderRadius: '4px', padding: '32px' }}>
                <div style={{ marginBottom: '32px' }}>
                  <span style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: '8px', display: 'block' }}>FOUNDED</span>
                  <span style={{ fontSize: '32px', color: 'white' }}>2008</span>
                </div>
                <div style={{ marginBottom: '32px' }}>
                  <span style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: '8px', display: 'block' }}>MEMBERS</span>
                  <span style={{ fontSize: '32px', color: 'white' }}>400+</span>
                </div>
                <div>
                  <span style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: '8px', display: 'block' }}>LOCATIONS</span>
                  <span style={{ fontSize: '32px', color: 'white' }}>12</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
