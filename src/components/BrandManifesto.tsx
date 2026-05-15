import { motion } from 'motion/react';

export default function BrandManifesto() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <video
        src="/media/Supercar_in_dark_tunnel_202605131703.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          minHeight: '100vh',
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.96, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card"
          style={{
            maxWidth: '520px',
            padding: 'clamp(36px,4vw,56px)',
            borderRadius: '4px',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(198,255,0,0.5)' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(198,255,0,0.85)' }}>
              THE VELOCE PHILOSOPHY
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(32px,4vw,64px)',
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              color: 'white',
              marginBottom: '32px'
            }}
          >
            PRIVATE ACCESS.<br />
            <em>OPEN ROADS.</em>
          </h2>

          <p
            style={{
              fontSize: '11px',
              lineHeight: 1.9,
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.55)'
            }}
          >
            WE CURATE MACHINES FOR THOSE WHO EXPECT PRECISION, POWER, AND PERFECTION IN EVERY DRIVE.
            SINCE 2008, THOSE WHO DEMAND THE FINEST HAVE TRUSTED ONE NAME.
          </p>

          <button
            style={{
              marginTop: '40px',
              padding: '14px 36px',
              background: 'rgba(198,255,0,0.08)',
              border: '1px solid rgba(198,255,0,0.25)',
              borderRadius: '2px',
              backdropFilter: 'blur(8px)',
              color: 'white',
              fontSize: '10px',
              letterSpacing: '0.25em',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(198,255,0,0.15)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(198,255,0,0.08)'; }}
          >
            OUR STORY
          </button>
        </motion.div>
      </div>
    </section>
  );
}
