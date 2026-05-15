export default function Footer() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }}>
      <video src="/media/Supercar_in_dark_tunnel_202605131703.mp4" autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.88) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 10, padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,96px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr', gap: '80px' }}>
          <div>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ marginBottom: '12px' }}>
              <path d="M2 14 L10 4 L18 14" stroke="#C6FF00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="6" y1="14" x2="14" y2="14" stroke="#C6FF00" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: '20px', color: 'white', letterSpacing: '0.28em' }}>VELOCE</span>
            <p style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(255,255,255,0.35)', marginTop: '16px' }}>SINCE 2008. THE ROAD IS YOURS.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(198,255,0,0.7)', marginBottom: '20px' }}>NAVIGATION</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Collection', 'Fleet', 'Membership', 'Academy', 'Journal'].map((link) => (
                <a key={link} href="#" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.3s' }}>
                  {link.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '8px', letterSpacing: '0.35em', color: 'rgba(198,255,0,0.7)', marginBottom: '20px' }}>SERVICES</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Private Rental', 'Corporate Events', 'Track Programme', 'Concierge', 'Press & Media'].map((link) => (
                <a key={link} href="#" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.3s' }}>
                  {link.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: '64px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.2)' }}>© 2025 VELOCE PRIVATE AUTOMOTIVE CLUB. ALL RIGHTS RESERVED.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}>PRIVACY POLICY</a>
            <a href="#" style={{ fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}>TERMS</a>
          </div>
        </div>
      </div>
    </section>
  );
}
