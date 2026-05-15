import { AnimatePresence, motion } from 'motion/react';

interface SpecDrawerProps {
  isOpen: boolean;
  car: any;
  onClose: () => void;
}

export default function SpecDrawer({ isOpen, car, onClose }: SpecDrawerProps) {
  if (!car) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 199,
              background: 'rgba(0,0,0,0.6)'
            }}
          />
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="spec-drawer"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '440px',
              height: '100vh',
              zIndex: 200,
              overflowY: 'auto'
            }}
          >
            <div style={{ padding: '40px' }}>
              <button
                onClick={onClose}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'none',
                  border: '1px solid rgba(240,240,240,0.12)',
                  color: 'white',
                  fontSize: '24px',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  fontFamily: 'inherit'
                }}
              >
                ×
              </button>

              <h2
                style={{
                  fontSize: '32px',
                  color: 'white',
                  marginBottom: '8px',
                  fontWeight: 400,
                  letterSpacing: '-0.01em'
                }}
              >
                {car.name}
              </h2>
              <p
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: 'rgba(240,240,240,0.5)',
                  marginBottom: '32px'
                }}
              >
                {car.tagline}
              </p>

              {car.fullSpecs.map((category: any, i: number) => (
                <div key={i} style={{ marginBottom: '32px' }}>
                  <h3
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.3em',
                      color: 'var(--accent)',
                      marginBottom: '16px',
                      paddingBottom: '8px',
                      borderBottom: '1px solid rgba(240,240,240,0.1)'
                    }}
                  >
                    {category.category}
                  </h3>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '12px'
                    }}
                  >
                    {category.specs.map((spec: any, idx: number) => (
                      <div key={idx}>
                        <div
                          style={{
                            fontSize: '8px',
                            letterSpacing: '0.25em',
                            color: 'rgba(240,240,240,0.4)',
                            marginBottom: '4px'
                          }}
                        >
                          {spec.label}
                        </div>
                        <div
                          style={{
                            fontSize: '11px',
                            letterSpacing: '0.1em',
                            color: '#f0f0f0'
                          }}
                        >
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
