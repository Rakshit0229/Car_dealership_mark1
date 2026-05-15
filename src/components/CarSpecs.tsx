import { useState } from 'react';
import { motion } from 'motion/react';
import { cars } from '../data/cars';
import SpecDrawer from './SpecDrawer';

export default function CarSpecs({ onSpecOpen: _onSpecOpen }: { onSpecOpen: (car: any) => void }) {
  const [selectedCar, setSelectedCar] = useState<string | null>(null);

  return (
    <section style={{ backgroundColor: 'var(--bg-base)', padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: '#C6FF00' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(198,255,0,0.85)' }}>
            THE FLEET
          </span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(40px,6vw,80px)',
            color: '#f0f0f0',
            fontWeight: 400,
            lineHeight: 0.95,
            letterSpacing: '-0.01em'
          }}
        >
          THREE MACHINES.<br />
          ONE STANDARD.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px'
        }}
      >
        {cars.map((car, i) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="car-card"
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '4px',
              border: '1px solid rgba(240,240,240,0.06)',
              background: '#111111',
              cursor: 'pointer'
            }}
          >
            <div style={{ aspectRatio: '9/16', overflow: 'hidden', position: 'relative' }}>
              <video
                className="car-card-video"
                src={`/media/Car_Straight_0${car.id === 'apex-gt' ? '1' : car.id === 'obsidian-rs' ? '2' : '3'}.mp4`}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s var(--ease-luxury)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0,0,0,0.3)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '100px',
                  padding: '6px 14px',
                  fontSize: '8px',
                  letterSpacing: '0.3em',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.12)'
                }}
              >
                AVAILABLE
              </div>
              <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                <div
                  style={{
                    fontSize: '8px',
                    letterSpacing: '0.25em',
                    color: 'rgba(255,255,255,0.45)',
                    marginBottom: '4px'
                  }}
                >
                  {car.tagline}
                </div>
                <div
                  style={{
                    fontSize: '17px',
                    letterSpacing: '0.08em',
                    color: 'white'
                  }}
                >
                  {car.name}
                </div>
              </div>
            </div>

            <div style={{ background: '#111111', padding: '24px 24px 28px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '8px 4px',
                  marginBottom: '20px'
                }}
              >
                {car.quickSpecs.slice(0, 4).map((spec, idx) => (
                  <div key={idx}>
                    <div
                      style={{
                        fontSize: '8px',
                        letterSpacing: '0.25em',
                        color: 'rgba(240,240,240,0.35)',
                        marginBottom: '2px'
                      }}
                    >
                      {spec.split(' ')[0]}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        letterSpacing: '0.1em',
                        color: 'var(--accent)',
                        fontWeight: 400
                      }}
                    >
                      {spec.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => setSelectedCar(car.id)}
                  style={{
                    background: 'var(--accent)',
                    color: '#0a0a0a',
                    padding: '10px 0',
                    flex: 1,
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    textTransform: 'uppercase',
                    border: 'none'
                  }}
                >
                  QUICK SPECS
                </button>
                <button
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(240,240,240,0.3)',
                    color: 'rgba(240,240,240,0.4)',
                    padding: '10px 0',
                    flex: 1,
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    textTransform: 'uppercase'
                  }}
                >
                  FULL SHEET
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        style={{
          display: 'block',
          margin: '48px auto 0',
          background: 'var(--accent)',
          color: '#0a0a0a',
          padding: '14px 40px',
          fontSize: '10px',
          letterSpacing: '0.22em',
          borderRadius: '2px',
          cursor: 'pointer',
          fontFamily: 'inherit',
          textTransform: 'uppercase',
          border: 'none'
        }}
      >
        VIEW FULL FLEET
      </button>

      <SpecDrawer isOpen={selectedCar !== null} car={cars.find(c => c.id === selectedCar)} onClose={() => setSelectedCar(null)} />
    </section>
  );
}
