import { AnimatePresence, motion } from 'motion/react';

interface MembershipPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MembershipPage({ isOpen, onClose }: MembershipPageProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} style={{ position: 'fixed', inset: 0, zIndex: 200, backgroundColor: 'var(--bg-base)', overflowY: 'auto' }}>
          <div style={{ position: 'sticky', top: 0, zIndex: 10, height: '72px', backgroundColor: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(240,240,240,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(24px,6vw,80px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M2 14 L10 4 L18 14" stroke="#C6FF00" strokeWidth="1.8" /><line x1="6" y1="14" x2="14" y2="14" stroke="#C6FF00" strokeWidth="1.5" /></svg>
              <span style={{ fontSize: 14, letterSpacing: '0.28em', color: '#f0f0f0' }}>VELOCE</span>
              <span style={{ color: 'rgba(240,240,240,0.25)' }}>/</span>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(240,240,240,0.45)' }}>MEMBERSHIP</span>
            </div>
            <button onClick={onClose} style={{ padding: '9px 22px', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(240,240,240,0.55)', background: 'transparent', border: '1px solid rgba(240,240,240,0.1)', borderRadius: 100, cursor: 'pointer' }}>× CLOSE</button>
          </div>
          <div style={{ padding: 'clamp(48px,6vw,80px)' }}>
            <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#f0f0f0', fontWeight: 400, lineHeight: 0.95, marginBottom: '48px' }}>BECOME A<br />MEMBER.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
              {[
                { name: 'ESSENTIAL', price: '£2,500/YEAR', features: ['5 Days Vehicle Access', 'Standard Fleet', 'Digital Concierge'] },
                { name: 'SIGNATURE', price: '£7,500/YEAR', features: ['15 Days Vehicle Access', 'Full Fleet Access', '24/7 Concierge', 'Track Programme'] },
                { name: 'VELOCE CLUB', price: '£15,000/YEAR', features: ['Unlimited Vehicle Access', 'Priority Booking', 'Private Events', 'Global Delivery', 'Personal Chauffeur'] }
              ].map((tier, i) => (
                <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ background: '#111111', borderRadius: '4px', padding: '32px', border: i === 2 ? '1px solid var(--accent)' : '1px solid rgba(240,240,240,0.07)' }}>
                  <span style={{ fontSize: '8px', letterSpacing: '0.3em', color: i === 2 ? 'var(--accent)' : 'rgba(240,240,240,0.4)', marginBottom: '16px', display: 'block' }}>{tier.name}</span>
                  <div style={{ fontSize: '24px', color: 'white', marginBottom: '24px' }}>{tier.price}</div>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {tier.features.map((feature, j) => (
                      <li key={j} style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(240,240,240,0.5)', marginBottom: '12px', paddingLeft: '16px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button style={{ width: '100%', padding: '12px', fontSize: '9px', letterSpacing: '0.2em', background: i === 2 ? 'var(--accent)' : 'transparent', color: i === 2 ? '#0a0a0a' : 'rgba(240,240,240,0.6)', border: i === 2 ? 'none' : '1px solid rgba(240,240,240,0.15)', borderRadius: '2px', cursor: 'pointer', marginTop: '24px' }}>APPLY NOW</button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
