import { motion } from 'motion/react';

interface FleetVideoProps {
  videoSrc: string;
  name: string;
  specs: { label: string; value: string }[];
  delay: number;
  isOpen: boolean;
}

export default function FleetVideo({ videoSrc, name, specs, delay, isOpen }: FleetVideoProps) {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={isOpen ? { y: 0 } : { y: '100%' }}
      transition={{ duration: 0.9 + delay, ease: [0.19, 1, 0.22, 1] }}
      style={{
        width: '33.333%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0
      }}
    >
      <video
        src={videoSrc}
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
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 55%)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '40px'
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(28px,2.5vw,44px)',
            color: 'white',
            letterSpacing: '-0.01em',
            marginBottom: '20px',
            fontWeight: 400,
            lineHeight: 1.1
          }}
        >
          {name}
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
          }}
        >
          {specs.map((spec, i) => (
            <div key={i}>
              <div
                style={{
                  fontSize: '8px',
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.3em',
                  marginBottom: '4px'
                }}
              >
                {spec.label}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'white',
                  letterSpacing: '0.1em'
                }}
              >
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
