import { AnimatePresence, motion } from 'motion/react';

interface JourneysPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JourneysPage({ isOpen, onClose }: JourneysPageProps) {
  const journeys = [
    { title: 'THE ALPS REWRITTEN', distance: '1,200 KM', duration: '7 DAYS', image: '/videos/journey-alps.mp4' },
    { title: 'NORDIC SOLITUDE', distance: '2,400 KM', duration: '12 DAYS', image: '/videos/journey-nordic.mp4' },
    { title: 'THE MEDITERRANEAN COAST', distance: '1,800 KM', duration: '9 DAYS', image: '/videos/journey-med.mp4' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} style={{ position: 'fixed', inset: 0, zIndex: 200, backgroundColor: 'var(--bg-base)', overflowY: 'auto' }}>
          <div style={{ position: 'sticky', top: 0, zIndex: 10, height: '72px', backgroundColor: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(240,240,240,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(24px,6vw,80px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M2 14 L10 4 L18 14" stroke="#C6FF00" strokeWidth="1.8" /><line x1="6" y1="14" x2="14" y2="14" stroke="#C6FF00" strokeWidth="1.5" /></svg>
              <span style={{ fontSize: 14, letterSpacing: '0.28em', color: '#f0f0f0' }}>VELOCE</span>
              <span style={{ color: 'rgba(240,240,240,0.25)' }}>/</span>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(240,240,240,0.45)' }}>JOURNEYS</span>
            </div>
            <button onClick={onClose} style={{ padding: '9px 22px', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(240,240,240,0.55)', background: 'transparent', border: '1px solid rgba(240,240,240,0.1)', borderRadius: 100, cursor: 'pointer' }}>× CLOSE</button>
          </div>
          <div style={{ padding: 'clamp(48px,6vw,80px)' }}>
            <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#f0f0f0', fontWeight: 400, lineHeight: 0.95, marginBottom: '48px' }}>CURATED ROUTES.<br />UNFORGETTABLE<br />DRIVES.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
              {journeys.map((journey, i) => (
                <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} style={{ background: '#111111', borderRadius: '4px', overflow: 'hidden', height: '400px', position: 'relative' }}>
                  <video src={journey.image} autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px' }}>
                    <h3 style={{ fontSize: '28px', color: 'white', marginBottom: '12px' }}>{journey.title}</h3>
                    <div style={{ display: 'flex', gap: '24px' }}>
                      <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)' }}>{journey.distance}</span>
                      <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)' }}>{journey.duration}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
