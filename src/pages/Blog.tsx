import { AnimatePresence, motion } from 'motion/react';

interface BlogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Blog({ isOpen, onClose }: BlogProps) {
  const articles = [
    { title: 'THE NÜRBURGRING DIARIES', category: 'TRACK', date: 'MARCH 2025', excerpt: 'Seven days, twelve laps, and the ultimate test of machine and driver.' },
    { title: 'ON EMPTY ROADS', category: 'JOURNEY', date: 'FEBRUARY 2025', excerpt: 'Finding solitude on the forgotten highways of northern Scotland.' },
    { title: 'THE ALPS REWRITTEN', category: 'JOURNEY', date: 'JANUARY 2025', excerpt: 'Winter driving through the most demanding mountain passes in Europe.' },
    { title: 'AERODYNAMICS IN THE AGE OF SILENCE', category: 'TECHNICAL', date: 'DECEMBER 2024', excerpt: 'How electric supercars are redefining the physics of speed.' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: 'var(--bg-base)',
            overflowY: 'auto'
          }}
        >
          <div style={{ position: 'sticky', top: 0, zIndex: 10, height: '72px', backgroundColor: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(24px) saturate(180%)', borderBottom: '1px solid rgba(240,240,240,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(24px,6vw,80px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M2 14 L10 4 L18 14" stroke="#C6FF00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><line x1="6" y1="14" x2="14" y2="14" stroke="#C6FF00" strokeWidth="1.5" strokeLinecap="round" /></svg>
              <span style={{ fontSize: 'clamp(14px,1.5vw,16px)', letterSpacing: '0.28em', color: '#f0f0f0' }}>VELOCE</span>
              <span style={{ color: 'rgba(240,240,240,0.25)', fontSize: 12 }}>/</span>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(240,240,240,0.45)' }}>JOURNAL</span>
            </div>
            <button onClick={onClose} style={{ padding: '9px 22px', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(240,240,240,0.55)', background: 'transparent', border: '1px solid rgba(240,240,240,0.1)', borderRadius: 100, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.3s ease' }}>× CLOSE</button>
          </div>

          <div style={{ padding: 'clamp(48px,6vw,80px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '480px', marginBottom: 0 }}>
              <div style={{ background: 'linear-gradient(135deg, #0a0a0a, #1a1a0a)', padding: 'clamp(48px,6vw,80px)' }}>
                <span style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: '16px', display: 'block' }}>FEATURED</span>
                <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)', marginBottom: '24px', display: 'block' }}>MARCH 2025</span>
                <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.2)', marginBottom: '24px' }} />
                <h2 style={{ fontSize: 'clamp(28px,3.5vw,48px)', color: 'white', fontWeight: 400, lineHeight: 1.1, marginBottom: '24px' }}>THE NÜRBURGRING<br />DIARIES</h2>
                <p style={{ fontSize: '11px', lineHeight: 1.9, color: 'rgba(255,255,255,0.5)', maxWidth: '400px' }}>Seven days, twelve laps, and the ultimate test of machine and driver on the most challenging circuit in the world.</p>
              </div>
              <div style={{ background: '#111111', padding: 'clamp(48px,6vw,80px)' }}>
                <p style={{ fontStyle: 'italic', fontSize: '14px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>"The Nordschleife doesn't forgive. It doesn't negotiate. It simply demands your absolute best, every single second."</p>
                <a href="#" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent)', textDecoration: 'none' }}>CONTINUE READING →</a>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', padding: 'clamp(40px,5vw,64px)' }}>
              {articles.map((article, i) => (
                <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ background: '#111111', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '180px', background: 'linear-gradient(135deg, #0d1a0d 0%, #1a2e0a 100%)', position: 'relative', padding: '20px' }}>
                    <span style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(198,255,0,0.8)', position: 'absolute', top: '20px', left: '20px' }}>{article.category}</span>
                    <span style={{ fontSize: '24px', color: 'rgba(255,255,255,0.1)', position: 'absolute', bottom: '20px', right: '20px' }}>0{i + 1}</span>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(240,240,240,0.4)', marginBottom: '8px', display: 'block' }}>{article.date}</span>
                    <h3 style={{ fontSize: '16px', color: 'white', marginBottom: '12px', fontWeight: 400 }}>{article.title}</h3>
                    <p style={{ fontSize: '10px', lineHeight: 1.8, color: 'rgba(240,240,240,0.5)', marginBottom: '16px' }}>{article.excerpt}</p>
                    <a href="#" style={{ fontSize: '9px', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '0.15em' }}>READ MORE →</a>
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
