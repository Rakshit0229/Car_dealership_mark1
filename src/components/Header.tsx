import { useEffect, useRef, useState } from 'react';

export default function Header({ onMenuToggle: _onMenuToggle, onBlogOpen, onFleetOpen, onJourneysOpen, onMembershipOpen, onAboutOpen }: { onMenuToggle: () => void; onBlogOpen: () => void; onFleetOpen: () => void; onJourneysOpen: () => void; onMembershipOpen: () => void; onAboutOpen: () => void }) {
  const pillRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'COLLECTION', onClick: onJourneysOpen },
    { label: 'FLEET', onClick: onFleetOpen },
    { label: 'MEMBERSHIP', onClick: onMembershipOpen },
    { label: 'ABOUT US', onClick: onAboutOpen },
    { label: 'JOURNAL', onClick: onBlogOpen },
  ];

  return (
    <div ref={pillRef} className={`navbar-pill ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo Section */}
      <div style={{ borderRight: '1px solid rgba(240,240,240,0.08)', padding: '0 20px 0 14px', height: '100%', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M2 14 L10 4 L18 14" stroke="#C6FF00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="6" y1="14" x2="14" y2="14" stroke="#C6FF00" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: '16px', letterSpacing: '0.28em', color: '#f0f0f0' }}>VELOCE</span>
      </div>

      {/* Nav Links */}
      {navLinks.map((link) => (
        <a
          key={link.label}
          href="#"
          onClick={(e) => { e.preventDefault(); link.onClick(); }}
          style={{
            padding: '0 16px',
            height: '100%',
            fontSize: '10px',
            letterSpacing: '0.18em',
            color: 'rgba(240,240,240,0.45)',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#f0f0f0'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(240,240,240,0.45)'; }}
        >
          {link.label}
        </a>
      ))}

      {/* Reserve Now Button */}
      <button
        style={{
          padding: '9px 22px',
          flexShrink: 0,
          background: '#C6FF00',
          borderRadius: '100px',
          fontSize: '10px',
          color: '#0a0a0a',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
          transform: 'none',
          transition: 'background 0.3s ease, transform 0.3s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#d4ff33'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = '#C6FF00'; }}
      >
        RESERVE NOW
      </button>
    </div>
  );
}
