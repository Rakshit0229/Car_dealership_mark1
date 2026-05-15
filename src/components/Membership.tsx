import { motion } from 'motion/react';

export default function Membership() {
  return (
    <section style={{ backgroundColor: 'var(--bg-surface)', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: '#C6FF00' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(198,255,0,0.85)' }}>MEMBERSHIP</span>
        </div>
        <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#f0f0f0', fontWeight: 400, lineHeight: 0.95 }}>SELECT YOUR TIER.</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="card" style={{ padding: '32px' }}>
            <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(240,240,240,0.4)', marginBottom: '8px' }}>ESSENTIAL</div>
            <div style={{ fontSize: '9px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '16px' }}>ENTRY LEVEL</div>
            <div style={{ fontSize: '40px', color: '#f0f0f0', fontWeight: 400, marginBottom: '4px' }}>£18,000</div>
            <div style={{ fontSize: '9px', color: 'rgba(240,240,240,0.4)', marginBottom: '24px' }}>PER YEAR</div>
            <div style={{ fontSize: '10px', lineHeight: 1.8, color: 'rgba(240,240,240,0.6)', marginBottom: '24px' }}>
              PRIORITY VEHICLE ACCESS · TRACK DAY DISCOUNTS · CONCIERGE HOTLINE · 2 GUEST PASSES / YEAR
            </div>
            <button style={{ background: 'var(--accent)', color: '#0a0a0a', padding: '12px', width: '100%', fontSize: '9px', letterSpacing: '0.2em', borderRadius: '2px', cursor: 'pointer', border: 'none', fontFamily: 'inherit', textTransform: 'uppercase' }}>APPLY NOW</button>
          </div>

          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="card-accent" style={{ padding: '32px' }}>
            <div style={{ background: 'var(--accent)', color: '#0a0a0a', fontSize: '8px', letterSpacing: '0.3em', padding: '4px 12px', borderRadius: '2px', marginBottom: '16px', display: 'inline-block' }}>MOST POPULAR</div>
            <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(240,240,240,0.4)', marginBottom: '8px' }}>VELOCE CLUB</div>
            <div style={{ fontSize: '9px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '16px' }}>MOST POPULAR</div>
            <div style={{ fontSize: '40px', color: 'var(--accent)', fontWeight: 400, marginBottom: '4px' }}>£45,000</div>
            <div style={{ fontSize: '9px', color: 'rgba(240,240,240,0.4)', marginBottom: '24px' }}>PER YEAR</div>
            <div style={{ fontSize: '10px', lineHeight: 1.8, color: 'rgba(240,240,240,0.6)', marginBottom: '24px' }}>
              UNLIMITED VEHICLE ACCESS · TRACK PROGRAMME · PERSONAL CONCIERGE · 8 GUEST PASSES / YEAR
            </div>
            <button style={{ background: 'var(--accent)', color: '#0a0a0a', padding: '12px', width: '100%', fontSize: '9px', letterSpacing: '0.2em', borderRadius: '2px', cursor: 'pointer', border: 'none', fontFamily: 'inherit', textTransform: 'uppercase' }}>APPLY NOW</button>
          </motion.div>

          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.16 }} className="card" style={{ padding: '32px' }}>
            <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(240,240,240,0.4)', marginBottom: '8px' }}>FOUNDERS' CIRCLE</div>
            <div style={{ fontSize: '9px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '16px' }}>INVITATION ONLY</div>
            <div style={{ fontSize: '40px', color: '#f0f0f0', fontWeight: 400, marginBottom: '4px' }}>BY INVITATION</div>
            <div style={{ fontSize: '9px', color: 'rgba(240,240,240,0.4)', marginBottom: '24px' }} />
            <div style={{ fontSize: '10px', lineHeight: 1.8, color: 'rgba(240,240,240,0.6)', marginBottom: '24px' }}>
              EXCLUSIVE FLEET ACCESS · GLOBAL CONCIERGE · PRIVATE EVENTS · UNLIMITED GUESTS
            </div>
            <button style={{ background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)', padding: '12px', width: '100%', fontSize: '9px', letterSpacing: '0.2em', borderRadius: '2px', cursor: 'pointer', fontFamily: 'inherit', textTransform: 'uppercase' }}>ENQUIRE</button>
          </motion.div>
        </div>

        <div style={{ position: 'sticky', top: '120px' }}>
          <video src="/videos/interior-tour.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '560px', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 40%, transparent 80%)', padding: '32px' }}>
            <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(198,255,0,0.85)', marginBottom: '8px' }}>APEX GT — MAIN CABIN</div>
            <p style={{ fontSize: '11px', lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', maxWidth: '280px', marginBottom: '20px' }}>
              Hand-stitched leather meets precision engineering. Every surface crafted for the discerning driver.
            </p>
            <button className="glass-mid" style={{ padding: '12px 28px', color: 'white', fontSize: '9px', letterSpacing: '0.2em', cursor: 'pointer', border: 'none', borderRadius: '4px', fontFamily: 'inherit', textTransform: 'uppercase' }}>APPLY FOR MEMBERSHIP</button>
          </div>
        </div>
      </div>
    </section>
  );
}
