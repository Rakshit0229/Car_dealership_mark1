import { motion } from 'motion/react';

export default function BookingForm() {
  return (
    <section style={{ backgroundColor: 'var(--bg-base)', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '24px', height: '1px', background: '#C6FF00' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(198,255,0,0.85)' }}>PRIVATE RESERVATION</span>
          <div style={{ width: '24px', height: '1px', background: '#C6FF00' }} />
        </div>
        <h2 style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#f0f0f0', fontWeight: 400, lineHeight: 0.95 }}>BOOK A<br />MOMENT.</h2>
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto', background: '#111111', border: '1px solid rgba(240,240,240,0.06)', boxShadow: '0 4px 40px rgba(0,0,0,0.4)', borderRadius: '4px', padding: 'clamp(32px,5vw,56px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(240,240,240,0.45)', marginBottom: '6px', display: 'block' }}>FULL NAME</label>
            <input type="text" style={{ width: '100%', background: 'rgba(240,240,240,0.04)', border: '1px solid rgba(240,240,240,0.1)', color: '#f0f0f0', fontSize: '11px', letterSpacing: '0.12em', padding: '14px 16px', borderRadius: '2px', fontFamily: 'inherit' }} />
          </div>
          <div>
            <label style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(240,240,240,0.45)', marginBottom: '6px', display: 'block' }}>EMAIL ADDRESS</label>
            <input type="email" style={{ width: '100%', background: 'rgba(240,240,240,0.04)', border: '1px solid rgba(240,240,240,0.1)', color: '#f0f0f0', fontSize: '11px', letterSpacing: '0.12em', padding: '14px 16px', borderRadius: '2px', fontFamily: 'inherit' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(240,240,240,0.45)', marginBottom: '6px', display: 'block' }}>PHONE NUMBER</label>
            <input type="tel" style={{ width: '100%', background: 'rgba(240,240,240,0.04)', border: '1px solid rgba(240,240,240,0.1)', color: '#f0f0f0', fontSize: '11px', letterSpacing: '0.12em', padding: '14px 16px', borderRadius: '2px', fontFamily: 'inherit' }} />
          </div>
          <div>
            <label style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(240,240,240,0.45)', marginBottom: '6px', display: 'block' }}>PREFERRED VEHICLE</label>
            <select style={{ width: '100%', background: 'rgba(240,240,240,0.04)', border: '1px solid rgba(240,240,240,0.1)', color: '#f0f0f0', fontSize: '11px', letterSpacing: '0.12em', padding: '14px 16px', borderRadius: '2px', fontFamily: 'inherit' }}>
              <option>NO PREFERENCE</option>
              <option>APEX GT</option>
              <option>OBSIDIAN RS</option>
              <option>PHANTOM S</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(240,240,240,0.45)', marginBottom: '6px', display: 'block' }}>PICKUP LOCATION</label>
          <input type="text" style={{ width: '100%', background: 'rgba(240,240,240,0.04)', border: '1px solid rgba(240,240,240,0.1)', color: '#f0f0f0', fontSize: '11px', letterSpacing: '0.12em', padding: '14px 16px', borderRadius: '2px', fontFamily: 'inherit' }} />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(240,240,240,0.45)', marginBottom: '6px', display: 'block' }}>RENTAL DATES</label>
          <input type="text" placeholder="Please specify pickup and return dates" style={{ width: '100%', background: 'rgba(240,240,240,0.04)', border: '1px solid rgba(240,240,240,0.1)', color: '#f0f0f0', fontSize: '11px', letterSpacing: '0.12em', padding: '14px 16px', borderRadius: '2px', fontFamily: 'inherit' }} />
        </div>

        <div style={{ marginBottom: '8px' }}>
          <label style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(240,240,240,0.45)', marginBottom: '6px', display: 'block' }}>SPECIAL REQUESTS</label>
          <textarea rows={4} placeholder="Share any particular wishes or route preferences..." style={{ width: '100%', background: 'rgba(240,240,240,0.04)', border: '1px solid rgba(240,240,240,0.1)', color: '#f0f0f0', fontSize: '11px', letterSpacing: '0.12em', padding: '14px 16px', borderRadius: '2px', fontFamily: 'inherit', resize: 'none' }} />
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          style={{ width: '100%', background: 'var(--accent)', color: '#0a0a0a', padding: '16px', fontSize: '10px', letterSpacing: '0.25em', borderRadius: '2px', marginTop: '8px', cursor: 'pointer', border: 'none', fontFamily: 'inherit', textTransform: 'uppercase' }}
        >
          SUBMIT RESERVATION
        </motion.button>

        <p style={{ fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(240,240,240,0.3)', textAlign: 'center', marginTop: '16px' }}>
          ALL ENQUIRIES ARE HANDLED WITH THE STRICTEST CONFIDENCE.
        </p>
      </div>
    </section>
  );
}
