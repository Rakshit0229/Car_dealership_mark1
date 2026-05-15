import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  fleetOpen: boolean;
  menuOpen: boolean;
}

export default function Hero({ fleetOpen, menuOpen }: HeroProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.96,
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  return (
    <>
      {/* FIXED VIDEO BACKGROUND */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          filter: fleetOpen ? 'blur(100px)' : 'blur(0px)',
          transition: fleetOpen ? 'filter 1.56s cubic-bezier(0.19,1,0.22,1)' : 'filter 1.3s cubic-bezier(0.19,1,0.22,1)'
        }}
      >
        <video
          src="/media/homepage.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.6) 100%)'
          }}
        />
      </div>

      {/* HERO TEXT BLOCK */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={fleetOpen ? 'hidden' : 'visible'}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 20,
          pointerEvents: 'none',
          opacity: scrolled ? 0 : 1,
          transition: 'opacity 0.5s ease'
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: 'clamp(24px, 6vw, 96px)',
            transform: 'translateY(-52%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            maxWidth: 'clamp(340px, 48vw, 640px)'
          }}
        >
          {/* Eyebrow */}
          <motion.div variants={textVariants} style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '28px', height: '1px', background: 'rgba(198,255,0,0.6)' }} />
            <span style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'rgba(255,255,255,0.6)' }}>
              PREMIUM AUTOMOTIVE · EST. 2008
            </span>
          </motion.div>

          {/* Headline - 4 lines */}
          <div style={{ overflow: 'hidden' }}>
            <motion.div variants={textVariants} style={{ fontSize: 'clamp(48px, 9.5vw, 130px)', fontWeight: 400, lineHeight: 0.91, letterSpacing: '-0.01em', textTransform: 'uppercase', color: 'white', textShadow: '0 4px 32px rgba(0,0,0,0.5)', fontStyle: 'normal' }}>
              THE ROAD
            </motion.div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.div variants={textVariants} style={{ fontSize: 'clamp(48px, 9.5vw, 130px)', fontWeight: 400, lineHeight: 0.91, letterSpacing: '-0.01em', textTransform: 'uppercase', color: 'white', textShadow: '0 4px 32px rgba(0,0,0,0.5)', fontStyle: 'italic' }}>
              IS YOURS.
            </motion.div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.div variants={textVariants} style={{ fontSize: 'clamp(48px, 9.5vw, 130px)', fontWeight: 400, lineHeight: 0.91, letterSpacing: '-0.01em', textTransform: 'uppercase', color: 'white', textShadow: '0 4px 32px rgba(0,0,0,0.5)', fontStyle: 'normal' }}>
              DRIVE IT
            </motion.div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.div variants={textVariants} style={{ fontSize: 'clamp(48px, 9.5vw, 130px)', fontWeight: 400, lineHeight: 0.91, letterSpacing: '-0.01em', textTransform: 'uppercase', color: 'white', textShadow: '0 4px 32px rgba(0,0,0,0.5)', fontStyle: 'italic' }}>
              NOW.
            </motion.div>
          </div>

          {/* Subtext */}
          <motion.div
            variants={textVariants}
            style={{
              marginTop: '28px',
              fontSize: 'clamp(10px,1vw,11px)',
              letterSpacing: '0.2em',
              maxWidth: '340px',
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.55)',
              textShadow: '0 2px 8px rgba(0,0,0,0.4)'
            }}
          >
            A PRIVATE WORLD ON OPEN TARMAC. CURATED SUPERCARS, THREE EXTRAORDINARY MODELS,
            AND A CIRCLE OF MEMBERS WHO UNDERSTAND THAT TRUE PERFORMANCE HAS NO LIMIT.
          </motion.div>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      {!scrolled && (
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.15)', position: 'relative', overflow: 'hidden' }}>
            <div className="scroll-dot" style={{ width: '3px', height: '3px', background: 'rgba(198,255,0,0.7)', borderRadius: '50%', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }} />
          </div>
          <span style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)' }}>SCROLL</span>
        </div>
      )}

      {/* RESERVE NOW STICKY BUTTON */}
      <button
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 50,
          transform: menuOpen ? 'translateX(calc(-1 * clamp(260px,38vw,420px)))' : fleetOpen ? 'translateX(200px)' : 'none',
          opacity: fleetOpen ? 0 : 1,
          background: 'var(--glass-dark-mid)',
          padding: 'clamp(12px,1.2vw,16px) clamp(24px,3vw,40px)',
          fontSize: 'clamp(11px,1vw,14px)',
          letterSpacing: '0.2em',
          color: 'white',
          backdropFilter: 'blur(32px) saturate(180%) brightness(1.1)',
          border: '1px solid var(--glass-dark-border-mid)',
          cursor: 'pointer',
          fontFamily: 'inherit',
          textTransform: 'uppercase',
          borderRadius: '4px',
          transition: 'transform 0.5s cubic-bezier(0.19,1,0.22,1), opacity 0.3s ease'
        }}
      >
        RESERVE A CAR
      </button>
    </>
  );
}
